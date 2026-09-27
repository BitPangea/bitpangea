# Foundational Survey Fabric — Formal Mathematical Decision 02

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #122 · September 26, 2026  
**Subject:** Exact Canonical Frame, Axis Orientation, Handedness, and Positive Rotation  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED  
**Adoption Standing:** Selected for Specification development; not yet a formally adopted FSF Specification rule.

---

## 1. Decision

The Foundational Survey Fabric SHALL use a **right-handed Cartesian planar frame** with:

```text
+x = Panoris = East
-x = Panvel  = West

+y = Pankor  = North
-y = Panvath = South
```

Canonical positive angular rotation SHALL be:

```text
counterclockwise
```

when viewed from the positive normal of the canonical Survey plane.

The canonical planar basis is therefore:

```text
e₁ = Panoris / East
e₂ = Pankor  / North
```

with orientation:

```text
e₁ × e₂ = +normal
```

The exact origin **location** remains unresolved and is the next formal decision.

---

## 2. Canonical Coordinate Pair

Once the origin is selected, a canonical Survey position will be expressed mathematically as:

```text
(x, y)
```

where:

```text
x = signed displacement along Panoris / Panvel
y = signed displacement along Pankor / Panvath
```

and each scalar is a Canonical Rational Pang Coordinate selected in Formal Mathematical Decision 01.

Thus:

```text
x, y ∈ ℚ Pang
```

subject to the finite Survey Domain.

---

## 3. Direction Mapping

The permanent directional vocabulary maps to the coordinate frame as follows:

| Canonical Direction | Conventional Direction | Axis Meaning | Sign |
|---|---|---|---|
| **Panoris** | East | x-axis | positive |
| **Panvel** | West | x-axis | negative |
| **Pankor** | North | y-axis | positive |
| **Panvath** | South | y-axis | negative |

This mapping is canonical.

Higher layers and renderers MAY present alternate screen or viewport orientations, but they must not reinterpret the canonical frame.

---

## 4. Why Panoris Is +x

Panoris / East is selected as the positive first axis because it matches the most widely understood planar Cartesian convention:

```text
rightward = positive x
```

This choice minimizes unnecessary cognitive and implementation translation.

It does not assign cultural or semantic privilege to the east.

It is purely mathematical orientation.

---

## 5. Why Pankor Is +y

Pankor / North is selected as the positive second axis:

```text
upward in canonical mathematical diagrams = positive y
```

This preserves the conventional map and mathematical intuition that north corresponds to increasing vertical coordinate.

Screen coordinate systems that increase downward are rendering systems only.

They do not alter canonical Survey truth.

---

## 6. Right-Handedness

The canonical Survey frame is right-handed.

For basis vectors:

```text
e₁ = +x = Panoris
e₂ = +y = Pankor
```

their oriented cross product defines the positive normal:

```text
e₁ × e₂ = +normal
```

This establishes one permanent orientation for:

- signed area;
- polygon orientation;
- angular direction;
- winding;
- orientation predicates;
- transformations;
- canonical geometric algorithms.

The positive normal is mathematical.

It does not imply physical altitude or volumetric World structure.

---

## 7. Positive Rotation

Canonical positive rotation SHALL be counterclockwise.

Thus, beginning from Panoris:

```text
0° equivalent direction   = Panoris
positive quarter-turn     = Pankor
positive half-turn        = Panvel
positive three-quarter    = Panvath
```

The exact angular unit and notation remain unresolved.

This decision establishes the **direction of increasing angle**, not the final angular unit.

---

## 8. Why Counterclockwise

Counterclockwise-positive rotation is selected because it is the standard orientation of a right-handed Cartesian plane.

It provides one internally coherent relationship among:

- axis signs;
- orientation predicates;
- signed area;
- winding;
- angular increase.

Selecting clockwise-positive would be mathematically possible but would add a needless inversion relative to the chosen right-handed frame.

---

## 9. Signed Area Consequence

Under this frame, the standard shoelace signed-area convention applies:

```text
signed area > 0  => counterclockwise boundary traversal
signed area < 0  => clockwise boundary traversal
```

This is useful for deterministic polygon normalization.

The final FSF polygon normalization rule remains a separate formal decision.

---

## 10. Orientation Predicates

For three canonical positions:

```text
A = (x₁, y₁)
B = (x₂, y₂)
C = (x₃, y₃)
```

define:

```text
orient(A,B,C)
=
(x₂-x₁)(y₃-y₁)
-
(y₂-y₁)(x₃-x₁)
```

Then:

```text
orient > 0  => C lies to the left of directed AB
orient < 0  => C lies to the right of directed AB
orient = 0  => A, B, C are collinear
```

Because CRPC coordinates are rational, this predicate is exact.

No floating tolerance is required.

---

## 11. Equality With Direction Vocabulary

The directional vocabulary and coordinate signs are not two competing systems.

They are exact aliases at the frame level:

```text
increasing x  = movement toward Panoris
decreasing x  = movement toward Panvel

increasing y  = movement toward Pankor
decreasing y  = movement toward Panvath
```

A conforming implementation must not reverse these relationships.

---

## 12. No Semantic Center

Choosing axis orientation does not choose an origin location.

The origin is a mathematical anchor, not:

- a capital;
- a sacred center;
- a geographic center;
- a political center;
- a World center;
- a Parcel origin.

The permanent Requirements prohibition against semantic privilege remains intact.

---

## 13. No World-Form Consequence

The canonical frame does not orient BitPangea's World silhouette by meaning.

Spatial Ground may place the World within this frame using exact translation and scale.

The Survey frame establishes where coordinate increase occurs.

It does not establish which way the World "ought to face" aesthetically.

Presentation systems may rotate the World for display without changing canonical spatial truth.

---

## 14. Rendering Independence

A renderer may use a screen frame such as:

```text
+x = right
+y = down
```

provided it applies a deterministic view transformation from canonical Survey coordinates.

Such rendering coordinates are not canonical coordinates.

Likewise:

- camera rotation;
- globe rotation;
- map rotation;
- zoom;
- projection;
- viewport inversion

remain derived presentation behavior.

---

## 15. Transformation Discipline

Any canonical transformation mathematics developed later must treat this frame as the source orientation.

Derived transformations may rotate or reflect a view only where the governing transformation rules permit.

They do not create alternate canonical frames.

There remains exactly one canonical Survey frame.

---

## 16. Spatial Ground Compatibility

Spatial Ground's preferred World boundary can now be mapped into a canonical directional system.

The production mapping policy remains:

```text
x_FSF = tx + s*x_design
y_FSF = ty + s*y_design
```

with:

```text
s > 0
```

A positive scale preserves orientation.

Therefore:

- Panoris remains positive x;
- Pankor remains positive y;
- no reflection is introduced;
- the World silhouette retains handedness.

The actual values of `tx`, `ty`, and `s` remain unresolved until origin and Survey Domain geometry are selected.

---

## 17. Why Reflection Is Not Canonical Placement

A reflection would reverse handedness.

Therefore Spatial Ground's production placement SHALL NOT use reflection unless a future adopted FSF rule explicitly requires one.

No such requirement currently exists.

The existing production policy correctly prohibits reflection.

---

## 18. Angular Unit Deferred

This decision does not choose:

- degrees;
- radians;
- turns;
- Pang-derived angular units;
- another exact canonical angular measure.

It selects only:

- the zero-direction basis relationship;
- positive rotational orientation;
- handedness.

Angular unit selection remains future FSF formal work.

---

## 19. Axis Notation

The mathematical axis notation selected for formal work is:

```text
x
y
```

with semantic direction aliases:

```text
x-axis = Panoris–Panvel axis
y-axis = Pankor–Panvath axis
```

The eventual normative serialization may encode axis names differently.

This record selects the mathematical meaning, not final interchange syntax.

---

## 20. Tuple Order

Canonical planar coordinate tuples SHALL use the order:

```text
(x, y)
```

not:

```text
(y, x)
```

This establishes one deterministic mathematical ordering.

The final serialized object syntax remains deferred.

---

## 21. Exact Basis Representation

Conceptually, the canonical basis vectors are:

```text
e₁ = (1, 0)
e₂ = (0, 1)
```

where the scalar `1` means one unit along the corresponding canonical axis, with physical linear measure expressed in Pang through coordinate values.

This basis is dimensionless as orientation structure.

Coordinate components themselves carry Pang measure.

---

## 22. Frame Invariants

Every conforming canonical implementation SHALL preserve:

```text
+x = Panoris
-x = Panvel
+y = Pankor
-y = Panvath
tuple order = (x,y)
handedness = right-handed
positive rotation = counterclockwise
```

These are frame invariants.

---

## 23. Rejected Alternatives

| Candidate | Disposition | Primary reason |
|---|---|---|
| +x East, +y North, right-handed | **SELECTED** | conventional, coherent, minimal inversion |
| +x West, +y North | **REJECTED** | unnecessary x-axis inversion |
| +x East, +y South | **REJECTED** | screen convention, not mathematical ground convention |
| left-handed canonical frame | **REJECTED** | unnecessary divergence from standard exact planar geometry |
| clockwise-positive canonical rotation | **REJECTED** | inconsistent with selected right-handed standard orientation |
| multiple canonical frames | **REJECTED** | violates one-global-frame commitment |

---

## 24. Requirements Compatibility Judgment

The selected frame satisfies the permanent commitments to:

- one global canonical frame;
- one permanent handedness;
- one canonical rotational orientation;
- permanent canonical directions;
- absolute foundational reference;
- implementation-independent spatial meaning.

It does not introduce:

- higher-layer semantics;
- World membership;
- political meaning;
- rendering dependence;
- semantic privilege.

No existing Requirement must be changed.

---

## 25. Gate Effect

Spatial Ground blocker:

```text
FSF-B02 — Exact Canonical Frame
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED
SPECIFICATION INCORPORATION — PENDING
CONFORMANCE / REFERENCE VECTORS — PENDING
FORMAL ADOPTION — PENDING
```

The unresolved portion of frame placement is now isolated to the exact **origin location**, which is a separate blocker.

---

## 26. Next Formal Mathematical Decision

The next decision SHALL address:

> **Exact Canonical Origin Placement**

It must determine:

- where `(0,0)` lies within the finite Survey Domain;
- whether the origin lies inside the Domain interior or on its boundary;
- how origin placement relates to Domain symmetry or asymmetry;
- how to avoid semantic privilege;
- how the choice supports exact World placement and future Survey capacity.

This decision must not silently choose the final Survey Domain shape before that question is formally resolved.

---

## 27. Standing

**CANONICAL AXIS ORDER — (x,y)**

**+x — PANORIS / EAST**

**-x — PANVEL / WEST**

**+y — PANKOR / NORTH**

**-y — PANVATH / SOUTH**

**HANDEDNESS — RIGHT-HANDED**

**POSITIVE ROTATION — COUNTERCLOCKWISE**

**ZERO-DIRECTION BASIS — PANORIS**

**ORIGIN LOCATION — NOT YET SELECTED**

**ANGULAR UNIT — NOT YET SELECTED**

**SERIALIZATION — NOT YET SELECTED**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 28. Governing Closing Statement

> **Panoris increases x. Pankor increases y. Together they establish one right-handed plane in which canonical position, orientation, winding, and direction can be computed exactly and interpreted the same way by every implementation.**
