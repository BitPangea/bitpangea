# Foundational Survey Fabric — Specification 02

## Canonical Frame and Measurement

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification Section:** 02  
**Status:** Candidate Mathematics Integrated — Partial Measurement Closure  
**Canonical Adoption:** Not yet performed

---

## Purpose

Specification 02 defines BitPangea's permanent foundational spatial frame and the measurement system tied to it.

Its governing principles are:

> **One World. One foundational frame. Many local perspectives.**

and:

> **Pang defines scale. Canonical mathematics defines precision.**

The section owns canonical scale, axis meaning, origin, handedness, rotational orientation, and exact measurement obligations.

---

## Current Candidate Frame

The current integrated candidate uses:

```text
tuple order: (x,y)

+x = Panoris = East
-x = Panvel  = West

+y = Pankor  = North
-y = Panvath = South

origin = (0,0)

handedness = right-handed
positive rotation = counterclockwise
```

Canonical coordinate scalars are CRPC values:

```text
q = n/d Pang

n ∈ ℤ
d ∈ ℕ+
gcd(|n|,d) = 1
```

Canonical zero is:

```text
0/1
```

---

## Relevant Formal Mathematical Decisions

### FMD-01 — Exact Coordinate Representation

**Directly relevant — integrated.**

Specification 02 now uses **Canonical Rational Pang Coordinates (CRPC)**.

CRPC gives exact rational coordinate scalars and exact sub-Pang position without floating-point truth.

Important caveat:

```text
coordinate scalar representation
≠
all derived measurement scalar representation
```

General Euclidean distance and arbitrary rotations can require irrational exact values. FMD-01 therefore resolves coordinate representation but not every measurement-output scalar.

---

### FMD-02 — Canonical Frame and Handedness

**Directly relevant — fully integrated at candidate level.**

Selected:

```text
+x = Panoris
-x = Panvel
+y = Pankor
-y = Panvath
```

with:

```text
tuple order = (x,y)
frame = right-handed
positive rotation = counterclockwise
zero direction = Panoris / +x
```

Exact orientation is:

```text
orient(A,B,C)
=
(x2-x1)(y3-y1)
-
(y2-y1)(x3-x1)
```

Classification:

```text
> 0  LEFT / counterclockwise
< 0  RIGHT / clockwise
= 0  COLLINEAR
```

---

### FMD-03 — Canonical Origin Placement

**Directly relevant — integrated.**

The permanent origin is:

```text
(0,0)
```

It is the midpoint of the exact Survey Domain coordinate bounds.

It is mathematically privileged only.

It is not the center of The World, Lot 0, the Genesis Parcel, a landmark, or a civic/cultural center.

---

### FMD-04 — Survey Domain Geometry and Dimensions

**Compatible — referenced, primarily owned by Specification 01.**

Specification 02 inherits the Domain's exact coordinate bounds and origin relationship but does not duplicate Domain ownership.

The selected Domain is centered around `(0,0)`, making the canonical frame and Domain mutually coherent.

---

### FMD-05 — Canonical Primitive Geometry

**Relevant to measurement — integrated selectively.**

Point, Segment, and SCPE provide the geometry on which frame and measurement operate.

The SCPE's exact rational vertices permit exact polygon area through shoelace mathematics.

Primitive semantics themselves remain primarily in Specification 04.

---

### FMD-06 — Exact Geometry Predicates and Validation

**Relevant — integrated selectively.**

The exact orientation determinant is used directly in this section.

The broader predicate family remains primarily in Specifications 04 and 05.

No epsilon or tolerance is permitted in canonical orientation truth.

---

### FMD-07 — Canonical Geometry Normalization

**Compatible — no major Specification 02 change required.**

Normalization guarantees deterministic geometry before measurement.

It does not alter Pang scale, the canonical frame, or measurement meaning.

---

### FMD-08 — Canonical Serialization and Interchange

**Compatible — no serialization duplicated here.**

FSF-CJSON-1.0 serializes frame-relative coordinates and geometry elsewhere.

Serialization ownership remains in Specification 06.

---

### FMD-09 — Exact Precision and Refinement Semantics

**Directly relevant to Pang precision — integrated.**

The Exact Coordinate Extension Model means:

- every canonical Point is exact;
- sub-Pang position is represented through exact CRPC fractions;
- no named sub-Pang hierarchy is required;
- precision is not decimal digit count;
- no coarse/fine Point hierarchy exists;
- compatible precision expansion does not move established place.

---

## What Changed From the Previous Specification 02

The previous page correctly established the obligations for:

- Pang;
- square Pang;
- native directions;
- permanent origin;
- one global frame;
- handedness and rotation;
- angular system;
- straight separation;
- area;
- path/boundary length;
- address/measure agreement;
- transformation integrity.

Those obligations remain.

The following previously open matters are now resolved at candidate-design level:

```text
exact coordinate representation -> CRPC
tuple order                     -> (x,y)
+x                              -> Panoris
-x                              -> Panvel
+y                              -> Pankor
-y                              -> Panvath
origin                          -> (0,0)
handedness                      -> right-handed
positive rotation               -> counterclockwise
orientation predicate           -> exact determinant sign
polygon area                    -> exact rational shoelace
sub-Pang position precision     -> CRPC under ECEM
```

---

## What Did Not Need to Change

The following architectural rules remain intact:

- Pang is uniform everywhere.
- Square Pang is the canonical area unit.
- Higher layers may use alternate presentations but must resolve back to the canonical frame.
- The origin carries no semantic or cultural privilege.
- Local coordinate systems may exist but do not become competing canonical truth.
- Measurement is geometric, not functional or institutional.
- Transformations may change representation but not canonical place.
- One Pang remains one Pang everywhere.

---

## Still Open

Specification 02 is **not fully mathematically closed**.

The following remain open:

### Canonical Angular Unit

The frame now establishes:

```text
zero direction = +x / Panoris
positive rotation = counterclockwise
```

but no canonical angular unit or exact angle representation has yet been selected.

### Exact Straight-Distance Scalar

For Points:

```text
A=(x1,y1)
B=(x2,y2)
```

squared separation is exactly rational:

```text
(x2-x1)^2 + (y2-y1)^2
```

but distance itself may require:

```text
sqrt(r)
```

for rational `r`.

The canonical exact scalar representation for that result remains open.

### Exact Path and Boundary Length

Finite sums of Segment lengths may require exact algebraic expressions beyond rational values.

The canonical scalar/expression model and normalization rules remain open.

### Arbitrary Rotation Closure

Rotating rational-coordinate geometry by arbitrary angles can produce non-rational coordinates.

The canonical representation and closure rules for arbitrary exact rotation remain open.

---

## Production Consequence for Spatial Ground

The selected production World boundary does **not** require those remaining open measurements in order to be placed into Survey space.

Its production placement may use:

```text
x_FSF = tx + s*x_design
y_FSF = ty + s*y_design
```

where:

```text
s > 0
s is exact rational
tx, ty are exact rational Pang offsets
```

This preserves CRPC coordinates, orientation, handedness, and exact geometry.

Therefore Specification 02 now supplies enough candidate frame mathematics for the selected Spatial Ground production placement path even though the complete measurement system remains open.

---

## Repository Files

Recommended directory:

```text
theatlas/foundational-survey-fabric/specification/02-frame-measurement/
```

Primary files:

```text
index.html
README.md
```

The public `index.html` is the human-facing Specification section.

This `README.md` preserves repository-facing mathematical summary, FMD traceability, integration standing, and unresolved measurement gates.

---

## Standing

```text
SPECIFICATION 02 — CANDIDATE MATHEMATICS INTEGRATED

PANG — ESTABLISHED
SQUARE PANG — ESTABLISHED

COORDINATE SCALAR — CRPC
TUPLE ORDER — (x,y)

+x — PANORIS
-x — PANVEL
+y — PANKOR
-y — PANVATH

ORIGIN — (0,0)
FRAME — RIGHT-HANDED
POSITIVE ROTATION — COUNTERCLOCKWISE
ORIENTATION PREDICATE — EXACT

POLYGON AREA — EXACT RATIONAL SHoELACE

ANGULAR UNIT / REPRESENTATION — OPEN
GENERAL EXACT DISTANCE SCALAR — OPEN
GENERAL EXACT PATH / BOUNDARY LENGTH — OPEN
ARBITRARY ROTATION CLOSURE — OPEN

CORE PRODUCTION FRAME — READY FOR PROTOTYPE USE
FULL SPECIFICATION 02 ADOPTION — NOT YET PERMITTED
```

---

## Governing Closing Statement

> **Pang fixes scale. The canonical frame fixes orientation. Exact coordinates fix position. Where derived measurement exceeds rational coordinates, the Survey Fabric must extend exact mathematics rather than replace truth with approximation.**
