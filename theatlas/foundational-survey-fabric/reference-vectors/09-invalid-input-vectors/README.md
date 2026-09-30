# Invalid-Input Vectors

## Foundational Survey Fabric · Reference Vectors Section 09

**The Atlas · The Architecture · Foundational Survey Fabric · Reference Vectors**  
**Section:** 09 — Invalid-Input Vectors  
**Scope:** Deterministic Rejection, Invalid / Unsupported Separation, Negative Conformance  
**Status:** Deterministic Failure Profile Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Reference Vectors Section 09 — Invalid-Input Vectors** for the BitPangea **Foundational Survey Fabric**.

The governing question is:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/09-invalid-input-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/09-invalid-input-vectors/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/09-invalid-input-vectors/README.md
```

---

## Purpose

Invalid-Input Vectors prove deterministic handling of input that is:

```text
malformed
semantically invalid
ambiguous
out of Survey Domain
contradictory
unsupported
version-incompatible
lossy while claiming exactness
pathological
outside current mathematical closure
```

They also prove that **INVALID** and **UNSUPPORTED** remain distinct states.

---

## Candidate Failure States

The current Conformance model should distinguish:

```text
VALID AND SUPPORTED
VALID BUT UNSUPPORTED
INVALID
```

These states shall not be collapsed into one generic failure result.

---

## Malformed CRPC

Negative fixtures should include:

```text
zero denominator
invalid integer field
invalid sign structure
malformed rational object
prohibited canonical integer syntax
```

Such values are invalid.

They shall not be repaired.

---

## Valid Noncanonical CRPC Boundary

Where an interface permits noncanonical but mathematically valid rational input:

```text
2/4
```

may normalize to:

```text
1/2
```

This is not invalid input.

Invalid-Input Vectors must preserve the distinction between:

```text
valid + normalizable
and
malformed / impossible
```

---

## Malformed Point

Negative fixtures should include:

```text
missing x
missing y
malformed x CRPC
malformed y CRPC
invalid extra structure
wrong field type
```

No field guessing is permitted.

---

## Invalid Segment

Negative fixtures should include:

```text
invalid endpoint
missing endpoint
zero-length Segment where distinct endpoints are required
malformed Segment object
```

Invalid Segment input shall not be silently converted into Point geometry.

---

## Invalid SCPE

Negative fixtures should include:

```text
fewer than 3 distinct vertices
consecutive duplicate vertices
zero-area polygon
self-intersection
invalid Point
invalid closure structure
forbidden nonadjacent intersection
```

Only exact normalization explicitly allowed by the Specification may occur before final validity determination.

---

## Out-of-Domain Input

The Survey Domain is parameterized as:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

A Point or supported geometry outside this Domain is not valid Survey geometry.

It shall not be:

```text
clipped
wrapped
snapped
translated
rounded
repaired
```

The numerical value of `H` remains open, so symbolic and parameterized negative cases are testable now while final concrete numerical edge cases remain pending.

---

## Ambiguity

If more than one canonical meaning is plausible and no Specification rule resolves the ambiguity:

```text
input -> INVALID
```

Implementation-specific interpretation is prohibited.

---

## FSF-CJSON-1.0 Structural Failures

Negative fixtures should test:

```text
missing required fields
wrong field types
invalid CRPC objects
invalid canonical integer strings
prohibited unknown fields
malformed object structure
duplicate or conflicting fields where forbidden
```

A conforming implementation shall reject invalid structure deterministically.

---

## Unsupported Representation

A representation may be valid in another profile or future extension but unsupported in the implementation under test.

Where the Conformance model permits the distinction:

```text
VALID BUT UNSUPPORTED
```

is not the same as:

```text
INVALID
```

---

## Unsupported Version / Profile

Negative fixtures should include:

```text
unknown Specification version
unsupported Specification version
incompatible Specification version
unknown FSF-CJSON profile version
unsupported Conformance profile
```

An implementation shall not silently reinterpret such input under another version.

---

## Invalid Normalization

Normalization shall not manufacture validity.

Invalid examples include inputs that would require the implementation to:

```text
guess
snap
move coordinates
invent fields
remove meaningful structure
change topology
reinterpret malformed values
```

to become valid.

These must fail.

---

## Hidden-Snapping / Tolerance Traps

Reference Vectors should include exact values close to:

```text
Point coordinates
Segment endpoints
SCPE boundaries
Survey Domain boundaries
```

to prove:

```text
near != equal
```

No epsilon or proximity rule may create canonical identity.

---

## Lossy-Exactness Misrepresentation

A rounded or truncated value presented as exact must not be silently accepted as canonical truth.

Examples include:

```text
rounded decimal pretending to equal CRPC
truncated geometry
display approximation passed back as canonical input
```

The loss must be identifiable.

---

## Unsupported Operations

Negative fixtures should include requests whose canonical result model remains open.

Current examples include:

```text
arbitrary exact rotation
general Boolean result geometry where no canonical output type exists
derived scalar operations lacking a governed exact result type
```

Such requests shall be classified as unsupported or outside the governing profile.

They shall not return fabricated canonical answers.

---

## Pathological / Complexity Cases

The negative corpus should test deterministic termination against cases designed to expose:

```text
excessive redundancy
uncontrolled recursion
nontermination
pathological nesting
hidden approximation loops
implementation-specific fallback behavior
```

Final complexity ceilings remain subject to the governing Specification / Conformance profile.

---

## Cross-Implementation Agreement

For identical negative input under the same governing profile, independent implementations must agree on:

```text
validity judgment
supported / unsupported state where applicable
required failure classification
```

Human-readable diagnostic prose may differ.

Canonical judgment may not.

---

## Requirements Basis

Invalid-Input Vectors continue to derive especially from Requirements Findings:

```text
#7–#10
#20–#22
#30
#48
#57–#60
#70–#75
#78–#83
```

---

## What Changed From the Previous Page

The earlier page stated that concrete invalid fixtures could not yet exist because grammar, precision, serialization, version identifiers, and error taxonomy were unresolved.

That is no longer broadly accurate for the candidate core.

The current Specification and Conformance architecture now provide concrete negative-test surfaces for:

```text
CRPC
Point
Segment
SCPE
Survey Domain validity
normalization
FSF-CJSON-1.0
version / profile compatibility
unsupported-state classification
exactness / snapping traps
unsupported operations
```

Section 09 can therefore move from planned failure categories into executable candidate negative fixtures.

---

## Still Open

Remaining Section 09 work includes:

```text
final numerical H
final numerical Domain-edge failures
final globally frozen failure identifiers if not yet adopted
final complexity ceilings
future address-grammar negative cases
future representation-family failures
final vector identifiers
final corpus packaging
canonical publication/adoption process
```

---

## Architectural Boundary

> **Invalid-Input Vectors prove what the Foundational Survey Fabric refuses to accept and what a conforming implementation may legitimately report as unsupported. They do not permit silent repair, approximation, snapping, version guessing, or invention of mathematics beyond the Specification.**

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTION 09 — INVALID-INPUT VECTORS

MALFORMED CRPC — TESTABLE
MALFORMED POINT — TESTABLE
INVALID SEGMENT — TESTABLE
INVALID SCPE — TESTABLE
OUT-OF-DOMAIN RULE — TESTABLE PARAMETRICALLY
AMBIGUOUS INPUT — TESTABLE
FSF-CJSON STRUCTURAL FAILURE — TESTABLE
INVALID NORMALIZATION — TESTABLE
HIDDEN-SNAPPING / TOLERANCE TRAPS — TESTABLE
LOSSY / EXACT MISREPRESENTATION — TESTABLE
UNSUPPORTED REPRESENTATION — TESTABLE
UNSUPPORTED VERSION / PROFILE — TESTABLE
UNSUPPORTED OPERATION — TESTABLE
INVALID / UNSUPPORTED SEPARATION — TESTABLE

FINAL NUMERICAL DOMAIN-EDGE FIXTURES — OPEN UNTIL H
FINAL FAILURE IDENTIFIERS — OPEN IF NOT YET ADOPTED
FINAL COMPLEXITY CEILINGS — OPEN
FINAL CORPUS PACKAGING — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
