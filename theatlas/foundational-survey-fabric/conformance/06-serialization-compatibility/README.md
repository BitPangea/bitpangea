# Serialization Compatibility

## Foundational Survey Fabric · Conformance Section 06

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 06 — Serialization Compatibility  
**Scope:** Canonical Interchange Compatibility  
**Status:** FSF-CJSON-1.0 Candidate Profile Integrated  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 06 — Serialization Compatibility** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The conformance rules ensuring that independent implementations exchange, parse, normalize, and reproduce normative Survey representations without ambiguity while preserving one canonical spatial meaning.**

Its governing principle remains:

> **Implement however you like. Exchange one spatial truth.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/06-serialization-compatibility/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/06-serialization-compatibility/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/06-serialization-compatibility/README.md
```

---

## Integration Standing

The original Serialization Compatibility page correctly defined the principles of normative interchange while leaving open whether FSF would ultimately use:

```text
one canonical serialization
```

or:

```text
multiple governed normative encodings
```

That question is now resolved for the current solved candidate profile.

The integrated Specification selects:

```text
FSF-CJSON-1.0
```

as the current candidate canonical machine representation for:

```text
CRPC
Point
Segment
SCPE
```

Conformance 06 can therefore test one concrete canonical serialization.

This does not pre-adopt future encodings.

Day #126 lineage reconciliation further distinguishes:

```text
mathematical identity
≠ representation identity
≠ format identity
≠ Specification identity
```

FSF-CJSON-1.0 is a governed canonical representation of supported mathematical objects.

It is not itself the spatial identity of those objects.

---

## Governing Processing Sequence

Canonical machine output follows:

```text
validate
    ↓
normalize
    ↓
serialize
```

Serialization does not repair invalid mathematics.

A syntactically valid JSON object is not automatically a valid canonical FSF object.

---

## FSF-CJSON-1.0

The current candidate canonical representation uses:

```text
UTF-8
no BOM
compact JSON
deterministic object-key order
semantic array order
structured exact CRPC values
canonical integer strings
duplicate keys invalid
unknown/prohibited fields invalid where governed
NFC string normalization
shortest required escaping
```

Canonical exact coordinate components are not represented by JSON floating-point numbers.

---

## Structured CRPC Values

Exact rational values use structural representation.

Example:

```json
{"d":"2","n":"1"}
```

means exactly:

```text
1/2 Pang
```

Conformance should test:

- valid integer-string syntax;
- positive denominator;
- reduced canonical form where required;
- canonical zero;
- exact rational meaning;
- rejection of prohibited numeric-literal substitution.

---

## Point Encoding

Canonical Points use the governed FSF Point structure.

A canonical Point must already contain:

- valid normalized CRPC values;
- correct field structure;
- applicable Survey validity.

Canonical serialization does not round or simplify the coordinates.

---

## Segment Encoding

Segment geometry is normalized before serialization.

Therefore canonical Segment interchange must preserve:

```text
lexicographically lesser endpoint first
```

Equivalent reversed input may be accepted only where valid noncanonical input is allowed.

Canonical bytes reflect the normalized Segment.

---

## SCPE Encoding

SCPE geometry is normalized before serialization.

Canonical SCPE form includes:

```text
normalized CRPC vertices
exact redundant-collinear removal
counterclockwise traversal
lexicographically least start vertex
no repeated terminal closure vertex
```

Canonical byte identity is therefore downstream of canonical geometry normalization.

---

## Deterministic Key Order

FSF-CJSON-1.0 requires deterministic object-key ordering.

A serializer shall not emit arbitrary map/hash iteration order.

Where the Specification defines one canonical order:

```text
same object
    -> same key sequence
```

---

## Semantic Array Order

Array order is meaningful where the represented structure is ordered.

Conformance shall preserve:

- vertex order after normalization;
- ordered geometry components;
- any other sequence whose order carries canonical meaning.

Arrays are not globally sortable merely for serialization convenience.

---

## Duplicate Keys

Duplicate keys are invalid.

An implementation shall not:

- select the first duplicate;
- select the last duplicate;
- merge values;
- rely on parser-specific behavior.

Canonical input must be unambiguous.

---

## Unknown Fields

Unknown or prohibited fields shall be handled according to the governed format rules.

For the current canonical format, they shall not be silently ignored where doing so would permit undeclared extension behavior inside canonical interchange.

Future extension rules require explicit governance.

---

## Text and Unicode

Canonical representation uses:

```text
UTF-8
```

without a BOM.

Where strings occur, the required Unicode normalization and escaping rules apply.

Canonical bytes shall not depend on:

- platform locale;
- preferred newline format;
- pretty printer;
- JSON library defaults;
- arbitrary escaping style.

---

## Compact Canonical Form

Canonical FSF-CJSON-1.0 contains no insignificant presentation whitespace.

Pretty-printed JSON may be useful for:

- documentation;
- debugging;
- UI;
- logs.

It is not canonical interchange unless it happens to match the exact governed canonical bytes.

---

## Deterministic Parsing

The same valid FSF-CJSON-1.0 bytes must parse to:

```text
the same canonical object
the same mathematical meaning
the same spatial meaning
```

Parsing shall not depend on:

- locale;
- hidden registry;
- database state;
- parser preference;
- implementation defaults;
- user identity;
- external mutable state.

---

## Canonical Byte Equality

For supported normalized objects:

```text
same canonical object
    ↓
same FSF-CJSON-1.0 bytes
```

This is stronger than semantic equivalence.

If two serializers produce semantically equivalent but byte-different output where one canonical encoding is required, at least one is nonconforming.

---

## Round-Trip Compatibility

Canonical round-trip behavior is:

```text
canonical object
    ↓ serialize
canonical bytes
    ↓ parse
same canonical object
    ↓ serialize
same canonical bytes
```

Round-trip proof must preserve both meaning and canonical representation.

---

## Valid Noncanonical Input

An implementation may support convenience input beyond canonical FSF-CJSON-1.0 only where the governing profile permits it.

Such input must remain distinguishable as:

```text
VALID NONCANONICAL
```

until normalized.

Arbitrary JSON that can be interpreted as equivalent does not automatically become canonical input.

---

## Precision Preservation

Canonical serialization preserves exact mathematical meaning.

It shall not use:

- rounded decimals;
- binary floating substitution;
- truncated coordinates;
- reduced precision;
- lossy compression;
- approximate geometry.

Lossy representation belongs outside canonical interchange.

---

## Cross-Implementation Exchange

FSF-CJSON-1.0 must be independently usable.

Canonical exchange shall not require:

- proprietary object models;
- private schema extensions;
- hidden registries;
- inaccessible services;
- shared codebase;
- favored software vendor.

Compatibility arises from the published Specification.

---

## Format Identity

Current canonical format identity:

```text
FSF-CJSON-1.0
```

A serialization conformance claim should identify it explicitly.

The final top-level FSF Specification identifier remains open.

Format identity identifies the governing representation.

It does not become spatial identity.

Where compatibility is claimed across governed formats or Specification versions, the representations must correspond losslessly and deterministically to the same normalized mathematical object.

---

## Unknown and Unsupported Forms

Unknown, malformed, unsupported, or incompatible serialization shall not be silently reinterpreted as valid canonical input.

Depending on future profile/version rules, it may be classified as:

```text
INVALID
UNSUPPORTED
INCOMPATIBLE VERSION
```

The complete machine-readable error taxonomy remains open.

---

## Future-Encoding Boundary

FSF-CJSON-1.0 is the current candidate canonical representation.

That does not mean:

```text
all future FSF encodings are already normative
```

A future normative format would require an explicit Specification decision defining:

- its role;
- canonical status;
- losslessness requirements;
- equivalence relationship;
- version identity;
- compatibility rules;
- precedence relative to existing formats.

Conformance shall not invent that policy.

> **Representations may evolve. Canonical place may not drift.**

A future encoding may differ in syntax or bytes only where the governing Specification explicitly defines its normative status, precedence, and exact compatibility relationship to existing canonical meaning.

---

## Incompatible-Transition Boundary

Conformance may detect that a future encoding is not compatible with the current canonical representation.

It may not authorize the transition.

If a future representation cannot preserve:

```text
lossless
deterministic
meaning-preserving
```

correspondence to the same normalized mathematical object, it is not ordinary compatible serialization evolution.

Any intentionally incompatible successor would require separate institutional Specification succession / migration governance.

---

## Reference Vector Interchange Proof

Serialization vectors should test:

```text
canonical CRPC objects
canonical Point objects
canonical Segment objects
canonical SCPE objects
invalid duplicate keys
invalid unknown fields
invalid exact-value forms
noncanonical equivalent input where permitted
canonical key order
canonical string behavior
canonical byte output
round-trip reproduction
cross-implementation byte equality
```

Reference Vectors demonstrate format behavior already defined by the Specification.

They do not replace it.

---

## Serialization Failure

Examples of Conformance failure include:

```text
valid canonical bytes rejected
invalid canonical encoding accepted
wrong CRPC meaning
wrong geometry meaning
incorrect key order
precision loss
normalization omitted
different canonical bytes
hidden implementation dependence
proprietary extension required for interpretation
```

Interchange disagreement is evidence of:

- implementation defect;
- fixture defect;
- Specification ambiguity;
- profile/version mismatch.

It is not resolved through implementation preference.

---

## Requirements Basis

This section remains derived especially from:

```text
#30
#57–#60
#63–#64
#66
#72–#75
#78–#83
```

These Findings remain authoritative within the Requirements Framework.

Conformance applies them.

It does not replace them.

---

## What Changed From the Previous Page

The previous page correctly established:

- normative interchange;
- deterministic serialization;
- deterministic parsing;
- normalization of permitted alternatives;
- field integrity;
- precision preservation;
- round-trip behavior;
- cross-implementation exchange;
- identity/version association;
- clear handling of unsupported forms;
- exact representation equality where uniquely governed.

Those principles remain.

The major change is that the Specification has now selected one concrete format for the solved core.

Previously:

```text
serialization model
    -> architecture defined
format count and byte rules
    -> open
```

Now:

```text
FSF-CJSON-1.0
    -> current candidate canonical format
    -> directly testable
```

---

## Still Open

The remaining serialization-related Conformance work includes:

```text
final top-level FSF Specification identifier
formal Specification version-succession rules
full cross-version compatibility syntax
future normative encoding precedence
incompatible-transition / migration governance if ever required
machine-readable serialization error identifiers
formal interchange test identifiers
governance for future additional normative encodings
```

---

## Architectural Boundary

> **Formats may differ internally and, where governed by the Specification, normatively. They may not disagree about canonical spatial meaning or create competing authoritative truths.**

This remains the defining boundary of Conformance Section 06.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 06 — SERIALIZATION COMPATIBILITY

FSF-CJSON-1.0 — CURRENT CANDIDATE CANONICAL FORMAT
CRPC STRUCTURED ENCODING — REQUIRED
VALIDATE → NORMALIZE → SERIALIZE — REQUIRED
DETERMINISTIC PARSING — REQUIRED
DETERMINISTIC KEY ORDER — REQUIRED
DUPLICATE KEYS — INVALID
GOVERNED UNKNOWN FIELDS — REQUIRED
UTF-8 CANONICAL BYTES — REQUIRED
ROUND-TRIP REPRODUCTION — REQUIRED
CROSS-IMPLEMENTATION BYTE EQUALITY — REQUIRED
MATHEMATICAL / REPRESENTATION / FORMAT / SPECIFICATION IDENTITY SEPARATION — DEFINED

TOP-LEVEL FSF SPECIFICATION IDENTITY — OPEN
FORMAL SPECIFICATION VERSION SUCCESSION — OPEN
CROSS-VERSION COMPATIBILITY SYNTAX — OPEN
INCOMPATIBLE-TRANSITION / MIGRATION GOVERNANCE — OPEN IF EVER REQUIRED
FUTURE NORMATIVE ENCODING GOVERNANCE — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
