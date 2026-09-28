# Foundational Survey Fabric — Specification 06

## Serialization and Specification Identity

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification Section:** 06  
**Status:** Candidate Mathematics Integrated — Core Serialization Selected  
**Canonical Adoption:** Not yet performed

---

## Purpose

Specification 06 defines how exact FSF mathematical meaning is carried into deterministic machine representation and how those representations relate to Specification identity, versioning, compatibility, provenance, and future durable formats.

Its governing principle is:

> **One meaning. Many durable expressions.**

The central architectural boundary is equally important:

> **The format is not the place.**

---

## Current Candidate Serialization

The current candidate core selects:

```text
FSF-CJSON-1.0
```

as the **primary canonical machine-readable representation** for supported FSF geometry.

The current supported canonical geometry profile is:

```text
Point
Segment
SCPE
```

The canonical production order is:

```text
mathematical validation
        ↓
canonical normalization
        ↓
FSF-CJSON-1.0
        ↓
canonical UTF-8 bytes
```

Serialization does not create geometry.

It serializes already-valid, already-normalized mathematical meaning.

---

## Relevant Formal Mathematical Decisions

### FMD-01 — Exact Coordinate Representation

**Directly relevant — integrated.**

CRPC exact values are serialized without JSON numeric literals.

A canonical rational:

```text
n/d Pang
```

is represented structurally as:

```json
{"d":"<positive-integer>","n":"<signed-integer>"}
```

Canonical zero is:

```json
{"d":"1","n":"0"}
```

This preserves exact rational meaning independent of floating-point parsing behavior.

---

### FMD-02 — Canonical Frame and Handedness

**Semantically inherited.**

FSF-CJSON carries Points and geometry whose coordinates already have meaning in the canonical `(x,y)` frame.

Serialization does not redefine axis direction, handedness, or rotation.

---

### FMD-03 — Canonical Origin Placement

**Semantically inherited.**

The serialized coordinate pair `(0,0)` refers to the permanent FSF origin because the mathematical Specification says so.

The JSON representation itself does not create that meaning.

---

### FMD-04 — Survey Domain Geometry and Dimensions

**Representation-compatible, but Domain semantics remain owned by Specification 01.**

FSF-CJSON can encode the exact bounds of a governed Survey Domain.

This section does not independently choose or re-adopt Domain dimensions.

It serializes whatever exact Domain mathematics are ultimately governed by the Specification.

---

### FMD-05 — Canonical Primitive Geometry

**Directly relevant.**

The current FSF-CJSON core includes typed structures for:

```text
Point
Segment
SCPE
```

Future geometry types require separately governed extensions rather than ad hoc unknown fields.

---

### FMD-06 — Exact Geometry Predicates and Validation

**Relevant to semantic validation, not JSON syntax alone.**

A syntactically valid JSON object may still fail FSF semantic validation.

Examples include:

- unreduced rationals;
- coordinates outside the Survey Domain;
- invalid Segment geometry;
- self-intersecting SCPE;
- zero-area SCPE;
- noncanonical SCPE traversal.

The serializer and schema do not replace the mathematical validator.

---

### FMD-07 — Canonical Geometry Normalization

**Directly relevant — required before serialization.**

Canonical bytes are defined over normalized geometry.

The order is:

```text
validate
normalize
serialize
```

not:

```text
serialize
then guess how to normalize
```

For the same supported geometry meaning under the same format version:

```text
same meaning
-> same normalized representation
-> same canonical bytes
```

---

### FMD-08 — Canonical Serialization and Interchange

**Directly relevant — principal decision integrated here.**

FMD-08 selects:

```text
FSF-CJSON-1.0
```

with:

```text
UTF-8
no BOM
compact JSON
no insignificant whitespace
deterministic key ordering
duplicate keys invalid
unknown fields invalid
NFC strings
exact numeric strings
structured CRPC objects
semantic array order
```

Canonical type identifiers currently include:

```text
fsf.point
fsf.segment
fsf.scpe
fsf.survey-domain
fsf.geometry-package
```

The exact semantics of each type remain defined by the mathematical Specification.

---

### FMD-09 — Exact Precision and Refinement Semantics

**Directly relevant to compatibility.**

Compatible successor Specifications may expand exact representational capability without changing the meaning of old canonical references.

Serialization evolution must therefore preserve the same rule:

> **Version the standard, not the place.**

A new encoding or format version may add capacity.

It may not move established place.

---

## Canonical Byte Rules

The current candidate requires:

```text
encoding          = UTF-8
BOM               = prohibited
whitespace        = no insignificant whitespace
object key order  = ascending Unicode code-point lexicographic order
duplicate keys    = invalid
unknown fields    = invalid unless governed by a later version
strings           = NFC
arrays            = semantic order
```

Canonical exact integer strings shall not use:

```text
+
leading zeros
-0
exponent notation
decimal approximation
```

except where a future governed type explicitly defines otherwise.

---

## Canonical Geometry Package

The current candidate permits a top-level typed geometry package carrying supported normalized geometry under:

```text
FSF-CJSON-1.0
```

The format identifier identifies the serialization rules.

It does not become part of the spatial identity of the geometry itself.

---

## Schema Boundary

A JSON Schema may verify:

- required fields;
- basic object shape;
- permitted type strings;
- basic string pattern constraints;
- array structure.

It cannot by itself prove:

- CRPC reduction;
- exact Domain validity;
- Segment validity;
- polygon simplicity;
- geometric equivalence;
- canonical winding;
- canonical start vertex;
- semantic normalization.

Those require an FSF semantic validator.

---

## Representation Classes

The current standing is:

```text
primary canonical machine representation
    -> FSF-CJSON-1.0

future explicitly governed lossless normative representation
    -> permissible, not yet selected

non-normative representation
    -> permitted for explanation, display, debugging, archive, convenience
```

An alternate encoding does not acquire canonical status simply because it is lossless.

Governance must designate its role.

---

## Versioning and Compatibility

A compatible successor may:

- extend exact representational capacity;
- add newly governed geometry types;
- strengthen validation;
- add Reference Vectors;
- add another explicitly governed lossless representation;
- clarify rules without changing semantics.

It may not:

- renumber a place;
- relocate a Point;
- reinterpret an old coordinate;
- silently snap old values;
- change geometry meaning merely because serialization changes.

---

## Integrity Evidence

Cryptographic integrity may be applied **after** canonical serialization.

Conceptually:

```text
normalized geometry
        ↓
FSF-CJSON-1.0 bytes
        ↓
hash / signature / other integrity evidence
```

The specific hash or signature algorithm is not selected by FMD-08.

It remains above the spatial mathematics.

---

## What Changed From the Previous Specification 06

The earlier page correctly established:

- deterministic normative interchange;
- one meaning across durable forms;
- representation consistency;
- Specification identity;
- versioning;
- compatibility;
- format independence;
- verification independence;
- provenance separation;
- interoperability;
- durable expression.

Those principles remain.

The following previously open matters are now resolved for the current core:

```text
primary canonical machine format
    -> FSF-CJSON-1.0

exact numeric encoding
    -> structured CRPC objects

canonical byte encoding
    -> compact UTF-8

object key order
    -> deterministic lexicographic

duplicate keys
    -> invalid

unknown fields
    -> invalid unless governed by later version

string normalization
    -> NFC

geometry normalization before serialization
    -> required

Point / Segment / SCPE machine structures
    -> selected

same normalized meaning to canonical bytes
    -> deterministic
```

---

## What Did Not Need to Change

The following principles remain intact:

- Mathematical meaning precedes representation.
- Multiple durable forms may exist.
- Normative status requires governance.
- Format does not define place.
- Specification identity does not become spatial identity.
- Compatible evolution preserves established meaning.
- Cryptography does not define geometry.
- Internal implementation data structures may differ.
- Independent implementations must agree on normative interchange.

---

## Still Open

The complete serialization and identity system still requires:

```text
final top-level FSF Specification identifier
complete Specification-version identifier syntax
compatibility declaration syntax
future multi-representation precedence rules if another normative encoding is adopted
serialization rules for future geometry types
integrity algorithm selection if formally required
adoption/version governance procedure
```

These are separate from the now-selected core FSF-CJSON representation.

---

## Relationship to Public Addressing

FSF-CJSON-1.0 is a canonical machine representation.

It is **not automatically** the public or human-readable canonical address grammar.

Specification 03 owns the future address grammar.

Any future address form must resolve exactly to the same mathematical reference carried by FSF-CJSON.

---

## Repository Files

Recommended directory:

```text
theatlas/foundational-survey-fabric/specification/06-serialization-identity/
```

Primary files:

```text
index.html
README.md
```

Associated candidate schema:

```text
fsf-cjson-1.0.schema.json
```

The public `index.html` is the human-facing Specification section.

This `README.md` preserves repository-facing serialization rules, FMD traceability, representation boundaries, versioning principles, and remaining identity work.

---

## Standing

```text
SPECIFICATION 06 — CANDIDATE MATHEMATICS INTEGRATED

PRIMARY CANONICAL MACHINE FORMAT — FSF-CJSON-1.0
ENCODING — UTF-8
BOM — PROHIBITED
INSIGNIFICANT WHITESPACE — PROHIBITED
JSON NUMERIC LITERALS FOR EXACT COORDINATES — PROHIBITED
CRPC — STRUCTURED EXACT OBJECT
DUPLICATE KEYS — INVALID
UNKNOWN FIELDS — INVALID UNLESS GOVERNED
STRINGS — NFC
OBJECT KEY ORDER — DETERMINISTIC
GEOMETRY NORMALIZATION BEFORE SERIALIZATION — REQUIRED
SAME NORMALIZED MEANING -> SAME CANONICAL BYTES — REQUIRED

PUBLIC ADDRESS GRAMMAR — SEPARATE / OPEN
FINAL TOP-LEVEL FSF SPECIFICATION IDENTIFIER — OPEN
FUTURE NORMATIVE ENCODING PRECEDENCE — OPEN IF NEEDED
INTEGRITY ALGORITHM — OPEN / ABOVE SPATIAL MATHEMATICS

CORE SERIALIZATION — READY FOR CONFORMANCE WORK
FORMAL ADOPTION — NOT YET PERFORMED
```

---

## Governing Closing Statement

> **Canonical serialization gives exact spatial truth one deterministic machine form. It does not create that truth, and future formats may evolve only by preserving the meaning already established beneath them.**
