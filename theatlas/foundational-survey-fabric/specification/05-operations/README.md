# Foundational Survey Fabric — Specification 05

## Canonical Operations

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification Section:** 05  
**Status:** Candidate Mathematics Integrated — Core Operations Only  
**Canonical Adoption:** Not yet performed

---

## Purpose

Specification 05 defines the exact operations by which canonical FSF space is compared, normalized, measured, transformed, and eventually composed.

Its governing principle is:

> **At the Survey layer, equal means equal. Tolerance belongs above.**

The current candidate mathematics close a substantial operational core.

They do **not** yet close the entire operation algebra.

---

## Current Operational Core

The currently integrated core supports exact rules for:

```text
Point equality
Point ordering
orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
SCPE validity
connectedness
containment
geometric equivalence
normalization
precision conversion
exact polygon area
CRPC-preserving translation
positive rational uniform scaling
```

No canonical operation in this core depends on epsilon geometry.

---

## Relevant Formal Mathematical Decisions

### FMD-01 — Exact Coordinate Representation

**Directly relevant — integrated.**

CRPC provides exact arithmetic for:

- coordinate comparison;
- orientation;
- bounding tests;
- point incidence;
- rational polygon area;
- exact rational translation and scaling.

Canonical operations shall not fall back to floating-point tolerance when CRPC exactness is available.

---

### FMD-02 — Canonical Frame and Handedness

**Relevant — integrated.**

The right-handed frame and CCW-positive convention define orientation sign and canonical SCPE traversal.

---

### FMD-03 — Canonical Origin Placement

**Inherited.**

Operations act within the one permanent global frame.

They do not redefine the origin.

---

### FMD-04 — Survey Domain Geometry and Dimensions

**Inherited as the validity envelope.**

Operation results intended to remain canonical FSF geometry must remain valid under the governing Survey Domain rules.

Specification 05 does not independently redefine Domain geometry.

---

### FMD-05 — Canonical Primitive Geometry

**Directly relevant.**

The current operation domain is primarily:

```text
Point
Segment
SCPE
```

The Specification must not assume an operation is canonically closed when its output cannot be represented by one of the selected or otherwise governed result types.

---

### FMD-06 — Exact Geometry Predicates and Polygon Validation

**Directly relevant — major integration.**

The current predicate family includes exact:

```text
equality
ordering
orientation
incidence
Segment intersection
Point-in-SCPE
boundary classification
containment
polygon validity
connectedness
```

These are now candidate operational rules rather than merely future requirements.

---

### FMD-07 — Canonical Geometry Normalization

**Directly relevant — major integration.**

Current normalization:

```text
Point
  -> CRPC normalized coordinates

Segment
  -> lexicographically lesser endpoint first

SCPE
  -> exact redundant-collinear removal
  -> counterclockwise traversal
  -> lexicographically least start vertex
  -> no repeated terminal closure vertex
```

Required invariants:

```text
N(N(G)) = N(G)
geom(N(G)) = geom(G)
```

---

### FMD-08 — Canonical Serialization and Interchange

**Relevant to operation outputs.**

Canonical operation output is not complete merely because an internal mathematical value exists.

For an output to become canonical FSF interchange, it must possess:

- a governed result type;
- exact normalization;
- deterministic serialization;
- conformance behavior.

FSF-CJSON-1.0 currently covers the selected core primitives.

---

### FMD-09 — Exact Precision and Refinement Semantics

**Directly relevant — integrated.**

Precision conversion follows ECEM.

Lossless conversion preserves exact meaning.

Lossy conversion changes or discards exact information and must be identified as noncanonical or derived.

No silent snapping is permitted.

---

## Exact Comparison

Canonical comparison is exact.

Examples include:

```text
Point equality
Point ordering
orientation sign
Point-on-Segment
Segment intersection class
Point-in-SCPE
containment
SCPE equality
```

Approximate comparison may exist above FSF for rendering or application purposes.

It does not create canonical truth.

---

## Canonical Ordering

Lexicographic Point order is:

```text
(x1,y1) < (x2,y2)
```

iff:

```text
x1 < x2
```

or:

```text
x1 = x2 and y1 < y2
```

This ordering is used for deterministic normalization.

It carries no semantic rank.

---

## Normalization

Normalization converts valid equivalent representation into one normal form.

It shall never:

- move a Point;
- change an extent;
- snap geometry;
- approximate a coordinate;
- repair invalid geometry into valid geometry.

---

## Validity Classes

The current core distinguishes:

```text
CANONICAL VALID
VALID NONCANONICAL
INVALID
```

Examples of invalidity include:

- malformed CRPC;
- coordinate outside the Survey Domain;
- zero-length Segment;
- self-intersecting SCPE;
- zero-area SCPE;
- forbidden duplicate vertices;
- unsupported operation result form.

---

## Precision Conversion

A conversion is **lossless** iff exact mathematical meaning is unchanged.

Example:

```text
2/4 -> 1/2
```

is lossless.

By contrast:

```text
1/3 -> 0.333
```

as exact rational values is lossy.

A lossy form may be useful as a view.

It is not canonical equivalence.

---

## Measurement Standing

### Exact Area

For CRPC SCPE geometry, polygon area is exactly rational through shoelace mathematics.

This portion is closed at candidate level.

### Straight Distance

Squared distance is rational for CRPC Points.

Distance itself may require:

```text
sqrt(r)
```

for rational `r`.

The general exact scalar representation remains open.

### Path and Boundary Length

Finite sums of Segment lengths may require richer exact expressions.

General exact scalar closure remains open.

---

## Union

Union is required but not yet canonically closed for arbitrary supported extents.

A union can produce:

- one SCPE;
- multiple disconnected components;
- geometry with holes;
- boundary structures not representable by one current primitive.

The operation therefore remains partially open until canonical composite result types are selected.

---

## Intersection

Exact intersection **relationships** are already supported for the core.

However, returning the full exact geometry of arbitrary intersections may require result types beyond the current primitive set.

Therefore:

```text
intersection predicate -> substantially solved
intersection result algebra -> open
```

---

## Difference

Difference remains the most important known closure issue.

For closed sets:

```text
A \ B
```

need not be closed.

Therefore the Specification must not assume:

```text
closed input
+ closed input
-> closed difference result
```

without a separate formally selected algebra.

The current Specification does **not** silently regularize difference.

It does **not** invent closure-forcing semantics.

This preserves the known SG-RV-024 issue honestly.

---

## Operation Output Discipline

The governing rule is:

> **A mathematical answer is not automatically a canonical FSF result.**

For canonical operation closure, the Specification must define:

1. valid input types;
2. exact operation semantics;
3. exact output type;
4. output validity rules;
5. normalization;
6. serialization;
7. deterministic error behavior;
8. Conformance expectations.

If those do not yet exist, the operation remains open at canonical-Specification level.

---

## Transformations

The current core is safely compatible with:

```text
CRPC translation
positive rational uniform scale
```

where all outputs remain valid.

Arbitrary rotation remains open because rational-coordinate geometry is not generally closed under arbitrary rotation.

Derived views may still rotate or mirror geometry, but that does not establish a canonical transformed geometry result.

---

## What Changed From the Previous Specification 05

The old page correctly established obligations for:

- measurement;
- union;
- intersection;
- difference;
- exact comparison;
- equivalence;
- ordering;
- normalization;
- validity;
- precision conversion;
- canonical/storage/rendering distinction;
- no silent snapping;
- conflict detection;
- transformation integrity;
- proximity.

Those requirements remain.

The following previously open matters are now resolved for the current core:

```text
comparison algorithms
    -> exact FMD-06 predicates

ordering
    -> lexicographic Point order

normalization
    -> FMD-07 deterministic normal forms

precision conversion
    -> exact/lossy distinction under ECEM

validity
    -> exact-or-invalid core validation

polygon area
    -> exact rational shoelace

CRPC translation
    -> exact

positive rational scale
    -> exact
```

---

## What Did Not Need to Change

The following principles remain intact:

- Operations remain semantically neutral.
- Approximate tolerance belongs above FSF.
- Equivalent space does not create higher-layer identity equivalence.
- Ordering does not imply semantic rank.
- Lossy representations do not become canonical.
- Silent snapping is prohibited.
- FSF reveals geometric conflict but does not adjudicate it.
- Transformations do not redefine the permanent frame.
- Proximity terminology remains higher-layer semantics.

---

## Still Open

The complete operation algebra still requires formal design for:

```text
general union output closure
general intersection-result closure
general difference-result closure
closed-set / difference compatibility
composite geometry result types
exact general distance scalar
exact path / boundary-length scalar
arbitrary rotation closure
general transformation output closure
complete operation syntax
complete error taxonomy
governed complexity limits
```

These are not defects in the solved core.

They are explicitly preserved gates for the full FSF Specification.

---

## Spatial Ground Consequence

The selected production Spatial Ground World instance does not require general Boolean composition.

It uses:

```text
one FSF SCPE
```

with:

```text
no Ground-level union
no Ground-level difference
no holes
```

Therefore the unresolved general difference closure does not block the production-critical single-SCPE path.

The issue remains important for full interoperability and future composition.

---

## Repository Files

Recommended directory:

```text
theatlas/foundational-survey-fabric/specification/05-operations/
```

Primary files:

```text
index.html
README.md
```

The public `index.html` is the human-facing Specification section.

This `README.md` preserves repository-facing operation semantics, FMD traceability, integration standing, and the remaining closure gates.

---

## Standing

```text
SPECIFICATION 05 — CANDIDATE MATHEMATICS INTEGRATED

EXACT COMPARISON — SELECTED
CANONICAL ORDERING — SELECTED
NORMALIZATION — SELECTED FOR CORE PRIMITIVES
VALIDITY — SELECTED FOR CORE PRIMITIVES
LOSSLESS / LOSSY PRECISION CONVERSION — SELECTED
SILENT SNAPPING — PROHIBITED
POLYGON AREA — EXACT
CRPC TRANSLATION — EXACT
POSITIVE RATIONAL UNIFORM SCALE — EXACT

UNION RESULT CLOSURE — OPEN
INTERSECTION RESULT CLOSURE — OPEN
DIFFERENCE RESULT CLOSURE — OPEN
CLOSED-SET / DIFFERENCE COMPATIBILITY — OPEN
GENERAL DISTANCE SCALAR — OPEN
GENERAL PATH / BOUNDARY LENGTH — OPEN
ARBITRARY ROTATION CLOSURE — OPEN
GENERAL TRANSFORMATION OUTPUT CLOSURE — OPEN

CORE OPERATIONS — READY FOR PROTOTYPE / CONFORMANCE WORK
FULL SPECIFICATION 05 ADOPTION — NOT YET PERMITTED
```

---

## Governing Closing Statement

> **Canonical operations may derive spatial truth, but they may not invent result types, hide loss, tolerate ambiguity, or force mathematical closure where the Specification has not yet earned it.**
