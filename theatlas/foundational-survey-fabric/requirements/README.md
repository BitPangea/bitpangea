# Foundational Survey Fabric — Requirements Framework

## Governing Requirements Index

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Scope:** Requirements Findings #1–#85  
**Canonical Page:** https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/  
**Status:** REQUIREMENTS FRAMEWORK — AUDITED / CURRENT / GOVERNING

---

## Purpose

This directory is the governing index for the complete **Foundational Survey Fabric Requirements Framework**.

The framework defines the architectural envelope within which all later FSF mathematics, Specification rules, Conformance obligations, Reference Vectors, implementations, and adoption decisions must operate.

The Requirements establish what must be preserved, permitted, excluded, and proven.

They do not themselves constitute the final mathematical Specification.

---

## Institutional Order

The governing order is:

```text
Requirements
→ Specification
→ Conformance
→ Reference Vectors
→ independent implementation / proof
→ canonical adoption through valid authority
```

Each layer has a distinct role:

- **Requirements** establish the governing constraints.
- **Specification** defines the formal mathematics.
- **Conformance** defines proof obligations.
- **Reference Vectors** demonstrate expected behavior.
- **Independent implementations** prove reproducibility.
- **Canonical adoption** occurs through valid authority, not by technical correctness alone.

Reference Vectors demonstrate the Specification.

They do not create the Specification.

---

## Seven Requirements Sections

### Requirements I — Foundational Purpose and Scope

**Findings #1–#6**

Defines:

- minimum permanent spatial content;
- separation from Parcels and higher-layer responsibilities;
- proper reach of immutability;
- extension over mutation;
- preservation of unknown future use.

### Requirements II — Addressability, Canonical Meaning, and Refinement

**Findings #7–#15**

Defines:

- universal addressability within representable canonical space;
- permanent canonical meaning;
- precision by extension;
- independent implementation;
- space / entity separation;
- Survey Domain vs. World distinction;
- specification over materialization;
- one foundational reference supporting many derived views.

### Requirements III — Authority, Consensus, and Specification Evolution

**Findings #16–#17**

Defines:

- technical reproducibility vs. canonical authority;
- compatible evolution without spatial mutation.

Core continuity rule:

> **Representations may evolve. Canonical place may not drift.**

### Requirements IV — Mathematical Ontology and Survey Domain Structure

**Findings #18–#33**

Defines:

- no permanent cell ontology by default;
- finite canonical Survey Domain;
- exact precision;
- self-resolving references;
- planar ground;
- exact mathematics;
- semantic neutrality;
- canonical extents;
- exact edge semantics;
- World membership above FSF.

### Requirements V — Native BitPangea Measurement and Orientation

**Findings #34–#43**

Defines:

- Pang as native linear scale;
- square Pang as area expression;
- exact spatial separation;
- native directions;
- permanent origin;
- one global canonical frame;
- address / measurement agreement;
- absolute reference;
- one canonical angular system.

### Requirements VI — Geometry, Topology, Measurement, and Spatial Operations

**Findings #44–#77**

Defines:

- exact continuity and predicates;
- transformations;
- measurement;
- exact spatial composition;
- validity / normalization;
- ordering;
- serialization;
- versioning;
- representation durability;
- equivalence;
- orientation;
- precision conversion;
- exact comparison;
- connected domain;
- neutral internal partitions.

### Requirements VII — Finite Knowability, Computability, and Conformance

**Findings #78–#85**

Defines:

- finite exact representation;
- minimal primitive discipline;
- hidden-state independence;
- deterministic termination;
- controlled complexity;
- exact-or-invalid canonical truth;
- Mandatory Conformance Core;
- staged readiness and adversarial proof expectations.

---

## Adopted Mathematical Standing

The adopted Specification operates inside this Requirements envelope.

The current production baseline includes:

```text
FSF-SPEC-1.0
→ canonically adopted Foundational Survey Fabric Specification

CRPC
→ exact reduced rational Pang coordinates

ECEM
→ exact compatible precision / refinement semantics

Point / Segment / SCPE
→ adopted primitive geometry core for the production profile

exact rational predicates
→ no epsilon / no tolerance-based truth

deterministic normalization
→ canonical convergence

FSF-CJSON-1.0
→ canonical machine serialization

right-handed frame
counterclockwise positive rotation
```

The canonical Survey Domain is:

```text
H = 1,000,000 Pang

D = [-1,000,000,+1,000,000]²
```

The governed production placement envelope is:

```text
P = [-500,000,+500,000]²
```

with the required relationship:

```text
World-space ⊂ interior(P) ⊂ interior(D)
```

`H = 1,000,000 Pang` is a governed foundational design constant.

---

## Current Architecture Boundary

The Foundational Survey Fabric owns:

> **canonical spatial reference and mathematics**

It does not own:

- World membership;
- Parcel identity;
- ownership;
- governance;
- terrain;
- visible Surface;
- rights;
- infrastructure;
- application state;
- civic or geographic meaning.

The key handoff is:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

A lower layer constrains what a higher layer cannot violate.

It does not prescribe the higher layer's internal design unless that structure is irreducibly necessary to the lower layer itself.

---

## Adopted / Reserved Distinction

### Adopted Production Core

```text
FSF-SPEC-1.0
CRPC
canonical origin (0,0)
canonical axes / handedness
counterclockwise positive rotation
H = 1,000,000 Pang
D = [-1,000,000,+1,000,000]²
P = [-500,000,+500,000]²
Point / Segment / SCPE
exact core predicates
deterministic normalization
exact SCPE area
FSF-CJSON-1.0
ECEM
representation / lineage continuity semantics
```

### Reserved / Outside Current Production Profile

```text
unrestricted Boolean / composite-result closure
general arbitrary difference closure
other extended mathematics not adopted by FSF-SPEC-1.0
```

Reserved capability is not missing canonical truth for the current production profile.

It may not be filled by Conformance, Reference Vectors, or implementation convenience.

---

## Reference Vector Rule

The reconciled corpus follows:

```text
if mathematics is defined:
    build exact executable vectors

if mathematics is parameterized:
    build symbolic / parameterized vectors

if mathematics is unresolved:
    preserve the dependency as OPEN
```

This preserves Requirements ownership and prevents test artifacts from inventing mathematics.

---

## Documentation Standing

The Requirements Framework remains valid and governing.

Findings #1–#85 do not need reopening.

The current standing is:

- Requirements Integrity Audit complete;
- Findings #1–#85 preserved;
- FSF-SPEC-1.0 canonically adopted;
- FSF-CJSON-1.0 established for the adopted production profile;
- Conformance and Reference Vectors remain subordinate to Requirements and Specification;
- broader capability outside the adopted production profile remains reserved unless later specified through governed evolution.

---

## Repository Guidance

Use this directory for:

- the governing Requirements index;
- Requirements-level navigation;
- Requirements-level scope and boundary documentation;
- traceability to Findings #1–#85.

Do not use it to:

- redefine adopted Specification mathematics;
- define implementation-specific behavior;
- invent Reference Vector expected results;
- create canonical authority independently of valid adoption;
- or move higher-layer responsibilities into FSF.

If downstream work conflicts with the Requirements, reconcile the downstream work first.

---

## Standing

**FINDINGS #1–#85 — PRESERVED**

**REQUIREMENTS INTEGRITY AUDIT — COMPLETE**

**FSF-SPEC-1.0 — CANONICALLY ADOPTED**

**FSF-CJSON-1.0 — CANONICAL MACHINE SERIALIZATION**

**ADOPTED PRODUCTION CORE — ESTABLISHED**

**RESERVED CAPABILITY — OUTSIDE CURRENT PRODUCTION PROFILE**

**REQUIREMENTS REMAIN GOVERNING**
