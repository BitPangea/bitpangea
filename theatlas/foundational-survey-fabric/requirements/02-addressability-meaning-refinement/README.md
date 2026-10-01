# Foundational Survey Fabric — Requirements II

## Addressability, Canonical Meaning, and Refinement

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Requirements Section:** II  
**Findings:** #7–#15  
**Canonical Page:** https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/02-addressability-meaning-refinement/  
**Status:** REQUIREMENTS-LEVEL FOUNDATION — CURRENT / RECONCILED THROUGH DAY #126

---

## Purpose

This directory preserves **Requirements II — Addressability, Canonical Meaning, and Refinement**.

The section defines the governing requirements for:

- universal addressability within the valid Survey mathematics;
- permanent canonical spatial meaning;
- precision by extension;
- independent implementation;
- separation of space from the things occupying space;
- derivation of spatial relationships from mathematics rather than stored semantic state;
- separation of Survey Domain capacity from World membership;
- specification over materialization;
- and one foundational reference supporting many derived views.

These are Requirements-level constraints.

They do not themselves constitute the final Specification.

---

## Governing Principle

> **Representation may change. Place must not.**

This principle governs addressing, refinement, durable representation, and compatible evolution throughout the Foundational Survey Fabric.

A canonical reference may acquire:

- greater exact precision;
- alternate governed representations;
- new implementation support;
- new higher-layer uses;
- or new derived views;

without moving, renumbering, or reinterpreting the canonical place it denotes.

---

## Findings #7–#15

### Finding #7 — Universal Addressability Within the Survey Domain

Every location validly representable under the canonical Survey mathematics must be mathematically addressable whether or not anything is materialized there.

Addressability does not require storage.

### Finding #8 — Permanent Canonical Address Meaning

Once established under the governing Specification, a canonical reference must continue to resolve to the same canonical spatial meaning.

Different valid representations may exist only where they preserve deterministic correspondence to that same meaning.

### Finding #9 — Precision by Extension

Greater precision must extend the reference system rather than replace it.

Later formal mathematical design has now selected the **Exact Coordinate Extension Model (ECEM)** as the current candidate realization of this Requirement.

Under ECEM:

```text
representational capacity may increase
canonical place does not move
```

There are no foundational parent/child place states, migration semantics, or hierarchical renumbering implied by added precision.

This is a candidate mathematical realization of Finding #9, not an amendment to the Requirement itself.

### Finding #10 — Independent Implementations, Identical Results

Independent conforming implementations must derive the same canonical result from the same canonical inputs.

Implementation technology may vary.

Canonical truth may not.

### Finding #11 — The Survey Fabric Knows Space, Not the Things in Space

The Survey Fabric defines spatial reference.

Higher layers define the entities, objects, rights, boundaries, paths, uses, or meanings associated with that space.

### Finding #12 — Derived Spatial Relationships

Where Survey mathematics inherently determines a relationship, that relationship should normally be derived rather than stored as an independent competing truth.

Parcel or higher-layer relationships remain owned by the layers defining those entities.

### Finding #13 — Survey Domain Need Not Match World Form

The Survey Domain defines reference capacity.

Spatial Ground determines World participation.

Accordingly:

> **Reference capacity is not territory.**

The current candidate Survey Domain is parameterized as:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

with exact positive `H`.

The numerical value of `H` remains open.

### Finding #14 — Specification Over Materialization

Canonical Survey space should be reconstructable from governing mathematics rather than depending on a permanently materialized inventory of every possible address or spatial unit.

Caching, indexing, and precomputation remain implementation concerns.

### Finding #15 — One Foundational Reference, Many Derived Views

Higher systems may use local, derived, application-specific, or user-facing coordinate systems.

Where authoritative BitPangea location matters, those systems must remain deterministically related to the one canonical Survey reference system.

---

## Current Candidate Realization

Later FSF work has selected a coherent candidate realization of several Requirements in this section.

Current candidate architecture includes:

```text
CRPC
→ exact rational Pang coordinates

ECEM
→ precision by exact coordinate extension

FSF-CJSON-1.0
→ deterministic canonical machine representation
```

These later decisions operate inside the Requirements envelope.

They do not rewrite Findings #7–#15.

The still-open matters include:

- final public / canonical address syntax;
- final address grammar;
- final Specification identity and version-succession governance;
- final numerical Survey Domain half-span `H`;
- remaining broader mathematical gates outside the solved addressing/refinement core.

---

## Lineage and Compatibility

Requirements II is one of the primary sources for the FSF continuity doctrine.

The current candidate rule is:

> **Representations may evolve. Canonical place may not drift.**

Compatible evolution may:

- add representational capacity;
- add a governed alternate representation;
- improve implementation support;
- or refine the standard;

but it may not:

- move established place;
- renumber established canonical references;
- reinterpret established canonical meaning;
- silently convert one place into another;
- or make representation identity become spatial identity.

Final institutional version identifiers, succession rules, migration policy, and adoption authority remain governance questions above this Requirements section.

---

## Institutional Sequence

The governing FSF sequence remains:

```text
Requirements
→ Specification
→ Conformance
→ Reference Vectors
```

For this section:

- **Requirements** establish permanent meaning and refinement constraints.
- **Specification** defines the exact addressing and refinement mathematics.
- **Conformance** proves an implementation follows those rules.
- **Reference Vectors** demonstrate the defined behavior.

Reference Vectors do not create missing address or refinement mathematics.

---

## Higher-Layer Boundary

The Survey Fabric may tell a higher layer **where** something is.

It does not thereby own **what** that thing is.

This boundary applies to:

- Spatial Ground World membership;
- Parcel identity;
- ownership;
- governance;
- infrastructure;
- application state;
- visible presentation;
- and other higher-layer semantics.

---

## Repository Guidance

Use this directory for the authoritative presentation and supporting documentation of **Requirements II — Addressability, Canonical Meaning, and Refinement**.

Do not use it to:

- create new address syntax by implementation convenience;
- turn aliases into competing canonical meanings;
- make materialized indexes authoritative;
- redefine World membership;
- impose Parcel semantics;
- or treat representation/version identity as spatial identity.

If later implementation behavior conflicts with Findings #7–#15, the implementation or downstream design must be reconciled.

The Requirements should not be weakened to accommodate it.

---

## Standing

**FINDINGS #7–#15 — PRESERVED**

**INDEX.HTML — UPDATED FOR CURRENT ECEM INTERPRETATION**

**ECEM — CANDIDATE REALIZATION OF PRECISION BY EXTENSION**

**CRPC — CANDIDATE EXACT ADDRESSING FOUNDATION**

**CANONICAL PLACE CONTINUITY — PRESERVED**

**FINAL ADDRESS SYNTAX / GRAMMAR — OPEN**

**SURVEY DOMAIN NUMERICAL HALF-SPAN `H` — OPEN**

**README.md — CREATED**
