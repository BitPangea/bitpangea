# Foundational Survey Fabric — Specification

## Formal Mathematical Structure

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification:** Main Index / Integration Overview  
**Status:** Candidate Core Integrated  
**Canonical Adoption:** Not yet performed

---

## Purpose

The Foundational Survey Fabric Specification defines precisely how BitPangea's foundational spatial reference works.

It sits between:

```text
Requirements
    ↓
Specification
    ↓
Conformance
    ↓
Reference Vectors
    ↓
Independent Implementation
    ↓
Adversarial Proof
    ↓
Adoption
```

The Requirements establish what the Foundational Survey Fabric must satisfy.

The Specification defines the mathematics that satisfy those Requirements.

---

## Current Standing

The seven Specification sections have completed their first integration pass against:

```text
FMD-01 through FMD-09
```

The current candidate core now includes selected mathematics for:

- exact reduced rational Pang coordinates;
- one canonical global frame;
- permanent origin;
- finite Survey Domain model;
- Point / Segment / SCPE primitive geometry;
- exact geometry predicates;
- deterministic normalization;
- FSF-CJSON-1.0 serialization;
- Exact Coordinate Extension Model precision semantics.

This is a **candidate integrated Specification core**.

It is not yet canonically adopted.

---

## Governing Boundary

> **Define the foundational mathematics completely. Do not use the Specification to design the higher Architecture domains that depend upon it.**

The Foundational Survey Fabric owns:

- canonical spatial reference;
- exact foundational geometry;
- scale and orientation;
- exact validity;
- canonical normalization;
- canonical machine interchange;
- foundational spatial operations;
- computability rules.

It does not own:

- World membership;
- Parcel identity;
- ownership;
- rights;
- governance;
- terrain;
- civilizational meaning;
- higher-layer interpretation.

---

# Specification Structure

## Specification 01 — Survey Domain and Ground Model

Repository:

```text
specification/01-domain-model/
```

Defines:

- finite canonical Survey Domain;
- two-dimensional planar ground;
- Domain validity;
- connected reference capacity;
- Domain boundary semantics;
- separation of reference capacity from World-space;
- foundational semantic neutrality.

Candidate mathematics are integrated.

---

## Specification 02 — Canonical Frame and Measurement

Repository:

```text
specification/02-frame-measurement/
```

Defines:

- Pang;
- square Pang;
- CRPC coordinate scalars;
- `(x,y)` tuple order;
- Pankor / Panvath / Panoris / Panvel axes;
- permanent origin;
- right-handed frame;
- counterclockwise positive rotation;
- area and measurement obligations.

Frame mathematics are substantially integrated.

Still open include:

- canonical angular unit / exact angle representation;
- exact general distance scalar;
- exact path/boundary-length scalar;
- arbitrary rotation closure.

---

## Specification 03 — Canonical Addressing and Precision

Repository:

```text
specification/03-addressing-refinement/
```

Defines:

- exact canonical Point reference;
- absolute global reference;
- self-resolving mathematical meaning;
- CRPC-based position;
- ECEM precision extension;
- no parent/child Point hierarchy;
- no coarse/fine Point semantics;
- exact sub-Pang position;
- normalization;
- no silent snapping;
- compatibility without place migration.

Still open:

```text
public canonical address grammar
human-readable / compact syntax
final address-version syntax
```

---

## Specification 04 — Spatial Expressions and Geometry

Repository:

```text
specification/04-expressions-geometry/
```

Current canonical core:

```text
Point
Segment
Simple Closed Polygonal Extent (SCPE)
```

Defines:

- exact position;
- closed Segment;
- boundary-inclusive SCPE;
- exact orientation;
- Point-on-Segment;
- Segment intersection;
- Point-in-SCPE;
- polygon validity;
- connectedness;
- containment;
- geometric equivalence;
- canonical normalization.

Still open:

- general composite geometry;
- unrestricted Boolean-result forms;
- hole-bearing composite geometry;
- arbitrary exact transformation closure;
- future curve primitives if ever justified.

---

## Specification 05 — Canonical Operations

Repository:

```text
specification/05-operations/
```

Defines the current exact operational core for:

- comparison;
- ordering;
- predicates;
- normalization;
- validity;
- lossless/lossy conversion;
- no silent snapping;
- exact polygonal area;
- CRPC-preserving translation;
- positive rational uniform scaling;
- neutral conflict detection.

Still open:

```text
union result closure
intersection result closure
difference result closure
closed-set / difference compatibility
general distance scalar closure
general path-length closure
arbitrary transformation result closure
```

---

## Specification 06 — Serialization and Specification Identity

Repository:

```text
specification/06-serialization-identity/
```

Current primary canonical machine representation:

```text
FSF-CJSON-1.0
```

Defines:

- compact UTF-8 canonical serialization;
- structured exact CRPC values;
- deterministic key ordering;
- duplicate-key rejection;
- unknown-field rejection;
- NFC strings;
- geometry normalization before serialization;
- Point / Segment / SCPE typed encoding;
- same normalized meaning → same canonical bytes;
- versioning and compatibility principles.

Still open:

- final top-level FSF Specification identifier;
- complete compatibility declaration syntax;
- future normative encoding precedence if additional encodings are adopted;
- final adoption/version governance.

---

## Specification 07 — Computability Rules

Repository:

```text
specification/07-computability-rules/
```

Defines:

- finite exact representation;
- exact-or-invalid canonical behavior;
- deterministic validation;
- deterministic termination;
- hidden-state independence;
- authoritative result conditions;
- canonical output discipline;
- implementation independence;
- solved-core executable readiness.

The solved core is now ready for:

```text
prototype validators
Conformance
Reference Vectors
independent implementations
cross-implementation comparison
reconstruction testing
adversarial testing
```

---

# Formal Mathematical Decisions

The current Specification integration is based on:

```text
FMD-01 — Exact Coordinate Representation
FMD-02 — Canonical Frame and Handedness
FMD-03 — Canonical Origin Placement
FMD-04 — Survey Domain Geometry and Dimensions
FMD-05 — Canonical Primitive Geometry
FMD-06 — Exact Geometry Predicates and Polygon Validation
FMD-07 — Canonical Geometry Normalization
FMD-08 — Canonical Serialization and Interchange
FMD-09 — Exact Precision and Refinement Semantics
```

These are candidate mathematical decisions.

Their integration into the Specification does not itself constitute canonical adoption.

---

# Candidate Core

The integrated production-critical core can be summarized as:

```text
exact spatial scalar
    -> CRPC

canonical frame
    -> one global right-handed (x,y) frame

canonical position
    -> exact Point

straight connection
    -> Segment

canonical polygonal extent
    -> SCPE

geometry truth
    -> exact predicates

equivalent representation
    -> deterministic normalization

machine interchange
    -> FSF-CJSON-1.0

precision evolution
    -> ECEM
```

---

# Preserved Formal-Design Gates

The broader FSF Specification is not yet mathematically closed.

## Substantially Closed for the Current Core

- finite valid canonical position representation;
- extensible exact precision without migration;
- deterministic Point / Segment / SCPE geometry;
- exact polygonal area;
- deterministic normalization;
- deterministic semantic equivalence;
- canonical machine serialization for the current core.

## Still Open

- exact canonical angular unit / angle representation;
- exact general distance scalar;
- exact path and boundary-length scalar;
- arbitrary exact rotation/transformation closure;
- general union/intersection/difference result closure;
- closed-set / difference compatibility;
- future composite geometry result types;
- public canonical address grammar;
- formal complexity limits;
- complete canonical error taxonomy;
- final top-level Specification identity and compatibility syntax.

---

# Spatial Ground Dependency

The governing handoff remains:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

The current candidate core is sufficient at design level for the selected Spatial Ground production path:

```text
one connected
closed
hole-free
World-space region
expressed as one FSF SCPE
```

General Boolean composition remains outside that production-critical path.

---

# Executable Proof Sequence

The next institutional stage is not another broad rewrite of the Specification.

It is executable proof of the integrated candidate core:

```text
Specification
    ↓
Conformance
    ↓
Reference Vectors
    ↓
Independent Implementation
    ↓
Adversarial / Reconstruction Testing
    ↓
Integration Review
    ↓
Adoption Review
```

Conformance may test the Specification.

It may not invent missing mathematics.

Reference Vectors may demonstrate the Specification.

They may not become an alternate Specification.

---

# Repository Layout

Recommended structure:

```text
theatlas/
└── foundational-survey-fabric/
    └── specification/
        ├── index.html
        ├── README.md
        ├── 01-domain-model/
        │   ├── index.html
        │   └── README.md
        ├── 02-frame-measurement/
        │   ├── index.html
        │   └── README.md
        ├── 03-addressing-refinement/
        │   ├── index.html
        │   └── README.md
        ├── 04-expressions-geometry/
        │   ├── index.html
        │   └── README.md
        ├── 05-operations/
        │   ├── index.html
        │   └── README.md
        ├── 06-serialization-identity/
        │   ├── index.html
        │   └── README.md
        └── 07-computability-rules/
            ├── index.html
            └── README.md
```

Associated candidate format artifact:

```text
fsf-cjson-1.0.schema.json
```

---

# Standing

```text
FSF SPECIFICATION — FIRST CANDIDATE INTEGRATION PASS COMPLETE

SECTIONS 01–07 — FMD-01 THROUGH FMD-09 INTEGRATED
PRODUCTION-CRITICAL CORE — MATHEMATICALLY COHERENT AT CANDIDATE LEVEL
CORE PROTOTYPING — READY
CORE CONFORMANCE WORK — READY
CORE REFERENCE VECTOR WORK — READY

COMPLETE FSF MATHEMATICS — NOT YET CLOSED
GENERAL COMPOSITION — OPEN
GENERAL DISTANCE / PATH-LENGTH SCALARS — OPEN
ARBITRARY ROTATION CLOSURE — OPEN
PUBLIC ADDRESS GRAMMAR — OPEN
FORMAL COMPLEXITY LIMITS — OPEN

CANONICAL ADOPTION — NOT YET PERFORMED
```

---

## Governing Closing Statement

> **Requirements established the envelope. Candidate mathematics now give the production-critical Survey core exact form. The next obligation is proof: implement it, test it independently, attack it, and only then decide whether it has earned canonical adoption.**
