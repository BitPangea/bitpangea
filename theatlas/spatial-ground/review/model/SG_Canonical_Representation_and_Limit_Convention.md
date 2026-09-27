# Spatial Ground — Canonical Representation and Limit Convention

**BitPangea · The Atlas · Spatial Ground**  
**Record Type:** Specification Design Decision  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** COMPLETE — REPRESENTATION AND LIMIT CONVENTION SELECTED  
**Formal Model:** Canonical Membership Predicate Model (CMPM)  
**Canonical Representation:** Spatial Ground Canonical JSON — **SG-CJSON 1.0**  
**Limit Convention:** **Closed World-Space Convention**  
**Gate Effect:** Completes the representation/limit selection prerequisite; does not itself open Gate B  
**Canonical Instance Effect:** None. This record does not select the actual World-space instance.

---

## 1. Decision

Spatial Ground SHALL use a single canonical machine-readable Ground Definition artifact encoded as:

> **Spatial Ground Canonical JSON — SG-CJSON 1.0**

The artifact SHALL contain a finite declarative set-expression tree whose leaves reference canonical Foundational Survey Fabric spatial expressions and whose Ground-owned semantics are limited to exact membership composition.

The canonical World-space instance SHALL use the:

> **Closed World-Space Convention**

Therefore, for the adopted World-space set `W_D`:

```text
∂W_D ⊆ W_D
```

Every canonical Survey location lying exactly on the canonical Ground limit is:

```text
WORLD
```

unless the point is not a valid FSF location in the first place.

The canonical limit itself remains derived:

```text
L_D = ∂W_D
```

under the governing FSF topology and boundary semantics.

The limit is not an independently authoritative Ground object.

---

## 2. Why SG-CJSON Was Selected

The representation must be:

- machine-exact;
- deterministic;
- finitely parseable;
- easy to preserve;
- implementation-neutral;
- independently reproducible;
- human-inspectable without making prose the instance authority;
- canonicalizable for hashing and artifact identity;
- free from floating-point ambiguity;
- capable of carrying explicit FSF dependency lineage;
- capable of expressing irregular World-space without enumerating every Survey location.

JSON was selected over YAML, ad hoc text, binary-only encodings, database state, or implementation code because it is structurally simple, durable, widely implementable, and amenable to deterministic canonicalization.

SG-CJSON does **not** make ordinary JSON semantics canonical.

It defines a strict Spatial Ground profile.

---

## 3. Governing Canon Relationship

The governing relation is:

> **human-governed, machine-exact**

The semantic rules remain governed by the adopted human-readable Spatial Ground Requirements and Specification.

The exact canonical World-space instance is expressed by one machine-readable SG-CJSON artifact identified by the future Adoption Act.

No rule may live only in code.

No implementation may redefine the SG-CJSON meaning.

---

## 4. SG-CJSON 1.0 Document Shape

A canonical Ground Definition SHALL have exactly the following top-level semantic fields:

```json
{
  "type": "bitpangea.spatial-ground.definition",
  "format": "SG-CJSON-1.0",
  "model": "CMPM-1.0",
  "specification": "SG-SPEC-1.0",
  "fsf": {
    "specification": "<governing FSF specification identity>",
    "lineage": "<declared compatible FSF lineage>"
  },
  "limit_convention": "closed-world-space",
  "expression": {
    "...": "..."
  }
}
```

Additional top-level semantic fields are invalid unless introduced by a later adopted compatible Specification.

Metadata not required to evaluate membership SHALL remain outside the canonical Ground Definition or within a separately governed non-semantic manifest.

---

## 5. Canonical Data Types

SG-CJSON 1.0 permits only:

- JSON objects;
- JSON arrays;
- JSON strings;
- JSON booleans where explicitly allowed by the Specification;
- JSON null only where explicitly allowed by the Specification.

### Prohibited

Canonical Ground Definition artifacts SHALL NOT use JSON numeric values.

This prohibition avoids:

- floating-point ambiguity;
- implementation-dependent number parsing;
- loss of exactness;
- accidental coupling to host-language number semantics.

Any exact numeric value required by an FSF expression SHALL be carried through the canonical FSF representation defined by FSF, not invented by Ground.

---

## 6. String Rules

Every SG-CJSON string SHALL be:

- valid Unicode;
- normalized to Unicode NFC before canonical serialization;
- semantically case-sensitive unless the Specification explicitly defines a field otherwise;
- free of implementation-specific escape conventions after canonicalization.

Line endings inside strings, where permitted, SHALL be normalized to `LF`.

---

## 7. Object Rules

Canonical SG-CJSON objects SHALL satisfy all of the following:

1. duplicate member names are invalid;
2. member names are case-sensitive;
3. unknown semantic fields are invalid unless expressly permitted;
4. canonical serialization sorts object member names lexicographically by Unicode code point after NFC normalization;
5. insignificant whitespace is removed in canonical bytes.

---

## 8. Array Rules

Array order is semantic only where the governing operator is ordered.

For commutative operators such as `union` and `intersection`, canonical normalization SHALL:

1. normalize each child expression;
2. flatten nested instances of the same operator;
3. remove exact duplicate child expressions;
4. sort child expressions by their canonical SG-CJSON byte sequence.

This makes equivalent commutative expressions serialize identically where their FSF leaves are themselves canonical.

For ordered operators such as `difference`, operand order is semantic and SHALL be preserved.

---

## 9. Ground Expression Language

The Ground Definition SHALL be declarative.

The primary expression operators are:

- `fsf`
- `union`
- `intersection`
- `difference`

No other operator is part of SG-CJSON 1.0 unless added by the adopted Spatial Ground Specification.

---

## 10. `fsf` Leaf

An `fsf` leaf references one canonical FSF spatial-set expression.

Form:

```json
{
  "op": "fsf",
  "value": "<canonical FSF spatial expression>"
}
```

Ground does not define the internal mathematics of `value`.

The FSF expression SHALL already be valid and canonical under the governing FSF specification or compatible lineage.

The semantics are:

```text
Eval(fsf(E), x) = FSF_CONTAINS(E, x)
```

where `FSF_CONTAINS` is owned by FSF.

If FSF cannot deterministically establish the meaning of `E`, the Ground Definition is invalid.

---

## 11. `union`

Form:

```json
{
  "op": "union",
  "args": [
    <expression>,
    <expression>
  ]
}
```

Requirements:

- at least two child expressions;
- children are semantically unordered;
- canonical normalization sorts and deduplicates children.

Semantics:

```text
Eval(union(A1 ... An), x)
=
Eval(A1,x) OR ... OR Eval(An,x)
```

---

## 12. `intersection`

Form:

```json
{
  "op": "intersection",
  "args": [
    <expression>,
    <expression>
  ]
}
```

Requirements:

- at least two child expressions;
- children are semantically unordered;
- canonical normalization sorts and deduplicates children.

Semantics:

```text
Eval(intersection(A1 ... An), x)
=
Eval(A1,x) AND ... AND Eval(An,x)
```

---

## 13. `difference`

Form:

```json
{
  "op": "difference",
  "base": <expression>,
  "subtract": <expression>
}
```

Semantics:

```text
Eval(difference(A,B), x)
=
Eval(A,x) AND NOT Eval(B,x)
```

`difference` is ordered.

`difference(A,B)` is not equivalent to `difference(B,A)`.

This operator permits exact holes or exclusions without creating a second canonical exclusion authority.

The resulting membership remains one predicate.

---

## 14. Operators Not Selected

SG-CJSON 1.0 does not include:

- procedural `include` / `exclude` event streams;
- priority rules;
- record-order override;
- "latest wins";
- fuzzy thresholds;
- approximate buffers;
- user-defined functions;
- arbitrary executable code;
- script expressions;
- database queries;
- network calls;
- time-dependent predicates;
- ownership predicates;
- higher-layer semantic predicates.

The representation is intentionally small.

---

## 15. Membership Evaluation

Let `D.expression` be the root SG-CJSON expression.

For any valid canonical Survey location `x`:

```text
M_D(x) =
  WORLD      if Eval(D.expression, x) = true
  NON_WORLD  if Eval(D.expression, x) = false
```

If `x` is not valid under FSF, the evaluator returns:

```text
INVALID_INPUT
```

`INVALID_INPUT` is not a membership value.

---

## 16. Canonicalization

A conforming SG-CJSON canonicalizer SHALL perform, in order:

1. parse the JSON;
2. reject duplicate keys;
3. reject numbers;
4. reject unknown fields or invalid structures;
5. normalize strings to NFC;
6. recursively normalize the expression tree;
7. flatten same-kind commutative nodes;
8. remove exact duplicate commutative children;
9. sort commutative children by canonical bytes;
10. serialize objects in canonical member order;
11. emit UTF-8 without BOM;
12. emit no insignificant whitespace;
13. terminate with no required trailing newline.

The resulting UTF-8 byte sequence is the **canonical artifact byte form**.

Artifact hashes, if used, SHALL be computed over those bytes.

---

## 17. Semantic Identity

Byte identity of canonicalized SG-CJSON artifacts is sufficient to prove artifact identity.

It is not the only possible proof of semantic equivalence.

Two different valid SG-CJSON definitions MAY induce identical membership.

Semantic equivalence remains:

```text
D1 ≡SG D2
iff
∀x ∈ S : M_D1(x) = M_D2(x)
```

The future Conformance framework SHALL distinguish:

- canonical byte identity;
- structural normalized identity;
- semantic equivalence.

---

## 18. Why the Closed World-Space Convention Was Selected

The canonical limit requires an exact answer for locations lying precisely on the membership transition.

Three broad conventions were considered:

1. **Open World-space:** limit points are NON_WORLD.
2. **Closed World-space:** limit points are WORLD.
3. **Mixed / expression-dependent convention:** inclusion varies by component or clause.

The third option was rejected because it permits hidden boundary semantics and unnecessary inconsistency.

The open convention was rejected because it would make the exact limiting line belong outside The World even while it is the mathematical closure of World-space.

The closed convention was selected because it provides the strongest combination of:

- exactness;
- intuitive territorial completeness;
- deterministic limit membership;
- stable composition;
- simple reconstruction;
- compatibility with a finite complete World;
- no need for a third boundary state.

Therefore:

> **The canonical limit belongs to World-space.**

---

## 19. Outer Limit and Hole Limits

The Closed World-Space Convention applies uniformly to every component of the topological boundary of `W_D`.

If a canonical World-space instance contains an internal non-World hole:

- points strictly inside the hole are `NON_WORLD`;
- the exact hole boundary belongs to `WORLD`.

Thus the rule remains globally consistent:

```text
∂W_D ⊆ W_D
```

No separate "boundary" membership state exists.

---

## 20. Limit Definition

The canonical Ground limit is:

```text
L_D = ∂W_D
```

where `∂` is the exact boundary operator supplied by the governing FSF topology.

Spatial Ground does not define `∂`.

The limit SHALL be derived from the membership set.

A stored or rendered boundary geometry is derivative unless it is merely a canonical serialization of the exact derived result under an FSF-governed form.

---

## 21. Limit Is Not Visual Form

The canonical limit is not required to coincide visually with:

- a rendered coastline;
- a stylized continent edge;
- a glow;
- a terrain transition;
- a Parcel boundary;
- an experience boundary.

A later World presentation MAY choose visual coincidence.

That is an upward design decision.

Ground remains exact even if the experience deliberately simplifies or stylizes the visible edge.

---

## 22. Limit Contact

For any valid canonical Survey location `x` for which FSF determines:

```text
x ∈ ∂W_D
```

Spatial Ground SHALL return:

```text
M_D(x) = WORLD
```

This is normative.

No implementation may use library-default point-in-polygon behavior or endpoint convention in place of this rule.

---

## 23. Set-Operation Boundary Semantics

All `union`, `intersection`, and `difference` operations SHALL use exact FSF set semantics.

The final membership set SHALL then be interpreted under the Closed World-Space Convention.

Ground SHALL NOT invent alternate epsilon, tolerance, raster, snapping, or approximate edge behavior.

---

## 24. Empty and Universal Expressions

SG-CJSON 1.0 intentionally defines no Ground-native `empty` or `all-survey-domain` literal.

Reason:

- canonical BitPangea World-space may not be empty;
- World-space may coincide with the Survey Domain, but it must not be defined merely as "the Survey Domain";
- explicit FSF spatial meaning should remain visible in the adopted instance.

Synthetic test fixtures MAY use special test-only constructs defined by Conformance, but such constructs SHALL NOT become canonical Ground Definition operators.

---

## 25. Refinement Rule

SG-CJSON expressions operate on canonical FSF meaning.

They SHALL NOT encode assumptions that:

- a coarse reference is an area;
- a coarse reference is a point with uncertainty;
- a coarse reference owns finer descendants;
- membership propagates by parent/child address inheritance.

If an `fsf` leaf relies on unresolved coarse/fine semantics, that leaf is not suitable for Gate B until FSF resolves the required meaning.

The Ground representation itself remains refinement-neutral.

---

## 26. Validation Conditions

An SG-CJSON Ground Definition is invalid if any of the following applies:

- malformed JSON;
- duplicate key;
- JSON number present;
- unknown field;
- unsupported operator;
- missing required top-level field;
- invalid FSF dependency identity;
- noncanonical or invalid FSF leaf;
- empty `union` or `intersection`;
- one-child `union` or `intersection`;
- malformed `difference`;
- recursive or cyclic external dependency;
- dependency on higher-layer semantics;
- dependency on runtime, network, time, ownership, or hidden state;
- inability to deterministically evaluate the expression.

---

## 27. Representation Example — Structural Only

The following is illustrative and is **not** the canonical BitPangea World-space instance:

```json
{
  "type": "bitpangea.spatial-ground.definition",
  "format": "SG-CJSON-1.0",
  "model": "CMPM-1.0",
  "specification": "SG-SPEC-1.0",
  "fsf": {
    "specification": "FSF-SPEC-<adopted>",
    "lineage": "FSF-<compatible-lineage>"
  },
  "limit_convention": "closed-world-space",
  "expression": {
    "op": "difference",
    "base": {
      "op": "fsf",
      "value": "<canonical-fsf-world-candidate-extent>"
    },
    "subtract": {
      "op": "fsf",
      "value": "<canonical-fsf-hole-extent>"
    }
  }
}
```

This example demonstrates structure only.

It does not make any actual World-space design choice.

---

## 28. Independent-Implementation Consequence

Two conforming implementations SHALL be able to:

1. parse the same SG-CJSON artifact;
2. canonicalize it to identical bytes;
3. resolve the same FSF leaves;
4. normalize the same expression tree;
5. evaluate the same `M_D(x)`;
6. classify limit points identically as WORLD.

This makes representation and limit behavior directly testable.

---

## 29. Conformance Consequence

The next Conformance framework SHALL include tests for:

- canonical SG-CJSON parsing;
- duplicate-key rejection;
- number rejection;
- Unicode normalization;
- canonical object ordering;
- commutative normalization;
- `difference` ordering;
- invalid operator rejection;
- FSF-leaf validity;
- WORLD membership;
- NON_WORLD membership;
- exact canonical-limit membership;
- inner-hole limit membership;
- invalid Survey input;
- hidden-state independence;
- cross-implementation canonical byte equality;
- cross-implementation membership equality.

---

## 30. Specification Integration

The Spatial Ground Specification SHALL be revised so that:

- **SG-CJSON 1.0** is the selected canonical machine-readable Ground Definition representation;
- the `fsf`, `union`, `intersection`, and `difference` operators are the initial Ground expression language;
- JSON numbers are prohibited;
- canonicalization rules are normative;
- **Closed World-Space** is the adopted Ground limit convention;
- `∂W_D ⊆ W_D` is normative;
- exact FSF set/boundary mathematics remain inherited rather than redefined.

---

## 31. Decision Rationale

This design was selected because it is the smallest representation that satisfies all of the following simultaneously:

- exact two-valued membership;
- compact finite expression;
- irregular World-space support;
- holes without a third membership state;
- no per-location enumeration requirement;
- deterministic canonical bytes;
- straightforward independent implementation;
- representation longevity;
- machine exactness;
- human inspectability;
- explicit FSF dependency;
- no parallel Ground geometry;
- one uniform limit rule.

It does not ask Spatial Ground to know more than Spatial Ground needs to know.

---

## 32. Standing

**FORMAL MEMBERSHIP MODEL — CMPM — COMPLETE**

**CANON-FORM POLICY — COMPLETE**

**CANONICAL REPRESENTATION — SG-CJSON 1.0 — SELECTED**

**EXPRESSION MODEL — DECLARATIVE FSF-REFERENCED SET EXPRESSION — SELECTED**

**LIMIT CONVENTION — CLOSED WORLD-SPACE — SELECTED**

**LIMIT MEMBERSHIP — WORLD**

**CANONICAL LIMIT — DERIVED AS `∂W_D` UNDER FSF**

**CANONICAL WORLD-SPACE INSTANCE — NOT YET SELECTED**

**NEXT — BUILD SPATIAL GROUND CONFORMANCE**

**GATE B — NOT YET OPEN**

---

## 33. Governing Closing Rules

> **Human-governed. Machine-exact.**

> **The instance is one canonical SG-CJSON artifact. The rules for reading it live in the adopted Specification.**

> **The limit belongs to The World, but the limit does not define The World independently of membership.**

> **One predicate. One artifact. One exact answer.**
