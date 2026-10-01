# Foundational Survey Fabric — Requirements VII

## Finite Knowability, Computability, and Conformance

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Requirements Section:** VII  
**Findings:** #78–#85  
**Canonical Page:** https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/07-knowability-computability-conformance/  
**Status:** REQUIREMENTS-LEVEL FOUNDATION — CURRENT / RECONCILED THROUGH DAY #126

---

## Purpose

This directory preserves **Requirements VII — Finite Knowability, Computability, and Conformance**.

This section defines the conditions that make canonical spatial truth not merely exact, but finitely representable, computable, reproducible, testable, and eligible for eventual canonical adoption.

It governs:

- finite exact representation;
- minimal primitive discipline;
- hidden-state independence;
- deterministic termination;
- controlled complexity;
- exact-or-invalid canonical truth;
- the Mandatory Conformance Core;
- and staged readiness gates.

---

## Governing Principle

> **Canonical truth must not only be exact. It must be reachable.**

A canonical spatial result that cannot be finitely represented, deterministically computed, independently reproduced, or conclusively validated is not sufficient for foundational spatial truth.

---

## Current Candidate Realization

Later FSF work has materially advanced several Requirements in this section.

### Primitive Core

The current candidate primitive set is:

```text
Point
Segment
Simple Closed Polygonal Extent (SCPE)
```

This is the present candidate realization of Finding #79's minimal-primitive requirement.

### Exact Representation

The solved candidate core uses:

```text
CRPC
→ exact reduced rational Pang coordinates

ECEM
→ exact coordinate extension for precision
```

Every actual canonical object in the current core has a finite exact representation.

### Deterministic Normalization

Current candidate rules provide deterministic canonicalization for:

- CRPC;
- Segment endpoint ordering;
- supported SCPE normalization;
- exact serialization.

### Interchange

```text
FSF-CJSON-1.0
```

provides deterministic canonical machine representation for the supported core.

### Conformance

A candidate Mandatory Conformance Core now exists for the defined mathematics.

Conformance distinguishes proof of:

```text
VALID AND SUPPORTED
VALID BUT UNSUPPORTED
INVALID
```

where applicable to the tested profile.

Reference Vectors provide executable proof material for mathematics that is defined, parameterized proof material where mathematics is parameterized, and explicit open dependencies where mathematics remains unresolved.

---

## Findings #78–#85 — Current Interpretation

### Finding #78 — Finitely Representable Canonical Truth

The current CRPC / ECEM core satisfies the candidate requirement for finite exact representation.

This does not imply that every theoretical real-number point must receive a finite canonical address.

### Finding #79 — Minimal Canonical Primitive Set

Point, Segment, and SCPE are the current candidate primitive core.

The primitive set is not permanently frozen merely because these three are presently sufficient.

A new primitive would require a demonstrated irreducible need.

### Finding #80 — No Hidden-State Dependence

Canonical results depend only on:

```text
governing Specification
+
explicit canonical inputs
```

Cache history, session state, user identity, wall-clock time, database sequence, or other hidden mutable state must not change canonical truth.

### Finding #81 — Canonical Truth Must Terminate

Mandatory operations must deterministically terminate for valid finite canonical inputs.

The solved core is designed around finite exact algorithms.

Formal complexity ceilings and broader operation-domain closure remain open.

### Finding #82 — Controlled Canonical Complexity

Canonical expressions may be as detailed as legitimately required but must remain finitely parseable, unambiguous, and exactly verifiable.

Final normative complexity, parser, and expression-size limits remain OPEN.

Implementation resource limits may not silently redefine canonical validity.

### Finding #83 — No Vague Canonical Spatial States

Canonical FSF truth is exact.

Unresolved mathematics must remain unresolved rather than being converted into guessed or approximate canonical results.

The current proof rule is:

```text
if mathematics is defined:
    build exact executable vectors

if mathematics is parameterized:
    build symbolic / parameterized vectors

if mathematics is unresolved:
    preserve the dependency as OPEN
```

### Finding #84 — Mandatory Conformance Core

A candidate Mandatory Conformance Core now exists for the solved candidate mathematics.

It provides deterministic proof obligations and is exercised by the reconciled Reference Vector corpus.

This does not constitute canonical adoption.

It proves candidate behavior under the currently defined rules.

### Finding #85 — Readiness Gates

The staged readiness model remains fully active:

```text
Requirements justify formal design.
Deterministic rules justify prototype / Conformance testing.
Adversarial proof + independent implementation justify canonical adoption.
```

The FSF has advanced beyond the original pre-design state.

It is now capable of executable candidate proof work for the solved core.

It has **not** crossed the final canonical-adoption gate.

---

## Current Gate Standing

Current high-level status:

```text
Requirements traceability — established
candidate mathematical core — substantially integrated
Conformance framework — candidate operational
Reference Vector corpus — executable / parameterized / open as appropriate
canonical adoption — NOT PERFORMED
```

Remaining major blockers include:

- numerical Survey Domain half-span `H`;
- final canonical address syntax / grammar;
- final exact angular unit;
- general Euclidean distance scalar closure;
- general path / boundary-length scalar closure;
- arbitrary exact rotation;
- general Boolean / composite result geometry;
- final Specification identity / version succession / migration governance;
- final complexity / parser limits;
- broader operation-domain closure.

---

## Conformance and Reference Vector Boundary

The governing sequence remains:

```text
Requirements
→ Specification
→ Conformance
→ Reference Vectors
```

Conformance proves the Specification.

Reference Vectors demonstrate the Specification.

Neither may resolve mathematics that the Specification leaves open.

That separation is essential to Findings #83–#85.

---

## Lineage / Version Compatibility

Finite knowability also applies across compatible evolution.

The current candidate continuity rule is:

> **Representations may evolve. Canonical place may not drift.**

Where compatibility is claimed, correspondence must be:

```text
lossless
deterministic
meaning-preserving
reproducible
```

Final institutional Specification identity, version succession, migration policy, and canonical adoption remain separate governance questions.

---

## Repository Guidance

Use this directory for the authoritative presentation and supporting documentation of **Requirements VII — Finite Knowability, Computability, and Conformance**.

Do not use it to:

- treat unresolved mathematics as canonical truth;
- hide approximation inside canonical computation;
- let implementation resource limits redefine mathematics;
- allow hidden mutable state to affect canonical results;
- claim Conformance beyond the evidence actually proved;
- treat Reference Vectors as the source of mathematical rules;
- or declare canonical adoption merely because the candidate core passes tests.

---

## Documentation Standing

The `index.html` required a limited update because two passages were overtaken by later formal work:

- Finding #79 described the primitive set only prospectively, although Point / Segment / SCPE are now the candidate core.
- Finding #84 said the exact Conformance profile should be defined only after mathematical design was selected and tested; that candidate Conformance work has now occurred for the solved core.

The underlying Requirements remain unchanged.

---

## Standing

**FINDINGS #78–#85 — PRESERVED**

**POINT / SEGMENT / SCPE — CANDIDATE PRIMITIVE CORE**

**FINITE EXACT REPRESENTATION — CANDIDATE CORE SATISFIED**

**HIDDEN-STATE INDEPENDENCE — REQUIRED**

**DETERMINISTIC TERMINATION — REQUIRED**

**FINAL COMPLEXITY LIMITS — OPEN**

**MANDATORY CONFORMANCE CORE — CANDIDATE ESTABLISHED**

**REFERENCE VECTOR PROOF CORPUS — RECONCILED**

**CANONICAL ADOPTION — NOT PERFORMED**

**INDEX.HTML — UPDATED**

**README.md — CREATED**
