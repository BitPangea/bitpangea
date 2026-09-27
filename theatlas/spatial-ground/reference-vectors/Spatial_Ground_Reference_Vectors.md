# Spatial Ground Reference Vectors

**BitPangea · The Atlas · Spatial Ground**  
**Document Type:** Reference Vector Specification  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** COMPLETE — INITIAL CANONICAL GROUND VECTOR CORPUS ESTABLISHED  
**Corpus Version:** SG-RV-1.0  
**Formal Model:** Canonical Membership Predicate Model (CMPM)  
**Canonical Representation:** SG-CJSON 1.0  
**Limit Convention:** Closed World-Space  
**Conformance Basis:** Spatial Ground Conformance  
**Production World-Space Effect:** None. These vectors do not select or imply the actual BitPangea World-space instance.

---

## 0. Purpose

Spatial Ground Reference Vectors provide exact fixtures against which every conforming implementation can be tested.

The governing question is:

> **Given this exact Ground input and this exact declared FSF test meaning, what exact answer must every conforming implementation produce?**

Reference Vectors do not define Spatial Ground semantics.

They instantiate and test semantics already defined by:

1. the adopted Spatial Ground Requirements;
2. the Spatial Ground Specification;
3. SG-CJSON 1.0;
4. the Closed World-Space Convention;
5. Spatial Ground Conformance.

The governing rule is:

> **Specification defines the rule. Reference Vectors prove the expected result.**

---

# 1. Why a Synthetic FSF Test Profile Is Used

Spatial Ground depends upon the Foundational Survey Fabric for exact spatial meaning.

The current Ground test corpus must therefore avoid inventing unreconciled production FSF mathematics.

For that reason, SG-RV-1.0 uses a deliberately synthetic test-only dependency:

> **FSF-TEST-1.0**

FSF-TEST-1.0 is not a BitPangea Survey specification.

It is not production spatial truth.

It exists only to provide deterministic abstract set-membership, equivalence, and limit fixtures so that Spatial Ground's own semantics can be tested independently of unresolved production FSF details.

No FSF-TEST identifier may appear in a canonical BitPangea World-space instance.

---

# 2. FSF-TEST-1.0 Fixture Universe

The synthetic valid Survey-location universe is:

```text
S_TEST = {p0, p1, p2, p3, p4, p5, p6, p7}
```

Invalid inputs include:

```text
bad
unknown
```

The fixture defines four canonical FSF spatial expressions:

```text
A = {p0, p1, p2, p3}
B = {p2, p3, p4}
C = {p5, p6}
H = {p1}
```

It also defines an equivalent alias:

```text
A_ALIAS ≡FSF A
```

and a non-equivalent visually similar fixture:

```text
A_NEAR = {p0, p1, p2}
```

The test topology declares:

```text
boundary(A) = {p0, p3}
boundary(B) = {p2, p4}
boundary(C) = {p5, p6}
```

For the expression:

```text
difference(A,H)
```

the test topology declares:

```text
boundary(difference(A,H)) = {p0, p1, p3}
```

Under the Closed World-Space Convention, every valid point on those declared Ground limits is WORLD if it remains in the induced World-space set.

---

# 3. Test Ground Definitions

## 3.1 D-A

```json
{
  "type": "bitpangea.spatial-ground.definition",
  "format": "SG-CJSON-1.0",
  "model": "CMPM-1.0",
  "specification": "SG-SPEC-1.0",
  "fsf": {
    "specification": "FSF-TEST-1.0",
    "lineage": "FSF-TEST"
  },
  "limit_convention": "closed-world-space",
  "expression": {
    "op": "fsf",
    "value": "A"
  }
}
```

Induced World-space:

```text
W_DA = {p0,p1,p2,p3}
```

---

## 3.2 D-UNION

```text
union(A,C)
```

Induced World-space:

```text
{p0,p1,p2,p3,p5,p6}
```

---

## 3.3 D-INTERSECTION

```text
intersection(A,B)
```

Induced World-space:

```text
{p2,p3}
```

---

## 3.4 D-DIFFERENCE

```text
difference(A,H)
```

Induced World-space:

```text
{p0,p2,p3}
```

The exact hole-limit test point `p1` is NON_WORLD because it is the subtracted singleton itself. The Closed World-Space Convention does not resurrect a point removed by the defining expression. The convention governs points on the boundary **of the final induced set**. Under FSF-TEST-1.0, `p1` is declared part of the boundary of the final induced set but not a member of that set; this fixture intentionally exposes a representational tension and is classified as **SPECIFICATION REVIEW REQUIRED** rather than silently forcing an answer.

Accordingly, SG-RV-1.0 separates:
- executable normative vectors whose outcomes are fully determined; and
- one reserved adversarial vector demonstrating where final FSF topological semantics must be reconciled before production adoption.

---

# 4. Vector Status Classes

Each vector has one of four statuses:

```text
NORMATIVE
NEGATIVE
ADVERSARIAL
BLOCKED_BY_FSF
```

### NORMATIVE

A valid input with one exact expected result.

### NEGATIVE

An invalid artifact or input with one exact expected failure class.

### ADVERSARIAL

A deliberately difficult case whose exact result is nevertheless determined.

### BLOCKED_BY_FSF

A case that must not be given a fabricated production answer until the required FSF semantics are adopted.

---

# 5. Reference Vector Families

SG-RV-1.0 contains the following families:

1. SG-CJSON structure
2. Canonicalization
3. FSF leaf validity
4. Basic membership
5. Boolean composition
6. Exact limit behavior
7. Survey equivalence
8. Invalid inputs
9. Hidden-state repeatability
10. Reconstruction
11. Independent implementation
12. Reserved FSF dependency

---

# 6. Vector Inventory

## SG-RV-001 — Basic WORLD Membership

**Definition:** D-A  
**Input:** `p1`  
**Expected:** `WORLD`  
**Status:** NORMATIVE

Reason: `p1 ∈ A`.

---

## SG-RV-002 — Basic NON_WORLD Membership

**Definition:** D-A  
**Input:** `p5`  
**Expected:** `NON_WORLD`  
**Status:** NORMATIVE

Reason: `p5 ∉ A`.

---

## SG-RV-003 — Exact Outer Limit Membership

**Definition:** D-A  
**Input:** `p0`  
**FSF-TEST relation:** `p0 ∈ boundary(A)`  
**Expected:** `WORLD`  
**Status:** NORMATIVE

This directly tests Closed World-Space.

---

## SG-RV-004 — Second Exact Outer Limit Membership

**Definition:** D-A  
**Input:** `p3`  
**FSF-TEST relation:** `p3 ∈ boundary(A)`  
**Expected:** `WORLD`  
**Status:** NORMATIVE

---

## SG-RV-005 — Union Positive

**Definition:** `union(A,C)`  
**Input:** `p6`  
**Expected:** `WORLD`  
**Status:** NORMATIVE

---

## SG-RV-006 — Union Negative

**Definition:** `union(A,C)`  
**Input:** `p4`  
**Expected:** `NON_WORLD`  
**Status:** NORMATIVE

---

## SG-RV-007 — Intersection Positive

**Definition:** `intersection(A,B)`  
**Input:** `p2`  
**Expected:** `WORLD`  
**Status:** NORMATIVE

---

## SG-RV-008 — Intersection Negative

**Definition:** `intersection(A,B)`  
**Input:** `p1`  
**Expected:** `NON_WORLD`  
**Status:** NORMATIVE

---

## SG-RV-009 — Difference Positive

**Definition:** `difference(A,H)`  
**Input:** `p2`  
**Expected:** `WORLD`  
**Status:** NORMATIVE

---

## SG-RV-010 — Difference Removed Point

**Definition:** `difference(A,H)`  
**Input:** `p1`  
**Expected:** `NON_WORLD`  
**Status:** NORMATIVE

This tests expression semantics only.

A separate boundary-classification question for such a removed singleton is reserved as SG-RV-024.

---

## SG-RV-011 — Equivalent FSF Reference

**Definitions:** one uses `A`, one uses `A_ALIAS`  
**Input:** `p2`  
**Expected:** both `WORLD`  
**Status:** NORMATIVE

The two leaves are FSF-equivalent and SHALL produce identical Ground membership.

---

## SG-RV-012 — Non-Equivalent FSF Reference

**Definitions:** one uses `A`, one uses `A_NEAR`  
**Input:** `p3`  
**Expected:** `WORLD` under A; `NON_WORLD` under A_NEAR  
**Status:** NORMATIVE

Visual or descriptive similarity does not create Survey identity.

---

## SG-RV-013 — Invalid Survey Input

**Definition:** D-A  
**Input:** `bad`  
**Expected:** `INVALID_INPUT`  
**Status:** NEGATIVE

Invalid input is not NON_WORLD.

---

## SG-RV-014 — Unknown Survey Input

**Definition:** D-A  
**Input:** `unknown`  
**Expected:** `INVALID_INPUT`  
**Status:** NEGATIVE

---

## SG-RV-015 — Duplicate JSON Key

**Artifact condition:** duplicate `"model"` key  
**Expected:** `INVALID_DEFINITION`  
**Status:** NEGATIVE

---

## SG-RV-016 — JSON Number Rejection

**Artifact condition:** a numeric field value is introduced  
**Expected:** `INVALID_DEFINITION`  
**Status:** NEGATIVE

---

## SG-RV-017 — Unsupported Operator

**Expression:**

```json
{"op":"xor","args":[]}
```

**Expected:** `INVALID_DEFINITION`  
**Status:** NEGATIVE

---

## SG-RV-018 — Union Child Ordering Canonicalization

Definitions:

```text
union(A,C)
union(C,A)
```

**Expected semantic result:** equivalent  
**Expected canonicalized structure:** identical  
**Status:** NORMATIVE

---

## SG-RV-019 — Intersection Child Ordering Canonicalization

Definitions:

```text
intersection(A,B)
intersection(B,A)
```

**Expected semantic result:** equivalent  
**Expected canonicalized structure:** identical  
**Status:** NORMATIVE

---

## SG-RV-020 — Difference Ordering Is Semantic

Definitions:

```text
difference(A,B)
difference(B,A)
```

Input:

```text
p1
```

Expected:

```text
difference(A,B) → WORLD
difference(B,A) → NON_WORLD
```

**Status:** NORMATIVE

---

## SG-RV-021 — Duplicate Child Normalization

Definitions:

```text
union(A,A,C)
union(A,C)
```

**Expected:** identical normalized structure and identical membership  
**Status:** NORMATIVE

---

## SG-RV-022 — Hidden-State Repeatability

**Definition:** D-A  
**Input:** `p2`

Run under:
- clean cache;
- warm cache;
- process restart;
- alternate locale;
- alternate timezone.

**Expected every run:** `WORLD`  
**Status:** ADVERSARIAL

---

## SG-RV-023 — Reconstruction

Given only:

```text
Spatial Ground Specification
SG-CJSON definition D-A
FSF-TEST-1.0 fixture semantics
SG-RV-1.0 corpus
```

a clean implementation must reproduce:

```text
p0 WORLD
p1 WORLD
p2 WORLD
p3 WORLD
p4 NON_WORLD
p5 NON_WORLD
p6 NON_WORLD
p7 NON_WORLD
```

**Status:** ADVERSARIAL

---

## SG-RV-024 — Hole-Boundary Semantics Under Non-Regular Set Difference

Fixture:

```text
difference(A,H)
```

with:

```text
H = {p1}
boundary(difference(A,H)) includes p1
```

Expression membership says:

```text
p1 = NON_WORLD
```

A naive reading of the global rule:

```text
∂W_D ⊆ W_D
```

would require:

```text
p1 = WORLD
```

These cannot both hold in this synthetic topology.

**Expected:** `BLOCKED_BY_FSF`  
**Status:** BLOCKED_BY_FSF

This vector is intentionally retained.

It proves that the production Spatial Ground Specification must define the Closed World-Space convention only over FSF spatial-set classes whose boundary semantics are compatible with closed-set World-space, or otherwise constrain the allowed FSF leaves / set operations.

The vector SHALL NOT be "fixed" by choosing an answer inside Reference Vectors.

That would improperly make Reference Vectors an alternate Specification.

---

# 7. Canonicalization Fixtures

The machine-readable corpus includes raw and expected-normalized forms for applicable SG-CJSON vectors.

For commutative operators:

- nested same operators flatten;
- exact duplicates are removed;
- children are sorted canonically.

For `difference`:

- order is preserved.

---

# 8. Required Cross-Implementation Result

For every NORMATIVE or ADVERSARIAL vector with an executable expected result:

```text
Result_A(vector) = Result_B(vector)
```

for all conforming implementations A and B.

Any disagreement is:

```text
NONCONFORMING_RESULT
```

unless review establishes a defect in the Specification or the vector itself.

---

# 9. Vector Governance

A Reference Vector SHALL contain:

- vector ID;
- corpus version;
- family;
- status;
- normative inputs;
- expected result;
- governing Specification rule;
- dependency profile;
- explanatory note where needed.

A vector SHALL NOT silently change after publication.

A corrected vector SHALL receive governed version history.

---

# 10. What SG-RV-1.0 Does Not Yet Contain

SG-RV-1.0 does not contain:

- production BitPangea Survey coordinates;
- actual World-space geometry;
- actual canonical World limit coordinates;
- actual Parcel references;
- production FSF refinement examples;
- actual World-space connectedness proof fixtures.

Those require the production FSF mathematics and/or the later actual World-space instance.

Their absence is deliberate.

---

# 11. Maturity Consequence

SG-RV-1.0 is sufficient to:

- build a first Spatial Ground implementation;
- build an independent implementation;
- test SG-CJSON structure;
- test core CMPM semantics;
- test Closed World-Space on compatible boundary cases;
- test Boolean expression behavior;
- test invalidity separation;
- test independent reproduction;
- expose one unresolved FSF boundary/set-class dependency before production adoption.

It is not sufficient by itself to adopt the final BitPangea World-space instance.

---

# 12. Standing

**SPATIAL GROUND REFERENCE VECTORS — CREATED**

**CORPUS — SG-RV-1.0**

**GROUND-LAYER EXECUTABLE VECTORS — ESTABLISHED**

**SYNTHETIC FSF TEST PROFILE — FSF-TEST-1.0**

**PRODUCTION FSF GEOMETRY — NOT INVENTED**

**UNRESOLVED BOUNDARY/SET-CLASS CASE — EXPOSED AS SG-RV-024**

**NEXT — BUILD FIRST IMPLEMENTATION**

**GATE B — NOT YET OPEN**

---

# 13. Governing Closing Statements

> **Given the same canonical inputs, every conforming implementation must produce the same answer.**

> **A test vector may expose a missing rule. It may not invent the missing rule.**

> **The purpose of a hard vector is not to make the architecture look complete. It is to discover exactly where it is not.**
