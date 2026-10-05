# Foundational Survey Fabric — FMD-04B Capacity Inquiry Record

**BitPangea · The Atlas · Foundational Survey Fabric**  
**Record Type:** Formal Mathematical Inquiry / Consolidation Record  
**Recommended Repository Path:** `foundational-survey-fabric/review/consolidation/fmd-04b-capacity-inquiry.md`  
**Subject:** FMD-04B — Numerical Survey Domain Capacity  
**Status:** ACTIVE INQUIRY — STEPS 1–4 COMPLETE  
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

The next inquiry must move upward rather than farther downstream.

## Step 5 Question

> **Does any already-adopted BitPangea invariant establish a legitimate numerical scale or capacity relationship from which one exact Survey half-span can be derived?**

Candidate source classes to test include:

- the fixed total of **21,000,000 Parcels**;
- the adopted **Pang** measurement doctrine;
- any adopted equal-area Parcel premise that has reached sufficient authority;
- any permanent World-scale or Parcel-scale commitment already present in the Atlas / Foundation;
- any exact cardinality-to-area relationship already adopted;
- any existing requirement that one Pang correspond to a fixed Parcel dimension or World dimension;
- any other upstream numeric invariant with genuine spatial authority.

The inquiry must reject symbolic numerology.

A number's historical or thematic importance is not a spatial capacity criterion unless an adopted architectural rule connects that number to exact Survey magnitude.

---

## Current Inquiry Standing

**STEP 1 — FMD-04 GOVERNING RECORD — COMPLETE**

**STEP 2 — REQUIREMENTS IV TEST — COMPLETE**

**STEP 3 — SPECIFICATION 01 TEST — COMPLETE**

**STEP 4 — SPATIAL GROUND DEPENDENCY TEST — COMPLETE**

**STEP 5 — UPSTREAM INVARIANT / CAPACITY-CRITERION SEARCH — NEXT**

**NUMERICAL H — NOT SELECTED**

**FMD-04B — OPEN**

---

## Governing Inquiry Principle

> **Do not choose a number and search for a justification. Establish the authoritative capacity criterion first; only then determine whether that criterion yields a number.**
