# Serialization Vectors

## Foundational Survey Fabric · Reference Vectors Section 10

**The Atlas · The Architecture · Foundational Survey Fabric · Reference Vectors**  
**Section:** 10 — Serialization Vectors  
**Scope:** FSF-CJSON-1.0, Canonical Object Encoding, Parsing, Round-Trip, Canonical Bytes  
**Status:** FSF-CJSON-1.0 Canonical Interchange Profile Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Reference Vectors Section 10 — Serialization Vectors** for the BitPangea **Foundational Survey Fabric**.

The governing question is:

> **Given this exact input, what exact answer must every conforming implementation produce?**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/10-serialization-vectors/**

Repository path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/10-serialization-vectors/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/reference-vectors/10-serialization-vectors/README.md
```

---

## Purpose

Serialization Vectors prove exact canonical interchange for supported Foundational Survey Fabric objects.

The current candidate interchange profile is:

```text
FSF-CJSON-1.0
```

The executable proof surface includes:

```text
CRPC serialization
Point serialization
Segment serialization
SCPE serialization
canonical integer strings
deterministic object-key order
UTF-8 canonical bytes
required / prohibited fields
parse / normalize / serialize convergence
canonical round-trip
precision preservation
cross-implementation exchange
```

---

## Governing Principle

> **Serialization represents canonical truth. It does not create canonical truth.**

The mathematical object exists independently of its machine representation.

---

## FSF-CJSON-1.0

FSF-CJSON-1.0 is the current candidate canonical JSON-based interchange profile for the supported FSF core.

It is intended to provide:

```text
deterministic structure
exact CRPC values
canonical object representation
canonical integer strings
deterministic field order
UTF-8 encoding
canonical bytes
```

where the governing profile requires one unique serialization.

---

## CRPC Serialization

Canonical CRPC serialization must preserve:

```text
numerator
denominator
sign
reduced form
canonical zero
```

without floating-point conversion.

No decimal approximation may substitute for an exact CRPC value.

---

## Point Serialization

A canonical Point carries:

```text
x
y
```

as exact CRPC components.

Canonical serialization must preserve both exact values and their governing object structure.

---

## Segment Serialization

A canonical Segment must already have its endpoints in deterministic canonical order.

Serialization preserves that order.

The serializer shall not emit equivalent-but-noncanonical endpoint permutations.

---

## SCPE Serialization

A canonical SCPE must already satisfy normalization rules including:

```text
counterclockwise traversal
lexicographically least start vertex
no repeated terminal closure point
no redundant collinear middle vertices
```

Serialization preserves the canonical ordered vertex sequence.

---

## Canonical Integer Strings

Where integers are represented textually inside FSF-CJSON, the profile must admit one canonical form.

Reference Vectors should test:

```text
positive values
negative values
zero
prohibited redundant signs
prohibited redundant leading formatting
```

according to the governing profile.

---

## Canonical Object-Key Order

Where the profile specifies object-key order:

```text
same canonical object
->
same ordered fields
```

This is necessary for deterministic canonical byte output.

Parser acceptance of a valid noncanonical order, if allowed, remains distinct from canonical serializer output.

---

## UTF-8 Canonical Bytes

Canonical output is ultimately a byte-level artifact.

Where one canonical serialization is required:

```text
same canonical object
=
same UTF-8 byte sequence
```

across conforming implementations.

---

## Parse / Validate / Normalize / Serialize

For permitted supported input:

```text
parse
  ↓
validate
  ↓
normalize
  ↓
canonical object
  ↓
canonical serialize
  ↓
canonical bytes
```

The result must be deterministic.

---

## Canonical Round-Trip

The core round-trip obligation is:

```text
canonical object
  ↓
canonical serialize
canonical bytes
  ↓
parse
canonical object
  ↓
canonical serialize
same canonical bytes
```

Repeated round trips shall not introduce representational drift.

---

## Required / Prohibited Fields

Reference Vectors should include:

```text
all required fields present
required field missing
wrong field type
unknown prohibited field
invalid nested structure
```

No silent defaulting or field dropping is permitted where the profile requires rejection.

---

## Duplicate / Conflicting Fields

Where duplicate or conflicting fields are prohibited:

```text
input -> reject
```

The parser shall not select one occurrence opportunistically.

---

## Precision Preservation

FSF-CJSON must preserve exact CRPC values including sub-Pang values.

Serialization shall not:

```text
round
truncate
decimalize
quantize
snap
```

canonical coordinates.

---

## Specification / Profile Identity

Where the interchange carries or references governing identity, Reference Vectors should prove deterministic interpretation of:

```text
Specification version
FSF-CJSON version
Conformance profile
compatibility metadata
```

where applicable.

These identifiers govern interpretation.

They do not become part of spatial identity.

---

## Cross-Implementation Exchange

Canonical output from one conforming implementation must be readable by another conforming implementation.

Exchange shall not require:

```text
private schema knowledge
hidden registry state
proprietary object models
locale assumptions
implementation-specific defaults
```

---

## Unsupported Representation Boundary

Formats not governed by the active profile remain unsupported.

Examples may include:

```text
future binary encoding
future alternate JSON profile
future text grammar
future human-facing address syntax
```

Similarity to FSF-CJSON does not grant canonical status.

---

## Derived-Scalar Serialization Boundary

Some exact mathematical result types remain open.

Examples may include:

```text
irrational Euclidean distance
arbitrary rotated coordinates
other non-rational derived scalars
```

Serialization shall not invent a representation for a mathematical type that the Specification has not yet defined canonically.

---

## Invalid Interchange

Negative serialization fixtures should include:

```text
missing required field
wrong field type
invalid CRPC object
invalid integer string
duplicate field where prohibited
unknown prohibited field
invalid profile/version
precision-corrupting value
malformed JSON structure
```

These belong in coordination with Reference Vectors 09 — Invalid-Input Vectors.

---

## Cross-Implementation Agreement

For the same canonical supported object, conforming implementations must agree on:

```text
canonical object meaning
canonical normalized structure
canonical FSF-CJSON output
canonical bytes where required
round-trip result
```

---

## Requirements Basis

Serialization Vectors continue to derive especially from Requirements Findings:

```text
#10
#30
#57–#61
#63–#64
#66
#72–#75
#78–#84
```

---

## What Changed From the Previous Page

The earlier page correctly stated that actual serialization fixtures could not exist while the interchange model, field ordering, schema, byte representation, and normalization procedures were unresolved.

That is no longer the current candidate standing.

The Specification now provides:

```text
FSF-CJSON-1.0
canonical CRPC representation
canonical Point / Segment / SCPE representation
deterministic normalization
canonical integer-string rules
deterministic object-key order
UTF-8 canonical serialization
exact canonical bytes
```

Section 10 can therefore move from generic interchange planning into exact candidate machine fixtures.

---

## Still Open

Remaining Section 10 work includes:

```text
future alternate normative encodings
future human-facing address serialization
non-rational derived-scalar representation
future geometry-family serialization
final vector identifiers
final corpus packaging
canonical publication/adoption process
```

---

## Architectural Boundary

> **Serialization Vectors prove the exact machine representation of canonical objects already defined by the Specification. They do not create new object semantics, invent encodings for unresolved mathematical result types, or elevate unsupported formats into canonical interchange.**

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — REFERENCE VECTORS

SECTION 10 — SERIALIZATION VECTORS

FSF-CJSON-1.0 — TESTABLE
CRPC SERIALIZATION — TESTABLE
POINT SERIALIZATION — TESTABLE
SEGMENT SERIALIZATION — TESTABLE
SCPE SERIALIZATION — TESTABLE
CANONICAL INTEGER STRINGS — TESTABLE
CANONICAL KEY ORDER — TESTABLE
UTF-8 CANONICAL BYTES — TESTABLE
REQUIRED / PROHIBITED FIELDS — TESTABLE
DUPLICATE / CONFLICTING FIELD REJECTION — TESTABLE
PARSE / NORMALIZE / SERIALIZE — TESTABLE
CANONICAL ROUND-TRIP — TESTABLE
PRECISION PRESERVATION — TESTABLE
CROSS-IMPLEMENTATION EXCHANGE — TESTABLE

FUTURE ALTERNATE ENCODINGS — OPEN
NON-RATIONAL DERIVED-SCALAR SERIALIZATION — OPEN
FUTURE GEOMETRY-FAMILY SERIALIZATION — OPEN
FINAL CORPUS PACKAGING — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
