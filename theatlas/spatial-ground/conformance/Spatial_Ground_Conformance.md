# Spatial Ground Conformance

**BitPangea · The Atlas · Spatial Ground**  
**Document Type:** Conformance Specification  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** DRAFT FOR GATE B / MATURITY REVIEW  
**Formal Model:** Canonical Membership Predicate Model (CMPM)  
**Canonical Representation:** SG-CJSON 1.0  
**Limit Convention:** Closed World-Space  
**Normative Dependencies:** Adopted Spatial Ground Requirements; Spatial Ground Specification; FSF Dependency Declaration; Canon-Form Policy  
**Canonical Instance Effect:** None. Conformance does not create or alter World-space.

---

## 0. Purpose

Spatial Ground Conformance defines how an implementation, validator, canonical Ground Definition, or derived artifact proves that it follows the adopted Spatial Ground Specification.

The governing question is:

> **How does an implementation prove that it produces the same exact Ground truth required by the Specification?**

Conformance verifies.

Conformance does not legislate.

Conformance SHALL NOT:

- invent new Ground semantics;
- redefine the Spatial Ground Specification;
- repair ambiguity through test precedent;
- create canonical World-space;
- override the canonical Ground Definition;
- redefine Foundational Survey Fabric mathematics.

The governing rule is:

> **Specification defines truth. Conformance proves implementation fidelity to that truth.**

---

# 1. Conformance Classes

Spatial Ground defines four conformance classes.

## 1.1 SG-C1 — Definition Validator

A conforming SG-C1 implementation validates whether a candidate Ground Definition artifact:

- is structurally valid SG-CJSON 1.0;
- uses only permitted constructs;
- declares valid dependencies;
- satisfies canonicalization rules;
- contains no prohibited Ground semantics.

SG-C1 does not need to evaluate membership.

---

## 1.2 SG-C2 — Membership Evaluator

A conforming SG-C2 implementation SHALL:

- satisfy SG-C1;
- validate canonical Survey input through FSF;
- evaluate `M_D(x)`;
- return exactly `WORLD` or `NON_WORLD` for valid input;
- distinguish invalid input from non-World membership;
- terminate deterministically.

---

## 1.3 SG-C3 — Full Semantic Validator

A conforming SG-C3 implementation SHALL:

- satisfy SG-C1 and SG-C2;
- test semantic equivalence where required;
- test refinement closure where applicable;
- test canonical-limit behavior;
- verify declared FSF dependency compatibility;
- test constitutional instance constraints where an actual candidate instance is supplied.

---

## 1.4 SG-C4 — Independent Reimplementation

A conforming SG-C4 implementation SHALL:

- be developed independently of the primary implementation;
- satisfy SG-C1 through SG-C3;
- reproduce the same canonical outputs from the same normative inputs;
- avoid shared hidden runtime state, copied evaluator logic, or implementation-specific shortcuts.

SG-C4 exists to test the Specification itself.

---

# 2. Mandatory Conformance Core

Every implementation claiming Spatial Ground conformance SHALL satisfy the following mandatory core.

## 2.1 Structural Validity

The implementation SHALL correctly accept valid SG-CJSON 1.0 artifacts and reject invalid ones.

## 2.2 Deterministic Canonicalization

The implementation SHALL canonicalize equivalent permitted SG-CJSON structures to the exact canonical byte form required by the Specification.

## 2.3 Exact Membership

For every valid canonical Survey input:

```text
M_D(x) ∈ {WORLD, NON_WORLD}
```

and no other canonical membership value.

## 2.4 Invalidity Separation

Invalid Survey input SHALL NOT be returned as `NON_WORLD`.

Invalid Ground Definitions SHALL NOT be evaluated as if valid.

## 2.5 Exact Limit Membership

If FSF determines that a valid Survey location lies exactly on the canonical Ground limit:

```text
M_D(x) = WORLD
```

## 2.6 Hidden-State Independence

Results SHALL NOT vary with:

- cache state;
- query history;
- clock;
- locale;
- network availability;
- thread scheduling;
- user identity;
- ownership state;
- deployment environment.

## 2.7 Repeatability

Repeated validation of unchanged normative input SHALL produce the same result.

## 2.8 Non-Mutation

Validation and evaluation SHALL NOT alter the canonical Ground Definition being tested.

---

# 3. Canonical Result Equivalence

## 3.1 Membership Equivalence

Two conforming implementations evaluating the same canonical input under the same valid Ground Definition SHALL return identical membership.

For implementations `A` and `B`:

```text
M_D^A(x) = M_D^B(x)
```

for every Reference Vector input `x`.

---

## 3.2 Canonicalization Equivalence

Two conforming implementations canonicalizing the same valid SG-CJSON artifact SHALL emit identical canonical UTF-8 bytes.

---

## 3.3 Artifact Identity vs Semantic Equivalence

Conformance SHALL distinguish:

- byte identity;
- normalized structural identity;
- semantic equivalence.

Byte identity proves artifact identity.

Semantic equivalence concerns induced membership truth.

The two SHALL NOT be conflated.

---

# 4. Definition Validation

A conforming SG-C1 or higher validator SHALL reject a candidate Ground Definition if any of the following applies:

- malformed JSON;
- duplicate object member;
- JSON numeric value present;
- unknown semantic field;
- unsupported operator;
- malformed operator structure;
- invalid top-level `type`;
- invalid `format`;
- unsupported `model`;
- unsupported `limit_convention`;
- missing FSF dependency declaration;
- invalid or unresolved FSF leaf;
- prohibited higher-layer semantics;
- dependency on runtime or mutable state;
- nondeterministic construct;
- invalid canonicalization;
- cyclic external dependency where external references are permitted;
- failure to terminate under validation.

---

# 5. SG-CJSON Canonicalization Tests

Conformance SHALL test at minimum:

1. duplicate-key rejection;
2. JSON-number rejection;
3. NFC string normalization;
4. lexicographic object-key ordering;
5. whitespace elimination;
6. UTF-8 serialization without BOM;
7. commutative child sorting for `union`;
8. commutative child sorting for `intersection`;
9. duplicate child elimination for commutative operators;
10. nested same-operator flattening;
11. ordered preservation for `difference`;
12. stable canonical bytes across implementations.

---

# 6. Operator Conformance

## 6.1 `fsf`

A conforming implementation SHALL:

- accept only canonical FSF spatial expressions;
- delegate FSF spatial meaning to the governing FSF implementation or specification;
- reject unresolved or invalid FSF leaves;
- not reinterpret FSF geometry.

---

## 6.2 `union`

For valid expressions `A1...An`:

```text
Eval(union(A1...An),x)
=
Eval(A1,x) OR ... OR Eval(An,x)
```

Conformance SHALL test:

- associativity of normalized structure where semantically applicable;
- commutative canonical ordering;
- duplicate elimination;
- identical result across child ordering.

---

## 6.3 `intersection`

For valid expressions `A1...An`:

```text
Eval(intersection(A1...An),x)
=
Eval(A1,x) AND ... AND Eval(An,x)
```

Conformance SHALL test:

- commutative canonical ordering;
- duplicate elimination;
- nested flattening;
- identical result across child ordering.

---

## 6.4 `difference`

For valid expressions `A` and `B`:

```text
Eval(difference(A,B),x)
=
Eval(A,x) AND NOT Eval(B,x)
```

Conformance SHALL confirm that operand order is semantic.

The validator SHALL NOT reorder `base` and `subtract`.

---

# 7. Membership Test Families

Every mature conformance suite SHALL contain the following test families.

## 7.1 Interior World Cases

Valid Survey locations unambiguously inside World-space.

Expected result:

```text
WORLD
```

---

## 7.2 Exterior Non-World Cases

Valid Survey locations unambiguously outside World-space.

Expected result:

```text
NON_WORLD
```

---

## 7.3 Exact Limit Cases

Valid Survey locations exactly on the canonical Ground limit.

Expected result:

```text
WORLD
```

---

## 7.4 Hole Interior Cases

Where the candidate instance contains a hole:

- locations strictly inside the hole → `NON_WORLD`;
- locations exactly on the hole boundary → `WORLD`.

---

## 7.5 Equivalent Survey Reference Cases

Different valid FSF expressions denoting the same canonical Survey location SHALL produce identical membership.

---

## 7.6 Non-Equivalent Survey Reference Cases

Visually similar or numerically close but semantically different FSF locations SHALL remain distinct where FSF says they are distinct.

---

## 7.7 Invalid Survey Input Cases

Malformed or invalid Survey expressions SHALL return:

```text
INVALID_INPUT
```

and SHALL NOT be treated as `NON_WORLD`.

---

# 8. Representation Trap Tests

Conformance SHALL include cases where semantic meaning remains unchanged but representation differs.

Examples include:

- different whitespace;
- different member ordering before canonicalization;
- Unicode equivalent strings before normalization;
- alternate commutative child order;
- duplicate commutative child entries;
- alternate derived storage layout;
- alternate implementation language.

Expected outcome:

> identical canonical semantics.

---

# 9. Transformation Trap Tests

Conformance SHALL test transformed objects that are visually similar but spatially different.

Examples may include:

- translation;
- rotation;
- reflection;
- scaling;
- alternate origin-relative presentations.

If FSF says the transformed location differs canonically, Ground membership SHALL follow that actual canonical location.

Visual resemblance SHALL NOT imply identity.

---

# 10. Hidden-State Trap Tests

The conformance harness SHALL repeat selected membership evaluations under different:

- cache states;
- process restarts;
- machine architectures;
- locale settings;
- time zones;
- thread counts;
- network conditions.

Canonical membership results SHALL remain identical.

---

# 11. Refinement Tests

Conformance SHALL test that supported compatible FSF refinement:

- permits finer evaluation;
- does not create new Ground semantics;
- does not move the canonical limit;
- does not convert an established valid membership result merely because greater precision becomes available.

Where exact coarse/fine semantics remain unresolved upstream, tests SHALL NOT invent them.

Such tests SHALL be marked:

```text
BLOCKED_BY_FSF
```

rather than silently defining FSF behavior.

---

# 12. Limit Convention Tests

The Closed World-Space Convention SHALL be tested explicitly.

For any valid FSF location `x` such that:

```text
x ∈ ∂W_D
```

expected membership is:

```text
WORLD
```

This applies to:

- outer World limit;
- internal hole boundaries;
- exact contact points;
- exact edge segments;
- exact boundary intersections.

No geometry-library default may override this requirement.

---

# 13. Constitutional Instance Tests

Where a candidate canonical instance is being evaluated, SG-C3 conformance SHALL test:

## 13.1 Singularity

Exactly one candidate primary Ground Definition is identified for adoption.

## 13.2 Non-Emptiness

```text
W_D ≠ ∅
```

## 13.3 Connectedness

The candidate `W_D` is connected under governing FSF topology.

## 13.4 Refinement-Stable Connectedness

Supported compatible refinement does not alter the connectedness result.

## 13.5 Extent Conformity

The candidate is accompanied by the required institutional determination that it conforms to constitutional Extent.

Conformance may verify the prescribed evidence.

Conformance SHALL NOT independently redefine constitutional Extent.

---

# 14. Error Classes

A conforming implementation SHALL distinguish at minimum:

```text
VALID
INVALID_DEFINITION
INVALID_INPUT
DEPENDENCY_ERROR
UNSUPPORTED_FSF_SEMANTIC
NONCONFORMING_RESULT
IMPLEMENTATION_ERROR
BLOCKED_BY_FSF
```

Where a membership result is successfully produced, the membership value remains only:

```text
WORLD
NON_WORLD
```

---

# 15. Failure Conditions

A claimed conforming implementation fails conformance if it:

- produces a third membership state;
- returns different answers for the same canonical input;
- treats invalid Survey input as non-World-space;
- gives NON_WORLD to an exact canonical-limit location;
- depends on hidden mutable state;
- silently tolerates malformed Ground Definitions;
- accepts prohibited higher-layer semantics;
- redefines FSF truth;
- uses tolerance where exactness is required;
- produces canonical bytes differing from the required canonicalization;
- cannot reproduce required Reference Vector outputs;
- disagrees with an independent conforming implementation without a Specification defect being demonstrated.

---

# 16. Conformance Report

Every formal conformance run SHALL produce a report containing at minimum:

- implementation name;
- implementation version;
- conformance class claimed;
- Spatial Ground Specification version;
- SG-CJSON version;
- governing FSF specification / lineage;
- test-suite version;
- Reference Vector corpus version;
- test date;
- total tests;
- passed;
- failed;
- blocked;
- skipped;
- failure details;
- canonical environment notes;
- implementation declaration;
- final status.

---

# 17. Conformance Status Values

The final conformance status SHALL be one of:

```text
CONFORMING
NONCONFORMING
CONDITIONALLY_CONFORMING
BLOCKED
```

### CONFORMING

All mandatory tests required for the claimed class pass.

### NONCONFORMING

One or more mandatory requirements fail.

### CONDITIONALLY_CONFORMING

All executable mandatory tests pass, but one or more formally reserved upstream FSF dependencies prevent full maturity determination.

### BLOCKED

The implementation cannot be meaningfully tested because a required normative dependency is absent or unresolved.

---

# 18. Independent Implementation Requirement

Before Spatial Ground is considered mature enough for final canonical instance adoption, at least one SG-C4 independent implementation SHALL reproduce the primary implementation's required results.

Independent implementation is a Specification test.

If two independently built implementations disagree, the disagreement SHALL trigger review of:

1. implementation correctness;
2. Reference Vector correctness;
3. Specification clarity;
4. FSF dependency clarity.

Disagreement SHALL NOT be accepted as canonical plurality.

---

# 19. Independence Criteria

An implementation qualifies as independent only if it is not merely:

- a wrapper around the primary evaluator;
- a translation of the same source code;
- a shared binary library invocation;
- a copy of the same parser/evaluator logic;
- a client of the primary implementation's API;
- dependent on the same hidden state.

Shared public normative documents are expected.

Shared implementation logic is not.

---

# 20. Conformance and Reference Vectors

Reference Vectors provide exact fixtures.

Conformance defines the procedures and conditions for passing them.

The relationship is:

```text
Specification → Conformance → Reference Vectors
```

Reference Vectors SHALL NOT create semantics absent from the Specification.

If a vector exposes ambiguity, the Specification SHALL be repaired before the vector is treated as canonical.

---

# 21. Minimal Conformance Vector Families

The future canonical Reference Vector corpus SHALL include at minimum:

1. SG-CJSON valid structure;
2. SG-CJSON invalid structure;
3. canonicalization equality;
4. canonicalization inequality;
5. FSF leaf validity;
6. WORLD interior;
7. NON_WORLD exterior;
8. exact outer limit;
9. exact hole limit;
10. invalid Survey input;
11. equivalent Survey reference;
12. non-equivalent Survey reference;
13. union;
14. intersection;
15. difference;
16. commutative reordering;
17. duplicate-child normalization;
18. difference ordering;
19. hidden-state repeatability;
20. reconstruction;
21. independent implementation agreement;
22. connectedness;
23. refinement behavior;
24. pathological edge conditions.

---

# 22. Reconstruction Test

A mature conformance suite SHALL include at least one reconstruction test in which an implementation is given only:

```text
Spatial Ground Specification
+ canonical Ground Definition
+ declared governing FSF semantics
+ canonical Reference Vectors
```

The implementation SHALL reproduce the expected canonical Ground behavior without access to:

- the original runtime;
- the original database;
- original caches;
- original deployment environment;
- historical event replay.

---

# 23. Adversarial Test Families

Conformance SHALL include adversarial cases designed to expose:

- ambiguous parsing;
- duplicate key exploitation;
- Unicode normalization disagreement;
- ordering disagreement;
- malicious unsupported fields;
- expression blow-up;
- deeply nested expressions;
- redundant expressions;
- exact boundary contact;
- hole-boundary behavior;
- FSF dependency mismatch;
- invalid lineage claims;
- hidden-state leakage;
- nontermination attempts;
- tolerance substitution;
- representation-dependent result drift.

---

# 24. Performance Is Not Canonical Truth

Performance MAY be measured.

Performance SHALL NOT alter canonical membership semantics.

A slow conforming implementation may still be conforming.

A fast implementation returning a wrong canonical result is nonconforming.

Resource limits may be declared operationally, but they SHALL NOT silently redefine valid canonical meaning.

---

# 25. Security and Integrity

Conformance MAY include:

- artifact hash checks;
- signature checks;
- manifest validation;
- supply-chain integrity checks.

These support evidence and preservation.

They do not replace semantic validation.

A cryptographically intact wrong artifact remains wrong.

---

# 26. Conformance Declaration

A conforming implementation SHOULD publish a declaration stating:

```text
Implementation:
Version:
Claimed class:
Spatial Ground Specification:
SG-CJSON:
FSF dependency:
Reference Vector corpus:
Conformance report:
Status:
```

The declaration SHALL point to preserved evidence.

A declaration without test evidence SHALL NOT constitute proof of conformance.

---

# 27. No Self-Certification Privilege

An implementation MAY run its own conformance suite.

Self-testing does not grant special canonical authority.

Independent reproduction remains required for mature architecture.

---

# 28. Gate-B and Maturity Consequences

This Conformance framework completes the architectural design of how Spatial Ground implementations will be tested.

Before Gate B adoption of the final Specification, BitPangea SHOULD ensure that:

- every normative rule in the Specification maps to at least one Conformance obligation;
- no Conformance rule invents a new Specification rule;
- unresolved FSF dependencies are marked rather than silently resolved;
- canonical serialization and limit rules are fully testable.

Before final canonical instance adoption, BitPangea SHALL additionally require:

- canonical Reference Vectors;
- at least one primary implementation;
- at least one independent SG-C4 implementation;
- adversarial testing;
- reconstruction testing.

---

# 29. Conformance Matrix

| Area | Required Class | Mandatory |
|---|---:|---:|
| SG-CJSON structure | SG-C1 | Yes |
| Canonicalization | SG-C1 | Yes |
| FSF dependency validation | SG-C1 | Yes |
| Membership evaluation | SG-C2 | Yes |
| Invalid-input separation | SG-C2 | Yes |
| Exact limit membership | SG-C2 | Yes |
| Hidden-state independence | SG-C2 | Yes |
| Semantic equivalence | SG-C3 | Yes |
| Refinement closure | SG-C3 | Yes where FSF permits |
| Connectedness | SG-C3 | Candidate instance |
| Non-emptiness | SG-C3 | Candidate instance |
| Extent evidence | SG-C3 | Candidate instance |
| Cross-platform reproduction | SG-C4 | Yes |
| Independent implementation | SG-C4 | Yes for maturity |

---

# 30. Standing

**SPATIAL GROUND CONFORMANCE — BUILT**

**CONFORMANCE CLASSES — ESTABLISHED**

**MANDATORY CORE — ESTABLISHED**

**FAILURE CONDITIONS — ESTABLISHED**

**INDEPENDENT IMPLEMENTATION CLASS — ESTABLISHED**

**RECONSTRUCTION REQUIREMENT — ESTABLISHED**

**REFERENCE VECTOR TEST FAMILIES — DEFINED**

**CANONICAL REFERENCE VECTOR CORPUS — NEXT**

**GATE B — NOT YET OPEN**

---

# 31. Governing Closing Statements

> **Specification defines the truth. Conformance proves that an implementation follows it.**

> **A validator may detect Ground truth. It may not create Ground truth.**

> **Many implementations. One membership truth.**

> **If independent implementations disagree, the architecture has discovered a problem—not a second canon.**
