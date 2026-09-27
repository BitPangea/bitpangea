# Spatial Ground Specification

**BitPangea · The Atlas · Spatial Ground**  
**Document Type:** Specification  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** DRAFT FOR GATE B REVIEW  
**Normative Scope:** Spatial Ground only  
**Formal Model:** Canonical Membership Predicate Model (CMPM)  
**Requirements Basis:** Adopted Spatial Ground Requirements  
**Dependency Basis:** `SG_FSF_Dependency_Declaration.md`  
**Model-Selection Basis:** `SG_Formal_Model_Selection_Record.md`  
**Canon-Form Basis:** `SG_Canon_Form_Policy.md`  
**Canonical Instance Effect:** None. This Specification does not select or adopt the canonical World-space instance.

---

## 0. Status and Normative Convention

This document specifies **how Spatial Ground works**.

The adopted Spatial Ground Requirements define **what must remain true**.

This Specification defines the formal semantic structure that satisfies those Requirements through the selected:

> **Canonical Membership Predicate Model (CMPM)**

The normative keywords **MUST**, **MUST NOT**, **SHALL**, **SHALL NOT**, **MAY**, and **SHOULD** are used in their ordinary architectural sense within BitPangea.

This Specification does not:

- redefine the Foundational Survey Fabric;
- select unresolved FSF mathematics;
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

denote the canonical domain of valid Survey locations supplied by the governing Foundational Survey Fabric specification or compatible lineage.

Spatial Ground does not define `S`.

Spatial Ground SHALL consume `S` by reference.

A Survey location outside `S`, malformed under FSF, unresolved under FSF, or otherwise invalid under FSF SHALL NOT be treated as a valid Ground membership input.

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

Spatial Ground SHALL consume the following FSF-owned truths by reference where applicable:

- Survey Domain;
- valid Survey reference;
- canonical Survey meaning;
- reference identity and semantic equality;
- coordinate framework;
- canonical position;
- canonical extent;
- geometry;
- topology;
- connectedness predicates;
- boundary semantics;
- exact spatial operations;
- measure;
- scale;
- precision;
- refinement;
- adjacency;
- compatible lineage and translation/correspondence.

Spatial Ground SHALL NOT define competing versions of these concepts.

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

The exact canonical machine-readable syntax for `D` SHALL be established before Gate B adoption.

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

The Ground Definition MAY include formal rules necessary to determine membership.

It MAY invoke exact FSF expressions and operations by reference.

It MAY use a finite expression language including, if later adopted:

- exact inclusion predicates;
- exact exclusion predicates;
- exact set composition;
- exact Boolean composition;
- exact FSF geometry predicates;
- exact FSF spatial relations.

The exact permitted operator set remains a Gate-B drafting decision and SHALL be fixed before adoption of this Specification.

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

The exact grammar and serialization are part of this Specification's remaining drafting work.

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
- semantically available under the identified FSF lineage.

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

Future Spatial Ground Conformance SHALL test, at minimum:

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

Future Reference Vectors SHALL include exact cases for:

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

The exact canonical serialization for `D` remains to be finalized before Gate B adoption.

The selected serialization SHALL satisfy:

- deterministic parsing;
- canonical ordering where ordering matters;
- no semantically irrelevant ambiguity;
- stable artifact identity;
- exact reproducibility;
- independent implementation;
- durable preservation;
- format migration without place migration.

The serialization format itself SHALL NOT become the semantic meaning of World-space.

---

# 22. Primary Machine-Readable Ground Definition

The canonical Ground Definition SHALL be machine-readable.

The exact grammar remains to be selected before Gate B.

The preferred design characteristics are:

- declarative rather than procedural;
- finite;
- explicit;
- canonicalizable;
- exact;
- independently parseable;
- easy to validate;
- independent of one software library;
- capable of invoking exact FSF semantics by reference.

A constructive inclusion–exclusion expression language remains a strong candidate mechanism.

It is not adopted by this draft merely because the semantic model has been selected.

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

- SG-CORE-02 — Survey Containment and Non-Identity
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

# 27. Drafting Decisions Still Required Before Gate B

This draft is structurally complete but not yet ready for adoption.

The following must be closed before Gate B:

1. **Canonical Ground Definition grammar**
2. **Canonical machine-readable serialization**
3. **Exact permitted expression/operator set**
4. **Exact definition-validation procedure**
5. **Exact semantic-equivalence procedure**
6. **Exact canonical ordering rules where required**
7. **Exact artifact identity / version field rules**
8. **Exact dependency declaration syntax**
9. **Exact error taxonomy and return form**
10. **Resolution of any FSF coarse/fine dependency actually required by the chosen expression language**
11. **Adversarial review of the draft Specification**
12. **Independent implementation feasibility review against the final grammar**

These are Specification-completion tasks.

They are not reasons to reopen the adopted Requirements or formal model selection.

---

# 28. Gate-B Readiness Rule

Gate B SHALL NOT open until:

- this Specification is complete;
- the canonical Ground Definition grammar is fully specified;
- no unresolved Ground-critical FSF dependency remains hidden;
- semantic equivalence is decidable;
- definition validity is decidable;
- the selected canon-form policy is fully reflected;
- the Specification survives adversarial review;
- independent implementation is judged feasible from public normative records alone.

---

# 29. Draft Standing

**SPATIAL GROUND SPECIFICATION — DRAFTED**

**FORMAL MODEL — CANONICAL MEMBERSHIP PREDICATE MODEL**

**CORE SEMANTICS — ESTABLISHED**

**CANON-FORM POLICY — INCORPORATED**

**FSF DEPENDENCY BOUNDARY — INCORPORATED**

**CANONICAL GROUND DEFINITION GRAMMAR — NOT YET SELECTED**

**CANONICAL SERIALIZATION — NOT YET SELECTED**

**CANONICAL WORLD-SPACE INSTANCE — NOT SELECTED**

**GATE B — NOT YET OPEN**

---

# 30. Governing Closing Statements

> **Spatial Ground does not define where space is. FSF does. Spatial Ground defines whether valid canonical Survey space participates in The World.**

> **Membership is the Ground truth. Geometry expresses it. Representations carry it. Implementations evaluate it. None of those substitutes for it.**

> **For every valid canonical Survey location, one adopted definition must yield one exact answer: World-space or non-World-space.**
