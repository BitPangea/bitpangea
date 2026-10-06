# Foundational Survey Fabric — Specification

## Formal Mathematical Structure

**Institution:** The Atlas · Foundational Survey Fabric  
**Specification:** Main Index / Integration Overview  
**Status:** CANONICALLY ADOPTED  
**Canonical Adoption:** FSF-SPEC-1.0

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

**FSF-SPEC-1.0** is the canonically adopted Foundational Survey Fabric Specification.

The adopted production baseline includes:

- exact reduced rational Pang coordinates;
- one canonical global frame;
- permanent origin;
- `H = 1,000,000 Pang`;
- `D = [-1,000,000,+1,000,000]²`;
- governed production placement envelope `P = [-500,000,+500,000]²`;
- Point / Segment / SCPE primitive geometry;
- exact geometry predicates;
- deterministic normalization;
- `FSF-CJSON-1.0` canonical machine serialization;
- Exact Coordinate Extension Model precision semantics.

The governing placement relationship is:

```text
World-space ⊂ interior(P) ⊂ interior(D)
```

Broader capability outside this adopted production profile remains reserved unless later introduced through governed Specification evolution.

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

The adopted Domain is the closed axis-aligned square:

```text
D = [-1,000,000,+1,000,000]² Pang
```

with governed half-span:

```text
H = 1,000,000 Pang
```

and governed production placement envelope:

```text
P = [-500,000,+500,000]² Pang
```

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

The adopted production frame and measurement rules are established under `FSF-SPEC-1.0`.

Extended measurement or transformation capability not required by the adopted production profile remains reserved unless separately specified.

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

Canonical mathematical Point meaning is established independently of any optional public-facing address notation.

Any future human-readable or compact address syntax must preserve the same canonical place and remain subordinate to `FSF-SPEC-1.0`.

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

Outside the adopted production profile:

- unrestricted composite-result geometry;
- unrestricted Boolean-result forms;
- hole-bearing composite geometry;
- arbitrary transformation capability not explicitly adopted;
- future curve primitives if ever separately justified.

These are reserved capabilities, not implicit extensions of `FSF-SPEC-1.0`.

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

Outside the adopted production profile:

```text
unrestricted union result closure
unrestricted intersection result closure
unrestricted difference result closure
general arbitrary difference closure
other extended operation-output forms not adopted by FSF-SPEC-1.0
```

Conformance and Reference Vectors may test adopted operations and expose unsupported scope; they may not create additional operation closure.

---

## Specification 06 — Serialization and Specification Identity

Repository:

```text
specification/06-serialization-identity/
```

Canonical machine serialization:

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

Specification identity and succession:

```text
FSF-SPEC-1.0
FSF-SPEC-MAJOR.MINOR
```

Compatible changes preserve canonical place. An incompatible transition requires a new major version and separate governance.

Future encodings, if ever adopted, must not create competing spatial truth.

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
- adopted-profile executable readiness.

The adopted production profile supports:

```text
validators
Conformance
Reference Vectors
independent implementations
cross-implementation comparison
reconstruction testing
adversarial testing
production Spatial Ground dependency
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

These decisions form the mathematical basis incorporated into the adopted production Specification.

Their authority within FSF now derives from adoption of `FSF-SPEC-1.0`, not merely from their earlier candidate status.

---

# Adopted Production Core

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

# Adopted Profile and Reserved Capability

The current production profile is mathematically closed for the capabilities it adopts.

## Adopted Production Profile

- finite valid canonical position representation;
- extensible exact precision without migration;
- deterministic Point / Segment / SCPE geometry;
- exact polygonal area;
- deterministic normalization;
- deterministic semantic equivalence;
- canonical machine serialization;
- canonical Survey Domain and governed production placement envelope;
- `FSF-SPEC-1.0` identity and compatible succession discipline.

## Reserved Outside the Current Production Profile

- unrestricted Boolean / composite-result closure;
- general arbitrary difference closure;
- extended operation-output forms not adopted by `FSF-SPEC-1.0`;
- other future mathematics requiring explicit governed Specification evolution.

Reserved capability does not make the adopted production profile incomplete.

---

# Spatial Ground Dependency

The governing handoff remains:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

The adopted FSF production profile supplies the canonical spatial mathematics used by Spatial Ground:

```text
one connected
closed
hole-free
World-space region
expressed as one FSF SCPE
```

Spatial Ground has adopted its canonical World-space instance on that basis.

Unrestricted Boolean composition remains outside the current production profile.

---

# Institutional Relationship After Adoption

The governing relationship is:

```text
Requirements
    ↓
FSF-SPEC-1.0
    ↓
Conformance
    ↓
Reference Vectors
    ↓
Independent Implementation / Reconstruction
```

Conformance tests the adopted Specification.

It does not create or revise Specification mathematics.

Reference Vectors demonstrate the adopted Specification.

They do not become an alternate Specification.

Canonical adoption establishes authority; proof remains evidence of correct implementation.

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

Associated canonical serialization schema:

```text
fsf-cjson-1.0.schema.json
```

---

# Standing

```text
FSF-SPEC-1.0 — CANONICALLY ADOPTED

SECTIONS 01–07 — GOVERNING SPECIFICATION STRUCTURE
PRODUCTION PROFILE — MATHEMATICALLY CLOSED FOR ADOPTED CAPABILITY
H = 1,000,000 PANG
D = [-1,000,000,+1,000,000]²
P = [-500,000,+500,000]²
FSF-CJSON-1.0 — CANONICAL MACHINE SERIALIZATION

CONFORMANCE — SUBORDINATE PROOF FRAMEWORK
REFERENCE VECTORS — SUBORDINATE DEMONSTRATION FRAMEWORK

UNRESTRICTED BOOLEAN / COMPOSITE-RESULT CLOSURE — RESERVED
OTHER EXTENDED CAPABILITY — REQUIRES GOVERNED SPECIFICATION EVOLUTION
```

---

## Governing Closing Statement

> **Requirements established the envelope. FSF-SPEC-1.0 gives the foundational Survey mathematics canonical form. Conformance proves implementations; Reference Vectors demonstrate expected results; compatible evolution must preserve place.**
