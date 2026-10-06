# Spatial Ground Specification

**BitPangea · The Atlas · Spatial Ground**  
**Document Type:** Specification  
**Creator Period:** Day #122 · September 26, 2026 · Reconciled Day #132 · October 6, 2026  
**Status:** DRAFT FOR GATE B ADOPTION REVIEW — RECONCILED TO FSF-SPEC-1.0  
**Normative Scope:** Spatial Ground only  
**Formal Model:** Canonical Membership Predicate Model (CMPM)  
**Requirements Basis:** Adopted Spatial Ground Requirements  
**Dependency Basis:** `SG_FSF_Dependency_Declaration.md` · `FSF-SPEC-1.0`  
**Model-Selection Basis:** `SG_Formal_Model_Selection_Record.md`  
**Canon-Form Basis:** `SG_Canon_Form_Policy.md`  
**Canonical Instance Effect:** None. This Specification does not select or adopt the canonical World-space instance.

---

## 0. Status and Normative Convention

> **Day #132 Reconciliation Note**  
> This draft has been reconciled to the canonical upstream `FSF-SPEC-1.0`, the Day #131 production placement rule, the selected SG-CJSON 1.0 representation, and the Day #132 SG-RV-024 re-evaluation. It remains a draft pending the Gate B Adoption Review and does not itself adopt the canonical World-space instance.


This document specifies **how Spatial Ground works**.

The adopted Spatial Ground Requirements define **what must remain true**.

This Specification defines the formal semantic structure that satisfies those Requirements through the selected:

> **Canonical Membership Predicate Model (CMPM)**

The normative keywords **MUST**, **MUST NOT**, **SHALL**, **SHALL NOT**, **MAY**, and **SHOULD** are used in their ordinary architectural sense within BitPangea.

This Specification does not:

- redefine the Foundational Survey Fabric;
- redefine or supplement the adopted FSF-SPEC-1.0 mathematics;
- define General Spatial Interpretation;
- define Parcel Cadastre;
- assign ownership, rights, jurisdiction, value, or experience;
- select the final canonical World-space instance;
- confer canonical status upon a candidate Ground Definition.

Canonical status remains a matter of adoption.

---

# 1. Governing Purpose

Spatial Ground exists to:

> **canonically express and preserve which canonical Survey space is BitPangea World-space.**

The governing layer relation is:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

Spatial Ground therefore introduces exactly one new canonical semantic distinction:

```text
WORLD
NON_WORLD
```

No other Ground-native semantic class exists.

---

# 2. Formal Objects

This Specification defines the following normative semantic objects.

## 2.1 Survey Domain Dependency — `S`

Let:

```text
S
```

denote the canonical domain of valid Survey locations supplied by the governing Foundational Survey Fabric Specification.

For the current canonical lineage:

```text
FSF-SPEC-1.0
```

the Survey Domain is:

```text
S = [-1,000,000,+1,000,000]²
```

in Pang coordinates.

Spatial Ground does not define `S`.

Spatial Ground SHALL consume `S` by reference.

A Survey location outside `S`, malformed under FSF-SPEC-1.0, unresolved under the governing FSF lineage, or otherwise invalid under FSF SHALL NOT be treated as a valid Ground membership input.

For the selected production profile, canonical World-space is additionally constrained by the governed production placement envelope:

```text
P = [-500,000,+500,000]²
```

with:

```text
W_D ⊂ interior(P) ⊂ interior(S)
```

This placement envelope is inherited from FSF-SPEC-1.0. Spatial Ground SHALL NOT redefine `P`, enlarge it, or reinterpret it as independent World territory.

---

## 2.2 Ground Definition — `D`

Let:

```text
D
```

denote the finite governing Spatial Ground Definition.

`D` is the Ground-owned formal definition that determines World membership by invoking:

1. Ground-owned membership rules; and
2. inherited FSF semantics explicitly permitted by this Specification.

`D` SHALL be finitely expressible.

`D` SHALL contain no hidden mutable state.

`D` SHALL be independently parseable under the governing canonical representation rules.

`D` SHALL NOT depend upon any implementation-specific database, cache, runtime state, rendering state, user state, ownership state, or private institutional knowledge.

---

## 2.3 Canonical Membership Predicate — `M_D`

The governing membership function is:

```text
M_D : S → {WORLD, NON_WORLD}
```

For every valid `x ∈ S`, `M_D(x)` SHALL return exactly one of:

```text
WORLD
NON_WORLD
```

No third canonical membership value is permitted.

---

## 2.4 Canonical World-Space — `W_D`

Canonical World-space is:

```text
W_D = { x ∈ S | M_D(x) = WORLD }
```

`W_D` is the semantic set induced by `D`.

`W_D` is not required to exist as an exhaustive materialized registry.

---

## 2.5 Canonical Non-World-Space — `N_D`

Canonical non-World-space is:

```text
N_D = { x ∈ S | M_D(x) = NON_WORLD }
```

and:

```text
N_D = S \ W_D
```

within the operative Ground domain.

`N_D` SHALL NOT require an independently authored canonical exclusion authority.

It is derived from the same membership predicate.

---

# 3. Membership Semantics

## 3.1 Totality

For every valid `x ∈ S`, `M_D(x)` SHALL terminate with one canonical membership result.

There is no canonical Ground state of:

- unknown;
- pending;
- unresolved;
- disputed;
- approximate;
- partially World;
- probably World;
- mixed membership.

---

## 3.2 Two-Valued Membership

The membership vocabulary is exactly:

```text
WORLD
NON_WORLD
```

An extent, region, or higher spatial object may later be classified as mixed with respect to Ground membership.

Such a classification is derived.

It SHALL NOT create a third point/location membership value.

---

## 3.3 Determinism

For fixed `D` and fixed inherited FSF semantics:

```text
M_D(x)
```

SHALL always return the same result for the same canonical Survey meaning.

Implementation disagreement does not create canonical indeterminacy.

If implementations disagree, at least one implementation, representation, or dependency is nonconforming or defective.

---

# 4. Input Validity

## 4.1 FSF Validity Precondition

Before Ground membership is evaluated, the input SHALL be valid under the governing FSF semantics.

The evaluation sequence is:

```text
Candidate Survey expression
        ↓
FSF validity / canonicalization
        ↓
Canonical Survey meaning
        ↓
Spatial Ground membership evaluation
```

Invalid Survey input SHALL NOT be interpreted as `NON_WORLD`.

Invalid Survey input is not a Ground membership answer.

---

## 4.2 Canonical Survey Meaning

Ground membership attaches to canonical Survey meaning.

It does not attach to:

- one textual address;
- one serialization;
- one display format;
- one database identifier;
- one UI label.

If multiple valid FSF expressions denote the same canonical Survey meaning, they SHALL receive the same Ground membership result.

---

# 5. FSF Dependency Contract

Spatial Ground SHALL consume FSF-owned truth from:

```text
FSF-SPEC-1.0
```

and any later compatible lineage explicitly recognized by the governing adoption architecture.

For the current production profile, Spatial Ground inherits at minimum:

- Survey Domain `S = [-1,000,000,+1,000,000]²`;
- production placement envelope `P = [-500,000,+500,000]²`;
- valid Survey reference;
- canonical Survey meaning;
- reference identity and semantic equality;
- canonical frame and origin;
- CRPC exact coordinate representation;
- Pang measure;
- Point, Segment, and SCPE;
- exact required geometry predicates;
- deterministic normalization;
- ECEM precision / refinement semantics;
- FSF-CJSON-1.0 canonical machine interchange;
- supported positive uniform scale and translation;
- compatible lineage and meaning-preserving succession.

Spatial Ground SHALL NOT define competing versions of these concepts.

Spatial Ground SHALL NOT infer support for an FSF capability merely because a synthetic test adapter or historical Ground implementation contains an analogous operator.

Where FSF-SPEC-1.0 deliberately leaves a capability outside its adopted Mandatory Core, Spatial Ground SHALL treat that capability as outside the current production profile unless and until separately governed.

---

## 5.1 No Parallel Survey Mathematics

Spatial Ground SHALL NOT introduce its own:

- coordinate system;
- measurement system;
- geometry;
- topology;
- precision model;
- refinement model;
- address space;
- canonical spatial equality regime.

If a Ground design appears to require one, the dependency SHALL be routed to FSF rather than absorbed into Ground.

---

# 6. Definition Language Requirements

The canonical machine-readable syntax for `D` is **SG-CJSON 1.0**.

Whatever syntax is selected, it MUST satisfy all of the following.

## 6.1 Finite Grammar

The syntax SHALL be finitely describable.

A conforming parser SHALL be able to determine whether an artifact is syntactically valid under finite computation.

---

## 6.2 Deterministic Parsing

The same valid canonical Ground Definition artifact SHALL parse to the same semantic structure under every conforming implementation.

Ambiguous grammar is prohibited.

---

## 6.3 Semantic Closure

All normative semantics used by `D` SHALL be resolvable through:

1. this Specification;
2. the adopted Ground Definition;
3. the declared FSF dependency surface.

No tacit institutional knowledge may be required.

---

## 6.4 Permitted Ground Semantics

The Ground Definition MAY contain only semantics supported by:

1. this Spatial Ground Specification;
2. SG-CJSON 1.0;
3. the declared governing FSF profile;
4. the applicable canonical Ground Definition.

The selected production World-space profile is intentionally narrow.

Its canonical production form SHALL use:

```text
one primary FSF spatial-set definition
one SG-CJSON fsf root
```

The selected first production instance SHALL NOT require unrestricted Ground-level Boolean composition.

Historical SG-CJSON / Reference Vector support for synthetic `union`, `intersection`, or `difference` expressions SHALL NOT be interpreted as automatic production authorization for arbitrary composite-result geometry under FSF-SPEC-1.0.

In particular:

```text
general Boolean / composite-result closure
```

remains outside the FSF-SPEC-1.0 Mandatory Core.

Therefore unrestricted production use of Ground-level set difference is not part of the current production profile.

---

## 6.5 Prohibited Semantics

The Ground Definition SHALL NOT contain or depend upon:

- Parcel identity;
- ownership;
- claims;
- rights;
- jurisdiction;
- settlement;
- development;
- access;
- Region identity;
- Cluster identity;
- terrain;
- morphology;
- visual coast;
- social meaning;
- economic meaning;
- political meaning;
- legal meaning;
- civilizational meaning;
- ranking or value;
- user preference;
- runtime session state.

---

# 7. Canonical Form

The Canon-Form Policy governs primary normative forms.

## 7.1 Primary Ground Definition Form

The primary normative form of `D` SHALL be one canonical machine-readable Ground Definition artifact.

The governing canonical machine-readable representation is **SG-CJSON 1.0**.

A human-readable rendering MAY accompany it.

The human-readable rendering SHALL NOT become an independent authority.

---

## 7.2 Primary Specification Form

This adopted Specification SHALL be the primary normative source for Ground semantics.

README files, HTML pages, diagrams, implementation notes, tutorials, and examples are supporting documentation unless explicitly incorporated.

---

## 7.3 Derived Artifacts

The following SHALL be treated as derived unless explicitly governed otherwise:

- spatial indexes;
- databases;
- maps;
- visual outlines;
- tiles;
- caches;
- compiled evaluators;
- materialized registries;
- Merkle commitments;
- signatures;
- hash manifests;
- API responses.

Derived artifacts SHALL identify the authority from which they derive.

---

# 8. Semantic Equivalence

## 8.1 FSF Equivalence

If FSF determines:

```text
x ≡FSF y
```

then:

```text
M_D(x) = M_D(y)
```

Ground SHALL NOT distinguish Survey meanings that FSF treats as identical.

---

## 8.2 Ground Definition Equivalence

Two Ground Definition artifacts `D1` and `D2` are semantically equivalent only if they induce the same canonical membership truth under the same governing FSF semantics.

Conceptually:

```text
D1 ≡SG D2
```

only if:

```text
∀x ∈ S : M_D1(x) = M_D2(x)
```

subject to the decidability and proof procedure adopted by this Specification.

---

## 8.3 Primary Form Precedence

If two artifacts claim to express the same Ground definition and equivalence cannot be established:

- they SHALL NOT both be treated as authoritative;
- the declared primary normative artifact governs;
- the alternate remains unproven or defective.

---

# 9. Refinement Closure

## 9.1 Governing Rule

The adopted Ground Definition SHALL already determine membership for every location that compatible FSF refinement can make representable.

Refinement SHALL permit finer evaluation of established Ground truth.

Refinement SHALL NOT:

- create World-space;
- remove World-space;
- move World-space;
- newly decide a previously undecided canonical membership;
- move the canonical limit merely because additional precision becomes available.

---

## 9.2 Coarse/Fine Reservation

This Specification does not define what an FSF coarse reference means.

It does not assume that coarse references:

- denote extents;
- denote uncertain points;
- contain finer children;
- form a parent/child hierarchy;
- control descendant membership.

If Ground evaluation later depends upon one exact coarse/fine interpretation not yet supplied by FSF, that dependency SHALL block Gate B until resolved upstream.

---

# 10. Canonical Limit

## 10.1 Limit as Consequence

The canonical Ground limit is the exact consequence of where membership changes under `M_D`, as interpreted through governing FSF geometry, topology, and boundary semantics.

The canonical limit SHALL NOT be an independent source of World membership.


For the selected production profile, the canonical World-space instance SHALL be closed and SHALL include its own limit under the governing FSF geometry semantics.

This rule applies only to supported FSF spatial-set classes whose boundary semantics are compatible with closed World-space.

It SHALL NOT be generalized into unrestricted set-difference semantics that FSF-SPEC-1.0 does not adopt.

---

## 10.2 Boundary Representation

A separate boundary geometry MAY be derived or preserved.

Such a geometry SHALL remain derivative unless explicitly incorporated as part of the canonical Ground Definition under this Specification.

---

## 10.3 Visual Edge Distinction

A visual, geographic, rendered, experiential, or recognizable edge MAY coincide with the canonical limit.

It is not architecturally identical to the canonical limit.

---

# 11. Constitutional Validity Conditions

A candidate Ground Definition MAY be mathematically valid yet constitutionally inadmissible.

A candidate canonical instance SHALL satisfy all of the following before adoption.

## 11.1 Singularity

Exactly one canonical Ground Definition SHALL govern.

No parallel canonical World-space may exist.

---

## 11.2 Existence

The induced World-space SHALL be non-empty:

```text
W_D ≠ ∅
```

An empty Ground may be used in synthetic testing but SHALL NOT be adopted as BitPangea's canonical World-space.

---

## 11.3 Connectedness

`W_D` SHALL be connected under the topology inherited from FSF.

Connectedness SHALL remain true under supported compatible refinement.

Connectedness SHALL NOT be interpreted as requiring:

- hole-freedom;
- simple connectedness;
- convexity;
- one boundary component;
- recognizable silhouette;
- additional topology not independently established.

---

## 11.4 Extent Conformity

`W_D` SHALL conform to the constitutional Extent of The World.

This Specification does not itself choose that exact canonical instance.

## 11.5 Production Placement Conformity

For the current canonical FSF lineage:

```text
FSF-SPEC-1.0
```

the complete production World-space instance SHALL satisfy:

```text
W_D ⊂ interior([-500,000,+500,000]²)
```

No production World-space boundary point may coincide with the placement-envelope boundary.

This is a lower-layer inherited constraint.

It does not assign geographic, Parcel, Frontier, ownership, or experiential meaning to the outer Survey reserve.

---

# 12. Definition Validity

A candidate Ground Definition `D` is Specification-valid only if every condition below is satisfied.

## 12.1 Structural Validity

`D` SHALL:

- conform to the canonical grammar;
- parse deterministically;
- contain only permitted constructs;
- resolve every required dependency;
- terminate under validation.

---

## 12.2 Semantic Validity

`D` SHALL induce exactly one total deterministic predicate:

```text
M_D : S → {WORLD, NON_WORLD}
```

---

## 12.3 Dependency Validity

Every FSF dependency used by `D` SHALL be:

- declared;
- compatible with the governing dependency declaration;
- semantically available under the identified FSF lineage;
- within the capability surface actually adopted by that FSF lineage.

---

## 12.4 Layer-Boundary Validity

`D` SHALL contain no higher-layer canonical meaning prohibited by the Spatial Ground Requirements.

---

## 12.5 Constitutional Admissibility

For canonical instance adoption, the induced `W_D` SHALL satisfy:

- singularity;
- non-emptiness;
- connectedness;
- Extent conformity.

---

# 13. Membership Evaluation Procedure

A conforming evaluator SHALL conceptually perform the following sequence.

```text
1. Receive candidate Survey expression.
2. Validate and canonicalize through FSF.
3. If FSF-invalid → return INVALID_INPUT.
4. Resolve canonical Survey meaning x.
5. Load/identify governing Ground Definition D.
6. Evaluate M_D(x).
7. Return exactly WORLD or NON_WORLD.
```

`INVALID_INPUT` is an evaluator outcome.

It is not a Ground membership value.

---

# 14. Error Model

The evaluator SHALL distinguish at minimum:

```text
WORLD
NON_WORLD
INVALID_INPUT
INVALID_DEFINITION
DEPENDENCY_ERROR
IMPLEMENTATION_ERROR
```

Only:

```text
WORLD
NON_WORLD
```

are canonical membership values.

The other outcomes describe failure to obtain or execute canonical membership, not alternate membership states.

---

# 15. Deterministic Termination

For every valid canonical Survey input and valid Ground Definition:

```text
M_D(x)
```

SHALL terminate under finite computation.

A canonical Ground Definition SHALL NOT require:

- unbounded search;
- unresolved convergence;
- nondeterministic execution;
- probabilistic acceptance;
- human judgment;
- hidden-state lookup.

---

# 16. Implementation Independence

No implementation is canonical.

A conforming implementation MAY use any internal architecture consistent with the Specification.

Different implementations MAY use:

- different programming languages;
- different parsers;
- different internal data structures;
- different exact spatial libraries;
- different optimization strategies;
- different cache structures.

They SHALL nevertheless produce identical canonical results for identical canonical inputs.

---

## 16.1 Independent Agreement Rule

For independent conforming implementations `A` and `B`:

```text
M_D^A(x) = M_D^B(x)
```

for every canonical reference vector input `x`.

---

## 16.2 Hidden-State Prohibition

A conforming implementation SHALL NOT make canonical membership depend on:

- cache contents;
- database ordering;
- current time;
- network state;
- user identity;
- ownership state;
- deployment topology;
- random number generation;
- local tolerance settings.

---

# 17. Reconstruction Contract

A competent independent party SHALL be able to reconstruct Ground meaning using only:

```text
Adopted Spatial Ground Specification
+ Adopted Ground Definition D
+ Declared governing FSF semantics
```

No original runtime system shall be required.

No historical event replay shall be required for ordinary membership reconstruction.

No proprietary database shall be required.

---

# 18. Change and Supersession

## 18.1 Pre-Instance Adoption

Before canonical instance adoption, candidate Ground Definitions MAY be revised, replaced, or rejected.

Such candidates remain non-canonical.

---

## 18.2 Post-Instance Adoption

Once the canonical World-space instance is adopted:

- routine implementation changes SHALL NOT alter membership;
- serialization migration SHALL NOT alter membership;
- storage migration SHALL NOT alter membership;
- restoration SHALL NOT alter membership;
- compatible formal-model replacement SHALL NOT alter membership;
- reconstruction SHALL NOT alter membership.

---

## 18.3 Meaning-Preserving Supersession

A successor Ground Definition representation MAY replace a predecessor only if semantic equivalence is established under the adopted equivalence procedure.

If equivalence cannot be proven, replacement SHALL NOT be treated as meaning-preserving.

---

# 19. Conformance Hooks

Spatial Ground Conformance SHALL test, at minimum:

- FSF validity precondition behavior;
- exact two-valued membership;
- deterministic repeatability;
- semantic equivalence;
- refinement closure;
- invalid-input distinction;
- definition validation;
- hidden-state independence;
- independent implementation agreement;
- constitutional constraint evaluation where applicable.

Conformance SHALL NOT redefine this Specification.

---

# 20. Reference Vector Hooks

Spatial Ground Reference Vectors SHALL include exact cases for:

- clearly WORLD locations;
- clearly NON_WORLD locations;
- canonical-limit contact;
- FSF-equivalent reference forms;
- alternate Ground representations where permitted;
- invalid Survey input;
- invalid Ground Definition input;
- refinement-sensitive evaluation;
- hole cases if the canonical instance contains holes;
- connectedness proof fixtures;
- pathological edge cases.

Reference Vectors SHALL test this Specification.

They SHALL NOT create missing Specification rules.

---

# 21. Canonical Serialization

The canonical machine-readable serialization for `D` is:

```text
SG-CJSON 1.0
```

SG-CJSON 1.0 SHALL preserve deterministic parsing, canonical ordering where required, exact reproducibility, independent implementation, durable preservation, and representation independence.

Canonical exact Survey geometry referenced by Ground SHALL remain governed by:

```text
FSF-CJSON-1.0
```

The boundary is:

```text
FSF-CJSON-1.0 → canonical Survey geometry
SG-CJSON 1.0  → canonical Ground membership expression
```

Spatial Ground SHALL NOT duplicate an FSF geometry object into a competing Ground-owned geometry grammar where a canonical FSF reference is sufficient.

The serialization format itself SHALL NOT become the semantic meaning of World-space.

---

# 22. Primary Machine-Readable Ground Definition

The canonical Ground Definition SHALL be machine-readable through SG-CJSON 1.0.

The governing production definition for the first canonical World-space instance SHALL be declarative, finite, explicit, canonicalizable, exact, independently parseable, and based on one primary FSF spatial-set reference.

For the selected production profile:

```text
root operator = fsf
one primary FSF spatial-set definition
```

No unrestricted Boolean expression tree is required for the first production instance.

Synthetic expression operators retained in test architecture do not expand the production capability surface beyond FSF-SPEC-1.0.

---

# 23. Preservation Requirements

A future canonical Ground preservation package SHALL identify at minimum:

- adopted Specification;
- adopted Ground Definition;
- exact artifact identity;
- governing FSF lineage;
- Adoption Act;
- required integrity metadata;
- required Conformance records;
- required Reference Vectors;
- format/version metadata necessary for reconstruction.

Preservation packages identify and preserve canonical authorities.

They do not become an additional source of membership truth.

---

# 24. Public and Documentation Surfaces

Public HTML, README files, explanatory maps, diagrams, status pages, and educational material MAY explain Ground.

They SHALL NOT silently redefine:

- membership;
- the canonical limit;
- Ground Definition semantics;
- FSF dependencies;
- canonical status.

Where documentation conflicts with the adopted Specification or canonical Ground Definition, the documentation is defective.

---

# 25. Non-Goals

Spatial Ground does not specify:

- Parcel identity;
- Parcel geometry as cadastral truth;
- ownership;
- ownability;
- claims;
- jurisdiction;
- settlement;
- access;
- development;
- Region meaning;
- Cluster meaning;
- terrain;
- coast;
- landform;
- infrastructure;
- social geography;
- economic geography;
- political geography;
- cultural geography;
- civilizational meaning;
- rendering;
- experience.

These belong above Ground or elsewhere in BitPangea architecture.

---

# 26. Requirements Trace

This Specification directly implements the following adopted Requirements architecture.

## Governing Head

- SG-CORE-01 — Canonical Expression and Preservation

## Core Requirements

- SG-CORE-02 — Survey Containment and Non-Identity · Day #131 FSF-SPEC-1.0 Dependency Conformance Amendment
- SG-CORE-03 — Exact Membership
- SG-CORE-04 — One Canonical Definition
- SG-CORE-05 — Sole Dependence
- SG-CORE-06 — Membership Permanence
- SG-CORE-07 — Representation Independence

## Constitutional Requirements

- SG-CONST-01 — Constitutional Subordination
- SG-CONST-02 — Singularity
- SG-CONST-03 — Existence
- SG-CONST-04 — Continuity / Connectedness
- SG-CONST-05 — Extent Conformity

## Definition Requirements

- SG-DEF-03 — Finite Expression and Decidable Membership
- SG-DEF-04 — Decidable Definition Validity
- SG-DEF-05 — Decidable Semantic Equivalence
- SG-DEF-06 — Refinement Closure

## Downward Contract

- SG-DOWN-01 — Reference Without Redefinition

## Layer Boundary

- SG-BOUND-01 — Membership-Only Semantics

## Institutional Hook

- SG-IF-01 — Canonical Status by Adoption

---

# 27. Gate B Reconciliation Standing

The drafting decisions originally listed in the Day #122 draft have since been substantially closed through the Spatial Ground formal stack.

Current standing:

1. **Canonical Ground Definition grammar** — established through SG-CJSON 1.0.
2. **Canonical machine-readable serialization** — SG-CJSON 1.0 selected.
3. **Production operator profile** — one primary `fsf` root; unrestricted Boolean / composite-result closure excluded from the current production profile.
4. **Definition validation** — established through Spatial Ground Conformance and SG-CJSON validation rules.
5. **Semantic equivalence** — governed by canonical membership equivalence and primary-form precedence.
6. **Canonical ordering** — established where required by SG-CJSON normalization.
7. **Artifact identity / version fields** — carried by SG-CJSON 1.0 / SG-SPEC-1.0 profile metadata.
8. **Dependency declaration** — now anchored to FSF-SPEC-1.0.
9. **Error taxonomy** — established in Section 14 and Conformance.
10. **FSF coarse/fine dependency** — no unresolved dependency is required by the selected first production profile.
11. **Adversarial review** — completed for the executable profile.
12. **Independent implementation feasibility** — demonstrated by independent Python and JavaScript implementations with zero mismatch across executable vectors.

Day #132 further re-evaluates SG-RV-024 against FSF-SPEC-1.0.

Result:

```text
23 PASS
1 EXPECTED RESERVED BLOCK
0 FAIL
0 CROSS-IMPLEMENTATION MISMATCH
```

SG-RV-024 is outside the adopted FSF-SPEC-1.0 Mandatory Core and therefore does not block the selected production profile.

---

# 28. Gate-B Readiness Rule

Gate B entry prerequisites are satisfied for the selected production profile because:

- this Specification is structurally complete and reconciled to FSF-SPEC-1.0;
- SG-CJSON 1.0 is selected;
- the production operator profile is bounded;
- no unresolved Ground-critical FSF dependency remains hidden;
- semantic equivalence is decidable under the adopted Ground rules;
- definition validity is decidable;
- the canon-form policy is reflected;
- adversarial review has been completed;
- independent implementation feasibility has been demonstrated;
- the only historical blocked vector is an expected reserved block outside the adopted FSF-SPEC-1.0 Mandatory Core.

Therefore:

```text
GATE B — OPEN
SPECIFICATION — READY FOR GATE B ADOPTION REVIEW
```

This does not itself adopt the Specification.

---

# 29. Reconciled Standing

**SPATIAL GROUND SPECIFICATION — DRAFT FOR GATE B ADOPTION REVIEW**

**RECONCILED TO — FSF-SPEC-1.0**

**FORMAL MODEL — CANONICAL MEMBERSHIP PREDICATE MODEL**

**CORE SEMANTICS — ESTABLISHED**

**CANON-FORM POLICY — INCORPORATED**

**FSF DEPENDENCY BOUNDARY — INCORPORATED**

**SURVEY DOMAIN — [-1,000,000,+1,000,000]²**

**PRODUCTION PLACEMENT ENVELOPE — [-500,000,+500,000]²**

**CANONICAL GROUND DEFINITION GRAMMAR — SG-CJSON 1.0**

**CANONICAL FSF MACHINE INTERCHANGE — FSF-CJSON-1.0**

**PRODUCTION ROOT PROFILE — ONE `fsf` ROOT / ONE PRIMARY FSF SPATIAL-SET DEFINITION**

**GENERAL BOOLEAN / COMPOSITE-RESULT CLOSURE — OUTSIDE CURRENT PRODUCTION PROFILE**

**SG-RV-024 — EXPECTED RESERVED BLOCK**

**CANONICAL WORLD-SPACE INSTANCE — NOT YET ADOPTED**

**GATE B — OPEN**

**NEXT — GATE B ADOPTION REVIEW**

---

# 30. Governing Closing Statements

> **Spatial Ground does not define where space is. FSF does. Spatial Ground defines whether valid canonical Survey space participates in The World.**

> **Membership is the Ground truth. Geometry expresses it. Representations carry it. Implementations evaluate it. None of those substitutes for it.**

> **For every valid canonical Survey location, one adopted definition must yield one exact answer: World-space or non-World-space.**
