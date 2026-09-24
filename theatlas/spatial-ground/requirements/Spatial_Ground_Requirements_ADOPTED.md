# Spatial Ground Requirements

**BitPangea · The Atlas**  
**Document Type:** Requirements  
**Status:** Adopted  
**Period:** Creator Period  
**Architecture Basis:** Spatial Ground Architectural Resolution Passes #1–#4, including the source-reconciled amendments to Pass #3 and Pass #4  
**Normative Scope:** Spatial Ground only  
**Adoption:** Gate A · Adopted September 23, 2026  
**Adoption Act:** `/theatlas/spatial-ground/governance/SG_Requirements_Adoption_Act.md`

---

## 0. Status and Normative Convention

This document states the Requirements for **Spatial Ground**.

Spatial Ground is the Atlas layer that canonically expresses and preserves which canonical Survey space is BitPangea World-space.

These Requirements define **what must remain true**. They do not select the formal membership model, prescribe an implementation, define the Foundational Survey Fabric, design General Spatial Interpretation, parcelize The World, or establish higher-layer meaning.

The terms **MUST**, **MUST NOT**, **SHALL**, and **SHALL NOT** are normative.

A statement marked **Consequence** is normatively entailed by named parent Requirements and is included to provide a stable interface or downstream framework hook. A Consequence does not create an additional independent obligation.

### 0.1 Governing Authority

The constitutional and architectural order relevant to Spatial Ground is:

> Constitutional truth constrains → the Creator designs the exact permissible spatial expression in The Atlas → a recorded Adoption Act adopts one definition → Spatial Ground canonically expresses and preserves it → higher layers interpret it → implementation realizes it.

An adopted Spatial Ground definition is canonical because it was adopted by the authorized recorded act. Correctness, publication, implementation, use, certification, custody, popularity, or technical control do not themselves confer canonical status.

### 0.2 Normative Sources and Dependencies

Spatial Ground is subordinate to the constitutional sources of BitPangea, including:

- **The Declaration**;
- **Codex ST-IV — The World**;
- **Codex WP-S-I — The Extent**;
- **The Codex Principles**;
- the applicable adopted Codex and Charter records;
- the Foundational Survey Fabric specification and compatible lineage relied upon by the adopted Spatial Ground definition;
- applicable Atlas shared architectural doctrine.

Spatial Ground consumes Survey facts by reference. It does not acquire authority to redefine them.

---

## 1. Purpose and Governing Sentence

### SG-CORE-01 — Canonical Expression and Preservation

**Spatial Ground SHALL canonically express and preserve which canonical Survey space is BitPangea World-space.**

This Requirement carries two governing glosses:

1. Spatial Ground does **not** create, originate, or constitutionalize The World.
2. Spatial Ground gives exact and durable canonical expression to the constitutional constraints and the adopted Creator-period spatial design that together determine World-space.

The constitutional identity of The World precedes Spatial Ground. The exact permissible World-space definition may nevertheless be intentionally designed within the room left open by the Constitution before it is adopted.

---

## 2. Constitutional Subordination and Expressed Constraints

### SG-CONST-01 — Constitutional Subordination

Spatial Ground **MUST** remain subordinate to the constitutional sources from which its expressed constraints arise.

Spatial Ground **MUST NOT** redefine, supersede, originate, or broaden a constitutional truth.

Each constitutional constraint expressed by Spatial Ground **MUST** be traceable to its upstream source.

A contradiction between Spatial Ground and an applicable constitutional source **MUST** resolve in favor of the constitutional source.

### SG-CONST-02 — Singularity

Spatial Ground **MUST** express BitPangea as one World through one canonical World-space.

No duplicate, parallel, alternative, or competing canonical World-space **MAY** exist.

This Requirement expresses The Declaration's foundational commitments that BitPangea is **one World**, is **incapable of duplication**, and is a **single digital supercontinent**.

It does not determine which Survey space constitutes World-space.

### SG-CONST-03 — Existence

The canonical World-space definition **MUST** be non-empty.

An empty World-space may be formally representable for testing, synthetic use, intermediate construction, or other non-canonical purposes, but it **MUST NOT** be adopted as BitPangea's canonical World-space.

This Requirement expresses the upstream truth that The World exists; it does not fix World-space size, shape, position, geometry, or representation.

### SG-CONST-04 — Continuity

Canonical World-space **MUST** be connected under the topology inherited from the Foundational Survey Fabric.

Connectedness **MUST** remain true under supported Survey refinement.

This Requirement expresses the constitutional recognition of The World as a singular, continuous cartographic whole.

Connectedness **MUST NOT** be interpreted as requiring hole-freedom, simple connectedness, convexity, any fixed number of limit components, any recognizable silhouette, or any additional topology not independently established.

### SG-CONST-05 — Extent Conformity

The adopted World-space definition **MUST** conform to the constitutional Extent of The World.

For Spatial Ground, Extent establishes that The World possesses finite, permanent spatial scope. Extent does **not** independently determine the exact membership set, geometry, representation, measurement, membership limit, implementation, or interpretation of that scope.

Constitutional Extent **MUST NOT** be substituted for the canonical membership definition when answering whether a particular Survey location is World-space.

A candidate definition that violates constitutional Extent **MUST NOT** be validly adopted.

### 2.1 Constitutional Context Carried Through Other Requirements

The following constitutional truths are carried without being duplicated as separate independent Ground Requirements:

- **Finitude** is carried through SG-CORE-02.
- **No expansion and permanence of The World** are carried through SG-CORE-06.
- **No duplication** is carried through SG-CONST-02.
- **21,000,000 Parcels** is not a Spatial Ground responsibility.
- **Single digital supercontinent** contributes singularity and continuity but does not add Ground-level geometry or visual form.

---

## 3. World Membership

### SG-CORE-02 — Survey Containment and Non-Identity

World-space **MUST** consist of canonical Survey space within the finite Survey Domain.

World-space **MAY** coincide in extent with the entire Survey Domain, but World-space **MUST NOT** be defined merely as “the Survey Domain.”

If the Survey Domain later changes in a manner compatible with its own architecture, that change alone **MUST NOT** alter established World-space.

Within the Survey Domain, non-World-space is the complement of World-space with respect to the canonical membership definition.

Spatial Ground **MUST NOT** assign separate intrinsic meaning to non-World-space.

### SG-CORE-03 — Exact Membership

For every valid Survey location within the operative domain of Spatial Ground, the canonical definition **MUST** determine exactly one membership answer.

The membership function SHALL satisfy all of the following:

#### SG-CORE-03a — Totality

Every valid Survey location **MUST** receive a canonical membership answer.

There is no canonical membership state of unknown, pending, unresolved, indeterminate, or partially decided.

#### SG-CORE-03b — Two-Valued Membership

The canonical membership vocabulary **MUST** contain exactly two membership values:

- World-space;
- non-World-space.

No third membership state, degree of membership, probabilistic membership, partial membership, or mixed membership **MAY** be introduced.

A mixed result for an area or extent is a derived spatial classification and **MUST NOT** become a third point/location membership value.

#### SG-CORE-03c — Determinism

The same valid Survey location, evaluated under the same canonical definition and inherited Survey semantics, **MUST** always produce the same membership answer.

System ignorance, implementation disagreement, missing runtime state, unavailable infrastructure, incomplete caching, or failure of an implementation **MUST NOT** be treated as indeterminacy in canonical membership.

### Consequence SG-LIM-01 — Canonical Limit

**Parents:** SG-CORE-03a, SG-CORE-04, SG-DEF-01.

The canonical limit is the exact consequence of where the membership answer changes.

Membership at and around the limit **MUST** remain determinate under the adopted definition.

The canonical limit **MAY** be referenced by description and need not be represented as an independent entity.

The canonical limit and any visual, experiential, geographic, or recognizable edge **MAY** coincide, but they are not the same architectural thing.

---

## 4. One Definition and Sole Dependence

### SG-CORE-04 — One Canonical Definition

Exactly one canonical determination of BitPangea World-space **MUST** govern at any time.

No implementation, derived representation, copy, cache, interpretation, institution, majority, consensus, or alternative formalization **MAY** establish a second canonical World-space.

Where several records or representations exist, their authority and relationship to the canonical definition **MUST** be governed explicitly.

### SG-CORE-05 — Sole Dependence

Canonical membership **MUST** depend on nothing except:

1. the canonical Spatial Ground definition and its governing formal rules; and
2. the inherited Survey specification and declared compatible lineage on which that definition relies.

Accordingly:

#### SG-CORE-05a — Independence from Higher or Later Meaning

Canonical membership **MUST NOT** depend on later interpretation, Parcel identity, ownership, settlement, governance, rights, construction, Regions, Clusters, terrain, experience, economics, culture, legal status, presentation, or any other higher-layer concept.

Nothing above Spatial Ground **MAY** add, remove, complete, relocate, reinterpret, or correct World membership.

#### SG-CORE-05b — Independence from Operational and Institutional State

Canonical membership **MUST NOT** depend on runtime state, service availability, a database, cache, network, proprietary system, software version, hardware platform, custodian, steward, governance body, private key, recurring institutional act, or undocumented human knowledge.

No hidden condition or hidden rule **MAY** be required to determine membership.

#### SG-CORE-05c — Derived Representations Have No Competing Authority

Materialized maps, indexes, tiles, caches, lookup tables, visualizations, exports, implementations, replicas, and other derived representations **MUST** yield to the canonical definition if they disagree with it.

A derived artifact **MUST NOT** become a competing source of World-space truth merely because it is operational, convenient, widely used, or independently stored.

---

## 5. Permanence and Representation

### SG-CORE-06 — Membership Permanence

Once the canonical World-space instance has been adopted, its membership **MUST NOT** change through any act available within Spatial Ground, The Atlas, stewardship, implementation, ordinary governance, or post-Creator architectural succession.

No valid architectural act **MAY** add World-space, remove World-space, relocate World-space, or replace one valid canonical membership set with another.

Correction of a defective record, meaning-preserving supersession, formal-model replacement with proven semantic continuity, scope change, implementation migration, restoration, or reconstruction **MUST NOT** alter established membership.

Adoption exhausts Creator design authority over the canonical World-space instance.

### Consequence SG-IF-03 — No Architectural World-Space Change Authority

**Parents:** SG-CORE-06, SG-CONST-01.

Spatial Ground contains no dormant authority, procedure, or governance mechanism by which established World-space can be changed.

The Declaration preserves the foundational declaration unless a **formal constitutional revision** is made. Any such revision is upstream of Spatial Ground and The Atlas and is not defined by this document.

If a valid upstream constitutional revision were ever to affect a foundational constraint expressed by Spatial Ground, the matter **MUST** return upward under SG-CONST-01. Spatial Ground **MUST NOT** treat constitutional revision as an internal change mechanism.

### SG-CORE-07 — Representation Independence

The identity of the canonical World-space definition **MUST** be semantic rather than artifact-specific.

A representation, encoding, storage format, file, software implementation, or other artifact **MAY** change while the canonical World-space meaning remains unchanged.

No representation change is permissible as a meaning-preserving change unless semantic equivalence is established under the governing rules.

Artifact identity **MUST NOT** be treated as semantic identity, and semantic identity **MUST NOT** require byte identity.

---

## 6. Canonical Definition Constraints

### Consequence SG-DEF-01 — Unique Primary Authority

**Parent:** SG-CORE-04.

For each semantic element governed by Spatial Ground, one primary normative artifact or rule **MUST** be declared.

No semantic element **MAY** have two independently authoritative forms.

Authority chains **MUST NOT** be circular.

A derived artifact **MUST** identify the authority from which it derives.

### Consequence SG-DEF-02 — Closure

**Parents:** SG-CORE-03, SG-CORE-05b.

The canonical definition, the governing Spatial Ground rules, and the inherited Survey specification together **MUST** be sufficient to determine every membership answer without tacit knowledge, hidden rules, undocumented conventions, original runtime state, or private explanation.

A competent independent party with those records **MUST** be able to reconstruct the same membership meaning.

Dependency on the Survey Fabric does not make Spatial Ground incomplete; the dependency **MUST** be explicit and bounded.

### SG-DEF-03 — Finite Expression and Decidable Membership

The canonical definition **MUST** be finitely expressible.

Evaluation of membership for any valid Survey location **MUST** terminate with a canonical membership answer under finite computation.

The identity of World-space **MUST NOT** depend on an infinite, non-terminating, or inherently undecidable description.

### SG-DEF-04 — Decidable Definition Validity

Whether a purported Spatial Ground definition satisfies the validity conditions imposed by these Requirements and the adopted Specification **MUST** be decidable from the relevant canonical records.

Validation **MUST NOT** depend on hidden state, discretionary interpretation, or undocumented implementation behavior.

Validity alone does not confer canonical status.

### SG-DEF-05 — Decidable Semantic Equivalence

Where Spatial Ground permits more than one representation or successor representation of the same canonical meaning, whether two representations denote the same World-space **MUST** be decidable under the adopted Specification.

A representation that cannot be shown equivalent where equivalence is required **MUST NOT** replace the declared primary.

### SG-DEF-06 — Refinement Closure

The canonical definition **MUST** already determine membership for every location that supported Survey refinement can make representable under the compatible Survey lineage.

Refinement **MUST** enable finer evaluation of already-established truth; it **MUST NOT** create, reveal as newly true, or newly decide membership.

The canonical limit **MUST NOT** move merely because the Survey Fabric provides finer precision.

---

## 7. Foundational Survey Fabric Dependency

### SG-DOWN-01 — Reference Without Redefinition

Spatial Ground **MUST** consume the Foundational Survey Fabric by reference and **MUST NOT** redefine, duplicate, fork, rescale, or independently reinterpret Survey-owned spatial truth.

This dependency includes, as applicable under the Survey Fabric's own specification:

- Survey Domain;
- valid Survey reference;
- reference identity and equality;
- coordinate framework;
- geometry;
- topology;
- spatial operations;
- measure;
- scale;
- precision;
- refinement;
- adjacency;
- translation or correspondence across compatible Survey versions.

Spatial Ground **MUST NOT** introduce a parallel coordinate system, geometry, topology, measurement system, precision model, or spatial reference regime.

### Consequence SG-DOWN-02 — Equality Consistency

**Parents:** SG-CORE-03, SG-DOWN-01.

References that the Foundational Survey Fabric determines to denote the same Survey location **MUST** receive the same Spatial Ground membership answer.

Spatial Ground **MUST NOT** distinguish two locations that the inherited Survey semantics treat as identical.

### Consequence SG-DOWN-03 — No Finer Distinction Than Survey Supports

**Parents:** SG-DOWN-01, SG-CORE-03.

Spatial Ground **MUST NOT** make a canonical spatial distinction finer than the inherited Survey semantics can represent.

Spatial Ground **MUST NOT** make canonical meaning depend on the maximum precision available in any particular implementation period.

### Consequence SG-DOWN-04 — Declared Dependency Surface

**Parent:** SG-DEF-02.

Spatial Ground **MUST** identify the Survey specification or compatible lineage on which the canonical definition depends and **MUST** declare the lower-layer truths it consumes.

The declaration **MUST** bind semantic dependency, not merely a software release identifier.

The exact mechanics of Survey reference equality, coarse-reference semantics, compatible lineage, refinement, and topology remain owned by the Foundational Survey Fabric and are not defined by this Requirements document.

### 7.1 Shared Dependency Assumptions

The FSF–Ground contract in Atlas shared architectural doctrine is expected to state, without imposing those duties through this document, that Spatial Ground relies on:

- sufficient Survey expressiveness for the adopted World-space definition;
- stable reference meaning across compatible lineage;
- determinate reference equality;
- refinement compatibility;
- defined location/extent semantics;
- topology sufficient to state connectedness;
- finitude of the Survey Domain.

Failure of an assumption **MUST** be escalated to the owning layer and **MUST NOT** be patched by silently adding Spatial Ground authority.

---

## 8. Layer Boundary and Exclusions

### SG-BOUND-01 — Membership-Only Semantics

Spatial Ground **MUST** introduce no canonical meaning beyond the distinction between World-space and non-World-space.

Spatial Ground **MUST NOT** determine:

- Parcel identity or parcelization;
- Parcel eligibility;
- ownership, ownability, claims, stewardship rights, jurisdiction, access, or control;
- construction, settlement, development, or suitability;
- Region or Cluster identity or meaning;
- terrain, landform, morphology, surface, coast, visual form, or experiential edge;
- social, economic, political, cultural, civilizational, legal, or experiential meaning;
- a ranking or value among World-space locations;
- independent meaning for non-World-space;
- higher-layer classifications merely because they can be computed using membership.

Geometry belongs in Spatial Ground only insofar as the adopted definition uses Survey geometry to express membership. The geometry itself remains Survey-owned.

### Consequence SG-BOUND-02 — Closed Responsibility Set

**Parents:** SG-BOUND-01, SG-DOWN-01.

The responsibilities of Spatial Ground **MUST** be explicitly enumerable and closed.

A new responsibility **MUST NOT** become part of Spatial Ground through implementation practice, repeated use, higher-layer convenience, or terminology drift.

Any proposed scope change **MUST** follow the governed scope-change route and prove that the responsibility is indispensable to canonical World-space itself.

A dependency on an upstream constitutional concept **MUST** trigger constitutional return rather than architectural absorption.

---

## 9. Upward Interface — Consequences

This section does not introduce new independent Requirements. It states what consumers may rely upon because the parent Requirements already make these things true.

### Consequence SG-UP-01 — Guarantees Available to Higher Layers

Higher layers may rely on Spatial Ground to provide:

- exact, total, two-valued, deterministic World membership — SG-CORE-03;
- complete membership before interpretation — SG-CORE-03a and SG-CORE-05a;
- stable membership across time, representation, and supported refinement — SG-CORE-06, SG-CORE-07, SG-DEF-06;
- one canonical World-space definition — SG-CORE-04;
- membership attached to canonical Survey space — SG-CORE-02 and SG-DOWN-01;
- a determinate canonical limit as a consequence of membership — SG-LIM-01;
- conformity with the expressed constitutional constraints — SG-CONST-02 through SG-CONST-05;
- a semantic interface independent of any particular implementation — SG-CORE-07.

### Consequence SG-UP-02 — Explicit Non-Guarantees

**Parent:** SG-BOUND-01.

Higher layers **MUST NOT** infer that Spatial Ground guarantees:

- Parcel identity or parcelization;
- eligibility for any higher-layer concept;
- ownership or legal status;
- settlement, development, construction, or access;
- Region or Cluster meaning;
- terrain, morphology, recognizable form, visual appearance, or experience;
- social, economic, political, cultural, or civilizational meaning;
- any topology beyond the expressed connectedness constraint;
- any ranking, utility, or value among locations.

### Consequence SG-UP-03 — Membership Immunity and Sole Source

**Parents:** SG-CORE-04, SG-CORE-05a, SG-CORE-06, SG-BOUND-02.

Every consumer **MUST** treat Spatial Ground as the sole architectural source of canonical World membership.

Direct use of Survey coordinates, geometry, topology, or other Survey mathematics by a higher layer is computational and **MUST NOT** be treated as an independent source of World membership.

A higher-layer deficiency concerning canonical membership **MUST** be routed back to Spatial Ground through the governed architectural process and **MUST NOT** be patched locally.

---

## 10. Institutional and Framework Interfaces

### SG-IF-01 — Canonical Status by Adoption

A Spatial Ground definition is canonical **only** when it has been adopted by the authorized recorded Adoption Act.

A candidate definition **MUST** remain explicitly non-canonical.

Validity, conformance, publication, implementation, operational use, certification, custody, possession, hosting, majority agreement, or widespread reliance **MUST NOT** substitute for adoption.

The Adoption Act determines which definition is canonical; it does not determine what that definition means.

### Consequence SG-IF-02 — Governance Is Not a Membership Input

**Parent:** SG-CORE-05b.

Governance events establish record status and institutional authority only.

Review, dispute, correction proposal, stewardship, certification, succession, publication, or operational state **MUST NOT** become inputs to the membership function.

A review state or governance state **MUST NOT** become a membership state.

### Reference SG-IF-04 — Governed Acts

Correction of records, meaning-preserving supersession, formal-model replacement, and scope change are governed outside this Requirements document.

Every such act remains bounded by SG-CORE-06.

No governed act **MAY** be used to disguise a change in established World-space membership.

### Reference SG-IF-05 — Conformance and Preservation

Conformance and Preservation operate on the obligations stated here and on the adopted Specification.

They may test, attest, reconstruct, preserve, compare, and diagnose.

They **MUST NOT** originate Spatial Ground obligations or become a source of World-space authority.

---

## 11. Traceability and Drafting Integrity

### 11.1 Requirement Traceability

Every normative statement in this document **MUST** remain traceable to:

- one or more Spatial Ground Creator Findings;
- the applicable Architectural Resolution Pass decision;
- any upstream constitutional source it expresses;
- any downstream framework obligations that mirror or test it.

The frozen classification record of the 2,100 Findings should remain unchanged as the historical Classification Phase record.

A separate consolidation map should preserve the final mapping from each Finding to its Requirement, consequence, framework destination, merger parent, or rejected reading.

### 11.2 No Duplicate Normative Authority

An independent obligation **MUST** be stated normatively in one place.

Where the same truth is useful in another section, it **MUST** appear only as:

- a marked Consequence;
- a reference to the parent Requirement; or
- non-normative explanatory text.

A downstream framework **MUST NOT** create a new obligation merely because it needs a test, record, procedure, or implementation convention.

### 11.3 Terminology Discipline

Spatial Ground drafting and downstream framework records **MUST** preserve the terminology distinctions established by the consolidation architecture, including:

- **express** rather than *establish* or *create* for Spatial Ground's relationship to World-space;
- **design** for the Creator's exact permissible spatial choice;
- **discovery** for constitutional truths or architectural necessities, not the exact designed membership set;
- **canonical limit** rather than Boundary or edge for the Ground consequence of membership;
- **permanence** for temporal persistence of membership;
- **continuity / connectedness** for the constitutional spatial property and its Ground expression;
- **scope change** rather than ambiguous architectural “expansion”;
- **formal constitutional revision** only for an upstream constitutional act, never for a Ground change mechanism;
- **record state** rather than a state of World-space;
- **semantic identity** distinct from artifact identity;
- **provenance** distinct from integrity.

---

## 12. Requirement Inventory

The independent Requirement-level architecture consists of:

### Governing Head
- SG-CORE-01

### Independent Core Requirements
- SG-CORE-02
- SG-CORE-03
- SG-CORE-04
- SG-CORE-05
- SG-CORE-06
- SG-CORE-07

### Constitutional Requirements
- SG-CONST-01
- SG-CONST-02
- SG-CONST-03
- SG-CONST-04
- SG-CONST-05

### Independent Definition Requirements
- SG-DEF-03
- SG-DEF-04
- SG-DEF-05
- SG-DEF-06

### Independent Downward-Contract Requirement
- SG-DOWN-01

### Independent Layer-Boundary Requirement
- SG-BOUND-01

### Independent Institutional Hook
- SG-IF-01

The following are deliberately stated as consequences or references rather than additional independent obligations:

- SG-LIM-01;
- SG-DEF-01;
- SG-DEF-02;
- SG-DOWN-02;
- SG-DOWN-03;
- SG-DOWN-04;
- SG-BOUND-02;
- SG-UP-01;
- SG-UP-02;
- SG-UP-03;
- SG-IF-02;
- SG-IF-03;
- SG-IF-04;
- SG-IF-05.

---

## 13. Out of Scope for These Requirements

This document does not determine:

- the formal membership model;
- the primary machine-readable representation;
- the inclusion convention at the canonical limit;
- the implementation algorithm;
- normalization mechanics;
- reference-vector contents;
- conformance procedures;
- preservation-package structure;
- the exact Foundational Survey Fabric semantics;
- General Spatial Interpretation;
- Parcel Cadastre semantics;
- higher-layer extent classifications;
- visual or experiential World form;
- the Creator's final choice of canonical World-space;
- the authority or procedure for formal constitutional revision.

Those subjects belong to the Specification, downstream frameworks, other Atlas domains, or upstream constitutional institutions as assigned by the adopted architecture.

---

## 14. Adoption Standing

Gate 0 closed successfully on **September 23, 2026** after completion of:

1. constitutional-source traceability;
2. the Spatial Ground drafting glossary;
3. the minimum Atlas shared architectural doctrine;
4. the governance baseline and Adoption Act form; and
5. the 2,100-Finding consolidation traceability map.

These Requirements were adopted at **Gate A** by recorded Adoption Act on **September 23, 2026**.

Adoption of these Requirements does **not** adopt the Spatial Ground Specification or the canonical World-space instance.

The canonical World-space instance remains a later Creator-period act following adoption of the Specification, Conformance and reconstruction evidence, and the readiness gates established by the institutional architecture.

---

## Source Basis

### Constitutional
- **The Declaration** — foundational truths: one World; 21,000,000 Parcels; finite; incapable of expansion; incapable of duplication; single digital supercontinent; Creator-period distinction between constitutional reality and intentional design; formal constitutional revision reserved upstream.
- **Codex ST-IV — The World** — The World as the singular, continuous cartographic whole; Structural concepts exist within it; Structural inquiry does not create, expand, contract, duplicate, or replace it.
- **Codex WP-S-I — The Extent** — Extent as the cartographic property describing the spatial scope of The World; finite spatial scope exists independently of mapping; Extent does not prescribe geometry, representation, measurement, implementation, or interpretation.
- **The Codex Principles** — Creator-period distinction between constitutional necessity and creative permission; Contiguity doctrine; The Atlas as the principal home of World design.
- **The Codex / The World Properties Charter / The Lexicon** — constitutional discovery, terminology, Domain boundaries, and Creator-period institutional discipline.

### Architectural
- Spatial Ground Architectural Resolution — Pass #1: Spatial Meaning.
- Spatial Ground Architectural Resolution — Pass #2: Layer Ownership.
- Spatial Ground Architectural Resolution — Pass #3: Institutional Authority, Amended Source-Reconciled Edition.
- Spatial Ground Architectural Resolution — Pass #4: Consolidation Architecture, Amended Source-Reconciled Edition.
- Spatial Ground Corpus-Level Classification Report.
- Spatial Ground Classification Master, Findings #1–#2100.

---

**End of Spatial Ground Requirements — Draft for Adoption Review**
