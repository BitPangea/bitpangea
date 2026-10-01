# Foundational Survey Fabric — Candidate Mathematics Integration Review

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Integration Review  
**Creator Period:** Day #123 · September 27, 2026  
**Scope:** Formal Mathematical Decisions 01–09  
**Status:** COMPLETE — INTEGRATION REVIEW PASS WITH REMAINING FORMAL GATES · AMENDED FOR FMD-04 CAPACITY AND LINEAGE / VERSION-COMPATIBILITY RECONCILIATION  
**Original Review:** Day #123 · September 27, 2026  
**Current Amendment:** Day #126 · September 30, 2026  
**Adoption Standing:** Candidate mathematics only; no FSF Specification adoption occurs through this record.

---

# 1. Purpose

This review asks whether Formal Mathematical Decisions 01–09 form one coherent candidate mathematical system when read together and tested against the governing Foundational Survey Fabric Requirements.

> **Day #126 Amendment — FMD-04 Capacity Correction**  
> The original Day #123 review treated the ±1,000,000 Pang Survey Domain half-span as resolved. Subsequent reconciliation determined that no source-derived capacity criterion supported that numerical selection. This record is therefore amended to preserve the candidate **closed, axis-aligned square geometry centered at `(0,0)`** while reopening the numerical half-span as **FMD-04B**. The governing parameterized Domain is `D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}`, with exact positive `H` still open. This correction does not reopen the already-coherent capacity-independent FSF core.

> **Day #126 Amendment — Lineage / Version-Compatibility Clarification**  
> FMD-08 and FMD-09 together now make the candidate continuity rule explicit: governed representations and representational capacity may evolve, but established canonical place and supported geometry may not drift. Compatible representations require lossless, deterministic correspondence to the same normalized mathematical object. Final institutional Specification identity, version succession, adoption authority, and migration policy remain separate governance questions.

The review does **not** ask whether every FSF mathematical question has now been solved.

It asks four narrower questions:

1. Do Decisions 01–09 contradict one another?
2. Do they violate any known Requirements-level constraint?
3. Do they provide the mathematics Spatial Ground actually required for its production-critical dependency?
4. Is the FSF now sufficiently complete to begin executable Specification integration, Conformance implementation, and Reference Vector construction?

---

# 2. Reviewed Decisions

The candidate system consists of:

| ID | Decision | Selected Result |
|---|---|---|
| **FMD-01** | Exact Coordinate Representation | Reduced rational Pang coordinates — CRPC |
| **FMD-02** | Canonical Frame & Handedness | `(x,y)`, +x Panoris, +y Pankor, right-handed, CCW positive |
| **FMD-03** | Canonical Origin Placement | `(0,0)` at midpoint of Domain coordinate bounds |
| **FMD-04A** | Survey Domain Geometry & Boundary | Closed axis-aligned square centered at `(0,0)` |
| **FMD-04B** | Survey Domain Numerical Capacity | **OPEN** — exact positive half-span `H` remains to be selected |
| **FMD-05** | Canonical Primitive Geometry | Point, Segment, Simple Closed Polygonal Extent |
| **FMD-06** | Geometry Predicates & Validation | Exact rational predicates; no epsilon |
| **FMD-07** | Geometry Normalization | CCW SCPE, lexicographic start, exact redundancy removal |
| **FMD-08** | Canonical Serialization | FSF-CJSON-1.0 |
| **FMD-09** | Precision & Refinement | Exact Coordinate Extension Model — ECEM |

---

# 3. Executive Disposition

The integrated candidate receives:

> **INTEGRATION REVIEW — PASS**

with the qualification:

> **THE CORE REFERENCE / GEOMETRY PROFILE IS COHERENT, BUT THE COMPLETE FSF SPECIFICATION IS NOT YET MATHEMATICALLY CLOSED.**

No contradiction was found among Decisions 01–09.

No reviewed decision requires reopening Findings #1–#85.

The candidate mathematics now provide a coherent exact framework for:

- canonical planar position;
- finite Survey Domain validity;
- permanent orientation;
- exact polygonal geometry;
- exact spatial predicates;
- deterministic normalization;
- canonical machine serialization;
- extensible precision without migration.

This is enough to satisfy the **capacity-independent production-critical FSF dependency required by the selected Spatial Ground World-space instance**. Concrete canonical placement that depends upon final Survey Domain numerical capacity remains gated by **FMD-04B**.

It is not yet enough to claim that the complete Foundational Survey Fabric Specification is finished.

---

# 4. Integrated Mathematical Profile

The current candidate FSF core can now be stated compactly.

## 4.1 Coordinate Space

Canonical coordinate scalars are:

```text
n/d Pang
```

where:

```text
n ∈ ℤ
d ∈ ℕ+
gcd(|n|,d)=1
```

Canonical Points are:

```text
(x,y)
```

with exact CRPC values.

---

## 4.2 Canonical Frame

```text
+x = Panoris / East
-x = Panvel  / West

+y = Pankor  / North
-y = Panvath / South
```

Frame:

```text
right-handed
```

Positive rotation:

```text
counterclockwise
```

Origin:

```text
(0,0)
```

---

## 4.3 Survey Domain

The candidate Domain geometry is:

```text
D_H =
{(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

where:

```text
H > 0
H is an exact CRPC value
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

The geometry and boundary semantics are resolved at the candidate level.

The **numerical value of `H` is not resolved**. The earlier working value of ±1,000,000 Pang is noncanonical and is superseded as a numerical selection.

The Survey Domain has no semantic equivalence to The World.

---

## 4.4 Primitive Geometry

Canonical primitives:

```text
Point
Segment
Simple Closed Polygonal Extent
```

A valid SCPE is:

```text
finite
simple
closed
non-self-intersecting
nondegenerate
hole-free
boundary-inclusive
```

---

## 4.5 Exact Geometry

Core predicates operate exactly through rational arithmetic:

```text
point equality
orientation
point-on-segment
segment intersection
boundary classification
point-in-SCPE
polygon simplicity
containment
geometric equality
```

No canonical epsilon exists.

---

## 4.6 Normalization

Equivalent supported geometry collapses to one normal form.

SCPE normalization uses:

```text
exact CRPC normalization
exact redundant-collinear removal
counterclockwise traversal
lexicographically least start vertex
no repeated closure vertex
```

---

## 4.7 Serialization

Primary canonical machine representation:

```text
FSF-CJSON-1.0
```

with:

```text
UTF-8
compact JSON
exact numeric strings
structured rationals
duplicate keys invalid
unknown fields invalid
deterministic key order
```

---

## 4.8 Precision

Precision follows:

> **Exact Coordinate Extension Model**

A canonical Point is always exact.

There is no foundational:

```text
coarse Point
approximate Point
parent Point
child Point
uncertainty Point
```

Precision expands representational capacity without moving established place.

---

# 5. Cross-Decision Consistency Review

## 5.1 Coordinate Representation ↔ Frame

**PASS**

CRPC is independent of axis orientation.

The selected right-handed frame gives exact semantic meaning to each rational component without introducing another scalar system.

---

## 5.2 Coordinate Representation ↔ Origin

**PASS**

The origin `(0,0)` is exactly representable under CRPC.

No special numeric exception is needed.

---

## 5.3 Origin ↔ Survey Domain

**PASS FOR GEOMETRY / BOUNDARY; NUMERICAL CAPACITY OPEN**

The parameterized Domain:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

is symmetric around `(0,0)` exactly as Decision 03 requires for every exact positive `H`.

The origin lies strictly in the Domain interior.

This consistency result does **not** select the numerical value of `H`.

---

## 5.4 Survey Domain ↔ Primitive Geometry

**PASS**

Point, Segment, and SCPE geometry can be validated entirely inside the finite square Domain.

Because the Domain is convex, an SCPE whose boundary Segments all connect valid in-Domain vertices cannot leave and later re-enter the Domain without a Segment itself leaving the Domain; exact Segment containment remains straightforward.

---

## 5.5 Primitive Geometry ↔ Predicates

**PASS**

Decision 06 supplies the exact executable predicates required to validate Decision 05.

No predicate depends upon geometry not present in the primitive model.

---

## 5.6 Predicates ↔ Normalization

**PASS**

Normalization relies only upon already-defined exact operations:

- CRPC normalization;
- Point comparison;
- orientation;
- point-on-segment;
- signed area;
- polygon validity.

No circular dependency was found.

---

## 5.7 Normalization ↔ Serialization

**PASS**

Decision 08 serializes the output of Decision 07.

The institutional order is correct:

```text
validate mathematics
→ normalize geometry
→ serialize canonical object
→ canonical bytes
```

Serialization does not redefine geometry.

---

## 5.8 Precision ↔ Coordinate Representation

**PASS**

ECEM is a direct consequence of CRPC rather than a second competing precision system.

Exact fractions provide sub-Pang precision without a mandatory subdivision hierarchy.

---

## 5.9 Precision ↔ Survey Domain

**PASS**

The Domain is finite in extent for every selected exact positive `H`, while CRPC precision inside that Domain remains extensible.

No contradiction exists between:

```text
finite spatial capacity
```

and:

```text
unbounded-in-principle finite rational expressibility
```

subject to governed finite complexity limits.

---

## 5.10 Precision ↔ Normalization

**PASS**

Equivalent rational forms collapse to one value before geometry normalization.

Increasing representational capacity cannot change a previously normalized Point.

---

## 5.11 Serialization ↔ Version / Lineage Continuity

**PASS AT CANDIDATE DESIGN LEVEL**

FMD-08 and FMD-09 now express one coherent continuity rule:

```text
representation may evolve
representational capacity may expand
canonical mathematical meaning may not drift
```

Where two governed representations are declared compatible, each must map losslessly and deterministically to the same normalized mathematical object.

Format identity, Specification identity, and representation identity remain distinct from spatial identity.

Still open at the institutional / governance level:

- final Specification identity scheme;
- formal version succession rules;
- adoption authority;
- incompatible-transition / migration policy.

These open governance questions do not create a mathematical contradiction in the candidate core.

---

# 6. Requirements Compatibility Review

The eighty-five Requirements are organized into seven governing sections.

The integrated candidate was reviewed against each section.

---

## 6.1 Foundation, Purpose & Scope

**PASS**

The candidate remains:

- minimal;
- exact;
- implementation-independent;
- deeper than Parcel meaning;
- semantically neutral.

Nothing in Decisions 01–09 introduces ownership, rights, runtime state, terrain, rendering, or World membership into FSF.

---

## 6.2 Addressability, Meaning & Refinement

**PASS WITH ONE REMAINING SPECIFICATION ITEM**

Satisfied:

- exact representable location model;
- permanent position meaning;
- precision without migration;
- no silent snapping;
- no mandatory hierarchy;
- self-resolvable mathematical position.

Still open:

> **final canonical address grammar**

FSF-CJSON serializes canonical geometry, but this review does **not** treat that serialization automatically as the public/canonical address syntax.

That must still be specified explicitly.

---

## 6.3 Authority, Consensus & Evolution

**PASS AT MATHEMATICAL-DESIGN LEVEL**

Decisions 01–09 distinguish:

```text
candidate mathematical correctness
```

from:

```text
canonical institutional authority
```

No decision claims adoption by virtue of technical selection.

Compatible precision evolution preserves established place.

FMD-08 and FMD-09 now also establish candidate compatibility semantics for durable representation continuity:

- governed compatible representations must preserve the same normalized mathematical object;
- representational evolution must be lossless and deterministic where compatibility is claimed;
- format or representation change may not move, renumber, or reinterpret established canonical place.

Still required later at the institutional / governance level:

- final Specification identity;
- formal version succession rules;
- incompatible-transition / migration policy;
- adoption act / canonical status process.

These are not mathematical contradictions.

---

## 6.4 Ontology & Structure

**PASS**

The candidate supplies:

- one finite Survey Domain;
- exact Points;
- exact extents;
- one coherent primitive family;
- Point/Extent distinction;
- semantic neutrality;
- no mandatory grid ontology.

The Domain remains distinct from World-space.

---

## 6.5 Measurements & Orientation

**PARTIAL PASS — FORMAL GATE REMAINS**

Resolved:

- Pang scale;
- square Pang area unit;
- frame;
- directions;
- origin;
- handedness;
- positive rotation.

Still unresolved:

1. **canonical angular unit and exact angular representation**
2. **exact straight spatial separation scalar representation**
3. **exact general path / boundary-length scalar representation**

These are explicit Requirements-owned FSF responsibilities.

Therefore Measurements & Orientation is not yet fully Specification-complete.

---

## 6.6 Geometry, Topology, Measurement & Operations

**PARTIAL PASS — CORE GEOMETRY STRONG, OPERATION CLOSURE STILL OPEN**

Resolved for the production SCPE profile:

- exact Point / Segment / SCPE geometry;
- boundary inclusion;
- topology needed for the selected World extent;
- exact predicates;
- exact area for rational polygon geometry;
- normalization;
- equality for supported normalized primitives;
- deterministic serialization.

Still unresolved at full-FSF scope:

1. **general geometric composition semantics**
2. **closure of union / intersection / difference outputs**
3. **exact transformation result representation beyond rational-preserving transforms**
4. **exact rotation closure**
5. **general path / boundary-length scalar closure**
6. **general operation-domain / output closure**

These were already identified as future Specification gates.

No contradiction exists; completion remains required.

---

## 6.7 Knowability, Computability & Conformance

**PASS FOR CANDIDATE-PROFILE ENTRY INTO PROTOTYPE WORK**

The current core is now sufficiently deterministic to implement and test:

- CRPC parsing / normalization;
- Domain validation;
- Point / Segment / SCPE validation;
- predicates;
- normalization;
- FSF-CJSON serialization;
- precision invariance.

Still needed before canonical adoption:

- governed complexity limits;
- complete Mandatory Conformance Core;
- executable vectors;
- independent implementations;
- adversarial testing;
- future-extension review.

This is precisely the intended staged readiness process.

---

# 7. Six Formal-Design Gates Review

The existing Specification framework preserved six major mathematical gates.

Decisions 01–09 were tested against them.

| Formal Gate | Current Standing |
|---|---|
| Valid canonical location vs finite representability | **PASS** |
| Extensible precision without infinite canonical objects | **PASS** |
| Exact rotation / transformation closure | **OPEN** |
| Exact distance / area / path-length closure | **PARTIAL — AREA PASS; DISTANCE/PATH OPEN** |
| Operation-domain / output closure | **OPEN** |
| Deterministic semantic equivalence across durable representations | **PASS FOR POINT/SEGMENT/SCPE CORE; COMPATIBILITY CORRESPONDENCE DEFINED AT CANDIDATE LEVEL** |

This is the most important integration result.

The candidate has passed **three**, partially passed **one**, and retains **two full gates** for later formalization.

---

# 8. Spatial Ground Dependency Review

The original Spatial Ground blocker register can now be reconciled.

| Blocker | Integration Standing |
|---|---|
| FSF-B01 Exact coordinate representation | **RESOLVED** |
| FSF-B02 Exact canonical frame | **RESOLVED** |
| FSF-B03 Exact origin placement | **RESOLVED** |
| FSF-B04A Survey Domain geometry / boundary | **RESOLVED AT CANDIDATE LEVEL** |
| FSF-B04B Survey Domain numerical capacity | **OPEN — exact positive half-span `H` not yet selected** |
| FSF-B05 Exact polygon / extent semantics | **RESOLVED** |
| FSF-B06 Exact geometry operations | **RESOLVED FOR PRODUCTION SCPE PATH** |
| FSF-B07 Exact precision mechanism | **RESOLVED** |
| FSF-B08 Canonical normalization | **RESOLVED FOR CORE PRIMITIVES** |
| FSF-B09 Canonical serialization | **RESOLVED FOR CORE PRIMITIVES** |
| FSF-B10 Coarse/fine refinement relationship | **RESOLVED** |
| FSF-B11 Closed-set / arbitrary difference compatibility | **OPEN — NOT PRODUCTION-CRITICAL** |

Therefore:

> **THE SELECTED SINGLE-SCPE BITPANGEA WORLD INSTANCE IS NO LONGER BLOCKED BY MISSING CAPACITY-INDEPENDENT FSF CORE REFERENCE MATHEMATICS.**

Final canonical placement remains numerically capacity-dependent until **FMD-04B** selects `H`.

It remains blocked from **canonical adoption** until the selected FSF candidate mathematics are Specification-integrated, tested, and institutionally adopted.

That distinction is essential.

---

# 9. SG-RV-024 / Difference Issue

The known issue remains:

```text
closed set A
minus
closed subset H
```

may produce a non-closed result.

This remains incompatible with any unrestricted claim that arbitrary Ground `difference` expressions always preserve the Closed World-Space convention.

The integration review does **not** invent regular-closed algebra or silently modify set difference.

Disposition:

```text
GENERAL SG-CJSON / FSF BOOLEAN INTEROPERABILITY — OPEN
BITPANGEA SINGLE-SCPE PRODUCTION INSTANCE — UNAFFECTED
```

The issue must remain visible in future Specification reconciliation.

---

# 10. New Contradiction Search

The integrated candidate was challenged for likely contradiction zones.

## 10.1 Finite Domain vs Extensible Precision

**NO CONTRADICTION**

Finite extent and extensible exact coordinate expressibility are different dimensions.

---

## 10.2 Rational Coordinates vs Exact Geometry

**NO CONTRADICTION FOR SELECTED CORE**

All core predicates, polygon area, intersections, containment, and normalization can operate exactly over rational coordinates.

---

## 10.3 Rational Coordinates vs Distance / Rotation

**OPEN CLOSURE ISSUE — NOT A CONTRADICTION**

Euclidean distance and arbitrary rotation can produce irrational results.

The candidate correctly does not approximate them.

A future exact scalar / transformation representation is required.

---

## 10.4 Square Survey Domain vs Organic World

**NO CONTRADICTION**

The Domain defines reference capacity.

Spatial Ground defines World membership.

Their geometries need not resemble one another.

---

## 10.5 Centered Origin vs No Privileged World Center

**NO CONTRADICTION**

The origin is privileged mathematically, not semantically.

The World need not be centered at `(0,0)`.

---

## 10.6 SCPE Hole-Free Primitive vs Ground Requirement Allowing Holes Generally

**NO CONTRADICTION**

The selected production World instance is hole-free.

FSF's current primitive set need not represent every conceivable future composite set as one SCPE.

General composition may later represent richer sets if Requirements demand them.

---

## 10.7 Closed SCPE vs Arbitrary Difference

**KNOWN OPEN ISSUE**

No contradiction exists inside SCPE itself.

The conflict appears only when unrestricted Boolean difference is combined with a universal closed-result requirement.

This remains outside the selected production instance.

---

## 10.8 One Canonical Serialization vs "One Meaning, Many Durable Representations"

**NO CONTRADICTION**

FSF-CJSON-1.0 is the primary canonical representation.

Other governed lossless representations may later exist if they preserve the same mathematical meaning.

---

# 11. Candidate System Strengths

The integration review finds the current candidate especially strong in six respects.

### Exactness

The entire production geometry path avoids floating-point truth.

### Minimality

The foundational primitive set contains only what the current architecture proves necessary.

### Layer Discipline

FSF establishes spatial truth without absorbing World membership.

### Reconstructability

Canonical geometry can be rebuilt independently from finite normative data.

### Stability

Precision extension cannot migrate established place.

### Production Compatibility

The selected Spatial Ground FEBCM World boundary has a direct, non-Boolean canonical representation path.

---

# 12. Remaining Mathematics — Production-Critical vs Full-FSF

A crucial distinction now exists.

## 12.1 Required Before Spatial Ground Production Geometry Can Be Built

For the selected single-SCPE World instance:

> **NO ADDITIONAL NEW CAPACITY-INDEPENDENT FSF MATHEMATICAL DESIGN IS REQUIRED BEFORE A PROTOTYPE PLACEMENT CAN BE CONSTRUCTED.**

The current candidate provides enough mathematics to:

- choose rational scale;
- choose rational translation;
- transform the preferred silhouette;
- validate the resulting SCPE against a **parameterized** Survey Domain;
- normalize it;
- serialize it;
- evaluate exact Point membership.

This means prototype work may begin after Specification integration, but a **final canonical placement whose validity depends on the numerical Domain edge cannot close until `H` is selected**.

---

## 12.2 Required Before Complete FSF Specification Adoption

Still open:

- canonical addressing grammar;
- exact Survey Domain numerical half-span `H`;
- exact angular unit / representation;
- exact distance scalar closure;
- exact path and general boundary-length closure;
- arbitrary exact rotation / transformation representation;
- general composition and Boolean-result closure;
- operation-domain / output closure;
- final Specification identity / version-succession / migration governance;
- governed complexity limits;
- FSF-B11 general set-difference compatibility.

These should not be hidden merely because Spatial Ground no longer depends on them for its selected instance.

---

# 13. Readiness Decision

The Foundational Survey Fabric now reaches the following stage:

> **CANDIDATE CORE MATHEMATICS — INTEGRATED**

and:

> **READY FOR SPECIFICATION INTEGRATION AND EXECUTABLE CORE PROTOTYPING**

but not:

> **COMPLETE FSF SPECIFICATION**

and not:

> **READY FOR CANONICAL MATHEMATICAL ADOPTION**

---

# 14. What May Begin Next

The next work block may now begin with:

1. integrate Decisions 01–09 into the seven FSF Specification sections, preserving FMD-04A / FMD-04B separation;
2. create the candidate Specification profile;
3. define the executable Mandatory Conformance Core for the solved profile;
4. generate exact Reference Vector fixtures for solved categories;
5. implement at least two independent core implementations;
6. adversarially test the integrated profile;
7. separately continue the still-open full-FSF mathematical gates.

This preserves institutional order:

```text
Requirements
→ candidate mathematics
→ integrated Specification
→ Conformance
→ Reference Vectors
→ independent implementation
→ adversarial proof
→ adoption
```

---

# 15. What Must Not Happen

Do not:

- declare Decisions 01–09 canonically adopted;
- declare the entire FSF Specification complete;
- hide the unresolved Survey Domain numerical capacity, rotation, distance, or composition gates;
- treat the prototype World placement as canonical World-space immediately;
- resolve SG-RV-024 by inventing regularized set semantics without a formal decision;
- let Conformance or Reference Vectors create missing mathematics.

---

# 16. Integration Review Disposition

```text
FORMAL MATHEMATICAL DECISIONS 01–09
INTEGRATION REVIEW — PASS
```

Detailed standing:

```text
CROSS-DECISION CONTRADICTION — NONE FOUND
REQUIREMENTS REOPENING — NOT REQUIRED
CORE CAPACITY-INDEPENDENT REFERENCE MATHEMATICS — COHERENT
CORE POLYGONAL GEOMETRY — COHERENT
CORE NORMALIZATION — COHERENT
CORE SERIALIZATION — COHERENT
PRECISION / REFINEMENT — COHERENT
REPRESENTATION / LINEAGE CONTINUITY — COHERENT AT CANDIDATE DESIGN LEVEL
SPATIAL GROUND CAPACITY-INDEPENDENT PRODUCTION DEPENDENCY — SATISFIED AT DESIGN LEVEL

SURVEY DOMAIN NUMERICAL CAPACITY H — OPEN
FULL ROTATION / TRANSFORMATION CLOSURE — OPEN
FULL DISTANCE / PATH-LENGTH CLOSURE — OPEN
GENERAL COMPOSITION / OUTPUT CLOSURE — OPEN
CANONICAL ADDRESS GRAMMAR — OPEN
SPECIFICATION IDENTITY / VERSION SUCCESSION / MIGRATION GOVERNANCE — OPEN
COMPLEXITY LIMITS — OPEN
FSF-B11 GENERAL DIFFERENCE COMPATIBILITY — OPEN

EXECUTABLE CORE PROTOTYPING — PERMITTED
FULL CANONICAL FSF ADOPTION — NOT YET PERMITTED
```

---

# 17. End-of-Session Checkpoint

This review establishes a clean stopping boundary.

The work completed in this session now forms one coherent arc:

```text
Spatial Ground identifies exact upstream blockers
→ FSF returns to formal mathematics
→ Decisions 01–09 resolve the capacity-independent production-critical core while FMD-04B remains open
→ integrated review tests the decisions as one system
→ candidate core passes
```

The next session can begin cleanly at:

> **FSF Specification Integration — Candidate Core Profile**

without reopening tonight's mathematical decisions unless testing later exposes a defect.

---

# 18. Governing Closing Statement

> **The Survey Fabric's capacity-independent production-critical mathematical core now hangs together as one system, including a coherent rule that representations may evolve while canonical place may not drift. The remaining work is to formalize, implement, attack, and prove the mathematics already selected while completing the still-open gates—including the numerical Survey Domain half-span `H` and final version-succession governance—before canonical closure.**
