# Addressing Vectors

## Foundational Survey Fabric · Reference Vectors Section 01

**The Atlas · The Architecture · Foundational Survey Fabric · Reference Vectors**  
**Section:** 01 — Addressing Vectors  
**Scope:** Canonical Point Reference, Equality, Normalization, ECEM, and Interchange  
**Status:** Candidate Exact Fixture Model Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Reference Vectors Section 01 — Addressing Vectors** for the BitPangea **Foundational Survey Fabric**.

The governing question is:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/01-addressing-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/01-addressing-vectors/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/01-addressing-vectors/README.md
```

---

## Purpose

Addressing Vectors provide executable evidence that independent implementations interpret the same canonical Survey Point as the same exact place.

They test:

```text
CRPC
canonical Point meaning
Point equality
Point ordering
canonical frame interpretation
normalization
ECEM
FSF-CJSON-1.0 Point interchange
version-preserved Point meaning
```

Reference Vectors demonstrate the governing Specification.

They do not create missing mathematics.

---

## Current Addressing Model

The current candidate coordinate scalar is the exact reduced rational Pang coordinate:

```text
q = n/d Pang
```

with:

```text
n ∈ Z
d ∈ N+
gcd(|n|, d) = 1
zero = 0/1
```

A canonical Survey Point is:

```text
(x, y)
```

with both coordinates represented by exact CRPC values.

---

## Canonical Frame

```text
+x = Panoris = East
-x = Panvel  = West
+y = Pankor  = North
-y = Panvath = South
```

The canonical origin is:

```text
(0,0)
```

Point interpretation is independent of Parcels, Regions, ownership, landmarks, or other higher-layer meaning.

---

## ECEM

Under the **Exact Coordinate Extension Model (ECEM)**:

```text
one valid canonical Point
=
one exact Survey position
```

A Point is not a cell, parent address, uncertainty region, rounded location, or set of descendants.

Future compatible versions may add newly expressible exact Points. They may not move or reinterpret existing Points.

---

## Addressing Vector Families

The Section 01 corpus covers basic canonical Point vectors, CRPC normalization, ECEM meaning preservation, exact Point equality, deterministic Point ordering, frame interpretation, FSF-CJSON-1.0 Point interchange, valid noncanonical normalization where permitted, and compatible version-preservation cases.

---

## Survey Domain Dependency

The candidate Survey Domain geometry is presently parameterized as:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

where:

```text
H > 0
H is exact CRPC
```

The **numerical value of H is still open**.

Therefore:

```text
capacity-independent Point fixtures
    -> may be created now

symbolic / parameterized Domain cases
    -> may be documented now

concrete canonical edge fixtures depending on one numeric H
    -> not final yet
```

Reference Vectors must not select a convenient Domain half-span merely to complete a test corpus.

---

## Equality Rule

Two canonical Points are equal exactly when:

```text
normalize(x1) = normalize(x2)
and
normalize(y1) = normalize(y2)
```

No tolerance is permitted.

---

## Normalization Boundary

Normalization may canonicalize mathematically equivalent valid input.

It may not guess, snap, round, coerce malformed data, repair invalid geometry, or invent missing values.

Invalid input remains invalid.

---

## Interchange Rule

For canonical FSF-CJSON-1.0 Point objects:

```text
canonical object
    ↓ serialize
canonical bytes
    ↓ parse
same canonical object
    ↓ serialize
same canonical bytes
```

Where the profile requires one canonical byte sequence, byte disagreement is Conformance failure.

---

## Higher-Layer Boundary

Addressing Vectors shall not derive Point meaning from Parcel identity, Spatial Ground membership, Region, landmark, ownership, jurisdiction, settlement, rendering, or UI state.

FSF supplies canonical spatial reference and mathematics. Higher layers may refer to those Points. They do not redefine them.

---

## Invalid-Input Boundary

This section focuses primarily on valid Point semantics. The dedicated Invalid-Input Vectors corpus should carry comprehensive malformed CRPC, malformed Point, invalid FSF-CJSON, duplicate-key, forbidden-field, ambiguous-input, and concrete out-of-Domain cases once H is selected.

---

## Requirements Basis

Addressing Vectors continue to derive especially from Requirements Findings:

```text
#7–#10
#17
#20–#22
#30
#41–#42
#54
#57
#59
#64
#70–#75
#78–#83
```

Requirements remain authoritative at their own layer. Reference Vectors demonstrate them through the governing Specification and Conformance rules.

---

## What Changed From the Previous Page

The earlier page correctly refused to invent canonical addresses while the addressing grammar and precision mechanism were unresolved.

That is no longer the current standing for the capacity-independent core. The Specification now provides CRPC, canonical `(x,y)` Point semantics, the canonical frame, exact Point equality and ordering, ECEM, deterministic normalization, FSF-CJSON-1.0, and compatible meaning preservation.

Accordingly, Addressing Vectors may now move from category-only planning into exact executable candidate fixtures.

The remaining important blocker is the unresolved numerical Survey Domain half-span `H`.

---

## Still Open

```text
final vector identifiers
final fixture packaging
final top-level corpus schema
final expected-result record format
final numerical Domain-edge fixtures after H is selected
any future human-facing alias or alternate address syntax
final canonical publication/adoption process
```

---

## Architectural Boundary

> **Reference Vectors demonstrate the address semantics selected by the Specification. They do not choose unresolved address semantics or numerical Domain capacity on the Specification's behalf.**

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTION 01 — ADDRESSING VECTORS

CRPC ADDRESS SEMANTICS — DEFINED
CANONICAL POINT MODEL — DEFINED
POINT EQUALITY — TESTABLE
POINT ORDERING — TESTABLE
CANONICAL FRAME — TESTABLE
ECEM EXACT-PLACE SEMANTICS — TESTABLE
FSF-CJSON-1.0 POINT INTERCHANGE — TESTABLE
VERSION-PRESERVED POINT MEANING — TESTABLE

CAPACITY-INDEPENDENT FIXTURES — READY FOR CONSTRUCTION
NUMERICAL DOMAIN HALF-SPAN H — OPEN
CONCRETE DOMAIN-EDGE FIXTURES — NOT YET FINAL
FINAL VECTOR CORPUS PACKAGING — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
