# Spatial Ground — Foundational Survey Fabric Dependency Review

**Record Type:** Architectural Dependency Review  
**Status:** COMPLETE  
**Disposition:** PASS WITH RESERVED UPSTREAM MATHEMATICAL DEPENDENCIES  
**Scope:** Foundational Survey Fabric dependencies required by Spatial Ground  
**Authority Boundary:** This review documents what Spatial Ground may rely upon from the Foundational Survey Fabric. It does not redesign the Foundational Survey Fabric, invent missing Survey mathematics, or adopt the Spatial Ground Specification.

---

## 1. Purpose

Spatial Ground depends upon the Foundational Survey Fabric (FSF) for canonical spatial reference and mathematics. Before Spatial Ground formal design proceeds, the dependency boundary must be explicit.

This review asks:

> **Does the current Foundational Survey Fabric Specification provide a sufficient architectural contract for Spatial Ground formal design to proceed without Spatial Ground redefining or prematurely completing FSF mathematics?**

The answer is:

> **Yes.**

The FSF provides sufficient architectural obligations for Spatial Ground formal design to proceed. Several exact mathematical mechanisms remain unresolved upstream, but those unresolved mechanisms do not require Spatial Ground to stop architectural and formal-model work so long as Spatial Ground treats them as dependencies rather than filling them in itself.

---

## 2. Governing Layer Boundary

The governing dependency rule is:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

Accordingly:

- FSF owns the canonical Survey Domain.
- FSF owns reference validity.
- FSF owns canonical spatial meaning.
- FSF owns canonical position and extent semantics.
- FSF owns reference equivalence and normalization.
- FSF owns precision and refinement mathematics.
- FSF owns topology, connectedness, boundary conventions, and geometric predicates.
- FSF owns canonical operations.
- FSF owns canonical serialization and specification identity.
- FSF owns exactness, validity, deterministic termination, and implementation-independent canonical results.
- Spatial Ground may consume those truths.
- Spatial Ground may not redefine them.

Spatial Ground owns only the additional canonical proposition:

> **Which valid canonical Survey space participates in BitPangea as World-space?**

---

## 3. Sources Reviewed

This review examined the complete current seven-part FSF Specification structure and its governing Specification index:

1. **Specification Index** — `/theatlas/foundational-survey-fabric/specification/`
2. **Specification 01 — Survey Domain and Ground Model** — `/specification/01-domain-model/`
3. **Specification 02 — Canonical Frame and Measurement** — `/specification/02-frame-measurement/`
4. **Specification 03 — Canonical Addressing and Precision** — `/specification/03-addressing-refinement/`
5. **Specification 04 — Spatial Expressions and Geometry** — `/specification/04-expressions-geometry/`
6. **Specification 05 — Canonical Operations** — `/specification/05-operations/`
7. **Specification 06 — Serialization and Specification Identity** — `/specification/06-serialization-identity/`
8. **Specification 07 — Computability Rules** — `/specification/07-computability-rules/`

The FSF Specification explicitly distinguishes accepted architectural obligations from still-unselected formal mathematics. That distinction governs this review.

---

## 4. Review Method

Each Spatial Ground dependency was classified as one of:

- **SUFFICIENT** — the FSF contract is sufficiently defined for Spatial Ground to rely upon it.
- **SUFFICIENT AS CONTRACT · FORMAL REALIZATION OPEN** — FSF clearly owns and constrains the dependency, but the exact mathematical mechanism remains unselected.
- **UNRESOLVED UPSTREAM** — the FSF itself expressly leaves a semantic dependency unresolved; Spatial Ground may not resolve it on FSF's behalf.
- **BLOCKS SPATIAL GROUND SPECIFICATION** — Spatial Ground cannot proceed to an adoptable formal Specification without upstream resolution.

No dependency reviewed here presently requires Spatial Ground formal design to stop. One dependency remains expressly unresolved upstream and must be watched as formal model selection proceeds.

---

## 5. Dependency Findings

### 5.1 Survey Domain and Reference Validity

**Status:** SUFFICIENT

FSF defines one finite canonical Survey Domain and makes that Domain the scope within which canonical Survey reference is valid.

Spatial Ground may rely upon:

- one canonical Survey reference domain;
- exact Survey Domain limits;
- canonical reference validity being an FSF question;
- no valid canonical Survey reference beyond the Survey Domain;
- every authoritative World-space location being representable within the Survey Domain.

Spatial Ground must not infer:

- that every valid Survey location is World-space;
- that the Survey Domain itself is The World;
- that FSF domain limits are the World boundary.

**Ground consequence:** World membership is evaluated over valid canonical Survey space; Survey validity and World membership remain distinct.

### 5.2 Reference Capacity and World Membership

**Status:** SUFFICIENT

FSF expressly separates reference capacity from World membership.

Spatial Ground may rely upon:

- valid Survey reference existing independently of World participation;
- higher spatial Architecture domains determining which valid Survey space constitutes The World;
- authoritative World-space remaining representable in FSF without FSF itself deciding membership.

**Ground consequence:** Spatial Ground can define World participation without modifying FSF reference capacity.

### 5.3 Position and Extent Semantics

**Status:** SUFFICIENT

FSF distinguishes exact canonical positions from exact canonical extents and treats both as spatial expressions rather than independent foundational entities.

Spatial Ground may rely upon:

- exact canonical reference to position;
- exact canonical expression of extent;
- one foundational spatial mathematics supporting both;
- higher-layer identity and meaning remaining separate from the spatial expression itself.

Spatial Ground must not assume:

- that every canonical reference is inherently an area-like cell;
- that FSF spatial expressions carry World membership merely because they are spatially valid.

**Ground consequence:** The eventual membership model must be explicit about the kind of canonical Survey expression to which membership applies.

### 5.4 Canonical Frame, Scale, and Measurement

**Status:** SUFFICIENT

FSF owns the global canonical frame, permanent origin, canonical orientation, Pang scale, square-Pang area measure, and exact canonical measurement obligations.

Spatial Ground may rely upon:

- one global canonical frame;
- uniform Pang scale;
- exact relationship between canonical addressing and canonical measurement;
- higher-layer coordinate systems remaining derived rather than authoritative.

Spatial Ground must not define:

- a competing coordinate frame;
- its own canonical unit of measure;
- an alternate canonical orientation;
- an alternate authoritative location system.

**Ground consequence:** Spatial Ground may be mathematically representation-independent while remaining fully subordinate to the one FSF frame.

### 5.5 Canonical Spatial Meaning

**Status:** SUFFICIENT

FSF requires permanent and deterministic canonical address meaning.

Spatial Ground may rely upon:

- a canonical Survey reference preserving canonical spatial meaning;
- display forms, aliases, encodings, or local coordinate views not redefining canonical place;
- canonical meaning remaining independent of higher-layer objects.

**Ground consequence:** Membership attaches to canonical Survey meaning, not to a transient display string, serialization, user-facing label, or implementation-specific form.

### 5.6 Semantic Identity and Representation Independence

**Status:** SUFFICIENT

FSF expressly separates mathematical spatial truth from the documents, encodings, schemas, storage structures, and durable representations used to express it.

Spatial Ground may rely upon:

- one canonical spatial meaning across multiple durable representations;
- normative forms being semantically equivalent when they describe the same canonical space;
- obsolete representations not destroying the underlying place;
- verification technology not defining spatial meaning.

**Ground consequence:** Spatial Ground membership must remain semantic and representation-independent.

### 5.7 Spatial Equivalence

**Status:** SUFFICIENT AS CONTRACT · FORMAL REALIZATION OPEN

FSF requires exact canonical rules for determining when differently expressed references, extents, compositions, or geometric constructions represent the same canonical BitPangea space.

FSF also requires Survey-layer equality and related comparisons to be exact rather than tolerance-based.

The exact equivalence algorithm remains unresolved.

Spatial Ground may rely upon:

- the existence of one exact FSF equivalence relation;
- equivalent canonical Survey meaning not producing competing foundational truths;
- exact comparison rather than fuzzy or tolerance-based equivalence.

Spatial Ground must not:

- invent the FSF equivalence algorithm;
- substitute string equality for semantic equality unless FSF ultimately defines that equivalence;
- use approximate comparison to establish membership identity.

**Ground consequence:** Equivalent Survey meaning must yield equivalent Ground membership results, but Ground must delegate the equivalence determination to the governing FSF semantics.

### 5.8 Canonicalization and Normalization

**Status:** SUFFICIENT AS CONTRACT · FORMAL REALIZATION OPEN

FSF requires deterministic normalization of valid equivalent noncanonical representations into canonical form.

Normalization must preserve place exactly and may not move, snap, reinterpret, or alter an extent.

The exact normalization algorithm remains unresolved.

**Ground consequence:** Spatial Ground may consume normalized FSF meaning but may not define a competing normalization procedure.

### 5.9 Validity and Invalid Inputs

**Status:** SUFFICIENT

FSF requires conforming implementations to distinguish:

- canonical expressions;
- valid noncanonical expressions;
- malformed expressions;
- impossible precision expressions;
- references outside the canonical Survey Domain.

Invalid or ambiguous input may not be silently assigned canonical spatial meaning.

**Ground consequence:** Spatial Ground membership evaluation is defined over valid canonical Survey meaning. Invalid Survey input is not a third membership state.

### 5.10 Exactness and Deterministic Termination

**Status:** SUFFICIENT

FSF requires:

- finite canonical representation;
- exact deterministic mathematics;
- no implementation-specific floating-point tolerance as canonical truth;
- deterministic termination for required canonical operations over valid finite inputs;
- authoritative results derived only from explicit canonical inputs and governing rules.

**Ground consequence:** Spatial Ground may require exact, deterministic membership without defining the lower-layer mathematics that makes canonical Survey interpretation exact.

### 5.11 Implementation Independence

**Status:** SUFFICIENT

FSF requires independent conforming implementations to derive identical canonical results from identical canonical inputs.

Internal storage models, caches, languages, and optimization strategies may differ without changing the answer.

**Ground consequence:** Spatial Ground may require implementation-independent membership results and later test them through independent implementation without assigning authority to any single implementation.

### 5.12 Specification Identity and Compatible Lineage

**Status:** SUFFICIENT

FSF versions the standard rather than the place.

Compatible specification evolution must preserve previously established canonical spatial meaning and must not renumber, relocate, or reinterpret established canonical places.

**Ground consequence:** Spatial Ground may bind itself to governing FSF lineage while preserving membership meaning across compatible FSF evolution.

A future incompatible FSF succession would require explicit architectural treatment rather than silent reinterpretation.

### 5.13 Boundary Inclusion and Exact Limits

**Status:** SUFFICIENT AS CONTRACT · FORMAL REALIZATION OPEN

FSF owns exact conventions for:

- shared edges;
- boundary inclusion and exclusion;
- contact;
- extent limits;
- exact endpoint semantics.

The precise formal notation and final inclusion convention remain unresolved.

**Ground consequence:** Spatial Ground may define a canonical World limit only through FSF-expressible exact geometry and must inherit FSF boundary semantics once formally selected.

Ground must not invent an independent edge convention.

### 5.14 Topology and Connectedness

**Status:** SUFFICIENT AS CONTRACT · FORMAL REALIZATION OPEN

FSF owns exact continuity, discontinuity, connectedness, intersection, overlap, containment, separation, shared-boundary, and related geometric predicates.

Connectedness is to be deterministically evaluated from canonical geometry rather than stored as an independent foundational fact.

The final formal primitive set and predicate algorithms remain unresolved.

**Ground consequence:** Spatial Ground may carry a constitutional connectedness obligation while delegating the mathematical proof of connectedness to FSF geometry.

Ground must not create its own topology.

### 5.15 Coarse and Fine Reference Semantics

**Status:** UNRESOLVED UPSTREAM

FSF requires extensible precision without migration and requires additional precision to extend established spatial reference rather than renumber, relocate, reinterpret, or invalidate existing references.

However, FSF expressly leaves unresolved:

> the exact relationship between coarser and finer canonical references.

This is the most significant unresolved semantic dependency identified by this review.

Spatial Ground may rely upon:

- refinement not changing established canonical place;
- greater precision extending rather than migrating the reference system;
- refinement stability as an architectural obligation.

Spatial Ground may not yet assume:

- that a coarse reference denotes an extent;
- that it denotes a point with bounded uncertainty;
- that a finer reference is a subset of a coarse reference;
- that parent/child reference semantics exist in any particular form;
- that coarse membership can be inferred from all or some finer descendants;
- that a specific hierarchical subdivision model will be selected.

**Ground consequence:** Any candidate membership model whose correctness depends upon one particular coarse/fine semantic interpretation must mark that dependency explicitly.

If the selected Spatial Ground formal model requires a specific unresolved FSF refinement semantics in order to be defined unambiguously, upstream resolution becomes a precondition to Gate B.

---

## 6. Reserved Upstream Mathematical Dependencies

The following FSF matters remain mathematically open and must stay upstream:

1. exact Survey Domain geometry;
2. exact coordinate representation;
3. exact origin placement;
4. exact precision mechanism;
5. exact coarse/fine reference semantics;
6. exact equivalence algorithm;
7. exact normalization algorithm;
8. exact boundary-inclusion convention;
9. exact topology/predicate algorithms;
10. exact operation algorithms and canonical return forms;
11. exact serialization and interchange realization;
12. exact computational proofs and executable Conformance rules.

These are **not** deficiencies for Spatial Ground to repair.

They are dependencies to preserve.

---

## 7. Spatial Ground Design Permission

The current FSF Specification explicitly permits formal mathematical design to proceed while some lower-level mathematical choices remain unresolved, provided the candidate:

- maps credibly to accepted Requirements;
- contains no known contradiction with immutable spatial truth;
- does not represent unresolved lower-layer mathematics as already settled.

Therefore:

> **Spatial Ground formal design may proceed.**

This permission does not constitute adoption of a Spatial Ground formal model or Specification.

---

## 8. Gate Consequence

This review does **not** open Gate B.

Before Spatial Ground Specification adoption, the architecture still requires:

1. an FSF–Spatial Ground Dependency Declaration;
2. a formal model-selection record with independent-implementation reasoning;
3. a canon-form policy establishing one primary form per semantic element;
4. a completed Spatial Ground Specification suitable for adoption review.

The unresolved FSF coarse/fine semantic relationship must remain visible throughout those steps.

If the selected Ground model does not depend on a particular unresolved coarse/fine interpretation, that upstream issue may remain reserved.

If the selected Ground model does depend on one, the relevant FSF question must be resolved before Gate B can close.

---

## 9. Review Disposition

**BULLET #3 — COMPLETE**

**FSF DEPENDENCY REVIEW — PASS WITH RESERVED UPSTREAM MATHEMATICAL DEPENDENCIES**

**SPATIAL GROUND FORMAL DESIGN MAY PROCEED**

**GATE B — NOT YET OPEN**

The Foundational Survey Fabric provides the architectural contract Spatial Ground requires. Spatial Ground may now proceed toward formal model selection and Specification work while preserving unresolved FSF mathematics as explicit upstream dependencies rather than silently completing them within the Ground layer.

---

## 10. Governing Closing Rule

> **Depend on FSF truth. Do not manufacture FSF truth.**

The purpose of this review is not to make the Foundational Survey Fabric more complete from within Spatial Ground.

It is to ensure that Spatial Ground remains exactly as dependent on the foundation as necessary — and no more powerful than its place in the Architecture permits.
