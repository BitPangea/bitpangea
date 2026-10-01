# Foundational Survey Fabric — Formal Mathematical Decision 08

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #123 · September 27, 2026  
**Subject:** Canonical Serialization and Interchange for Core FSF Geometry  
**Status:** COMPLETE — MATHEMATICAL / REPRESENTATION DESIGN SELECTED · AMENDED FOR SURVEY DOMAIN CAPACITY CORRECTION  
**Original Decision:** Day #123 · September 27, 2026  
**Current Amendment:** Day #126 · September 30, 2026  
**Adoption Standing:** Selected for Specification development; not yet a formally adopted FSF Specification rule.

---

## 1. Decision

The Foundational Survey Fabric SHALL use one primary deterministic machine-readable serialization for its current canonical geometry core:

> **FSF Canonical JSON 1.0**

Working identifier:

```text
FSF-CJSON-1.0
```

FSF-CJSON-1.0 is a deliberately constrained JSON profile.

It serializes:

- CRPC scalar values;
- Points;
- Segments;
- Simple Closed Polygonal Extents (SCPEs);
- the canonical Survey Domain;
- future compatible core geometry objects.

The encoding SHALL preserve exact mathematical meaning without floating-point numbers, implementation-specific formatting, or ambiguous equivalent byte sequences.

> **Day #126 Amendment — Survey Domain Serialization Correction**  
> The original decision serialized the Survey Domain using the working ±1,000,000 Pang half-span inherited from FMD-04. Subsequent reconciliation determined that the numerical half-span lacked a source-derived capacity criterion. This decision is therefore amended so that **FSF-CJSON-1.0 preserves the Survey Domain structure without selecting the unresolved numerical capacity**. The candidate Domain remains a closed axis-aligned square centered at `(0,0)` and is represented parametrically by exact positive half-span `H`. Concrete canonical numerical Domain serialization cannot be final until FMD-04B selects `H`.

---

## 2. Canonical Bytes

The canonical byte representation SHALL be:

```text
UTF-8
```

with:

```text
no byte-order mark
no insignificant whitespace
no comments
no trailing newline requirement
```

The canonical byte stream is exactly the UTF-8 encoding of the canonical compact JSON text.

---

## 3. JSON Numbers Prohibited

JSON numeric literals SHALL NOT be used for canonical coordinate or measurement values.

For example, these are prohibited:

```json
{"x":0.5}
```

```json
{"x":1000000}
```

The reason is foundational exactness.

Canonical mathematics must not depend upon:

- floating-point parser behavior;
- implementation number limits;
- exponent normalization;
- loss of arbitrary-size integer precision.

All exact numeric components SHALL therefore be represented as strings.

---

## 4. Canonical Integer String

A canonical integer string SHALL use:

```text
0
```

or:

```text
-?[1-9][0-9]*
```

Therefore:

```text
"0"       valid
"7"       valid
"-7"      valid
"1000000" valid
```

and:

```text
"+7"      invalid
"007"     invalid
"-0"      invalid
"1e6"     invalid
" 7 "     invalid
```

---

## 5. CRPC Serialization

A normalized Canonical Rational Pang Coordinate:

```text
n/d
```

SHALL serialize as:

```json
{"d":"<positive-denominator>","n":"<signed-numerator>"}
```

with object keys in canonical key order.

Example:

```json
{"d":"2","n":"1"}
```

means:

```text
1/2 Pang
```

Canonical zero:

```json
{"d":"1","n":"0"}
```

Canonical integer `15`:

```json
{"d":"1","n":"15"}
```

The serialized value SHALL already satisfy CRPC normalization:

```text
d > 0
gcd(|n|,d) = 1
0 = 0/1
```

---

## 6. Why Numerator and Denominator Are Separate

The rational value is not serialized as a single free-form string such as:

```text
"1/2"
```

because separate fields give the validator an unambiguous structural distinction between:

- numerator;
- denominator.

This improves:

- validation;
- normalization;
- independent implementation;
- future schema evolution;
- avoidance of alternate textual fraction grammars.

---

## 7. Point Serialization

A canonical Point SHALL serialize as:

```json
{
  "type":"fsf.point",
  "x":{"d":"1","n":"3"},
  "y":{"d":"2","n":"-1"}
}
```

Canonical compact form:

```json
{"type":"fsf.point","x":{"d":"1","n":"3"},"y":{"d":"2","n":"-1"}}
```

The mathematical meaning is:

```text
(3 Pang, -1/2 Pang)
```

---

## 8. Segment Serialization

A canonical standalone Segment SHALL serialize as:

```json
{
  "a":{...Point...},
  "b":{...Point...},
  "type":"fsf.segment"
}
```

Canonical endpoint order SHALL already satisfy Formal Mathematical Decision 07:

```text
a <lex b
```

Canonical compact example:

```json
{"a":{"type":"fsf.point","x":{"d":"1","n":"0"},"y":{"d":"1","n":"0"}},"b":{"type":"fsf.point","x":{"d":"1","n":"4"},"y":{"d":"1","n":"0"}},"type":"fsf.segment"}
```

---

## 9. SCPE Serialization

A canonical Simple Closed Polygonal Extent SHALL serialize as:

```json
{
  "type":"fsf.scpe",
  "vertices":[
    {...Point...},
    {...Point...},
    {...Point...}
  ]
}
```

The `vertices` array SHALL already be normalized so that:

- no repeated closure vertex is stored;
- traversal is counterclockwise;
- the lexicographically least vertex is first;
- no exact redundant collinear vertex remains.

Example:

```json
{"type":"fsf.scpe","vertices":[{"type":"fsf.point","x":{"d":"1","n":"0"},"y":{"d":"1","n":"0"}},{"type":"fsf.point","x":{"d":"1","n":"4"},"y":{"d":"1","n":"0"}},{"type":"fsf.point","x":{"d":"1","n":"4"},"y":{"d":"1","n":"4"}},{"type":"fsf.point","x":{"d":"1","n":"0"},"y":{"d":"1","n":"4"}}]}
```

---

## 10. Survey Domain Serialization

The candidate Survey Domain is parameterized as:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

where:

```text
H > 0
H is an exact CRPC value
```

The canonical Survey Domain object SHALL therefore preserve the exact selected half-span once FMD-04B resolves `H`.

Candidate structural form:

```json
{
  "format":"FSF-CJSON-1.0",
  "half_span":{"d":"<positive-denominator>","n":"<positive-numerator>"},
  "type":"fsf.survey-domain"
}
```

Canonical compact structural form:

```json
{"format":"FSF-CJSON-1.0","half_span":{"d":"<positive-denominator>","n":"<positive-numerator>"},"type":"fsf.survey-domain"}
```

The `half_span` value is semantically authoritative only after the governing Specification selects the numerical value of `H`.

Until that selection occurs, this object shape is a **candidate serialization structure**, not a final canonical numerical Domain fixture.

The Survey Domain remains distinct from The World and does not imply World membership.

---

## 11. Top-Level Geometry Package

A canonical standalone FSF geometry package SHALL use:

```json
{
  "format":"FSF-CJSON-1.0",
  "geometry":{...},
  "type":"fsf.geometry-package"
}
```

Example:

```json
{"format":"FSF-CJSON-1.0","geometry":{"type":"fsf.point","x":{"d":"1","n":"0"},"y":{"d":"1","n":"0"}},"type":"fsf.geometry-package"}
```

The `format` identifier belongs at the package level rather than being repeated inside every nested primitive.

---

## 12. Type Identifiers

Current canonical type identifiers are:

```text
fsf.point
fsf.segment
fsf.scpe
fsf.survey-domain
fsf.geometry-package
```

Type identifiers SHALL be lowercase ASCII.

They are protocol identifiers, not user-facing labels.

---

## 13. Canonical Object Key Ordering

Object keys SHALL be emitted in ascending lexicographic Unicode code-point order.

Because all currently defined FSF keys are ASCII, this produces straightforward deterministic ordering.

Examples:

For CRPC:

```text
d
n
```

For Point:

```text
type
x
y
```

For Survey Domain:

```text
format
half_span
type
```

No implementation may preserve arbitrary source key order when producing canonical output.

---

## 14. Array Ordering

Arrays SHALL preserve semantic order.

Therefore:

- SCPE vertex arrays preserve canonical boundary traversal;
- future ordered lists preserve their defined mathematical sequence.

Array elements SHALL NOT be sorted unless the governing object definition explicitly requires sorting.

---

## 15. Duplicate Keys

Duplicate JSON object keys are invalid.

For example:

```json
{"type":"fsf.point","x":...,"x":...,"y":...}
```

SHALL fail validation.

A parser that silently accepts the last duplicate value is nonconforming for canonical input validation.

---

## 16. Unknown Fields

Unknown fields are invalid in a canonical object unless the governing FSF-CJSON version explicitly permits them.

This creates a closed canonical vocabulary.

Extensions SHALL require:

- a later governed format version;
- or a separately defined extension object explicitly allowed by the Specification.

Silent extension fields are prohibited.

---

## 17. Whitespace

Canonical output SHALL contain no insignificant whitespace.

Thus:

```json
{"d":"2","n":"1"}
```

is canonical.

This:

```json
{ "d": "2", "n": "1" }
```

may be parseable as an interchange input if permitted by an implementation, but it is not canonical output.

Canonicalization SHALL remove insignificant whitespace.

---

## 18. String Normalization

All JSON strings SHALL be valid Unicode and SHALL be normalized to:

```text
NFC
```

before canonical serialization.

Current core FSF identifiers are ASCII and are therefore already NFC-stable.

---

## 19. String Escaping

Canonical strings SHALL:

- use JSON double quotes;
- escape characters required by JSON;
- use the shortest valid JSON escape form for required escapes;
- avoid optional Unicode escape substitution for ordinary printable characters.

Thus printable ASCII identifiers remain literal.

Equivalent strings must not produce multiple canonical byte representations merely because one implementation prefers `\u` escapes.

---

## 20. Boolean and Null

JSON boolean and null values are not currently required by the core geometry objects defined in this decision.

They SHALL NOT appear unless a later FSF-CJSON object definition explicitly introduces them.

---

## 21. Canonical Validation Order

A conforming validator SHALL conceptually perform:

```text
1. Decode UTF-8.
2. Parse JSON with duplicate-key rejection.
3. Validate permitted object structure.
4. Validate canonical integer strings.
5. Validate and normalize CRPC values.
6. Validate primitive geometry.
7. Normalize geometry under Decision 07.
8. Emit canonical key ordering and compact JSON.
9. Encode canonical UTF-8 bytes.
```

An implementation MAY optimize this process provided the final result is identical.

---

## 22. Canonicalization vs Validation

A valid but noncanonical interchange representation MAY be accepted by tooling if the governing application permits it.

For example:

- extra whitespace;
- reverse Segment endpoint order;
- clockwise SCPE traversal;
- shifted SCPE starting vertex.

However, such input is not canonical until it is:

1. validated;
2. mathematically normalized;
3. serialized under FSF-CJSON-1.0.

Invalid geometry or invalid numeric meaning SHALL NOT be repaired merely through serialization canonicalization.

---

## 23. Canonical Byte Equality

For supported canonical objects:

> **same normalized FSF meaning SHALL produce identical FSF-CJSON canonical bytes.**

Therefore independent conforming implementations serializing the same normalized object must produce byte-for-byte identical output.

This enables stable:

- hashing;
- signatures;
- archival comparison;
- regression testing;
- cross-implementation verification.

---

## 24. No Hidden Registry

An FSF-CJSON geometry object SHALL contain sufficient information to interpret its mathematical geometry under the governing Specification.

The object shall not require an opaque database record merely to know what coordinates or geometry it denotes.

Governance determines which Specification version is authoritative.

The Specification determines the meaning.

---

## 25. Format Versioning

The serialization format identifier is:

```text
FSF-CJSON-1.0
```

A future incompatible serialization change requires a new format identifier.

A compatible future serialization change MAY add a governed alternate representation, field, wrapper, or transport mechanism only if exact canonical correspondence to the previously established mathematical object remains demonstrable.

A new format version SHALL NOT move, renumber, reinterpret, or otherwise change the meaning of an already-established canonical place merely because its representation changes.

Where two governed representations are declared compatible, there SHALL exist a lossless deterministic correspondence to the same normalized mathematical object.

This preserves:

> **version the standard, not the place.**

---

## 26. Specification Identity

The final production profile MAY include an explicit governing FSF Specification identifier in top-level packages.

That field is deferred until the Specification identity/version scheme is formally selected.

This serialization decision does not fabricate a Specification identifier prematurely.

---

## 27. Lossless Alternate Representations

Other lossless representations MAY exist for:

- human-readable documentation;
- binary archival packaging;
- API transport;
- debugging.

They are not canonical FSF serialization unless separately governed.

They must map losslessly and deterministically to the same normalized mathematical object, preserving canonical correspondence across representations.

FSF-CJSON-1.0 is the primary canonical machine-readable representation selected here.

---

## 28. Human-Readable Rendering

Human-readable text such as:

```text
Point (3, -1/2) Pang
```

may be generated from canonical FSF-CJSON.

Such prose is derived.

It is not a second mathematical source of truth.

---

## 29. Hashing Rule

A content-integrity hash intended to identify a canonical FSF object SHALL be computed over:

```text
canonical UTF-8 FSF-CJSON bytes
```

after mathematical normalization.

Conceptually:

```text
geometry
→ normalize
→ serialize FSF-CJSON
→ UTF-8 bytes
→ hash
```

The hash algorithm itself is a separate governance / integrity decision and is not selected here.

---

## 30. Spatial Ground Interoperability

Spatial Ground's SG-CJSON representation may reference one canonical FSF geometry object.

The correct boundary is:

```text
FSF-CJSON defines canonical Survey geometry.
SG-CJSON defines canonical Ground membership expression.
```

Spatial Ground SHALL NOT copy an FSF polygon into an independently authoritative Ground geometry grammar if it can reference the canonical FSF geometry object.

This preserves one owner for Survey mathematics.

---

## 31. Production World Geometry

The final BitPangea World SCPE will therefore have a pipeline once the required Survey Domain numerical capacity is available:

```text
preferred normalized design silhouette
→ exact Survey placement
→ valid FSF SCPE
→ FSF normalization
→ FSF-CJSON-1.0
→ canonical bytes
→ production FSF region identity / integrity record
→ SG-CJSON Ground Definition reference
```

This is the intended production chain.

---

## 32. Canonical Example — Origin Point

Mathematical point:

```text
(0,0)
```

Canonical FSF-CJSON:

```json
{"type":"fsf.point","x":{"d":"1","n":"0"},"y":{"d":"1","n":"0"}}
```

---

## 33. Canonical Example — Fractional Point

Mathematical point:

```text
(-3/2, 7/4)
```

Canonical FSF-CJSON:

```json
{"type":"fsf.point","x":{"d":"2","n":"-3"},"y":{"d":"4","n":"7"}}
```

---

## 34. Canonical Example — Square SCPE

Mathematical cycle:

```text
(0,0)
(4,0)
(4,4)
(0,4)
```

Canonical FSF-CJSON:

```json
{"type":"fsf.scpe","vertices":[{"type":"fsf.point","x":{"d":"1","n":"0"},"y":{"d":"1","n":"0"}},{"type":"fsf.point","x":{"d":"1","n":"4"},"y":{"d":"1","n":"0"}},{"type":"fsf.point","x":{"d":"1","n":"4"},"y":{"d":"1","n":"4"}},{"type":"fsf.point","x":{"d":"1","n":"0"},"y":{"d":"1","n":"4"}}]}
```

---

## 35. Invalid Serialization Examples

Invalid:

```json
{"type":"fsf.point","x":0.5,"y":1}
```

Reason:

```text
JSON numbers prohibited for canonical coordinate values
```

Invalid:

```json
{"type":"fsf.point","x":{"d":"0","n":"1"},"y":{"d":"1","n":"0"}}
```

Reason:

```text
zero denominator
```

Invalid:

```json
{"type":"fsf.point","x":{"d":"2","n":"2"},"y":{"d":"1","n":"0"}}
```

Reason:

```text
CRPC value not reduced
```

Invalid canonical output:

```json
{ "type": "fsf.point", "x": {"d":"1","n":"0"}, "y": {"d":"1","n":"0"} }
```

Reason:

```text
noncanonical whitespace
```

---

## 36. Deterministic Parsing Requirement

Conforming canonical parsers SHALL reject:

- malformed UTF-8;
- malformed JSON;
- duplicate keys;
- invalid integer strings;
- unsupported type identifiers;
- unknown fields;
- invalid CRPC values;
- invalid primitive geometry.

A parser must not silently reinterpret invalid input into a different valid canonical object.

---

## 37. Independent Implementation Requirement

Two conforming implementations given the same normalized FSF object SHALL emit exactly identical canonical byte sequences.

Conformance testing SHALL compare canonical bytes directly.

Semantic equality without byte equality is insufficient for a claimed canonical serializer.

---

## 38. Required Reference Vector Classes

Future FSF serialization vectors SHALL include:

### CRPC

- zero
- positive integer
- negative integer
- proper fraction
- reducible invalid fraction
- negative denominator invalid
- leading-zero invalid integer string

### Point

- origin
- fractional coordinates
- parameterized Domain boundary coordinates
- final concrete numerical Domain boundary coordinates only after `H` is selected

### Segment

- canonical endpoint order
- reversed input normalized to canonical order

### SCPE

- canonical polygon
- shifted start
- reversed traversal
- redundant collinear vertex
- canonical-byte equality after normalization

### JSON Structure

- duplicate keys
- unknown fields
- JSON numbers
- malformed UTF-8
- non-NFC string input
- whitespace normalization
- deterministic key order

---

## 39. Rejected Alternatives

| Candidate | Disposition | Primary reason |
|---|---|---|
| Constrained canonical JSON | **SELECTED** | inspectable, deterministic, language-neutral |
| Native JSON numbers | **REJECTED** | exactness / integer-range ambiguity |
| Free-form fraction strings | **REJECTED AS PRIMARY SCALAR FORM** | weaker structural validation |
| Implementation-defined JSON key order | **REJECTED** | non-deterministic bytes |
| Binary-only canonical format | **REJECTED** | unnecessary opacity at foundational layer |
| XML canonical form | **REJECTED** | greater representational complexity |
| CSV / ad hoc text | **REJECTED** | insufficient typed structure |
| Multiple co-equal canonical serializers | **REJECTED FOR 1.0** | unnecessary canonical ambiguity |

---

## 40. Requirements Compatibility Judgment

FSF-CJSON-1.0 satisfies the established FSF requirements for:

- deterministic serialization;
- exact canonical meaning;
- finite parseability;
- independent implementation;
- inspectability;
- hidden-state independence;
- durable representation;
- canonical normalization;
- governed interchange.

It remains compatible with the broader principle that future lossless representations may exist without redefining canonical mathematical meaning. A later governed representation or format version may change encoding structure, but it SHALL preserve canonical mathematical correspondence to every previously established place and supported geometry unless an explicitly incompatible Specification transition says otherwise.

No Requirement must be changed.

---

## 41. Gate Effect

Spatial Ground blocker:

```text
FSF-B09 — Canonical Serialization
```

is now:

```text
MATHEMATICAL / REPRESENTATION DESIGN — RESOLVED
PRIMARY FORMAT — FSF-CJSON-1.0
CANONICAL BYTES — UTF-8 COMPACT JSON
JSON NUMBERS FOR EXACT VALUES — PROHIBITED
DUPLICATE KEYS — INVALID
UNKNOWN FIELDS — INVALID
SPECIFICATION INCORPORATION — PENDING
SCHEMA / VALIDATOR — PENDING
SURVEY DOMAIN NUMERICAL FIXTURE — PENDING FMD-04B
CONFORMANCE / REFERENCE VECTORS — PENDING
FORMAL ADOPTION — PENDING
```

All Class A Spatial Ground blockers identified in the Gate B record now have a selected mathematical/design solution, subject to final Specification integration and proof.

---

## 42. Next Formal Mathematical Decision

The next decision SHOULD address:

> **Exact Precision and Refinement Semantics**

This is the remaining major Class B dependency identified by Spatial Ground.

It must determine whether canonical reference refinement means:

- exact coordinate extension;
- hierarchical spatial subdivision;
- another self-resolving structure;
- or a combination with one authoritative semantic relationship.

The decision must ensure that a coarse reference never ambiguously means:

- an uncertainty area;
- a parent tile;
- an extent;
- a rounded point

unless the Specification explicitly says so.

---

## 43. Canonical Correspondence and Compatibility Continuity

FSF-CJSON versioning SHALL preserve the distinction between:

```text
mathematical identity
representation identity
format identity
Specification identity
```

A canonical Point, Segment, SCPE, or other supported mathematical object is not reidentified merely because its encoding version changes.

For any pair of governed representations declared compatible:

```text
representation A
→ normalize / interpret
→ canonical mathematical object
← normalize / interpret
← representation B
```

the correspondence SHALL be:

```text
lossless
deterministic
meaning-preserving
non-migrating
independently reproducible
```

Forward or backward compatibility SHALL NOT be claimed merely because two formats can be parsed by the same implementation.

Compatibility requires demonstrable preservation of the same canonical mathematical object.

If a later format cannot preserve that correspondence exactly, the transition is incompatible and requires an explicit new version / migration rule rather than silent reinterpretation.

This decision therefore preserves the lineage rule:

> **Representations may evolve. Canonical place may not drift.**

---

## 44. Standing

**PRIMARY CANONICAL SERIALIZATION — FSF-CJSON-1.0**

**ENCODING — UTF-8**

**CANONICAL WHITESPACE — NONE**

**EXACT NUMERIC COMPONENTS — STRINGS**

**CRPC — STRUCTURED `{d,n}` OBJECT**

**DUPLICATE KEYS — INVALID**

**UNKNOWN FIELDS — INVALID**

**OBJECT KEY ORDER — LEXICOGRAPHIC**

**ARRAY ORDER — SEMANTIC**

**CANONICAL BYTE IDENTITY — REQUIRED**

**FSF-B09 — DESIGN RESOLVED**

**CLASS A CAPACITY-INDEPENDENT SPATIAL GROUND BLOCKERS — DESIGN-LEVEL SOLUTIONS NOW SELECTED**

**PRECISION / REFINEMENT SEMANTICS — NEXT**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 45. Governing Closing Statement

> **Canonical geometry is not merely exact in meaning; it must also settle into exact bytes. FSF-CJSON gives every supported Survey object one inspectable, deterministic machine representation without allowing parser behavior, floating point, or formatting preference to become spatial truth.**
