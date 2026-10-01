# Foundational Survey Fabric — Requirements VI

## Geometry, Topology, Measurement, and Spatial Operations

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Requirements Section:** VI  
**Findings:** #44–#77  
**Canonical Page:** https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/06-geometry-topology-measurement-operations/  
**Status:** REQUIREMENTS-LEVEL FOUNDATION — CURRENT / RECONCILED THROUGH DAY #126

---

## Purpose

This directory preserves **Requirements VI — Geometry, Topology, Measurement, and Spatial Operations**.

This section defines the governing constraints for:

- exact continuity and connectedness;
- derived spatial predicates;
- semantically neutral geometry;
- exact Survey Domain limits;
- exact transformations;
- uniform Pang scale;
- sub-Pang precision;
- path and boundary length;
- spatial composition;
- validity and normalization;
- deterministic ordering;
- serialization and interchange;
- versioning;
- representation durability;
- spatial equivalence;
- orientation;
- proximity;
- lossless / lossy precision handling;
- exact comparison;
- no silent snapping;
- one connected Survey Domain;
- and semantic neutrality of internal partitions.

These are Requirements-level constraints.

They govern later mathematical design without themselves becoming the mathematical implementation.

---

## Current Candidate Mathematical Core

Subsequent formal mathematical work has resolved a substantial candidate core.

### Primitive Geometry

The current candidate primitive set is:

```text
Point
Segment
Simple Closed Polygonal Extent (SCPE)
```

### Exact Predicates

The current candidate core uses exact rational mathematics for:

```text
point equality
orientation
point-on-segment
segment intersection
boundary classification
point-in-SCPE
polygon simplicity
containment
supported geometric equality
```

No epsilon or implementation-specific tolerance determines canonical truth.

### Normalization

Current candidate normalization includes:

```text
CRPC reduction
Segment lexicographic endpoint order
SCPE redundant-collinear removal
counterclockwise traversal
lexicographically least start vertex
no repeated closure vertex
```

### Precision

```text
CRPC
→ exact rational Pang coordinates

ECEM
→ exact precision by coordinate extension
```

### Serialization

```text
FSF-CJSON-1.0
```

is the current primary canonical machine-readable representation for the supported core.

### Orientation

```text
right-handed frame
counterclockwise positive rotation
```

is the current candidate orientation convention.

---

## Survey Domain Standing

The candidate Survey Domain remains:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

with exact positive `H`.

The geometry / boundary are candidate-resolved.

The numerical value of `H` remains OPEN.

Survey Domain limits define reference capacity.

They do not define World membership.

---

## Findings #44–#77 — Current Interpretation

### Findings #44–#45 — Continuity, Connectedness, and Predicates

The candidate Point / Segment / SCPE core now supports exact deterministic predicates for the solved geometry profile.

Higher-layer meaning remains outside FSF.

### Findings #46–#47 — No Entity Identity / Nonexclusive Reference

Geometry does not become object identity.

Multiple higher-layer entities may reference the same canonical space where their own systems permit it.

### Findings #48–#49 — Domain Limits / No Privileged Center

The Domain has exact candidate boundary semantics, but final numerical capacity remains open.

The origin at `(0,0)` is mathematically privileged as reference, not culturally or geographically privileged.

### Finding #50 — Transform the View, Not the Truth

Current candidate exact transformation support includes:

- translation;
- positive uniform scale;
- identity;
- inverses for the supported transforms;
- exact composition within the supported rational-preserving profile.

Arbitrary exact rotation remains open.

Reflection may exist as a derived transform but is not part of canonical production placement.

### Findings #51–#52 — Terrain and Surface Belong Above

Elevation, terrain, visible Surface, rendering, volumetric structure, and experiential geography remain higher-layer responsibilities.

### Finding #53 — Uniform Pang Scale

One Pang has one canonical meaning everywhere in the Survey Domain.

### Finding #54 — Sub-Pang Precision

CRPC / ECEM now provide the current candidate realization.

Named subunits are not required.

### Finding #55 — Path and Boundary Length

The Requirement remains open at complete FSF scope.

General exact path / boundary-length scalar closure has not yet been selected.

### Finding #56 — Exact Spatial Composition

The Requirement remains.

Exact predicates and current SCPE geometry are solved for the candidate core, but general union / intersection / difference result geometry and operation closure remain open.

### Finding #57 — Deterministic Validity and Normalization

Candidate validity and normalization rules now exist for CRPC and the supported primitive core.

Invalid geometry must not be repaired by silent snapping or guessed interpretation.

### Finding #58 — Canonical Ordering Without Hierarchy

Lexicographic ordering is now selected where required by the current core.

That ordering is purely reproducibility machinery, not semantic rank.

### Finding #59 — Canonical Serialization and Interchange

FSF-CJSON-1.0 is the current primary canonical machine-readable representation.

Compatible alternate governed representations may exist only if they preserve lossless deterministic correspondence to the same normalized mathematical object.

### Finding #60 — Version the Standard, Not the Place

This remains a governing lineage rule.

> **Representations may evolve. Canonical place may not drift.**

Final Specification identity, formal succession, migration, and precedence governance remain open.

### Finding #61 — Meaning Independent of Verification Technology

Cryptography, signatures, blockchain, databases, or verification systems may authenticate records.

They do not define canonical spatial meaning.

### Finding #62 — Rights and Ownership Belong Above

Ownership, access, possession, governance authority, and related rights remain higher-layer concerns.

### Finding #63 — Independently Implementable

The candidate core is designed for independent reproduction and exact cross-implementation comparison.

### Finding #64 — One Meaning, Many Durable Expressions

Representation identity is not spatial identity.

Where compatibility is claimed, durable forms must correspond deterministically to the same normalized mathematical object.

### Finding #65 — Neutral Conflict Detection

FSF may reveal exact spatial conflict.

It does not adjudicate the higher-layer consequences.

### Finding #66 — Exact Spatial Equivalence

Exact equivalence is candidate-resolved for the supported Point / Segment / SCPE core.

Broader future geometry families may require additional formal rules.

### Findings #67–#68 — Scale and Orientation

Scale transformations remain derived.

The current candidate frame is singular, right-handed, and counterclockwise-positive.

### Finding #69 — Exact Closeness

FSF may calculate exact geometric separation or threshold predicates once the required measurement mathematics are defined.

Semantic labels such as “near” remain higher-layer interpretations.

### Findings #70–#73 — Precision Depth / Representation

ECEM supports exact precision without semantic tiers.

Canonical, storage, and rendering precision remain distinct.

Lossy reduction must be detectable.

### Findings #74–#75 — Exact Comparison / No Silent Snapping

At the Survey layer:

> **equal means equal**

and:

> **near is not equal**

Normalization may remove permitted redundancy.

It may not move place.

### Findings #76–#77 — Connected Domain / Neutral Partitions

The Survey Domain remains one connected reference space.

Internal mathematical subdivisions, if used, do not acquire Region, Parcel, governance, or cultural meaning merely because they exist.

---

## Major Open Gates Preserved

This section is not fully mathematically closed.

Still open at complete FSF scope:

- numerical Survey Domain half-span `H`;
- final canonical address syntax / grammar;
- exact angular unit / notation;
- general Euclidean distance scalar closure;
- general path / boundary-length scalar closure;
- arbitrary exact rotation;
- general composition / Boolean-result geometry;
- operation-domain / output closure;
- final Specification identity / version succession / migration governance;
- final complexity / parser limits;
- general closed-set / arbitrary difference compatibility.

These may not be silently resolved by implementation, Conformance, or Reference Vectors.

---

## Institutional Sequence

The governing order remains:

```text
Requirements
→ Specification
→ Conformance
→ Reference Vectors
```

Reference Vectors demonstrate the Specification.

They do not create the Specification.

For this section:

```text
if mathematics is defined:
    build exact executable vectors

if mathematics is parameterized:
    build symbolic / parameterized vectors

if mathematics is unresolved:
    preserve the dependency as OPEN
```

---

## Repository Guidance

Use this directory for the authoritative presentation and supporting documentation of **Requirements VI — Geometry, Topology, Measurement, and Spatial Operations**.

Do not use it to:

- introduce tolerance-based canonical geometry;
- make higher-layer identity part of FSF;
- treat terrain or Surface as foundational Survey truth;
- equate Survey Domain with World membership;
- invent Boolean-result semantics not yet specified;
- approximate unresolved distance / rotation mathematics;
- make verification technology define place;
- or allow representation/version identity to become spatial identity.

---

## Documentation Standing

The `index.html` required a targeted update because several passages still described candidate-resolved matters as future or unresolved:

- sub-Pang precision mechanism;
- canonical ordering for the current core;
- canonical serialization / interchange for the current core;
- handedness and positive rotational orientation.

Those passages have been reconciled while preserving the open gates that remain genuinely unresolved.

---

## Standing

**FINDINGS #44–#77 — PRESERVED**

**POINT / SEGMENT / SCPE CORE — CANDIDATE RESOLVED**

**EXACT CORE PREDICATES — CANDIDATE RESOLVED**

**CORE NORMALIZATION — CANDIDATE RESOLVED**

**CRPC / ECEM — CANDIDATE RESOLVED**

**FSF-CJSON-1.0 — CANDIDATE RESOLVED**

**CANONICAL HANDEDNESS / POSITIVE ROTATION — CANDIDATE RESOLVED**

**GENERAL BOOLEAN / OPERATION CLOSURE — OPEN**

**GENERAL DISTANCE / PATH-LENGTH CLOSURE — OPEN**

**ARBITRARY EXACT ROTATION — OPEN**

**INDEX.HTML — UPDATED**

**README.md — CREATED**
