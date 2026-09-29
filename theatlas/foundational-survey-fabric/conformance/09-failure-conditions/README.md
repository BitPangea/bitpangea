# Failure Conditions

## Foundational Survey Fabric · Conformance Section 09

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 09 — Failure Conditions  
**Scope:** Conditions That Defeat Compatibility  
**Status:** Integrated Specification Core Reflected  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 09 — Failure Conditions** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The conformance conditions under which an implementation must be judged incompatible, nonconforming, indeterminate, or unable to support a claimed Foundational Survey Fabric capability.**

Its governing principle remains:

> **A conformance claim is meaningful only if failure is defined.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/09-failure-conditions/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/09-failure-conditions/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/09-failure-conditions/README.md
```

---

## Integration Standing

The original Failure Conditions page correctly defined the need to distinguish true implementation failure from unsupported capability and Specification ambiguity.

The integrated Specification now makes many failure conditions directly executable for the solved candidate core.

That core includes:

```text
CRPC
canonical frame
Point
Segment
SCPE
exact predicates
validation
normalization
ECEM
FSF-CJSON-1.0
```

Failure is therefore no longer only a future taxonomy problem.

Many conditions can now be tested exactly.

---

## Canonical Result Mismatch

For the same valid canonical input and profile:

```text
required result = R
implementation result = S
R != S
```

then:

```text
FAIL
```

unless the underlying test fixture or Specification is shown to be defective or ambiguous.

Tolerance and implementation preference do not excuse canonical mismatch.

---

## Validity Classification Failure

The current solved profile distinguishes:

```text
CANONICAL VALID
VALID NONCANONICAL
INVALID
```

and unsupported behavior where the profile defines it.

Failure includes:

- canonical input classified invalid;
- invalid input accepted as canonical;
- valid noncanonical input misclassified;
- deterministic normalization path ignored;
- unsupported capability falsely classified as canonical success.

---

## Invalid Acceptance

Examples include accepting:

```text
malformed CRPC
out-of-Domain coordinate
zero-length prohibited Segment
self-intersecting SCPE
zero-area SCPE
malformed FSF-CJSON
duplicate-key canonical JSON
prohibited unknown fields
ambiguous input
```

as authoritative canonical truth.

That is failure.

---

## Valid Rejection

Rejecting required valid canonical input is also failure.

Examples include rejecting:

- valid reduced CRPC;
- canonical Point;
- canonical Segment;
- canonical SCPE;
- valid exact predicate input;
- valid FSF-CJSON-1.0 canonical bytes

inside the claimed Mandatory Core profile.

---

## Normalization Failure

Conformance failure includes:

```text
incorrect CRPC reduction
wrong Segment endpoint order
SCPE normalization not idempotent
wrong SCPE orientation
wrong canonical start vertex
failure to remove exact redundant collinear middle vertices
meaning-changing normalization
```

Required invariants include:

```text
N(N(G)) = N(G)
geom(N(G)) = geom(G)
```

---

## Exact Predicate Failure

Incorrect exact predicate truth is failure.

Current predicate surface includes:

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

---

## Exactness Failure

Failure includes using any of the following to establish authoritative truth:

- epsilon;
- tolerance;
- silent rounding;
- hidden snapping;
- approximate predicate truth;
- unresolved floating convergence;
- undetected lossy conversion.

Approximation may exist outside canonical FSF truth.

---

## Hidden-State Failure

Canonical output must not depend on:

- cache state;
- database order;
- random state;
- session context;
- user identity;
- ownership;
- machine locale;
- wall-clock time;
- hidden mutable state.

If changing hidden context changes canonical output, Conformance fails.

---

## ECEM Semantics Failure

Under ECEM:

```text
Point = one exact Survey position
```

Failure includes interpreting a canonical Point as:

```text
coarse cell
parent reference
uncertainty region
rounded location
descendant set
```

Compatible representational extension may add new exact values.

It may not change old Point meaning.

---

## FSF-CJSON-1.0 Failure

Serialization failure includes:

```text
valid canonical bytes rejected
invalid canonical bytes accepted
wrong CRPC interpretation
wrong geometry interpretation
duplicate keys accepted
wrong key order
precision loss
wrong normalization
wrong canonical bytes
non-UTF-8 canonical output
hidden parser defaults
```

Where one exact canonical byte sequence is required, byte mismatch is failure.

---

## Round-Trip Failure

Required behavior:

```text
canonical object
    ↓ serialize
canonical bytes
    ↓ parse
same canonical object
    ↓ serialize
same canonical bytes
```

Semantic drift or byte drift under unchanged canonical rules is failure.

---

## Version Compatibility Failure

Supposedly compatible evolution must not alter:

```text
CRPC meaning
Point meaning
Segment meaning
SCPE meaning
predicate truth
normalization
ECEM semantics
FSF-CJSON-1.0 meaning or unchanged-byte obligations
```

Meaning drift is failure.

Unknown versions must not be guessed.

---

## Independence Failure

The independent-implementation requirement fails where canonical truth can be reproduced only through:

- inaccessible code;
- proprietary service;
- private data;
- undocumented convention;
- exclusive institutional knowledge;
- one hidden implementation dependency.

Canonical meaning must remain derivable from governing materials.

---

## Incomplete Mandatory Core

Partial core support is not full Conformance.

An implementation may describe itself as:

```text
partial
experimental
developmental
prototype
```

where accurate.

It may not claim full Mandatory Core compatibility unless all required capabilities in the claimed profile pass.

---

## Nontermination or Unresolvable Result

A valid finite canonical input requiring deterministic output must terminate.

Failure includes:

```text
indefinite convergence
potential nontermination
unresolved ambiguity
hidden dependency
authoritative result requiring unresolved approximation
```

---

## Unsupported Capability

Unsupported is not automatically failure.

If a capability is outside the implementation’s declared profile and not part of the Mandatory Core, the correct outcome may be:

```text
UNSUPPORTED
```

The implementation must not fabricate canonical behavior.

---

## Open-Gate Outcome

Open Specification mathematics require special care.

Current examples include:

```text
general Boolean / composite output closure
arbitrary exact rotation
general exact distance scalar
general path / boundary-length scalar
future geometry not yet selected
```

Such cases shall not be forced into a fake canonical pass/fail result.

They may be outside the current profile or indeterminate until the Specification defines them.

---

## Specification Ambiguity

Where the governing Specification genuinely fails to determine one authoritative answer, the result should be classified as:

```text
SPECIFICATION AMBIGUITY
```

rather than automatically:

```text
IMPLEMENTATION FAILURE
```

Conformance testing can reveal ambiguity.

It does not possess amendment authority.

---

## Test / Fixture Defect

The test infrastructure can also be wrong.

A failed comparison may result from:

```text
wrong expected result
bad Reference Vector
broken parser in test harness
wrong comparator
profile mismatch
fixture transcription error
```

The final Conformance framework should preserve a distinct test/fixture-defect outcome.

---

## Conformance Claim Misrepresentation

An implementation may claim only what it proves.

A declaration is invalid if it exceeds:

- tested profile;
- tested version;
- tested serialization;
- tested operation set;
- tested capability;
- tested Reference Vector coverage.

Reporting must distinguish:

```text
proven
unsupported
untested
experimental
noncanonical
open
```

---

## Candidate Failure Disposition Concepts

The final status identifiers remain open, but the framework should be able to distinguish at minimum:

```text
FAIL
UNSUPPORTED
INDETERMINATE
SPECIFICATION AMBIGUITY
TEST / FIXTURE DEFECT
```

These are candidate concepts, not yet final machine-readable canonical codes.

---

## Retest and Remediation

A failure may be corrected and retested.

But:

```text
original failure
```

and:

```text
later successful retest
```

should remain distinguishable in evidence.

Formal rules remain open for:

- retest;
- remediation;
- evidence retention;
- withdrawal;
- supersession;
- corrected declarations.

---

## Requirements Basis

This section remains derived especially from:

```text
#10
#24
#30
#57
#63
#66
#71–#75
#78–#85
```

These Findings remain authoritative within the Requirements Framework.

Conformance applies them.

It does not replace them.

---

## What Changed From the Previous Page

The prior page already correctly established:

- canonical result mismatch;
- invalid acceptance;
- valid rejection;
- normalization failure;
- exactness failure;
- hidden-state failure;
- interchange failure;
- version failure;
- independence failure;
- incomplete Mandatory Core;
- nontermination;
- unsupported capability;
- Specification ambiguity;
- claim misrepresentation.

Those principles remain.

The major change is that the solved candidate profile now allows many of those failures to be described concretely in terms of:

```text
CRPC
Point / Segment / SCPE
exact predicates
normalization
ECEM
FSF-CJSON-1.0
```

It also now makes sense to distinguish test/fixture defect as its own outcome rather than treating every vector mismatch as implementation fault.

---

## Still Open

The remaining Failure Conditions design work includes:

```text
final machine-readable failure codes
severity levels
formal disposition taxonomy
retest procedure
remediation process
test-harness defect procedure
withdrawn/superseded declaration handling
failure-report schema
final treatment of indeterminate open-gate cases
```

---

## Architectural Boundary

> **Failure must expose incompatibility, ambiguity, hidden dependency, or unsupported scope. It must not be hidden by approximation, convenience, higher-domain leakage, or ambiguous claims.**

This remains the defining boundary of Conformance Section 09.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 09 — FAILURE CONDITIONS

CANONICAL RESULT MISMATCH — FAILURE
VALIDITY MISMATCH — FAILURE
INVALID ACCEPTANCE — FAILURE
VALID REJECTION — FAILURE
NORMALIZATION ERROR — FAILURE
EXACT PREDICATE ERROR — FAILURE
APPROXIMATE CANONICAL TRUTH — FAILURE
HIDDEN-STATE DEPENDENCE — FAILURE
ECEM MEANING DRIFT — FAILURE
FSF-CJSON-1.0 VIOLATION — FAILURE
ROUND-TRIP DRIFT — FAILURE
COMPATIBILITY MEANING DRIFT — FAILURE
EXCLUSIVE DEPENDENCY — FAILURE
INCOMPLETE MANDATORY CORE — NOT FULL CONFORMANCE
UNSUPPORTED CAPABILITY — DISTINCT OUTCOME
SPECIFICATION AMBIGUITY — DISTINCT OUTCOME
TEST / FIXTURE DEFECT — DISTINCT OUTCOME

FINAL FAILURE CODES — OPEN
SEVERITY MODEL — OPEN
RETEST / REMEDIATION PROCEDURE — OPEN
MACHINE-READABLE FAILURE REPORT — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
