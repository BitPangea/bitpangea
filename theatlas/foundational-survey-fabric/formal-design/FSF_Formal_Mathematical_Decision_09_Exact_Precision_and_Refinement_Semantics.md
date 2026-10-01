# Foundational Survey Fabric — Formal Mathematical Decision 09

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Design Decision  
**Creator Period:** Day #123 · September 27, 2026  
**Subject:** Exact Precision and Refinement Semantics  
**Status:** COMPLETE — MATHEMATICAL DESIGN SELECTED · AMENDED FOR DAY #126 LINEAGE / VERSION-COMPATIBILITY RECONCILIATION  
**Adoption Standing:** Integrated into the candidate FSF Specification / Conformance / Reference Vector architecture; not yet canonically adopted.

> **Day #126 Amendment — Lineage / Version-Compatibility Clarification**  
> ECEM remains the selected candidate precision model. Subsequent integration confirms that compatible evolution may expand representational capability, serialization forms, or governed limits only where established canonical meaning is preserved exactly. Representation identity, format identity, Specification identity, and spatial identity remain distinct. Final institutional Specification identity, version succession, incompatible-transition / migration policy, and adoption authority remain separate governance questions.


---

## 1. Decision

The Foundational Survey Fabric SHALL use **exact coordinate extension without hierarchical reference semantics** as its canonical precision model.

Under this model:

> **Every valid canonical Point reference denotes one exact Survey position. It never denotes an uncertainty area, parent cell, rounded location, or set of finer descendants.**

Precision extension occurs by increasing the exact finite coordinate values and expressions that the governing Specification can represent.

It does **not** occur by changing the meaning of an existing canonical reference.

This decision is designated:

> **Exact Coordinate Extension Model**

Working abbreviation:

```text
ECEM
```

---

## 2. Governing Principle

The permanent principle:

> **precision by refinement rather than migration**

is formally realized as:

> **refine representational capability; never migrate established place.**

A canonical reference that already denotes an exact Point continues to denote exactly that same Point under every compatible later Specification.

---

## 3. No Coarse Canonical Point

The FSF SHALL NOT define a canonical Point reference whose meaning is:

```text
somewhere near here
```

or:

```text
somewhere inside this cell
```

or:

```text
this rounded coordinate at current precision
```

A valid canonical Point is always exact.

Therefore the canonical Point model has no semantic states such as:

```text
coarse point
fine point
approximate point
uncertain point
```

A Point either denotes one exact valid coordinate pair or fails validation.

---

## 4. No Parent / Child Meaning for Point References

Canonical Point references SHALL NOT carry an implicit hierarchy such as:

```text
parent point
child point
descendant point
```

A coordinate such as:

```text
(1/2, 3/4)
```

does not have "finer descendants."

It is already one exact Point.

A later Point such as:

```text
(500001/1000000, 3/4)
```

is simply a different exact Point.

It is not a refinement of the first Point unless an explicitly defined noncanonical application relation says otherwise.

---

## 5. Exactness Is Not Decimal Digit Count

Canonical precision SHALL NOT be measured by the number of written decimal places.

For example:

```text
1/3
```

is exact even though it has no terminating decimal expansion.

Likewise:

```text
1/2
```

and:

```text
500000/1000000
```

do not represent different precision levels.

After CRPC normalization they are the same exact value.

Therefore:

> **precision is mathematical exactness and representational capacity, not display digit count.**

---

## 6. CRPC Provides Sub-Pang Precision

Formal Mathematical Decision 01 selected:

```text
CRPC = reduced rational Pang coordinates
```

Therefore sub-Pang precision is obtained directly through exact fractions:

```text
1/2 Pang
1/3 Pang
1/1000000 Pang
37/125000 Pang
```

No named sub-Pang unit or permanent subdivision hierarchy is required.

---

## 7. System-Level Precision Extension

A later compatible FSF Specification MAY increase canonical representational capacity by permitting, for example:

- larger numerator magnitudes;
- larger denominator magnitudes;
- larger finite geometry objects;
- deeper but still finite exact expressions;
- newly governed exact scalar forms where genuinely necessary.

Such extension enlarges what may be canonically expressed.

It SHALL NOT alter what any previously valid reference means.

Where compatibility is claimed across governed versions or representations, correspondence to the same normalized mathematical object SHALL be lossless and deterministic.

---

## 8. Monotonic Compatibility Rule

Let:

```text
R_v
```

be the set of canonical references valid under compatible Specification version `v`.

For a compatible precision-extending successor version `v+1`:

```text
R_v ⊆ R_(v+1)
```

and for every:

```text
r ∈ R_v
```

its denotation must be invariant:

```text
meaning_v(r) = meaning_(v+1)(r)
```

This is the formal meaning of refinement without migration.

The inclusion rule above governs **compatible capacity expansion**. It does not imply that every future Specification revision must be monotonic, nor does it define governance for an intentionally incompatible successor. Any incompatible transition would require explicit higher-level succession / migration governance and could not be described as ordinary compatible refinement.

For compatibility analysis, the following identities remain distinct:

```text
mathematical identity
≠ representation identity
≠ format identity
≠ Specification identity
```

Compatible change may alter the latter three only where the first remains invariant.


---

## 9. No Silent Reinterpretation

A successor Specification SHALL NOT reinterpret an existing reference because:

- more precision becomes available;
- a new addressing grammar exists;
- a new serializer exists;
- larger rational values are permitted;
- a new geometric primitive is introduced.

If an old reference denoted Point `P`, it continues to denote Point `P`.

---

## 10. No Silent Snapping

Canonical input SHALL NOT be snapped to a representable Point.

If a submitted value is not valid under the governing canonical mathematics, the result is:

```text
INVALID
```

not:

```text
nearest valid coordinate
```

and not:

```text
rounded coordinate
```

This preserves exactness and permanent meaning.

---

## 11. Explicit Extent Is Not Coarse Point

FSF already distinguishes canonical Points from canonical extents.

Therefore an SCPE or other valid extent SHALL NOT be interpreted as a low-precision Point.

For example:

```text
SCPE R
```

means exactly the closed region `R`.

It does not mean:

```text
an unknown Point somewhere inside R
```

Likewise a Point at the centroid of `R` does not substitute for the extent.

---

## 12. Canonical Point vs Canonical Extent

The semantic distinction is permanent:

```text
Point -> one exact position
Extent -> one exact set of positions
```

There is no implicit conversion:

```text
Extent -> approximate Point
```

or:

```text
Point -> zero-size uncertainty extent
```

except where a separately defined mathematical operation explicitly constructs such a result.

---

## 13. Derived Survey Subdivisions

FSF MAY derive neutral structures such as:

- cells;
- grids;
- subdivisions;
- hierarchical partitions;
- spatial indexes.

But those derived constructs are not the canonical precision mechanism for Points.

A cell may be an exact extent.

It is not automatically a "coarse reference" to an unknown Point.

---

## 14. Hierarchical Subdivision Rejected as Canonical Precision Semantics

A mandatory quadtree, tile pyramid, recursive grid, or parent-child cell hierarchy is rejected as the foundational precision mechanism.

Reasons:

- CRPC already gives exact arbitrary finite fractional coordinates;
- hierarchical cells would introduce a second semantic system for place;
- a cell naturally denotes an extent, not one exact Point;
- parent-child relations risk ambiguity about whether coarse references mean areas or approximate positions;
- no current Requirement makes such hierarchy necessary.

Hierarchical subdivisions remain permitted as derived Survey mathematics or implementation structures.

---

## 15. "Refinement" Defined

Within canonical FSF terminology, **refinement** SHALL mean:

> **a compatible increase in exact representational capability or an exact derivation that preserves previously established spatial meaning.**

Refinement SHALL NOT mean:

- reinterpretation;
- rounding;
- migration;
- replacing a Point with a nearby Point;
- assigning uncertainty;
- turning an extent into a Point;
- inventing parent-child meaning not explicitly specified.

---

## 16. Refinement of Geometry Expressions

An exact geometry expression MAY be replaced by another expression that is proven geometrically equivalent.

For example, a noncanonical polygon representation with a redundant collinear vertex may normalize to a simpler canonical SCPE.

That is representational refinement because:

```text
geom(before) = geom(after)
```

It does not change place.

---

## 17. Refinement of Specification Capability

A compatible future Specification may support a valid Point that older software could not represent due to governed complexity limits.

For example:

```text
P_new = (n/d, p/q)
```

with very large but finite exact integers.

The new Point extends canonical capacity.

It does not refine any older Point unless it is mathematically identical to one.

---

## 18. Canonical Precision vs Storage Precision

Canonical precision is the exact mathematical value.

Storage precision is an implementation concern.

A system may use:

- arbitrary-precision integers;
- bignum libraries;
- compact fraction encodings;
- symbolic internal structures.

Those choices do not change canonical precision.

---

## 19. Canonical Precision vs Rendering Precision

A renderer may display:

```text
0.3333
```

for the exact canonical value:

```text
1/3
```

That visual approximation is rendering precision only.

It does not redefine the canonical coordinate.

Any displayed approximation SHOULD be understood as a view of exact underlying truth.

---

## 20. Canonical Precision vs Measurement Output Type

The coordinate precision model does not require all derived measurements to be rational.

Some exact distances may require algebraic scalar representation.

That is a separate measurement question.

ECEM governs the semantic stability and extensibility of canonical references.

It does not force every future exact scalar into CRPC.

---

## 21. Addressing Consequence

The eventual canonical addressing grammar SHALL resolve to one exact mathematical object.

For a Point address:

```text
address -> exact Point
```

not:

```text
address -> progressively shrinking area
```

unless an explicitly different extent-address type is defined.

A canonical Point address cannot depend upon "zoom level" for its meaning.

---

## 22. Self-Resolving Requirement

Because the exact coordinate values are contained in or deterministically derivable from the canonical reference grammar, a conforming implementation can resolve place from the governing Specification.

No external registry is required to determine which Point a reference means.

---

## 23. Reference Permanence

A canonical reference SHALL never be reused for a different Point.

If a future representation becomes preferred, it must:

- normalize losslessly and deterministically to the same exact Point where compatibility is claimed;
- or receive a distinct reference if it denotes a different Point.

Representation evolution cannot authorize semantic reassignment.

> **Representations may evolve. Canonical place may not drift.**

---

## 24. Lossless Precision Conversion

A precision conversion is **lossless** iff the exact mathematical object before and after conversion is identical.

Examples:

```text
2/4 -> 1/2
```

is lossless normalization.

An alternative lossless encoding of:

```text
1/2
```

remains the same canonical value.

---

## 25. Lossy Precision Conversion

A conversion is **lossy** iff it changes the exact mathematical object.

Example:

```text
1/3 -> 0.333
```

as an exact decimal rational changes the value.

Therefore such conversion SHALL NOT silently produce canonical output.

Lossy forms may exist only as clearly noncanonical views or application data.

---

## 26. No Semantic Resolution Tiers

FSF SHALL NOT define foundational semantic tiers such as:

```text
low-resolution place
medium-resolution place
high-resolution place
```

The same canonical Point has the same meaning regardless of:

- renderer zoom;
- storage format;
- UI detail;
- application context;
- device precision.

---

## 27. Complexity Limits

The Specification MAY impose practical canonical complexity limits.

For example:

- maximum numerator digit count;
- maximum denominator digit count;
- maximum vertices per geometry object;
- maximum serialized byte length.

Such limits determine whether an input is valid under a particular Specification version.

They do not create approximate values.

A value beyond the limit is invalid for that version, not rounded into validity.

---

## 28. Compatible Limit Expansion

A successor Specification MAY increase such complexity limits.

If so, formerly valid references retain identical meaning.

Newly valid references become available.

Thus:

```text
old capacity ⊆ new capacity
```

without migration.

---

## 29. Spatial Ground Dependency Resolution

Spatial Ground previously required clarity on the relation between coarse and fine Survey references.

This decision resolves that dependency:

> **Canonical Point references have no coarse/fine semantic hierarchy. Every valid Point is exact.**

Therefore Spatial Ground SHALL NOT interpret an FSF Point as:

- an extent;
- uncertainty;
- parent cell;
- set of descendants;
- rounded representative.

For valid Point references:

```text
membership is evaluated at that exact Point.
```

---

## 30. Spatial Ground Refinement Closure

Spatial Ground's refinement-closure obligation now becomes straightforward.

If an existing canonical Point `P` is valid and receives:

```text
WORLD
```

or:

```text
NON_WORLD
```

a compatible later FSF version does not change `P`.

Therefore its Ground membership answer remains attached to the same exact Point.

Newly expressible Points receive their own membership evaluations.

No inherited "child membership" rule is required.

---

## 31. No Any/All Descendant Semantics

Spatial Ground SHALL NOT infer membership using rules such as:

```text
coarse reference is WORLD if any descendant is WORLD
```

or:

```text
coarse reference is WORLD if all descendants are WORLD
```

because canonical Point references do not denote descendant sets.

Such rules would solve a problem that ECEM intentionally eliminates.

---

## 32. Extent Membership Remains Separate

If Spatial Ground or another higher layer later evaluates an exact FSF extent, the semantics of that operation must be explicitly defined.

It must not be inherited from Point precision terminology.

For example:

```text
extent wholly inside World
extent intersects World
extent boundary crosses World
```

are distinct exact questions.

They are not "coarse Point membership."

---

## 33. No Named Sub-Pang Units Required

The FSF SHALL NOT require permanent units such as:

```text
milli-Pang
micro-Pang
nano-Pang
```

to obtain deeper precision.

Exact fractional Pangs are sufficient.

Named derived units may exist for convenience above the canonical mathematics if they map exactly back to Pang values.

---

## 34. Why ECEM Is Preferred

ECEM is selected because it:

- preserves exact Point meaning;
- uses the already-selected CRPC mathematics;
- eliminates coarse/fine ambiguity;
- avoids foundational grid hierarchy;
- satisfies precision extension;
- supports future larger exact references;
- preserves self-resolution;
- keeps point and extent ontology clean;
- simplifies Spatial Ground membership.

---

## 35. Rejected Alternatives

| Candidate | Disposition | Primary reason |
|---|---|---|
| Exact coordinate extension | **SELECTED** | exact, simple, no migration |
| Mandatory quadtree refinement | **REJECTED** | makes extent hierarchy foundational |
| Tile pyramid as canonical precision | **REJECTED** | conflates extent with Point precision |
| Fixed decimal precision levels | **REJECTED** | finite ceiling / decimal privilege |
| Rounded canonical coordinates | **REJECTED** | changes place |
| Uncertainty-area Point references | **REJECTED** | ambiguous Point semantics |
| Parent/child Point references | **REJECTED** | unnecessary hierarchy |
| Silent snapping | **REJECTED** | violates exactness |

---

## 36. Requirements Compatibility Judgment

ECEM satisfies the established requirements that:

- every valid representable location be exactly addressable;
- canonical address meaning be permanent;
- precision increase without rewriting place;
- cells/tiles not become foundational unless necessary;
- sub-Pang precision be available without named subunits;
- exact comparison be available;
- silent snapping be prohibited;
- canonical precision differ from storage and rendering precision;
- valid references remain finitely representable and deterministically computable.

The Requirements record specifically preserved precision by refinement while avoiding a mandatory hierarchical refinement mechanism. ECEM formalizes that preserved design freedom as exact coordinate extension rather than hierarchical reference semantics.

No Requirement must be changed.

---

## 37. FSF-B07 Effect

Spatial Ground blocker:

```text
FSF-B07 — Exact Precision Mechanism
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED
MECHANISM — EXACT COORDINATE EXTENSION
SUB-PANG PRECISION — CRPC FRACTIONS
NAMED SUBUNITS — NOT REQUIRED
HIERARCHICAL POINT REFINEMENT — REJECTED
SPECIFICATION INCORPORATION — INTEGRATED AT CANDIDATE LEVEL
CONFORMANCE / REFERENCE VECTORS — RECONCILED FOR DEFINED CORE
FORMAL ADOPTION — NOT YET PERFORMED
```

---

## 38. FSF-B10 Effect

Spatial Ground blocker:

```text
FSF-B10 — Coarse/Fine Refinement Relationship
```

is now:

```text
MATHEMATICAL DESIGN — RESOLVED
CANONICAL POINT COARSE/FINE HIERARCHY — NONE
POINT MEANING — ALWAYS EXACT
EXTENT ≠ COARSE POINT
DERIVED SUBDIVISION ≠ CANONICAL POINT PRECISION
```

This removes the critical ambiguity that had remained open during the Spatial Ground dependency review.

---

## 39. Remaining Precision Questions

The following may still require later formal decisions but do not reopen canonical Point semantics:

- exact complexity limits;
- canonical public address grammar;
- exact derived-measure scalar types;
- optional derived subdivision systems;
- precision-conversion APIs;
- richer composite geometry precision;
- final Specification identity and version-succession governance;
- incompatible-transition / migration policy, if ever required.

These are downstream formalization questions.

---

## 40. Reference Vector Standing

The reconciled FSF Precision and Version / Conformance vectors now test the defined ECEM compatibility semantics. Required coverage includes:

### Exact Point Permanence

- same Point under equivalent rational form;
- same Point under successor format;
- old valid reference unchanged after capacity extension.

### Sub-Pang Exactness

- `1/2`
- `1/3`
- very large finite denominator;
- negative fractional coordinate.

### No Hierarchy

- neighboring exact Points remain distinct;
- no parent/child relation inferred;
- extent is not accepted where Point is required.

### Invalidity

- complexity beyond current governed limit;
- approximate float input;
- snapped input request;
- lossy decimal conversion masquerading as exact.

### Compatibility

- old reference corpus evaluated identically by successor conforming implementation.

---

## 41. Gate Consequence

The later integration review refined the blocker standing.

The current Day #126 blocker view is:

```text
FSF-B01 — RESOLVED
FSF-B02 — RESOLVED
FSF-B03 — RESOLVED
FSF-B04A — DOMAIN GEOMETRY / BOUNDARY — RESOLVED
FSF-B04B — NUMERICAL DOMAIN CAPACITY H — OPEN
FSF-B05 — RESOLVED
FSF-B06 — RESOLVED
FSF-B07 — RESOLVED
FSF-B08 — RESOLVED
FSF-B09 — RESOLVED
FSF-B10 — RESOLVED
FSF-B11 — CLOSED-SET / ARBITRARY DIFFERENCE COMPATIBILITY — OPEN
```

The original FMD-09 conclusion that `FSF-B04` was wholly resolved is superseded. The candidate Survey Domain geometry is resolved as a closed axis-aligned square centered at `(0,0)`, but no source-derived criterion has yet selected the exact positive numerical half-span `H`.

The Decisions 01–09 integration review has since been completed. Candidate Specification, Conformance, and Reference Vector work has also proceeded for the defined core. These later artifacts do not constitute canonical adoption.

---

## 42. Subsequent Integration Standing

The recommended **FSF Candidate Mathematics Integration Review — Decisions 01–09** has since been completed.

That review:

1. combined the nine selected decisions;
2. tested them against Findings #1–#85;
3. reconciled cross-decision dependencies;
4. identified still-open mathematics;
5. distinguished capacity-independent candidate core behavior from unresolved gates;
6. enabled executable candidate Conformance and Reference Vector work for the defined mathematics.

The integrated candidate architecture therefore now exists.

Remaining work is no longer to perform the initial Decisions 01–09 integration. It is to close the remaining formal gates, preserve compatibility semantics across future governed evolution, and withhold canonical adoption until the required institutional and proof conditions are satisfied.

---

## 43. Day #126 Compatibility / Lineage Consequence

ECEM supplies the precision-side compatibility semantics for the integrated candidate FSF.

A compatible successor MAY expand:

- exact coordinate capacity;
- governed complexity limits;
- supported exact scalar forms;
- supported exact geometry expressions;
- or lossless normative representations.

But compatibility requires that every previously supported canonical object continue to denote the same normalized mathematical object.

Therefore:

```text
compatible evolution
= expanded capability
+ preserved denotation
+ lossless deterministic correspondence
```

It does not mean:

```text
compatible evolution
= silent migration
= renumbering
= reinterpretation
= approximate conversion
= representation-defined place
```

Final institutional Specification identity, version identifiers, succession rules, incompatible-transition policy, migration governance, and canonical adoption authority remain separate from ECEM's mathematical continuity rule.

---

## 44. Standing

**PRECISION MODEL — EXACT COORDINATE EXTENSION**

**CANONICAL POINT — ALWAYS EXACT**

**COARSE CANONICAL POINT — NONE**

**POINT HIERARCHY — NONE**

**EXTENT AS APPROXIMATE POINT — REJECTED**

**SUB-PANG PRECISION — EXACT CRPC FRACTIONS**

**NAMED SUB-PANG UNITS — NOT REQUIRED**

**SILENT SNAPPING — PROHIBITED**

**COMPATIBLE PRECISION EXTENSION — MONOTONIC**

**ESTABLISHED PLACE MIGRATION — PROHIBITED**

**FSF-B07 — DESIGN RESOLVED**

**FSF-B10 — DESIGN RESOLVED**

**FSF DECISIONS 01–09 — INTEGRATION REVIEW COMPLETE**

**SPECIFICATION / CONFORMANCE / REFERENCE VECTOR INTEGRATION — CANDIDATE-LEVEL COMPLETE FOR DEFINED CORE**

**FINAL SPECIFICATION IDENTITY / VERSION SUCCESSION / MIGRATION GOVERNANCE — OPEN**

**SURVEY DOMAIN NUMERICAL HALF-SPAN `H` — OPEN**

**FORMAL SPECIFICATION ADOPTION — NOT YET PERFORMED**

---

## 45. Governing Closing Statement

> **A canonical place does not become more exact when the Survey Fabric grows more capable. It was exact when first established. Refinement expands what can be expressed; it never moves what was already known.**
