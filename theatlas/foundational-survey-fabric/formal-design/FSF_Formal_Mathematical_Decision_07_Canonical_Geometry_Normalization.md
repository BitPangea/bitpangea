# Foundational Survey Fabric — Formal Mathematical Decision 07

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #123 · September 27, 2026  
**Subject:** Canonical Geometry Normalization  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED  
**Adoption Standing:** Selected for Specification development; not yet a formally adopted FSF Specification rule.

---

## 1. Decision

The Foundational Survey Fabric SHALL normalize equivalent canonical geometry into one deterministic representation.

For the current primitive set:

- Point
- Segment
- Simple Closed Polygonal Extent (SCPE)

normalization SHALL establish one unique canonical form for every valid geometric object.

The normalization rules SHALL be semantic-preserving.

They may remove representational redundancy.

They SHALL NOT move geometry.

---

## 2. Point Normalization

A Point:

```text
P = (x,y)
```

is canonical iff both coordinates are individually normalized CRPC values.

Therefore Point normalization consists of:

1. normalize `x`;
2. normalize `y`;
3. preserve tuple order `(x,y)`.

No additional Point-level transformation is permitted.

---

## 3. Segment Normalization

A geometric Segment has no inherent direction.

Therefore a canonical Segment SHALL be serialized using the lexicographically lesser endpoint first.

For valid endpoints `A` and `B`:

```text
segment_normalize([A,B])
=
[min_lex(A,B), max_lex(A,B)]
```

Thus:

```text
[A,B]
```

and:

```text
[B,A]
```

normalize to the same canonical Segment.

---

## 4. Segment Direction vs Segment Identity

Directed use of a Segment remains permitted inside algorithms.

For example:

```text
A -> B
```

may be required for:

- orientation;
- polygon traversal;
- winding.

But the canonical standalone Segment object is undirected.

Its normalized identity is therefore endpoint-order-independent.

---

## 5. SCPE Input Preconditions

SCPE normalization SHALL operate only on geometrically valid polygonal extents.

Before normalization:

- all Points must be valid;
- all Segments must be valid;
- the cycle must be simple;
- area must be nonzero;
- no forbidden overlap may exist.

Normalization does not repair invalid geometry into valid geometry.

Invalid geometry SHALL fail before canonicalization.

---

## 6. Stored Closure Vertex

A canonical SCPE vertex array SHALL NOT repeat the first vertex at the end.

Canonical:

```text
[v0,v1,...,v(n-1)]
```

Noncanonical redundant representation:

```text
[v0,v1,...,v(n-1),v0]
```

Closure is implied by the SCPE type.

This avoids two encodings for the same cycle.

---

## 7. Consecutive Duplicate Removal

If an input representation contains consecutive identical Points:

```text
...,A,A,...
```

the representation is invalid before normalization because it creates a zero-length Segment.

Such input SHALL NOT be silently repaired.

This preserves the distinction between:

- redundant but valid representation; and
- invalid geometry.

---

## 8. Nonconsecutive Duplicate Vertices

A valid SCPE SHALL NOT contain nonconsecutive duplicate vertices.

Such a cycle is invalid.

Normalization SHALL NOT remove them as a repair strategy.

---

## 9. Redundant Collinear Vertex Removal

For consecutive vertices:

```text
A,B,C
```

if:

```text
orient(A,B,C) = 0
```

and `B` lies strictly between `A` and `C` on Segment `AC`, then `B` contributes no geometric distinction.

Canonical normalization SHALL remove `B`.

This process SHALL repeat until no removable collinear middle vertex remains.

---

## 10. No Geometry Movement During Simplification

Collinear normalization removes only Points lying exactly on the straight Segment between their neighbors.

It SHALL NOT:

- approximate curves;
- smooth corners;
- merge near-collinear vertices;
- use angle thresholds;
- use distance tolerance.

A vertex is removed only when exact geometry proves it redundant.

---

## 11. Traversal Orientation

Every canonical SCPE boundary SHALL use:

> **counterclockwise traversal**

under the canonical right-handed Survey frame.

Therefore after redundant-vertex removal:

```text
signed_area > 0
```

is required for canonical orientation.

If:

```text
signed_area < 0
```

the vertex sequence SHALL be reversed.

---

## 12. Why Counterclockwise

Counterclockwise traversal is selected because:

- the canonical frame is right-handed;
- positive rotation is counterclockwise;
- positive shoelace signed area corresponds to counterclockwise traversal;
- it creates one internally consistent orientation convention.

No separate polygon handedness convention is required.

---

## 13. Canonical Start Vertex

After traversal direction is normalized, the canonical first vertex SHALL be:

> **the lexicographically least vertex under canonical `(x,y)` ordering**

That is, select the unique vertex `v*` such that no other polygon vertex has:

```text
x < x*
```

or the same `x` with:

```text
y < y*
```

The cycle SHALL then be rotated so `v*` is first.

---

## 14. Why Lexicographically Least

A closed polygon cycle has no geometric start.

Without a start rule, the same polygon has `n` cyclically shifted representations.

Lexicographic minimum removes that ambiguity using only canonical coordinate truth.

It does not assign higher-layer meaning to the selected vertex.

---

## 15. Start Vertex Is Not a Landmark

The canonical first vertex is only a serialization anchor.

It is not:

- the "first place" in BitPangea;
- a northern, western, eastern, or southern capital;
- Lot 0;
- the Genesis Parcel;
- a World origin;
- a geographic landmark.

It has no semantic privilege beyond deterministic representation.

---

## 16. SCPE Canonicalization Algorithm

For a valid input SCPE cycle:

```text
V = [v0,...,v(n-1)]
```

canonical normalization SHALL conceptually perform:

```text
1. Normalize every Point coordinate.
2. Remove implied repeated closure vertex if present in an accepted interchange form.
3. Remove exact redundant collinear middle vertices.
4. Revalidate nondegeneracy and simplicity.
5. Compute exact signed area.
6. If area < 0, reverse traversal.
7. Find lexicographically least vertex.
8. Cyclically rotate so that vertex is first.
9. Emit the resulting vertex sequence.
```

The resulting sequence is the canonical SCPE representation.

---

## 17. Idempotence

Normalization SHALL be idempotent.

For every valid object `G`:

```text
N(N(G)) = N(G)
```

A second normalization pass must not change canonical output.

---

## 18. Semantic Preservation

For every valid geometry `G`:

```text
geom(N(G)) = geom(G)
```

Normalization changes representation only.

It does not change the denoted Point set.

---

## 19. Equality by Normal Form

For supported primitive geometry:

```text
G1 = G2
```

geometrically iff:

```text
N(G1) = N(G2)
```

under exact canonical representation.

This provides a direct bridge between semantic equality and deterministic normalized representation.

---

## 20. Example — Segment

Input:

```text
[(5,3),(1,2)]
```

Canonical Point ordering gives:

```text
[(1,2),(5,3)]
```

Both representations denote one Segment.

Only the second is canonical.

---

## 21. Example — Polygon Start Shift

Input A:

```text
[(0,0),(4,0),(4,4),(0,4)]
```

Input B:

```text
[(4,4),(0,4),(0,0),(4,0)]
```

If both traverse counterclockwise and contain identical geometry, both normalize to:

```text
[(0,0),(4,0),(4,4),(0,4)]
```

assuming `(0,0)` is lexicographically least.

---

## 22. Example — Reversed Polygon

Input:

```text
[(0,0),(0,4),(4,4),(4,0)]
```

is clockwise under the canonical frame.

Normalization reverses it and rotates to:

```text
[(0,0),(4,0),(4,4),(0,4)]
```

---

## 23. Example — Redundant Collinear Vertex

Input:

```text
[(0,0),(2,0),(4,0),(4,4),(0,4)]
```

contains `(2,0)` exactly on Segment:

```text
[(0,0),(4,0)]
```

Canonical normalized cycle becomes:

```text
[(0,0),(4,0),(4,4),(0,4)]
```

No geometry changes.

---

## 24. Canonical Polygon Vertex Count

Canonical vertex count is the number of vertices remaining after exact redundant-collinear normalization.

Thus two equal polygonal extents cannot remain canonically different merely because one carries unnecessary Points along straight edges.

This does not permit simplification of noncollinear boundary detail.

---

## 25. FEBCM Consequence

Spatial Ground's FEBCM candidate boundary may initially contain design vertices that become exactly collinear after production mapping.

If so, FSF normalization SHALL remove them.

Therefore the final canonical World SCPE vertex count may be lower than the design working target.

The number `128` remains a design target, not a canonical requirement.

---

## 26. No Approximate Simplification

Canonical normalization SHALL NOT implement algorithms such as:

- Douglas–Peucker with tolerance;
- angle-threshold pruning;
- pixel simplification;
- near-duplicate merging;
- coordinate snapping.

Those are design or rendering operations.

Canonical normalization recognizes only exact equivalence.

---

## 27. Canonical Bounds

An SCPE's exact bounding values:

```text
x_min
x_max
y_min
y_max
```

MAY be derived from the normalized vertex set.

They need not be stored as independent canonical truth.

If stored as a cache, they must be provably derived and disposable.

---

## 28. Canonical Orientation and Holes

The current SCPE primitive contains no holes.

Therefore one counterclockwise exterior-cycle rule is sufficient.

If future composite geometry introduces interior cycles, their normalization orientation must be governed separately and SHALL NOT be inferred prematurely here.

---

## 29. Canonical Object Identity

Normalization determines geometric canonical form.

It does not by itself assign:

- governance identity;
- object identifier;
- version identifier;
- adoption status;
- provenance.

Those remain separate institutional or serialization concerns.

---

## 30. Normalization Failure

Normalization SHALL return failure if:

- any coordinate is invalid;
- polygon validity fails;
- canonical arithmetic exceeds governed valid-input limits;
- exact normalization cannot terminate;
- input relies on unsupported geometry.

Failure does not create approximate canonical output.

---

## 31. Deterministic Termination

For valid finite primitive geometry, normalization SHALL terminate.

For an SCPE with `n` finite vertices:

- Point normalization is finite;
- redundant-collinear removal strictly decreases vertex count;
- orientation computation is finite;
- lexicographic minimum search is finite;
- cyclic rotation is finite.

No unbounded iterative convergence process is permitted.

---

## 32. Independent Implementation Requirement

Independent conforming implementations SHALL produce the identical normalized Point, Segment, and SCPE representations for identical geometric input.

Any divergence in:

- endpoint order;
- polygon traversal direction;
- start vertex;
- redundant-vertex handling

is a Conformance failure.

---

## 33. Canonical Hashing Consequence

Once deterministic serialization is selected, normalization enables stable byte-level integrity hashing.

The order is:

```text
geometry
→ normalized canonical geometry
→ canonical serialization
→ bytes
→ integrity hash
```

Hashing SHALL NOT be applied to arbitrary non-normalized equivalent geometry if the hash is intended to identify canonical object content.

---

## 34. Spatial Ground Consequence

Spatial Ground may select one World SCPE semantically.

FSF normalization ensures all equivalent accepted geometric representations collapse to one canonical Survey geometry before the Ground Definition references it.

This eliminates ambiguity caused by:

- reversed cycle direction;
- different first vertex;
- redundant collinear vertices.

---

## 35. FSF-B08 Effect

Spatial Ground blocker:

```text
FSF-B08 — Canonical Normalization
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED FOR POINT / SEGMENT / SCPE
SPECIFICATION INCORPORATION — PENDING
CONFORMANCE — PENDING
REFERENCE VECTORS — PENDING
FORMAL ADOPTION — PENDING
```

Normalization for future richer composite set geometry remains a later question if such geometry is introduced.

---

## 36. Required Reference Vectors

Future normalization vectors SHALL include:

### Point

- normalized positive rational
- normalized negative rational
- zero normalization

### Segment

- forward endpoint order
- reversed endpoint order
- identical normalized output

### SCPE

- shifted start vertex
- reversed orientation
- redundant collinear vertex
- repeated closure vertex in accepted interchange input
- concave polygon
- lexicographic-minimum stress
- multiple redundant collinear vertices
- idempotence test

Each pair of equivalent inputs must normalize to exactly identical output.

---

## 37. Rejected Alternatives

| Candidate | Disposition | Reason |
|---|---|---|
| Counterclockwise traversal | **SELECTED** | coherent with right-handed frame |
| Clockwise traversal | **REJECTED** | unnecessary inversion |
| Arbitrary first vertex | **REJECTED** | multiple canonical encodings |
| Lexicographically least start | **SELECTED** | exact and deterministic |
| Keep redundant collinear vertices | **REJECTED** | non-unique equal geometry |
| Tolerance-based simplification | **REJECTED** | changes exactness boundary |
| Canonical rasterization | **REJECTED** | resolution-dependent |
| Implementation-defined normalization | **REJECTED** | breaks independent agreement |

---

## 38. Requirements Compatibility Judgment

This normalization model satisfies established requirements for:

- deterministic canonicalization;
- exact equivalence;
- finite parseability;
- independent implementation agreement;
- no hidden state;
- exact geometry;
- permanent spatial meaning.

No Requirement must be changed.

---

## 39. Next Formal Mathematical Decision

The next decision SHALL address:

> **Canonical Serialization and Interchange for Core FSF Geometry**

It must select a deterministic normative encoding for:

- CRPC scalar;
- Point;
- Segment;
- SCPE;
- Survey Domain;
- geometry type identifiers;
- field ordering;
- Unicode/text rules where applicable;
- canonical byte generation.

This directly addresses FSF-B09.

---

## 40. Standing

**POINT NORMALIZATION — SELECTED**

**SEGMENT ENDPOINT ORDER — LEXICOGRAPHIC**

**SCPE TRAVERSAL — COUNTERCLOCKWISE**

**SCPE START VERTEX — LEXICOGRAPHIC MINIMUM**

**REDUNDANT EXACT COLLINEAR VERTICES — REMOVED**

**APPROXIMATE SIMPLIFICATION — PROHIBITED**

**NORMALIZATION — IDEMPOTENT**

**EQUAL GEOMETRY — ONE NORMAL FORM**

**FSF-B08 — MATHEMATICAL DESIGN RESOLVED**

**CANONICAL SERIALIZATION — NEXT**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 41. Governing Closing Statement

> **Canonical geometry may be written many ways before normalization, but it may mean only one thing and must settle into one form. Equivalent shape does not earn multiple canonical identities.**
