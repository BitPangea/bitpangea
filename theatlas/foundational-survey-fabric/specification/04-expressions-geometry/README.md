# Foundational Survey Fabric — Specification 04

## Spatial Expressions and Geometry

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification Section:** 04  
**Status:** Candidate Mathematics Integrated — Core Polygonal Geometry  
**Canonical Adoption:** Not yet performed

---

## Purpose

Specification 04 defines the exact foundational geometry available to BitPangea.

Its governing principle is:

> **One spatial mathematics. Many spatial expressions.**

The section owns the foundational distinction among exact position, exact connection, exact extent, boundary, topology, spatial predicates, geometric equivalence, and canonical normalization.

It does not assign ownership, World membership, institutional identity, function, or civilizational meaning to geometry.

---

## Current Candidate Primitive Set

The current minimal canonical geometry core is:

```text
Point
Segment
Simple Closed Polygonal Extent (SCPE)
```

This set was selected because it is sufficient for the current production-critical Survey and Spatial Ground path without prematurely introducing curves, raster primitives, tiles, meshes, or richer composite geometry.

---

## Point

A canonical Point is:

```text
P = (x,y)
```

where both coordinates are valid normalized CRPC values within the Survey Domain.

A Point denotes one exact position.

It is not an independently governed foundational entity.

---

## Segment

A canonical Segment is the closed straight set between two distinct canonical Points:

```text
[A,B]
```

Requirements:

```text
A ≠ B
```

Both endpoints are included.

A zero-length Segment is invalid.

Segment geometry is undirected, though algorithms may use ordered traversal.

---

## Simple Closed Polygonal Extent

A canonical SCPE is a finite ordered cycle:

```text
V = [v0,v1,...,v(n-1)]
```

with:

```text
n ≥ 3
```

and the following conditions:

- all vertices are valid canonical Points;
- all consecutive vertices are distinct;
- all edges are valid Segments;
- no nonconsecutive duplicate vertices exist;
- adjacent edges meet only at their shared endpoint;
- nonadjacent edges do not cross, touch, overlap, or coincide;
- exact area is nonzero;
- the cycle is simple;
- the polygon lies within the Survey Domain;
- there is one exterior cycle;
- there are no interior cycles in the primitive;
- the boundary is included.

Therefore an SCPE denotes:

```text
boundary ∪ interior
```

---

## Relevant Formal Mathematical Decisions

### FMD-01 — Exact Coordinate Representation

**Directly relevant — integrated.**

All Point coordinates use CRPC.

This gives the core geometry exact rational coordinates and eliminates floating-point tolerance from canonical geometric truth.

---

### FMD-02 — Canonical Frame and Handedness

**Directly relevant — integrated.**

The right-handed canonical frame and counterclockwise positive orientation determine the sign convention used for orientation, polygon winding, and canonical SCPE traversal.

---

### FMD-03 — Canonical Origin Placement

**Inherited — no geometry-specific rule added.**

All Points exist in the global frame whose origin is `(0,0)`.

Geometry does not reinterpret the origin.

---

### FMD-04 — Survey Domain Geometry and Dimensions

**Inherited as the validity envelope.**

Canonical geometry must remain within the valid Survey Domain.

Specification 04 does not redefine Domain geometry.

---

### FMD-05 — Canonical Primitive Geometry

**Directly relevant — fully integrated at candidate level.**

Selected:

```text
Point
Segment
SCPE
```

The SCPE primitive is:

```text
finite
simple
closed
non-self-intersecting
nondegenerate
hole-free
boundary-inclusive
```

Curves, raster masks, grid cells, tiles, and meshes are not foundational primitives in the current core.

---

### FMD-06 — Exact Geometry Predicates and Polygon Validation

**Directly relevant — fully integrated for the core.**

The current exact predicate set includes:

```text
Point equality
lexicographic Point order
orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
polygon simplicity
connectedness
containment
SCPE equality
```

Canonical predicate evaluation uses exact arithmetic only.

No epsilon or tolerance is permitted.

---

### FMD-07 — Canonical Geometry Normalization

**Directly relevant — fully integrated for Point / Segment / SCPE.**

Canonical normalization includes:

```text
Point:
  normalize CRPC coordinates

Segment:
  lexicographically lesser endpoint first

SCPE:
  remove exact redundant collinear middle vertices
  enforce counterclockwise traversal
  choose lexicographically least start vertex
  omit repeated closure vertex
```

Required invariants:

```text
N(N(G)) = N(G)
```

and:

```text
geom(N(G)) = geom(G)
```

---

### FMD-08 — Canonical Serialization and Interchange

**Relevant — representation owned elsewhere.**

FSF-CJSON-1.0 serializes Point, Segment, and SCPE geometry.

Specification 04 defines geometry semantics.

Specification 06 owns canonical machine serialization.

---

### FMD-09 — Exact Precision and Refinement Semantics

**Relevant — no geometric hierarchy implied.**

Exact geometry uses exact Point positions.

There is no coarse/fine Point hierarchy hidden inside geometry.

A larger denominator does not make a Point a child of another Point.

An extent is not a low-resolution Point.

---

## Exact Orientation

For:

```text
A=(x1,y1)
B=(x2,y2)
C=(x3,y3)
```

define:

```text
orient(A,B,C)
=
(x2-x1)(y3-y1)
-
(y2-y1)(x3-x1)
```

Then:

```text
> 0 -> LEFT / counterclockwise
< 0 -> RIGHT / clockwise
= 0 -> COLLINEAR
```

All evaluation is exact.

---

## Segment Intersection Classes

The current core recognizes:

```text
DISJOINT
TOUCH
PROPER_CROSS
COLLINEAR_OVERLAP
IDENTICAL
```

These are geometric classifications only.

They carry no ownership, legal, access, Parcel, or World-membership semantics.

---

## Point-in-SCPE

For a valid Point and valid SCPE, canonical classification is:

```text
INTERIOR
BOUNDARY
EXTERIOR
```

Boundary testing occurs before interior parity evaluation.

Invalid Survey input is:

```text
INVALID
```

rather than a fourth geometric location class.

---

## Polygon Validity

A candidate SCPE is invalid if it contains:

- fewer than three distinct vertices;
- consecutive duplicate vertices;
- zero-length edges;
- nonconsecutive duplicate vertices;
- forbidden nonadjacent edge contact;
- self-intersection;
- collinear overlap that violates simplicity;
- zero area;
- coordinates outside the Survey Domain.

Normalization does not repair invalid geometry into valid geometry.

---

## Connectedness

A valid SCPE is connected and path-connected by construction.

Connectedness is derived from geometry rather than stored as a separate foundational fact.

The same principle applies to continuity and similar predicates.

---

## Equivalent Geometry

Geometric equality is representation-independent.

Equivalent SCPEs may differ initially by:

- first vertex;
- traversal direction;
- exact redundant collinear middle vertices.

After normalization, equivalent supported geometry must settle into the same structural normal form.

Once canonical serialization is applied, it must also settle into identical canonical bytes.

---

## Transformation Boundary

The current core is closed under:

```text
exact CRPC translation
positive rational uniform scaling
```

where the output remains valid CRPC geometry.

Full canonical closure is **not yet established** for arbitrary rotation because exact rotation may generate non-rational coordinates.

Reflection and mirroring may be interpreted as derived transformations, but they do not redefine the permanent frame or canonical orientation.

---

## What Changed From the Previous Specification 04

The previous page correctly established obligations for:

- exact positions;
- exact extents;
- endpoint semantics;
- boundaries;
- continuity;
- connectedness;
- intersection;
- overlap;
- containment;
- separation;
- derived predicates;
- transformations;
- higher-layer shape independence;
- exact equivalence;
- geometry without foundational entity identity.

Those architectural obligations remain.

The following previously open matters are now resolved for the current core:

```text
primitive set
    -> Point / Segment / SCPE

position representation
    -> CRPC Point

extent representation
    -> boundary-inclusive hole-free SCPE

endpoint semantics
    -> closed Segment endpoints

boundary inclusion
    -> SCPE boundary included

orientation
    -> exact determinant

Segment intersection
    -> exact classified result

Point-in-polygon
    -> exact INTERIOR / BOUNDARY / EXTERIOR

polygon validity
    -> deterministic exact rules

connectedness
    -> derived from valid SCPE geometry

canonical equivalence
    -> exact geometric set equality

normalization
    -> deterministic Point / Segment / SCPE normal form
```

---

## What Did Not Need to Change

The following original principles remain correct:

- Geometry remains semantically neutral.
- Higher layers decide what occupies geometry.
- Spatial predicates are derived from exact geometry.
- Higher-layer shapes need not align to Survey subdivisions.
- Equivalent spatial geometry does not imply equivalent higher-layer entity identity.
- Geometry itself is not an institutionally governed entity.
- Transformations must resolve back to the canonical frame.
- Survey geometry does not adjudicate higher-layer meaning.

---

## Still Open

Specification 04 is complete enough for the current core, but the full FSF geometry universe is not closed.

Still open:

### General Boolean / Composite Geometry

The current primitive set does not yet define universal canonical result forms for:

```text
union
intersection
difference
```

across arbitrary extents.

### Hole-Bearing Geometry

SCPE itself contains no holes.

If future FSF requirements demand canonical hole-bearing or multi-component extents, they must be introduced through separately governed composition or richer geometry.

### Curve Geometry

No canonical arc, spline, Bézier, or general curve primitive is currently selected.

Such primitives should be introduced only if an actual FSF requirement proves they are necessary.

### Arbitrary Transformation Closure

Arbitrary exact rotations may produce non-rational coordinates.

A broader exact coordinate or transformed-expression model would be required before claiming canonical closure.

---

## Spatial Ground Consequence

The selected Spatial Ground production World boundary is directly compatible with this geometry profile.

The intended production object is:

```text
one connected
closed
hole-free
canonical World-space region
```

represented through:

```text
one FSF SCPE
```

and referenced from:

```text
one SG-CJSON fsf root leaf
```

For that production path:

```text
INTERIOR -> WORLD
BOUNDARY -> WORLD
EXTERIOR -> NON_WORLD
```

under Spatial Ground's selected closed World-space convention.

FSF supplies the geometry.

Spatial Ground supplies the membership meaning.

---

## Repository Files

Recommended directory:

```text
theatlas/foundational-survey-fabric/specification/04-expressions-geometry/
```

Primary files:

```text
index.html
README.md
```

The public `index.html` is the human-facing Specification section.

This `README.md` preserves repository-facing geometry semantics, FMD traceability, integration standing, and remaining geometry gates.

---

## Standing

```text
SPECIFICATION 04 — CANDIDATE MATHEMATICS INTEGRATED

POINT — SELECTED
SEGMENT — SELECTED
SCPE — SELECTED

SCPE BOUNDARY — INCLUDED
SCPE HOLES — NONE IN PRIMITIVE
SCPE CONNECTEDNESS — REQUIRED / DERIVED
SCPE SIMPLICITY — REQUIRED

ORIENTATION — EXACT
POINT-ON-SEGMENT — EXACT
SEGMENT INTERSECTION — EXACT
POINT-IN-SCPE — EXACT
CONTAINMENT — EXACT
GEOMETRIC EQUALITY — EXACT

NORMALIZATION — DEFINED
EPSILON GEOMETRY — PROHIBITED
APPROXIMATE SIMPLIFICATION — PROHIBITED

GENERAL BOOLEAN COMPOSITION — OPEN
HOLE-BEARING COMPOSITE GEOMETRY — OPEN
CURVE PRIMITIVES — NOT SELECTED
ARBITRARY ROTATION CLOSURE — OPEN

CORE POLYGONAL GEOMETRY — READY FOR PROTOTYPE / CONFORMANCE WORK
FORMAL ADOPTION — NOT YET PERFORMED
```

---

## Governing Closing Statement

> **FSF geometry says exactly where points, edges, and extents are and how they relate. It does not say what they are for. The foundation owns spatial truth; higher Architecture owns meaning.**
