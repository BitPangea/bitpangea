# Spatial Ground — Canon-Form Policy

**BitPangea · The Atlas · Spatial Ground**  
**Record Type:** Canon-Form Policy  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** COMPLETE  
**Scope:** Primary normative form for Spatial Ground semantic elements  
**Applies To:** Spatial Ground Specification, canonical definition artifacts, Conformance, Reference Vectors, preservation, reconstruction, and compatible successor representations  
**Gate Effect:** Pre-Gate-B prerequisite completed; Gate B is not opened by this record  
**Canonical Instance Effect:** None. This policy does not select or adopt the canonical World-space instance.

---

## 1. Purpose

This policy establishes the rule that each Spatial Ground semantic element SHALL have exactly one declared **primary normative form**.

The purpose is to prevent:

- competing canonical expressions;
- circular authority chains;
- ambiguity among equivalent artifacts;
- accidental promotion of derived files into canonical status;
- confusion between semantic identity and artifact identity;
- representation drift during preservation or implementation.

The governing rule is:

> **One semantic element. One primary normative form. Any additional form must derive from it or be proven semantically equivalent under the adopted Specification.**

---

## 2. Architectural Basis

This policy follows directly from the adopted Spatial Ground architecture.

Spatial Ground requires:

- one canonical World-space definition;
- semantic rather than artifact-specific identity;
- a unique primary authority for each semantic element;
- decidable semantic equivalence where multiple representations exist;
- representation-independent reconstruction;
- no competing canonical truth.

It also preserves the selected formal semantic model:

> **Canonical Membership Predicate Model (CMPM)**

Under CMPM:

```text
M_D : S → {WORLD, NON_WORLD}
```

where:

- `S` is valid canonical Survey space under the governing FSF lineage;
- `D` is the governing Spatial Ground definition;
- `M_D` is the exact total deterministic membership predicate induced by D.

This Canon-Form Policy does not replace CMPM.

It governs how the semantic elements of CMPM are normatively represented.

---

## 3. Canon-Form Principle

For every semantic element governed by Spatial Ground:

1. exactly one form SHALL be declared **Primary Normative**;
2. all other normative or derived forms SHALL identify their relationship to that primary;
3. no two forms MAY be independently authoritative for the same semantic element;
4. a derived form MAY replace a primary only through a governed meaning-preserving supersession process;
5. semantic equivalence SHALL be proven under the adopted Spatial Ground Specification;
6. byte identity SHALL NOT be required for semantic identity unless a specific serialization rule explicitly makes byte identity normative for that artifact class.

---

## 4. Semantic Element Classes

The policy recognizes the following principal Spatial Ground semantic elements:

1. **Formal Membership Model**
2. **Ground Definition**
3. **Membership Predicate Semantics**
4. **World-Space Set**
5. **Non-World-Space Set**
6. **Canonical Limit Semantics**
7. **FSF Dependency Declaration**
8. **Ground Specification**
9. **Canonical Instance**
10. **Conformance Evidence**
11. **Reference Vectors**
12. **Preservation / Reconstruction Package**

Each class must have one declared primary normative form.

---

## 5. Primary Form — Formal Membership Model

### Semantic Element

The formal semantic model by which Spatial Ground defines World membership.

### Primary Normative Form

**The adopted Spatial Ground Specification statement of the Canonical Membership Predicate Model (CMPM).**

### Governing Form

```text
M_D : S → {WORLD, NON_WORLD}
```

### Secondary / Derived Forms

May include:

- diagrams;
- explanatory prose;
- implementation interfaces;
- pseudocode;
- typed API definitions;
- test harness schemas.

### Rule

No secondary representation may alter the meaning of CMPM.

If a secondary form conflicts with the Specification, the Specification controls.

---

## 6. Primary Form — Ground Definition

### Semantic Element

The finite adopted definition `D` that induces canonical World membership.

### Primary Normative Form

**One declared canonical machine-readable Ground Definition artifact**, whose exact syntax and serialization will be established by the Spatial Ground Specification.

### Required Characteristics

The primary Ground Definition form SHALL be:

- finitely expressible;
- deterministic;
- machine-readable;
- independently parseable;
- representation-stable in meaning;
- explicitly versioned as an artifact without versioning place;
- sufficient, together with the governing Specification and FSF dependency surface, to reconstruct membership;
- free of hidden implementation state.

### Secondary / Derived Forms

May include:

- human-readable rendering;
- formatted documentation;
- visual map;
- derived geometry;
- compiled evaluator;
- index;
- cache;
- hash or cryptographic commitment;
- archival package.

### Rule

The canonical Ground Definition artifact is authoritative for the definition `D`.

No rendered map, compiled executable, database, cache, index, or cryptographic commitment may become a competing authority.

---

## 7. Primary Form — Membership Predicate Semantics

### Semantic Element

The exact meaning of the function:

```text
M_D(x)
```

### Primary Normative Form

**The normative semantic rules in the adopted Spatial Ground Specification.**

### Rule

Membership semantics SHALL NOT be inferred from:

- implementation behavior;
- UI behavior;
- database contents;
- cached results;
- historical precedent;
- test fixtures alone.

Reference Vectors may demonstrate the predicate.

They do not define it.

---

## 8. Primary Form — World-Space Set

### Semantic Element

The set:

```text
W_D = { x ∈ S | M_D(x) = WORLD }
```

### Primary Normative Form

**The induced semantic set defined by the primary Ground Definition `D` under the adopted Spatial Ground Specification and governing FSF semantics.**

### Important Rule

`W_D` is a semantic result.

It is not required to exist as an exhaustive materialized registry.

### Derived Forms

May include:

- exact geometries;
- spatial indexes;
- tiles;
- bitmaps;
- region partitions;
- caches;
- visual maps;
- sampling products.

### Rule

A materialized representation of `W_D` is derived unless the Specification explicitly declares otherwise.

No derived materialization may become independently authoritative.

---

## 9. Primary Form — Non-World-Space Set

### Semantic Element

The set:

```text
N_D = { x ∈ S | M_D(x) = NON_WORLD }
```

### Primary Normative Form

**The complement of `W_D` within the operative valid Survey domain `S`, as determined by the same adopted Ground Definition.**

### Rule

Non-World-space SHALL NOT require a second independently authored canonical artifact.

It is derived from the same predicate.

This prevents competing inclusion and exclusion authorities.

---

## 10. Primary Form — Canonical Limit Semantics

### Semantic Element

The exact Ground-level limit where membership changes.

### Primary Normative Form

**The limit derived from the adopted membership predicate under governing FSF geometry, topology, and boundary semantics.**

### Rule

The canonical limit SHALL NOT be an independently authoritative boundary artifact.

A separate geometry file, line set, polygon outline, coast-like visualization, or rendered edge may express the limit.

It may not redefine it.

### Consequence

Membership remains primary.

The limit remains derivative.

---

## 11. Primary Form — FSF Dependency Declaration

### Semantic Element

The lower-layer semantic dependency surface consumed by Spatial Ground.

### Primary Normative Form

**`SG_FSF_Dependency_Declaration.md`**

### Supporting Record

**`SG_FSF_Dependency_Review.md`**

### Rule

The Declaration governs the dependency boundary.

The Review explains how that boundary was determined.

The Review is evidentiary and explanatory.

The Declaration is normative for the dependency relationship.

---

## 12. Primary Form — Spatial Ground Specification

### Semantic Element

The formal rules governing Spatial Ground semantics and evaluation.

### Primary Normative Form

**The adopted Spatial Ground Specification.**

### Rule

The Specification is the sole normative authority for:

- CMPM semantics;
- valid Ground Definition structure;
- membership evaluation;
- semantic equivalence;
- refinement closure;
- canonical limit derivation;
- validity;
- error conditions;
- conformance hooks;
- canonical representation rules established within its scope.

Supporting prose, documentation, README files, implementation notes, and tutorials are non-authoritative unless explicitly incorporated.

---

## 13. Primary Form — Canonical World-Space Instance

### Semantic Element

The final adopted Creator-period choice of exact canonical World-space.

### Primary Normative Form

**The adopted canonical Ground Definition artifact identified by the canonical instance Adoption Act.**

### Required Institutional Relationship

The instance Adoption Act SHALL identify:

- the exact Ground Definition artifact;
- its artifact identity;
- its Specification dependency;
- its FSF dependency lineage;
- any required integrity record;
- the fact that adoption exhausts Creator design authority over that instance.

### Rule

The Adoption Act confers canonical status.

The Ground Definition expresses the instance.

Neither substitutes for the other.

---

## 14. Primary Form — Conformance Evidence

### Semantic Element

Evidence that an implementation follows the adopted Specification.

### Primary Normative Form

**The governed Spatial Ground Conformance record format defined by the future Conformance framework.**

### Rule

Conformance evidence may establish compliance.

It does not create or alter World membership.

No conformance report, certificate, or implementation result becomes a source of canonical Ground truth.

---

## 15. Primary Form — Reference Vectors

### Semantic Element

Canonical exact input/output fixtures used to test Ground behavior.

### Primary Normative Form

**The adopted Spatial Ground Reference Vector corpus defined under the future Reference Vector framework.**

### Rule

Reference Vectors SHALL derive from the Specification.

They SHALL NOT:

- introduce new Ground semantics;
- repair an ambiguity in the Specification by precedent;
- become an alternate Specification.

If a vector conflicts with the adopted Specification, the Specification controls and the vector is defective.

---

## 16. Primary Form — Preservation and Reconstruction Package

### Semantic Element

The durable package from which future parties can reconstruct canonical Ground meaning.

### Primary Normative Form

**The preservation manifest defined by the later Spatial Ground preservation/reconstruction framework.**

### Required Contents

The preservation package should identify, at minimum:

- adopted Spatial Ground Specification;
- canonical Ground Definition artifact;
- governing FSF dependency lineage;
- integrity information;
- Adoption Act;
- required Conformance records;
- required Reference Vector corpus;
- format/version metadata necessary for reconstruction.

### Rule

The preservation package does not become an additional semantic authority.

It preserves and identifies the authorities.

---

## 17. Derived Artifact Rule

A derived artifact is any artifact whose content can be reproduced from a primary normative form and the governing Specification.

Examples include:

- visual maps;
- indexes;
- database materializations;
- caches;
- optimized decision structures;
- compiled evaluators;
- rendered geometry;
- alternate serializations;
- human-readable summaries;
- cryptographic commitments;
- proof bundles.

Every derived artifact SHALL:

1. identify its primary source;
2. identify the governing Specification where relevant;
3. preserve semantic equivalence;
4. remain replaceable without changing Ground meaning.

A derived artifact SHALL NOT silently acquire canonical authority through widespread use.

---

## 18. Alternate Normative Representation Rule

The architecture MAY permit more than one normative representation of the same semantic element only if:

1. one form remains declared Primary Normative;
2. the alternate form is explicitly classified as an Alternate Normative Representation;
3. deterministic semantic equivalence is defined;
4. conflict resolution is explicit;
5. the alternate form cannot independently create meaning.

Where equivalence cannot be decided, the alternate form SHALL NOT be treated as an authoritative successor or substitute.

---

## 19. Conflict Rule

If two artifacts purport to represent the same Spatial Ground semantic element and disagree:

1. the declared Primary Normative form governs;
2. the conflicting derived or alternate artifact is defective unless the primary itself is formally superseded;
3. implementation majority, popularity, age, deployment status, or cryptographic timestamp does not override the primary;
4. conflict SHALL NOT be resolved by file order, database order, or "latest wins" behavior unless a formally adopted rule explicitly governs that artifact class.

---

## 20. Supersession Rule

A Primary Normative form may be superseded only through a governed process.

Meaning-preserving supersession SHALL require:

- explicit identification of the predecessor;
- explicit identification of the successor;
- proof of semantic equivalence where equivalence is required;
- preservation of the predecessor;
- no change to established World membership.

A successor representation that changes membership is not a meaning-preserving supersession.

After canonical instance adoption, such a change is prohibited within ordinary Spatial Ground governance.

---

## 21. Artifact Identity vs. Semantic Identity

The following distinction is mandatory:

> **Artifact identity tells us which file or record we are looking at. Semantic identity tells us whether it means the same Ground truth.**

Therefore:

- two different files MAY be semantically equivalent;
- byte-identical files MAY be semantically identical but byte identity is not generally required;
- a reformatted artifact MAY preserve meaning;
- a reserialized artifact MAY preserve meaning;
- a compiled representation MAY preserve meaning;
- a renamed artifact MAY preserve meaning.

But semantic equivalence must be established under the adopted Specification.

---

## 22. Canonical Serialization Rule

Where the Spatial Ground Specification defines a canonical serialization for a Primary Normative artifact, that serialization MAY become normative for:

- deterministic hashing;
- archival integrity;
- interchange;
- canonical comparison.

However:

> **Canonical serialization does not replace semantic identity.**

A semantically equivalent successor format may later exist if permitted and governed.

Version the artifact format.

Do not version the place.

---

## 23. Human-Readable and Machine-Readable Forms

Where both a human-readable and machine-readable form exist for one semantic element:

- one SHALL be declared Primary Normative;
- the other SHALL be declared derived or alternate;
- their relationship SHALL be explicit.

For the canonical Ground Definition, the recommended policy is:

> **Machine-readable form = Primary Normative**  
> **Human-readable rendering = Derived Normative Presentation**

Reason:

- membership must be independently executable;
- deterministic parsing matters;
- preservation must not depend on prose interpretation;
- human readability remains valuable but should not create a second authority.

The exact machine-readable grammar remains a Specification decision.

---

## 24. README and Public Presentation Rule

README files, landing pages, explanatory HTML, diagrams, and public presentation surfaces are documentation.

They are not primary semantic authorities unless an Adoption Act or Specification explicitly says otherwise.

They may:

- summarize;
- explain;
- link;
- present status;
- provide navigation.

They may not:

- silently change membership;
- override the Specification;
- override the canonical Ground Definition;
- become the sole record of canonical meaning.

---

## 25. Implementation Rule

No implementation is the canon.

A reference implementation, if later created, may be highly authoritative as evidence of intended conformity.

But it remains an implementation.

The primary normative forms remain:

- Specification;
- canonical Ground Definition;
- declared dependency records;
- formal Adoption Act;
- governed Conformance and Reference Vector records.

If code and Specification disagree, the code is nonconforming.

---

## 26. Cryptographic Integrity Rule

Hashes, signatures, Merkle commitments, timestamps, and similar mechanisms may bind artifact identity and integrity.

They do not define semantic truth.

A cryptographic proof may establish:

> "This is the exact artifact that was adopted."

It does not independently establish:

> "This membership rule is correct."

Semantic authority remains architectural and institutional.

---

## 27. Primary Canon-Form Matrix

| Semantic Element | Primary Normative Form | Secondary / Derived Forms |
|---|---|---|
| Formal Membership Model | Adopted Spatial Ground Specification statement of CMPM | diagrams, prose, API types |
| Ground Definition `D` | Canonical machine-readable Ground Definition artifact | human-readable rendering, compiled evaluator, map, index |
| Membership Predicate `M_D` | Specification semantics | implementation functions, APIs, test harnesses |
| World-space `W_D` | Semantic set induced by `D` | geometry, tiles, indexes, caches, visual maps |
| Non-World-space `N_D` | Complement induced by same predicate | exclusion layers, masks, derived maps |
| Canonical Limit | Derived membership-change semantics under FSF | boundary geometry, linework, rendered edge |
| FSF Dependency | `SG_FSF_Dependency_Declaration.md` | dependency review |
| Spatial Ground Specification | Adopted Specification | README, HTML presentation, tutorials |
| Canonical Instance | Adopted Ground Definition identified by Adoption Act | backups, replicas, visualizations |
| Conformance Evidence | Governed Conformance record | dashboards, summaries |
| Reference Vectors | Adopted Reference Vector corpus | generated test fixtures |
| Preservation Package | Governed preservation manifest | archive copies, mirrors |

---

## 28. Pre-Gate-B Consequence

This policy satisfies the pre-Gate-B requirement to establish:

> **one primary canonical form per semantic element.**

With this policy complete, the remaining principal task before Gate B review is:

> **Draft the Spatial Ground Specification around the selected Canonical Membership Predicate Model.**

---

## 29. Disposition

**CANON-FORM POLICY — COMPLETE**

**ONE PRIMARY NORMATIVE FORM PER SEMANTIC ELEMENT — ESTABLISHED**

**CANONICAL MEMBERSHIP PREDICATE MODEL — PRESERVED**

**PRIMARY GROUND DEFINITION POLICY — MACHINE-READABLE FORM RECOMMENDED**

**CANONICAL WORLD-SPACE INSTANCE — NOT SELECTED**

**GATE B — NOT YET OPEN**

---

## 30. Governing Closing Rule

> **One meaning may have many representations. One semantic element may have only one primary authority.**

And:

> **The canon is not whichever artifact is easiest to use. The canon is the declared primary form from which every other valid form must derive or prove equivalence.**
