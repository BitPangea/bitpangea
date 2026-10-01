# Foundational Survey Fabric — Requirements V

## Native BitPangea Measurement and Orientation

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Requirements Section:** V  
**Findings:** #34–#43  
**Canonical Page:** https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/05-measurements-orientation/  
**Status:** REQUIREMENTS-LEVEL FOUNDATION — CURRENT / RECONCILED THROUGH DAY #126

---

## Purpose

This directory preserves **Requirements V — Native BitPangea Measurement and Orientation**.

The section defines the native measurement and orientation constraints of the Foundational Survey Fabric:

- Pang as BitPangea's canonical linear scale;
- square Pang as canonical area expression;
- exact spatial separation;
- permanent native directions;
- one permanent origin;
- one global canonical frame;
- exact agreement between address and measurement;
- absolute canonical reference;
- and one exact angular system.

These are Requirements-level constraints.

Later mathematical decisions realize them but do not rewrite them.

---

## Governing Principle

> **Pang defines scale. Canonical mathematics defines precision.**

Pang is the native unit of linear spatial measure.

It does not determine:

- Parcel identity;
- Survey-cell identity;
- display scale;
- physical-world distance;
- or the ultimate precision depth of canonical place.

Precision belongs to the canonical mathematics.

---

## Current Candidate Realization

Subsequent formal mathematical design has selected the following candidate realization for the solved core.

### Coordinate / Precision Model

```text
CRPC
Canonical Rational Pang Coordinates

ECEM
Exact Coordinate Extension Model
```

CRPC provides exact rational Pang coordinates.

ECEM provides finer-than-Pang precision without moving established place.

### Canonical Frame

```text
+x = Panoris / East
-x = Panvel  / West

+y = Pankor  / North
-y = Panvath / South

origin = (0,0)
frame = right-handed
positive rotation = counterclockwise
```

These conventions are candidate-resolved.

### Area

Exact area for the current rational SCPE candidate core is calculated through exact shoelace evaluation and expressed in square Pangs.

### Measurement Questions Still Open

The complete measurement system is not yet closed.

Still open:

- general exact Euclidean distance scalar representation;
- general path / boundary-length scalar representation;
- exact closure for broader future geometry classes;
- final canonical angular unit / notation;
- arbitrary exact rotation representation.

---

## Findings #34–#43 — Current Interpretation

### Finding #34 — Native Spatial Scale: Pang

Pang remains the canonical native linear scale.

External units are derived presentation or application concerns.

### Finding #35 — Pang Defines Scale

The Requirement remains unchanged.

The current candidate precision realization is ECEM over CRPC.

Thus:

```text
Pang defines scale.
CRPC / ECEM define exact representational precision.
```

### Finding #36 — Canonical Spatial Separation

One exact canonical spatial-separation rule remains required.

The general Euclidean scalar-closure question is still open because rational coordinate differences can produce irrational distances.

No approximation may be substituted as canonical truth.

### Finding #37 — Canonical Area

Exact SCPE area is candidate-resolved through exact shoelace evaluation.

This resolution applies to the current rational polygonal core.

### Finding #38 — Native Canonical Directions

The candidate frame maps the native directions as:

```text
Pankor  = North = +y
Panvath = South = -y
Panoris = East  = +x
Panvel  = West  = -x
```

### Finding #39 — Permanent Canonical Origin

The current candidate origin is:

```text
(0,0)
```

It is the mathematical midpoint of the candidate Survey Domain bounds.

It does not identify the World center, a Parcel, Lot 0, a landmark, or a culturally privileged location.

### Finding #40 — One Global Canonical Frame

The current candidate frame is singular, global, right-handed, and exact.

Higher layers may derive local views while remaining deterministically related to this frame.

### Finding #41 — Address and Pang Measurement Must Agree

CRPC now supplies the candidate exact coordinate foundation for the solved core.

The final public / canonical address syntax and grammar remain open.

Any future address grammar must preserve exact agreement with Pang-based canonical position rather than create a parallel spatial truth.

### Finding #42 — Absolute Canonical Reference

Canonical reference remains independent of Parcels, Regions, landmarks, neighboring entities, or higher-layer objects.

### Finding #43 — Canonical Angular System

The frame's rotational orientation is candidate-resolved:

```text
counterclockwise = positive
```

The final exact angular unit and notation remain open.

---

## Survey Domain Relationship

The current candidate Survey Domain is:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

where `H` is an exact positive value.

The numerical value of `H` remains OPEN.

Therefore:

- Pang scale is established;
- Domain geometry is candidate-resolved;
- numerical Domain capacity is not yet selected.

The earlier ±1,000,000 Pang working half-span is noncanonical.

---

## Institutional Sequence

The governing sequence remains:

```text
Requirements
→ Specification
→ Conformance
→ Reference Vectors
```

For this section:

- **Requirements** establish measurement and orientation obligations.
- **Specification** defines the exact mathematics.
- **Conformance** proves implementation fidelity.
- **Reference Vectors** demonstrate defined results and preserve unresolved dependencies where mathematics is still open.

Reference Vectors do not create missing distance, path-length, rotation, or angular mathematics.

---

## Higher-Layer Boundary

Canonical measurement is geometric.

It is not:

- routing distance;
- travel cost;
- traversal time;
- perceived distance;
- accessibility;
- network distance;
- ownership;
- zoning;
- value;
- or experiential scale.

Likewise, canonical orientation is foundational.

Higher layers may rotate, mirror, rename, or otherwise present direction differently, provided the relationship back to the canonical Survey frame remains deterministic where authoritative location matters.

---

## Repository Guidance

Use this directory for the authoritative presentation and supporting documentation of **Requirements V — Native BitPangea Measurement and Orientation**.

Do not use it to:

- substitute approximate measurement for canonical truth;
- make external physical-world units foundational;
- treat Pang as Parcel or cell identity;
- assign symbolic privilege to the origin;
- treat local frames as competing canonical frames;
- close the angular-unit question without formal Specification work;
- or invent approximate distance / rotation semantics to fill unresolved mathematics.

---

## Documentation Standing

The `index.html` required a limited update because several passages still described candidate-resolved matters as unresolved:

- finer-than-Pang precision mechanism;
- exact area mathematics for the current SCPE core;
- origin placement;
- and the address / Pang relationship for the current CRPC / ECEM core.

Those passages have been reconciled without changing Findings #34–#43.

The still-open distance and angular questions remain explicitly open.

---

## Standing

**FINDINGS #34–#43 — PRESERVED**

**PANG — CANONICAL LINEAR SCALE**

**CRPC / ECEM — CANDIDATE EXACT POSITION / PRECISION MODEL**

**ORIGIN `(0,0)` — CANDIDATE RESOLVED**

**CANONICAL FRAME / HANDEDNESS — CANDIDATE RESOLVED**

**POSITIVE ROTATION — COUNTERCLOCKWISE**

**SCPE AREA — CANDIDATE RESOLVED**

**GENERAL DISTANCE / PATH-LENGTH CLOSURE — OPEN**

**FINAL CANONICAL ANGULAR UNIT — OPEN**

**INDEX.HTML — UPDATED**

**README.md — CREATED**
