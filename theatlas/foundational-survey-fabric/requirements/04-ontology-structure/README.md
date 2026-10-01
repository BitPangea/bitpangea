# Foundational Survey Fabric — Requirements IV

## Mathematical Ontology and Survey Domain Structure

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Requirements Section:** IV  
**Findings:** #18–#33  
**Canonical Page:** https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/04-ontology-structure/  
**Status:** REQUIREMENTS-LEVEL FOUNDATION — CURRENT / RECONCILED THROUGH DAY #126

---

## Purpose

This directory preserves **Requirements IV — Mathematical Ontology and Survey Domain Structure**.

The section defines the foundational ontology of the Survey Fabric: what kinds of spatial constructs may become canonical, what must remain derived, what the Survey Domain must be, how exactness and precision behave, and which meanings belong above the FSF layer.

These are Requirements-level constraints.

They do not themselves canonically adopt the later mathematical implementation.

---

## Core Requirements

Findings #18–#33 establish that the Survey Fabric must provide:

- one exact canonical reference mathematics;
- a finite canonical Survey Domain;
- extensible exact precision;
- self-resolving canonical references;
- permanent non-reuse of canonical spatial meaning;
- a two-dimensional planar ground;
- exact foundational mathematics;
- semantic neutrality of boundaries and containment;
- separation of time from spatial identity;
- freedom for higher-layer geometry to ignore Survey subdivisions;
- separation of World membership from Survey validity;
- deterministic canonicalization;
- canonical spatial extents;
- exact edge semantics;
- and one mathematical system capable of supporting multiple exact spatial expressions.

---

## Current Candidate Realization

Subsequent formal mathematical design has selected a candidate realization of several Requirements in this section.

### Exact Numeric Model

The current candidate coordinate model is:

```text
CRPC
Canonical Rational Pang Coordinates
```

Canonical coordinate values are exact reduced rationals in Pangs.

This is the current candidate realization of Finding #24's exactness requirement.

### Precision / Refinement

The current candidate refinement model is:

```text
ECEM
Exact Coordinate Extension Model
```

Greater precision expands exact representational capacity without moving established place or requiring a mandatory hierarchy of parent / child spatial identities.

This is the current candidate realization of Findings #20 and related refinement constraints.

### Survey Domain Geometry

The current candidate Survey Domain geometry is:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

where:

```text
H > 0
H is exact
```

The Domain is:

```text
finite
closed
connected
planar
axis-aligned
centered at (0,0)
```

The geometry and boundary semantics are candidate-resolved.

The numerical value of `H` remains OPEN.

The earlier ±1,000,000 Pang working half-span is not canonical.

---

## Findings #18–#33 — Current Interpretation

### Finding #18 — Cells Are Not Foundational Objects by Default

No permanent cell ontology is required.

The current CRPC / ECEM architecture reinforces this finding: exact reference does not depend upon permanent cell identity.

### Finding #19 — Finite Canonical Survey Domain

The Survey Domain remains finite.

Later mathematical work has selected the candidate geometric form but not the numerical half-span.

Accordingly:

```text
FMD-04A — geometry / boundary — candidate resolved
FMD-04B — numerical capacity — OPEN
```

### Finding #20 — Extensible Precision

The Requirement is now realized at candidate level by ECEM.

Precision extends exact representational capacity without spatial migration.

Final governed complexity / representability limits remain open.

### Finding #21 — Self-Resolving Canonical Addresses

Canonical spatial meaning must be recoverable from the governing Specification and reference itself.

Final public / canonical address syntax and grammar remain open.

### Finding #22 — Canonical References Are Never Reused

Spatial meaning remains permanent even if higher-layer occupancy or identity changes.

This supports the lineage rule:

> **Representations may evolve. Canonical place may not drift.**

### Finding #23 — Two-Dimensional Planar Ground

The current candidate FSF core remains planar and two-dimensional.

Higher-dimensional systems remain higher-layer responsibilities.

### Finding #24 — Exact Foundational Mathematics

CRPC is the current candidate exact numeric foundation for the solved core.

Approximation remains permissible for experience, never for canonical truth.

### Findings #25–#26 — Boundaries and Semantic Containment

FSF may define exact mathematical edges, contact, containment, and extent behavior.

It does not thereby own the semantic meaning of Parcel, Region, World, ownership, or other higher-layer boundaries.

### Finding #27 — Space Without Time

Specification history may evolve.

Canonical place itself does not acquire temporal identity merely because the standard has versions.

### Finding #28 — Higher-Layer Geometry Need Not Align to the Grid

No grid-alignment requirement is introduced by CRPC, ECEM, or the current candidate Domain.

Higher-layer exact geometry remains free to use canonical Survey reference without following implementation subdivisions.

### Finding #29 — World Membership Belongs Above

Survey validity and World membership remain separate.

The responsibility boundary is:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

### Finding #30 — Deterministic Canonicalization

Later formal design now supplies candidate normalization rules for CRPC and supported Point / Segment / SCPE geometry.

Normalization may remove permitted representational redundancy.

It may not move place or manufacture validity.

### Finding #31 — Canonical Spatial Extents

The candidate core currently expresses exact extents through SCPE geometry.

Higher-layer identity and function remain outside FSF.

### Finding #32 — Exact Edge Semantics

Supported candidate geometry now uses exact predicates and closed boundary semantics.

No epsilon or tolerance determines canonical truth.

### Finding #33 — One Mathematics, Many Spatial Expressions

The current candidate core uses Point, Segment, and SCPE as supported mathematical expressions without turning them into higher-layer entities with independent civic or object identity.

---

## Open Gates Preserved

This README does not imply complete FSF mathematical closure.

Important remaining open items include:

- numerical Survey Domain half-span `H`;
- final canonical address syntax / grammar;
- final angular unit;
- general exact Euclidean distance scalar representation;
- general path / boundary-length scalar closure;
- arbitrary exact rotation;
- general Boolean / composite result geometry;
- final complexity limits;
- final Specification identity / version-succession governance.

These remain Specification-level questions.

---

## Institutional Boundary

The governing sequence remains:

```text
Requirements
→ Specification
→ Conformance
→ Reference Vectors
```

Requirements IV constrains the later layers.

It does not allow Conformance, Reference Vectors, or implementation convenience to invent missing mathematics.

---

## Repository Guidance

Use this directory for the authoritative presentation and supporting documentation of **Requirements IV — Mathematical Ontology and Survey Domain Structure**.

Do not use it to:

- make implementation cells foundational by convenience;
- treat the Survey Domain as The World;
- assign semantic meaning to mathematical boundaries;
- introduce time into canonical spatial identity;
- silently impose approximation;
- select a numerical Domain capacity without a governing criterion;
- or pull Parcel / World membership semantics into FSF.

If later architecture conflicts with Findings #18–#33, reconcile the later architecture first.

---

## Documentation Standing

The `index.html` required a limited update because two passages still described the exact precision mechanism and exact numeric representation as unresolved.

Those passages have been reconciled to acknowledge the later candidate selections of **ECEM** and **CRPC** without changing the underlying Requirements.

The page also now records the current parameterized Survey Domain standing.

---

## Standing

**FINDINGS #18–#33 — PRESERVED**

**CRPC — CANDIDATE EXACT NUMERIC MODEL**

**ECEM — CANDIDATE PRECISION / REFINEMENT MODEL**

**SURVEY DOMAIN GEOMETRY / BOUNDARY — CANDIDATE RESOLVED**

**SURVEY DOMAIN NUMERICAL HALF-SPAN `H` — OPEN**

**WORLD MEMBERSHIP — ABOVE FSF**

**INDEX.HTML — UPDATED**

**README.md — CREATED**
