# Foundational Survey Fabric — Formal Mathematical Decision 04

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #122 · September 26, 2026  
**Subject:** Exact Survey Domain Geometry and Dimensions  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED  
**Adoption Standing:** Selected for Specification development; not yet a formally adopted FSF Specification rule.

---

## 1. Decision

The canonical Foundational Survey Fabric Domain SHALL be one **closed axis-aligned square** centered on the permanent Survey origin.

Its exact canonical limits SHALL be:

```text
x ∈ [-1,000,000 , +1,000,000] Pang
y ∈ [-1,000,000 , +1,000,000] Pang
```

Therefore:

```text
X = 1,000,000 Pang
Y = 1,000,000 Pang
```

and the canonical Survey Domain is:

```text
D =
[-1,000,000,+1,000,000]
×
[-1,000,000,+1,000,000]
```

in the CRPC coordinate system.

The Domain boundary is included.

The Domain is therefore one exact, finite, closed, connected planar extent.

---

## 2. Canonical Dimensions

The selected Domain has:

```text
width  = 2,000,000 Pang
height = 2,000,000 Pang
```

and exact area:

```text
4,000,000,000,000 square Pang
```

The four extreme axis bounds are:

```text
Panvel-most  = -1,000,000 Pang
Panoris-most = +1,000,000 Pang

Panvath-most = -1,000,000 Pang
Pankor-most  = +1,000,000 Pang
```

The permanent canonical origin remains:

```text
(0,0)
```

---

## 3. Domain Definition

A canonical point:

```text
p = (x,y)
```

belongs to the Survey Domain exactly when:

```text
-1,000,000 ≤ x ≤ +1,000,000
and
-1,000,000 ≤ y ≤ +1,000,000
```

with all values interpreted as exact CRPC Pang coordinates.

No tolerance is permitted.

---

## 4. Boundary Inclusion

The Survey Domain SHALL be closed.

Therefore all four outer edges and all four corner points belong to valid Survey space.

Examples:

```text
(+1,000,000, 0)       valid
(-1,000,000, 0)       valid
(0, +1,000,000)       valid
(0, -1,000,000)       valid

(+1,000,000,+1,000,000) valid
(-1,000,000,-1,000,000) valid
```

A point exceeds the Domain if either coordinate lies strictly outside the permitted interval.

---

## 5. Why a Square

The square is selected because it is the smallest-complexity exact finite Domain that satisfies the architecture without introducing unnecessary geometric meaning.

It provides:

- one connected extent;
- exact finite limits;
- exact rational boundaries;
- equal canonical capacity along both axes;
- no preferred horizontal or vertical dimension;
- simple deterministic validation;
- simple exact area;
- simple origin reconstruction;
- simple independent implementation;
- substantial unused Survey capacity around World-space.

The square is not selected because The World is square.

The Survey Domain is reference capacity, not World Form.

---

## 6. Why Axis-Aligned

The Domain edges SHALL align with the canonical Survey axes.

Thus:

```text
east/west edges are constant-x boundaries
north/south edges are constant-y boundaries
```

An arbitrarily rotated Domain would add exact transformation machinery without increasing foundational capability.

Axis alignment also makes Domain membership decidable through exact coordinate comparison alone.

---

## 7. Why Equal Width and Height

A square avoids encoding a directional preference into the foundational reference capacity.

A rectangular Domain with unequal width and height would be mathematically valid, but would require an additional justification for why one canonical axis receives greater total capacity.

No such requirement exists.

Equal bounds therefore provide the cleaner neutral baseline.

---

## 8. Why ±1,000,000 Pang

The half-span:

```text
1,000,000 Pang
```

is selected because it is:

- exactly representable;
- human-readable;
- easily audited;
- large enough to provide substantial World and non-World capacity;
- independent of implementation word size;
- free of required symbolic or cultural meaning.

The value is a mathematical capacity choice only.

It does not encode:

- Bitcoin supply;
- a historical date;
- a population;
- a Parcel count;
- a geographic scale claim;
- a hidden symbolic message.

---

## 9. Capacity Principle

The Survey Domain is intentionally much larger than the minimum space necessary to hold the preferred BitPangea silhouette.

This allows:

- meaningful non-World Survey capacity around The World;
- future higher-layer reference outside current World-space where constitutionally permissible;
- exact tests of World/non-World membership within valid Survey space;
- future spatial architecture without forcing Domain expansion merely because The World occupies substantial area.

The unused portion of the Survey Domain has no automatic higher-layer meaning.

---

## 10. No Equivalence Between Domain and World

The following is explicitly false:

```text
Survey Domain = BitPangea World-space
```

Instead:

```text
World-space ⊂ Survey Domain
```

for the intended production instance.

The Domain establishes where canonical spatial reference is possible.

Spatial Ground determines which portion participates in The World.

---

## 11. World Margin Requirement

The production World-space instance SHALL be placed strictly inside the Domain.

No World boundary point should coincide with the Survey Domain boundary.

The final World placement SHALL preserve exact positive Survey-space margin in all four canonical directions:

```text
Panoris
Panvel
Pankor
Panvath
```

The exact World placement and exact margin are Spatial Ground production decisions performed after this FSF Domain is incorporated into the governing Specification.

---

## 12. Relationship to the Origin

Because the Domain is symmetric:

```text
x_min + x_max = 0
y_min + y_max = 0
```

the permanent origin determined in Formal Mathematical Decision 03 is exactly:

```text
(0,0)
```

The origin lies strictly within the Domain interior.

It is not a Domain boundary point.

---

## 13. Domain Topology

The Domain is:

```text
finite
closed
bounded
connected
path-connected
simply connected
```

under the ordinary planar topology that the final FSF Specification will formalize.

There are:

```text
1 exterior boundary cycle
0 interior boundary cycles
```

The square itself contains no holes.

---

## 14. Canonical Corners

The four exact corner points are:

```text
C_NE = (+1,000,000,+1,000,000)
C_NW = (-1,000,000,+1,000,000)
C_SW = (-1,000,000,-1,000,000)
C_SE = (+1,000,000,-1,000,000)
```

These names are formal directional labels only.

They do not create semantic places.

---

## 15. Canonical Boundary Segments

The Domain boundary consists of exactly four closed line segments:

```text
B_N:
y = +1,000,000
x ∈ [-1,000,000,+1,000,000]

B_S:
y = -1,000,000
x ∈ [-1,000,000,+1,000,000]

B_E:
x = +1,000,000
y ∈ [-1,000,000,+1,000,000]

B_W:
x = -1,000,000
y ∈ [-1,000,000,+1,000,000]
```

Any shared corner belongs to both adjoining boundary segments but denotes one canonical position.

---

## 16. Exact Area

Because the Domain is a square:

```text
A_D =
2,000,000 × 2,000,000
```

therefore:

```text
A_D = 4,000,000,000,000 square Pang
```

This area is exact.

No approximate integration is required.

This does not yet settle the general FSF area algorithm for arbitrary extents.

---

## 17. Exact Perimeter

The Domain perimeter is exactly:

```text
P_D =
4 × 2,000,000
=
8,000,000 Pang
```

This is exact because all Domain edges are axis-aligned rational line segments.

This result does not yet settle the general exact path-length mathematics for arbitrary non-axis-aligned geometry.

---

## 18. Why Not a Circular Domain

A circle was rejected because exact canonical boundary points would require additional algebraic or transcendental representation questions.

A circular Domain provides no architectural capability necessary to FSF that a square lacks.

It would increase the mathematical burden before that burden is justified.

---

## 19. Why Not a Polygon More Complex Than a Square

A more articulated polygon was rejected because Domain shape has no World-form role.

Adding corners, recesses, or irregularity would introduce meaningless foundational complexity.

The Survey Domain should be mathematically sufficient and semantically quiet.

---

## 20. Why Not an Unbounded Plane

An unbounded plane is rejected because the Requirements establish a finite Survey Domain with exact limits.

The Domain therefore must terminate.

---

## 21. Why Not a Dynamic or Expandable Domain

The canonical Domain SHALL NOT depend upon runtime expansion.

Its limits are part of permanent Survey meaning.

A mutable expanding boundary would create uncertainty about:

- whether a reference is valid;
- whether previous "outside Domain" results later become valid;
- whether canonical capacity changes with system state.

Future Specification evolution must preserve established place rather than silently move or enlarge canonical truth.

If an extraordinary future constitutional process ever alters Domain scope, that would require explicit governed succession/version treatment—not routine expansion.

---

## 22. No Foundational Grid Requirement

The square Domain does not imply a grid.

It does not establish:

- cells;
- tiles;
- rows;
- columns;
- quadtree nodes;
- Parcel alignment;
- regular subdivisions.

Those structures may be mathematically derived later if useful, but the Domain itself is simply an exact closed planar extent.

---

## 23. CRPC Compatibility

All Domain extrema are exact integers and therefore exact CRPC values:

```text
±1,000,000 = ±1,000,000/1 Pang
```

All corners and axis-boundary positions therefore remain exactly expressible within the selected coordinate scalar system.

---

## 24. Spatial Ground Compatibility

The preferred BitPangea silhouette may now be placed inside a known finite canonical capacity.

Spatial Ground can select exact:

```text
uniform scale s > 0
translation tx
translation ty
```

such that every transformed World boundary point satisfies:

```text
-1,000,000 < x_world < +1,000,000
-1,000,000 < y_world < +1,000,000
```

with positive margin in every canonical direction.

Because the source design coordinates are rational and the production transform is intended to use exact rational values, all transformed vertices can remain CRPC.

---

## 25. Production Capacity Recommendation

This FSF decision does not determine the final World scale.

However, Spatial Ground SHOULD avoid using nearly all available Domain capacity.

A prudent production placement should leave substantial non-World Survey capacity rather than maximizing World size merely because space exists.

The exact scale remains a Spatial Ground production decision.

---

## 26. Domain Validity Function

Conceptually:

```text
valid_position(x,y)
=
(-1,000,000 ≤ x ≤ +1,000,000)
AND
(-1,000,000 ≤ y ≤ +1,000,000)
```

This function determines whether a coordinate position lies within the Survey Domain.

It does not determine World membership.

---

## 27. Domain Reference Vectors

Future FSF Reference Vectors SHALL include at minimum:

### Interior

```text
(0,0)
(1,0)
(0,1)
(-1,0)
(0,-1)
```

### Boundary

```text
(+1,000,000,0)
(-1,000,000,0)
(0,+1,000,000)
(0,-1,000,000)
```

### Corners

```text
(+1,000,000,+1,000,000)
(-1,000,000,+1,000,000)
(-1,000,000,-1,000,000)
(+1,000,000,-1,000,000)
```

### Immediately Outside

Using exact rational offsets:

```text
(+1,000,000 + 1/2, 0)
(-1,000,000 - 1/2, 0)
(0, +1,000,000 + 1/2)
(0, -1,000,000 - 1/2)
```

The first three categories are valid Survey positions.

The final category is invalid.

---

## 28. Rejected Alternatives

| Candidate | Disposition | Primary reason |
|---|---|---|
| Closed square | **SELECTED** | exact, neutral, minimal, connected |
| Unequal rectangle | **REJECTED** | unnecessary directional capacity asymmetry |
| Circle | **REJECTED** | unnecessary exact-boundary complexity |
| Irregular polygon | **REJECTED** | meaningless foundational articulation |
| World-shaped Domain | **REJECTED** | collapses Survey capacity into World Form |
| Unbounded plane | **REJECTED** | violates finite-Domain requirement |
| Runtime-expanding Domain | **REJECTED** | destabilizes canonical validity |

---

## 29. Requirements Compatibility Judgment

The selected Domain satisfies the established FSF requirements that:

- the Survey Domain be finite;
- canonical ground be planar and two-dimensional;
- reference space be connected;
- Domain limits be exact;
- every authoritative World-space position be representable within Survey space;
- Domain capacity remain distinct from World-space;
- no higher geometry be forced to align to a foundational grid;
- no semantic internal partition be introduced.

No Requirement must be changed.

---

## 30. Gate Effect

Spatial Ground blocker:

```text
FSF-B04 — Numerical Survey Domain Geometry
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED
SHAPE — CLOSED AXIS-ALIGNED SQUARE
HALF-SPAN — 1,000,000 PANG
FULL WIDTH — 2,000,000 PANG
FULL HEIGHT — 2,000,000 PANG
ORIGIN — INTERIOR AT (0,0)
SPECIFICATION INCORPORATION — PENDING
CONFORMANCE / REFERENCE VECTORS — PENDING
FORMAL ADOPTION — PENDING
```

Spatial Ground may now proceed to calculate an exact production placement once the FSF polygon / extent primitive and exact geometry predicates are settled.

---

## 31. Next Formal Mathematical Decision

The next decision SHALL address:

> **Canonical Primitive Geometry — Point, Segment, and Closed Polygonal Extent**

This decision must determine the smallest exact primitive set required to support:

- canonical positions;
- finite line segments;
- simple closed polygonal extents;
- boundary inclusion;
- interior;
- polygon validity;
- World-space FEBCM geometry.

It should avoid introducing curves or richer geometry unless the Requirements demonstrably require them at the foundational level.

---

## 32. Standing

**SURVEY DOMAIN SHAPE — CLOSED SQUARE**

**DOMAIN X LIMITS — ±1,000,000 PANG**

**DOMAIN Y LIMITS — ±1,000,000 PANG**

**WIDTH — 2,000,000 PANG**

**HEIGHT — 2,000,000 PANG**

**AREA — 4,000,000,000,000 SQUARE PANG**

**PERIMETER — 8,000,000 PANG**

**ORIGIN — (0,0), INTERIOR**

**BOUNDARY — INCLUDED**

**DOMAIN GRID — NONE REQUIRED**

**WORLD EQUIVALENCE — REJECTED**

**CANONICAL PRIMITIVE GEOMETRY — NEXT**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 33. Governing Closing Statement

> **The Survey Domain is deliberately simple: one exact square, two million Pangs across, centered on a permanent zero-reference. It defines the finite space in which canonical reference is possible—not the shape, meaning, or extent of The World itself.**
