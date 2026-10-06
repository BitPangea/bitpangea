# Foundational Survey Fabric — Reference Vectors

## Canonical Test Corpus Framework

**The Atlas · The Architecture · Foundational Survey Fabric**  
**Layer:** Reference Vectors  
**Coverage:** Sections 01–12  
**Status:** Established Test Corpus Framework · Adopted Production Profile  
**Governing Specification:** FSF-SPEC-1.0 — CANONICALLY ADOPTED

This directory contains the **Foundational Survey Fabric Reference Vector framework** for BitPangea.

Reference Vectors answer one governing question:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/
```

Main page:

```text
/theatlas/foundational-survey-fabric/reference-vectors/index.html
```

README:

```text
/theatlas/foundational-survey-fabric/reference-vectors/README.md
```

---

## Architectural Sequence

The dependency sequence is:

```text
Requirements
    ↓
Specification
    ↓
Conformance
    ↓
Reference Vectors
```

Meaning:

```text
Requirements
    establish what must be satisfied.

Specification
    defines the mathematics that satisfies it.

Conformance
    defines how an implementation proves compatibility.

Reference Vectors
    provide exact examples, negative cases, and adversarial cases
    that prove the expected results.
```

The governing rule is:

> **Reference Vectors demonstrate the Specification. They do not create the Specification.**

---

## Current Standing

All twelve Reference Vector sections are reconciled against the canonically adopted **FSF-SPEC-1.0** and the established Conformance architecture.

The corpus demonstrates the adopted production profile through:

```text
EXACT EXECUTABLE VECTORS
NEGATIVE / INVALID VECTORS
COMPATIBILITY VECTORS
ADVERSARIAL VECTORS
UNSUPPORTED / RESERVED-BOUNDARY VECTORS
```

---

## Adopted Executable Profile

The adopted production profile includes:

```text
CRPC exact rational coordinates
canonical Point
canonical Segment
canonical SCPE
exact Point equality
exact orientation
Point-on-Segment
Segment intersection
Point-in-SCPE
SCPE validity
containment
connectedness
deterministic normalization
ECEM exact-place semantics
exact coordinate differences
exact SCPE area
canonical orientation frame
restricted exact transformation
FSF-CJSON-1.0
invalid / unsupported separation
Conformance evidence
version-compatibility preservation
adversarial stress testing
```

---

## Canonical Survey Domain

The adopted Survey Domain is:

```text
H = 1,000,000 Pang

D = [-1,000,000,+1,000,000]²
```

The governed production placement envelope is:

```text
P = [-500,000,+500,000]²
```

with:

```text
World-space ⊂ interior(P) ⊂ interior(D)
```

Reference Vectors may therefore use exact canonical numerical Domain-edge and corner fixtures.

The numerical value `H = 1,000,000 Pang` is a governed foundational design constant.

---

## Reserved Outside the Current Production Profile

The adopted Reference Vector corpus must preserve explicit boundaries around capabilities not adopted by **FSF-SPEC-1.0**.

Examples include:

```text
unrestricted Boolean / composite-result closure
general arbitrary difference closure
other extended mathematical capability not adopted by FSF-SPEC-1.0
```

Reference Vectors may test that such behavior is unsupported or outside profile.

They may not create canonical semantics for it.

---

# Reference Vector Sections

## 01 — Addressing Vectors

Tests:

```text
CRPC Point addressing
canonical equality
canonical ordering
ECEM
frame interpretation
FSF-CJSON Point representation
version-preserved meaning
```

Path:

```text
/reference-vectors/01-addressing-vectors/
```

---

## 02 — Survey Domain Limit Vectors

Tests:

```text
origin
canonical Survey Domain D
interior
closed boundary
corners
outside classification
ECEM boundary stability
World / Survey separation
```

Path:

```text
/reference-vectors/02-domain-boundary-vectors/
```

---

## 03 — Pang Measurement Vectors

Tests:

```text
Pang scale
exact coordinate difference
sub-Pang rational values
exact SCPE area
area normalization invariance
lossless / lossy measurement representation
```

Open generally:

```text
irrational distance
arbitrary path length
general boundary length
```

Path:

```text
/reference-vectors/03-pang-measurement-vectors/
```

---

## 04 — Orientation Vectors

Tests:

```text
Pankor = +y
Panvath = -y
Panoris = +x
Panvel = -x
right-handedness
Panoris zero direction
counterclockwise positive rotation
exact determinant orientation
```

Open:

```text
final angular unit
arbitrary exact rotation
```

Path:

```text
/reference-vectors/04-orientation-vectors/
```

---

## 05 — Geometry Vectors

Tests:

```text
Point
Segment
SCPE
Point equality
orientation
Point-on-Segment
Segment intersection
Point-in-SCPE
SCPE validity
containment
connectedness
normalization
semantic geometry equality
```

Open:

```text
general Boolean / composite result geometry
```

Path:

```text
/reference-vectors/05-geometry-vectors/
```

---

## 06 — Normalization Vectors

Tests:

```text
CRPC reduction
canonical zero
Point normalization
Segment endpoint ordering
SCPE traversal normalization
redundant-collinear removal
closure-point removal
canonical SCPE start
idempotence
no snapping
FSF-CJSON canonicalization
```

Path:

```text
/reference-vectors/06-normalization-vectors/
```

---

## 07 — Transformation Vectors

Tests:

```text
translation
Point / Segment / SCPE translation
positive uniform scale
identity
inverse translation
inverse exact uniform scale
composition
orientation preservation
Domain validity
```

Outside current closed profile:

```text
reflection as canonical placement
nonuniform scale
shear
arbitrary rotation
```

Path:

```text
/reference-vectors/07-transformation-vectors/
```

---

## 08 — Precision Vectors

Tests:

```text
CRPC exact rational values
ECEM
sub-Pang exactness
canonical / storage / rendering separation
lossless conversion
lossy reduction
no silent rounding
canonical round-trip
version-preserved meaning
```

Open:

```text
non-rational derived-scalar representation
```

Path:

```text
/reference-vectors/08-precision-vectors/
```

---

## 09 — Invalid-Input Vectors

Tests:

```text
malformed CRPC
malformed Point
invalid Segment
invalid SCPE
out-of-Domain input
ambiguous input
FSF-CJSON failures
unsupported representation
unsupported version / profile
invalid normalization
snapping traps
unsupported operations
```

Key distinction:

```text
VALID AND SUPPORTED
VALID BUT UNSUPPORTED
INVALID
```

Path:

```text
/reference-vectors/09-invalid-input-vectors/
```

---

## 10 — Serialization Vectors

Tests:

```text
FSF-CJSON-1.0
CRPC serialization
Point serialization
Segment serialization
SCPE serialization
canonical integer strings
canonical key order
UTF-8 canonical bytes
required / prohibited fields
canonical round-trip
cross-implementation exchange
```

Path:

```text
/reference-vectors/10-serialization-vectors/
```

---

## 11 — Version / Conformance Vectors

Tests:

```text
compatible meaning preservation
backward compatibility
VALID BUT UNSUPPORTED
Mandatory Core PASS
Mandatory Core FAIL
profile-scope evaluation
canonical-result equivalence
Conformance Report evidence
Declaration consistency
independent reproduction
cross-evaluator agreement
```

Path:

```text
/reference-vectors/11-version-conformance-vectors/
```

---

## 12 — Pathological Edge Cases

Tests adversarially:

```text
boundary contact
Point equality
Segment intersection
SCPE simplicity
normalization fixed point
extreme CRPC
precision boundaries
parameterized Domain boundaries
Point-in-SCPE
exact area
transformation chains
FSF-CJSON
canonical round-trip
hidden state
invalid / unsupported separation
termination
Specification ambiguity
higher-layer leakage
```

Path:

```text
/reference-vectors/12-pathological-edge-cases/
```

---

## Architectural Boundaries

Reference Vectors may:

```text
prove
compare
reproduce
stress
expose ambiguity
demonstrate exact expected results
```

Reference Vectors may not:

```text
invent missing mathematics
override the adopted canonical Survey Domain
invent non-adopted measurement semantics
invent non-adopted transformation closure
invent non-rational result types
invent general Boolean result geometry
override the Specification
grant canonical institutional standing
pull Spatial Ground or Parcel meaning into FSF
```

---

## Higher-Layer Boundary

The FSF architectural handoff remains:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

Reference Vectors test FSF truth only.

They do not decide:

```text
World membership
Parcel ownership
jurisdiction
rights
governance
infrastructure
civilization meaning
```

---

## Requirements Traceability

Requirements ownership and reverse traceability are closed across all twelve Reference Vector sections.

The Reference Vector corpus remains subordinate to:

```text
Requirements Findings
Specification clauses
Conformance rules
```

Traceability does not imply that every future fixture is already canonical.

---

## Corpus Development Rule

The governing development rule is:

```text
if behavior is adopted by FSF-SPEC-1.0:
    build exact executable vectors

if behavior is valid but outside the adopted profile:
    classify it explicitly as unsupported / reserved

if future capability is not specified:
    do not invent canonical expected results
```

Reference Vectors demonstrate the Specification.

They do not create the Specification.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTIONS 01–12 — RECONCILED
GOVERNING SPECIFICATION — FSF-SPEC-1.0 CANONICALLY ADOPTED

ADOPTED EXECUTABLE PROFILE — AVAILABLE
CANONICAL SURVEY DOMAIN VECTORS — AVAILABLE
REQUIREMENTS TRACEABILITY — CLOSED
FSF-CJSON-1.0 TEST SURFACE — AVAILABLE
CONFORMANCE TEST SURFACE — AVAILABLE
ADVERSARIAL TEST SURFACE — AVAILABLE

H = 1,000,000 PANG — ADOPTED
D = [-1,000,000,+1,000,000]² — ADOPTED
P = [-500,000,+500,000]² — GOVERNED PRODUCTION ENVELOPE

UNRESTRICTED BOOLEAN / COMPOSITE-RESULT CLOSURE — RESERVED
OTHER NON-ADOPTED CAPABILITY — UNSUPPORTED / RESERVED
REFERENCE VECTORS — SUBORDINATE TO FSF-SPEC-1.0
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
