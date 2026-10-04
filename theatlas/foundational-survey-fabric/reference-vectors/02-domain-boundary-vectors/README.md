# Survey Domain Limit Vectors

## Foundational Survey Fabric · Reference Vectors Section 02

**The Atlas · The Architecture · Foundational Survey Fabric · Reference Vectors**  
**Section:** 02 — Survey Domain Limit Vectors  
**Scope:** Canonical Origin, Domain Boundary, Interior / Boundary / Outside Classification  
**Status:** Parameterized Boundary Model Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Reference Vectors Section 02 — Survey Domain Limit Vectors** for the BitPangea **Foundational Survey Fabric**.

The governing question is:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/02-domain-boundary-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/02-domain-boundary-vectors/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/02-domain-boundary-vectors/README.md
```

---

## Purpose

Survey Domain Limit Vectors prove exact agreement on:

```text
canonical origin
Survey Domain geometry
closed-boundary inclusion
interior validity
boundary validity
outside invalidity
corner behavior
compatible version preservation
Survey validity versus World membership
```

Reference Vectors demonstrate the Specification.

They do not select unresolved numerical capacity.

---

## Current Survey Domain Model

The candidate Survey Domain is:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

where:

```text
H > 0
H is exact CRPC
```

The Domain is:

```text
finite
connected
closed
axis-aligned
square
centered at (0,0)
```

The exact numerical value of `H` remains open under **FMD-04B — Numerical Survey Domain Capacity**.

The geometry and boundary semantics are resolved separately under **FMD-04A — Survey Domain Geometry / Boundary**.

The earlier ±1,000,000 Pang half-span is a superseded working candidate and is not canonical.

---

## Canonical Origin

The origin is:

```text
O = (0,0)
```

It is the permanent zero-reference of the canonical frame.

It has no automatic:

```text
Parcel significance
World-membership significance
civic significance
ownership significance
landmark significance
cultural significance
```

---

## Boundary Equations

The four Domain boundaries are:

```text
x = -H
x = +H
y = -H
y = +H
```

Because the Domain is closed, each boundary is included.

---

## Interior Rule

A Point is strictly interior when:

```text
-H < x < H
and
-H < y < H
```

Interior Points are valid Survey references.

---

## Boundary Rule

A Point lies on the boundary when it satisfies:

```text
-H ≤ x ≤ H
-H ≤ y ≤ H
```

with equality on at least one coordinate limit.

Boundary Points are valid Survey references.

---

## Corner Rule

The four corners are:

```text
(-H,-H)
(-H,+H)
(+H,-H)
(+H,+H)
```

Each is valid because the Domain is closed.

---

## Outside Rule

A Point is outside when any of the following is true:

```text
x < -H
x > H
y < -H
y > H
```

An outside Point is not a valid canonical Survey reference.

It shall not be:

```text
clipped
snapped
wrapped
translated
rounded
coerced
silently repaired
```

---

## Candidate Classification Model

Reference Vectors should distinguish:

```text
INTERIOR
BOUNDARY
OUTSIDE
```

For FSF Survey validity:

```text
INTERIOR -> VALID
BOUNDARY -> VALID
OUTSIDE -> INVALID
```

This classification concerns the Survey Domain only.

---

## World-Space Separation

Survey validity is not World membership.

A Point may be:

```text
VALID FSF SURVEY REFERENCE
+
NON_WORLD under Spatial Ground
```

The architectural handoff remains:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

Reference Vectors shall not collapse those layers.

---

## ECEM Boundary Stability

Under ECEM, expanded representational capability may allow additional exact Points to be expressed.

It does not change:

```text
the Domain
the origin
the boundary
the meaning of existing Points
```

A compatible later version must preserve established classifications.

---

## Numerical H Dependency

The Domain's geometry and closure are defined.

The numerical capacity is not.

Therefore:

```text
symbolic boundary vectors
    -> testable now

parameterized interior / boundary / outside vectors
    -> testable now

concrete numerical edge coordinates
    -> blocked until FMD-04B resolves H

canonical just-inside / just-outside numeric fixtures
    -> blocked until FMD-04B resolves H
```

No Reference Vector may select a convenient number for `H` merely to make the corpus easier to write. Reference Vectors demonstrate the governing Specification; they do not close FMD-04B.

---

## Cross-Implementation Agreement

Given the same:

```text
Point
H
Specification profile
```

all conforming implementations must produce the same classification.

A disagreement may indicate:

```text
implementation defect
Specification ambiguity
version incompatibility
fixture defect
```

---

## No Exterior Inference

An OUTSIDE result means only:

```text
no valid FSF Survey reference at that input
```

It does not establish:

```text
an exterior world
an outer geography
The Verge
a World edge
a perimeter
ownership boundary
territorial meaning
```

---

## Requirements Basis

Survey Domain Limit Vectors continue to derive especially from Requirements Findings:

```text
#9–#10
#13
#19–#20
#23
#29
#32
#39–#40
#48–#49
#57
#74–#76
#78–#83
```

These Findings remain authoritative at the Requirements layer.

Reference Vectors demonstrate them through the governing Specification and Conformance rules.

---

## What Changed From the Previous Page

The earlier page correctly stated that Survey Domain vectors could not be finalized while Domain geometry and boundary conventions were unresolved.

That condition has changed.

The candidate Specification now establishes:

```text
closed square Domain
axis alignment
origin at (0,0)
exact CRPC coordinates
inclusive boundary semantics
deterministic inside / boundary / outside relation
```

The remaining blocker is narrower:

```text
numerical H
```

Accordingly, Section 02 can now support exact symbolic and parameterized Reference Vectors without inventing the final Domain capacity.

---

## Still Open

Remaining Section 02 work includes:

```text
FMD-04B numerical H
final concrete edge coordinates
final near-boundary numerical fixtures
final vector identifiers
final fixture packaging
final expected-result record schema
canonical publication/adoption process
```

---

## Architectural Boundary

> **Survey Domain Limit Vectors prove the mathematical boundary behavior selected by the Specification. They do not select the unresolved numerical Domain capacity, define World membership, or infer an exterior beyond the FSF Survey Domain.**

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTION 02 — SURVEY DOMAIN LIMIT VECTORS

CANONICAL ORIGIN — TESTABLE
DOMAIN GEOMETRY — DEFINED PARAMETRICALLY
CLOSED BOUNDARY — TESTABLE
INTERIOR CLASSIFICATION — TESTABLE
BOUNDARY CLASSIFICATION — TESTABLE
OUTSIDE CLASSIFICATION — TESTABLE
CORNER SEMANTICS — TESTABLE
ECEM BOUNDARY STABILITY — TESTABLE
WORLD-SPACE SEPARATION — TESTABLE

NUMERICAL H — OPEN
CONCRETE DOMAIN-EDGE FIXTURES — NOT YET FINAL
FINAL CORPUS PACKAGING — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
