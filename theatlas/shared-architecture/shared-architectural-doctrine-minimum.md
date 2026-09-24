# Atlas Shared Architectural Doctrine — Minimum Gate 0 Edition

**BitPangea · The Atlas**  
**Document Type:** Shared Architectural Doctrine  
**Edition:** Minimum Gate 0 Edition  
**Creator Period:** Day #119 · September 23, 2026  
**Status:** Ready for Gate 0 Use  
**Scope:** Cross-layer doctrine required before Spatial Ground Requirements adoption  
**Normative Character:** Atlas-level architectural doctrine; non-constitutional  
**Adoption Scope:** Minimum sections only. This edition does not attempt to complete all future shared architecture.

---

## 1. Purpose

This document preserves the minimum cross-layer architectural doctrine required before adoption of the Spatial Ground Requirements.

It exists because some architectural rules apply to more than one layer and therefore must not be owned, duplicated, or silently redefined by Spatial Ground itself.

This doctrine is intentionally narrow.

It establishes only the shared rules necessary to support the present Foundational Survey Fabric → Spatial Ground relationship and to protect the boundaries around Spatial Ground.

It does not:

- define constitutional truth;
- replace The Declaration, The Foundation, The Codex, or The Lexicon;
- define the Foundational Survey Fabric;
- define Spatial Ground membership;
- define General Spatial Interpretation;
- define the Parcel Cadastre;
- select the Spatial Ground formal membership model;
- define implementation technology;
- establish higher-layer meaning.

---

## 2. Standing and Authority

This doctrine belongs to **The Atlas**.

It is:

- architectural, not constitutional;
- subordinate to all applicable constitutional sources;
- adopted and revised through Atlas governance;
- shared across layers rather than owned by one domain.

Where this doctrine conflicts with a constitutional source, the constitutional source governs.

Where this doctrine conflicts with an adopted layer Requirement that is itself constitutionally valid, the conflict must be resolved through Atlas architectural review rather than by silent reinterpretation.

This doctrine does not acquire constitutional status by repetition, implementation, or adoption within The Atlas.

---

## 3. Layer Sequence

The current spatial architectural dependency sequence is:

> **Foundational Survey Fabric → Spatial Ground → General Spatial Interpretation → Parcel Cadastre**

The sequence states dependency and responsibility ordering.

It does not imply that every system must expose these layers as separate runtime services, code modules, databases, repositories, or implementations.

Architectural dependency and implementation packaging are different questions.

---

## 4. One-Line Responsibility of Each Layer

### 4.1 Foundational Survey Fabric

The Foundational Survey Fabric supplies canonical spatial reference and mathematics.

It owns the Survey Domain and the spatial truths necessary to reference, compare, measure, relate, refine, and translate canonical Survey space.

---

### 4.2 Spatial Ground

Spatial Ground adds canonical participation in The World.

It canonically expresses and preserves which canonical Survey space is BitPangea World-space.

Its native content is World membership and nothing else.

---

### 4.3 General Spatial Interpretation

General Spatial Interpretation interprets shared World-space without redefining Survey truth or World membership.

It may add higher spatial meaning but may not invent, alter, complete, or relocate canonical World-space.

---

### 4.4 Parcel Cadastre

The Parcel Cadastre establishes Parcel truth over already-established spatial architecture.

It does not originate canonical Survey reference or World membership.

---

## 5. Placement Principles

### 5.1 Lowest Correct Layer

A responsibility belongs at the **lowest layer that correctly owns it**.

This does not mean the deepest conceivable layer.

A responsibility must not be pushed downward merely because it can technically be implemented there.

Likewise, it must not be pushed upward merely because a higher layer can derive, consume, or display it.

---

### 5.2 Truth at the Owning Layer

A truth should originate at the layer whose architectural role requires it.

Other layers may:

- reference it;
- consume it;
- derive consequences from it;
- validate against it;
- represent it.

They may not duplicate its normative authority.

---

### 5.3 Dependency Is Not Ownership

A layer may depend on another layer without acquiring authority over that layer's truth.

Spatial Ground depends on FSF mathematics.

That dependence does not make FSF mathematics Ground-owned.

Similarly, higher layers depend on Spatial Ground membership without acquiring membership authority.

---

## 6. Responsibility Integrity

### 6.1 No Duplicated Responsibility

No architectural responsibility should exist as independently authoritative truth in more than one layer.

Replication of data, representations, caches, views, tests, or documentation is permitted.

Duplication of normative authority is not.

---

### 6.2 No Orphaned Responsibility

Every responsibility required by the architecture must have an identified owner.

A responsibility may not be excluded from one layer merely to leave it undefined everywhere else.

When placement is uncertain, the question must be resolved explicitly rather than hidden inside implementation practice.

---

### 6.3 Closed Layer Responsibility

A layer's responsibilities do not expand through:

- repeated implementation practice;
- convenience;
- convention;
- terminology drift;
- operational dependency;
- popularity;
- accidental coupling.

Scope changes require explicit architectural treatment.

---

## 7. FSF–Ground Contract

This section states the minimum shared dependency assumptions relied upon by Spatial Ground.

These assumptions do not impose new Requirements on Spatial Ground.

They define what Spatial Ground expects from its lower architectural dependency.

### DA1 — Survey Sufficiency

The Foundational Survey Fabric must be capable of expressing all Survey space required by the adopted Spatial Ground definition.

If this assumption fails, Spatial Ground must not invent a parallel spatial regime.

The deficiency returns to the owning architecture.

---

### DA2 — Reference Stability

Across a declared compatible Survey lineage, a valid canonical Survey reference must retain stable spatial meaning according to FSF rules.

Spatial Ground relies on that stability when preserving membership over time.

---

### DA3 — Determinate Reference Equality

The Foundational Survey Fabric must provide a determinate rule for whether two valid Survey references denote the same Survey location where such comparison is supported.

Spatial Ground must not define an independent equality system.

---

### DA4 — Refinement Compatibility

Supported Survey refinement must operate under rules compatible with coarser canonical Survey meaning.

Spatial Ground relies on refinement as deeper evaluation of established membership, not as a source of new membership truth.

---

### DA5 — Location / Extent Semantics

The Foundational Survey Fabric must define whether supported Survey references denote locations, extents, or other spatial objects relevant to the contract.

Spatial Ground must not silently invent those semantics.

---

### DA6 — Topology Sufficient for Connectedness

The Foundational Survey Fabric must provide the topology necessary to evaluate the connectedness requirement expressed by Spatial Ground.

Spatial Ground owns the constitutional expression of connectedness, not the underlying topological mathematics.

---

### DA7 — Finite Survey Domain

Spatial Ground relies on the Foundational Survey Fabric providing the finite Survey Domain within which Ground membership operates.

Spatial Ground must not redefine Survey finitude.

---

## 8. Failed Dependency Rule

If a dependency assumption fails, the deficiency must return to the layer that owns the missing responsibility.

The consuming layer must not patch the gap by silently creating parallel lower-layer authority.

Accordingly:

- Spatial Ground does not invent coordinates because FSF lacks a needed coordinate rule;
- Spatial Ground does not invent topology because FSF lacks a needed topological predicate;
- General Spatial Interpretation does not invent World membership because Ground is incomplete;
- Parcel Cadastre does not invent Ground or FSF truth because a downstream need arises.

A failed dependency is evidence of an architectural gap.

It is not permission for the dependent layer to absorb another layer's role.

---

## 9. Deficiency Routing

A demonstrated deficiency is routed according to ownership.

### 9.1 Downward deficiency

If a higher layer requires a lower-layer capability that legitimately belongs below, the issue returns downward to the owning layer or to shared architecture.

The higher layer does not compensate by creating competing lower-layer machinery.

---

### 9.2 Upward deficiency

If a proposed responsibility requires meaning beyond a layer's proper scope, it moves upward.

For Spatial Ground, any responsibility that requires interpretation beyond World membership belongs above Ground unless independently justified otherwise.

---

### 9.3 Constitutional dependency

If resolving a design or architectural question would alter or depend on constitutional identity, permanence, an adopted Codex, a World Property, or another foundational truth, the question must return to constitutional inquiry.

The Atlas may route the question.

The Atlas does not acquire constitutional authority by routing it.

---

## 10. Boundary Protection

Every layer must protect both of its interfaces:

- the boundary below, so it does not duplicate or redefine inherited truth;
- the boundary above, so it does not pre-design or absorb higher-layer meaning.

For Spatial Ground this means:

### Below Ground

Spatial Ground must not redefine:

- Survey Domain;
- Survey reference;
- coordinates;
- geometry;
- topology;
- measure;
- scale;
- precision;
- refinement;
- adjacency;
- Survey equality;
- translation across Survey versions.

### Above Ground

Spatial Ground must not determine:

- Parcel identity;
- Parcel eligibility;
- ownership;
- rights;
- jurisdiction;
- settlement;
- development;
- Regions;
- Clusters;
- terrain;
- morphology;
- visible landform;
- experiential edge;
- cultural meaning;
- economic meaning;
- legal meaning;
- social meaning.

---

## 11. Cross-Layer Authority Rule

Technical correctness does not itself create architectural authority.

A lower or higher layer, implementation, framework, test, cache, database, visualization, service, or institution may correctly compute a result without becoming the canonical owner of that result.

Authority follows adopted architectural responsibility, not convenience or computation.

---

## 12. Recovery and Reconstruction Principle

Recovery should proceed from deeper canonical truth toward higher derived meaning.

For the present spatial architecture, the intended recovery direction is:

> **Survey truth → Ground membership → higher interpretation → Parcel / downstream systems**

A higher-layer artifact should not be used to redefine lower-layer canonical truth merely because it survived while a lower-layer representation was lost.

Where lower-layer truth is reconstructable from its own adopted records, recovery restores that truth first.

**Note:** detailed cross-layer recovery procedures may be expanded later. Only the ordering principle is preserved here for current architectural consistency.

---

## 13. Scope Change Rule

A proposed new responsibility for a layer must satisfy all of the following before it is added:

1. removing the responsibility would leave that layer's canonical role incomplete;
2. placing it lower would assign it to a layer that does not properly own it;
3. placing it higher would force another layer to invent the truth before it can use it;
4. the new responsibility does not duplicate an existing owner;
5. the new responsibility does not silently constitutionalize an Atlas design choice.

A scope change is architectural.

It is not inferred from implementation practice.

---

## 14. Minimum Shared Doctrine Required by Spatial Ground

For Gate 0, Spatial Ground relies on the following portions of this doctrine:

- §2 Standing and Authority;
- §3 Layer Sequence;
- §4 One-Line Responsibility of Each Layer;
- §5 Placement Principles;
- §6 Responsibility Integrity;
- §7 FSF–Ground Contract;
- §8 Failed Dependency Rule;
- §9 Deficiency Routing;
- §10 Boundary Protection;
- §11 Cross-Layer Authority Rule;
- §13 Scope Change Rule.

These sections are sufficient for Spatial Ground Requirements adoption.

The following may mature later without blocking Gate A:

- broader minimal-coupling doctrine;
- complete recovery procedures;
- layer-dissolution or merge tests;
- contracts between layers above Spatial Ground;
- mature shared architecture for future runtime or experience domains.

---

## 15. What This Doctrine Does Not Yet Decide

This minimum edition does not decide:

- whether the Foundational Survey Fabric is formally classified as an Atlas domain;
- where every future inter-layer contract will physically reside;
- exact Survey equality mechanics;
- exact Survey lineage compatibility mechanics;
- exact refinement mechanics;
- continuous versus discrete Survey realization;
- exact higher-layer contracts above Ground;
- whether any future layer should merge or dissolve;
- implementation packaging.

Those matters are deferred to their owning architecture or later doctrine expansion.

---

## 16. Relationship to Spatial Ground Requirements

The Spatial Ground Requirements may cite this doctrine for cross-layer rules but must not duplicate this doctrine as independent Ground Requirements.

In particular:

- SG-DOWN-01 relies on the FSF ownership boundary;
- SG-BOUND-01 relies on lowest-correct-layer placement;
- SG-BOUND-02 relies on closed responsibility and governed scope change;
- SG-UP-03 relies on deficiency routing and higher-layer non-authority;
- the FSF dependency assumptions referenced in the Requirements are governed here rather than becoming Ground-native obligations.

This preserves the rule:

> **Shared architectural doctrine governs relationships among layers. Layer Requirements govern what must remain true within the layer.**

---

## 17. Gate 0 Result — Minimum Atlas Shared Architectural Doctrine

The minimum shared architectural doctrine required before Spatial Ground Requirements adoption is now available.

### Confirmed

- Atlas-level, non-constitutional status stated;
- spatial layer sequence stated;
- each relevant layer's responsibility stated;
- lowest-correct-layer placement rule stated;
- no-duplication rule stated;
- no-orphan rule stated;
- FSF–Ground dependency assumptions DA1–DA7 stated;
- failed dependency rule stated;
- upward, downward, and constitutional deficiency routing stated;
- Spatial Ground's lower and upper boundaries protected;
- technical correctness separated from canonical authority;
- scope change protected from implementation drift;
- unresolved Specification-level FSF details explicitly deferred.

### Gate 0 #3 Standing

> **MINIMUM ATLAS SHARED ARCHITECTURAL DOCTRINE — COMPLETE**

The next Gate 0 task is:

> **#4 — Governance Baseline + Adoption Act Template**

---

**End of Atlas Shared Architectural Doctrine — Minimum Gate 0 Edition**
