# Spatial Ground Reference Vectors

## Canonical Ground Test Corpus Framework

**The Atlas · The Architecture · Spatial Ground**  
**Layer:** Reference Vectors  
**Document Basis:** Spatial Ground Reference Vector Specification  
**Corpus Version:** `SG-RV-1.0`  
**Status:** COMPLETE — INITIAL CANONICAL GROUND VECTOR CORPUS ESTABLISHED  
**Formal Model:** Canonical Membership Predicate Model (CMPM)  
**Canonical Representation:** `SG-CJSON 1.0`  
**Limit Convention:** Closed World-Space  
**Conformance Basis:** Spatial Ground Conformance

This directory contains the **Spatial Ground Reference Vector framework** for BitPangea.

Reference Vectors answer one governing question:

> **Given this exact Ground input and this exact declared FSF test meaning, what exact answer must every conforming implementation produce?**

The governing rule is:

> **Specification defines the rule. Reference Vectors prove the expected result.**

Reference Vectors demonstrate Spatial Ground semantics already defined elsewhere.

They do not create Spatial Ground semantics.

---

## Public / Canonical Path

Canonical URL:

```text
https://bitpangea.com/theatlas/spatial-ground/reference-vectors/
```

Repository landing page:

```text
/theatlas/spatial-ground/reference-vectors/index.html
```

README path:

```text
/theatlas/spatial-ground/reference-vectors/README.md
```

Primary human-readable Reference Vector artifact:

```text
/theatlas/spatial-ground/reference-vectors/Spatial_Ground_Reference_Vectors.md
```

Machine-readable corpus:

```text
/theatlas/spatial-ground/reference-vectors/spatial-ground-reference-vectors-1.0.json
```

---

## Architectural Sequence

The governing framework sequence is:

```text
Requirements
→ Specification
→ Conformance
→ Reference Vectors
```

Meaning:

```text
Requirements
→ state what must remain true

Specification
→ defines how Spatial Ground works

Conformance
→ defines how implementation fidelity is proved

Reference Vectors
→ instantiate exact executable proof cases
```

> **Reference Vectors demonstrate the Specification. They do not create the Specification.**

---

## Purpose

Spatial Ground Reference Vectors provide exact fixtures against which conforming implementations can be tested.

They instantiate and test semantics already defined by:

1. the adopted Spatial Ground Requirements;
2. the Spatial Ground Specification;
3. `SG-CJSON 1.0`;
4. the Closed World-Space Convention;
5. Spatial Ground Conformance.

A vector may prove an expected result, expose a defect, or demonstrate that a dependency is unresolved.

It may not silently supply a missing rule.

---

## Source Corpus Standing

The attached governing Reference Vector source records:

```text
CORPUS — SG-RV-1.0
GROUND-LAYER EXECUTABLE VECTORS — ESTABLISHED
SYNTHETIC FSF TEST PROFILE — FSF-TEST-1.0
PRODUCTION FSF GEOMETRY — NOT INVENTED
UNRESOLVED BOUNDARY/SET-CLASS CASE — EXPOSED AS SG-RV-024
```

`SG-RV-1.0` is an initial canonical Ground-layer test corpus.

Its purpose is to test Spatial Ground semantics independently of production Survey geometry.

---

## Synthetic FSF Test Profile

The corpus uses:

```text
FSF-TEST-1.0
```

`FSF-TEST-1.0` is explicitly test-only.

It is not a BitPangea production Survey specification and must not be treated as production spatial truth.

Its synthetic valid Survey-location universe is:

```text
S_TEST = {p0, p1, p2, p3, p4, p5, p6, p7}
```

The profile supplies deterministic abstract fixtures for:

- set membership;
- equivalence;
- boundary behavior;
- canonical Ground evaluation;
- invalid-input handling.

No `FSF-TEST` identifier belongs in a canonical BitPangea World-space instance.

---

## Vector Status Classes

Each Reference Vector is classified as one of:

```text
NORMATIVE
NEGATIVE
ADVERSARIAL
BLOCKED_BY_FSF
```

### NORMATIVE

A valid input with one exact expected result.

### NEGATIVE

An invalid artifact or input with one exact expected failure class.

### ADVERSARIAL

A deliberately difficult case whose exact result is nevertheless determined.

### BLOCKED_BY_FSF

A case for which Reference Vectors must not fabricate a production answer because required lower-layer semantics are unresolved.

---

## Reference Vector Families

`SG-RV-1.0` contains twelve families:

1. SG-CJSON structure
2. Canonicalization
3. FSF leaf validity
4. Basic membership
5. Boolean composition
6. Exact limit behavior
7. Survey equivalence
8. Invalid inputs
9. Hidden-state repeatability
10. Reconstruction
11. Independent implementation
12. Reserved FSF dependency

These families exercise both positive and negative behavior and include adversarial cases intended to expose ambiguity rather than hide it.

---

## Core Executable Examples

Representative vectors include:

```text
SG-RV-001 — Basic WORLD Membership
SG-RV-002 — Basic NON_WORLD Membership
SG-RV-003 — Exact Outer Limit Membership
SG-RV-004 — Second Exact Outer Limit Membership
SG-RV-011 — Equivalent FSF Reference
SG-RV-012 — Non-Equivalent FSF Reference
SG-RV-013 — Invalid Survey Input
SG-RV-015 — Duplicate JSON Key
SG-RV-016 — JSON Number Rejection
SG-RV-017 — Unsupported Operator
SG-RV-022 — Hidden-State Repeatability
SG-RV-023 — Reconstruction
SG-RV-024 — Hole-Boundary Semantics Under Non-Regular Set Difference
```

The complete vector inventory remains in the primary Reference Vector artifact and machine-readable corpus.

---

## Canonicalization Fixtures

The corpus includes canonicalization fixtures for applicable SG-CJSON structures.

For commutative operators in the source corpus:

```text
nested same operators flatten
exact duplicates are removed
children are sorted canonically
```

For `difference`:

```text
operand order is preserved
```

Canonicalization tests distinguish representation normalization from semantic membership truth.

---

## Cross-Implementation Rule

For every executable `NORMATIVE` or `ADVERSARIAL` vector:

```text
Result_A(vector) = Result_B(vector)
```

for conforming implementations `A` and `B`.

A disagreement is not canonical plurality.

It is evidence of an implementation, vector, dependency, or Specification problem requiring review.

---

## SG-RV-024 — Reserved Dependency Case

`SG-RV-024` intentionally preserves a hard boundary/set-class case involving:

```text
difference(A,H)
```

The source corpus identifies a conflict between expression membership and a naive global reading of closed-boundary membership under the synthetic topology.

Its recorded outcome is:

```text
Expected: BLOCKED_BY_FSF
Status: BLOCKED_BY_FSF
```

The vector is deliberately retained.

It must not be "fixed" by choosing an answer inside Reference Vectors, because doing so would turn the test corpus into an alternate Specification.

---

## Reconstruction

`SG-RV-023` defines a reconstruction test in which a clean implementation receives only:

```text
Spatial Ground Specification
+ SG-CJSON definition D-A
+ FSF-TEST-1.0 fixture semantics
+ SG-RV-1.0 corpus
```

and must reproduce the complete expected membership mapping for the synthetic fixture universe.

This tests whether Spatial Ground meaning can be independently reproduced from public normative inputs rather than hidden runtime state.

---

## Vector Governance

A Reference Vector should preserve:

- vector ID;
- corpus version;
- family;
- status;
- normative inputs;
- expected result;
- governing Specification rule;
- dependency profile;
- explanatory note where needed.

A published vector must not silently change.

A corrected vector requires governed version history.

---

## What SG-RV-1.0 Does Not Contain

The attached source explicitly excludes:

- production BitPangea Survey coordinates;
- actual World-space geometry;
- actual canonical World limit coordinates;
- actual Parcel references;
- production FSF refinement examples;
- actual World-space connectedness proof fixtures.

Those omissions are deliberate in this source corpus.

The test corpus must not invent them.

---

## Architectural Boundary

Reference Vectors may:

- prove;
- compare;
- reproduce;
- stress;
- expose ambiguity;
- demonstrate exact expected results.

Reference Vectors may not:

- invent missing Specification rules;
- create World-space;
- redefine the Spatial Ground Specification;
- redefine FSF mathematics;
- convert test precedent into canonical authority;
- pull Parcel or other higher-layer meaning into Ground results.

> **A test vector may expose a missing rule. It may not invent the missing rule.**

---

## Repository Structure

Current publication structure:

```text
/theatlas/spatial-ground/reference-vectors/
├── index.html
├── README.md
├── Spatial_Ground_Reference_Vectors.md
└── spatial-ground-reference-vectors-1.0.json
```

Related framework surfaces:

```text
/theatlas/spatial-ground/requirements/
/theatlas/spatial-ground/specification/
/theatlas/spatial-ground/conformance/
```

---

## Repository Guidance

When maintaining this directory:

1. preserve the title **Spatial Ground Reference Vectors**;
2. preserve the subtitle **Canonical Ground Test Corpus Framework**;
3. preserve the canonical path `/theatlas/spatial-ground/reference-vectors/`;
4. preserve `SG-RV-1.0` as the source corpus version unless governed succession changes it;
5. preserve the sequence **Requirements → Specification → Conformance → Reference Vectors**;
6. preserve the governing question for exact inputs and exact expected results;
7. preserve the principle that Reference Vectors demonstrate rather than create the Specification;
8. preserve `FSF-TEST-1.0` as synthetic test-only material in this source corpus;
9. do not treat `FSF-TEST-1.0` as production Survey truth;
10. preserve the four vector status classes;
11. preserve exact invalid-input separation;
12. preserve cross-implementation result equality for executable vectors;
13. preserve reconstruction and hidden-state tests;
14. preserve `SG-RV-024` as a deliberately unresolved dependency case in this source corpus;
15. do not resolve a blocked vector by inventing semantics in the Reference Vector layer;
16. preserve vector version history rather than silently changing published vectors;
17. keep public HTML and README material subordinate to the primary Reference Vector artifact;
18. preserve the membership-only Spatial Ground boundary;
19. preserve the distinction between test fixtures and canonical World-space;
20. apply the Atlas editorial rule: **Chronicle records when. Atlas records what.**

---

## Status

```text
SPATIAL GROUND — REFERENCE VECTORS

CORPUS — SG-RV-1.0
INITIAL CANONICAL GROUND VECTOR CORPUS — ESTABLISHED
GROUND-LAYER EXECUTABLE VECTORS — ESTABLISHED
SYNTHETIC FSF TEST PROFILE — FSF-TEST-1.0
SG-CJSON 1.0 TEST SURFACE — ESTABLISHED
RECONSTRUCTION TEST — DEFINED
INDEPENDENT IMPLEMENTATION TEST — DEFINED
SG-RV-024 — BLOCKED_BY_FSF IN SOURCE CORPUS

REFERENCE VECTORS — SUBORDINATE TO SPECIFICATION AND CONFORMANCE
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
