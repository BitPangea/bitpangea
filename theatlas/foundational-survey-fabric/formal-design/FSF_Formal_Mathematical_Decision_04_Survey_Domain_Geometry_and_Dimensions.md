# Foundational Survey Fabric — Formal Mathematical Decision 04

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #122 · September 26, 2026  
**Subject:** Exact Survey Domain Geometry and Dimensions  
**Status:** PARTIAL — DOMAIN GEOMETRY SELECTED · NUMERICAL CAPACITY OPEN  
**Adoption Standing:** Domain geometry selected for Specification development; numerical half-span remains unresolved; not yet a formally adopted FSF Specification rule.

> **Current Reconciliation Note**  
> The original Day #122 record selected a numerical half-span of ±1,000,000 Pang without a source-derived capacity criterion sufficient to make that value canonical. Subsequent integration review therefore split the decision into:
>
> - **FMD-04A — Survey Domain geometry / boundary:** RESOLVED;
> - **FMD-04B — numerical Survey Domain capacity:** OPEN.
>
> This record preserves the selected square geometry, axis alignment, origin relationship, closed boundary, and exact finite-domain semantics while reopening only the numerical half-span.


---

## 1. Decision

The canonical Foundational Survey Fabric Domain SHALL be one **closed axis-aligned square** centered on the permanent Survey origin.

Its exact canonical limits SHALL be expressed using one positive exact CRPC half-span parameter:

```text
H > 0
```

such that:

```text
x ∈ [-H,+H]
y ∈ [-H,+H]
```

Therefore the candidate Survey Domain is:

```text
D_H =
[-H,+H]
×
[-H,+H]
```

in the CRPC coordinate system.

The Domain boundary is included.

The Domain is therefore one exact, finite, closed, connected planar extent.

**The numerical value of H is not selected by this decision and remains OPEN under FMD-04B.**

---

## 2. Canonical Dimensions

For exact positive half-span `H`, the Domain has:

```text
width  = 2H Pang
height = 2H Pang
```

and exact area:

```text
4H² square Pang
```

The four extreme axis bounds are:

```text
Panvel-most  = -H
Panoris-most = +H

Panvath-most = -H
Pankor-most  = +H
```

The permanent canonical origin remains:

```text
(0,0)
```

These expressions are exact for any governing Specification value of `H`.

---

## 3. Domain Definition

A canonical point:

```text
p = (x,y)
```

belongs to the Survey Domain exactly when:

```text
-H ≤ x ≤ +H
and
-H ≤ y ≤ +H
```

with `H > 0` and all values interpreted as exact CRPC Pang coordinates.

No tolerance is permitted.

Until the governing Specification selects the numerical value of `H`, this definition is authoritative only in parameterized form.

---

## 4. Boundary Inclusion

The Survey Domain SHALL be closed.

Therefore all four outer edges and all four corner points belong to valid Survey space.

Parameterized examples:

```text
(+H, 0) valid
(-H, 0) valid
(0, +H) valid
(0, -H) valid

(+H,+H) valid
(-H,-H) valid
```

A point exceeds the Domain if either coordinate lies strictly outside the interval `[-H,+H]`.

Concrete numerical boundary fixtures remain conditional on the Specification's eventual selection of `H`.

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

## 8. Numerical Half-Span — FMD-04B OPEN

The original record selected:

```text
H = 1,000,000 Pang
```

because the value was exactly representable, human-readable, auditable, large, implementation-independent, and symbolically neutral.

Those are useful qualities, but they do **not** establish a source-derived capacity criterion.

Accordingly, ±1,000,000 Pang is preserved only as a **superseded working candidate** and SHALL NOT be treated as canonical.

FMD-04B must determine whether the governing Specification requires a numerical half-span and, if so, what criterion authorizes its selection.

A valid selection must not rely merely upon:

- round-number convenience;
- aesthetic preference;
- unused capacity for its own sake;
- implementation word size;
- Bitcoin symbolism;
- Parcel count symbolism;
- an arbitrary engineering comfort margin.

The numerical capacity question therefore remains OPEN.

---

## 9. Capacity Principle

The Survey Domain must provide sufficient finite canonical reference capacity for the World-space instance and any valid non-World Survey space required by the architecture.

The Domain may provide:

- non-World Survey capacity around The World;
- exact tests of World / non-World membership within valid Survey space;
- future higher-layer reference where constitutionally permissible;
- stable finite reference without runtime expansion.

The unused portion of the Survey Domain has no automatic higher-layer meaning.

The amount of required reserve capacity is **not yet established** and may not be used as an unstated justification for selecting `H`.

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
C_NE = (+H,+H)
C_NW = (-H,+H)
C_SW = (-H,-H)
C_SE = (+H,-H)
```

These names are formal directional labels only.

They do not create semantic places.

---

## 15. Canonical Boundary Segments

The Domain boundary consists of exactly four closed line segments:

```text
B_N:
y = +H
x ∈ [-H,+H]

B_S:
y = -H
x ∈ [-H,+H]

B_E:
x = +H
y ∈ [-H,+H]

B_W:
x = -H
y ∈ [-H,+H]
```

Any shared corner belongs to both adjoining boundary segments but denotes one canonical position.

---

## 16. Exact Area

Because the Domain is a square:

```text
A_D =
(2H) × (2H)
```

therefore:

```text
A_D = 4H² square Pang
```

This area is exact.

No approximate integration is required.

This does not yet settle the general FSF area algorithm for arbitrary extents.

---

## 17. Exact Perimeter

The Domain perimeter is exactly:

```text
P_D =
4 × 2H
=
8H Pang
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

The Domain extrema SHALL be exact CRPC values once `H` is selected by the governing Specification:

```text
±H = exact CRPC values when H is selected as an exact CRPC scalar
```

All corners and axis-boundary positions therefore remain exactly expressible within the selected coordinate scalar system, provided the selected `H` is itself an exact CRPC value.

---

## 24. Spatial Ground Compatibility

The preferred BitPangea silhouette may be placed inside the parameterized finite canonical capacity once the governing Specification selects `H`.

Spatial Ground can select exact:

```text
uniform scale s > 0
translation tx
translation ty
```

such that every transformed World boundary point satisfies:

```text
-H < x_world < +H
-H < y_world < +H
```

with positive margin in every canonical direction.

Because the source design coordinates are rational and the production transform is intended to use exact rational values, all transformed vertices can remain CRPC.

---

## 25. Production Capacity Relationship

This FSF decision does not determine final World scale or final World placement.

Spatial Ground SHALL NOT use desired World placement as an unreviewed mechanism for selecting the foundational Survey half-span.

Once `H` is selected, Spatial Ground may choose an exact positive uniform scale and translation that preserve the required margin and all adopted membership constraints.

Whether a minimum or preferred reserve margin is itself required remains a separate dependency to be established rather than assumed.

---

## 26. Domain Validity Function

Conceptually:

```text
valid_position(x,y)
=
(-H ≤ x ≤ +H)
AND
(-H ≤ y ≤ +H)
```

This function determines whether a coordinate position lies within the Survey Domain.

It does not determine World membership.

---

## 27. Domain Reference Vectors

FSF Reference Vectors MAY proceed parametrically using `H` and SHALL include at minimum once the governing Specification selects a numerical half-span:

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
(+H,0)
(-H,0)
(0,+H)
(0,-H)
```

### Corners

```text
(+H,+H)
(-H,+H)
(-H,-H)
(+H,-H)
```

### Immediately Outside

Using exact rational offsets:

```text
(+H + 1/2, 0)
(-H - 1/2, 0)
(0, +H + 1/2)
(0, -H - 1/2)
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

The selected Domain geometry satisfies the established FSF requirements that:

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

The former single blocker:

```text
FSF-B04 — Numerical Survey Domain Geometry
```

is now split:

```text
FSF-B04A — DOMAIN GEOMETRY / BOUNDARY
STATUS — RESOLVED
SHAPE — CLOSED AXIS-ALIGNED SQUARE
ORIGIN — INTERIOR AT (0,0)
BOUNDARY — INCLUDED

FSF-B04B — NUMERICAL DOMAIN CAPACITY
STATUS — OPEN
HALF-SPAN — H > 0
NUMERICAL VALUE — NOT YET SELECTED
```

Current downstream standing:

```text
SPECIFICATION INCORPORATION — PARAMETERIZED AT CANDIDATE LEVEL
CONFORMANCE — PARAMETERIZED / CAPACITY-INDEPENDENT CORE AVAILABLE
REFERENCE VECTORS — PARAMETERIZED / CAPACITY-INDEPENDENT CORE AVAILABLE
FORMAL ADOPTION — NOT YET PERFORMED
```

Spatial Ground may consume the resolved FSF geometry and parameterized Domain semantics, but concrete production placement and numerical Domain-edge proof cannot become final until FMD-04B is closed or a closure audit determines that another governed mechanism supplies the necessary capacity decision.

---

## 31. Current Formal Question

The next unresolved question within this decision is:

> **FMD-04B — What source-derived criterion, if any, determines the exact numerical Survey Domain half-span `H`?**

This inquiry must distinguish:

- minimum required capacity;
- required non-World Survey reserve, if any;
- World-placement dependencies that belong to Spatial Ground rather than FSF;
- implementation convenience from canonical mathematical necessity;
- future extensibility from unsupported over-provisioning;
- symbolic or aesthetic number choice from authoritative spatial requirement.

No numerical value SHALL be selected until that criterion is demonstrated.

---

## 32. Standing

**SURVEY DOMAIN SHAPE — CLOSED AXIS-ALIGNED SQUARE**

**DOMAIN X LIMITS — [-H,+H]**

**DOMAIN Y LIMITS — [-H,+H]**

**HALF-SPAN H — EXACT POSITIVE CRPC VALUE · NUMERICAL VALUE OPEN**

**WIDTH — 2H PANG**

**HEIGHT — 2H PANG**

**AREA — 4H² SQUARE PANG**

**PERIMETER — 8H PANG**

**ORIGIN — (0,0), INTERIOR**

**BOUNDARY — INCLUDED**

**DOMAIN GRID — NONE REQUIRED**

**WORLD EQUIVALENCE — REJECTED**

**FMD-04A — COMPLETE**

**FMD-04B — OPEN**

**CANONICAL PRIMITIVE GEOMETRY — CANDIDATE RESOLVED ELSEWHERE**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 33. Governing Closing Statement

> **The Survey Domain is deliberately simple: one exact closed square centered on a permanent zero-reference. Its geometry is selected; its numerical capacity is not. The Domain defines the finite space in which canonical reference is possible—not the shape, meaning, or extent of The World itself.**
