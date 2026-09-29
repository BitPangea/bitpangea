# Validation Behavior

## Foundational Survey Fabric · Conformance Section 04

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 04 — Validation Behavior  
**Scope:** Canonical Input Classification  
**Status:** Integrated Specification Core Reflected  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 04 — Validation Behavior** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The conformance rules for how implementations classify, accept, normalize, or reject canonical and noncanonical Survey expressions.**

Its governing principle remains:

> **Canonicalize what is equivalent. Reject what is not valid.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/README.md
```

---

## Integration Standing

The original Validation Behavior page correctly established the acceptance / normalization / rejection architecture but left many concrete validation mechanics dependent on future Specification mathematics.

The solved candidate core now provides enough deterministic mathematics to make validation executable for:

```text
CRPC
Point
Segment
SCPE
exact predicates
canonical normalization
ECEM
FSF-CJSON-1.0
```

The current conformance validity model is therefore:

```text
CANONICAL VALID
VALID NONCANONICAL
INVALID
```

with unsupported open-gate behavior kept outside canonical validity.

---

## Canonical Valid Input

Canonical-valid input:

- satisfies the governing Specification;
- is already in canonical form where canonical form is required;
- has exact mathematical meaning;
- requires no semantic repair;
- may be consumed directly as authoritative input.

Examples include:

```text
reduced CRPC value
canonical Point
canonical Segment
normalized canonical SCPE
valid canonical FSF-CJSON-1.0 object
```

---

## Valid Noncanonical Representation

A valid noncanonical input has legitimate exact meaning but requires a permitted deterministic normalization step.

Examples may include:

```text
reducible rational form
Segment with reversible endpoint order
SCPE using noncanonical start vertex
SCPE using clockwise traversal
SCPE containing exact redundant collinear middle vertices
other explicitly permitted equivalent forms
```

The test is not:

```text
Can software repair it?
```

The test is:

```text
Does the Specification define one exact semantics-preserving normalization?
```

If not, it is not valid noncanonical merely because a repair seems obvious.

---

## Invalid Input

Invalid means no canonical interpretation exists under the claimed profile.

Invalid input shall not be:

- guessed;
- rounded;
- snapped;
- repaired;
- coerced;
- completed from context;
- assigned inferred defaults;
- converted into a different valid object.

---

## CRPC Validation

CRPC validation must enforce the governing exact rational rules.

Required considerations include:

```text
finite integer components
positive denominator
exact rational meaning
canonical reduction where canonical form is required
canonical zero where required
valid integer-string representation in canonical interchange
```

Reducible rational form may be valid noncanonical only where that input form is permitted.

Malformed or impossible exact-value structure is invalid.

---

## Domain Validation

Spatial validity is evaluated against the governed Survey Domain.

An otherwise parseable Point or geometry outside the Domain is not automatically:

```text
Exterior
NON_WORLD
neighboring territory
alternate World-space
```

Those are different semantic questions.

The ordering remains:

```text
Survey validity
    ↓
only then higher-layer membership
```

The Domain’s numerical capacity is governed by the applicable Specification state; Conformance does not independently select or alter it.

---

## Point Validation

A valid Point requires:

- valid exact coordinate values;
- correct tuple structure;
- compliance with applicable Survey Domain rules;
- no hidden approximate interpretation.

Under ECEM, the Point denotes one exact position.

---

## Segment Validation

A valid Segment requires:

- two valid Point endpoints;
- exact structural compliance;
- any additional Segment validity conditions defined by the Specification.

Where zero-length Segment geometry is prohibited, identical endpoints are invalid rather than silently collapsed.

Canonical endpoint ordering belongs to normalization, not semantic reinvention.

---

## SCPE Validation

A candidate SCPE must satisfy exact polygonal validity rules.

Current requirements include:

```text
sufficient distinct vertices
valid Points
valid consecutive Segments
one closed cycle
simple geometry
no prohibited self-intersection
nonzero area
Domain validity
```

Exact redundant collinear middle vertices may be valid noncanonical where deterministic normalization removes them without changing geometry.

Invalid topology may not be repaired into a different polygon.

---

## Canonical Serialization Validation

For:

```text
FSF-CJSON-1.0
```

validation includes the applicable structural and canonical encoding rules from Specification 06.

Potential invalid conditions include:

- malformed JSON;
- duplicate keys;
- prohibited fields;
- invalid type structures;
- prohibited JSON numeric literals for exact coordinates;
- invalid CRPC object form;
- noncanonical exact-value strings;
- prohibited byte-level form;
- semantically invalid geometry inside syntactically valid JSON.

Schema validity alone does not prove semantic validity.

---

## Precision-Semantics Validation

ECEM requires:

> **A canonical Point denotes one exact Survey position.**

Canonical Point semantics shall not be interpreted as:

```text
coarse Point
fine Point
parent Point
child Point
uncertainty region
rounded location
descendant set
```

A future Specification may define new types.

Conformance 04 shall not invent them.

---

## Ambiguous Input

Ambiguous input fails canonical validation unless one exact Specification-defined normalization rule resolves it without changing meaning.

The implementation may not guess which interpretation the user intended.

---

## Approximate or Estimated Input

Approximate values are not canonical merely because they are useful.

Examples include:

- rounded coordinates;
- estimated positions;
- render-derived positions;
- pending survey values;
- disputed values;
- incomplete geometry.

Higher domains may preserve such states.

FSF canonical validation does not promote them to exact truth.

---

## Lossless and Lossy Conversion

Lossless conversion preserves the exact object.

Lossy conversion discards canonical information.

Examples of potentially lossy behavior include:

```text
rounding
truncation
rasterization
approximate simplification
reduced storage precision
floating conversion
```

Loss shall remain detectable.

---

## Canonicalization Boundary

Validation may normalize only where the Specification explicitly permits exact semantic preservation.

Examples include:

```text
CRPC reduction
Segment endpoint ordering
SCPE canonical traversal
exact redundant-collinear removal
canonical serialization ordering
```

Normalization may not:

- relocate a Point;
- alter an Extent;
- change precision meaning;
- substitute a nearby representable value;
- turn invalid geometry into a different valid object.

---

## Deterministic Validation Result

For the same input under the same profile:

```text
Implementation A
Implementation B
Implementation C
        ↓
same validity classification
```

Where valid noncanonical normalization applies:

```text
same canonical normalized result
```

---

## Open-Gate Validation Boundary

A capability that remains mathematically open in the Specification does not become valid canonical behavior merely because an implementation supports it.

Examples include:

```text
general Boolean / composite output closure
general union / intersection / difference result forms
arbitrary exact rotation
general exact distance scalar
general path / boundary-length scalar
future geometry not yet selected
```

Such behavior may be:

```text
unsupported
experimental
outside claimed profile
```

but not canonically validated without governing Specification semantics.

---

## Failure Classification

The Conformance framework should distinguish failures such as:

```text
malformed syntax
invalid exact-value structure
invalid geometry
out-of-Domain reference
invalid serialization
unsupported capability
profile/version mismatch
other governed validation failure
```

The complete machine-readable error taxonomy remains open.

Human-readable diagnostics may vary unless later standardized.

---

## No Hidden Repair

Invalid input must not be silently corrected through:

- snapping;
- rounding;
- truncation;
- coercion;
- inferred defaults;
- guessed intent;
- fallback geometry;
- hidden normalization not permitted by the Specification.

Any higher-layer correction workflow must remain separate from canonical validation.

---

## Reference Vector Validation Proof

Validation behavior is now concrete enough for executable fixtures.

Reference Vectors should cover:

```text
canonical-valid input
valid-noncanonical normalization
invalid CRPC
invalid Point
invalid Segment
invalid SCPE
Domain failure
malformed FSF-CJSON
semantic FSF-CJSON failure
lossy representation
unsupported open-gate capability
```

The fixtures demonstrate rules already present in the Specification.

They do not define new validity semantics.

---

## Requirements Basis

This section remains derived especially from:

```text
#30
#57
#71–#75
#78
#80–#83
```

with additional support from the permanent addressability and exactness Requirements.

These Findings remain authoritative within the Requirements Framework.

Conformance applies them.

It does not replace them.

---

## What Changed From the Previous Page

The previous page correctly established:

- canonical acceptance;
- valid noncanonical normalization;
- malformed-input rejection;
- out-of-Domain rejection;
- precision-invalidity rejection;
- ambiguity rejection;
- approximate/canonical separation;
- detectable loss;
- place-preserving normalization;
- deterministic judgment;
- failure classification;
- no hidden repair.

Those principles remain.

The substantive change is that the integrated Specification now supplies exact candidate rules for the current primitive and serialization profile.

Previously:

```text
validation categories
    -> established
exact mechanics
    -> largely pending
```

Now:

```text
solved candidate core
    -> executable validation

open mathematics
    -> outside canonical validation
```

---

## Still Open

The remaining Conformance design work includes:

```text
final machine-readable validation codes
complete canonical error taxonomy
parser error identifiers
cross-version/profile mismatch policy
recoverable-versus-terminal diagnostic policy
canonical diagnostic wording if ever required
validation rules for future Specification extensions
```

---

## Architectural Boundary

> **Validation may recognize canonical truth, normalize equivalent valid representation where permitted, or reject invalid input. It may not manufacture truth from ambiguity, silently repair spatial meaning, or create authority over the governing Specification.**

This remains the defining boundary of Conformance Section 04.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 04 — VALIDATION BEHAVIOR

CANONICAL VALID — DEFINED
VALID NONCANONICAL — DEFINED
INVALID — DEFINED
CRPC VALIDATION — EXECUTABLE
POINT / SEGMENT / SCPE VALIDATION — EXECUTABLE
NORMALIZATION ELIGIBILITY — EXECUTABLE
ECEM SEMANTICS — VALIDATABLE
FSF-CJSON-1.0 VALIDATION — EXECUTABLE
NO HIDDEN REPAIR — REQUIRED
OPEN SPECIFICATION MATHEMATICS — OUTSIDE CANONICAL VALIDATION

FINAL ERROR TAXONOMY — OPEN
FORMAL VALIDATION CODES — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
