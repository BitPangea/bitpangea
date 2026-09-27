# Spatial Ground — Formal Model Selection Record

**BitPangea · The Atlas · Spatial Ground**  
**Record Type:** Formal Model Selection Record  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** COMPLETE — MODEL SELECTED  
**Selection:** **Canonical Membership Predicate Model (CMPM)**  
**Specification Effect:** Governs the formal semantic model to be used by the Spatial Ground Specification  
**Gate Effect:** Pre-Gate-B prerequisite completed; Gate B is not opened by this record  
**Canonical Instance Effect:** None. This record does not select or adopt the canonical World-space instance.

---

## 1. Purpose

This record selects the formal model by which Spatial Ground will represent the canonical distinction between **World-space** and **non-World-space** within valid canonical Survey space.

The selected model must satisfy the adopted Spatial Ground Requirements while remaining subordinate to the Foundational Survey Fabric (FSF) and the established FSF–Spatial Ground dependency boundary.

The governing question is:

> **What is the smallest exact formal model that can express one permanent, total, two-valued, deterministic World-membership truth without redefining Survey mathematics or making implementation artifacts authoritative?**

The selected answer is:

> **Canonical Membership Predicate Model (CMPM).**

---

## 2. Source Basis

- Foundational Survey Fabric Requirements:  
  https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/

- Spatial Ground Requirements:  
  https://bitpangea.com/theatlas/spatial-ground/requirements/

- `SG_FSF_Dependency_Review.md`
- `SG_FSF_Dependency_Declaration.md`

Governing architectural rule:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

---

## 3. Selection Constraints

Any candidate model had to satisfy the following.

1. **Membership is the Ground semantic primitive.** The model must answer whether valid canonical Survey space is World-space without requiring Parcel, Region, terrain, ownership, visual form, or other higher-layer meaning.
2. **Totality.** Every valid canonical Survey location must receive a membership answer.
3. **Two-valued truth.** The only canonical values are World-space and non-World-space.
4. **Determinism.** The same canonical Survey meaning under the same adopted definition and inherited FSF semantics must always produce the same answer.
5. **One definition.** Exactly one canonical World-space determination governs.
6. **Finite expression.** The governing definition must be finitely expressible.
7. **Decidability.** Membership evaluation must terminate under finite computation.
8. **Representation independence.** No file, encoding, database, implementation, cryptographic scheme, storage layout, or rendering may become the semantic authority.
9. **FSF subordination.** Survey validity, reference identity, geometry, topology, precision, refinement, and related mathematics remain FSF-owned.
10. **Refinement stability.** Greater precision may enable finer evaluation but must not create or move World-space.
11. **Limit follows membership.** The canonical limit is a consequence of membership, not a separate competing authority.
12. **Independent implementation.** Independent conforming implementations must be capable of reproducing the same membership answers from public normative records.

---

## 4. Candidate Models Considered

1. **Enumerated Membership Registry**
2. **Geometry-First Boundary / Extent Model**
3. **Constructive Inclusion–Exclusion Set Model**
4. **Scalar-Field / Threshold Model**
5. **Procedural or Event-Sourced Construction Model**
6. **Cryptographic / Merkle Membership Map**
7. **Canonical Membership Predicate Model**

---

## 5. Candidate A — Enumerated Membership Registry

### Description

World-space is represented by explicitly listing every Survey reference or spatial unit designated as World-space.

### Strengths

- simple lookup;
- straightforward replication;
- easy to hash or compare once fully materialized.

### Problems

The model is too dependent on materialized inventory. It creates direct tension with:

- extensible FSF refinement;
- future representability;
- representation independence;
- specification-over-materialization;
- unresolved coarse/fine Survey semantics.

If additional valid Survey references appear through compatible refinement, an enumerative model risks making membership appear to arise only when those references are inserted.

### Disposition

**REJECT AS CANONICAL SEMANTIC MODEL.**

An enumerated registry, bitmap, cache, or index may later be a valid derived implementation artifact.

---

## 6. Candidate B — Geometry-First Boundary / Extent Model

### Description

Canonical Ground is represented primarily as one or more exact geometric extents or boundaries, with membership derived from geometric inclusion.

### Strengths

- intuitive for irregular form;
- compatible with exact FSF geometry;
- supports holes where permitted;
- allows connectedness testing through FSF topology.

### Problems

This reverses the adopted semantic order.

Spatial Ground makes the canonical limit a **consequence of membership**. A boundary-first model risks making boundary geometry the primary authority.

It may also overcommit Ground to a particular geometric primitive family before FSF completes all relevant formal mathematics.

### Disposition

**REJECT AS PRIMARY SEMANTIC MODEL.**

Exact geometry may be used inside the adopted definition, but geometry should not replace membership as the Ground primitive.

---

## 7. Candidate C — Constructive Inclusion–Exclusion Set Model

### Description

World-space is built from exact FSF extents using operations such as union, intersection, difference, complement, inclusion, and exclusion.

### Strengths

- finite and declarative;
- supports irregular form and holes;
- compatible with exact FSF composition;
- compact compared with enumeration.

### Problems

As the semantic model, it imports unnecessary expression-level structure.

Multiple clauses create questions of overlap, precedence, normalization, ordering, contradiction handling, and equivalence among alternative expressions.

These are Specification concerns, not the ontology of membership itself.

### Disposition

**RETAIN AS A POSSIBLE EXPRESSION MECHANISM, NOT AS THE PRIMARY SEMANTIC MODEL.**

---

## 8. Candidate D — Scalar-Field / Threshold Model

### Description

An exact scalar function is defined over Survey space, for example:

```text
f(x) <= 0  → World-space
f(x) > 0   → non-World-space
```

### Strengths

- naturally total and binary;
- potentially compact;
- can express complex form.

### Problems

The model introduces mathematical structure Ground does not need to require:

- canonical scalar field;
- metric assumptions;
- sign convention;
- threshold convention;
- field continuity obligations.

It is mathematically elegant but unnecessarily strong.

### Disposition

**REJECT AS UNNECESSARILY STRONG.**

---

## 9. Candidate E — Procedural or Event-Sourced Construction Model

### Description

World-space is reconstructed by replaying a sequence of include, exclude, add, remove, or modify operations.

### Strengths

- strong provenance;
- preserves historical construction sequence.

### Problems

Canonical Ground should express **what World-space is**, not require permanent replay of how it became so.

This model creates unnecessary dependence on history, ordering, mutable sequence, and archival completeness.

### Disposition

**REJECT AS CANONICAL SEMANTIC MODEL.**

Provenance may preserve construction history, but history must not be required for ordinary membership reconstruction.

---

## 10. Candidate F — Cryptographic / Merkle Membership Map

### Description

Membership is represented through a cryptographic structure such as a Merkle tree, sparse Merkle map, authenticated bitmap, or blockchain commitment.

### Strengths

- strong integrity proofs;
- efficient verification;
- useful for preservation and attestation.

### Problems

This is a verification representation, not a semantic ontology.

It risks binding meaning to one hash function, tree structure, serialization, key space, or verification technology.

### Disposition

**REJECT AS SEMANTIC MODEL.**

Cryptographic structures may later attest an adopted Ground artifact, but they do not define what World-space means.

---

## 11. Candidate G — Canonical Membership Predicate Model

### Description

Let:

- **S** be the canonical domain of valid Survey locations under the declared compatible FSF lineage;
- **D** be the finite adopted Spatial Ground definition;
- **M_D** be the exact membership predicate determined by D and inherited FSF semantics.

Then:

```text
M_D : S → {WORLD, NON_WORLD}
```

or equivalently:

```text
M_D : S → {1, 0}
```

Canonical World-space is:

```text
W_D = { x ∈ S | M_D(x) = WORLD }
```

Canonical non-World-space is:

```text
N_D = { x ∈ S | M_D(x) = NON_WORLD }
```

and therefore, within the operative Ground domain:

```text
N_D = S \ W_D
```

### Meaning

The model says only:

> **For every valid canonical Survey location, the adopted Ground definition gives exactly one answer to the question: is this location World-space?**

It does not require a particular storage representation, geometry library, grid ontology, database, serialization, cryptographic system, or coarse/fine hierarchy.

It is a semantic model before it is an implementation model.

### Disposition

**SELECT.**

---

## 12. Why CMPM Was Selected

### 12.1 It Mirrors the Ground Responsibility Exactly

Spatial Ground exists to canonically express World membership. CMPM formalizes that responsibility directly.

### 12.2 It Makes Two-Valued Membership Native

The codomain is exactly:

```text
{WORLD, NON_WORLD}
```

There is no structural place for canonical unknown, fuzzy, probabilistic, partial, or disputed membership.

### 12.3 It Makes the Canonical Limit a Consequence

The model does not require an independent boundary authority. The canonical limit is derived from where membership changes under inherited FSF geometry and topology.

### 12.4 It Preserves FSF Ownership

CMPM does not define coordinates, reference equality, geometry, topology, precision, refinement, or boundary mathematics. It consumes those from FSF.

### 12.5 It Supports Irregular Form and Holes

The model does not require convexity, grid alignment, simple connectedness, hole-freedom, a polygon, or a recognizable silhouette.

### 12.6 It Is Refinement-Safe

Membership attaches to canonical Survey meaning, not to a materialized list at one precision level. Finer reference permits finer evaluation of the same definition; it does not create Ground truth.

### 12.7 It Is Representation-Independent

The same semantic predicate may be expressed by exact set algebra, exact geometry, canonical machine syntax, compiled decision structures, caches, or test vectors without creating competing meaning.

### 12.8 It Is Finitely Expressible Without Requiring Finite Enumeration

The governing definition D must be finite. Every member of World-space does not have to be separately listed.

### 12.9 It Supports Decidable Membership

The Specification can require every valid evaluation of `M_D(x)` to terminate with exactly one result.

### 12.10 It Supports Independent Reconstruction

A competent future implementation needs only the adopted Specification, D, and the declared compatible FSF semantics—not the original database, runtime, cache, or private knowledge.

### 12.11 It Does Not Prematurely Choose the Canonical Syntax

The semantic model can be selected now while the exact primary representation is selected separately through the canon-form policy.

---

## 13. Formal Semantic Core

### 13.1 Survey Dependency

Let:

```text
S
```

denote the canonical valid Survey-location domain made available under the governing FSF specification or compatible lineage.

Spatial Ground does not define S.

### 13.2 Adopted Ground Definition

Let:

```text
D
```

denote the finite governing Spatial Ground definition.

D may invoke only:

1. explicit Ground membership rules; and
2. inherited FSF spatial semantics declared by the dependency surface.

### 13.3 Membership Function

D induces exactly one total deterministic membership function:

```text
M_D : S → {WORLD, NON_WORLD}
```

### 13.4 World-Space

```text
W_D = { x ∈ S | M_D(x) = WORLD }
```

### 13.5 Non-World-Space

```text
N_D = { x ∈ S | M_D(x) = NON_WORLD }
```

### 13.6 Exhaustiveness

For every valid `x ∈ S`, exactly one of the following is true:

```text
M_D(x) = WORLD
```

```text
M_D(x) = NON_WORLD
```

### 13.7 Determinism

For fixed D and inherited FSF semantics, `M_D(x)` always resolves to the same value for the same canonical Survey meaning.

### 13.8 Semantic Equivalence

If FSF determines:

```text
x ≡FSF y
```

then:

```text
M_D(x) = M_D(y)
```

### 13.9 Refinement Closure

Compatible FSF refinement may enable more precise evaluation, but it does not create a new Ground rule or newly create World-space.

### 13.10 Canonical Limit

The canonical limit is derived from `M_D` under inherited FSF geometry/topology and the eventual adopted Ground limit convention. It is not an independent source of membership authority.

---

## 14. The Unresolved Coarse/Fine FSF Dependency

CMPM deliberately does **not** define what a coarse Survey reference means.

It does not assume that a coarse reference:

- is an extent;
- is a point with bounded uncertainty;
- contains children;
- denotes a hierarchy node;
- owns descendants.

The predicate model operates on canonical Survey meaning as supplied by FSF.

Therefore CMPM does not require Ground to resolve the current FSF coarse/fine semantic question merely to select the formal model.

If the eventual canonical expression of D depends on one specific unresolved coarse/fine interpretation, that dependency must be surfaced and resolved upstream before Gate B adoption.

---

## 15. Constitutional Constraint Tests

The model alone does not make every candidate D admissible.

The canonical instance must additionally satisfy:

### Singularity

One D governs. No competing canonical predicate exists.

### Existence

```text
W_D ≠ ∅
```

for the canonical BitPangea instance.

### Connectedness

`W_D` must be connected under the governing FSF topology and remain so under supported compatible refinement.

### Extent Conformity

`W_D` must conform to the constitutional Extent of The World.

### Permanence

Once the canonical instance is adopted, ordinary Ground, Atlas, stewardship, implementation, or succession acts may not alter the induced membership set.

---

## 16. Independent-Implementation Reasoning

Independent implementation is a principal reason for selecting CMPM.

### Required Common Inputs

Independent implementations need share only public normative inputs:

1. adopted Spatial Ground Specification;
2. adopted definition D;
3. declared FSF specification / compatible lineage;
4. normative serialization rules once adopted;
5. applicable Conformance and Reference Vectors.

They do not need shared source code or shared runtime state.

### Implementation A — Symbolic Evaluator

One implementation may:

- parse D into an abstract syntax tree;
- resolve canonical FSF inputs;
- invoke exact FSF predicates and operations;
- evaluate the Ground predicate;
- return WORLD or NON_WORLD.

### Implementation B — Independently Compiled Exact Evaluator

A second implementation may:

- use another programming language;
- use another parser;
- use another internal geometry representation;
- compile D into a decision graph or exact spatial index;
- invoke independently implemented FSF semantics;
- return WORLD or NON_WORLD.

### Required Agreement

For every canonical test input:

```text
M_D^A(x) = M_D^B(x)
```

must hold.

Agreement must come from shared public normative semantics, not a shared database, copied cache, private API, secret convention, or implementation-specific tolerance.

### Independent Definition Validation

Independent implementations must also be capable of testing whether D itself is valid under the Specification, including as applicable:

- finite syntax;
- valid FSF dependencies;
- no forbidden higher-layer semantics;
- deterministic evaluability;
- exact two-valued output;
- required constitutional proof obligations.

### Independent Reconstruction

A future implementation must be able to reconstruct Ground membership even if the original runtime disappears.

The architectural recovery basis is:

```text
Specification + D + governing FSF semantics
```

This yields the desired rule:

> **Many implementations. One membership truth.**

---

## 17. Candidate Comparison Summary

| Candidate | Exact / Two-Valued | Finite Definition | Refinement-Safe | Representation-Independent | Preserves FSF Boundary | Independent Implementation | Result |
|---|---|---|---|---|---|---|---|
| Enumerated Membership Registry | Yes locally | Weak | Weak | Weak | Mixed | Possible | Reject as semantic model |
| Geometry-First Boundary Model | Yes if complete | Yes | Potentially | Moderate | Risks overreach | Yes | Reject as primary |
| Constructive Set Algebra | Yes | Yes | Yes if governed | Yes | Yes | Yes | Retain as expression mechanism |
| Scalar Field / Threshold | Yes | Potentially | Yes | Yes | Adds unnecessary math | Yes | Reject |
| Procedural / Event-Sourced | Eventually | Yes | Weak | Weak | Mixed | Replay-dependent | Reject |
| Cryptographic / Merkle Map | Yes | Usually materialized | Weak/Moderate | Weak as semantics | Technology-coupled | Yes | Reject as semantic model |
| **Canonical Membership Predicate** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **SELECT** |

---

## 18. Requirements Mapping

### SG-CORE-02 — Survey Containment and Non-Identity

CMPM operates over valid canonical Survey space while making membership a separate Ground proposition.

**SATISFIED BY MODEL.**

### SG-CORE-03 — Exact Membership

The codomain is exactly two-valued and evaluation is total and deterministic.

**DIRECTLY SATISFIED BY MODEL.**

### SG-CORE-04 — One Canonical Definition

Exactly one adopted D induces the governing predicate.

**DIRECTLY SATISFIED BY MODEL.**

### SG-CORE-05 — Sole Dependence

Membership depends only upon D and declared inherited FSF semantics.

**DIRECTLY SATISFIED BY MODEL.**

### SG-CORE-06 — Membership Permanence

The semantic function and induced set remain invariant under representation and implementation changes.

**MODEL SUPPORTS; ADOPTION GOVERNANCE ENFORCES.**

### SG-CORE-07 — Representation Independence

CMPM is semantic rather than artifact-specific.

**DIRECTLY SATISFIED BY MODEL.**

### SG-CONST-02 — Singularity

One D, one predicate, one canonical World-space.

**DIRECTLY SUPPORTED.**

### SG-CONST-03 — Existence

The model permits empty synthetic/test instances, but the canonical instance must prove `W_D ≠ ∅`.

**MODEL COMPATIBLE; INSTANCE MUST PROVE.**

### SG-CONST-04 — Connectedness

FSF topology can test the induced set `W_D`.

**MODEL COMPATIBLE; INSTANCE MUST PROVE.**

### SG-CONST-05 — Extent Conformity

CMPM can express an admissible finite definition whose induced membership conforms to constitutional Extent.

**MODEL COMPATIBLE; INSTANCE MUST PROVE.**

### SG-DEF-03 — Finite Expression and Decidable Membership

D must be finite and evaluation must terminate.

**DIRECTLY BUILT INTO MODEL.**

### SG-DEF-04 — Decidable Definition Validity

The Specification must define a finite grammar and deterministic validation rules for D.

**SUPPORTED; SPECIFICATION DUTY REMAINS.**

### SG-DEF-05 — Decidable Semantic Equivalence

The Specification must define when permitted Ground representations express the same induced membership.

**SUPPORTED; SPECIFICATION DUTY REMAINS.**

### SG-DEF-06 — Refinement Closure

The predicate applies to canonical Survey meaning under compatible refinement rather than a one-time materialized inventory.

**STRONGLY SUPPORTED.**

### SG-DOWN-01 — Reference Without Redefinition

CMPM consumes FSF semantics by reference and creates no competing Survey mathematics.

**DIRECTLY SATISFIED BY MODEL.**

### SG-BOUND-01 — Membership-Only Semantics

CMPM introduces only World-space versus non-World-space.

**DIRECTLY SATISFIED BY MODEL.**

### SG-IF-01 — Canonical Status by Adoption

A mathematically valid candidate predicate is not canonical until adopted.

**FULLY COMPATIBLE.**

---

## 19. What This Selection Does Not Decide

This record does **not** select:

- the final canonical World-space instance;
- the exact World form;
- the exact World-space geometry;
- the primary machine-readable syntax for D;
- canonical serialization of D;
- a geometry expression language;
- whether D internally uses constructive set algebra;
- the final inclusion convention at a World limit dependent on unresolved FSF semantics;
- exact FSF coarse/fine meaning;
- Conformance;
- Reference Vectors;
- implementation technology;
- cryptographic attestation.

Those remain later Specification, canon-form, FSF, Conformance, Reference Vector, preservation, or instance-adoption questions.

---

## 20. Specification Consequences

The Spatial Ground Specification should now be drafted around CMPM.

At minimum it must define:

1. normative semantic objects: S, D, `M_D`, `W_D`, and `N_D`;
2. input validity and exact membership evaluation;
3. deterministic two-valued output and termination;
4. finite definition validity;
5. permitted FSF dependencies and prohibited higher-layer dependencies;
6. semantic equivalence rules;
7. refinement closure;
8. canonical limit as a consequence of membership;
9. constitutional validity conditions;
10. independent implementation contract;
11. invalid-input versus non-World distinction;
12. hooks for the later canon-form and serialization policy.

---

## 21. Selection Decision

The **Canonical Membership Predicate Model (CMPM)** is selected as the formal semantic model for Spatial Ground.

Formally:

```text
M_D : S → {WORLD, NON_WORLD}
```

with:

```text
W_D = { x ∈ S | M_D(x) = WORLD }
```

and:

```text
N_D = S \ W_D
```

subject to the adopted Spatial Ground Requirements, declared FSF dependencies, constitutional constraints, and future adopted Specification.

---

## 22. Why This Is the Best Path Forward

A geometric boundary can express membership.

A set algebra can express membership.

A scalar field can express membership.

A registry can materialize membership.

A Merkle structure can attest membership.

But none of those mechanisms is the architectural essence of Spatial Ground.

The essence is:

> **There is one exact answer, for every valid canonical Survey location, to whether that place participates in The World.**

CMPM makes that fact primary and allows every other mechanism to remain an expression, implementation, optimization, proof, or preservation device.

That is why it was selected.

---

## 23. Independent-Implementation Judgment

**PASS — MODEL APPEARS INDEPENDENTLY IMPLEMENTABLE.**

The model is abstract enough to permit genuinely independent implementations while exact enough to require identical canonical results.

The remaining proof burden belongs to Specification completion, prototype implementation, Conformance, Reference Vectors, adversarial testing, and reconstruction.

---

## 24. Pre-Gate-B Standing

With this record complete:

- adopted Requirements exist;
- FSF dependency review is complete;
- FSF dependency declaration is complete;
- formal membership model is selected;
- independent-implementation reasoning is recorded.

The remaining pre-Gate-B prerequisite before completing the Specification is:

> **Canon-Form Policy — one primary normative form per semantic element.**

After that policy is established, the Spatial Ground Specification may be drafted in adoptable form around CMPM.

---

## 25. Disposition

**FORMAL MODEL SELECTION RECORD — COMPLETE**

**SELECTED MODEL — CANONICAL MEMBERSHIP PREDICATE MODEL (CMPM)**

**INDEPENDENT-IMPLEMENTATION JUDGMENT — PASS FOR FORMAL DESIGN**

**CANONICAL WORLD-SPACE INSTANCE — NOT SELECTED**

**GATE B — NOT YET OPEN**

---

## 26. Governing Closing Statement

> **Membership is the Ground truth. Geometry expresses it. Representations carry it. Implementations evaluate it. None of those substitutes for it.**

And:

> **For every valid canonical Survey location, one adopted definition must yield one exact answer: World-space or non-World-space.**
