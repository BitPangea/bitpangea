# Precision Vectors

## Foundational Survey Fabric · Reference Vectors Section 08

**The Atlas · The Architecture · Foundational Survey Fabric · Reference Vectors**  
**Section:** 08 — Precision Vectors  
**Scope:** CRPC, ECEM, Sub-Pang Exactness, Lossless / Lossy Conversion, Canonical Precision Integrity  
**Status:** CRPC / ECEM Precision Profile Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Reference Vectors Section 08 — Precision Vectors** for the BitPangea **Foundational Survey Fabric**.

The governing question is:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/08-precision-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/08-precision-vectors/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/08-precision-vectors/README.md
```

---

## Purpose

Precision Vectors prove that canonical mathematical precision is preserved independently of:

```text
storage representation
rendering representation
display formatting
implementation capacity
lossy derived output
```

The current candidate precision core is based upon:

```text
CRPC
+
ECEM
```

---

## CRPC

The canonical coordinate scalar is:

```text
q = n/d Pang
```

with:

```text
n ∈ Z
d ∈ N+
gcd(|n|,d) = 1
zero = 0/1
```

CRPC is exact.

It is not floating approximation.

---

## ECEM

Under the **Exact Coordinate Extension Model**:

```text
one canonical Point
=
one exact Survey position
```

Greater representational capacity may add newly expressible exact Points.

It does not:

```text
refine an old Point into descendants
move an old Point
renumber an old Point
reinterpret an old Point
```

---

## Sub-Pang Exactness

Exact values below one Pang are native CRPC values.

Examples:

```text
1/2 Pang
1/3 Pang
7/16 Pang
```

No named hierarchy of subunits is required.

---

## Canonical Precision

Canonical precision concerns exact mathematical value.

It is not determined by:

```text
decimal digits
display width
database field width
UI formatting
floating-point precision
```

---

## Storage Precision

An implementation may choose an internal storage representation.

That representation must either:

```text
preserve the exact canonical value
```

or explicitly indicate that information was lost.

Storage limitations do not redefine canonical mathematics.

---

## Rendering Precision

Rendering may intentionally show less information.

For example, a UI may display an approximate decimal while preserving an exact CRPC value underneath.

The displayed approximation is not canonical truth.

---

## Lossless Rational Conversion

Where permitted:

```text
2/4 Pang -> 1/2 Pang
```

is lossless normalization.

The mathematical value is unchanged.

---

## Lossy Reduction

Examples include:

```text
rounding
truncation
decimal approximation
generalization
display simplification
```

A lossy value must remain identifiable as lossy.

It shall not be promoted silently to canonical equivalence.

---

## No Silent Rounding

Canonical input shall not be silently:

```text
rounded
truncated
snapped
quantized
decimalized
```

Near is not equal.

---

## Mixed Exact Representations

Mathematically equivalent supported forms compare by normalized exact value.

They do not compare by textual appearance.

---

## Precision Normalization

CRPC normalization removes representational redundancy.

It does not remove mathematical information.

Therefore:

```text
normalization
!=
precision reduction
```

---

## FSF-CJSON-1.0

Canonical interchange must preserve exact CRPC values.

Reference Vectors should prove:

```text
exact parse
exact canonical object
exact canonical serialize
exact CRPC recovery
canonical byte identity where required
```

---

## Precision Round-Trip

For a lossless supported pathway:

```text
canonical value
-> serialize
-> parse
-> canonical value
```

must return the mathematically identical value.

Repeated round trips must not accumulate drift.

---

## Version Compatibility

A later compatible Specification may expand exact representational capacity.

It may not alter the meaning of previously valid canonical values.

Thus:

```text
new exact values may appear
old exact values do not move
```

---

## Derived-Scalar Boundary

CRPC is not necessarily sufficient for every exact derived result.

Examples may include:

```text
Euclidean distance = sqrt(r)
arbitrary rotation -> non-rational coordinates
```

Those cases require a future exact result type.

They shall not be forced into approximate decimal or rational form merely to fit CRPC.

---

## Implementation Limits

Finite implementation limits may exist.

They must remain distinguishable from canonical invalidity.

The correct distinction is:

```text
VALID AND SUPPORTED
VALID BUT UNSUPPORTED
INVALID
```

where the governing Conformance profile requires that distinction.

---

## Cross-Implementation Agreement

Independent implementations must agree on:

```text
exact CRPC value
normalization
semantic equality
lossless / lossy classification
canonical serialization
round-trip preservation
version-preserved meaning
```

---

## Requirements Basis

Precision Vectors continue to derive especially from Requirements Findings:

```text
#9–#10
#20
#24
#41
#53–#54
#59
#64
#70–#75
#78–#83
```

---

## What Changed From the Previous Page

The earlier page correctly avoided selecting a precision mechanism.

That is no longer the current candidate standing.

The Specification now provides:

```text
CRPC exact rational coordinates
canonical zero
sub-Pang rational exactness
ECEM exact-place semantics
deterministic normalization
FSF-CJSON-1.0 exact interchange
compatible meaning preservation
```

Section 08 can therefore move from generic precision planning into exact candidate fixtures.

The remaining precision problem is concentrated in exact result classes outside rational closure.

---

## Still Open

Remaining Section 08 work includes:

```text
exact non-rational derived-scalar representation
irrational Euclidean-distance result model
arbitrary rotated-coordinate result type
future alternate precision encodings
final vector identifiers
final corpus packaging
canonical publication/adoption process
```

---

## Architectural Boundary

> **Precision Vectors prove the exactness model already selected by the Specification. They do not redefine canonical truth around implementation limits or force unresolved derived values into an approximate representation.**

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTION 08 — PRECISION VECTORS

CRPC — TESTABLE
SUB-PANG EXACTNESS — TESTABLE
ECEM — TESTABLE
CANONICAL PRECISION — TESTABLE
STORAGE / CANONICAL DISTINCTION — TESTABLE
RENDERING / CANONICAL DISTINCTION — TESTABLE
LOSSLESS RATIONAL CONVERSION — TESTABLE
LOSSY REDUCTION — TESTABLE
NO SILENT ROUNDING — TESTABLE
PRECISION NORMALIZATION — TESTABLE
FSF-CJSON PRECISION PRESERVATION — TESTABLE
LOSSLESS ROUND-TRIP — TESTABLE
VERSION-PRESERVED MEANING — TESTABLE

NON-RATIONAL DERIVED-SCALAR TYPE — OPEN
IRRATIONAL DISTANCE RESULT MODEL — OPEN
ARBITRARY ROTATED-COORDINATE RESULT TYPE — OPEN
FINAL CORPUS PACKAGING — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
