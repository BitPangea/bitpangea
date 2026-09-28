# Foundational Survey Fabric — Specification 03

## Canonical Addressing and Precision

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification Section:** 03  
**Status:** Candidate Mathematics Integrated  
**Canonical Adoption:** Not yet performed

---

## Purpose

Specification 03 defines the relationship between canonical spatial reference, exact Point meaning, precision extension, normalization, and future address forms.

Its governing principle is:

> **Precision by extension, not migration.**

The section now distinguishes two things that were previously open together:

1. the **mathematical meaning** of canonical Point reference; and
2. the **public address grammar** used to present or exchange that meaning.

The first is now substantially resolved at candidate-design level.

The second remains open.

---

## Current Candidate Reference Model

A valid canonical Point reference denotes:

> **one exact Survey position**

It does not denote:

```text
an uncertainty area
a parent cell
a rounded location
an approximate position
a coarse Point
a fine Point
a set of descendants
a zoom-dependent place
```

Canonical Point meaning is grounded in exact CRPC coordinates in the permanent Survey frame.

Conceptually:

```text
canonical Point meaning
=
exact (x,y) CRPC position
```

within the valid Survey Domain.

---

## Relevant Formal Mathematical Decisions

### FMD-01 — Exact Coordinate Representation

**Directly relevant — integrated.**

Canonical Point coordinates use reduced rational Pang values:

```text
q = n/d Pang
```

with:

```text
n ∈ ℤ
d ∈ ℕ+
gcd(|n|,d) = 1
```

Canonical zero:

```text
0/1
```

This gives the canonical Point model an exact mathematical reference independent of floating-point implementation.

---

### FMD-02 — Canonical Frame and Handedness

**Relevant — inherited.**

Every canonical Point reference is absolute within the one global Survey frame:

```text
tuple = (x,y)

+x = Panoris
-x = Panvel
+y = Pankor
-y = Panvath
```

Frame ownership remains primarily in Specification 02.

Specification 03 depends upon that frame but does not redefine it.

---

### FMD-03 — Canonical Origin Placement

**Relevant — inherited.**

The global reference frame uses permanent origin:

```text
(0,0)
```

Canonical Point references are absolute with respect to that origin.

---

### FMD-04 — Survey Domain Geometry and Dimensions

**Relevant only as the validity envelope.**

Specification 03 does not own Domain geometry.

It inherits the rule that only Points valid within the canonical Survey Domain are valid canonical Survey Points.

No address form may make an out-of-Domain position valid merely by encoding it.

---

### FMD-05 — Canonical Primitive Geometry

**Relevant — Point is the primary addressing subject.**

FMD-05 establishes Point as a canonical foundational primitive.

Segment and SCPE may also possess canonical geometric representations, but Specification 03's precision semantics are especially important for Point reference.

An extent is not a low-precision Point.

A Point is not an uncertainty extent.

---

### FMD-06 — Exact Geometry Predicates and Validation

**Compatible — no new address semantics required.**

Validation occurs before a candidate expression becomes canonical Survey truth.

Invalid coordinates or invalid geometry are not rescued by address parsing, aliasing, normalization, or snapping.

---

### FMD-07 — Canonical Geometry Normalization

**Directly relevant — integrated.**

Equivalent canonical geometry settles into one deterministic normal form.

For CRPC values:

```text
positive denominator
reduced fraction
zero = 0/1
```

For supported geometry, FMD-07 governs canonical normalization.

Normalization preserves meaning:

```text
geom(N(G)) = geom(G)
```

and is idempotent:

```text
N(N(G)) = N(G)
```

---

### FMD-08 — Canonical Serialization and Interchange

**Relevant — integrated with an explicit boundary.**

The current candidate machine serialization is:

```text
FSF-CJSON-1.0
```

It carries exact canonical FSF geometry.

However:

> **FSF-CJSON is not automatically the public canonical address grammar.**

Specification 06 owns normative serialization and interchange.

Specification 03 owns the spatial meaning that every address or encoding must preserve.

---

### FMD-09 — Exact Precision and Refinement Semantics

**Directly relevant — major integration.**

The selected model is the:

```text
Exact Coordinate Extension Model
ECEM
```

Under ECEM:

- every canonical Point is already exact;
- no coarse/fine Point semantic hierarchy exists;
- no parent/child Point relation is inferred;
- no cell or tile represents an approximate Point unless a separate higher-layer construct explicitly says so;
- sub-Pang precision comes from exact CRPC fractions;
- compatible future capability may expand without moving established place.

Formally, for compatible versions:

```text
R_v ⊆ R_(v+1)
```

and for every previously valid reference `r`:

```text
meaning_v(r) = meaning_(v+1)(r)
```

---

## What Changed From the Previous Specification 03

The previous Specification correctly established:

- universal addressability for representable place;
- permanent deterministic reference meaning;
- self-resolving reference;
- absolute reference;
- precision by extension;
- precision without semantic tiers;
- sub-Pang exactness;
- finite exact representation;
- deterministic canonicalization;
- no reuse;
- address/measure agreement;
- no silent snapping.

Those principles remain.

The following matters previously described as open are now resolved at candidate-design level:

```text
coordinate-vs-hierarchical Point semantics
    -> exact coordinate Point model selected

precision mechanism
    -> ECEM

coarse/fine Point relationship
    -> no foundational hierarchy

parent/child Point behavior
    -> none

sub-Pang precision
    -> exact CRPC fractions

canonical normalization
    -> FMD-07 normal form

canonical machine representation
    -> FSF-CJSON-1.0 for current core geometry
```

---

## What Did Not Need to Change

The following architectural principles remain intact:

- Addressability does not depend on stored objects.
- Canonical spatial meaning is permanent.
- References remain independent of Parcels, Regions, ownership, landmarks, or other higher-layer entities.
- Precision does not create semantic tiers.
- Canonical references remain finite and exactly computable.
- Canonicalization preserves place.
- References are never reused for different places.
- Silent snapping is prohibited.
- Address and Pang-based position must agree exactly.

---

## Still Open

The underlying Point semantics are now substantially selected, but the complete addressing system is not finished.

The following remain open:

### Public Canonical Address Grammar

No final human-facing or compact canonical address string has been selected.

Possible future forms must resolve deterministically to the same exact canonical Point meaning.

### Encoding Alphabet / Display Syntax

No final compact alphabet, punctuation scheme, URI form, or presentation convention is selected.

### Address Version Identifier

The exact syntax by which an address form identifies its governing Specification or address grammar remains open.

### Governed Complexity Limits

The current candidate permits finite exact rational representation, but final parser and canonical complexity limits remain to be specified.

### Optional Derived Subdivision Syntax

Future grids, tiles, cells, or hierarchical indexes may exist as derived tools.

If introduced, they must not create parent/child Point semantics or redefine canonical precision.

---

## Point vs Extent

This distinction is especially important for addressing:

```text
Point
-> one exact position

Extent
-> one exact set of positions
```

An extent is not a coarse Point.

A Point is not a zero-size uncertainty region.

If future address types identify extents, they must be explicitly typed as extent references rather than interpreted as lower-resolution Point addresses.

---

## Version Compatibility

Compatible evolution must preserve established reference meaning.

A successor Specification may:

- support larger exact finite coordinate values;
- support larger denominators;
- add lossless encodings;
- add a future public address syntax;
- improve normalization or parser definitions where semantics remain unchanged.

It may not:

- move an existing Point;
- renumber a place into a different place;
- reinterpret an old reference;
- reuse an old reference for new spatial meaning;
- silently round or snap old coordinates.

The governing rule remains:

> **Version the standard, not the place.**

---

## Relationship to Serialization

The candidate production sequence is:

```text
exact mathematical Point / geometry
        ↓
canonical normalization
        ↓
FSF-CJSON-1.0
        ↓
canonical bytes
```

A future public address grammar may be another governed representation of the same canonical spatial meaning.

If so, it must map exactly and deterministically to the same underlying canonical Point or typed spatial expression.

---

## Repository Files

Recommended directory:

```text
theatlas/foundational-survey-fabric/specification/03-addressing-refinement/
```

Primary files:

```text
index.html
README.md
```

The public `index.html` is the human-facing Specification section.

This `README.md` preserves repository-facing reference semantics, FMD traceability, integration standing, and remaining addressing work.

---

## Standing

```text
SPECIFICATION 03 — CANDIDATE MATHEMATICS INTEGRATED

POINT REFERENCE MEANING — EXACT
REFERENCE FRAME — ABSOLUTE GLOBAL FSF FRAME
COORDINATE SCALAR — CRPC
PRECISION MODEL — ECEM
SUB-PANG PRECISION — EXACT RATIONAL
COARSE/FINE POINT HIERARCHY — NONE
PARENT/CHILD POINT SEMANTICS — NONE
EXTENT AS APPROXIMATE POINT — PROHIBITED
CANONICAL NORMALIZATION — DEFINED FOR CURRENT CORE
SILENT SNAPPING — PROHIBITED
CANONICAL MACHINE SERIALIZATION — FSF-CJSON-1.0
PUBLIC CANONICAL ADDRESS GRAMMAR — OPEN
ADDRESS DISPLAY / COMPACT SYNTAX — OPEN
FORMAL ADOPTION — NOT YET PERFORMED
```

---

## Governing Closing Statement

> **A canonical address may change how exact place is written, but it may never change what place means. Precision expands the reference system by expressing more exact positions, not by moving or subdividing the meaning of positions already established.**
