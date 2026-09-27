# Foundational Survey Fabric — Formal Mathematical Decision 03

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #122 · September 26, 2026  
**Subject:** Exact Canonical Origin Placement  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED  
**Adoption Standing:** Selected for Specification development; not yet a formally adopted FSF Specification rule.

---

## 1. Decision

The permanent canonical Survey origin SHALL be placed at the **axis-midpoint of the finite Survey Domain's canonical coordinate bounds**.

Let the exact canonical Domain bounds eventually be:

```text
x_min
x_max
y_min
y_max
```

Then the permanent canonical origin `O` SHALL be the point:

```text
O = ( (x_min + x_max)/2 , (y_min + y_max)/2 )
```

and that point SHALL define:

```text
O = (0,0)
```

in canonical Survey coordinates.

Equivalently, the final Domain coordinate bounds SHALL be expressed symmetrically around zero:

```text
x_min = -X
x_max = +X

y_min = -Y
y_max = +Y
```

for exact positive CRPC values `X` and `Y`.

The exact values of `X` and `Y`, and the exact Survey Domain shape inside those bounds, remain separate formal decisions.

---

## 2. Origin Type

The selected origin is:

> **Canonical Domain-Bounds Midpoint Origin**

Working abbreviation:

```text
CDBMO
```

The abbreviation is a drafting aid only.

The institutional concept remains:

> **one permanent canonical origin**

---

## 3. What "Midpoint" Means

This decision does **not** select:

- the centroid of the Survey Domain;
- the center of area;
- the center of The World;
- the center of the BitPangea silhouette;
- the center of population;
- the center of future Parcels;
- any political, cultural, geographic, economic, or symbolic center.

It selects only the midpoint between the canonical minimum and maximum coordinate bounds along each Survey axis.

Thus the origin is determined by the exact frame and exact Domain coordinate limits—not by higher-layer meaning.

---

## 4. Mathematical Definition

Under Formal Mathematical Decision 02:

```text
+x = Panoris / East
-x = Panvel  / West
+y = Pankor  / North
-y = Panvath / South
```

The canonical Domain bounds will eventually establish four exact axis extrema:

```text
Panvel-most coordinate  = x_min
Panoris-most coordinate = x_max
Panvath-most coordinate = y_min
Pankor-most coordinate  = y_max
```

The origin is:

```text
x_O = (x_min + x_max)/2
y_O = (y_min + y_max)/2
```

and coordinates are translated so that:

```text
x_O = 0
y_O = 0
```

---

## 5. Symmetric Coordinate Extents

After canonical origin normalization:

```text
x ∈ [-X,+X]
y ∈ [-Y,+Y]
```

where:

```text
X = (x_max - x_min)/2
Y = (y_max - y_min)/2
```

and `X,Y > 0`.

This does not mean the Survey Domain itself must be rectangular.

It means its canonical coordinate bounds are symmetric around the origin.

---

## 6. Origin Must Lie Within Valid Survey Space

The final Survey Domain geometry SHALL contain the origin.

Preferably—and unless a later mathematical necessity proves otherwise—the origin SHALL lie in the **interior** of the Survey Domain rather than on its boundary.

A candidate Domain geometry that excludes its own canonical bounds-midpoint origin SHALL fail this design decision and require reconsideration before adoption.

This is an intentional constraint on future Domain geometry.

---

## 7. Why the Bounds Midpoint Is Preferred

This choice provides several advantages.

### Exactness

The midpoint of rational bounds is rational:

```text
(a/b + c/d)/2 ∈ ℚ
```

Therefore the origin remains exactly representable under CRPC.

### Neutrality

The location is determined by Survey geometry, not World meaning.

### Symmetry of Coordinate Range

Positive and negative coordinate capacity are balanced along both axes.

### Implementation Simplicity

Range checks, test vectors, transformations, and diagnostics can use symmetric canonical extrema.

### Future Capacity

The World can be placed with non-World Survey capacity in all four canonical directions without forcing the World itself to be centered.

---

## 8. Why Not a Corner Origin

A corner origin was rejected.

Placing `(0,0)` at a Domain corner would tend to produce only positive coordinates within a rectangular or bounding-box-aligned Domain.

That is computationally possible but inferior because it:

- makes the coordinate system directionally unbalanced;
- weakens the usefulness of signed displacement;
- gives one boundary corner special mathematical status;
- makes transformations around the frame less natural.

There is no Requirement that favors a corner origin.

---

## 9. Why Not a World-Based Origin

The origin SHALL NOT be defined from:

- the World silhouette;
- World centroid;
- World bounding box;
- World northern/southern/eastern/western extremes;
- Lot 0;
- the Genesis Parcel;
- a landmark;
- a Region;
- any future settlement.

Such choices would make foundational Survey mathematics depend upon higher Architecture.

That would violate the established layer boundary.

---

## 10. Why Not an Arbitrary Unexplained Point

A permanently arbitrary point could satisfy the existence requirement, but it would create unnecessary institutional burden:

- Why that point?
- How is it reconstructed?
- What invariant preserves it?
- How would an independent implementation derive it from the Specification?

The bounds-midpoint origin instead follows from the canonical Domain geometry itself.

It is deterministic and self-reconstructing.

---

## 11. Why Not the Domain Centroid

The area centroid is not selected because it would make origin placement depend upon:

- the full final Domain shape;
- exact area integration;
- potentially more complex arithmetic;
- possibly irrational or symbolic results depending on the eventual geometry.

The bounding-axis midpoint provides the desired neutrality with substantially less mathematical machinery.

---

## 12. No Semantic Privilege

Although the origin is mathematically distinguished, it has no higher-layer status.

The point `(0,0)` is not:

- more important land;
- more valuable space;
- a World center;
- a preferred Parcel;
- a mandatory landmark;
- a navigation destination;
- a governance seat.

Its privilege is only this:

> **all canonical Survey coordinates are measured relative to it.**

That is necessary mathematical structure, not semantic hierarchy.

---

## 13. Domain Shape Remains Open

This decision does not choose whether the finite Survey Domain is:

- rectangular;
- square;
- polygonal;
- another exact connected planar extent.

It establishes only a condition that the Domain has exact finite axis bounds and contains their midpoint.

The next Domain-geometry decision remains free to select the exact shape that best satisfies all FSF Requirements.

---

## 14. Domain Dimensions Remain Open

This decision does not choose:

```text
X
Y
```

or total width and height:

```text
2X
2Y
```

Those dimensions remain unresolved.

They must be selected as part of exact Survey Domain geometry and capacity.

---

## 15. Coordinate Consequences

Once the final Domain bounds are selected:

```text
Panvel-most bound  = -X
Panoris-most bound = +X
Panvath-most bound = -Y
Pankor-most bound  = +Y
```

All canonical position coordinates are exact signed Pang displacements from the origin.

Examples:

```text
(+3, 0) Pang    -> 3 Pangs toward Panoris
(-3, 0) Pang    -> 3 Pangs toward Panvel
(0, +3) Pang    -> 3 Pangs toward Pankor
(0, -3) Pang    -> 3 Pangs toward Panvath
```

Fractional CRPC values behave identically.

---

## 16. Spatial Ground Consequence

Spatial Ground now knows the semantic placement of the Survey zero-reference.

Its production translation can eventually be selected relative to:

```text
O = (0,0)
```

without treating that origin as the center of The World.

The preferred World silhouette MAY be translated away from the Survey origin.

Indeed, there is no requirement that:

```text
World center = Survey origin
```

or that any World-derived geometric center coincide with `(0,0)`.

The production World placement remains a later decision after exact Domain geometry and dimensions exist.

---

## 17. Exact Reconstruction

A conforming implementation will reconstruct the origin from final adopted Domain bounds by:

```text
x_O = (x_min + x_max)/2
y_O = (y_min + y_max)/2
```

and SHALL obtain:

```text
(0,0)
```

after canonical normalization.

If an implementation derives a different zero-reference from the same adopted Domain bounds, it is nonconforming.

---

## 18. Validation Rules

Once the Domain is formally specified, Conformance SHALL test:

1. `x_min < x_max`;
2. `y_min < y_max`;
3. `(x_min + x_max)/2 = 0`;
4. `(y_min + y_max)/2 = 0`;
5. origin is a valid Survey position;
6. origin belongs to the final Survey Domain;
7. the frame directions from Decision 02 remain unchanged;
8. origin reconstruction is independent of implementation.

---

## 19. Reference Vector Requirements

Future FSF Reference Vectors SHALL include at minimum:

```text
Origin vector:
(0,0)

Positive x examples:
(+q,0)

Negative x examples:
(-q,0)

Positive y examples:
(0,+q)

Negative y examples:
(0,-q)

Symmetric bound vectors:
(-X,+X)
(-Y,+Y)
```

They must also test any final Domain-specific boundary relationship to the origin.

Exact numeric values wait for the Domain dimensions decision.

---

## 20. Rejected Alternatives

| Candidate | Disposition | Primary reason |
|---|---|---|
| Domain-bounds midpoint | **SELECTED** | exact, neutral, symmetric, reconstructable |
| Domain corner | **REJECTED** | asymmetric coordinate capacity |
| World center | **REJECTED** | higher-layer dependency |
| Domain centroid | **REJECTED** | unnecessary geometric/measurement dependency |
| arbitrary unexplained interior point | **REJECTED** | poor reconstructability / needless arbitrariness |
| external point outside Domain | **REJECTED** | weak canonical usability |
| origin on Domain boundary | **REJECTED AS DEFAULT** | inferior internal reference geometry |

---

## 21. Requirements Compatibility Judgment

This decision satisfies the established requirement that the FSF contain one permanent canonical origin serving mathematical reference rather than geographic, civic, cultural, economic, or symbolic importance.

It also preserves:

- one global frame;
- semantic neutrality;
- separation from World Form;
- exact deterministic reconstructability;
- finite canonical mathematics.

No Requirements change is needed.

---

## 22. Gate Effect

Spatial Ground blocker:

```text
FSF-B03 — Exact Origin Placement
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED
NUMERIC ORIGIN — (0,0)
DOMAIN-RELATIVE PLACEMENT RULE — RESOLVED
SPECIFICATION INCORPORATION — PENDING
REFERENCE VECTORS — PENDING DOMAIN DIMENSIONS
FORMAL ADOPTION — PENDING
```

The origin's numeric coordinate is fixed now.

What remains unresolved is the exact Domain geometry that determines the eventual values of `X` and `Y`.

---

## 23. Dependency on the Next Decision

The next FSF decision must ensure that the selected finite Survey Domain:

- has exact finite bounds;
- is connected;
- contains `(0,0)`;
- preferably contains `(0,0)` in its interior;
- can support the full canonical World-space instance with non-World Survey capacity around it;
- uses exact CRPC-compatible geometry.

---

## 24. Next Formal Mathematical Decision

The next decision SHALL address:

> **Exact Survey Domain Geometry and Dimensions**

It must determine:

- the Domain shape;
- the exact canonical limits;
- exact width and height or equivalent dimensions;
- the values `X` and `Y`;
- boundary inclusion;
- whether the Domain is itself a closed extent;
- sufficient capacity for Spatial Ground and future higher spatial architecture.

This will resolve the largest remaining production-placement blocker.

---

## 25. Standing

**CANONICAL ORIGIN — (0,0)**

**ORIGIN RULE — DOMAIN-BOUNDS MIDPOINT**

**ORIGIN SEMANTIC STATUS — MATHEMATICAL ONLY**

**DOMAIN-BOUND COORDINATE SYMMETRY — REQUIRED**

**WORLD CENTER COINCIDENCE — NOT REQUIRED**

**DOMAIN CENTROID ORIGIN — REJECTED**

**CORNER ORIGIN — REJECTED**

**DOMAIN SHAPE — NOT YET SELECTED**

**DOMAIN DIMENSIONS — NOT YET SELECTED**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 26. Governing Closing Statement

> **The origin is the center of the Survey frame, not the center of BitPangea. It exists so every place can be measured from one permanent zero-reference—and nothing more.**
