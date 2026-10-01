# Foundational Survey Fabric — Formal Mathematical Decision 06

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #123 · September 27, 2026  
**Subject:** Exact Geometry Predicates and Polygon Validation  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED · AMENDED FOR DAY #126 INTEGRATION RECONCILIATION  
**Adoption Standing:** Integrated into the candidate FSF Specification / Conformance / Reference Vector architecture; not yet canonically adopted.

> **Day #126 Amendment — Integration Standing**  
> The exact predicate design remains unchanged. Subsequent Decisions 07–09, the Decisions 01–09 Integration Review, candidate Specification integration, Conformance work, and Reference Vector reconciliation have completed several items that this Day #123 record still described as pending. This amendment updates those downstream standings without changing the selected predicate mathematics.


---

## 1. Decision

The Foundational Survey Fabric SHALL define canonical geometry predicates over CRPC-based Points, Segments, and Simple Closed Polygonal Extents (SCPEs) using **exact rational arithmetic only**.

The minimum executable predicate set SHALL include:

1. Point equality
2. Lexicographic Point ordering
3. Orientation
4. Point-on-Segment
5. Segment intersection
6. Point-on-boundary
7. Point-in-SCPE
8. Polygon simplicity
9. Polygon connectedness
10. Point containment
11. SCPE containment
12. SCPE equality as exact geometric-set equality

No canonical predicate may depend on floating tolerance, epsilon comparison, rasterization, implementation-specific geometry libraries, or hidden state.

---

## 2. Predicate Truth Domain

Every canonical predicate SHALL return exactly one of:

```text
TRUE
FALSE
INVALID
```

where:

```text
INVALID
```

means one or more supplied geometric inputs fail canonical validation.

`INVALID` is not a third geometric truth value.

It is a validation outcome.

---

## 3. Point Equality

For Points:

```text
A = (x1,y1)
B = (x2,y2)
```

canonical equality is:

```text
A = B
```

iff:

```text
x1 = x2
and
y1 = y2
```

after CRPC normalization.

No distance tolerance is permitted.

---

## 4. Lexicographic Point Ordering

A deterministic Point order SHALL be:

```text
(x1,y1) <lex (x2,y2)
```

iff:

```text
x1 < x2
```

or:

```text
x1 = x2
and
y1 < y2
```

This ordering is mathematical and deterministic.

It is used later for canonical cycle normalization and stable serialization.

---

## 5. Orientation Predicate

For valid Points:

```text
A = (x1,y1)
B = (x2,y2)
C = (x3,y3)
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
orient > 0  => LEFT
orient < 0  => RIGHT
orient = 0  => COLLINEAR
```

All operations are exact over CRPC.

---

## 6. Point-on-Segment Predicate

For Point `P` and Segment `[A,B]`:

```text
on_segment(P,[A,B])
```

is TRUE iff:

```text
orient(A,B,P) = 0
```

and:

```text
min(xA,xB) ≤ xP ≤ max(xA,xB)
```

and:

```text
min(yA,yB) ≤ yP ≤ max(yA,yB)
```

No tolerance band exists.

---

## 7. Segment Intersection Classification

Two valid Segments:

```text
S1 = [A,B]
S2 = [C,D]
```

SHALL be classified exactly as one of:

```text
DISJOINT
TOUCH
PROPER_CROSS
COLLINEAR_OVERLAP
IDENTICAL
```

The classification SHALL be determined using orientation tests and exact endpoint comparisons.

---

## 8. Proper Segment Crossing

`S1` and `S2` PROPER_CROSS iff:

```text
orient(A,B,C)
and
orient(A,B,D)
```

have opposite nonzero signs,

and:

```text
orient(C,D,A)
and
orient(C,D,B)
```

have opposite nonzero signs.

This is the ordinary exact interior-interior crossing case.

---

## 9. Segment Touch

Segments TOUCH iff they share one or more boundary points but do not have a positive-length collinear overlap.

Examples include:

- shared endpoint;
- endpoint lying in the interior of the other Segment;
- tangent contact at one Point.

---

## 10. Collinear Overlap

Segments have COLLINEAR_OVERLAP iff:

```text
orient(A,B,C) = 0
orient(A,B,D) = 0
```

and their projected intervals overlap over nonzero length.

Such overlap is forbidden between nonadjacent edges of a valid SCPE.

---

## 11. Identical Segments

Segments are IDENTICAL iff:

```text
(A=C and B=D)
or
(A=D and B=C)
```

as geometric sets.

Direction does not change Segment identity.

---

## 12. Point-on-Boundary

For Point `P` and valid SCPE `R` with edges:

```text
e0,...,e(n-1)
```

define:

```text
on_boundary(P,R)
```

TRUE iff:

```text
on_segment(P,ei)
```

is TRUE for at least one boundary Segment.

This test SHALL be performed before point-in-interior classification.

---

## 13. Point-in-SCPE

For a valid Point `P` and valid SCPE `R`, canonical membership in the closed extent is:

```text
contains_point(R,P)
=
on_boundary(P,R)
OR
inside(P,R)
```

Boundary inclusion is therefore exact and explicit.

---

## 14. Interior Classification Algorithm

For a Point not on the boundary, the canonical interior test SHALL use an exact horizontal-ray crossing rule.

Conceptually, cast a ray from `P` toward positive x.

For each polygon edge:

```text
[A,B]
```

the edge contributes one crossing iff it straddles the horizontal line through `P` under the canonical half-open rule:

```text
(yA ≤ yP < yB)
OR
(yB ≤ yP < yA)
```

and the exact x-coordinate of the line-edge intersection lies strictly to the right of `P`.

The Point is interior iff the number of contributing crossings is odd.

---

## 15. No Division Requirement for Ray Crossing

Implementations SHOULD avoid division when determining whether the ray-edge intersection lies right of `P`.

Using exact orientation and sign-aware comparisons is preferred.

This prevents unnecessary rational expansion and guarantees exactness.

Any mathematically equivalent exact algorithm is conforming if it yields the same result for every valid input.

---

## 16. Vertex Double-Count Rule

The half-open y-straddling rule exists specifically to avoid double-counting a polygon vertex shared by two incident edges.

A vertex lying exactly on the horizontal ray is therefore handled deterministically.

No epsilon adjustment is permitted.

---

## 17. Polygon Simplicity

An ordered closed cycle is simple iff:

1. every edge is a valid Segment;
2. adjacent edges meet only at their shared endpoint;
3. the first and last edges meet only at the cycle-closing endpoint;
4. no nonadjacent pair of edges has:
   - PROPER_CROSS;
   - TOUCH;
   - COLLINEAR_OVERLAP;
   - IDENTICAL relation;
5. no nonconsecutive duplicate vertex exists;
6. the cycle encloses nonzero area.

A cycle failing any condition is not a valid SCPE.

---

## 18. Adjacent Edge Rule

For adjacent edges:

```text
[A,B]
[B,C]
```

their shared Point `B` is required.

Any additional overlap between the two edges is invalid.

Therefore consecutive collinear backtracking such as:

```text
A -> B -> A
```

is invalid.

Redundant forward collinear vertices may be normalized later, but overlapping edge interiors are not canonical polygon structure.

---

## 19. Duplicate Vertices

A valid SCPE SHALL NOT contain the same Point at two nonconsecutive positions in the cycle.

The only implied repetition is closure:

```text
v(n) = v0
```

which SHALL NOT be stored as an additional canonical vertex after normalization.

---

## 20. Nonzero Area

For cycle vertices:

```text
v0,...,v(n-1)
```

the exact signed shoelace area SHALL be nonzero.

If:

```text
A_signed = 0
```

the cycle does not define a canonical SCPE.

---

## 21. Polygon Connectedness

A valid SCPE is connected by construction.

Therefore:

```text
connected(SCPE) = TRUE
```

for every valid SCPE.

An invalid polygonal cycle does not receive a connectedness result as an SCPE; its result is INVALID.

This avoids treating connectedness as a separate mutable property of the primitive.

---

## 22. Path-Connectedness

Every valid SCPE is also path-connected.

This follows from the selected primitive semantics and need not be stored as separate canonical state.

---

## 23. Point Containment

For valid SCPE `R` and valid Point `P`:

```text
contains(R,P)
```

is TRUE iff:

```text
P ∈ boundary(R) ∪ interior(R)
```

Because SCPE is closed, boundary Points are contained.

---

## 24. Strict Point Interior

A separate predicate:

```text
strictly_inside(R,P)
```

is TRUE iff:

```text
P ∈ interior(R)
```

and:

```text
P ∉ boundary(R)
```

This distinction is necessary for exact topology and future composition.

---

## 25. SCPE Containment

For valid SCPEs `A` and `B`:

```text
contains(A,B)
```

is TRUE iff every Point of `B` belongs to `A`.

For simple polygonal extents, a conforming exact algorithm MAY establish this by proving:

1. every vertex of `B` is contained in `A`; and
2. no boundary Segment of `B` leaves `A`.

A mere vertex-only test is insufficient in the general case.

---

## 26. Proper SCPE Containment

Define:

```text
properly_contains(A,B)
```

iff:

```text
contains(A,B) = TRUE
```

and:

```text
A ≠ B
```

as geometric sets.

---

## 27. SCPE Boundary Contact

Two SCPEs MAY:

- be disjoint;
- touch at one or more Points;
- share boundary Segment portions;
- overlap in interior;
- contain one another;
- be equal.

These relations are exact geometry.

Their higher-layer meanings are not FSF concerns.

---

## 28. SCPE Equality

Two valid SCPEs `A` and `B` are geometrically equal iff they denote exactly the same closed Point set.

This semantic equality SHALL be representation-independent.

Therefore differing:

- start vertices;
- traversal direction;
- redundant collinear vertices

must not create different geometric truth.

Canonical normalization will provide a deterministic representation for equal geometry.

---

## 29. SCPE Disjointness

Two valid SCPEs are disjoint iff they share no Point.

Thus:

```text
A ∩ B = ∅
```

geometrically.

Boundary-only contact means they are not disjoint.

---

## 30. SCPE Touch

Two valid SCPEs touch iff:

1. they share at least one boundary Point; and
2. their interiors do not intersect.

Touch is purely geometric.

It does not imply Parcel adjacency or any higher-layer relationship.

---

## 31. SCPE Interior Overlap

Two valid SCPEs overlap in interior iff:

```text
interior(A) ∩ interior(B) ≠ ∅
```

This excludes pure boundary contact.

---

## 32. Boundary Classification

For any valid Point `P` and valid SCPE `R`, exactly one of the following SHALL hold:

```text
INTERIOR
BOUNDARY
EXTERIOR
```

within valid Survey space.

These three geometric classes are mutually exclusive and collectively exhaustive.

---

## 33. Invalid Survey Point Handling

If a supplied coordinate Point lies outside the governing Survey Domain, predicates requiring a valid Point SHALL return:

```text
INVALID
```

rather than:

```text
EXTERIOR
```

because "outside SCPE" and "outside Survey validity" are different questions.

The candidate Survey Domain is currently parameterized as:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

with exact positive `H`.

The geometry and closed-boundary semantics are candidate-resolved, while the final numerical value of `H` remains OPEN. Therefore concrete numerical out-of-Domain fixtures remain conditional on the governing Specification's eventual selection of `H`.

This distinction is essential for Spatial Ground.

---

## 34. World-Membership Boundary

FSF predicates do not return:

```text
WORLD
NON_WORLD
```

Those are Spatial Ground meanings.

FSF returns exact geometric facts such as:

```text
INTERIOR
BOUNDARY
EXTERIOR
CONTAINS
TOUCHES
DISJOINT
```

Spatial Ground may consume those facts to evaluate membership.

---

## 35. No Tolerance

Canonical geometry SHALL NOT use:

```text
epsilon
approximately equal
close enough
within tolerance
snapped intersection
```

for authoritative truth.

A determinant is:

```text
positive
negative
or exactly zero
```

A Point is:

```text
on a Segment
or not
```

Canonical truth does not have fuzzy edges.

---

## 36. Implementation Freedom

Conforming implementations MAY use different exact algorithms, including:

- ray crossing;
- winding number;
- monotone decomposition;
- exact spatial indexes;
- exact sweep-line intersection testing.

They conform if they:

1. consume the same valid canonical inputs;
2. preserve exact arithmetic;
3. produce identical canonical predicate results;
4. terminate under governed valid input limits.

Implementation method is not canonical meaning.

---

## 37. Acceleration Structures

Spatial indexes, bounding boxes, R-trees, interval trees, sweep structures, caches, and compiled geometry MAY accelerate predicates.

They SHALL NOT become independent sources of truth.

The exact primitive geometry remains authoritative.

---

## 38. Bounding-Box Rejection

Axis-aligned bounding boxes MAY be used for exact early rejection.

For example, Segments whose bounding boxes are disjoint cannot intersect.

However:

> **bounding-box overlap alone never proves geometric intersection.**

It is an optimization, not a canonical predicate definition.

---

## 39. Exactness of Predicate Inputs

Every arithmetic comparison in the canonical predicate model ultimately reduces to exact operations over CRPC:

- integer comparison;
- rational comparison;
- addition;
- subtraction;
- multiplication;
- determinant sign.

No irrational scalar representation is required for the core predicate set selected here.

---

## 40. Spatial Ground Candidate Integration Effect

Given the selected single-SCPE World candidate instance:

```text
W
```

Spatial Ground can evaluate a valid Survey Point `P` through:

```text
FSF.contains(W,P)
```

and obtain exact geometric inclusion.

Under the selected closed World-space convention:

```text
INTERIOR -> WORLD
BOUNDARY -> WORLD
EXTERIOR -> NON_WORLD
```

provided `P` is a valid Survey Point.

This establishes the candidate exact executable bridge needed by CMPM without moving membership semantics into FSF. Canonical production use remains contingent on the governing FSF and Spatial Ground adoption gates.

---

## 41. Spatial Ground Invalidity Effect

For an invalid Survey Point:

```text
P ∉ Survey Domain
```

FSF returns invalidity before membership evaluation.

Spatial Ground therefore produces no WORLD/NON_WORLD answer for that invalid reference.

This preserves the adopted dependency boundary.

---

## 42. FEBCM Validation

A candidate FEBCM World cycle SHALL pass:

```text
all vertices valid
all edges valid
simple cycle TRUE
nonzero area TRUE
closed extent valid
self-intersection FALSE
hole count = 0 by primitive definition
```

before it can become a production SCPE.

---

## 43. Independent Reproducibility

Two conforming implementations SHALL agree exactly on:

- orientation sign;
- point-on-segment;
- segment intersection class;
- point boundary class;
- point-in-SCPE;
- polygon simplicity;
- containment;
- equality.

Any disagreement is a Conformance failure.

---

## 44. Reference Vector Standing

The reconciled executable FSF geometry corpus now covers the defined predicate core. Required coverage includes:

### Orientation

- left
- right
- collinear

### Point-on-Segment

- endpoint
- interior point
- collinear outside
- noncollinear

### Segment Intersection

- disjoint
- shared endpoint
- T intersection
- proper cross
- collinear disjoint
- collinear touch
- collinear overlap
- identical reversed

### Point-in-SCPE

- deep interior
- exterior
- edge
- vertex
- ray through vertex
- horizontal edge
- concavity cases

### Polygon Validity

- simple triangle
- simple concave polygon
- bow tie
- repeated vertex
- zero-length edge
- redundant collinear vertex
- collinear overlap
- zero-area cycle

### Containment

- strict containment
- boundary contact containment
- equal extents
- partial overlap
- disjoint
- nested concavity stress

---

## 45. Complexity Governance

The canonical Specification MAY impose finite complexity limits such as:

- maximum vertex count per normative object;
- maximum rational integer size;
- maximum expression depth.

Such limits govern valid canonical input.

They SHALL NOT alter predicate truth for accepted inputs.

---

## 46. Requirements Compatibility Judgment

The selected predicate system satisfies the existing FSF requirements for:

- exact geometry;
- exact topology;
- deterministic spatial predicates;
- exact boundary inclusion;
- exact comparison;
- independent implementation agreement;
- finite deterministic computation;
- separation of mathematical relationship from higher-layer meaning.

No Requirement must be changed.

---

## 47. Gate Effect

Spatial Ground blocker:

```text
FSF-B06 — Exact Geometry Operations
```

is now substantially resolved at the mathematical-design level for the selected production geometry.

Specifically:

```text
point equality — RESOLVED
orientation — RESOLVED
point-on-segment — RESOLVED
segment intersection — RESOLVED
point-on-boundary — RESOLVED
point-in-SCPE — RESOLVED
polygon simplicity — RESOLVED
connectedness — RESOLVED
containment — RESOLVED
geometric equality semantics — RESOLVED
```

Subsequent formal work has advanced this standing:

```text
canonical normalization algorithm — RESOLVED AT CANDIDATE LEVEL (FMD-07)
canonical serialization — RESOLVED AT CANDIDATE LEVEL (FMD-08 / FSF-CJSON-1.0)
precision / refinement semantics — RESOLVED AT CANDIDATE LEVEL (FMD-09 / ECEM)

general Boolean composition result geometry — OPEN
exact derived distance/path-length scalar representation — OPEN
final complexity limits — OPEN
```

The open items remain separate formal gates and are not resolved by these predicates.

---

## 48. Subsequent Formal-Design Standing

The next decision identified by the original Day #123 record — **Canonical Geometry Normalization** — has since been completed as FMD-07.

Subsequent work also completed:

- FMD-08 — Canonical Serialization and Interchange;
- FMD-09 — Exact Precision and Refinement Semantics;
- the Decisions 01–09 Integration Review;
- candidate Specification integration;
- candidate Conformance integration;
- reconciled Reference Vector coverage for the defined geometry core.

Accordingly, FMD-06 is no longer awaiting normalization before becoming usable within the candidate architecture.

Its remaining dependencies are the broader open gates that lie outside this predicate decision, including general Boolean-result geometry, unresolved exact derived measurement scalar types, final complexity limits, and final canonical adoption.

---

## 49. Day #126 Representation / Equivalence Consequence

FMD-06 defines geometric truth independently of representation.

For the supported core:

```text
equal normalized geometry
→ same canonical geometric meaning
```

Different valid representations may normalize to the same Point, Segment, or SCPE without creating different spatial truth.

This aligns with the Day #126 continuity rule:

> **Representations may evolve. Canonical place may not drift.**

FSF-CJSON-1.0 provides the current candidate canonical machine representation, but serialization identity does not replace geometric-set identity.

Where future governed representations claim compatibility, they must preserve lossless, deterministic correspondence to the same normalized mathematical object.

---

## 50. Standing

**POINT EQUALITY — EXACT**

**ORIENTATION — EXACT**

**POINT-ON-SEGMENT — EXACT**

**SEGMENT INTERSECTION — EXACT**

**POINT-IN-SCPE — EXACT**

**BOUNDARY CLASSIFICATION — EXACT**

**POLYGON SIMPLICITY — EXACT**

**CONNECTEDNESS — INTRINSIC TO VALID SCPE**

**CONTAINMENT — EXACT**

**EPSILON GEOMETRY — PROHIBITED**

**SPATIAL GROUND EXECUTABLE GEOMETRY BRIDGE — ESTABLISHED AT CANDIDATE LEVEL**

**CANONICAL NORMALIZATION — CANDIDATE RESOLVED (FMD-07)**

**CANONICAL SERIALIZATION — CANDIDATE RESOLVED (FMD-08 / FSF-CJSON-1.0)**

**PRECISION / REFINEMENT — CANDIDATE RESOLVED (FMD-09 / ECEM)**

**GENERAL BOOLEAN RESULT GEOMETRY — OPEN**

**GENERAL DISTANCE / PATH-LENGTH SCALAR CLOSURE — OPEN**

**SURVEY DOMAIN NUMERICAL HALF-SPAN `H` — OPEN**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 51. Governing Closing Statement

> **In the Survey Fabric, geometry does not become true because two implementations agree that values are close. A point is on the boundary or it is not; segments cross or they do not; a region contains a place or it does not. Canonical geometry is exact enough to answer without tolerance.**
