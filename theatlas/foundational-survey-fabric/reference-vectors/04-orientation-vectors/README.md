# Orientation Vectors

## Foundational Survey Fabric · Reference Vectors Section 04

**The Atlas · The Architecture · Foundational Survey Fabric · Reference Vectors**  
**Section:** 04 — Orientation Vectors  
**Scope:** Native Directions, Canonical Frame, Handedness, Orientation Predicate, Rotation Boundary  
**Status:** Canonical Frame Profile Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Reference Vectors Section 04 — Orientation Vectors** for the BitPangea **Foundational Survey Fabric**.

The governing question is:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/04-orientation-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/04-orientation-vectors/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/04-orientation-vectors/README.md
```

---

## Purpose

Orientation Vectors prove exact agreement on the canonical Survey frame.

They test:

```text
Pankor
Panvath
Panoris
Panvel
axis meaning
opposed directions
right-handedness
zero direction
positive rotational convention
exact determinant orientation
orientation-preserving transformations
reflection detection
```

Reference Vectors demonstrate defined orientation semantics.

They do not invent unresolved arbitrary-rotation mathematics.

---

## Canonical Frame

The candidate canonical frame is:

```text
+x = Panoris = East
-x = Panvel  = West
+y = Pankor  = North
-y = Panvath = South
```

The Point tuple order is:

```text
(x,y)
```

The frame is:

```text
right-handed
```

The zero direction is:

```text
Panoris
```

Positive rotation is:

```text
counterclockwise
```

when viewed from the positive normal.

---

## Native Direction Vectors

### Pankor

```text
Pankor = +y
```

### Panvath

```text
Panvath = -y
```

### Panoris

```text
Panoris = +x
```

### Panvel

```text
Panvel = -x
```

These meanings are canonical.

Presentation may vary.

Canonical orientation may not.

---

## Opposed Directions

The exact canonical oppositions are:

```text
Pankor  <-> Panvath
Panoris <-> Panvel
```

These relations do not require a final named angular unit.

---

## Handedness

The Survey frame is permanently right-handed.

Reference Vectors should prove this through exact orientation cases.

A mirrored presentation does not create a second canonical frame.

---

## Exact Orientation Predicate

For ordered Points:

```text
A = (Ax,Ay)
B = (Bx,By)
C = (Cx,Cy)
```

define:

```text
orient(A,B,C)
=
(Bx-Ax)(Cy-Ay)
-
(By-Ay)(Cx-Ax)
```

The sign is exact:

```text
> 0  -> positive orientation
< 0  -> negative orientation
= 0  -> collinear
```

No epsilon is permitted.

---

## Positive Rotation

Positive rotation is:

```text
counterclockwise
```

when viewed from the positive normal.

A positive turn from Panoris proceeds toward Pankor.

The convention is already testable even though the final angular unit remains open.

---

## Orientation-Preserving Placement

The candidate placement model permits:

```text
positive uniform scale
+
translation
```

These preserve canonical orientation and handedness.

The model does not include:

```text
nonuniform scaling
shear
reflection
arbitrary warp
```

Rotation remains conditional upon the final exact frame/rotation mathematics.

---

## Reflection Boundary

Reflection reverses handedness.

Therefore:

```text
mirrored presentation
!=
orientation-preserving canonical transformation
```

A UI may mirror a view.

The FSF canonical frame does not become mirrored.

---

## Arbitrary Rotation Boundary

Arbitrary exact rotation is not yet fully closed.

The reason is mathematical:

```text
CRPC Point
+
arbitrary rotation
may produce
non-rational coordinates
```

The Specification has not yet selected the universal exact result type needed to represent all such rotated Points.

Accordingly:

```text
cardinal orientation semantics
    -> testable now

determinant orientation
    -> testable now

positive-turn convention
    -> testable now

arbitrary-angle rotated coordinates
    -> not final yet
```

---

## Angular Unit Boundary

The final canonical angular unit remains open.

Reference Vectors shall not choose:

```text
degrees
radians
turns
another angular unit
```

merely to complete the corpus.

The solved frame semantics do not require that premature choice.

---

## Cross-Implementation Agreement

For every defined orientation behavior, independent implementations must return the same exact result.

A mismatch may indicate:

```text
implementation defect
Specification ambiguity
version incompatibility
fixture defect
operation tested beyond mathematical closure
```

---

## Requirements Basis

Orientation Vectors continue to derive especially from Requirements Findings:

```text
#10
#38–#43
#50
#53
#67–#68
#74
#78–#83
```

These Findings remain authoritative at the Requirements layer.

Reference Vectors demonstrate them only through orientation mathematics actually defined by the Specification.

---

## What Changed From the Previous Page

The earlier page stated that the corpus could not yet exist because:

```text
angular unit
positive rotation
handedness
transformation mathematics
```

were unresolved.

That is no longer accurate for all four.

The candidate Specification now defines:

```text
native direction / axis mapping
right-handedness
Panoris zero direction
counterclockwise positive rotation
exact determinant orientation
orientation-preserving uniform scale + translation
```

The remaining open area is narrower:

```text
final angular unit
arbitrary-angle exact rotation
rotated-coordinate result type
canonical arbitrary-orientation encoding
```

Section 04 can therefore support a substantial exact candidate corpus now.

---

## Still Open

Remaining Section 04 work includes:

```text
canonical angular unit
arbitrary exact rotation representation
exact rotated-coordinate result scalar / coordinate class
canonical arbitrary-orientation encoding
final vector identifiers
final fixture packaging
canonical publication/adoption process
```

---

## Architectural Boundary

> **Orientation Vectors prove the canonical mathematical frame and those orientation operations actually defined by the Specification. They do not choose a missing angular unit or invent arbitrary-rotation closure.**

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTION 04 — ORIENTATION VECTORS

NATIVE DIRECTIONS — TESTABLE
CANONICAL AXIS MAPPING — TESTABLE
OPPOSED DIRECTIONS — TESTABLE
RIGHT-HANDEDNESS — TESTABLE
PANORIS ZERO DIRECTION — TESTABLE
POSITIVE ROTATION CONVENTION — TESTABLE
DETERMINANT ORIENTATION — TESTABLE
TRANSLATION / POSITIVE UNIFORM SCALE ORIENTATION PRESERVATION — TESTABLE
REFLECTION DETECTION — TESTABLE

FINAL ANGULAR UNIT — OPEN
ARBITRARY EXACT ROTATION — OPEN
ROTATED-COORDINATE RESULT TYPE — OPEN
FINAL CORPUS PACKAGING — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
