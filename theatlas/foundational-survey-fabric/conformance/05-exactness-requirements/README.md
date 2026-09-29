<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Exactness Requirements | Foundational Survey Fabric Conformance | BitPangea</title>

<link href="/assets/favicon.svg" rel="icon" type="image/svg+xml"/>
<link href="/assets/favicon.svg" rel="shortcut icon"/>
<link href="/assets/css/bitpangea-framework.css" rel="stylesheet"/>
<script defer src="/assets/js/bitpangea-framework.js"></script>

<meta name="description" content="Exactness Requirements — Conformance Section 05 for the BitPangea Foundational Survey Fabric."/>
<meta name="theme-color" content="#00c8d7"/>
<meta name="robots" content="index,follow"/>
<link rel="canonical" href="https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/"/>

<meta property="og:title" content="Exactness Requirements | BitPangea"/>
<meta property="og:description" content="Conformance Section 05 for the Foundational Survey Fabric."/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/"/>
<meta property="og:site_name" content="BitPangea"/>

<style>




*{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;min-height:100%;background:#02050a;color:#fff;font-family:Arial,Helvetica,sans-serif}
body{position:relative;line-height:1.75;overflow-x:hidden;background:#02050a}
body::before{content:"";position:fixed;inset:0;background-image:linear-gradient(rgba(2,5,10,.78),rgba(2,5,10,.90)),url("/images/bitpangea.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-2;pointer-events:none}
body::after{content:"";position:fixed;inset:0;background:radial-gradient(circle at 75% 12%,rgba(0,200,215,.10),transparent 34%),radial-gradient(circle at 18% 18%,rgba(212,169,56,.10),transparent 32%),linear-gradient(90deg,rgba(0,0,0,.60),rgba(0,0,0,.25),rgba(0,0,0,.64));z-index:-1;pointer-events:none}
.page{width:100%;padding:150px 28px 90px}
.container{max-width:1040px;margin:0 auto;padding:54px 58px 64px;background:rgba(0,0,0,.48);border:1px solid rgba(212,169,56,.16);box-shadow:0 0 60px rgba(0,0,0,.55);backdrop-filter:blur(4px)}
.eyebrow{color:#00c8d7;letter-spacing:4px;text-transform:uppercase;font-size:12px;margin-bottom:20px}
.arch-header{display:flex;align-items:center;gap:28px;margin-bottom:20px}
.arch-mark{width:230px;height:230px;flex-shrink:0;opacity:.96}
.arch-title{display:flex;flex-direction:column}
h1{color:#fff;font-size:clamp(32px,4.5vw,52px);line-height:1.02;letter-spacing:5px;text-transform:uppercase;margin-bottom:14px;text-shadow:0 0 22px rgba(0,0,0,.9)}
.subtitle{color:#d4a938;font-size:18px;letter-spacing:3px;text-transform:uppercase;margin-bottom:18px}
.divider{width:64px;height:2px;background:#d4a938;margin:34px 0 42px;box-shadow:0 0 14px rgba(212,169,56,.65)}
.arch-statement{font-size:28px;font-weight:500;color:#fff;margin-bottom:28px;text-shadow:0 0 18px rgba(212,169,56,.25)}
p{margin-bottom:22px;color:#fff;font-size:17px;text-shadow:0 0 9px rgba(0,0,0,.9)}
h2{margin-top:54px;margin-bottom:20px;color:#fff;font-size:28px;letter-spacing:4px;text-transform:uppercase;text-shadow:0 0 14px rgba(0,0,0,.9)}
blockquote{margin:36px 0;padding:30px 36px;border-left:3px solid #d4a938;background:rgba(0,0,0,.52);color:#fff;font-size:24px;line-height:1.45;letter-spacing:1px;box-shadow:0 0 28px rgba(0,0,0,.45)}
.quote-label{display:block;color:#00c8d7;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-bottom:12px}
.req-intro{margin:34px 0 42px;padding:28px 30px;background:rgba(0,0,0,.34);border:1px solid rgba(212,169,56,.18)}
.req-intro p:last-child{margin-bottom:0}
.spec-card{margin-top:28px;padding:30px 32px 28px;background:rgba(0,0,0,.34);border:1px solid rgba(212,169,56,.18);box-shadow:0 0 22px rgba(0,0,0,.24)}
.spec-card h2{margin:0 0 18px;font-size:24px;letter-spacing:3px}
.spec-label{color:#00c8d7;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px}
.status-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:28px}
.status-card{padding:24px;border:1px solid rgba(0,200,215,.18);background:rgba(0,0,0,.30)}
.status-card h3{color:#d4a938;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px}
.status-card p{margin:0;font-size:15px;color:rgba(255,255,255,.84)}
.finding-links{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.finding-links a,.finding-links a:visited{color:#d4a938;text-decoration:none;border:1px solid rgba(212,169,56,.24);padding:8px 10px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;background:rgba(0,0,0,.28)}
.finding-links a:hover{color:#fff}
.section-nav{display:flex;flex-wrap:wrap;gap:12px;margin:34px 0 8px}
.section-nav a,.section-nav a:visited{color:#d4a938;text-decoration:none;text-transform:uppercase;letter-spacing:2px;font-size:12px;padding:11px 14px;border:1px solid rgba(212,169,56,.24);background:rgba(0,0,0,.28)}
.section-nav a:hover{color:#fff;text-shadow:0 0 12px rgba(212,169,56,.55)}
.note{margin-top:58px;padding:18px 24px;border:1px solid rgba(212,169,56,.38);color:#d4a938;letter-spacing:2px;text-transform:uppercase;font-size:12px;display:inline-block;background:rgba(0,0,0,.35)}
@media(max-width:768px){
  .page{padding:185px 16px 60px}.container{padding:36px 24px 46px}
  .arch-header{flex-direction:column;align-items:flex-start;gap:24px}
  .arch-mark{width:110px;height:110px}h1{letter-spacing:3px}
  .subtitle{font-size:16px}.arch-statement{font-size:19px}p{font-size:16px}
  blockquote{font-size:20px;padding:24px 26px}.status-grid{grid-template-columns:1fr}
  .spec-card{padding:26px 22px 24px}.spec-card h2{font-size:21px}
}

</style>
</head>

<body data-bp-page="theatlas">
<div id="bp-header"></div>

<main class="page">
<article class="container">

<div class="eyebrow">The Atlas · The Architecture · Foundational Survey Fabric · Conformance</div>

<div class="arch-header">
  <img src="/thearchitecture/architecture-globe.png" alt="The Architecture Emblem" class="arch-mark"/>
  <div class="arch-title">
    <h1>Exactness<br/>Requirements</h1>
    <div class="subtitle">Conformance Section 05 · Canonical Precision and Determinism</div>
  </div>
</div>

<div class="divider"></div>

<p class="arch-statement">
  The conformance rules that prevent tolerance, hidden approximation, silent snapping, and mutable implementation state from altering canonical Survey truth.
</p>

<div class="req-intro">
<p>
  <strong>Exactness Requirements</strong> establish the minimum precision discipline every conforming implementation must preserve when interpreting, comparing, validating, normalizing, serializing, and returning authoritative Survey results.
</p>
<p>
  The integrated Specification now makes exactness directly testable across the solved candidate core: CRPC coordinates, canonical frame behavior, Point / Segment / SCPE geometry, exact predicates, deterministic normalization, ECEM precision semantics, and FSF-CJSON-1.0 canonical serialization.
</p>
<p>
  Exactness applies only where the governing Specification defines canonical truth. Conformance shall not invent exactness criteria for mathematical capabilities whose result forms or semantics remain open.
</p>
</div>

<blockquote>
  <span class="quote-label">Conformance Principle</span>
  Exact for truth. Approximate for experience.
</blockquote>

<section class="spec-card">
  <div class="spec-label">05.0 · Integrated Specification Standing</div>
  <h2>Exactness Is Now Executable for the Solved Core</h2>
  <p>
    Specification Sections 01–07 now provide deterministic candidate mathematics sufficient to test exact canonical behavior across the current Mandatory Core.
  </p>
  <p>
    Conformance may therefore require exact agreement in coordinate value, validity, predicates, normalization, precision semantics, and canonical byte output wherever the Specification defines a unique result.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.1 · Exact Canonical Equality</div>
  <h2>No Tolerance-Based Equality</h2>
  <p>
    Canonical equality and equivalence shall be determined by the exact rules of the governing Specification.
  </p>
  <p>
    Floating tolerances, epsilon bands, “close enough” comparison, display precision, implementation-specific rounding, or device-dependent approximation shall not determine whether two canonical values or spatial expressions are equal.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.2 · Exact CRPC Arithmetic</div>
  <h2>Coordinate Truth Is Rational and Exact</h2>
  <p>
    Mandatory Core coordinate arithmetic shall preserve CRPC values exactly through the rational mathematics defined by the Specification.
  </p>
  <p>
    Reduction, equality, ordering, sign, and comparison shall use exact integer/rational logic rather than floating approximation.
  </p>
  <p>
    Conversion to approximate machine numerics may occur only outside authoritative canonical evaluation unless exact equivalence is independently proven and preserved.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.3 · Exact Spatial Predicates</div>
  <h2>Predicates Must Resolve Deterministically</h2>
  <p>
    Survey-layer predicates in the solved core shall resolve exactly under canonical mathematics.
  </p>
  <p>
    These include Point equality and ordering, orientation, Point-on-Segment, Segment intersection, Point-on-boundary, Point-in-SCPE, polygon validity, connectedness, containment, and geometric equivalence where defined by the Specification.
  </p>
  <p>
    Approximate geometric tests shall not substitute for canonical predicate truth.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.4 · No Silent Snapping</div>
  <h2>Canonicalization Must Not Move Place</h2>
  <p>
    Canonical coordinates and geometry shall not be silently moved to nearby grid lines, preferred increments, vertices, subdivision boundaries, render pixels, or other derived structures.
  </p>
  <p>
    Snapping may exist as an explicit higher-layer or implementation convenience, but it shall never be disguised as canonical interpretation, normalization, or validation.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.5 · Hidden-State Independence</div>
  <h2>Mutable Context Must Not Change the Answer</h2>
  <p>
    Authoritative results shall depend only on explicit canonical inputs and the governing Specification profile.
  </p>
  <p>
    Cache history, database order, random state, user identity, ownership, session state, process history, storage order, machine locale, wall-clock time, or other hidden mutable conditions shall not alter canonical output.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.6 · Exact Geometry Normalization</div>
  <h2>Normalization Preserves Identical Meaning</h2>
  <p>
    Canonicalization shall normalize only mathematically equivalent representations.
  </p>
  <p>
    For the current core this includes exact CRPC reduction, lexicographic Segment endpoint ordering, and deterministic SCPE normalization through exact redundant-collinear removal, counterclockwise traversal, lexicographically least start vertex, and omission of repeated terminal closure.
  </p>
  <p>
    Required invariants include:
    <strong>N(N(G)) = N(G)</strong> and <strong>geom(N(G)) = geom(G)</strong>.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.7 · Exact Polygon Area</div>
  <h2>Selected Measurement Mathematics Must Be Reproducible</h2>
  <p>
    Polygonal area for supported SCPE geometry shall be computed exactly under the governing rational coordinate mathematics.
  </p>
  <p>
    Exact shoelace-style area evaluation is therefore eligible for direct Conformance proof.
  </p>
  <p>
    The exact general scalar representation for all possible distance, path-length, and boundary-length results remains outside the solved Mandatory Core until the Specification closes those questions.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.8 · Measurement Open-Gate Boundary</div>
  <h2>Do Not Claim Exactness Where the Scalar Model Is Still Open</h2>
  <p>
    Conformance shall not treat unresolved measurement mathematics as canonically solved merely because an implementation can produce a numerical approximation or symbolic answer.
  </p>
  <p>
    General straight-line distance and general path / boundary-length scalar closure remain open in the Specification and therefore outside current mandatory exactness proof except where a specific exact result form is already defined.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.9 · Precision Integrity</div>
  <h2>Canonical Precision Must Not Be Lost Invisibly</h2>
  <p>
    A conforming implementation shall distinguish complete canonical mathematical precision from reduced storage, transmission, display, or rendering precision.
  </p>
  <p>
    Any lossy conversion shall be detectable and shall not be represented as exact equivalence to the original authoritative object.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.10 · ECEM Exactness</div>
  <h2>A Canonical Point Is Already Exact</h2>
  <p>
    Under ECEM, every valid canonical Point denotes one exact Survey position.
  </p>
  <p>
    Conformance shall reject foundational interpretations that treat a canonical Point as approximate, coarse, parent, child, uncertainty-based, or implicitly dependent on a refinement hierarchy.
  </p>
  <p>
    Compatible representational extension may expand what can be expressed without changing the meaning of previously valid Points.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.11 · Finite Exact Representation</div>
  <h2>Authoritative Truth Must Be Exactly Representable</h2>
  <p>
    Canonical CRPC values, Points, Segments, SCPEs, and FSF-CJSON-1.0 expressions in the solved profile shall remain finitely representable and exactly resolvable.
  </p>
  <p>
    A conformance claim shall not depend on irreducible approximation or indefinite numerical convergence to determine canonical meaning.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.12 · Deterministic Termination</div>
  <h2>Exactness Must Be Reachable</h2>
  <p>
    Required solved-core operations shall terminate deterministically for valid finite inputs.
  </p>
  <p>
    Parsing, validation, exact predicates, normalization, and canonical serialization shall not depend on unresolved iterative convergence.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.13 · Exact Canonical Serialization</div>
  <h2>Canonical Bytes Must Be Deterministic</h2>
  <p>
    For supported normalized geometry, FSF-CJSON-1.0 shall produce one deterministic canonical UTF-8 byte sequence under the governing format rules.
  </p>
  <p>
    Conformance shall therefore test exact structured CRPC encoding, required key order, string normalization, duplicate-key rejection, governed unknown-field behavior, semantic array order, and byte identity where applicable.
  </p>
  <p>
    Semantically equivalent but byte-different output is nonconforming where the format requires one unique canonical serialization.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.14 · Approximation Boundary</div>
  <h2>Approximate Methods Belong Outside Canonical Truth</h2>
  <p>
    Rendering, visualization, interaction, simulation, indexing, search acceleration, engineering convenience, or local presentation may use approximate methods where appropriate.
  </p>
  <p>
    Such approximation shall remain explicitly outside the authoritative canonical result and shall not redefine Survey-layer truth.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.15 · Internal Approximation Discipline</div>
  <h2>Optimization Must Prove Exact Result Preservation</h2>
  <p>
    An implementation may use optimized or approximate internal techniques only if the final authoritative result is provably identical to the exact result required by the Specification.
  </p>
  <p>
    If exact result preservation cannot be demonstrated, the method shall not be used to establish canonical output.
  </p>
  <p>
    The detailed proof obligations for optimized internal algorithms remain part of later executable Conformance design.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.16 · Cross-Implementation Exactness</div>
  <h2>Exactness Must Survive Independent Implementation</h2>
  <p>
    Independent conforming implementations shall reproduce the same authoritative canonical meaning from identical canonical inputs without relying on shared hidden state or common proprietary software.
  </p>
  <p>
    Where the governing Specification requires one unique normalized form or canonical serialization, that representation shall also agree exactly.
  </p>
  <p>
    Exactness shall be a property of the published Specification, not of one favored implementation.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.17 · Reference Vector Exactness Proof</div>
  <h2>Exactness Must Be Demonstrated With Exact Fixtures</h2>
  <p>
    Exactness requirements shall be tested through Reference Vectors or equivalent executable fixtures whose expected results are themselves exact.
  </p>
  <p>
    The current solved profile is sufficiently mature for vectors covering CRPC normalization, exact predicate outcomes, SCPE normalization, exact polygon area, ECEM semantics, invalid approximation cases, and canonical FSF-CJSON-1.0 bytes.
  </p>
  <p>
    Approximate expected values shall not be used as substitutes for exact canonical expected results where the Specification defines exact truth.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">05.18 · Exactness Failure</div>
  <h2>Approximate Canonical Results Are Nonconforming</h2>
  <p>
    Tolerance-based equality, incorrect rational reduction, silent snapping, hidden mutable state, undetected lossy conversion, approximate predicate truth, non-idempotent normalization, semantic drift, or incorrect canonical bytes shall constitute Conformance failure when used to establish authoritative Survey truth.
  </p>
  <p>
    Approximate or lossy behavior may still exist as explicitly noncanonical functionality above the Foundational Survey Fabric, but it shall not be presented as canonical FSF output.
  </p>
</section>

<div class="status-grid">
  <div class="status-card">
    <h3>Executable Exactness Now Defined</h3>
    <p>
      CRPC exactness; exact core predicates; no silent snapping; hidden-state independence; exact geometry normalization; exact SCPE area; ECEM Point exactness; finite representation; deterministic termination; exact FSF-CJSON-1.0 bytes; cross-implementation exactness.
    </p>
  </div>
  <div class="status-card">
    <h3>Still Open in Conformance</h3>
    <p>
      General exact distance/path/boundary-length scalar proof; arbitrary rotation exactness; formal proof obligations for optimized internal algorithms; complete exactness-vector inventory; presentation-layer approximation thresholds if ever standardized; detailed failure identifiers; and exactness rules for future Specification extensions.
    </p>
  </div>
</div>

<section class="spec-card">
  <div class="spec-label">Conformance Integration Standing</div>
  <h2>Exactness Has Moved From Principle to Executable Candidate Proof</h2>
  <p>
    The original section correctly established that canonical truth must never depend on tolerance, snapping, approximation, or mutable hidden state.
  </p>
  <p>
    The integrated Specification now provides enough exact mathematics to test those principles directly across the solved Mandatory Core while preserving unresolved measurement and transformation mathematics outside current canonical proof.
  </p>
</section>

<section class="spec-card">
  <div class="spec-label">Requirements Basis</div>
  <h2>Primary Referenced Findings</h2>
  <p>
    This Conformance section is derived especially from Requirements Findings #24, #30, #53–#57, #66, #72–#75, and #78–#83.
  </p>
  <div class="finding-links">
    <a href="/theatlas/foundational-survey-fabric/requirements/04-ontology-structure/#finding-24">#24 · #30</a>
    <a href="/theatlas/foundational-survey-fabric/requirements/06-geometry-topology-measurement-operations/#finding-53">#53–#57</a>
    <a href="/theatlas/foundational-survey-fabric/requirements/06-geometry-topology-measurement-operations/#finding-66">#66</a>
    <a href="/theatlas/foundational-survey-fabric/requirements/06-geometry-topology-measurement-operations/#finding-72">#72–#75</a>
    <a href="/theatlas/foundational-survey-fabric/requirements/07-knowability-computability-conformance/#finding-78">#78–#83</a>
  </div>
</section>

<blockquote>
  <span class="quote-label">Architectural Boundary</span>
  Approximation may assist an implementation or higher Architecture domain. It may not become authoritative spatial truth, silently move place, or weaken the exact rules of the governing Specification.
</blockquote>

<div class="section-nav">
  <a href="/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/">← Conformance 04</a>
  <a href="/theatlas/foundational-survey-fabric/requirements/">Requirements Framework</a>
  <a href="/theatlas/foundational-survey-fabric/specification/">Specification</a>
  <a href="/theatlas/foundational-survey-fabric/conformance/">Conformance Index</a>
</div>

<div class="note">Foundational Survey Fabric · Conformance 05 · Exactness Requirements · Integrated Specification Core</div>

</article>
</main>

<div id="bp-footer"></div>
</body>
</html>
