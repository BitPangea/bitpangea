# Mandatory Core

## Foundational Survey Fabric · Conformance Section 02

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 02 — Mandatory Core  
**Scope:** Required Canonical Compatibility  
**Status:** Candidate Mandatory Core Defined for Executable Conformance  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 02 — Mandatory Core** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The minimum set of canonical behaviors every implementation must satisfy before it may claim Foundational Survey Fabric compatibility.**

Its governing principle remains:

> **One mandatory truth. Optional capability above it.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/README.md
```

---

## Purpose

The **Mandatory Core** is the direct conformance realization of:

**Requirements Finding #84 — Mandatory Conformance Core**

Finding #84 prevents FSF compatibility from becoming a selective or self-declared subset chosen by each implementation.

A conforming implementation must prove one common body of mandatory canonical behavior.

Optional features may exist above that body.

They may not substitute for it.

---

## Integration Standing

The original page correctly defined the Mandatory Core in principle, but its exact proof surface remained abstract because the governing Specification was not yet sufficiently integrated.

That has changed for the solved candidate profile.

Specification Sections 01–07 now define deterministic candidate behavior for:

```text
CRPC
canonical frame
Point
Segment
SCPE
exact predicates
validation
normalization
FSF-CJSON-1.0
ECEM
exact-or-invalid behavior
deterministic canonical output
```

Therefore the Mandatory Core can now be defined concretely enough for executable Conformance work.

---

## Candidate Mandatory Core Scope

The current candidate Mandatory Core includes at minimum:

```text
CRPC parsing and normalization
canonical frame interpretation
Point validation
Segment validation
SCPE validation
exact Point equality
exact Point ordering
exact orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
polygon validity
connectedness
containment
geometric equivalence
canonical geometry normalization
canonical-valid / valid-noncanonical / invalid behavior
no silent snapping
ECEM-compatible precision behavior
FSF-CJSON-1.0 parsing
FSF-CJSON-1.0 canonical serialization
deterministic authoritative results
independent reproducibility
```

These capabilities are one proof surface.

Selective success does not establish Mandatory Core conformance.

---

## One Canonical Meaning

The Mandatory Core does not permit competing foundational truth.

Implementations may differ in:

- programming language;
- algorithms;
- cache strategies;
- internal storage;
- optimization;
- data structures.

They may not differ in canonical meaning.

For identical valid canonical inputs:

```text
same Specification
        ↓
same authoritative meaning
```

Where the Specification defines unique normalization or serialization:

```text
same authoritative meaning
        ↓
same normalized form
        ↓
same canonical bytes
```

---

## Required Interpretation

Mandatory Core implementations must correctly interpret:

```text
CRPC coordinates
canonical (x,y) frame
Point
Segment
SCPE
ECEM precision semantics
FSF-CJSON-1.0
```

A canonical Point means one exact Survey position.

It does not mean:

- a parent Point;
- a coarse cell;
- a rounded location;
- an uncertainty region;
- a set of descendants.

---

## Required Validation

The current core distinguishes:

```text
CANONICAL VALID
VALID NONCANONICAL
INVALID
```

Examples of invalidity may include:

- malformed CRPC;
- invalid denominator form;
- coordinate outside the governed Survey Domain;
- zero-length Segment;
- invalid SCPE;
- self-intersection;
- zero area;
- malformed FSF-CJSON;
- unsupported operation result type.

Invalid input may not be silently repaired.

---

## Required Canonicalization

The current Mandatory Core requires deterministic normalization.

### CRPC

Reduce exact fractions to canonical form.

### Segment

Place the lexicographically lesser endpoint first.

### SCPE

Canonical normalization includes:

```text
normalize CRPC vertices
remove exact redundant collinear middle vertices
enforce counterclockwise traversal
select lexicographically least start vertex
omit repeated terminal closure vertex
```

Required invariants:

```text
N(N(G)) = N(G)
```

and:

```text
geom(N(G)) = geom(G)
```

Normalization may remove representational redundancy.

It may not move place.

---

## Required Exactness

Mandatory Core truth shall not depend on:

- epsilon equality;
- tolerance;
- floating approximation;
- hidden snapping;
- rendering resolution;
- device precision;
- implementation-specific convergence.

The governing rule remains:

> **Canonical geometry does not use epsilon.**

---

## Required Geometry Behavior

The current primitive profile is:

```text
Point
Segment
SCPE
```

Mandatory proof must cover the applicable exact predicate behavior defined by the Specification, including:

```text
Point equality
Point ordering
orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
polygon validity
connectedness
containment
geometric equivalence
```

---

## Required Precision Semantics

The Mandatory Core preserves:

**Exact Coordinate Extension Model — ECEM**

The rule is:

> **A canonical Point is already exact.**

Compatible future representational growth may expand capability.

It may not migrate an existing place.

---

## Required Normative Interchange

For the current machine-interchange profile:

```text
FSF-CJSON-1.0
```

is the candidate canonical format.

A Mandatory Core implementation claiming serialization conformance must satisfy its governing rules, including:

- UTF-8;
- no BOM;
- compact canonical representation;
- exact structured CRPC objects;
- deterministic key ordering;
- required string normalization;
- duplicate-key rejection;
- governed unknown-field behavior;
- geometry normalization before serialization;
- identical canonical bytes for identical normalized supported geometry.

Proprietary internal formats do not substitute for canonical interchange.

---

## Specification and Version Identity

A conformance claim must identify the standard it proves.

Current serialization claims shall identify:

```text
FSF-CJSON-1.0
```

where applicable.

The final top-level FSF Specification identifier syntax remains open.

Conformance must not invent it.

---

## Reference Vector Proof

Mandatory Core capability must be executably demonstrable.

Applicable proof should include:

- canonical valid examples;
- valid noncanonical examples that normalize exactly;
- invalid examples;
- exact predicate outcomes;
- canonical serialization bytes;
- failure cases;
- cross-implementation result identity.

Reference Vectors prove behavior already defined by the Specification.

They do not define new behavior.

---

## Independent Reproducibility

Mandatory Core conformance must be independently reproducible.

It shall not require:

- proprietary software;
- unpublished algorithms;
- hidden test logic;
- exclusive service access;
- secret conventions;
- institutional permission;
- shared hidden implementation state.

---

## Open-Gate Exclusion

The Mandatory Core shall not claim canonical support for unresolved Specification mathematics.

Current exclusions include:

```text
general Boolean / composite output closure
general union result closure
general intersection-result closure
general difference-result closure
closed-set / difference compatibility
arbitrary exact rotation closure
general transformation closure
general exact distance scalar closure
general exact path / boundary-length scalar closure
future geometry not yet selected
```

Experimental implementation is allowed.

Canonical conformance claims are not.

---

## Optional Capability Boundary

Optional capability may extend the Mandatory Core only where the underlying Specification defines the semantics.

Optional capability may not:

- weaken exactness;
- bypass validation;
- replace canonical serialization;
- override ECEM;
- redefine geometry;
- compensate for Mandatory Core failure;
- create alternate spatial truth.

---

## Failure of the Mandatory Core

Mandatory failure prevents a full conformance claim.

Examples include:

```text
required test fails
invalid input accepted
canonical normalization mismatch
exact predicate mismatch
canonical byte mismatch
silent snapping
hidden-state-dependent result
cross-implementation result mismatch
open-gate behavior claimed as canonical
```

Partial implementation may be described accurately.

It is not Mandatory Core conformance.

---

## Requirements Basis

This section directly realizes:

```text
#84 — Mandatory Conformance Core
```

Supporting Requirements include:

```text
#10
#24
#30
#57–#60
#63–#66
#71–#75
#78–#83
```

These Findings remain authoritative in the Requirements Framework.

Conformance realizes and tests them.

It does not replace them.

---

## What Changed From the Previous Page

The previous page already correctly established:

- one mandatory common core;
- one canonical meaning;
- deterministic validation;
- deterministic canonicalization;
- exactness;
- identical results for identical inputs;
- normative interchange;
- explicit Specification identity;
- independent reproducibility;
- optional capability above the core;
- mandatory failure prevents full compatibility.

Those principles remain.

The substantive change is that the integrated Specification now provides enough exact mathematics to state the present candidate Mandatory Core explicitly.

The previous wording that the exact core must wait generally for completion of the Specification is therefore no longer correct for the solved profile.

The new rule is:

```text
solved Specification capability
    -> eligible for Mandatory Core proof

open Specification capability
    -> excluded from canonical conformance
```

---

## Still Open

The remaining Conformance design work includes:

```text
final canonical test identifiers
complete test inventory
test-to-Specification traceability
test-to-Requirements traceability
formal conformance declaration syntax
complexity/resource-limit policy
provisional implementation policy, if retained
optional future profiles
treatment of future Specification extensions
```

These should be resolved through later Conformance sections and executable proof work.

---

## Architectural Boundary

> **Optional capability may extend what an implementation can do. It may not change what canonical spatial truth means, substitute for failure of the Mandatory Core, or create authority over the governing Specification.**

This boundary remains unchanged.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 02 — MANDATORY CORE

REQUIREMENTS FINDING #84 — DIRECTLY REALIZED
CANDIDATE MANDATORY CORE — NOW EXPLICIT
CRPC — REQUIRED
POINT / SEGMENT / SCPE — REQUIRED
CORE EXACT PREDICATES — REQUIRED
NORMALIZATION — REQUIRED
ECEM — REQUIRED
FSF-CJSON-1.0 — REQUIRED FOR CURRENT SERIALIZATION PROFILE
NO SILENT SNAPPING — REQUIRED
INDEPENDENT REPRODUCIBILITY — REQUIRED

OPEN SPECIFICATION MATHEMATICS — EXCLUDED FROM CANONICAL CONFORMANCE
FINAL TEST INVENTORY — OPEN
FORMAL CLAIM SYNTAX — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
