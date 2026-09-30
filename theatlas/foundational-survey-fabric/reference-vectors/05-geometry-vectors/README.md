# Geometry Vectors

## Foundational Survey Fabric · Reference Vectors Section 05

**The Atlas · The Architecture · Foundational Survey Fabric · Reference Vectors**  
**Section:** 05 — Geometry Vectors  
**Scope:** Point, Segment, SCPE, Exact Predicates, Validity, Normalization, Semantic Equality  
**Status:** Exact Predicate Profile Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Reference Vectors Section 05 — Geometry Vectors** for the BitPangea **Foundational Survey Fabric**.

The governing question is:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/05-geometry-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/05-geometry-vectors/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/05-geometry-vectors/README.md
```

---

## Purpose

Geometry Vectors prove exact agreement on the candidate Foundational Survey Fabric geometry model.

The current executable surface includes:

```text
Point
Segment
SCPE
Point equality
orientation
Point-on-Segment
Segment intersection
Point-in-SCPE
SCPE validity
containment
connectedness
normalization
semantic equality
```

Reference Vectors demonstrate these defined semantics.

They do not invent missing general Boolean-output geometry.

---

## Canonical Primitive Set

### Point

One exact CRPC coordinate pair:

```text
(x,y)
```

### Segment

A closed straight Segment between two valid distinct Points.

### SCPE

A **Simple Closed Polygonal Extent**:

```text
finite
ordered
simple
closed
polygonal
boundary + interior
primitive-level hole-free
```

The foundational primitive set does not include:

```text
curves
raster cells
grids
meshes
general Boolean composites
```

---

## Exact Point Equality

Two Points are equal exactly when:

```text
normalize(x1) = normalize(x2)
and
normalize(y1) = normalize(y2)
```

No epsilon is permitted.

---

## Exact Orientation

For Points A, B, and C:

```text
orient(A,B,C)
=
(Bx-Ax)(Cy-Ay)
-
(By-Ay)(Cx-Ax)
```

The sign determines exact orientation:

```text
> 0  positive
< 0  negative
= 0  collinear
```

This predicate supports Segment intersection, SCPE validation, and normalization.

---

## Point-on-Segment

Reference Vectors should include:

```text
Point on Segment interior
Point at first endpoint
Point at second endpoint
Point collinear but outside Segment extent
Point noncollinear with Segment
```

Classification is exact.

---

## Segment Intersection

The corpus should distinguish the exact supported intersection classes, including:

```text
proper crossing
endpoint contact
collinear overlap where applicable
disjoint
```

Every implementation must classify the same pair identically.

---

## Point-in-SCPE

The candidate algorithm uses:

```text
exact horizontal-ray parity
+
half-open y convention
```

The output distinguishes:

```text
INTERIOR
BOUNDARY
EXTERIOR
```

No rendering or tolerance rule participates.

---

## SCPE Validity

A candidate SCPE must satisfy the governing primitive rules, including:

```text
at least 3 distinct vertices
all Points valid
no consecutive duplicate vertices
one closed cycle
nonzero area
no prohibited nonadjacent intersections
within Survey Domain
```

Redundant collinear middle vertices may be valid input where otherwise permitted, but canonical normalization removes them.

---

## Canonical Normalization

### Segment

Segment endpoints are placed into deterministic lexicographic order.

### SCPE

Canonical normalization includes:

```text
normalize all CRPC values
omit repeated terminal closure point
remove redundant collinear middle vertices
select counterclockwise traversal
select unique lexicographically least start vertex
```

The normalization function is idempotent:

```text
N(N(G)) = N(G)
```

Normalization preserves semantic geometry.

---

## Semantic Equality

For supported geometry:

```text
same canonical spatial set
    ↓
same normalized representation
```

Reference Vectors should include differently ordered or otherwise permitted equivalent representations that normalize identically.

---

## Containment

Containment is an exact geometric predicate.

Reference Vectors may test supported:

```text
Point in SCPE
Point on SCPE boundary
SCPE containment
boundary-touching containment cases
```

according to the governing closed-set semantics.

---

## Connectedness

Reference Vectors should demonstrate deterministic connectedness for supported geometry.

Exact boundary contact controls any case in which contact affects connectedness.

Higher-layer concepts such as Parcel Contiguity remain outside the FSF geometry result.

---

## Invalid Geometry

The corpus should include:

```text
malformed Point
zero-length invalid Segment
consecutive duplicate polygon vertices
zero-area polygon
self-intersection
invalid closure structure
other primitive-contract violations
```

Invalid geometry shall not be silently repaired.

Exact normalization is permitted only where the Specification explicitly defines it.

---

## Survey Domain Dependency

Canonical supported geometry must remain within:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

The numerical value of `H` remains open.

Therefore:

```text
capacity-independent geometry vectors
    -> executable now

symbolic / parameterized Domain cases
    -> executable now

concrete numerical Domain-edge geometry fixtures
    -> not final until H is selected
```

---

## Boolean / Composite Output Boundary

An exact predicate result does not automatically define a canonical result geometry.

For example:

```text
A intersects B
```

may be canonically decidable even when:

```text
canonical geometry object for intersection(A,B)
```

is not yet defined for every supported case.

Accordingly, general:

```text
union
difference
intersection-result geometry
composite geometry closure
```

remain open where the Specification has not selected a canonical result type.

Reference Vectors must not fill that gap.

---

## Cross-Implementation Agreement

For every defined geometry behavior, independent implementations must return the same exact result.

A mismatch may indicate:

```text
implementation defect
Specification ambiguity
version incompatibility
fixture defect
operation tested beyond mathematical closure
```

---

## Requirements Basis

Geometry Vectors continue to derive especially from Requirements Findings:

```text
#10
#24–#26
#31–#33
#44–#50
#56
#65–#66
#69
#74–#75
#78–#83
```

These Findings remain authoritative at the Requirements layer.

Reference Vectors demonstrate them through geometry actually defined in the Specification.

---

## What Changed From the Previous Page

The earlier Geometry Vectors page stated that the primitive set, extent representation, boundary conventions, and predicate algorithms remained unresolved.

That is no longer the current standing.

The candidate Specification now supplies:

```text
Point
Segment
SCPE
exact orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
polygon simplicity
containment
connectedness
semantic SCPE equality
deterministic normalization
```

Section 05 can therefore move from future proof categories into exact candidate predicate fixtures.

The remaining principal geometry gap is general Boolean/composite result closure rather than primitive predicate mathematics.

---

## Still Open

Remaining Section 05 work includes:

```text
general Boolean/composite result geometry
future geometry families
final numerical Domain-edge fixtures after H selection
final vector identifiers
final fixture packaging
canonical publication/adoption process
```

---

## Architectural Boundary

> **Geometry Vectors prove exact spatial predicates and canonical geometry already defined by the Specification. They do not invent general Boolean result geometry or higher-layer meaning.**

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTION 05 — GEOMETRY VECTORS

POINT — TESTABLE
SEGMENT — TESTABLE
SCPE — TESTABLE
POINT EQUALITY — TESTABLE
ORIENTATION — TESTABLE
POINT-ON-SEGMENT — TESTABLE
SEGMENT INTERSECTION — TESTABLE
POINT-IN-SCPE — TESTABLE
SCPE VALIDITY — TESTABLE
CONTAINMENT — TESTABLE
CONNECTEDNESS — TESTABLE
NORMALIZATION — TESTABLE
SEMANTIC GEOMETRY EQUALITY — TESTABLE

GENERAL BOOLEAN / COMPOSITE RESULT GEOMETRY — OPEN
NUMERICAL DOMAIN-EDGE FIXTURES — NOT YET FINAL
FINAL CORPUS PACKAGING — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
