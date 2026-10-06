# Foundational Survey Fabric — Formal Mathematical Decision 04

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #122 · September 26, 2026  
**Subject:** Exact Survey Domain Geometry and Dimensions  
**Status:** COMPLETE — DOMAIN GEOMETRY AND NUMERICAL CAPACITY RESOLVED  
**Adoption Standing:** FMD-04A and FMD-04B are resolved for Specification incorporation; formal top-level FSF Specification adoption remains a separate institutional gate.

> **Current Reconciliation Note**  
> The original Day #122 record selected a numerical half-span of ±1,000,000 Pang without a sufficient governing capacity basis. Subsequent integration review therefore split the decision into FMD-04A and FMD-04B, reopened only numerical capacity, and conducted a formal capacity inquiry.
>
> Day #131 resolves that inquiry:
>
> - **FMD-04A — Survey Domain geometry / boundary:** RESOLVED;
> - **FMD-04B — numerical Survey Domain capacity:** RESOLVED;
> - **Canonical half-span:** `H = 1,000,000 Pang`;
> - **Decision classification:** GOVERNED FOUNDATIONAL DESIGN CONSTANT;
> - **Production placement envelope:** `P = [-500,000,+500,000]²`.
>
> The numerical value returns under a new governed rationale. The earlier unsupported rationale remains superseded.


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

**FMD-04B selects the exact canonical half-span `H = 1,000,000 Pang`.**

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

With `H = 1,000,000 Pang`, the canonical dimensions are exact: width `2,000,000 Pang`, height `2,000,000 Pang`, area `4,000,000,000,000 square Pang`, and perimeter `8,000,000 Pang`.

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

The governing numerical value is `H = 1,000,000 Pang`; the same parameterized form remains useful as the general mathematical expression.

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

Concrete numerical boundary fixtures SHALL use the adopted extrema `±1,000,000 Pang`.

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
- an exact governed Survey reserve around the production placement envelope.

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

## 8. Numerical Half-Span — FMD-04B RESOLVED

The canonical numerical half-span is:

```text
H = 1,000,000 Pang
```

This value is classified as a:

```text
GOVERNED FOUNDATIONAL DESIGN CONSTANT
```

It is not classified as a mathematically derived invariant.

The earlier Day #122 use of ±1,000,000 Pang remains historically superseded **as to rationale**. Day #131 independently reselects the same numerical value after:

- exhausting plausible source-derived capacity invariants;
- establishing governance authority to select a foundational constant;
- defining explicit selection criteria;
- comparing serious candidate magnitudes;
- recognizing the scale-invariance of the permitted Spatial Ground placement model;
- establishing a relative governed production placement envelope.

The numerical value returns.

The old justification does not.

---

## 9. Capacity Principle

Durable Survey headroom SHALL be governed relationally rather than by selecting an arbitrarily enormous coordinate magnitude.

For canonical Survey Domain:

```text
D = [-1,000,000,+1,000,000]²
```

the governed production placement envelope is:

```text
P = [-500,000,+500,000]²
```

The complete production World-space instance SHALL satisfy:

```text
World-space ⊂ interior(P) ⊂ interior(D)
```

The outer Survey reserve has no automatic higher-layer meaning.

It is not additional World territory, an Exterior, The Frontier, Parcel territory, or future expansion space.

---

## 10. No Equivalence Between Domain and World

The following is explicitly false:

```text
Survey Domain = BitPangea World-space
```

Instead:

```text
World-space ⊂ interior(P) ⊂ interior(D)
```

The Domain establishes where canonical spatial reference is possible.

The governed placement envelope establishes the production placement constraint.

Spatial Ground determines which valid Survey positions participate in The World.

---

## 11. World Placement Requirement

The production World-space instance SHALL be placed strictly inside:

```text
P = [-500,000,+500,000]²
```

No World boundary point may coincide with the placement-envelope boundary.

Therefore every production World boundary point SHALL satisfy:

```text
-500,000 < x_world < +500,000
-500,000 < y_world < +500,000
```

This necessarily preserves positive Survey-space reserve before the outer Domain limits at ±1,000,000 Pang.

The exact production scale and translation remain Spatial Ground instance decisions, subject to this lower-layer placement constraint.

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

The Domain extrema are exact CRPC values:

```text
-1,000,000
+1,000,000
```

The production placement-envelope extrema are likewise exact CRPC values:

```text
-500,000
+500,000
```

All Domain corners, placement-envelope corners, and axis-boundary positions are therefore exactly expressible within CRPC.

---

## 24. Spatial Ground Compatibility

Spatial Ground may select exact:

```text
uniform scale s > 0
translation tx
translation ty
```

such that every transformed production World boundary point satisfies:

```text
-500,000 < x_world < +500,000
-500,000 < y_world < +500,000
```

Because the permitted placement model includes positive uniform scaling and translation, any finite supported World geometry may be fitted within the governed placement envelope without requiring enlargement of the canonical Survey Domain.

The production compatibility condition is therefore satisfied in principle.

---

## 25. Production Capacity Relationship

This FSF decision does not determine final World form, internal geography, or the exact production scale chosen by Spatial Ground.

It does determine the lower-layer placement envelope:

```text
P = [-500,000,+500,000]²
```

Spatial Ground SHALL choose its exact positive uniform scale and translation so the complete production World-space instance lies strictly inside `P`.

Spatial Ground SHALL NOT redefine `H`, the outer Survey Domain, or the placement-envelope ratio.

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

FSF Reference Vectors SHALL now include concrete numerical fixtures for the adopted half-span:

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
(+1,000,000.5, 0)
(-1,000,000.5, 0)
(0, +1,000,000.5)
(0, -1,000,000.5)
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

The former split gate is now resolved:

```text
FSF-B04A — DOMAIN GEOMETRY / BOUNDARY
STATUS — RESOLVED

FSF-B04B — NUMERICAL DOMAIN CAPACITY
STATUS — RESOLVED
HALF-SPAN — 1,000,000 PANG
PLACEMENT HALF-SPAN — 500,000 PANG
```

Current downstream standing:

```text
SPECIFICATION INCORPORATION — READY FOR CONCRETE UPDATE
CONFORMANCE — CONCRETE DOMAIN VALIDATION AVAILABLE
REFERENCE VECTORS — CONCRETE NUMERICAL EDGE FIXTURES AVAILABLE
FORMAL TOP-LEVEL SPECIFICATION ADOPTION — NOT YET PERFORMED
```

FMD-04B no longer blocks concrete Spatial Ground placement.

The remaining FSF production-handoff gate is institutional Specification identity / succession / formal adoption, together with final propagation of this decision.

---

## 31. Formal Determination

> **FMD-04B — Numerical Survey Domain Capacity — RESOLVED.**

The canonical numerical half-span is:

```text
H = 1,000,000 Pang
```

The canonical production placement envelope is:

```text
P = [-500,000,+500,000]²
```

The classification is:

```text
GOVERNED FOUNDATIONAL DESIGN CONSTANT
```

This is an intentional governed selection, not a claim of mathematical inevitability.

---

## 32. Standing

**SURVEY DOMAIN SHAPE — CLOSED AXIS-ALIGNED SQUARE**

**DOMAIN X LIMITS — [-1,000,000,+1,000,000] PANG**

**DOMAIN Y LIMITS — [-1,000,000,+1,000,000] PANG**

**HALF-SPAN H — 1,000,000 PANG**

**WIDTH — 2,000,000 PANG**

**HEIGHT — 2,000,000 PANG**

**AREA — 4,000,000,000,000 SQUARE PANG**

**PERIMETER — 8,000,000 PANG**

**PRODUCTION PLACEMENT ENVELOPE — [-500,000,+500,000]²**

**ORIGIN — (0,0), INTERIOR**

**BOUNDARY — INCLUDED**

**DOMAIN GRID — NONE REQUIRED**

**WORLD EQUIVALENCE — REJECTED**

**FMD-04A — COMPLETE**

**FMD-04B — COMPLETE**

**FORMAL TOP-LEVEL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 33. Governing Closing Statement

> **The Survey Domain is one exact closed square centered on the permanent zero-reference, with canonical half-span 1,000,000 Pang. Its production placement reserve is governed by relationship rather than enormous numbers. The Domain defines where canonical reference is possible—not the shape, meaning, or extent of The World itself.**