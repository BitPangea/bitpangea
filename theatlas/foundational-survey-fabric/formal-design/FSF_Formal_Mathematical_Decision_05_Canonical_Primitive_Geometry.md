# Foundational Survey Fabric — Formal Mathematical Decision 05

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #123 · September 27, 2026  
**Subject:** Canonical Primitive Geometry — Point, Segment, and Simple Closed Polygonal Extent  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED  
**Adoption Standing:** Selected for Specification development; not yet a formally adopted FSF Specification rule.

---

## 1. Decision

The Foundational Survey Fabric SHALL use the following **minimum canonical primitive geometry set**:

1. **Point**
2. **Segment**
3. **Simple Closed Polygonal Extent**

No additional foundational curve, raster, spline, arc, circle, grid-cell, tile, or mesh primitive is required at this stage.

These three primitives are sufficient to express:

- exact canonical positions;
- exact finite straight boundaries;
- exact polygonal extents;
- closed bounded regions;
- boundary inclusion;
- interior;
- connectedness;
- finite exact World-space geometry;
- the selected Spatial Ground FEBCM production form.

---

## 2. Primitive 1 — Point

A canonical Point is an ordered coordinate pair:

```text
P = (x,y)
```

with:

```text
x,y ∈ CRPC
```

and:

```text
P ∈ Survey Domain
```

A Point has:

- position;
- no area;
- no length;
- exact coordinate identity.

Two Points are equal iff their canonical coordinate pairs are equal.

---

## 3. Point Validity

A Point is valid iff:

1. both coordinates are valid CRPC values;
2. the coordinate pair lies within the closed Survey Domain;
3. the pair is finitely represented;
4. normalization succeeds;
5. no hidden state is required to interpret it.

Invalid coordinate input does not denote a canonical Point.

---

## 4. Primitive 2 — Segment

A canonical Segment is an ordered pair of distinct valid Points:

```text
S = [A,B]
```

with:

```text
A ≠ B
```

The Segment denotes the exact closed straight set:

```text
{ A + t(B-A) | 0 ≤ t ≤ 1 }
```

under the canonical planar geometry.

Both endpoints belong to the Segment.

---

## 5. Segment Orientation

A Segment may be represented directionally as:

```text
A → B
```

for algorithms such as:

- orientation testing;
- polygon traversal;
- winding;
- canonical cycle normalization.

However, the undirected geometric set of Segment `AB` is identical to `BA`.

Thus:

```text
geom([A,B]) = geom([B,A])
```

while ordered representation may matter for canonical traversal.

---

## 6. Segment Degeneracy

A Segment with:

```text
A = B
```

is invalid as a Segment.

A degenerate zero-length pair denotes a Point, not a canonical Segment.

This avoids duplicate primitive meanings.

---

## 7. Primitive 3 — Simple Closed Polygonal Extent

A Simple Closed Polygonal Extent is defined by one finite ordered cycle of valid Points:

```text
V = (v0,v1,...,v(n-1))
```

with:

```text
n ≥ 3
```

and edges:

```text
[v0,v1]
[v1,v2]
...
[v(n-2),v(n-1)]
[v(n-1),v0]
```

The cycle SHALL be:

- finite;
- closed;
- simple;
- non-self-intersecting;
- nondegenerate.

The Extent denotes:

```text
boundary ∪ interior
```

and is therefore closed.

---

## 8. Polygon Validity

A canonical polygonal extent is valid iff:

1. at least three distinct vertices exist;
2. every vertex is a valid Point;
3. no consecutive vertices are equal;
4. no zero-length edge exists;
5. the closing edge is valid;
6. no pair of nonadjacent edges intersects;
7. adjacent edges intersect only at their shared endpoint;
8. the polygon encloses nonzero area;
9. the boundary is one simple cycle;
10. all boundary and interior points lie within the Survey Domain.

---

## 9. Collinear Vertices

Collinear consecutive vertices MAY occur in a valid input representation, but they SHALL NOT survive canonical normalization when the middle vertex contributes no geometric distinction.

For three consecutive vertices:

```text
A,B,C
```

if:

```text
orient(A,B,C) = 0
```

and:

```text
B lies on segment AC
```

then `B` is redundant and SHALL be removed by canonical polygon normalization.

This yields a minimal equivalent boundary cycle.

---

## 10. Self-Intersection

A polygon whose nonadjacent edges intersect is invalid as a Simple Closed Polygonal Extent.

Examples of invalidity include:

- bow-tie polygons;
- figure-eight cycles;
- edge crossing;
- overlapping nonadjacent edges.

No tolerance-based near-intersection rule is permitted.

The decision is exact.

---

## 11. Holes

A Simple Closed Polygonal Extent in this primitive set has exactly:

```text
1 exterior boundary cycle
0 interior boundary cycles
```

Therefore holes are **not** part of the primitive itself.

If future FSF architecture requires polygonal sets with holes, they must be introduced through a separately governed exact composition model.

They are not required to support the current canonical BitPangea World-space instance.

---

## 12. Boundary Inclusion

The polygonal Extent is closed.

Therefore:

```text
boundary point ∈ extent
```

for every exact point on every boundary Segment.

This aligns directly with Spatial Ground's selected Closed World-Space convention for the production instance.

---

## 13. Interior

The interior is the exact bounded planar region enclosed by the simple cycle.

A valid Point `P` is in the polygonal Extent iff:

```text
P lies on the boundary
OR
P lies in the interior
```

Exact point-in-polygon mathematics will be formalized under the geometry predicates decision.

---

## 14. Exterior

For a valid Survey Point `P`:

```text
P ∉ polygonal extent
```

means only that the Point lies outside that Extent.

It does not mean:

- outside the Survey Domain;
- ocean;
- void;
- foreign territory;
- non-World unless Spatial Ground applies membership meaning.

FSF remains semantically neutral.

---

## 15. Polygon Orientation

A valid simple polygon cycle may initially arrive clockwise or counterclockwise.

Canonical normalization SHALL select one required orientation.

Recommended normative orientation:

```text
counterclockwise
```

because under the right-handed frame:

```text
signed area > 0
```

for counterclockwise cycles.

The exact normalization rule is finalized in the forthcoming canonical normalization decision.

---

## 16. Vertex Start Position

A closed polygon cycle has no naturally privileged starting vertex.

Therefore canonical serialization SHALL eventually choose one deterministic start vertex.

Recommended rule:

> **lexicographically least canonical vertex under `(x,y)` ordering**

with ties impossible once duplicate vertices and redundant cycle representation are normalized.

This rule is deferred to the formal normalization decision.

---

## 17. No Curves as Foundational Primitives

Circles, arcs, Bézier curves, splines, and other continuous curve primitives are not selected as foundational canonical geometry.

Reasons:

- they introduce additional exact parameter domains;
- curve intersection can require algebraic or transcendental result types;
- equality and normalization become more complex;
- current architecture does not require them for permanent spatial truth;
- polygonal approximation is not needed because polygonal geometry itself is selected as the canonical exact form where used.

Higher layers MAY render visually smooth curves derived from canonical polygonal geometry.

Rendering does not alter canonical space.

---

## 18. No Raster Geometry

Raster cells or pixel masks are rejected as canonical geometry because:

- they make truth resolution-dependent;
- boundary meaning changes with raster size;
- exact position becomes sampling-dependent;
- scaling can alter membership.

Raster representations may exist only as derived views or acceleration structures.

---

## 19. No Grid Cell as Foundational Object

The square Survey Domain does not imply foundational cells or tiles.

A cell is not required to define:

- Point;
- Segment;
- Polygonal Extent.

Therefore no grid-cell primitive is selected.

This preserves the requirement that higher geometry need not align to Survey subdivisions.

---

## 20. No Mesh Requirement

Triangulations and meshes may be derived for:

- rendering;
- collision;
- spatial indexing;
- area computation;
- acceleration.

They do not define canonical polygon meaning unless a future Specification explicitly makes one part of a canonical algorithm.

The polygon boundary remains authoritative.

---

## 21. Polygon Equality

Two valid polygonal Extents are geometrically equal iff they denote the exact same closed set in Survey space.

Different cycle representations may still be equal before normalization, for example:

- different starting vertex;
- reversed traversal;
- redundant collinear vertices.

Canonical normalization SHALL collapse all equivalent valid representations to one canonical cycle.

---

## 22. Exact Area

For a normalized polygon:

```text
(v0,...,v(n-1))
```

with:

```text
vi = (xi,yi)
```

the signed area is:

```text
A_signed =
1/2 Σ (xi*y(i+1) - x(i+1)*yi)
```

with indices modulo `n`.

Because CRPC coordinates are rational:

```text
A_signed ∈ ℚ square Pang
```

and exact polygon area is:

```text
|A_signed|
```

This provides an exact area algorithm for polygonal extents.

---

## 23. Boundary Length

For each Segment:

```text
[A,B]
```

with:

```text
dx = xB-xA
dy = yB-yA
```

the exact Euclidean length is:

```text
sqrt(dx²+dy²)
```

which may be irrational.

Therefore the primitive geometry is fully selected even though the exact general scalar representation for length remains a separate mathematical decision.

Polygon validity does not require decimal approximation of length.

---

## 24. Segment Intersection

Exact segment intersection is decidable using:

- orientation predicates;
- exact coordinate equality;
- exact between-ness comparisons.

Because all coordinate inputs are rational, all determinant signs are exact rational comparisons.

No epsilon tolerance is permitted in canonical intersection truth.

---

## 25. Polygon Connectedness

Every valid Simple Closed Polygonal Extent is connected.

Its boundary is a connected closed cycle.

Its closed interior-plus-boundary region is connected and path-connected.

This directly satisfies the minimum needs of the selected Spatial Ground instance.

---

## 26. Canonical Extent Type

The canonical geometry type name selected for formal drafting is:

> **Simple Closed Polygonal Extent**

Working identifier:

```text
SCPE
```

This identifier may be replaced by final Specification terminology if needed.

Its mathematical meaning is fixed by this decision.

---

## 27. Spatial Ground Compatibility

Spatial Ground selected:

> one connected, closed, hole-free canonical World-space region expressed as one primary FSF spatial-set definition.

SCPE is directly compatible with that design.

The production BitPangea World boundary can therefore be represented as:

```text
SCPE(
  v0,
  v1,
  ...
  v127
)
```

after exact production placement.

No Ground-level Boolean decomposition is required.

---

## 28. SG-RV-024 Effect

The selected BitPangea production instance can use one SCPE directly.

Therefore the known general closure issue involving arbitrary set difference remains outside the critical path for the actual World instance.

This primitive decision does not resolve the general Boolean-set semantics issue.

It avoids depending upon it for production World-space.

---

## 29. Primitive Closure

The canonical primitive set is intentionally not closed under every possible geometric operation.

For example:

- intersection of two SCPEs may yield multiple disjoint polygons;
- difference may yield holes;
- union may yield disconnected components.

Those results require a later exact composition/set model.

The primitive set defines the foundational geometry types.

It does not pretend every compound result must itself be one primitive.

---

## 30. Composition Boundary

Future composition may introduce exact finite spatial sets built from primitives.

Such composition must preserve:

- exactness;
- finite representability;
- deterministic normalization;
- exact equivalence;
- closed ownership within FSF.

But composition is a separate formal decision.

---

## 31. Minimality Judgment

This primitive set is considered sufficient because:

```text
Point
→ expresses exact place

Segment
→ expresses exact finite straight relation / boundary component

SCPE
→ expresses exact finite closed planar region
```

Nothing richer is required to represent the actual canonical BitPangea World-space geometry now under design.

---

## 32. Rejected Alternatives

| Candidate Primitive | Disposition | Primary reason |
|---|---|---|
| Point | **SELECTED** | irreducible canonical position |
| Segment | **SELECTED** | irreducible finite straight boundary |
| Simple Closed Polygonal Extent | **SELECTED** | exact finite closed region |
| Circle | **NOT FOUNDATIONAL** | unnecessary algebraic boundary type |
| Arc | **NOT FOUNDATIONAL** | unnecessary curve semantics |
| Bézier / spline | **REJECTED AS CANONICAL PRIMITIVE** | higher exactness/normalization burden |
| Raster mask | **REJECTED** | resolution-dependent truth |
| Grid cell | **REJECTED AS REQUIRED PRIMITIVE** | unnecessary foundational partition |
| Mesh | **REJECTED AS CANONICAL AUTHORITY** | derived implementation structure |

---

## 33. Requirements Compatibility Judgment

The selected primitive set satisfies existing requirements for:

- exact positions;
- exact extents;
- exact boundary inclusion;
- coherent foundational geometry;
- deterministic computability;
- minimal foundational primitive set;
- no required grid alignment;
- implementation independence.

No existing Requirement must be changed.

---

## 34. Gate Effect

Spatial Ground blocker:

```text
FSF-B05 — Exact Polygon / Extent Semantics
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED
POINT — SELECTED
SEGMENT — SELECTED
SCPE — SELECTED
BOUNDARY INCLUDED — SELECTED
HOLES IN PRIMITIVE — NO
SPECIFICATION INCORPORATION — PENDING
NORMALIZATION RULE — PENDING
GEOMETRY PREDICATES — NEXT
FORMAL ADOPTION — PENDING
```

The production World boundary now has an exact FSF geometry family.

---

## 35. Next Formal Mathematical Decision

The next decision SHALL address:

> **Exact Geometry Predicates and Polygon Validation**

It must formalize:

- point equality;
- orientation;
- point-on-segment;
- segment intersection;
- point-on-boundary;
- point-in-polygon;
- polygon simplicity;
- polygon connectedness;
- containment;
- exact equivalence inputs needed for normalization.

This will directly resolve the executable geometry portion of FSF-B06.

---

## 36. Standing

**POINT — CANONICAL PRIMITIVE**

**SEGMENT — CANONICAL PRIMITIVE**

**SIMPLE CLOSED POLYGONAL EXTENT — CANONICAL PRIMITIVE**

**BOUNDARY — INCLUDED**

**HOLES — NOT PART OF SCPE**

**CURVES — NOT FOUNDATIONAL**

**RASTER — NON-CANONICAL**

**GRID CELL — NOT REQUIRED**

**WORLD FEBCM COMPATIBILITY — PASS**

**GEOMETRY PREDICATES — NEXT**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 37. Governing Closing Statement

> **Canonical Survey geometry begins with exact place, connects exact places with straight finite boundaries, and encloses exact finite regions with one simple closed polygonal cycle. Nothing richer becomes foundational until the architecture proves it is necessary.**
