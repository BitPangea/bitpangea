# Canonical Result Equivalence

## Foundational Survey Fabric · Conformance Section 03

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 03 — Canonical Result Equivalence  
**Scope:** Independent Result Reproducibility  
**Status:** Integrated Specification Core Reflected  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 03 — Canonical Result Equivalence** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The conformance requirement that independent implementations derive the same authoritative canonical meaning from identical canonical inputs.**

Its governing principle remains:

> **Many implementations. One spatial truth.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/03-canonical-result-equivalence/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/03-canonical-result-equivalence/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/03-canonical-result-equivalence/README.md
```

---

## Purpose

Canonical Result Equivalence is the central reproducibility test of FSF conformance.

For the same:

```text
canonical input
+
governing Specification profile
```

independent conforming implementations must produce:

```text
the same authoritative canonical meaning
```

and, where uniquely governed:

```text
the same normalized form
the same canonical bytes
```

---

## Integration Standing

The original page correctly established result equivalence as a requirement but left the formal comparison mechanics largely pending because the governing mathematics were not yet complete.

That condition has changed for the solved candidate core.

The integrated Specification now defines exact candidate behavior for:

```text
CRPC
canonical frame
Point
Segment
SCPE
validation
exact predicates
normalization
ECEM
FSF-CJSON-1.0
```

Canonical Result Equivalence is therefore executable for that profile.

---

## Equivalence Requirement

For identical valid canonical inputs under the same profile:

```text
Implementation A
Implementation B
Implementation C
        ↓
same authoritative canonical meaning
```

A disagreement indicates something that must be investigated.

Possible causes include:

```text
implementation defect
Specification ambiguity
profile/version mismatch
invalid test fixture
evaluation of open mathematics
```

The disagreement itself is evidence.

It is not permission to average or vote on the answer.

---

## Scope of Equivalence

Current executable equivalence applies to the solved Mandatory Core, including:

- CRPC interpretation;
- canonical frame meaning;
- Point validation;
- Segment validation;
- SCPE validation;
- exact geometry predicates;
- geometry normalization;
- ECEM precision semantics;
- canonical validity classification;
- FSF-CJSON-1.0 serialization.

Equivalence does not extend canonically into Specification-open mathematics.

---

## Implementation Independence

Implementations may differ internally in:

- language;
- algorithms;
- libraries;
- storage;
- indexing;
- caching;
- optimization;
- internal object models.

They may not differ in the canonical result.

> **Internal method is implementation freedom. Canonical output is not.**

---

## Exact Equivalence

Canonical equality is exact.

Conformance shall not use:

- epsilon;
- tolerance bands;
- approximate agreement;
- device precision;
- display precision;
- implementation rounding;
- “close enough” comparison.

Where the Specification defines exact meaning, equivalence is mathematical.

---

## Validation Equivalence

The same input must receive the same canonical validity judgment.

Current classes are:

```text
CANONICAL VALID
VALID NONCANONICAL
INVALID
```

A shared input cannot legitimately be:

```text
canonical in A
valid noncanonical in B
invalid in C
```

when all implementations claim the same profile.

---

## Canonicalization Equivalence

Valid equivalent representations must normalize to one canonical form.

### CRPC

Equivalent fractions normalize to one reduced representation.

### Segment

Endpoint order is canonicalized lexicographically.

### SCPE

Canonical normalization includes:

```text
CRPC-normalized vertices
exact redundant-collinear removal
counterclockwise traversal
lexicographically least start vertex
no repeated terminal closure vertex
```

Required invariants:

```text
N(N(G)) = N(G)
geom(N(G)) = geom(G)
```

---

## Predicate Equivalence

Independent implementations must agree exactly on supported predicates, including:

```text
Point equality
Point ordering
orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
polygon validity
connectedness
containment
geometric equivalence
```

No epsilon substitution is permitted.

---

## Precision-Semantics Equivalence

ECEM must be interpreted consistently.

A canonical Point means:

```text
one exact Survey position
```

It does not mean:

```text
parent cell
coarse location
uncertainty region
rounded coordinate
set of descendants
```

Compatible future extension may expand exact capability.

It may not change old meaning.

---

## Normative Interchange Equivalence

For the current machine-interchange core:

```text
FSF-CJSON-1.0
```

requires deterministic canonical bytes.

Therefore:

```text
same normalized supported geometry
        ↓
same FSF-CJSON-1.0 structure
        ↓
same canonical UTF-8 bytes
```

Independent implementations must agree on:

- structured CRPC encoding;
- object-key order;
- semantic array order;
- duplicate-key invalidity;
- governed unknown-field handling;
- string normalization;
- compact canonical serialization.

Internal and presentation formats may differ.

Canonical FSF-CJSON output may not.

---

## Error Equivalence

Invalid inputs must fail consistently.

Human-readable diagnostics may vary.

Canonical treatment may not.

Where the Specification says:

```text
INVALID
```

one implementation may not invent canonical meaning merely because another diagnostic message is possible.

A future canonical error-code taxonomy may impose tighter equivalence.

That taxonomy remains open.

---

## Hidden-State Prohibition

Canonical results must not depend on:

- cache state;
- database sequence;
- randomization;
- user identity;
- ownership;
- session context;
- wall-clock time;
- storage order;
- machine locale;
- other mutable hidden state.

Hidden state may improve performance.

It may not alter foundational spatial truth.

---

## Reference Vector Proof

Equivalence must be demonstrated through shared executable fixtures.

Current candidate vectors should cover:

```text
canonical valid inputs
valid noncanonical inputs
invalid inputs
CRPC normalization
geometry normalization
exact predicate outcomes
ECEM semantics
FSF-CJSON canonical bytes
```

A conforming implementation must reproduce the applicable required result exactly.

Reference Vectors prove the Specification.

They do not replace it.

---

## Comparison Order

The correct comparison sequence is:

```text
validate
    ↓
normalize where permitted
    ↓
evaluate canonical meaning
    ↓
compare canonical result
    ↓
compare canonical bytes where uniquely governed
```

This distinction matters.

Byte identity does not replace semantic validation.

Semantic equivalence does not excuse a byte mismatch where the governing serialization requires one canonical byte sequence.

---

## Cross-Implementation Testing

Independent implementations should be compared directly.

The purpose is not merely to confirm success.

It is also to expose:

- ambiguous Specification wording;
- hidden implementation assumptions;
- invalid fixtures;
- serialization mismatch;
- normalization mismatch;
- predicate disagreement;
- accidental use of approximation.

Disagreement is useful evidence.

---

## Open-Gate Comparison Boundary

No canonical equivalence claim exists where the Specification has not yet defined canonical truth.

Current open examples include:

```text
general union result closure
general intersection-result closure
general difference-result closure
closed-set / difference compatibility
arbitrary exact rotation closure
general transformation closure
general exact distance scalar
general path / boundary-length scalar
future geometry not yet selected
```

Two experimental implementations agreeing does not make an open result canonical.

---

## Disagreement Handling

When conforming implementations disagree, investigate:

1. whether the input is valid;
2. whether both claim the same profile/version;
3. whether both normalized correctly;
4. whether the applicable Specification rule is unambiguous;
5. whether the test fixture is correct;
6. whether one or more implementations are defective;
7. whether the tested capability is actually still open.

Do not resolve disagreement through:

- majority vote;
- popularity;
- preferred implementation;
- tolerance;
- output averaging;
- institutional preference.

---

## Requirements Basis

The section remains derived primarily from:

```text
#10
```

and reinforced by:

```text
#24
#30
#57–#60
#63–#66
#74
#78–#83
```

These Findings remain authoritative in the Requirements Framework.

Conformance realizes and tests them.

It does not replace them.

---

## What Changed From the Previous Page

The prior page already correctly established:

- one authoritative result;
- exact equivalence;
- implementation independence;
- canonicalization before comparison;
- validity equivalence;
- error equivalence;
- hidden-state prohibition;
- eventual Reference Vector proof;
- cross-implementation testing;
- disagreement escalation.

Those principles remain.

The principal update is that the solved Specification core now makes many comparison mechanics concrete.

Previously:

```text
equivalence proof
    -> conceptually required
    -> mechanics mostly pending
```

Now:

```text
solved candidate core
    -> exact comparison is executable

open mathematics
    -> no canonical comparison yet
```

---

## Still Open

The remaining Conformance design work includes:

```text
final comparison-harness implementation
canonical test identifiers
complete error-code taxonomy
cross-version/profile comparison policy
noncanonical diagnostic comparison policy
formal disagreement-escalation procedure
equivalence rules for future Specification extensions
```

These should be resolved only where the governing Specification provides sufficient semantics.

---

## Architectural Boundary

> **Implementations may differ in how they calculate and, where the Specification permits it, in how they encode. They may not differ in canonical spatial meaning.**

This remains the defining boundary of Conformance Section 03.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 03 — CANONICAL RESULT EQUIVALENCE

SOLVED CORE EQUIVALENCE — EXECUTABLE
VALIDITY EQUIVALENCE — REQUIRED
NORMALIZATION EQUIVALENCE — REQUIRED
PREDICATE EQUIVALENCE — REQUIRED
ECEM SEMANTIC EQUIVALENCE — REQUIRED
FSF-CJSON-1.0 BYTE EQUIVALENCE — REQUIRED WHERE APPLICABLE
HIDDEN-STATE DEPENDENCE — PROHIBITED
CROSS-IMPLEMENTATION COMPARISON — REQUIRED
OPEN SPECIFICATION MATHEMATICS — OUTSIDE CANONICAL EQUIVALENCE

FINAL COMPARISON HARNESS — OPEN
FORMAL ERROR TAXONOMY — OPEN
CROSS-VERSION POLICY — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
