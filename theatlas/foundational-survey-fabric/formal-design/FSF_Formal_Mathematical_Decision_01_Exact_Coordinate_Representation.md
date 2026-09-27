# Foundational Survey Fabric — Formal Mathematical Decision 01

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #122 · September 26, 2026  
**Subject:** Exact Canonical Coordinate Scalar Representation  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED  
**Adoption Standing:** Selected for Specification development; not yet a formally adopted FSF Specification rule.

---

## 1. Decision

The Foundational Survey Fabric SHALL use **exact reduced rational Pang coordinates** as the canonical scalar representation for planar Survey positions.

A canonical coordinate scalar is therefore an exact rational multiple of one Pang:

```text
q Pang, where q ∈ ℚ
```

with finite normalized representation:

```text
q = n / d
n ∈ ℤ
d ∈ ℕ+
gcd(|n|, d) = 1
```

and with canonical zero:

```text
0 = 0 / 1
```

A planar Survey position will ultimately be expressed as an ordered pair of such exact coordinate scalars under the canonical frame:

```text
(x, y)
x, y ∈ ℚ Pang
```

The exact tuple syntax, axis names, serialization grammar, frame orientation, origin placement, and Domain limits remain separate formal decisions.

---

## 2. Name

The selected scalar domain is designated:

> **Canonical Rational Pang Coordinate**

Working abbreviation:

```text
CRPC
```

This abbreviation is a Specification drafting convenience, not a World term.

---

## 3. Why Rational Coordinates

The coordinate system must satisfy several permanent requirements simultaneously:

- exactness;
- finite representation;
- deterministic comparison;
- deterministic normalization;
- extensible precision;
- implementation independence;
- exact Pang agreement;
- no dependence on an unrestricted real-number continuum;
- suitability for exact planar geometry.

Reduced rational coordinates satisfy those obligations with unusually little machinery.

---

## 4. Why Not Floating Point

Binary or decimal floating-point values are rejected as canonical coordinate truth.

They may be used by renderers, caches, previews, or non-authoritative calculations, but they cannot define canonical place because:

- many values are approximation-dependent;
- equivalent mathematical values may have multiple implementation encodings;
- arithmetic may be rounding-order dependent;
- equality can become tolerance-dependent;
- canonical truth would become hardware or software sensitive.

Canonical Survey position must resolve exactly or fail validation.

---

## 5. Why Not Fixed Decimal Coordinates

A fixed decimal grid is rejected as the foundational coordinate model.

A fixed decimal scale would prematurely establish:

- one permanent maximum precision;
- one decimal subdivision policy;
- one privileged denominator family.

That conflicts with the requirement that canonical precision may extend without moving established place.

Finite decimals remain valid **representations of particular rational coordinates**, but decimality does not define the coordinate domain.

---

## 6. Why Not Dyadic Coordinates Alone

Dyadic rationals:

```text
n / 2^k
```

are attractive for implementation and recursive subdivision.

They are rejected as the complete canonical coordinate domain because exact planar geometry can naturally produce rational results whose denominator is not a power of two.

For example, exact line intersections can produce thirds, fifths, or other rational fractions even when the source geometry is simple.

Restricting canonical coordinates to dyadic values would either:

- force snapping;
- require unnecessary geometric restrictions; or
- push ordinary exact results outside the canonical coordinate domain.

The Requirements explicitly prohibit silent snapping.

Dyadic coordinates remain a valid subset of CRPC.

---

## 7. Why Not Arbitrary Real Numbers

The FSF does not require an unrestricted real-number continuum.

An arbitrary real coordinate may not possess a finite exact representation or terminating canonical algorithm.

That is incompatible with the requirements that canonical expressions remain:

- finite;
- parseable;
- normalizable;
- deterministically computable.

CRPC therefore defines a **representable exact spatial universe**, not every mathematically conceivable real-valued point.

---

## 8. Canonical Scalar Normalization

Every CRPC value SHALL normalize to exactly one pair:

```text
(n, d)
```

subject to:

```text
d > 0
gcd(|n|, d) = 1
```

Additional rules:

```text
0 -> 0/1
sign belongs only to n
+ sign is not semantically significant
leading zeroes are non-canonical representation detail
```

Examples:

```text
2/4      -> 1/2
-6/-9    -> 2/3
6/-9     -> -2/3
0/73     -> 0/1
15       -> 15/1
```

Normalization is exact and deterministic.

---

## 9. Equality

Two canonical coordinate scalars are equal if and only if their normalized rational values are equal.

For valid normalized CRPC values:

```text
n1/d1 = n2/d2
```

iff:

```text
n1 = n2
and
d1 = d2
```

Implementations MAY use exact cross multiplication before normalization:

```text
n1*d2 = n2*d1
```

provided arbitrary-precision integer arithmetic or an exactly equivalent method prevents overflow from changing truth.

---

## 10. Ordering

CRPC values possess exact total ordering.

For:

```text
a/b
c/d
```

with positive denominators:

```text
a/b < c/d
```

iff:

```text
a*d < c*b
```

This provides deterministic axis ordering without floating-point tolerance.

---

## 11. Canonical Arithmetic Closure

CRPC is closed under exact:

- addition;
- subtraction;
- multiplication;
- division by nonzero rational values.

Therefore the coordinate scalar domain naturally supports exact:

- translations;
- uniform rational scale;
- rational affine construction;
- line interpolation at rational parameters;
- many exact line and polygon intersection operations;
- polygon signed-area calculations.

This is particularly suitable for Spatial Ground's selected FEBCM region.

---

## 12. Pang Semantics

A coordinate scalar is dimensionally expressed in **Pangs**.

Examples conceptually include:

```text
3 Pang
1/2 Pang
-17/64 Pang
125/3 Pang
```

The rational number determines magnitude and sign.

Pang remains the permanent canonical linear unit.

CRPC does not create named sub-Pang units.

---

## 13. Sub-Pang Precision

CRPC provides sub-Pang precision through exact fractional extension.

Examples:

```text
1/10 Pang
1/1000 Pang
1/2^40 Pang
37/125000 Pang
```

No predeclared sequence of named subdivisions is necessary.

Precision may deepen by using a rational value with the exact denominator required by the canonical geometry.

Each individual coordinate remains finitely represented.

---

## 14. No Precision Migration

An existing coordinate does not move when deeper precision becomes available.

For example:

```text
1/2 Pang
```

remains exactly:

```text
1/2 Pang
```

regardless of whether later expressions use denominators of:

```text
10
1000000
2^100
or any other finite positive integer.
```

Precision extension increases what can be expressed.

It does not revise already-established place.

---

## 15. Canonical Precision vs Storage Precision vs Rendering Precision

These remain distinct.

### Canonical Precision

The exact rational value that defines authoritative place.

### Storage Precision

An implementation's internal strategy for storing the arbitrary-precision numerator and denominator.

### Rendering Precision

The finite screen, image, GPU, or display approximation used to visualize the location.

Neither storage convenience nor rendering resolution changes canonical position.

---

## 16. Integer Requirements

A conforming canonical implementation must support integers large enough to preserve any valid CRPC value accepted under the eventual Specification limits.

The mathematical model SHALL NOT depend on fixed 32-bit, 64-bit, or machine-word integer overflow behavior.

The eventual Specification may establish controlled complexity limits for canonical inputs.

Those limits must constrain valid expression size without changing the mathematical meaning of accepted values.

---

## 17. Finiteness

CRPC is not an unrestricted infinite textual object.

Every valid scalar must contain:

- one finite integer numerator;
- one finite positive integer denominator.

Therefore every valid coordinate is finitely parseable.

The set of possible CRPC values is mathematically infinite but **countable**, while every individual canonical value is finite.

This satisfies the distinction between:

- an extensible exact coordinate system; and
- an unrestricted real continuum.

---

## 18. Invalid Scalar Conditions

A coordinate scalar is invalid if any of the following applies:

- denominator is zero;
- numerator or denominator is not a finite integer expression;
- value is approximate rather than exact;
- value requires hidden implementation state;
- value cannot be deterministically normalized;
- value exceeds future governed canonical complexity limits;
- syntax is malformed under the eventual serialization grammar.

Invalidity is not a coordinate value.

---

## 19. Exact Geometry Consequences

CRPC establishes the coordinate domain.

It does **not** by itself settle every geometric result type.

Some exact derived measurements may not be rational.

For example, Euclidean distance between rational-coordinate points may involve:

```text
sqrt(r)
```

for rational `r`.

Therefore:

> **coordinate scalar representation and exact derived-measure scalar representation are separate formal questions.**

This decision does not silently force distance, angle, or transformation outputs into rational approximation.

---

## 20. Exact Transformation Consequences

Translation by CRPC values preserves CRPC coordinates.

Uniform scaling by a nonzero rational factor preserves CRPC coordinates.

Arbitrary rotations can generate irrational coordinate values and therefore SHALL NOT automatically redefine canonical positions.

This aligns with the existing architectural rule that transformed views are derived views rather than alternate canonical truths.

A later FSF decision must define any exact transformation-result representation required beyond rational-coordinate canonical space.

---

## 21. Spatial Ground Compatibility

Spatial Ground's selected production placement policy requires:

```text
x_FSF = tx + s*x_design
y_FSF = ty + s*y_design
```

where `s`, `tx`, and `ty` are exact.

Because the preferred redraw geometry uses finite decimal design values, those values are rational.

Accordingly, if:

```text
s, tx, ty ∈ ℚ
```

the entire transformed FEBCM boundary remains exactly representable as CRPC.

This closes the first production blocker identified by Spatial Ground **at the mathematical-design level**.

It does not yet establish:

- the actual Survey origin;
- actual translation;
- actual scale;
- Survey Domain dimensions;
- final production coordinates.

---

## 22. Canonical Syntax Deferred

This decision intentionally does **not** choose whether a rational scalar serializes as:

```text
"3/4"
```

or:

```json
{"n":"3","d":"4"}
```

or another deterministic normative encoding.

That is a serialization decision.

The mathematics selected here are independent of surface syntax.

One mathematical value may eventually have one canonical encoding or multiple governed lossless encodings, consistent with the Requirements.

---

## 23. Addressing Deferred

CRPC coordinates are mathematical position values.

This decision does not establish that the final public or canonical **address grammar** must simply be the literal coordinate pair.

Addressing may use:

- direct coordinates;
- a self-resolving structured grammar;
- another exact deterministic form tied to CRPC.

Whatever addressing system is later selected must resolve exactly to the same canonical position.

---

## 24. Refinement Relationship Deferred

CRPC supplies exact precision extension but does not by itself define the semantic relationship between coarse and fine **references**.

It does not say that a coarser reference denotes:

- an extent;
- an uncertainty region;
- a parent cell;
- a descendant set;
- a rounded coordinate.

That remains a separate FSF formal decision.

This preserves the unresolved refinement dependency identified by Spatial Ground.

---

## 25. Requirements Compatibility Judgment

CRPC satisfies the current formal obligations because it provides:

- exact canonical position values;
- finite representation;
- deterministic normalization;
- exact comparison;
- exact Pang agreement;
- precision by extension;
- no mandatory named subunit system;
- no unrestricted real-number requirement;
- no silent snapping;
- implementation-independent meaning;
- deterministic computability for accepted finite coordinate values.

No existing Requirement must be changed to select CRPC.

---

## 26. Rejected Alternatives

| Candidate | Disposition | Primary reason |
|---|---|---|
| IEEE floating point | **REJECTED** | approximate / implementation-sensitive |
| fixed decimal grid | **REJECTED** | prematurely fixes precision |
| dyadic-only rationals | **REJECTED AS COMPLETE DOMAIN** | not closed under ordinary rational geometric construction |
| unrestricted real numbers | **REJECTED** | not finitely representable / computable in general |
| symbolic coordinates only | **REJECTED AS PRIMARY POSITION DOMAIN** | unnecessary complexity for ordinary canonical positions |
| reduced rationals | **SELECTED** | exact, finite, extensible, geometry-compatible |

---

## 27. Formal Selection

The selected coordinate scalar mathematics are:

```text
CRPC = { n/d Pang | n ∈ ℤ, d ∈ ℕ+, gcd(|n|,d)=1 }
```

with:

```text
0 = 0/1
```

Canonical planar coordinate space will therefore be based on:

```text
CRPC × CRPC
```

subject to the finite Survey Domain once its exact geometry is selected.

---

## 28. Gate Effect

Spatial Ground blocker:

```text
FSF-B01 — Exact Coordinate Representation
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED
SPECIFICATION INCORPORATION — PENDING
CONFORMANCE / REFERENCE VECTORS — PENDING
FORMAL ADOPTION — PENDING
```

Gate B remains closed because the frame, origin, Domain geometry, region primitive, normalization, and serialization are still unresolved.

---

## 29. Next Formal Mathematical Decision

The next decision SHALL address:

> **Exact Canonical Frame and Handedness**

It must select:

- ordered coordinate axes;
- correspondence to Pankor / Panvath / Panoris / Panvel;
- positive axis directions;
- handedness;
- relationship between coordinate signs and canonical directions.

Origin **placement** should remain a subsequent decision.

---

## 30. Standing

**EXACT COORDINATE SCALAR DOMAIN — SELECTED**

**DOMAIN — REDUCED RATIONAL PANG VALUES**

**FLOATING-POINT CANONICAL TRUTH — REJECTED**

**FIXED MAXIMUM DECIMAL PRECISION — REJECTED**

**DYADIC-ONLY DOMAIN — REJECTED**

**UNRESTRICTED REAL CONTINUUM — NOT REQUIRED**

**SUB-PANG PRECISION — EXACT FRACTIONAL EXTENSION**

**POSITION TUPLE SYNTAX — NOT YET SELECTED**

**ADDRESS GRAMMAR — NOT YET SELECTED**

**SERIALIZATION — NOT YET SELECTED**

**FRAME / HANDEDNESS — NEXT**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 31. Governing Closing Statement

> **Pang defines the scale; reduced rational coordinates define exact place. Precision may deepen without approximation, snapping, or migration—and every canonical coordinate remains finite enough to be independently reconstructed.**
