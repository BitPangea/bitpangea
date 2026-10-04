# Foundational Survey Fabric — Specification 01

## Survey Domain and Ground Model

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification Section:** 01  
**Status:** Candidate Mathematics Integrated  
**Canonical Adoption:** Not yet performed

---

## Purpose

Specification 01 defines the foundational spatial capacity within which canonical BitPangea Survey reference is valid.

Its governing principle is:

> **Reference capacity is not territory.**

The Survey Domain establishes where canonical Survey reference is possible. It does not determine which valid Survey space constitutes **The World**. World membership remains the responsibility of higher spatial Architecture, principally Spatial Ground.

---

## Current Candidate Mathematical Model

The current integrated candidate selects one finite, closed, connected, two-dimensional Survey Domain.

The Domain is an axis-aligned square centered on the permanent canonical origin and parameterized by one exact positive CRPC half-span:

```text
H > 0

D_H =
[-H,+H]
×
[-H,+H]
```

Therefore:

```text
width  = 2H Pang
height = 2H Pang
area   = 4H² square Pang
origin = (0,0)
```

The Domain boundary is included.

**FMD-04A — geometry / boundary — is resolved at candidate level.**

**FMD-04B — numerical half-span H — remains OPEN.**

The earlier ±1,000,000 Pang value is a superseded working candidate and is not canonical.

A candidate Point:

```text
p = (x,y)
```

is a valid Survey Point exactly when:

```text
-H ≤ x ≤ +H
and
-H ≤ y ≤ +H
```

with `x` and `y` expressed as valid normalized CRPC Pang coordinates.

No epsilon, tolerance, snapping, rounding, or approximate Domain-membership rule is permitted.

A Point outside either bound is invalid as canonical Survey reference. It is not merely `NON_WORLD`.

---

## Relevant Formal Mathematical Decisions

### FMD-01 — Exact Coordinate Representation

**Relevant — integrated.**

Specification 01 uses **Canonical Rational Pang Coordinates (CRPC)** for exact Domain bounds and Point-validity comparisons.

CRPC supplies exact reduced rational Pang values and therefore permits exact finite Domain membership tests without floating-point tolerance.

---

### FMD-02 — Canonical Frame and Handedness

**Compatible — primarily specified elsewhere.**

FMD-02 establishes the canonical `(x,y)` frame, directional axis meanings, right-handed orientation, and counterclockwise positive rotation.

Specification 01 depends on that frame when describing an **axis-aligned** Domain, but frame semantics belong primarily to Specification 02.

No additional FMD-02-specific rule is required here.

---

### FMD-03 — Canonical Origin Placement

**Relevant — integrated.**

The permanent Survey origin is:

```text
(0,0)
```

and is the midpoint of the Domain's exact coordinate bounds.

The origin is mathematical only and carries no civic, cultural, geographic, political, economic, or institutional privilege.

---

### FMD-04 — Survey Domain Geometry and Dimensions

**Directly relevant — partially integrated as candidate Specification content.**

FMD-04 now separates two questions:

- **FMD-04A — geometry / boundary:** resolved as one closed axis-aligned square centered at `(0,0)`;
- **FMD-04B — numerical Domain capacity:** open.

The parameterized candidate Domain is:

```text
D_H = [-H,+H] × [-H,+H]
H > 0
```

Boundary inclusion, symmetry, and exact validity semantics are integrated here.

The numerical value of `H` is not yet selected and shall not be inferred from the superseded ±1,000,000 Pang working candidate.

---

### FMD-05 — Canonical Primitive Geometry

**Compatible — no direct Specification 01 change required.**

Point, Segment, and Simple Closed Polygonal Extent (SCPE) are foundational geometry primitives.

Specification 01 needs exact Points for Domain validity, but primitive geometry itself belongs primarily to Specification 04.

The Survey Domain is defined directly by exact coordinate bounds; this README does not create a second independent SCPE representation of the Domain.

---

### FMD-06 — Exact Geometry Predicates and Validation

**Relevant in one respect — integrated.**

Domain validity uses exact comparison only.

A Point is inside the closed Domain or it is invalid as a Survey Point. No tolerance-based interpretation is allowed.

The broader geometry-predicate system belongs to Specification 04 and Specification 05.

---

### FMD-07 — Canonical Geometry Normalization

**Compatible — no direct Domain-rule change required.**

Point normalization through CRPC applies to Point inputs used by Specification 01.

SCPE normalization rules do not redefine the Survey Domain itself.

---

### FMD-08 — Canonical Serialization and Interchange

**Compatible — no direct normative serialization duplicated here.**

FMD-08 selects **FSF-CJSON-1.0** and includes a canonical Survey Domain serialization form.

Serialization ownership remains in Specification 06.

Specification 01 defines the mathematical Domain; Specification 06 defines its canonical machine representation.

---

### FMD-09 — Exact Precision and Refinement Semantics

**Relevant — integrated at the architectural boundary.**

The Exact Coordinate Extension Model (ECEM) means:

- every canonical Point is already exact;
- no foundational coarse/fine Point hierarchy exists;
- no parent/child Point semantics exist;
- derived grids or subdivisions do not define Point precision;
- higher-layer geometry is not required to align to such structures.

This reinforces Specification 01's rule that Survey subdivisions and internal partitions are semantically neutral and nonbinding on higher-layer geometry.

---

## What Changed From the Previous Specification 01

The pre-integration page correctly established:

- one finite Survey Domain;
- two-dimensional planar ground;
- connected reference capacity;
- exact limits as a Requirement;
- separation between Survey validity and World membership;
- no mandatory higher-layer alignment to Survey subdivisions;
- no semantic privilege for center or internal partitions.

Those provisions remain valid.

The following previously open matters are now filled by candidate mathematics:

```text
exact coordinate mathematics  -> CRPC
exact Domain geometry         -> closed axis-aligned square
exact numerical bounds        -> parameterized as ±H; numerical H OPEN
boundary inclusion            -> included
origin relationship           -> midpoint of bounds, normalized to (0,0)
Domain membership test        -> exact coordinate inequalities
precision/subdivision effect  -> ECEM; no mandatory hierarchy
```

---

## What Did Not Need to Change

The following original architectural rules remain intact:

- Reference capacity is not territory.
- Survey validity does not establish World membership.
- The Survey Domain does not need to match BitPangea's World Form.
- Terrain, elevation, immersive space, and visible geography remain above FSF.
- Higher-layer geometry is not required to align to Survey grids or subdivisions.
- Internal mathematical partitions carry no foundational semantic privilege.
- Higher Architecture domains remain responsible for what referenced space means.

---

## Remaining Open Matters

Specification 01 has one remaining production-relevant Domain question: the numerical Survey Domain half-span `H`.

In addition, the complete FSF Specification still has open work elsewhere, including:

- numerical Survey Domain half-span `H`;
- canonical public address grammar;
- canonical angular representation;
- exact general distance scalar closure;
- exact path and boundary-length closure;
- arbitrary exact rotation / transformation closure;
- general composition and Boolean-result closure;
- operation-domain and output closure;
- Specification identity and compatibility details;
- governed complexity limits;
- general closed-set / arbitrary-difference compatibility.

These open matters do not alter the candidate Domain model defined here.

---

## Relationship to Spatial Ground

The dependency boundary is:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

Specification 01 determines whether a Point is a valid canonical Survey position.

Spatial Ground may then evaluate World membership for that valid Point.

Conceptually:

```text
candidate coordinates
      ↓
FSF Domain validation
      ↓
valid canonical Survey Point
      ↓
Spatial Ground membership evaluation
      ↓
WORLD / NON_WORLD
```

Invalid Survey coordinates do not enter Spatial Ground membership evaluation.

---

## Repository Files

Recommended directory:

```text
theatlas/foundational-survey-fabric/specification/01-domain-model/
```

Primary files:

```text
index.html
README.md
```

The public `index.html` is the human-facing Specification page.

This `README.md` preserves the repository-facing mathematical summary, integration standing, decision traceability, and architectural boundary for Specification 01.

---

## Standing

```text
SPECIFICATION 01 — CANDIDATE DOMAIN GEOMETRY INTEGRATED
DOMAIN — FINITE CLOSED AXIS-ALIGNED SQUARE
COORDINATES — CRPC
BOUNDS — [-H,+H] × [-H,+H]
NUMERICAL HALF-SPAN H — OPEN
ORIGIN — (0,0)
DOMAIN BOUNDARY — INCLUDED
DOMAIN VALIDITY — EXACT / PARAMETERIZED
SURVEY DOMAIN = WORLD — FALSE
MANDATORY GRID / SUBDIVISION — NONE
PARENT / CHILD POINT SEMANTICS — NONE
FORMAL ADOPTION — NOT YET PERFORMED
```

---

## Governing Closing Statement

> **The Survey Domain defines where canonical reference is possible. Its exact mathematics may be foundational, but the meaning of the space within it belongs to the higher Architecture that uses it.**
