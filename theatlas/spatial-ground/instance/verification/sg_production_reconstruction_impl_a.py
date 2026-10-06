from fractions import Fraction
import json, hashlib, sys
from pathlib import Path

base=Path(sys.argv[1])
fsf_path=base/"SG_World_Production_SCPE_01.fsf-cjson.json"
sg_path=base/"SG_World_Ground_Definition_01.sg-cjson.json"
ref_path=base/"FSF_World_SCPE_Production_Reference_0001.json"

def no_dupes(pairs):
    d={}
    for k,v in pairs:
        if k in d: raise ValueError("duplicate key")
        d[k]=v
    return d

fsf=json.loads(fsf_path.read_text(encoding="utf-8"), object_pairs_hook=no_dupes)
sg=json.loads(sg_path.read_text(encoding="utf-8"), object_pairs_hook=no_dupes)
ref=json.loads(ref_path.read_text(encoding="utf-8"), object_pairs_hook=no_dupes)

assert fsf["type"]=="fsf.scpe"
assert len(fsf["vertices"])==128
assert sg["type"]=="bitpangea.spatial-ground.definition"
assert sg["format"]=="SG-CJSON-1.0"
assert sg["model"]=="CMPM-1.0"
assert sg["specification"]=="SG-SPEC-1.0"
assert sg["fsf"]=={"lineage":"FSF-SPEC","specification":"FSF-SPEC-1.0"} or sg["fsf"]=={"specification":"FSF-SPEC-1.0","lineage":"FSF-SPEC"}
assert sg["limit_convention"]=="closed-world-space"
assert sg["expression"]["op"]=="fsf"
assert sg["expression"]["value"]==ref["record"]

actual=hashlib.sha256(fsf_path.read_bytes()).hexdigest()
assert actual==ref["integrity"]["digest_hex"]

def crpc(o):
    n=int(o["n"]); d=int(o["d"])
    if d<=0: raise ValueError("bad denominator")
    f=Fraction(n,d)
    if str(f.numerator)!=o["n"] or str(f.denominator)!=o["d"]:
        raise ValueError("noncanonical CRPC")
    return f

pts=[(crpc(v["x"]),crpc(v["y"])) for v in fsf["vertices"]]
D=Fraction(1000000)

def orient(a,b,c):
    return (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])

def onseg(a,b,p):
    return orient(a,b,p)==0 and min(a[0],b[0])<=p[0]<=max(a[0],b[0]) and min(a[1],b[1])<=p[1]<=max(a[1],b[1])

def classify(p):
    x,y=p
    if not (-D<=x<=D and -D<=y<=D):
        return "INVALID_INPUT"
    n=len(pts)
    for i in range(n):
        if onseg(pts[i],pts[(i+1)%n],p):
            return "WORLD"
    inside=False
    for i in range(n):
        a=pts[i]; b=pts[(i+1)%n]
        # exact half-open ray crossing to +x
        if (a[1] > y) != (b[1] > y):
            xint = a[0] + (y-a[1])*(b[0]-a[0])/(b[1]-a[1])
            if xint > x:
                inside=not inside
    return "WORLD" if inside else "NON_WORLD"

tests={
    "origin": (Fraction(0),Fraction(0)),
    "canonical_start_vertex": pts[0],
    "first_edge_midpoint": ((pts[0][0]+pts[1][0])/2,(pts[0][1]+pts[1][1])/2),
    "east_valid_nonworld": (Fraction(490000),Fraction(0)),
    "north_valid_nonworld": (Fraction(0),Fraction(490000)),
    "valid_survey_outer_nonworld": (Fraction(750000),Fraction(0)),
    "invalid_survey": (Fraction(1000001),Fraction(0)),
}
results={k:classify(v) for k,v in tests.items()}
expected={
    "origin":"WORLD",
    "canonical_start_vertex":"WORLD",
    "first_edge_midpoint":"WORLD",
    "east_valid_nonworld":"NON_WORLD",
    "north_valid_nonworld":"NON_WORLD",
    "valid_survey_outer_nonworld":"NON_WORLD",
    "invalid_survey":"INVALID_INPUT",
}
assert results==expected, (results,expected)

# geometry checks
area2=sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(pts,pts[1:]+pts[:1]))
assert area2>0
assert len(set(pts))==128
assert all(-D<=x<=D and -D<=y<=D for x,y in pts)

out={"implementation":"SG-PROD-RECON-PY-1.0","result":"PASS","tests":results,"vertex_count":128,
     "fsf_sha256":actual,"sg_sha256":hashlib.sha256(sg_path.read_bytes()).hexdigest()}
print(json.dumps(out,sort_keys=True,separators=(",",":")))
