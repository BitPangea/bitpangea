# Conformance Classes

## Foundational Survey Fabric · Conformance Section 01

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 01 — Conformance Classes  
**Scope:** Compatibility  
**Status:** Integrated Specification Core Reflected  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 01 — Conformance Classes** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The conformance boundary for what an implementation must support before it may claim compatibility with the Foundational Survey Fabric.**

Its governing principle remains:

> **One mandatory truth. Optional capability above it.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/01-conformance-classes/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/01-conformance-classes/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/01-conformance-classes/README.md
```

---

## Integration Standing

The original Conformance 01 page correctly established the architecture of conformance classes but left the final mandatory scope abstract because the Specification mathematics were not yet sufficiently complete.

That condition has changed for the solved candidate core.

Specification Sections 01–07 now define deterministic candidate behavior for:

```text
CRPC
canonical frame
Point
Segment
SCPE
exact predicates
validation
canonical normalization
FSF-CJSON-1.0
ECEM
deterministic canonical output
```

Therefore Conformance may now define and test a **candidate mandatory core scope** for those capabilities.

This does **not** mean the complete FSF conformance taxonomy is finished.

---

## 01.1 — Purpose of Conformance Classes

### Classify Capability, Not Truth

Conformance classes describe which defined portions of the Specification an implementation supports and has successfully demonstrated.

They may organize:

- tests;
- interfaces;
- representations;
- optional capabilities;
- future governed profiles.

They do not create alternate canonical spatial truth.

---

## 01.2 — Candidate Mandatory Core

### A Common Exact Core Is Required

The current candidate mandatory core includes at minimum:

```text
CRPC parsing and normalization
canonical frame interpretation
Point validation
Segment validation
SCPE validation
exact core geometry predicates
canonical geometry normalization
FSF-CJSON-1.0 parsing
FSF-CJSON-1.0 serialization
ECEM-compatible precision behavior
valid / valid-noncanonical / invalid distinction
no silent snapping
deterministic canonical output
independent reproducibility
```

An implementation claiming compatibility with the solved candidate core must prove all mandatory behavior within that claimed scope.

Optional capability cannot compensate for failure of the mandatory core.

---

## 01.3 — Optional Capability Classes

Optional capability may be declared separately where the Specification actually defines the underlying semantics.

Optional capability may not:

- alter mandatory canonical truth;
- weaken exactness;
- create a second canonical result;
- substitute for a failed mandatory test;
- turn open Specification mathematics into canonical behavior.

---

## 01.4 — Open-Gate Boundary

The most important new boundary is:

> **Unspecified mathematics are not conformance classes.**

An implementation may be able to calculate an answer for an open mathematical problem.

That does not make the answer canonically conformant.

Current open examples include:

```text
general Boolean / composite result closure
arbitrary exact rotation closure
general exact distance scalar closure
general exact path / boundary-length scalar closure
future geometry not yet selected
other operation output types not yet governed
```

Conformance must not fill those gaps.

---

## 01.5 — Class Independence

Each conformance class or profile must define:

- scope;
- dependencies;
- required behavior;
- applicable Reference Vectors or proof obligations;
- pass conditions;
- failure conditions.

Support for one class does not prove another unless Conformance explicitly defines the dependency.

---

## 01.6 — Canonical Result Requirement

For identical valid canonical inputs:

```text
same defined Specification scope
        ↓
same authoritative canonical meaning
```

Where the Specification defines unique normalization or serialization:

```text
same canonical meaning
        ↓
same normalized result
        ↓
same canonical bytes
```

Programming language, architecture, storage, cache, optimization, and internal data structures may differ.

Canonical output may not.

---

## 01.7 — Validation Requirement

The current core distinguishes:

```text
CANONICAL VALID
VALID NONCANONICAL
INVALID
```

A valid noncanonical representation may normalize only when exact meaning is preserved.

Invalid input shall not be:

- guessed;
- rounded;
- snapped;
- silently repaired;
- reinterpreted;
- accepted through tolerance.

---

## 01.8 — Exactness Requirement

No conformance class may replace exact canonical truth with:

- epsilon equality;
- tolerance;
- hidden snapping;
- device precision;
- floating-point coincidence;
- implementation-specific state.

Lossy or derived views may exist only where explicitly identified as noncanonical or derived.

---

## 01.9 — Serialization and Version Scope

A conformance claim must identify the standard and profile it proves.

For the current solved machine-interchange core:

```text
FSF-CJSON-1.0
```

is the candidate canonical serialization format.

A serialization conformance claim must identify it explicitly.

The final top-level FSF Specification identifier syntax remains open and must not be invented by Conformance.

---

## 01.10 — Reference Vector Applicability

Every mandatory capability should have executable proof.

Reference Vectors may establish:

- valid canonical cases;
- valid noncanonical normalization cases;
- invalid cases;
- exact predicate results;
- canonical byte results;
- cross-implementation equality.

Reference Vectors demonstrate the Specification.

They do not create missing semantics.

---

## 01.11 — Independent Reproducibility

Conformance must be reproducible by independent implementers.

It shall not depend on:

- proprietary interpretation;
- unpublished rules;
- hidden test logic;
- exclusive institutional knowledge;
- shared runtime state;
- shared implementation libraries.

---

## 01.12 — Claim Boundary

An implementation may claim only what it proves.

It may not present as canonical conformance:

- partial support;
- experimental support;
- untested functions;
- private extensions;
- unsupported open-gate behavior.

---

## 01.13 — Failure Discipline

Mandatory failure remains failure.

Examples include:

```text
required test fails
canonical normalization mismatch
canonical byte mismatch
invalid input accepted
silent snapping occurs
unsupported open-gate result claimed as canonical
cross-implementation result mismatch
```

Conformance may classify the failure.

It may not redefine the Specification to erase it.

---

## Requirements Basis

The section continues to reference especially:

```text
#10
#24
#30
#32
#57–#60
#63–#66
#68
#71–#75
#78–#85
```

These Findings remain authoritative in the Requirements Framework.

Conformance references them.

It does not replace them.

---

## What Changed From the Previous Page

The previous page correctly established:

- one mandatory foundational truth;
- optional capability above it;
- deterministic validation;
- exactness;
- reproducibility;
- identifiable compatibility claims;
- claim only what is proven.

Those principles remain.

The substantive update is that the mandatory core is no longer purely abstract.

The integrated Specification now provides enough exact rules to identify a testable candidate mandatory scope.

The page therefore no longer says that canonical vectors or serious class testing must wait generally for the Specification to become complete.

Instead:

```text
solved Specification core
    -> testable now

open Specification mathematics
    -> not conformant yet
```

---

## Still Open

The complete Conformance taxonomy still requires later decisions concerning:

```text
final class identifiers
formal declaration syntax
optional future profiles
complete pass/fail taxonomy
complexity/resource-limit policy
future geometry classes
future operation classes
future measurement classes
treatment of later Specification extensions
```

These should be introduced only after their underlying Specification semantics exist.

---

## Conformance Authority Boundary

> **A conformance class proves compatibility with a defined Specification scope. It does not establish canonical authority over the Specification, its succession, or the spatial truth the Specification defines.**

This remains fundamental.

---

## Conformance Question

> **How does software prove that it correctly implements the Specification?**

The integrated candidate core now permits that question to be answered executably for the solved profile.

---

## Repository Guidance

When maintaining this directory:

1. preserve the title **Conformance Classes**;
2. preserve **Conformance Section 01 · Compatibility Scope**;
3. preserve the canonical path;
4. preserve **One mandatory truth. Optional capability above it.**;
5. preserve the distinction between capability classes and canonical truth;
6. preserve the candidate mandatory core as subordinate to the governing Specification;
7. do not promote open mathematics into conformance classes;
8. preserve deterministic validation and exactness;
9. preserve valid / valid-noncanonical / invalid distinction;
10. preserve no-silent-snapping;
11. preserve FSF-CJSON-1.0 scope where serialization is claimed;
12. preserve independent reproducibility;
13. preserve Reference Vectors as proof, not Specification;
14. preserve claim-only-what-you-prove;
15. preserve explicit failure;
16. preserve the Requirements Basis;
17. preserve the Conformance Authority Boundary;
18. preserve the Conformance Question.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 01 — CONFORMANCE CLASSES

CANDIDATE MANDATORY CORE SCOPE — DEFINED ENOUGH TO TEST
OPTIONAL FUTURE CLASS TAXONOMY — OPEN
OPEN SPECIFICATION MATHEMATICS — OUTSIDE CANONICAL CONFORMANCE
REFERENCE VECTOR PROOF — REQUIRED FOR APPLICABLE CAPABILITIES
INDEPENDENT REPRODUCIBILITY — REQUIRED
FORMAL CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
