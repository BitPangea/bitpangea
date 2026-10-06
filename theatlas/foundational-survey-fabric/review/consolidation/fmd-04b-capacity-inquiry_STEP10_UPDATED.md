# Foundational Survey Fabric — FMD-04B Capacity Inquiry Record

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Inquiry / Consolidation Record  
**Recommended Repository Path:** `foundational-survey-fabric/review/consolidation/fmd-04b-capacity-inquiry.md`  
**Subject:** FMD-04B — Numerical Survey Domain Capacity  
**Status:** ACTIVE INQUIRY — STEPS 1–6 COMPLETE  
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

## Step 5E — Parcel Cadastre / Cardinality Test

### Sources Reviewed

`theatlas/README.md`

`theatlas/parcel-cadastre/index.html`

`theatlas/parcel-cadastre/README.md`

### Step 5E Question

> **Does any adopted BitPangea rule connect the fixed Parcel cardinality, equal-area Parcel architecture, or World area to an exact Pang-based magnitude strongly enough to derive `H`?**

### Fixed Parcel Cardinality

The Atlas establishes exactly:

```text
21,000,000 Parcels
```

as a fixed spatial obligation.

The Parcel Cadastre is the architectural domain responsible for the permanent spatial record of those Parcels.

This cardinality is therefore authoritative.

### Parcel Cadastre Standing

The Parcel Cadastre owns:

- permanent Parcel identity;
- fixed position;
- authoritative territorial definition;
- Parcel-specific spatial truth.

However, its current exact cadastral details remain open.

Specifically, the current record leaves open:

```text
exact Parcel geometry
exact cadastral schema
Parcel identifiers
record model
```

The Parcel Cadastre therefore does not yet establish an exact Parcel area, exact Parcel dimensions, exact Parcel tiling geometry, or any exact Pang-based spatial measure per Parcel.

### Cardinality Does Not Determine Measure

The fixed total:

```text
21,000,000 Parcels
```

is a cardinality constraint.

No reviewed record establishes:

```text
1 Parcel = X square Pang
1 Parcel width = X Pang
1 Parcel edge = X Pang
total World area = Y square Pang
World area / Parcel count = fixed exact quotient
Survey Domain area = Parcel count × fixed Parcel area
```

Accordingly:

> **21,000,000 determines how many canonical Parcels must exist. It does not determine how much canonical Survey area each Parcel occupies.**

Without an exact adopted measure per Parcel or exact total World area, the count cannot be converted into a numerical Survey half-span.

### Equal-Area / Rhombille Direction

The Atlas identifies the three-orientation rhombille family as a leading visible Parcel grammar direction.

That direction remains subject to architectural and mathematical proof.

The current Parcel Cadastre record does not canonically adopt:

- final rhombille geometry;
- exact Parcel side length;
- exact Parcel area;
- exact Pang relationship;
- exact total Parcel-fabric area.

Therefore the equal-area / rhombille direction cannot presently be used to derive `H`.

### World Greater Than Parcel Fabric

The Atlas also preserves that the World is greater than any Parcel-only interpretation.

Exactly 21,000,000 Parcels must exist, but the Parcel fabric need not exhaust every meaningful World-space condition.

Potential non-Parcel spatial conditions may include:

- The Verge;
- Outliers;
- World-scale infrastructure;
- other authorized spatial structures.

This further prevents a direct inference:

```text
World area = 21,000,000 × Parcel area
```

unless such an equality is separately and explicitly adopted.

No such equality exists in the reviewed records.

### Layer-Authority Boundary

The dependency remains:

```text
Foundational Survey Fabric
→ Spatial Ground
→ General Spatial Interpretation
→ Parcel Cadastre
```

The Parcel Cadastre depends on the spatial foundation beneath it and does not redefine that foundation.

Therefore even if a future Parcel geometry establishes exact area, that higher-layer result must not automatically be used to rewrite lower-layer Survey capacity unless a formally justified dependency proves such a relationship necessary.

### Step 5E Formal Determination

> **The fixed cardinality of 21,000,000 Parcels is authoritative, but no reviewed Parcel Cadastre or Atlas record connects that cardinality to an exact Pang-based Parcel area, World area, Survey area, or Domain half-span.**

Therefore:

> **Parcel count does not presently derive `H`.**

The current rhombille / equal-area Parcel direction likewise does not derive `H` because exact Parcel geometry and exact Pang-based Parcel measure remain open.

### Consequence

The most obvious symbolic numerical candidate in BitPangea architecture has now been tested.

The inquiry must not use:

```text
21,000,000
```

as a Survey half-span, Domain width, Domain area, reserve factor, or other capacity constant merely because the number is canonical elsewhere.

That would be numerology rather than a source-derived spatial criterion.

---

# Combined Standing After Step 5E

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
    — do not create or select H

Parcel cardinality
    — exactly 21,000,000
    — authoritative as count
    — does not determine exact Parcel area
    — does not determine World area
    — does not determine Survey area
    — does not determine H

Parcel geometry
    — still open at exact cadastral level
    — cannot presently supply a Pang-based capacity invariant
```

No tested source has yet produced a unique numerical capacity criterion.

---

## Step 6 — Constitutional Extent / Final Derivation-Source Test

### Sources Reviewed

- `Codex WP-S-I — The Extent` public record (visual review supplied by user)
- `The World Properties Domain` public record (visual review supplied by user)
- `shared-architectural-doctrine-minimum.md`
- `Spatial_Ground_Requirements_ADOPTED.md`
- `Spatial_Ground_Specification_DRAFT.md`
- `Spatial_Ground_Reference_Vectors.md`

### Step 6 Question

> **Have all plausible authoritative derivation sources been exhausted sufficiently to conclude that no existing invariant uniquely determines the Survey Domain half-span `H`?**

### Constitutional Extent Standing

The reviewed constitutional and architectural records consistently treat **The Extent** as a constitutional statement of the World's finite, permanent spatial scope.

They do **not** treat Extent as an exact numerical measurement system.

The adopted Spatial Ground Requirements explicitly state that Extent:

- establishes finite, permanent spatial scope;
- does not independently determine the exact membership set;
- does not independently determine geometry;
- does not independently determine representation;
- does not independently determine measurement;
- does not independently determine the membership limit;
- does not independently determine implementation or interpretation.

Therefore:

> **The Extent constrains finitude and permanence, but does not supply a Pang-valued magnitude from which `H` can be derived.**

### World Properties Domain Standing

The reviewed World Properties material preserves Extent as a recognized spatial property of The World.

The World Properties framework recognizes and preserves properties that already belong to The World; it does not create missing quantitative geometry.

Nothing in the reviewed material establishes:

```text
World width = X Pang
World height = X Pang
World area = X square Pang
Extent = X Pang
Survey Domain = Extent
H = f(Extent)
```

No numerical spatial magnitude is present.

### Shared Architectural Doctrine

The shared doctrine reinforces ownership:

```text
Foundational Survey Fabric
    owns Survey Domain and spatial mathematics

Spatial Ground
    consumes sufficient Survey capacity

higher layers
    may not redefine lower-layer truth
```

Its DA1 — Survey Sufficiency requires FSF to be capable of expressing all Survey space required by the adopted Ground definition.

Its DA7 — Finite Survey Domain requires a finite FSF Survey Domain.

Neither supplies a numerical size.

The doctrine also requires constitutional return when an architectural question would alter or depend upon constitutional truth.

That return has now been tested through The Extent.

No numerical invariant emerged.

### Spatial Ground Requirements

The adopted Requirements explicitly state that:

- World-space must conform to Extent;
- Extent does not determine exact measurement;
- 21,000,000 Parcels is not a Spatial Ground responsibility;
- Spatial Ground consumes FSF scale and measure by reference;
- Spatial Ground must not redefine or rescale Survey-owned truth.

Thus Spatial Ground cannot supply a numerical `H` through constitutional Extent, Parcel count, or higher-layer design.

### Spatial Ground Specification

The draft Spatial Ground Specification preserves the same boundary.

It defines the valid Survey-location universe `S` as supplied by FSF and states that Spatial Ground does not define `S`.

It consumes:

- Survey Domain;
- coordinate framework;
- geometry;
- topology;
- measure;
- scale;
- precision;
- refinement;

by reference.

It explicitly prohibits a parallel measurement system or rescaling of Survey truth.

Therefore the Ground Specification supplies no hidden numerical capacity rule.

### Spatial Ground Reference Vectors

The Ground Reference Vector corpus uses a deliberately synthetic FSF test profile precisely to avoid inventing unresolved production FSF mathematics.

It explicitly excludes:

- production BitPangea Survey coordinates;
- actual World-space geometry;
- actual World limit coordinates;
- actual Parcel references.

This is further evidence that downstream proof material has not smuggled in a numerical Survey extent.

### Derivation-Source Exhaustion

The inquiry has now tested the plausible authoritative source classes:

```text
FMD-04 itself
Requirements IV
Specification 01
Spatial Ground dependency
Pang measurement doctrine
Requirements III / governance
Specifications 04–07
Reference Vectors 01–10
fixed Parcel cardinality
Parcel Cadastre
World Properties / The Extent
shared architectural doctrine
Spatial Ground Requirements / Specification / Reference Vectors
```

None supplies a unique exact numerical value for `H`.

### Step 6 Formal Determination

> **The presently adopted and candidate BitPangea architecture contains no source-derived mathematical, constitutional, cadastral, measurement, implementation, or downstream dependency invariant that uniquely determines the numerical Survey Domain half-span `H`.**

Therefore:

> **FMD-04B should no longer be treated as a search for a hidden derivation. The correct remaining closure path is explicit selection and adoption of one exact compliant value of `H` as a governed foundational constant.**

This does not mean the value may be arbitrary in the sense of unconstrained.

The selected constant must still satisfy all established requirements:

- exact;
- positive;
- CRPC-representable;
- finite;
- symmetric in the adopted square Domain;
- permanent once adopted;
- sufficient for the intended production World-space instance;
- compatible with deterministic validation and interchange;
- not chosen from implementation convenience;
- not falsely represented as mathematically inevitable.

### Classification of the Final Decision

The eventual FMD-04B decision should be classified as:

> **GOVERNED FOUNDATIONAL DESIGN CONSTANT**

not:

> **MATHEMATICALLY DERIVED INVARIANT**

unless new authoritative evidence is introduced before adoption.

---

# Historical Corroboration Review — Day #102 Journal

## Source Reviewed

`bitpangea-journal-2026-09-06.md`

## Purpose

This review tests whether the Day #102 Creator-period record contains any earlier adopted spatial relationship that would alter the Step 6 conclusion or provide a previously overlooked derivation of the Survey Domain half-span `H`.

## Findings

### Parcel Cardinality Remains Cardinality, Not Measure

Day #102 repeatedly preserves:

```text
exactly 21,000,000 Parcels
```

while separately leaving the canonical measurement basis for equal Parcel area unresolved.

Therefore the Journal does not establish:

```text
1 Parcel = X square Pang
World area = 21,000,000 × X square Pang
Survey area = f(Parcel count)
H = f(Parcel count)
```

### Equal Fundamental Area Was Adopted Only as a Creator Design Principle

Day #102 adopted:

```text
equal fundamental area
```

as the preferred Creator design principle for all Parcels.

However, it expressly preserved the exact canonical measurement basis as unresolved.

This distinction is directly relevant to FMD-04B:

> **equal-area intent does not provide an exact Pang-valued area per Parcel.**

The principle therefore cannot presently derive `H`.

### The World Is Not Exhausted by the Parcel Fabric

Day #102 adopted the Creator direction:

> **The World is not a tessellation of 21,000,000 Parcels. It is a World containing 21,000,000 Parcels.**

It also adopted the existence of non-Parcel areas within The World.

Therefore even a future exact Parcel area would not, by itself, establish total World area unless an additional authoritative rule explicitly related Parcel area, non-Parcel area, and total World-space area.

### Frontier Does Not Supply a Numerical Limit

Day #102 explored The Frontier as a provisional Creator design concept for the terminal part or condition of The World.

It expressly declined to treat The Frontier as:

- a coastline;
- an ocean boundary;
- a Parcel;
- equal-area;
- rhombic;
- hexagonal;
- a constitutional World Property.

The Frontier therefore does not supply an exact Pang-valued terminal distance or World dimension.

### World Form / Feature Scale Does Not Supply H

Day #102 introduced the useful design principle:

> **No important geographic feature should depend upon sub-Parcel width.**

This is a meaningful future design constraint, but it is not yet a numerical capacity rule because canonical Parcel width / area remains unresolved.

It may later influence World and Parcel-scale design, but it cannot presently determine Survey Domain capacity.

## Historical Corroboration Determination

> **The Day #102 Journal independently corroborates the Step 6 conclusion. It contains no adopted numerical relationship capable of deriving `H`, and it explicitly preserves the missing relationships—Parcel area basis, non-Parcel geometry, Frontier geometry, and implementation scale—as unresolved.**

Therefore:

> **No Step 6 conclusion is reopened. FMD-04B remains correctly classified as requiring selection of a governed foundational design constant rather than discovery of a hidden mathematical invariant.**

## Additional Selection-Phase Constraint

The Day #102 record contributes one useful Step 7 consideration:

> **The selected Survey Domain must leave sufficient architectural freedom for a World that contains both Parcel and non-Parcel areas and whose exact Parcel measurement basis remains independently governed.**

This is a sufficiency / independence criterion.

It is not a numerical derivation.

---

# Step 7 — Governed Constant Selection Criteria

## Step 7 Question

> **Given that `H` is a governed foundational constant rather than a mathematically derived invariant, what principled criteria should govern the selection of one exact permanent value?**

The objective of Step 7 is not to choose a number.

It is to define the decision standard against which all future numerical candidates must be judged.

The selection framework must preserve the distinction established by Step 6:

```text
exactness ≠ derivation
governance ≠ arbitrariness
design choice ≠ mathematical necessity
```

A governed constant may be intentionally selected.

It may not be casually selected.

---

## 7.1 — Mandatory Admissibility Criteria

Any candidate `H` must satisfy every condition below before it may even be compared on design merit.

### Criterion A — Exact Canonical Representability

`H` must be exactly representable under the governing FSF coordinate mathematics.

Therefore:

- `H > 0`;
- `H` must be CRPC-representable;
- no floating approximation may define the canonical limit;
- no epsilon or tolerance may participate in the canonical boundary;
- `-H` and `+H` must remain exact canonical extrema.

A candidate failing exact representation is inadmissible.

### Criterion B — Finite Permanent Domain

The resulting Survey Domain must remain:

```text
D_H = [-H,+H] × [-H,+H]
```

with one finite permanent extent.

The candidate must not depend upon:

- runtime expansion;
- deployment growth;
- later automatic enlargement;
- implementation-selected bounds;
- profile-specific canonical limits.

A candidate that requires future resizing is inadmissible.

### Criterion C — Production World Sufficiency

The selected `H` must be sufficient to contain the eventual production World-space instance under the adopted FSF-to-Spatial-Ground placement model.

The production World must remain a strict subset of the Survey Domain with positive margin.

Therefore:

```text
World-space ⊂ interior(D_H)
```

for the adopted production placement.

This is a genuine lower-layer sufficiency requirement.

It does not authorize Spatial Ground to choose `H`.

### Criterion D — Higher-Layer Independence

`H` must not be numerically authored by a higher-layer semantic commitment unless that commitment has first been formally established as an irreducible lower-layer dependency.

Accordingly, `H` must remain independent of unsupported inference from:

- Parcel count;
- Parcel identity;
- Parcel ownership;
- Region count;
- Cluster count;
- settlement;
- governance;
- economics;
- civilization;
- future user activity.

The Survey Domain is a foundational spatial validity envelope, not a derivative of higher-layer meaning.

### Criterion E — Implementation Independence

The selected value must not be justified by:

- integer width;
- floating-point range;
- database limits;
- storage alignment;
- parser convenience;
- rendering bounds;
- GPU or graphics range;
- viewport size;
- test-fixture convenience;
- current software stack.

Implementations must conform to canonical Survey truth.

Canonical Survey truth must not conform to incidental implementation limits.

---

## 7.2 — Governing Design Criteria

Candidates that satisfy the mandatory admissibility criteria should then be compared using the following governing design criteria.

### Criterion F — Durable Headroom

The Domain should provide enough spatial headroom that normal completion of the designed World does not place canonical World geometry artificially close to the Survey boundary.

This includes room for the already adopted Creator direction that The World contains:

- exactly 21,000,000 Parcels;
- non-Parcel areas;
- larger spatial composition;
- Regions;
- Clusters;
- a terminal Creator expression such as The Frontier;
- future exact cadastral geometry.

The headroom must be defensible as architectural freedom.

It must not be an arbitrary percentage selected merely for comfort.

### Criterion G — Avoidance of Artificial Tightness

A candidate should be rejected if it is so close to the minimum foreseeable World envelope that ordinary design refinement would repeatedly threaten the Survey boundary.

The permanent Survey Domain should not force higher-layer geography to be designed around an unnecessarily tight lower-layer box.

The purpose of the Domain is to provide a stable reference envelope, not to become a hidden geographic constraint.

### Criterion H — Avoidance of Purposeless Excess

A candidate should also be disfavored if it creates enormous unused Survey capacity without a corresponding architectural reason.

The fact that a larger exact number is available does not make it better.

Unused capacity is acceptable where it serves permanence, separation of layers, or design freedom.

Unused capacity is not itself a virtue.

### Criterion I — Simple Exact Expression

All else being equal, prefer a value that is:

- exact;
- compact to write;
- easy to communicate;
- easy to audit;
- easy to reproduce independently;
- free from unnecessary fractional complexity.

This is a secondary criterion.

Simplicity may break ties among otherwise sound candidates.

It may not override sufficiency or permanence.

### Criterion J — Human and Machine Auditability

The selected value should make canonical Domain membership and edge cases straightforward to inspect.

Independent implementations should be able to verify:

- origin;
- extrema;
- corners;
- exact interior;
- exact boundary;
- exact outside;
- serialization;
- cross-implementation agreement

without hidden conversion rules or context-dependent interpretation.

### Criterion K — Semantic Neutrality

The number should not acquire canonical meaning merely from coincidence with another BitPangea number or external symbolic system.

The candidate should not be preferred merely because it resembles:

- 21,000,000;
- Bitcoin supply;
- powers associated with Bitcoin;
- a date;
- an institutional count;
- a Parcel count;
- a culturally attractive number.

A numerically simple value may still be selected.

But its justification must be spatial governance, not symbolism.

### Criterion L — Permanent Adoption Fitness

The candidate must be suitable for one explicit canonical adoption act.

The adoption record should be able to say, without qualification:

> **This exact value is the permanent canonical half-span of the Foundational Survey Fabric Survey Domain.**

The value should not be selected with an expectation that it will later be revisited merely because the World design matures.

---

## 7.3 — Prohibited Selection Bases

The following may not independently justify a candidate `H`:

```text
roundness alone
memorability alone
visual neatness
Bitcoin symbolism
Parcel-count symbolism
numerology
implementation word size
database capacity
rendering convenience
current screen scale
test convenience
arbitrary reserve percentage
arbitrary “10×” or “100×” multiplier
informal “large enough”
future speculative growth of The World
a desire to use all available coordinate space
```

These factors may sometimes coexist with a valid candidate.

They may not constitute the governing reason for adoption.

---

## 7.4 — Selection Method

The governed selection should use a two-stage decision method.

### Stage 1 — Admissibility

Reject any candidate that fails any mandatory criterion:

```text
A — exact canonical representability
B — finite permanent Domain
C — production World sufficiency
D — higher-layer independence
E — implementation independence
```

No scoring is needed for inadmissible candidates.

They are simply rejected.

### Stage 2 — Comparative Fitness

Compare the surviving candidates under:

```text
F — durable headroom
G — avoidance of artificial tightness
H — avoidance of purposeless excess
I — simple exact expression
J — human and machine auditability
K — semantic neutrality
L — permanent adoption fitness
```

No criterion should be converted into an artificial numerical score unless a genuine need emerges.

A reasoned comparative record is preferred.

The final selection should identify:

1. why the selected candidate is sufficient;
2. why smaller serious candidates were rejected;
3. why materially larger serious candidates were unnecessary;
4. why the chosen value is exact and permanent;
5. why the selection is governance rather than mathematical derivation.

---

## 7.5 — Minimum-Capacity Principle

Step 7 does **not** adopt a doctrine that the smallest mathematically possible `H` is automatically best.

The production World geometry is not yet numerically frozen.

Therefore a bare minimum derived from a provisional bounding box would create circular dependence:

```text
provisional World design
→ minimum H
→ permanent Survey Domain
→ future World design constrained by provisional choice
```

That is undesirable.

Instead, the governing principle is:

> **Choose the smallest clearly durable canonical capacity, not the smallest momentarily possible capacity.**

This preserves discipline against excessive unused space without allowing the permanent Survey Domain to become hostage to an unfinished higher-layer geometry.

---

## 7.6 — World / Parcel Independence Principle

Day #102 historical review contributes a specific selection constraint.

The production World is:

> **a World containing 21,000,000 Parcels**

not:

> **a tessellation exhausted by 21,000,000 Parcels**

The selected Survey Domain must therefore be capable of supporting:

- Parcel areas;
- non-Parcel areas;
- World-scale composition;
- terminal spatial expression;
- future exact cadastral measurement

without requiring the Parcel count to define Survey magnitude.

Accordingly:

> **Future Parcel measurement may consume Survey scale. It may not retroactively become the justification for the already-adopted Survey capacity unless a new formal dependency is independently established.**

---

## 7.7 — Step 7 Formal Determination

The governed constant selection criteria are established as follows:

> **The canonical Survey half-span `H` must be exact, finite, permanent, implementation-independent, higher-layer-independent, and sufficient for the production World-space instance with positive margin. Among admissible candidates, BitPangea should prefer the smallest clearly durable capacity that provides defensible architectural headroom without purposeless excess, is simple to express and audit, remains semantically neutral, and is fit for one permanent canonical adoption act.**

This produces the governing selection rule:

> **Select the smallest clearly durable exact capacity — not the smallest temporarily possible capacity, and not the largest conveniently available capacity.**

This is a governed design standard.

It is not a mathematical derivation of the eventual number.

---

# Step 8 — Candidate Value Comparison

## Step 8 Question

> **Which small set of exact candidate half-spans should be compared, and which candidate best satisfies the Step 7 governed selection criteria without importing symbolism, implementation convenience, or unsupported higher-layer assumptions?**

Step 8 deliberately compares only a small stress-test set.

The purpose is not to assume that one of these values must win.

The purpose is to determine whether the Step 7 criteria are already sufficient to distinguish among concrete exact values.

---

## 8.1 — Candidate Set

Three exact half-spans are compared:

```text
Candidate A — H = 1,000,000 Pang
Candidate B — H = 10,000,000 Pang
Candidate C — H = 100,000,000 Pang
```

These values are not introduced because powers of ten are inherently preferred.

They are used because they provide a clean three-order capacity comparison while including the historically superseded `1,000,000 Pang` working candidate.

The comparison therefore asks:

> **Does materially increasing exact Survey capacity produce a principled winner under the adopted Step 7 criteria?**

The answer must come from the criteria, not from numerical aesthetics.

---

## 8.2 — Candidate A: `H = 1,000,000 Pang`

Resulting Domain:

```text
D = [-1,000,000,+1,000,000] × [-1,000,000,+1,000,000]
```

Derived exact values:

```text
width  = 2,000,000 Pang
height = 2,000,000 Pang
area   = 4,000,000,000,000 square Pang
```

### Step 7 Evaluation

**A — Exact canonical representability:** PASS

The value is exact and trivially CRPC-representable.

**B — Finite permanent Domain:** PASS

It yields one finite exact square Domain.

**C — Production World sufficiency:** UNPROVEN

No adopted production World bounding magnitude presently establishes that the complete World-space instance, including positive margin, fits inside this Domain.

**D — Higher-layer independence:** PASS AS A NUMBER / FAIL AS A JUSTIFICATION IF BACK-SOLVED

The number itself does not encode a higher-layer semantic fact.

However, it cannot be justified merely by assuming that current World design will fit.

**E — Implementation independence:** PASS AS A NUMBER

Nothing about `1,000,000` inherently depends upon a particular implementation.

Its earlier use, however, was not supported by an implementation-independent architectural derivation.

**F — Durable headroom:** UNPROVEN

Without a governed production World scale, durable headroom cannot be demonstrated.

**G — Avoidance of artificial tightness:** UNPROVEN

It cannot presently be shown that `1,000,000` is safely above the smallest durable capacity.

**H — Avoidance of purposeless excess:** UNPROVEN

It also cannot be shown that the unused capacity would be proportionate rather than excessive.

**I — Simple exact expression:** STRONG PASS

The number is simple and compact.

**J — Human and machine auditability:** STRONG PASS

Boundary and edge fixtures would be straightforward.

**K — Semantic neutrality:** CONDITIONAL PASS

The value is not inherently tied to Parcel count or Bitcoin supply, but its roundness cannot constitute the reason for selection.

**L — Permanent adoption fitness:** UNPROVEN

Permanent fitness depends principally upon sufficiency and durable headroom, which remain unproven.

### Candidate A Standing

> **EXACT AND SIMPLE, BUT ARCHITECTURALLY UNJUSTIFIED.**

This remains the superseded historical working candidate.

Step 8 finds no new evidence rehabilitating it.

---

## 8.3 — Candidate B: `H = 10,000,000 Pang`

Resulting Domain:

```text
D = [-10,000,000,+10,000,000] × [-10,000,000,+10,000,000]
```

Derived exact values:

```text
width  = 20,000,000 Pang
height = 20,000,000 Pang
area   = 400,000,000,000,000 square Pang
```

### Step 7 Evaluation

**A — Exact canonical representability:** PASS

**B — Finite permanent Domain:** PASS

**C — Production World sufficiency:** UNPROVEN

The larger magnitude intuitively provides more room, but intuition is not an authoritative sufficiency proof.

**D — Higher-layer independence:** PASS AS A NUMBER

**E — Implementation independence:** PASS AS A NUMBER

**F — Durable headroom:** UNPROVEN

A tenfold increase over Candidate A does not by itself establish that the resulting headroom is architecturally appropriate.

**G — Avoidance of artificial tightness:** PROBABLY STRONGER THAN A, BUT NOT PROVABLE

The candidate offers materially more room than `1,000,000 Pang`, but the inquiry has no governed numerical World envelope against which to determine whether that additional room is needed.

**H — Avoidance of purposeless excess:** UNPROVEN

The candidate may provide useful headroom or may simply create one hundred times Candidate A's Domain area without purpose.

**I — Simple exact expression:** STRONG PASS

**J — Human and machine auditability:** STRONG PASS

**K — Semantic neutrality:** CONDITIONAL PASS

Again, power-of-ten simplicity is acceptable only as a secondary property.

**L — Permanent adoption fitness:** UNPROVEN

### Candidate B Standing

> **MORE CAPACIOUS THAN A, BUT THE ADDITIONAL CAPACITY HAS NO GOVERNED BASIS YET.**

Candidate B cannot be preferred merely because ten times more room feels safer.

---

## 8.4 — Candidate C: `H = 100,000,000 Pang`

Resulting Domain:

```text
D = [-100,000,000,+100,000,000] × [-100,000,000,+100,000,000]
```

Derived exact values:

```text
width  = 200,000,000 Pang
height = 200,000,000 Pang
area   = 40,000,000,000,000,000 square Pang
```

### Step 7 Evaluation

**A — Exact canonical representability:** PASS

**B — Finite permanent Domain:** PASS

**C — Production World sufficiency:** UNPROVEN

It is more likely in an informal sense to contain any plausible World design, but probability and comfort are not canonical justification.

**D — Higher-layer independence:** PASS AS A NUMBER

**E — Implementation independence:** PASS AS A NUMBER

**F — Durable headroom:** UNPROVEN

There is abundant nominal coordinate room, but no current architectural standard establishes how much of it is meaningfully durable headroom.

**G — Avoidance of artificial tightness:** STRONG INFORMAL PERFORMANCE / NOT AUTHORITATIVE

It is difficult to imagine ordinary World design being constrained by the boundary, but "difficult to imagine" is not a governed criterion.

**H — Avoidance of purposeless excess:** MATERIAL CONCERN

This candidate creates:

```text
10,000 ×
```

the Domain area of Candidate A.

Without an architectural purpose for that additional area, Candidate C risks violating the Step 7 rule against purposeless excess.

**I — Simple exact expression:** STRONG PASS

**J — Human and machine auditability:** STRONG PASS

**K — Semantic neutrality:** CONDITIONAL PASS

**L — Permanent adoption fitness:** UNPROVEN

### Candidate C Standing

> **VERY LARGE AND EXACT, BUT CURRENTLY AT THE GREATEST RISK OF UNJUSTIFIED EXCESS.**

Greater capacity alone does not make it the better foundational constant.

---

## 8.5 — Comparative Matrix

| Criterion | 1,000,000 | 10,000,000 | 100,000,000 |
|---|---|---|---|
| Exact representability | PASS | PASS | PASS |
| Finite permanent Domain | PASS | PASS | PASS |
| Production World sufficiency | UNPROVEN | UNPROVEN | UNPROVEN |
| Higher-layer independence | PASS* | PASS* | PASS* |
| Implementation independence | PASS | PASS | PASS |
| Durable headroom | UNPROVEN | UNPROVEN | UNPROVEN |
| Avoid artificial tightness | UNPROVEN | UNPROVEN | INFORMALLY STRONG, NOT PROVED |
| Avoid purposeless excess | UNPROVEN | UNPROVEN | MATERIAL CONCERN |
| Simple exact expression | STRONG | STRONG | STRONG |
| Auditability | STRONG | STRONG | STRONG |
| Semantic neutrality | CONDITIONAL | CONDITIONAL | CONDITIONAL |
| Permanent adoption fitness | UNPROVEN | UNPROVEN | UNPROVEN |

`*` The values themselves are semantically neutral only if their eventual justification remains independent of unsupported higher-layer meaning.

---

## 8.6 — The Comparison Exposes a Missing Decision Input

The three candidates reveal an important fact.

Step 7 successfully distinguishes:

- admissible from inadmissible forms of value;
- valid from invalid justifications;
- tightness risk from excess risk.

But it cannot yet distinguish one concrete numerical magnitude as the best permanent value.

The unresolved criteria are exactly the criteria that depend upon a quantitative notion of:

```text
sufficient
durable headroom
too tight
too excessive
```

No current adopted record supplies that quantitative reference.

Therefore:

> **The present architecture can tell us what kind of number H must be, but it still cannot tell us why 1,000,000 is better than 10,000,000, or why 10,000,000 is better than 100,000,000.**

This is not a return to the failed derivation search.

It is a narrower governance problem.

A governed foundational constant still requires a defensible capacity basis.

---

## 8.7 — What Must Not Happen Next

Step 8 rejects the following shortcuts:

```text
choose 1,000,000 because it was used before
choose 10,000,000 because it feels safely larger
choose 100,000,000 because it is future-proof
choose the largest candidate because unused space is cheap
choose the smallest candidate because minimalism is elegant
choose the middle candidate as a compromise
```

None of these satisfies the Step 7 standard.

Especially:

> **The midpoint of arbitrary candidates is still arbitrary.**

---

## 8.8 — Required Capacity Basis

To make a genuine numerical selection, the governance record now needs one deliberately adopted **capacity basis** that is lower-layer appropriate.

That basis must not pretend to be a discovered invariant.

It should answer:

> **What amount of durable Survey headroom does BitPangea intend the permanent foundational spatial envelope to provide beyond the production World-space instance?**

This must be framed as a governance/design standard rather than a mathematical theorem.

Possible forms include:

- an exact required minimum separation between production World-space and the Survey boundary;
- an exact capacity ratio between the adopted World bounding envelope and Survey Domain;
- an exact reserved Survey margin doctrine;
- another explicitly governed rule that makes "sufficient but not excessive" quantitatively decidable.

No such basis is adopted by Step 8.

---

## 8.9 — Step 8 Formal Determination

> **The candidate values `1,000,000`, `10,000,000`, and `100,000,000 Pang` are all exact, finite, simple, auditable, and technically admissible in form, but none can presently be selected as the permanent canonical half-span because the governing architecture still lacks a quantitative capacity basis by which production sufficiency, durable headroom, artificial tightness, and purposeless excess can be distinguished.**

Further:

> **Increasing H by one or two orders of magnitude does not cure the absence of justification. It only changes the amount of unjustified capacity.**

Candidate A remains superseded.

Candidate B is not promoted.

Candidate C is not promoted.

No numerical H is selected.

---

# Step 9 — Governed Capacity Basis

## Step 9 Question

> **What governed capacity basis should define enough permanent Survey headroom to protect World design freedom without creating purposeless excess?**

Step 8 exposed a deeper issue.

The three numerical candidates could not be distinguished on absolute “capacity” because the current production placement model permits:

```text
positive uniform scale
+
translation
```

for the Spatial Ground World-space instance.

That fact changes the meaning of the capacity question.

---

## 9.1 — Scale-Invariance Finding

Let a finite production World-space geometry have an axis-aligned bounding width `W_x` and height `W_y` in its own pre-placement geometry.

Under the permitted placement model, a positive uniform scale factor `s` may be applied before final Survey placement.

For any finite exact Survey half-span:

```text
H > 0
```

there exists a sufficiently small positive `s` such that:

```text
s·W_x < 2H
s·W_y < 2H
```

and therefore the scaled finite World can be placed strictly inside:

```text
D_H = [-H,+H] × [-H,+H]
```

with positive margin.

Accordingly:

> **Absent an independently fixed World-to-Pang scale, a larger numerical H does not intrinsically provide more semantic World capacity than a smaller H.**

The values:

```text
1,000,000
10,000,000
100,000,000
```

differ numerically.

But under unconstrained positive uniform placement scale, they are related by exact rescaling.

This means the Step 8 comparison was correctly unable to identify a numerical winner from “capacity” alone.

---

## 9.2 — Absolute Headroom Is Not Yet a Meaningful Primitive

The current architecture does not establish:

```text
1 Parcel = X Pang
World width = X Pang
World area = X square Pang
World scale = fixed relative to Pang
```

Therefore statements such as:

```text
10,000,000 Pang gives ten times more useful World room
```

are not presently meaningful as architectural claims.

They describe coordinate magnitude, not necessarily greater design freedom.

A finite World may be uniformly scaled into the valid placement envelope.

Thus:

> **FMD-04B should not manufacture an absolute World-size doctrine merely to justify a coordinate constant.**

That would reverse the architecture.

---

## 9.3 — The Capacity Basis Should Be Relative, Not Absolute

The correct governed capacity basis is therefore a **relative placement reserve**, not an absolute Pang-valued World size.

The Survey Domain should distinguish:

```text
canonical Survey validity envelope
```

from:

```text
preferred production World placement envelope
```

without claiming that the World possesses an independently predetermined Pang magnitude.

This permits the FSF to preserve durable headroom while leaving Spatial Ground free to complete World geometry inside the lower-layer mathematical envelope.

---

## 9.4 — Canonical Placement Envelope

Step 9 adopts the following governed capacity basis for FMD-04B selection:

For:

```text
D_H = [-H,+H] × [-H,+H]
```

define the production placement envelope:

```text
P_H = [-H/2,+H/2] × [-H/2,+H/2]
```

The final production World-space instance shall be placed so that its complete closed geometry is contained within the **interior** of `P_H`.

Formally:

```text
World-space ⊂ interior(P_H) ⊂ interior(D_H)
```

This creates an exact symmetric reserve band between the preferred production placement envelope and the Survey Domain boundary.

---

## 9.5 — Meaning of the Half-Span Reserve

The rule does not mean that the outer reserve is another geographic zone.

It does not create:

- additional World territory;
- an Exterior;
- a Frontier;
- Parcel space;
- ownership space;
- settlement space;
- future expansion space.

It is purely a Survey-level reference reserve.

The distinction is:

```text
D_H
    canonical Survey-valid coordinate envelope

P_H
    governed production World placement envelope
```

The outer band:

```text
D_H \ P_H
```

remains valid Survey space but is not, by this rule alone, World-space.

---

## 9.6 — Why `1/2` Is the Recommended Reserve Ratio

The exact ratio:

```text
P_H half-span = H/2
```

is adopted because it has several desirable governance properties.

### Exactness

`1/2` is exactly CRPC-representable.

No approximation is introduced.

### Symmetry

The placement envelope remains centered on the permanent canonical origin and preserves the same axis-aligned square structure as the Survey Domain.

### Auditability

The relationship is trivial to verify independently:

```text
Survey half-span    = H
Placement half-span = H/2
```

### Durable Separation

The production placement envelope occupies one-half of the Survey Domain's linear width and height.

Equivalently:

```text
Survey width      = 2H
Placement width   = H
```

The total linear reserve across each axis therefore equals the placement-envelope width itself.

This provides substantial separation without invoking an arbitrary decimal percentage.

### No Higher-Layer Numerical Dependency

The ratio does not depend upon:

- Parcel count;
- Parcel area;
- World area;
- Region count;
- Cluster structure;
- Frontier geometry;
- future settlement;
- implementation limits.

### No Claim of Mathematical Necessity

The ratio is not presented as uniquely forced by mathematics.

It is an explicit governed design rule chosen because it is exact, symmetric, transparent, substantial, and easy to preserve permanently.

---

## 9.7 — Consequence for Numerical `H`

This result changes the remaining numerical problem substantially.

Once the production World is governed to fit inside:

```text
P_H = [-H/2,+H/2]²
```

the absolute numerical value of `H` no longer needs to carry the burden of “future-proofing” World size.

Durable headroom is provided by the **relative reserve rule**.

Therefore:

> **The numerical half-span may now be selected primarily as a canonical coordinate constant rather than as a speculative estimate of how physically large The World might someday become.**

This resolves the central ambiguity exposed by Step 8.

---

## 9.8 — Reinterpretation of the Step 8 Candidates

Under the Step 9 capacity basis:

```text
H = 1,000,000
H = 10,000,000
H = 100,000,000
```

all support the same governed relative relationship:

```text
World placement half-span < H/2
Survey half-span           = H
```

They therefore do **not** represent progressively stronger architectural headroom in the sense previously assumed.

They represent different canonical coordinate magnitudes under an otherwise scale-equivalent architecture.

This means candidate comparison in the next step should focus on:

- exact simplicity;
- canonical coordinate usability;
- human readability;
- continuity with prior work where appropriate;
- semantic neutrality;
- permanence;
- avoidance of needless magnitude.

It should no longer reward a candidate merely for being numerically larger.

---

## 9.9 — Lower-Layer / Higher-Layer Boundary

This capacity basis preserves the governing dependency:

```text
FSF
    defines D_H
    defines the governed production placement envelope P_H

Spatial Ground
    defines the World-space instance
    places that instance inside P_H
    does not redefine H
```

Spatial Ground remains free to determine its own internal geography and exact World geometry subject to the lower-layer placement constraint.

The FSF does not derive World geometry from the Domain.

Spatial Ground does not derive Survey capacity from the World.

---

## 9.10 — Step 9 Formal Determination

> **Because the adopted Spatial Ground placement model permits positive uniform scaling, absolute numerical Survey half-span does not by itself measure meaningful World capacity. The governed capacity basis shall therefore be relative rather than absolute.**

Further:

> **For a Survey Domain `D_H = [-H,+H]²`, the governed production placement envelope shall be `P_H = [-H/2,+H/2]²`, and the complete production World-space instance shall lie strictly within `interior(P_H)`.**

Therefore:

> **Durable headroom is established by an exact 1:2 half-span relationship between the production placement envelope and the full Survey Domain, rather than by selecting an arbitrarily enormous H.**

This rule is:

- exact;
- symmetric;
- transparent;
- implementation-independent;
- Parcel-independent;
- World-area-independent;
- compatible with positive uniform scale;
- suitable for permanent governance.

It is a governed design rule.

It is not a mathematical theorem.

---

# Step 10 — Final Numerical `H` Selection

## Step 10 Question

> **Given the adopted relative capacity basis, which exact numerical half-span should become the permanent canonical coordinate constant for the Foundational Survey Fabric?**

Step 9 removed the principal false distinction among the Step 8 candidates.

Because production World-space may be placed by positive uniform scale and translation, and because durable headroom is now governed relationally through:

```text
P_H = [-H/2,+H/2]²
```

larger values of `H` do not provide greater semantic World capacity.

The remaining numerical decision is therefore a canonical coordinate-selection question.

---

## 10.1 — Governing Selection Rule Applied

Step 7 established:

> **Select the smallest clearly durable exact capacity — not the smallest temporarily possible capacity, and not the largest conveniently available capacity.**

Step 9 then established that durability is supplied by the relative placement rule rather than by numerical magnitude.

Therefore the Step 8 candidates are now compared primarily on:

- exactness;
- simplicity;
- auditability;
- semantic neutrality;
- avoidance of needless magnitude;
- continuity with already-developed FSF material where that continuity does not become the justification;
- permanent adoption fitness.

The serious candidates remain:

```text
A — H = 1,000,000 Pang
B — H = 10,000,000 Pang
C — H = 100,000,000 Pang
```

---

## 10.2 — Candidate A Reconsidered

### `H = 1,000,000 Pang`

Canonical Survey Domain:

```text
D = [-1,000,000,+1,000,000] × [-1,000,000,+1,000,000]
```

Canonical production placement envelope:

```text
P = [-500,000,+500,000] × [-500,000,+500,000]
```

Exact derived values:

```text
Survey width        = 2,000,000 Pang
Survey height       = 2,000,000 Pang
Survey area         = 4,000,000,000,000 square Pang

Placement width     = 1,000,000 Pang
Placement height    = 1,000,000 Pang
Placement area      = 1,000,000,000,000 square Pang
```

The complete production World-space instance must lie strictly inside:

```text
interior(P)
```

### Evaluation

**Exactness:** PASS

**Finite permanence:** PASS

**Relative headroom:** PASS under Step 9

**Higher-layer independence:** PASS

**Implementation independence:** PASS

**Auditability:** STRONG PASS

**Simple exact expression:** STRONG PASS

**Semantic neutrality:** PASS, provided the adoption record does not attribute symbolic meaning to the number

**Avoidance of needless magnitude:** STRONGEST OF THE THREE REVIEWED CANDIDATES

**Continuity:** BENEFICIAL SECONDARY FACTOR

The value has appeared previously in FSF work, but the former rationale was rejected.

That history does not make the number correct.

However, once a valid independent capacity basis exists, choosing the same exact value avoids unnecessary churn in already-developed examples, mental models, and implementation experiments without relying on that continuity as the governing reason.

---

## 10.3 — Candidate B Reconsidered

### `H = 10,000,000 Pang`

Under Step 9, this candidate receives the same **relative** headroom as Candidate A:

```text
P_H half-span = H/2
```

Its tenfold larger coordinate magnitude therefore supplies no additional architectural protection.

It remains:

- exact;
- simple;
- auditable;
- semantically neutral.

But it creates a larger canonical coordinate magnitude without providing a corresponding architectural benefit.

Therefore:

> **Candidate B is valid but unnecessary.**

---

## 10.4 — Candidate C Reconsidered

### `H = 100,000,000 Pang`

Candidate C likewise receives no greater relative protection under Step 9.

Its larger magnitude does not increase the governed World-placement reserve as a proportion of Survey space.

It therefore adds:

- larger coordinate values;
- larger derived area values;
- greater notational magnitude;

without adding meaningful architectural capability.

Therefore:

> **Candidate C is valid but purposelessly excessive relative to Candidate A.**

---

## 10.5 — Why the Inquiry Does Not Continue Toward Ever-Smaller Values

Step 9 reveals that many smaller exact positive values could also support the same abstract relative geometry.

For example, mathematics alone would not prohibit:

```text
H = 1
H = 10
H = 1,000
```

if all downstream geometry were uniformly scaled accordingly.

But FMD-04B is not seeking the mathematically smallest positive rational.

It is selecting a permanent canonical coordinate constant for a mature spatial system.

Continuing indefinitely toward smaller exact values would add no architectural knowledge and would merely replace one arbitrary search direction with another.

The Step 8 candidate set was deliberately established as the serious comparison set.

Within that governed set, Candidate A is the smallest exact value, preserves practical coordinate readability, avoids needless magnitude, and benefits from historical continuity without depending upon it.

Accordingly:

> **The inquiry has sufficient grounds to stop searching.**

---

## 10.6 — Final Selection

The recommended and adopted FMD-04B numerical half-span is:

```text
H = 1,000,000 Pang
```

Accordingly, the canonical Survey Domain is:

```text
D = {(x,y) :
     -1,000,000 ≤ x ≤ 1,000,000
     and
     -1,000,000 ≤ y ≤ 1,000,000}
```

or equivalently:

```text
D = [-1,000,000,+1,000,000]²
```

The governed production placement envelope is:

```text
P = [-500,000,+500,000]²
```

with:

```text
World-space ⊂ interior(P) ⊂ interior(D)
```

---

## 10.7 — Status of the Former `±1,000,000 Pang` Candidate

The earlier use of:

```text
±1,000,000 Pang
```

remains historically classified as a **superseded working candidate** because its original adoption basis was insufficient.

Step 10 does **not** retroactively validate that earlier rationale.

Instead, Day #131 establishes a new and independent governed basis:

1. no mathematical invariant uniquely derives `H`;
2. governance may establish one exact foundational constant;
3. durable headroom is governed relationally through the `H/2` production placement envelope;
4. larger coordinate magnitudes provide no additional semantic capacity under the permitted scale model;
5. among the deliberately compared serious candidates, `1,000,000 Pang` is the smallest, simplest, least excessive, and fully auditable permanent constant;
6. historical continuity is a secondary benefit only.

Thus:

> **The numerical value returns; the old justification does not.**

---

## 10.8 — FMD-04B Formal Determination

> **FMD-04B — Numerical Survey Domain Capacity — RESOLVED.**

The authoritative numerical half-span is:

```text
H = 1,000,000 Pang
```

Classification:

```text
GOVERNED FOUNDATIONAL DESIGN CONSTANT
```

not:

```text
MATHEMATICALLY DERIVED INVARIANT
```

The canonical Survey Domain is:

```text
D = [-1,000,000,+1,000,000]²
```

The governed production placement envelope is:

```text
P = [-500,000,+500,000]²
```

The complete production World-space instance shall lie strictly inside `P`.

The Survey Domain remains distinct from World-space.

The outer Survey reserve is not:

- additional World territory;
- an Exterior;
- The Frontier;
- Parcel territory;
- future expansion territory.

It remains Survey-valid reference space.

---

## 10.9 — FMD-04 Standing After Step 10

```text
FMD-04A — Survey Domain Geometry / Boundary
    RESOLVED

FMD-04B — Numerical Survey Domain Capacity
    RESOLVED
```

Therefore the complete FMD-04 candidate decision now establishes:

- one finite Survey Domain;
- one connected Domain;
- one closed Domain;
- one axis-aligned square;
- permanent origin `(0,0)`;
- exact symmetric limits;
- exact half-span `H = 1,000,000 Pang`;
- exact width `2,000,000 Pang`;
- exact height `2,000,000 Pang`;
- exact area `4,000,000,000,000 square Pang`;
- exact boundary inclusion;
- no epsilon;
- no runtime expansion;
- governed production placement envelope `[-500,000,+500,000]²`;
- strict production World containment inside that envelope.

---

# Step 11 — Propagate and Close the FMD-04B Decision

The numerical decision must now be propagated through the affected FSF institutional surfaces.

The next work should update, in governing order:

```text
1. FMD-04 governing decision record
2. Specification 01 — Survey Domain and Ground Model
3. any affected FSF-CJSON Domain examples / serialization statements
4. Conformance Domain-validation cases
5. Reference Vectors 02 — concrete numerical boundary fixtures
6. Reference Vectors 09 — concrete numerical invalid-input fixtures
7. Reference Vectors 12 — concrete numerical pathological Domain-edge stress
8. closure audit standing
9. Spatial Ground production-placement compatibility check
```

After propagation, the remaining institutional gate is:

```text
final governing Specification identity / version succession / canonical adoption
```

Only after those records are reconciled should Spatial Ground Gate B be re-evaluated.

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

**STEP 5E — PARCEL CADASTRE / CARDINALITY TEST — COMPLETE**

**STEP 6 — CONSTITUTIONAL EXTENT / DERIVATION-SOURCE EXHAUSTION — COMPLETE**

**HISTORICAL CORROBORATION REVIEW — COMPLETE**

**STEP 7 — GOVERNED CONSTANT SELECTION CRITERIA — COMPLETE**

**STEP 8 — CANDIDATE VALUE COMPARISON — COMPLETE**

**STEP 9 — GOVERNED CAPACITY BASIS — COMPLETE**

**STEP 10 — FINAL NUMERICAL H SELECTION — COMPLETE**

**H = 1,000,000 PANG — SELECTED**

**FMD-04B — RESOLVED**

**STEP 11 — PROPAGATION / CLOSURE — NEXT**

---

## Governing Inquiry Principle

> **The number may return without the old rationale returning with it.**
