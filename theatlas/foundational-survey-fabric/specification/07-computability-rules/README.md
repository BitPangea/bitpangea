# Foundational Survey Fabric — Specification 07

## Computability Rules

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification Section:** 07  
**Status:** Candidate Mathematics Integrated — Computable Core Ready  
**Canonical Adoption:** Not yet performed

---

## Purpose

Specification 07 defines the conditions under which FSF mathematical truth becomes finitely representable, exactly computable, deterministically validatable, reproducible across independent implementations, and eligible to count as authoritative canonical output.

Its governing principle is:

> **Canonical truth must not only be exact. It must be reachable.**

This section is the bridge between formal mathematics and executable proof.

---

## Current Computable Core

The current candidate profile is sufficiently deterministic to implement and test:

```text
CRPC parsing and normalization
Survey Domain validation
Point validation
Segment validation
SCPE validation
Point equality and ordering
orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
containment
connectedness
geometric equivalence
canonical normalization
FSF-CJSON-1.0 serialization
ECEM precision compatibility
```

The complete FSF operation universe is not yet closed.

---

## Relevant Formal Mathematical Decisions

### FMD-01 — Exact Coordinate Representation

**Directly relevant — integrated.**

CRPC gives every current canonical coordinate a finite exact representation:

```text
q = n/d Pang
```

with finite integers `n` and positive `d`.

This enables exact comparison without floating-point tolerance.

---

### FMD-02 — Canonical Frame and Handedness

**Relevant — integrated operationally.**

The fixed `(x,y)` frame and orientation convention make orientation and canonical traversal deterministic across implementations.

---

### FMD-03 — Canonical Origin Placement

**Inherited.**

The current computable core resolves coordinates in the one permanent frame.

No implementation may substitute a private origin.

---

### FMD-04 — Survey Domain Geometry and Dimensions

**Inherited as the Domain-validity envelope.**

A canonical implementation must validate Point coordinates against the governing Survey Domain exactly.

Specification 07 does not independently redefine Domain mathematics.

---

### FMD-05 — Canonical Primitive Geometry

**Directly relevant — integrated.**

The current minimal primitive set is:

```text
Point
Segment
SCPE
```

This finite primitive profile makes the first Conformance surface tractable and deterministic.

---

### FMD-06 — Exact Geometry Predicates and Polygon Validation

**Directly relevant — major integration.**

The core now possesses deterministic exact algorithms or predicate rules for:

```text
Point equality
Point ordering
orientation
Point-on-Segment
Segment intersection
Point-in-SCPE
polygon validity
containment
connectedness
geometric equality
```

No epsilon is part of canonical truth.

---

### FMD-07 — Canonical Geometry Normalization

**Directly relevant — major integration.**

Normalization is deterministic and idempotent:

```text
N(N(G)) = N(G)
```

and geometry-preserving:

```text
geom(N(G)) = geom(G)
```

This gives independent implementations a common canonical target.

---

### FMD-08 — Canonical Serialization and Interchange

**Directly relevant — major integration.**

The solved core can now terminate in deterministic canonical bytes through:

```text
FSF-CJSON-1.0
```

after validation and normalization.

For the same supported normalized geometry under the same format version:

```text
same meaning
-> same normalized form
-> same canonical bytes
```

---

### FMD-09 — Exact Precision and Refinement Semantics

**Directly relevant — major integration.**

ECEM makes precision behavior computable.

A Point is exact or invalid.

It is not:

```text
coarse
approximate
parent
child
uncertain
zoom-relative
```

Compatible successor capability may expand without changing old meanings.

---

## Finite Exact Representation

Every canonical object in the current core must have finite representation.

The current candidate does not require infinite decimal expansions or unrestricted real-number encodings.

Finite exactness is achieved through:

- finite arbitrary-precision integers;
- reduced rational coordinates;
- finite vertex lists;
- finite typed serialization.

---

## Exact or Invalid

Canonical interpretation follows:

```text
VALID CANONICAL
VALID NONCANONICAL
INVALID
```

A valid noncanonical representation may normalize if exact meaning is unchanged.

Invalid input shall not be repaired by:

- snapping;
- rounding;
- tolerance;
- guessed defaults;
- hidden lookup state;
- implementation-specific heuristics.

---

## Deterministic Termination

For valid finite inputs in the solved core, the following must terminate:

```text
parse
validate CRPC
validate Domain
validate Point
validate Segment
validate SCPE
evaluate predicates
normalize geometry
serialize FSF-CJSON
```

No canonical result may require indefinite convergence.

---

## Hidden-State Independence

Canonical results depend only on:

```text
explicit canonical inputs
+
governing Specification
```

They do not depend on:

```text
cache history
database sequence
random state
user identity
ownership
session state
wall-clock time
machine locale
storage ordering
implementation language
```

---

## Authoritative Output

A result counts as authoritative only when it is:

- valid under the Specification;
- derived solely from explicit valid inputs;
- exactly resolvable;
- finite;
- deterministic;
- reproducible;
- expressible in a governed canonical result form.

A set-theoretic or mathematical answer is not automatically canonical when the Specification has no defined output type for it.

---

## Lossless vs. Lossy

Lossless conversion preserves the exact object.

Example:

```text
2/4 -> 1/2
```

is lossless normalization.

By contrast:

```text
1/3 -> 0.333
```

changes the exact rational value and is lossy.

Lossy forms may be used for presentation or convenience.

They are not canonical truth.

---

## Independent Implementation Requirement

The intended proof standard is:

```text
same canonical input
+
same governing Specification
=
same canonical result
```

across independent implementations.

Programming language, internal storage, optimization, and cache design may differ.

Canonical output may not.

---

## Open Computational Gates

The complete FSF computability model is not yet closed.

Still open:

```text
formal complexity limits
parser/resource limits
canonical error taxonomy
general exact distance scalar
general path/boundary-length scalar
arbitrary exact rotation closure
general union result closure
general intersection-result closure
general difference-result closure
closed-set/difference compatibility
future composite geometry output types
computability rules for future primitives
```

Implementations must not privately fill these gaps and claim canonical authority.

---

## Prototype and Conformance Readiness

The solved core is now ready for:

```text
executable validators
Reference Vectors
independent implementations
cross-implementation comparison
adversarial testing
reconstruction testing
```

This is a change from the previous Specification 07, which correctly withheld serious prototype and Conformance work until sufficiently deterministic mathematics existed.

For the solved core, that threshold has now been reached.

---

## What Changed From the Previous Specification 07

The previous page correctly established:

- finite exact representation;
- exactness;
- canonical precision;
- finite representable addressability;
- minimal primitives;
- controlled complexity;
- hidden-state independence;
- deterministic termination;
- exact-or-invalid canonical truth;
- lossless/lossy distinction;
- authoritative result requirements;
- implementation independence;
- nonsemantic resource limits.

Those principles remain.

The following previously missing dependencies now exist for the current core:

```text
canonical numeric representation
    -> CRPC

precision mathematics
    -> ECEM

primitive geometry
    -> Point / Segment / SCPE

exact predicate rules
    -> FMD-06

normalization
    -> FMD-07

canonical machine interchange
    -> FSF-CJSON-1.0

core authoritative return behavior
    -> exact governed result or INVALID / unsupported
```

---

## What Did Not Need to Change

The following remain fully valid:

- approximation does not establish canonical truth;
- hidden state may not alter results;
- implementation language may differ;
- finite input operations must terminate;
- loss must be detectable;
- resource limits must not redefine mathematics;
- higher-layer unknown or disputed states do not become FSF canonical states.

---

## Relationship to Conformance

Specification 07 now supplies the computational boundary needed to begin serious Conformance work for the solved core.

A future Conformance suite should verify at minimum:

1. exact CRPC parsing and normalization;
2. Domain validity;
3. Point / Segment / SCPE validation;
4. exact predicate outcomes;
5. normalization idempotence;
6. semantic preservation;
7. deterministic FSF-CJSON output;
8. rejection of silent snapping;
9. lossless/lossy distinction;
10. cross-implementation result identity.

---

## Repository Files

Recommended directory:

```text
theatlas/foundational-survey-fabric/specification/07-computability-rules/
```

Primary files:

```text
index.html
README.md
```

The public `index.html` is the human-facing Specification section.

This `README.md` preserves repository-facing computability rules, FMD traceability, executable-readiness standing, and unresolved computational gates.

---

## Standing

```text
SPECIFICATION 07 — CANDIDATE MATHEMATICS INTEGRATED

FINITE CORE REPRESENTATION — SELECTED
CRPC EXACTNESS — SELECTED
PRECISION MODEL — ECEM
PRIMITIVE SET — POINT / SEGMENT / SCPE
CORE VALIDATION — DETERMINISTIC
CORE PREDICATES — DETERMINISTIC
CORE NORMALIZATION — DETERMINISTIC
CORE SERIALIZATION — FSF-CJSON-1.0
SILENT SNAPPING — PROHIBITED
HIDDEN-STATE DEPENDENCE — PROHIBITED
CORE TERMINATION — REQUIRED
INDEPENDENT RESULT IDENTITY — REQUIRED

FORMAL COMPLEXITY LIMITS — OPEN
COMPLETE ERROR TAXONOMY — OPEN
GENERAL DISTANCE SCALAR — OPEN
GENERAL PATH / BOUNDARY LENGTH — OPEN
ARBITRARY ROTATION CLOSURE — OPEN
GENERAL BOOLEAN OUTPUT CLOSURE — OPEN

SOLVED CORE — READY FOR EXECUTABLE CONFORMANCE WORK
FULL SPECIFICATION 07 ADOPTION — NOT YET PERMITTED
```

---

## Governing Closing Statement

> **The Survey Fabric is computable only where exact meaning, finite representation, deterministic procedure, canonical output, and independent reproducibility all meet. Where one of those is still missing, the correct result is not approximation—it is an explicit open gate.**
