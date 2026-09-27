# Spatial Ground — Adversarial and Reconstruction Testing Record

**BitPangea · The Atlas · Spatial Ground**  
**Record Type:** Adversarial / Reconstruction Test Record  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** COMPLETE — PASS WITH ONE RESERVED UPSTREAM FSF BLOCKER  
**Primary Implementation:** SG-IMPL-A-PY-1.0  
**Independent Implementation:** SG-IMPL-B-JS-1.0  
**Reference Vector Corpus:** SG-RV-1.0  
**Synthetic Dependency Profile:** FSF-TEST-1.0  
**Canonical Instance Effect:** None. This record does not select or adopt the actual World-space instance.

---

## 1. Purpose

This record tests whether the current Spatial Ground architecture can survive:

- malformed and hostile definition inputs;
- representation traps;
- ordering traps;
- hidden-state variation;
- deep expression nesting;
- invalid FSF dependencies;
- layer-boundary leakage;
- Unicode normalization differences;
- destructive runtime-loss reconstruction;
- independent reimplementation.

The governing rule is:

> **A mature Ground must remain exact when the environment is inconvenient, hostile, incomplete, or rebuilt from preserved records.**

---

## 2. Test Basis

The test basis is:

1. Canonical Membership Predicate Model (CMPM);
2. SG-CJSON 1.0;
3. Closed World-Space Convention;
4. Spatial Ground Conformance;
5. SG-RV-1.0;
6. Implementation A — Python;
7. Implementation B — JavaScript.

Production FSF mathematics were not invented. The synthetic FSF-TEST-1.0 profile was used only to isolate Ground semantics.

---

## 3. Result Summary

| Test Body | Total | Passed | Failed |
|---|---:|---:|---:|
| Implementation A adversarial + reconstruction | 20 | 20 | 0 |
| Implementation B adversarial + reconstruction | 19 | 19 | 0 |
| Cross-implementation conceptual comparisons | 19 | 19 | 0 |

**Overall executable result: PASS**

No new executable disagreement was found.

The existing reserved issue, **SG-RV-024**, remains intentionally unresolved as an upstream FSF boundary/set-class question.

---

## 4. Adversarial Families Executed

### 4.1 Duplicate-Key Attack

Both implementations rejected duplicate JSON object keys.

**Result: PASS**

---

### 4.2 Numeric-Ambiguity Attack

Both implementations rejected JSON numeric values as prohibited by SG-CJSON 1.0.

**Result: PASS**

---

### 4.3 Unknown-Field Injection

A candidate Ground Definition containing an undeclared top-level semantic field was rejected.

**Result: PASS**

---

### 4.4 Unsupported Operator Injection

An attempted `xor` Ground operator was rejected.

**Result: PASS**

---

### 4.5 Invalid-Input Confusion

Invalid Survey input remained `INVALID_INPUT` and was not collapsed into `NON_WORLD`.

**Result: PASS**

---

### 4.6 Ordered-Operation Trap

`difference(A,B)` and `difference(B,A)` remained semantically distinct.

**Result: PASS**

---

### 4.7 Commutative Ordering Trap

`union(A,C)` and `union(C,A)` canonicalized identically.

**Result: PASS**

---

### 4.8 Duplicate-Child Trap

`union(A,A,C)` normalized to the same canonical meaning as `union(A,C)`.

**Result: PASS**

---

### 4.9 Deep-Nesting Test

A fifty-level nested repeated union normalized and evaluated correctly.

**Result: PASS**

This demonstrates finite execution for the tested depth. It is not a claim that operational resource ceilings are unnecessary.

---

### 4.10 Hidden-State Repeatability

Repeated identical membership evaluation remained identical.

**Result: PASS**

---

### 4.11 FSF Equivalence Trap

FSF-equivalent leaves `A` and `A_ALIAS` produced identical Ground membership.

**Result: PASS**

---

### 4.12 Unicode Normalization Trap

Canonically equivalent NFC/NFD strings normalized to identical canonical artifact bytes.

**Result: PASS**

---

### 4.13 Unresolved FSF Leaf

An unknown FSF leaf was rejected rather than guessed.

**Result: PASS**

---

### 4.14 One-Child Commutative Expression

A one-child `union` was rejected under the selected SG-CJSON grammar.

**Result: PASS**

---

### 4.15 Layer-Leak Injection

An attempted higher-layer `owner` field inside an FSF leaf was rejected structurally.

**Result: PASS**

---

### 4.16 Closed-Limit Behavior

Synthetic FSF test points declared on the outer limit remained `WORLD`.

**Result: PASS**

---

### 4.17 Reserved Blocker Preservation

Both implementations preserved SG-RV-024 as unresolved rather than inventing an answer.

**Result: PASS**

---

## 5. Reconstruction Testing

### 5.1 Minimal Normative Reconstruction

Implementation A reconstructed the expected full synthetic membership map using only:

- implementation semantics;
- SG-RV-1.0;
- FSF-TEST-1.0.

Implementation B independently reconstructed the same map.

Expected and reproduced result:

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

**Result: PASS**

---

### 5.2 Canonical Serialization Round-Trip

A canonicalized Ground Definition was serialized, parsed again, and re-canonicalized.

Canonical bytes remained identical.

Both implementations passed the applicable round-trip test.

**Result: PASS**

---

### 5.3 Fresh-Process Reconstruction

Implementation A was launched in a fresh subprocess and reconstructed membership from preserved code and corpus inputs without relying on prior in-memory state.

**Result: PASS**

This specifically tests loss of original runtime state.

---

## 6. Independent Reconstruction Judgment

The two implementations are:

- written in different languages;
- separately parsed;
- separately canonicalized;
- separately normalized;
- separately evaluated.

Across the nineteen directly comparable adversarial/reconstruction test concepts:

```text
19 / 19 matched
```

No semantic divergence was observed.

**INDEPENDENT RECONSTRUCTION — PASS**

---

## 7. What the Testing Discovered

The test campaign did **not** expose a new Ground-layer semantic contradiction.

It confirmed one previously discovered issue:

> **SG-RV-024 remains a genuine boundary/set-class dependency that must not be resolved inside Ground by implementation convention.**

The conflict arises when a set operation can produce a non-closed final set while the global Closed World-Space rule requires all final boundary points to belong to World-space.

This means one of the following must eventually be made explicit before production adoption:

1. FSF canonical spatial-set classes used by Ground are constrained so canonical World-space is closed;
2. Ground expression operators are constrained to preserve the required closed-set property;
3. FSF supplies an exact closure-compatible difference operation suitable for Ground;
4. the limit convention is reformulated in a mathematically compatible way.

Reference Vectors and implementations SHALL NOT choose among these.

That is a Specification / FSF dependency decision.

---

## 8. Reconstruction Principle Confirmed

The tests support the architecture:

```text
Specification
+ canonical Ground Definition
+ declared FSF semantics
= reconstructable Ground meaning
```

The following were not required to reproduce the tested truth:

- original database;
- cache;
- historical event log;
- original process state;
- original programming language;
- original implementation.

This is the intended permanence model.

---

## 9. Adversarial Judgment

**ADVERSARIAL TESTING — PASS**

Subject to the single already-reserved upstream FSF issue, the current Ground model resisted all tested:

- malformed input attacks;
- serialization ambiguity;
- operator-order ambiguity;
- normalization ambiguity;
- hidden-state drift;
- layer leakage;
- invalid dependency use;
- reconstruction loss.

---

## 10. Reconstruction Judgment

**RECONSTRUCTION TESTING — PASS**

Ground behavior was reconstructed independently and from fresh runtime state with no observed semantic drift.

---

## 11. Remaining Limitation

These tests use **FSF-TEST-1.0**, not final production FSF mathematics.

Therefore they prove:

> the Ground architecture and representation are executable and independently reconstructable under deterministic inherited Survey semantics.

They do not yet prove:

> the final actual BitPangea World-space instance against final production FSF geometry.

That proof belongs later.

---

## 12. Disposition

**ADVERSARIAL TESTING — COMPLETE · PASS**

**RECONSTRUCTION TESTING — COMPLETE · PASS**

**INDEPENDENT RECONSTRUCTION — PASS**

**NEW GROUND-LAYER DEFECTS — NONE FOUND**

**RESERVED UPSTREAM ISSUE — SG-RV-024 REMAINS OPEN**

**NEXT — STEWARDSHIP / SUCCESSION INSTRUMENTS**

**CANONICAL WORLD-SPACE INSTANCE — NOT YET SELECTED**

**GATE B — NOT YET OPEN**

---

## 13. Governing Closing Statement

> **Ground must survive the loss of its implementation without losing the identity of place.**

> **The architecture passed that test at the current formal layer.**
