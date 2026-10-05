# Foundational Survey Fabric — FMD-04B Capacity Inquiry Record

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Inquiry / Consolidation Record  
**Recommended Repository Path:** `foundational-survey-fabric/review/consolidation/fmd-04b-capacity-inquiry.md`  
**Subject:** FMD-04B — Numerical Survey Domain Capacity  
**Status:** ACTIVE INQUIRY — STEPS 1–4 COMPLETE · STEPS 5A–5D COMPLETE  
**Canonical Adoption:** Not performed by this record

---

## 1. Purpose

This record preserves the formal inquiry into:

> **FMD-04B — What source-derived criterion, if any, determines the exact numerical Survey Domain half-span `H`?**

The inquiry is intentionally separated from FMD-04A.

Current standing:

```text
FMD-04A — Survey Domain Geometry / Boundary
STATUS — RESOLVED

FMD-04B — Numerical Survey Domain Capacity
STATUS — OPEN
```

This record does not select a numerical value of `H`.

It preserves the reasoning, evidence, exclusions, and intermediate determinations required before such a selection may be made.

---

# Step 1 — Governing FMD-04 Record

## Source Reviewed

`formal-design/FSF_Formal_Mathematical_Decision_04_Survey_Domain_Geometry_and_Dimensions.md`

## Step 1 Question

> **What exactly must FMD-04B decide, and what evidence is constitutionally or mathematically permitted to determine that decision?**

## Existing FMD-04A Commitments

FMD-04 already fixes the following:

- one finite Survey Domain;
- one closed Domain;
- one connected Domain;
- one axis-aligned square;
- permanent canonical origin `(0,0)`;
- equal capacity on both canonical axes;
- exact boundary inclusion;
- exact CRPC membership comparisons;
- no epsilon or tolerance;
- no runtime Domain expansion;
- no equivalence between Survey Domain and World-space;
- World-space must occupy a strict subset of the Survey Domain;
- positive Survey-space margin must exist between production World-space and the Survey Domain boundary.

The parameterized candidate Domain is:

```text
D_H = [-H,+H] × [-H,+H]
H > 0
```

with exact CRPC `H`.

## Step 1 Capacity Constraints

Any eventual authoritative `H` must be:

1. **finite**;
2. **positive**;
3. **exact**;
4. **CRPC-representable**;
5. **symmetric across the canonical axes**;
6. **permanent rather than runtime-expanding**;
7. **sufficient for the production World-space instance to lie strictly inside the Domain with exact positive margin**.

These are legitimate constraints.

They do not by themselves determine a numerical magnitude.

## Step 1 Rejected Selection Grounds

FMD-04B shall not be resolved merely through:

- round-number convenience;
- aesthetic preference;
- unused capacity for its own sake;
- implementation word size;
- Bitcoin symbolism;
- Parcel-count symbolism;
- arbitrary engineering comfort margin;
- convenient test-fixture values;
- informal "large enough" reasoning.

The former:

```text
H = 1,000,000 Pang
```

is therefore preserved only as a **superseded working candidate**.

It is not canonical.

## Step 1 Architectural Tension

FMD-04 requires sufficient finite reference capacity for:

- the production World-space instance;
- valid non-World Survey space required by the architecture;
- exact WORLD / NON_WORLD distinction within valid Survey space;
- stable reference without runtime expansion.

At the same time, FMD-04 explicitly states that the required amount of reserve capacity has not yet been established.

Spatial Ground may later choose exact World scale and placement within the adopted Survey Domain, but Spatial Ground may not use its own desired placement as an unreviewed mechanism for selecting the foundational Survey half-span.

Therefore:

> **FMD-04 itself does not numerically derive `H`.**

## Step 1 Formal Determination

> **FMD-04B must determine the authoritative rule that establishes `H`, not merely choose a convenient number.**

The inquiry must determine whether the final adopted FSF should use:

```text
A. one fixed canonical numerical H
```

or:

```text
B. one deterministic governed rule that yields one exact authoritative H
```

A deployment-variable or implementation-variable `H` is not presently considered acceptable.

---

# Step 2 — Requirements IV Test

## Sources Reviewed

`requirements/04-ontology-structure/index.html`

`requirements/04-ontology-structure/README.md`

## Step 2 Question

> **Do the Requirements demand one numerically fixed canonical Survey Domain, or only one finite Domain whose exact limits are authoritatively defined?**

## Requirements Findings

Requirements IV establishes:

- one exact canonical reference mathematics;
- a finite canonical Survey Domain;
- permanent canonical spatial meaning;
- exact foundational mathematics;
- deterministic canonicalization;
- separation of Survey validity from World membership.

Finding #19 establishes that the canonical Survey Domain must be finite.

It further establishes that once the Survey Domain and its limits are formally adopted:

- those limits become part of established spatial truth;
- later enlargement, shrinkage, splitting, or redefinition is not ordinary compatible evolution;
- such a change would constitute a foundational architectural change.

Finding #21 requires canonical Survey meaning to be resolvable under the governing Specification and reference itself.

Finding #22 requires canonical spatial meaning to remain permanent and never be reassigned.

Finding #30 requires deterministic canonicalization to one authoritative Survey meaning.

Finding #29 preserves World membership above FSF.

## Step 2 Determination

Requirements IV does **not** require the Requirements document itself to contain a hard-coded numerical literal for `H`.

It does require the formally adopted Foundational Survey Fabric to resolve to:

> **one exact, finite, authoritative Survey Domain with permanent canonical limits.**

Therefore:

> **`H` may remain a parameter during candidate mathematical development, but final canonical adoption cannot leave `H` implementation-variable, deployment-variable, or independently profile-selectable.**

## Permissible Final Closure Models

Two closure architectures remain potentially valid.

### Model A — Direct Constant

The governing Specification directly establishes:

```text
H = X Pang
```

for one exact authoritative value `X`.

### Model B — Deterministic Governing Rule

The governing architecture establishes:

```text
H = f(authoritative foundational inputs)
```

where:

- `f` is exact;
- `f` is deterministic;
- the authoritative inputs are themselves governed;
- the rule produces one and only one authoritative value;
- the resulting value becomes frozen as the canonical Survey Domain limit upon adoption.

The rule may determine `H`.

It may not leave `H` discretionary.

## Step 2 Exclusion

The following model is rejected:

```text
implementation A chooses H_A
implementation B chooses H_B
implementation C chooses H_C
```

while all claim identical canonical FSF standing.

Such a model would cause the same coordinate to be valid Survey space in one implementation and invalid in another.

That is incompatible with one canonical Survey Domain.

## Step 2 Formal Determination

> **Requirements IV permits parameterized candidate mathematics but requires final adoption to establish one exact permanent canonical Survey Domain.**

---

# Step 3 — Specification 01 Test

## Sources Reviewed

`specification/01-domain-model/index.html`

`specification/01-domain-model/README.md`

## Step 3 Question

> **Given the Requirements determination that final adoption must yield one exact permanent Domain, what does Specification 01 actually need from FMD-04B, and can Specification 01 derive `H` from anything already inside the Specification?**

## Specification 01 Standing

Specification 01 already defines, parametrically:

```text
D_H = [-H,+H] × [-H,+H]
H > 0
```

and therefore:

```text
width  = 2H Pang
height = 2H Pang
area   = 4H² square Pang
origin = (0,0)
```

It also defines exact membership:

```text
-H ≤ x ≤ +H
-H ≤ y ≤ +H
```

with no epsilon, snapping, rounding, or approximate Domain-membership semantics.

## What Specification 01 Can Do

Once authoritative `H` is known, Specification 01 can determine exactly:

- canonical Domain bounds;
- width;
- height;
- area;
- corner coordinates;
- boundary coordinates;
- interior / boundary / exterior Survey validity;
- exact invalidity outside the Domain;
- canonical Domain serialization dependencies;
- numerical Domain-edge proof obligations.

## What Specification 01 Cannot Do

Specification 01 contains no internal mathematical invariant that currently derives the magnitude of `H`.

Specifically:

### CRPC

CRPC determines the exact scalar representation class.

It does not determine Domain magnitude.

```text
H ∈ CRPC
```

does not imply:

```text
H = X
```

### Canonical Origin

The origin establishes symmetry and midpoint:

```text
-H ↔ 0 ↔ +H
```

but does not determine magnitude.

### Square Geometry

FMD-04A fixes geometry.

Infinitely many exact positive values of `H` satisfy the same square geometry.

### ECEM

ECEM governs exact precision expansion.

It solves precision, not Domain extent.

More precision does not require more Domain.

More Domain does not mean more precision.

### FSF-CJSON

Serialization can encode the authoritative `H` once selected.

Serialization cannot justify or derive that value.

## Step 3 Formal Determination

> **Specification 01 requires one exact governing numerical half-span for final production use, but contains no internal mathematical invariant, formula, scalar relationship, coordinate rule, precision rule, serialization rule, or Domain-geometry rule from which that value can presently be derived.**

Therefore:

> **FMD-04B cannot be resolved merely by completing Specification 01. Specification 01 is downstream of the FMD-04B capacity decision.**

---

# Combined Standing After Steps 1–3

The inquiry has now established:

```text
FMD-04A
    — resolved

FMD-04B
    — open

Requirements IV
    — requires one exact permanent adopted Survey Domain
    — does not itself choose H

Specification 01
    — can consume H
    — cannot derive H from its present internal mathematics

CRPC
    — constrains representation of H
    — does not determine magnitude

ECEM
    — governs precision
    — does not determine extent

FSF-CJSON
    — can serialize H
    — does not authorize H

Spatial Ground
    — may depend on sufficient capacity
    — may not choose foundational Survey capacity
```

The remaining legitimate source classes for a capacity criterion are therefore narrowed to:

1. **an upstream adopted invariant not yet tested against FMD-04B;**
2. **an irreducible downstream architectural dependency that FSF must accommodate without surrendering selection authority;**
3. **a deterministic foundational design constant selected explicitly through governance if no natural mathematical derivation exists.**

No numerical candidate should be evaluated until those possibilities are tested.

---

# Step 4 — Spatial Ground Dependency Test

## Sources Reviewed

`theatlas/spatial-ground/index.html`

`theatlas/spatial-ground/README.md`

## Step 4 Question

> **Does Spatial Ground impose any irreducible minimum capacity requirement on the Survey Domain beyond “The World must fit strictly inside it with positive margin”?**

The inquiry preserves the governing boundary:

> **Spatial Ground may tell FSF what capacity must be sufficient to accommodate. Spatial Ground may not choose the FSF capacity.**

## Spatial Ground Dependency

Spatial Ground canonically expresses and preserves World-space membership over valid canonical Survey space.

It depends upon FSF for:

- the Survey Domain;
- valid Survey references;
- coordinates;
- geometry;
- topology;
- spatial operations;
- measurement and scale;
- precision and refinement;
- governed interchange.

Spatial Ground does not own those foundations and may not recreate or redefine them.

## Spatial Ground Membership Requirements

The current architecture requires World-space to be:

- non-empty;
- singular;
- connected;
- exact;
- deterministic;
- permanently preserved once adopted;
- finitely expressible;
- decidable for membership;
- reconstructible from the canonical definition and inherited Survey specification.

These are membership requirements.

They do not establish a numerical Survey half-span.

## Constitutional Extent Does Not Determine H

The Spatial Ground record explicitly preserves that constitutional Extent establishes finite, permanent spatial scope but does **not** independently determine:

- exact geometry;
- exact representation;
- exact membership limit;
- exact measurement;
- exact implementation;
- exact membership set.

Therefore constitutional Extent cannot presently serve as a numerical derivation of `H`.

## Current World-Space Instance

The present candidate production instance is intentionally minimal:

```text
one connected
closed
hole-free
World region
expressed through one primary FSF spatial-set definition
```

This establishes the type of World-space object Spatial Ground expects.

It does not establish:

- World width in Pangs;
- World height in Pangs;
- World area in square Pangs;
- a required World-to-Domain ratio;
- a required reserve band;
- a minimum translation allowance;
- a minimum scaling allowance;
- a minimum non-World Survey-space quantity.

No numerical magnitude follows from the current Spatial Ground architecture.

## World-Space / Domain Relationship

The current public Spatial Ground page treats the candidate World-space instance as subordinate to the final governing FSF mathematics and preserves Gate B as not open while numerical `H` remains unresolved.

The older repository README contains two stale elements that should not govern FMD-04B:

1. it still describes the Spatial Ground Requirements as **Draft for Adoption Review**, while the current public page records **Requirements adopted / Gate A complete**;
2. it states that World-space “may coincide in extent with the Survey Domain,” while the current FMD-04 production rule requires the selected production World-space instance to lie strictly inside the Survey Domain with exact positive margin.

For the FMD-04B inquiry, the governing current architecture is therefore:

```text
World-space ⊂ Survey Domain
```

for the intended production instance, with positive Survey-space margin in all four canonical directions.

The amount of that margin remains unestablished.

## No Irreducible Numerical Capacity Requirement Found

Spatial Ground imposes only a qualitative capacity dependency:

> **FSF must provide enough exact finite reference capacity for the adopted World-space instance to be expressed strictly inside the Survey Domain.**

Spatial Ground does **not** presently supply a source-derived numerical minimum for `H`.

It supplies no authoritative:

```text
minimum H
World width
World height
World area
World-to-Domain ratio
reserve percentage
reserve distance
margin multiple
capacity factor
```

from which `H` can be calculated.

## Step 4 Formal Determination

> **Spatial Ground does not provide an irreducible numerical capacity criterion for FMD-04B beyond requiring the adopted World-space instance to be expressible inside the finite Survey Domain under the governing FSF rules.**

Therefore:

> **Spatial Ground cannot derive `H`, and desired World placement, scale, or margin may not be used as an unreviewed mechanism for choosing foundational Survey capacity.**

The downstream dependency is real but non-numerical.

It constrains sufficiency.

It does not determine magnitude.

---

# Combined Standing After Steps 1–4

The inquiry has now established:

```text
FMD-04A
    — resolved

FMD-04B
    — open

Requirements IV
    — requires one exact permanent adopted Survey Domain
    — does not itself choose H

Specification 01
    — requires H for final concrete Domain validity
    — can consume H
    — cannot derive H

Spatial Ground
    — requires sufficient finite FSF reference capacity
    — requires the production World-space instance to fit under governing FSF rules
    — supplies no numerical minimum H
    — may not choose H

CRPC
    — constrains representation of H
    — does not determine magnitude

ECEM
    — governs precision
    — does not determine extent

FSF-CJSON
    — can serialize H
    — does not authorize H
```

The most obvious downstream source of a numerical capacity criterion has therefore been tested and does not supply one.

---

# Step 5 — Upstream Invariant / Capacity-Criterion Search

## Step 5A — Pang Measurement Test

### Sources Reviewed

`requirements/05-measurements-orientation/index.html`

`requirements/05-measurements-orientation/README.md`

### Step 5A Question

> **Does the adopted Pang measurement doctrine establish a numerical spatial scale or other invariant from which the Survey Domain half-span `H` can be derived?**

### Pang Standing

Requirements V establishes:

```text
Pang = canonical native unit of linear spatial measure
square Pang = canonical area expression
```

The governing doctrine is:

> **Pang defines scale. Canonical mathematics defines precision.**

Pang therefore determines the native unit in which canonical BitPangea spatial relationships are measured.

It does not itself establish a required total Domain magnitude.

### What Pang Does Determine

Pang provides the unit for expressing:

- coordinate values;
- linear separation;
- Survey Domain width and height;
- World-space dimensions where those dimensions are later defined;
- Parcel dimensions where a higher layer later defines them;
- exact spatial extents;
- square-Pang area.

Accordingly, once `H` is known:

```text
H          = H Pang
Domain width  = 2H Pang
Domain height = 2H Pang
Domain area   = 4H² square Pang
```

### What Pang Does Not Determine

Requirements V expressly prevents Pang from becoming:

- Parcel identity;
- Survey-cell identity;
- display scale;
- physical-world distance;
- ultimate precision depth.

Nothing in Findings #34–#43 establishes:

```text
1 Pang = 1 Parcel width
1 Pang² = 1 Parcel area
1 Pang = fixed World fraction
1 Pang = fixed physical-world distance
Survey width = fixed Pang count
Survey area = fixed square-Pang count
```

No such equivalence may be inferred.

### Coordinate / Precision Model

CRPC and ECEM establish exact Pang-based coordinates and exact refinement.

They do not establish Domain magnitude.

Therefore:

```text
Pang defines the unit.
CRPC / ECEM define exact representation.
Neither defines total Survey capacity.
```

### Area Mathematics

Exact SCPE area is candidate-resolved through exact shoelace evaluation and expressed in square Pangs.

This permits exact area calculation once a spatial extent is defined.

It does not establish what the total Domain area ought to be.

Thus:

```text
A_D = 4H² square Pang
```

is exact, but it is not a selection rule for `H`.

### Origin and Canonical Frame

The permanent origin `(0,0)`, right-handed frame, native directions, and counterclockwise-positive orientation determine how spatial coordinates are interpreted.

They do not establish the magnitude of the finite Domain.

### Step 5A Formal Determination

> **The Pang measurement doctrine supplies the canonical unit in which `H` must be expressed, but it supplies no authoritative numerical scale relationship from which the magnitude of `H` can be derived.**

Therefore:

> **Pang is a measurement invariant, not a capacity invariant.**

No numerical Survey half-span may be derived merely from the existence of the Pang unit.

### Requirements V Record Standing

No amendment to Requirements V is required by this inquiry.

The existing Requirements already correctly preserve:

- Pang as canonical linear scale;
- square Pang as canonical area;
- CRPC / ECEM as exact position / precision machinery;
- numerical Survey Domain capacity as open.

---

## Step 5B — Authority / Governance Test

### Sources Reviewed

`requirements/03-authority-consensus-evolution/index.html`

`requirements/03-authority-consensus-evolution/README.md`

### Step 5B Question

> **If no mathematically necessary numerical value of `H` can be derived, may BitPangea governance still establish one exact canonical value without falsely presenting that value as mathematically inevitable?**

### Requirements III Standing

Requirements III establishes two controlling principles:

> **Verification can prove correctness. Governance establishes canonical standing.**

and:

> **The specification may evolve. Established spatial meaning may not.**

Finding #16 separates technical correctness from canonical authority.

Independent reproduction, exact tests, Conformance success, matching canonical bytes, or implementation agreement may show that a candidate system behaves correctly.

They do not, by themselves, canonically adopt that system.

Canonical adoption, succession, amendment, or replacement belongs to the valid BitPangea authority or consensus process applicable to the standard.

### Implication for FMD-04B

This resolves an important architectural possibility.

If the inquiry eventually determines that:

```text
no source-derived mathematical invariant uniquely determines H
```

that does **not** imply that FMD-04B is impossible to close.

It means the record must distinguish:

```text
mathematical necessity
from
governed canonical selection
```

A governance act may establish one exact value of `H` as canonical **provided that**:

- the value satisfies all governing FSF Requirements;
- the value is exact and CRPC-representable;
- the Domain remains finite and permanent;
- the value provides sufficient capacity for the selected architecture;
- the record does not falsely claim that mathematics uniquely forced the number if it did not;
- adoption authority is explicit and valid;
- later ordinary compatible evolution does not silently mutate the adopted Domain limits.

### Finding #17 Constraint

Finding #17 establishes that ordinary Specification evolution may not:

- renumber established canonical references;
- relocate established place;
- reinterpret established spatial meaning;
- silently change mathematical identity;
- move canonical truth while claiming ordinary continuity.

Therefore, once `H` is canonically adopted:

> **Changing `H` is not an ordinary implementation or representation change.**

Because Survey Domain validity depends on `H`, changing the adopted Domain boundary can alter whether coordinates are valid Survey space.

Such a change would therefore require a fundamentally different governance treatment rather than ordinary compatible refinement.

### Governance Does Not Create Mathematical Necessity

Requirements III does **not** authorize governance to pretend that an arbitrary numerical choice is mathematically derived.

The correct record must say what kind of decision was actually made.

Accordingly, there are now two legitimate closure types:

#### Closure Type A — Derived Numerical Invariant

```text
H = X
```

because an authoritative mathematical / architectural invariant uniquely requires `X`.

#### Closure Type B — Governed Foundational Constant

```text
H = X
```

because no unique mathematical derivation exists, but the authorized BitPangea adoption process selects one exact compliant value as the permanent canonical Survey limit.

The second type is not weaker if it is honestly classified.

It is a **governed foundational design constant**, not a theorem.

### Step 5B Formal Determination

> **Requirements III permits canonical governance to establish one exact numerical `H` even if no mathematical invariant uniquely derives it, but the record must distinguish governed canonical selection from mathematical necessity.**

Therefore:

> **FMD-04B does not need to prove that one number is mathematically inevitable in order to close. It does need to prove either that the number is derived from authoritative invariants or that it is an explicitly governed foundational constant satisfying all FSF constraints.**

This is a major narrowing of the inquiry.

### Requirements III Record Standing

No update to Requirements III is required.

The existing section already correctly preserves:

- governance above mathematics;
- adoption distinct from verification;
- canonical standing distinct from technical correctness;
- continuity of established spatial meaning;
- prohibition on silent mutation through ordinary evolution.

---

## Step 5C — Specification 04–07 Capacity Cross-Check

### Sources Reviewed

`specification/04-expressions-geometry/README.md`

`specification/05-operations/README.md`

`specification/06-serialization-identity/README.md`

`specification/07-computability-rules/README.md`

### Step 5C Question

> **Do the downstream Specification sections governing geometry, operations, serialization, or computability contain any exact invariant that determines or further constrains the numerical magnitude of `H`?**

### Specification 04 — Spatial Expressions and Geometry

Specification 04 inherits FMD-04 only as the Survey-validity envelope.

Its canonical geometry must remain within the valid Survey Domain, but Specification 04 does not redefine Domain geometry or dimensions.

The selected production-critical Spatial Ground geometry is:

```text
one connected
closed
hole-free
SCPE
```

represented as one FSF SCPE.

This establishes a representable World-space geometry class.

It does **not** establish:

```text
World width
World height
World area
Parcel area
minimum Domain reserve
Domain-to-World ratio
numerical H
```

The fact that one SCPE can represent the production World boundary is therefore a representability result, not a capacity result.

### Specification 05 — Canonical Operations

Specification 05 likewise inherits FMD-04 as the validity envelope.

Its current exact transformation core includes:

```text
CRPC translation
positive rational uniform scaling
```

where resulting geometry remains valid.

This is important for placement feasibility: once a canonical Domain exists, a valid World-space SCPE may be translated and positively uniformly scaled using exact rational values.

However, transformation capability does not determine the required Domain magnitude.

In particular:

```text
existence of exact scaling
≠
selection of canonical H
```

Specification 05 does not define a required production scale, minimum scale, maximum scale, reserve ratio, or numerical margin.

It therefore supplies no numerical capacity criterion for FMD-04B.

### Specification 06 — Serialization and Specification Identity

Specification 06 states explicitly that FSF-CJSON can encode the exact bounds of a governed Survey Domain but does not independently choose or re-adopt those dimensions.

Serialization therefore remains downstream of the mathematical decision.

The correct relationship is:

```text
authoritative Domain mathematics
→ deterministic serialization
```

not:

```text
serialization format
→ Domain magnitude
```

Specification 06 supplies no numerical criterion for `H`.

### Specification 07 — Computability Rules

Specification 07 requires exact Survey Domain validation as part of the computable core.

It inherits the governing Domain mathematics and requires implementations to validate against them exactly.

It does not redefine those mathematics.

Its requirements for:

- finite exact representation;
- deterministic termination;
- hidden-state independence;
- independent reproducibility;
- authoritative governed output;

place implementation-quality constraints on the adopted value and rules.

They do not establish a preferred numerical magnitude.

No resource, parser, integer-size, or implementation convenience limit may be elevated into the canonical value of `H`.

### Cross-Section Determination

Across Specifications 04–07:

```text
Specification 04 — can represent geometry within D_H
Specification 05 — can transform supported geometry exactly within D_H
Specification 06 — can serialize the governed D_H exactly
Specification 07 — can validate governed D_H exactly
```

None determines:

```text
H = X
```

These sections therefore confirm a consistent architectural pattern:

> **The rest of the FSF Specification can consume, validate, transform within, serialize, and reproduce an authoritative Survey Domain once `H` is known. It does not derive the Domain's numerical capacity.**

### Additional Constraint Confirmed

The reviewed sections reinforce one important prohibition:

> **Implementation capability must not become the source of canonical capacity.**

A value of `H` must not be selected because it fits:

- a preferred integer width;
- a parser limit;
- an implementation's numeric range;
- a serialization convenience;
- a storage optimization;
- a test harness;
- a particular transformation implementation.

Such considerations may constrain implementation profiles, but they do not establish foundational spatial truth.

### Step 5C Formal Determination

> **Specifications 04–07 contain no hidden numerical invariant from which `H` can be derived. They are capacity-consuming and capacity-validating sections, not capacity-authoring sections.**

Therefore:

> **No numerical FMD-04B criterion arises from primitive geometry, canonical operations, serialization, or computability.**

No amendment to Specifications 04–07 is required solely because of this inquiry.

---

## Step 5D — Reference Vector Corpus Capacity Cross-Check

### Sources Reviewed

`reference-vectors/01-addressing-vectors/README.md`

`reference-vectors/02-domain-boundary-vectors/README.md`

`reference-vectors/03-pang-measurement-vectors/README.md`

`reference-vectors/04-orientation-vectors/README.md`

`reference-vectors/05-geometry-vectors/README.md`

`reference-vectors/06-normalization-vectors/README.md`

`reference-vectors/07-transformation-vectors/README.md`

`reference-vectors/08-precision-vectors/README.md`

`reference-vectors/09-invalid-input-vectors/README.md`

`reference-vectors/10-serialization-vectors/README.md`

### Step 5D Question

> **Does the executable / parameterized Reference Vector corpus reveal any hidden numerical capacity invariant, implementation constraint, or proof requirement that legitimately determines the Survey Domain half-span `H`?**

### Corpus-Wide Result

No.

Across Sections 01–10, the Reference Vector architecture consistently treats `H` as an upstream Specification dependency.

The corpus can:

- prove exact Point meaning;
- prove closed-boundary behavior;
- prove Pang arithmetic;
- prove frame orientation;
- prove geometry predicates;
- prove normalization;
- prove supported transformations;
- prove precision behavior;
- prove invalid-input handling;
- prove canonical serialization.

It does not select Domain capacity.

### Section 01 — Addressing Vectors

Addressing Vectors support:

```text
CRPC
canonical Point meaning
ECEM
normalization
FSF-CJSON interchange
version-preserved place
```

They explicitly distinguish:

```text
capacity-independent fixtures
    -> executable now

symbolic / parameterized Domain cases
    -> executable now

concrete numeric edge fixtures
    -> blocked until H is selected
```

The section expressly forbids selecting a convenient `H` merely to complete the corpus.

### Section 02 — Survey Domain Limit Vectors

This is the strongest direct Reference Vector confirmation.

It establishes exact symbolic / parameterized:

- origin;
- boundary equations;
- interior classification;
- boundary classification;
- outside classification;
- corner behavior;
- ECEM boundary stability;
- Survey validity / World-membership separation.

But it states that numerical `H` remains open and that:

```text
concrete edge coordinates
canonical just-inside / just-outside numeric fixtures
```

remain blocked until FMD-04B closes.

The section expressly preserves:

> **Reference Vectors demonstrate the Specification. They do not select unresolved numerical capacity.**

### Section 03 — Pang Measurement Vectors

Pang Measurement Vectors reinforce Step 5A.

They prove:

- exact CRPC coordinate differences;
- sub-Pang rational values;
- exact SCPE area;
- normalization-invariant area;
- lossless / lossy distinction.

They do not establish a total Survey width, total Survey area, or other capacity invariant.

Thus the Reference Vector layer confirms:

```text
Pang = unit of measure
not
Pang = Domain-size rule
```

### Section 04 — Orientation Vectors

Orientation Vectors prove:

- canonical axes;
- native directions;
- right-handedness;
- positive counterclockwise rotation;
- exact determinant orientation;
- orientation-preserving placement.

These rules are magnitude-independent.

They place no additional numerical constraint on `H`.

### Section 05 — Geometry Vectors

Geometry Vectors require supported canonical geometry to remain inside `D_H`.

They prove exact predicates and normalization for Point / Segment / SCPE.

The numerical Domain edge remains an upstream dependency.

No geometry fixture introduces a minimum width, height, area, or reserve.

### Section 06 — Normalization Vectors

Normalization Vectors operate on already-defined mathematical meaning.

They prove deterministic convergence without moving place.

They therefore have no authority to alter or derive Domain extent.

Normalization cannot become a capacity-selection mechanism.

### Section 07 — Transformation Vectors

Transformation Vectors are particularly relevant to World placement.

The current exact placement profile supports:

```text
positive uniform scale
+
translation
```

subject to final Survey Domain validity.

A transformed result that crosses `D_H` becomes invalid; it is not clipped, wrapped, snapped, or automatically repaired.

This confirms:

> **The Domain constrains placement. Placement does not define the Domain.**

The existence of exact scale / translation capability proves feasibility of governed placement once `H` is known.

It does not determine `H`.

### Section 08 — Precision Vectors

Precision Vectors confirm that implementation capacity and canonical precision are separate.

Storage width, display width, database field width, floating precision, or implementation limitations do not redefine canonical mathematics.

Therefore no implementation precision limit may be used as a foundational capacity criterion.

### Section 09 — Invalid-Input Vectors

Invalid-Input Vectors explicitly preserve:

```text
D_H = {(x,y) : -H ≤ x ≤ H and -H ≤ y ≤ H}
```

with numerical `H` still open.

They permit symbolic / parameterized out-of-Domain tests while final numerical edge failures remain pending.

The earlier ±1,000,000 Pang working value is expressly noncanonical and may not be used as a final invalid-input fixture.

### Section 10 — Serialization Vectors

Serialization Vectors preserve the rule:

> **Serialization represents canonical truth. It does not create canonical truth.**

They can serialize exact CRPC values and canonical geometry after the governing mathematical object exists.

They cannot derive `H`.

### Step 5D Formal Determination

> **The complete reviewed Reference Vector corpus contains no hidden numerical capacity criterion for FMD-04B. Every Section consistently treats `H` as upstream mathematical truth to be demonstrated after the governing Specification establishes it.**

Therefore:

> **Reference Vectors may prove the selected `H`; they may not select, derive by fixture convenience, or back-solve the canonical Survey Domain capacity.**

This cross-check also confirms that no test-harness, serialization, transformation, precision, or implementation convenience may become the basis for `H`.

No amendment to these Reference Vector README records is required solely because of the present inquiry.

---

## Step 5E — Parcel / World Cardinality and Area Relationship Test

The next candidate source class is the fixed BitPangea Parcel cardinality and any authoritative relationship between Parcel count, Parcel area, World area, and Pang measurement.

### Step 5E Question

> **Does any adopted BitPangea rule connect the fixed Parcel cardinality, equal-area Parcel architecture, or World area to an exact Pang-based magnitude strongly enough to derive `H`?**

The inquiry must distinguish:

```text
cardinality
from
spatial measure
```

A fixed number of Parcels does not determine a Survey Domain magnitude unless an authoritative rule also establishes an exact spatial measure per Parcel, exact total World area, or another exact relationship connecting that cardinality to Pang-based geometry.

Bitcoin or Parcel-number symbolism alone is not sufficient.

### Required Evidence

The next source should be the current authoritative record that establishes:

```text
the fixed total Parcel count
```

and, if separate:

```text
the current equal-area Parcel / Parcel-fabric geometry rule
```

or any other current record that defines an exact relationship among:

```text
Parcel count
Parcel area
World area
Pang
Survey Domain
```

---

# Combined Standing After Step 5D

The inquiry has now established:

```text
FMD-04A
    — resolved

FMD-04B
    — open

Requirements IV
    — requires one exact permanent adopted Survey Domain
    — does not itself choose H

Specification 01
    — requires H
    — cannot derive H

Spatial Ground
    — requires sufficient finite Survey capacity
    — supplies no numerical minimum H

Pang
    — canonical unit of linear measure
    — does not determine Domain magnitude

Requirements III
    — permits governed canonical selection if no unique invariant exists
    — requires honest distinction between derivation and design choice

Specifications 04–07
    — consume / validate / transform within / serialize D_H
    — do not determine Domain magnitude

Reference Vectors 01–10
    — demonstrate defined semantics
    — preserve H parametrically where possible
    — explicitly defer numerical edge fixtures until FMD-04B closes
    — do not create or select H
```

No tested FSF Requirements, Specification, Spatial Ground, measurement, or Reference Vector source has yet produced a unique numerical capacity criterion.

---

## Current Inquiry Standing

**STEP 1 — FMD-04 GOVERNING RECORD — COMPLETE**

**STEP 2 — REQUIREMENTS IV TEST — COMPLETE**

**STEP 3 — SPECIFICATION 01 TEST — COMPLETE**

**STEP 4 — SPATIAL GROUND DEPENDENCY TEST — COMPLETE**

**STEP 5A — PANG MEASUREMENT TEST — COMPLETE**

**STEP 5B — AUTHORITY / GOVERNANCE TEST — COMPLETE**

**STEP 5C — SPECIFICATION 04–07 CAPACITY CROSS-CHECK — COMPLETE**

**STEP 5D — REFERENCE VECTOR CORPUS CAPACITY CROSS-CHECK — COMPLETE**

**STEP 5E — PARCEL / WORLD CARDINALITY AND AREA RELATIONSHIP TEST — NEXT**

**NUMERICAL H — NOT SELECTED**

**FMD-04B — OPEN**

---

## Governing Inquiry Principle

> **Proof artifacts may demonstrate an adopted capacity. They may never manufacture the capacity they are meant to prove.**
