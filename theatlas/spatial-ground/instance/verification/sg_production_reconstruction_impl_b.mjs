import fs from "fs";
import crypto from "crypto";

const base=process.argv[2];
const read=(n)=>fs.readFileSync(base+"/"+n);
const fsf=JSON.parse(read("SG_World_Production_SCPE_01.fsf-cjson.json").toString("utf8"));
const sg=JSON.parse(read("SG_World_Ground_Definition_01.sg-cjson.json").toString("utf8"));
const ref=JSON.parse(read("FSF_World_SCPE_Production_Reference_0001.json").toString("utf8"));

function gcd(a,b){a=a<0n?-a:a;b=b<0n?-b:b;while(b){let t=a%b;a=b;b=t;}return a;}
function frac(n,d=1n){if(d===0n)throw Error("zero denominator");if(d<0n){n=-n;d=-d;}let g=gcd(n,d);return [n/g,d/g];}
function parseC(o){let n=BigInt(o.n),d=BigInt(o.d);let f=frac(n,d);if(f[0].toString()!==o.n||f[1].toString()!==o.d)throw Error("noncanonical");return f;}
function add(a,b){return frac(a[0]*b[1]+b[0]*a[1],a[1]*b[1]);}
function sub(a,b){return frac(a[0]*b[1]-b[0]*a[1],a[1]*b[1]);}
function mul(a,b){return frac(a[0]*b[0],a[1]*b[1]);}
function div(a,b){return frac(a[0]*b[1],a[1]*b[0]);}
function cmp(a,b){let z=a[0]*b[1]-b[0]*a[1];return z<0n?-1:z>0n?1:0;}
const F=(n)=>frac(BigInt(n));
const pts=fsf.vertices.map(v=>[parseC(v.x),parseC(v.y)]);
const D=F(1000000);
function orient(a,b,c){return sub(mul(sub(b[0],a[0]),sub(c[1],a[1])),mul(sub(b[1],a[1]),sub(c[0],a[0])));}
function between(a,b,p){return cmp(p,a)>=0&&cmp(p,b)<=0||cmp(p,b)>=0&&cmp(p,a)<=0;}
function onseg(a,b,p){return cmp(orient(a,b,p),F(0))===0&&between(a[0],b[0],p[0])&&between(a[1],b[1],p[1]);}
function classify(p){
  if(cmp(p[0],[-D[0],D[1]])<0||cmp(p[0],D)>0||cmp(p[1],[-D[0],D[1]])<0||cmp(p[1],D)>0)return "INVALID_INPUT";
  for(let i=0;i<pts.length;i++)if(onseg(pts[i],pts[(i+1)%pts.length],p))return "WORLD";
  let inside=false;
  for(let i=0;i<pts.length;i++){
    let a=pts[i],b=pts[(i+1)%pts.length];
    let cond=(cmp(a[1],p[1])>0)!=(cmp(b[1],p[1])>0);
    if(cond){
      let xint=add(a[0],div(mul(sub(p[1],a[1]),sub(b[0],a[0])),sub(b[1],a[1])));
      if(cmp(xint,p[0])>0)inside=!inside;
    }
  }
  return inside?"WORLD":"NON_WORLD";
}
if(fsf.type!=="fsf.scpe"||pts.length!==128)throw Error("bad FSF");
if(sg.type!=="bitpangea.spatial-ground.definition"||sg.format!=="SG-CJSON-1.0"||sg.model!=="CMPM-1.0"||sg.specification!=="SG-SPEC-1.0")throw Error("bad SG");
if(sg.fsf.specification!=="FSF-SPEC-1.0"||sg.fsf.lineage!=="FSF-SPEC"||sg.limit_convention!=="closed-world-space"||sg.expression.op!=="fsf"||sg.expression.value!==ref.record)throw Error("bad linkage");
const digest=crypto.createHash("sha256").update(read("SG_World_Production_SCPE_01.fsf-cjson.json")).digest("hex");
if(digest!==ref.integrity.digest_hex)throw Error("integrity mismatch");
const midpoint=(a,b)=>[div(add(a[0],b[0]),F(2)),div(add(a[1],b[1]),F(2))];
const tests={
 origin:[F(0),F(0)],
 canonical_start_vertex:pts[0],
 first_edge_midpoint:midpoint(pts[0],pts[1]),
 east_valid_nonworld:[F(490000),F(0)],
 north_valid_nonworld:[F(0),F(490000)],
 valid_survey_outer_nonworld:[F(750000),F(0)],
 invalid_survey:[F(1000001),F(0)]
};
let results={};for(const [k,v] of Object.entries(tests))results[k]=classify(v);
const expected={origin:"WORLD",canonical_start_vertex:"WORLD",first_edge_midpoint:"WORLD",east_valid_nonworld:"NON_WORLD",north_valid_nonworld:"NON_WORLD",valid_survey_outer_nonworld:"NON_WORLD",invalid_survey:"INVALID_INPUT"};
if(JSON.stringify(results)!==JSON.stringify(expected))throw Error(JSON.stringify(results));
const out={implementation:"SG-PROD-RECON-JS-1.0",result:"PASS",tests:results,vertex_count:128,fsf_sha256:digest,sg_sha256:crypto.createHash("sha256").update(read("SG_World_Ground_Definition_01.sg-cjson.json")).digest("hex")};
console.log(JSON.stringify(out));
