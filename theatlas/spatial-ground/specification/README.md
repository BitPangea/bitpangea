# Spatial Ground Specification

## SG-SPEC-1.0 — Canonical World-Membership Semantics

**BitPangea · The Atlas · Spatial Ground**  
**Document Type:** Specification Framework / Repository Landing  
**Specification Status:** ADOPTED — `SG-SPEC-1.0`  
**Gate Standing:** Gate B — COMPLETE  
**Formal Model:** Canonical Membership Predicate Model (CMPM)  
**Requirements Basis:** Adopted Spatial Ground Requirements  
**Upstream Dependency:** `FSF-SPEC-1.0`  
**Canonical Serialization:** `SG-CJSON 1.0`  
**Current Spatial Ground Standing:** `SG-WORLD-SPACE-INSTANCE-0001` — ADOPTED

---

## 1. Purpose

This directory is the canonical repository home for the adopted **Spatial Ground Specification**.

The Specification defines **how Spatial Ground works**. The adopted Spatial Ground Requirements define **what must remain true**.

The governing semantic relation is:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

The adopted Specification establishes the formal semantic structure by which valid canonical Survey space receives one exact Spatial Ground membership result:

```text
WORLD
NON_WORLD
```

No third canonical membership value exists.

---

## 2. Primary Normative Artifact

The primary normative Specification artifact is:

```text
/theatlas/spatial-ground/specification/spatial-ground-specification.md
```

Canonical Specification identity:

```text
SG-SPEC-1.0
```

This `README.md`, the public `index.html`, diagrams, implementation notes, tutorials, and explanatory materials are supporting documentation. They do not replace or independently redefine `SG-SPEC-1.0`.

---

## 3. Institutional Standing

```text
Spatial Ground Requirements — ADOPTED
Gate A — COMPLETE
FSF-SPEC-1.0 — CANONICALLY ADOPTED
SG-SPEC-1.0 — ADOPTED
Gate B — COMPLETE
SG-WORLD-SPACE-INSTANCE-0001 — ADOPTED
Production Conformance / Reconstruction — PASS
```

Specification adoption and canonical World-space instance adoption are institutionally distinct acts.

`SG-SPEC-1.0` establishes the governing Spatial Ground rules. It did not, by itself, select or adopt the canonical World-space instance. The later instance-adoption sequence established `SG-WORLD-SPACE-INSTANCE-0001`.

---

## 4. Formal Model

The adopted formal model is the **Canonical Membership Predicate Model (CMPM)**.

For the canonical Survey Domain `S`, the governing membership function is:

```text
M_D : S → {WORLD, NON_WORLD}
```

Canonical World-space is:

```text
W_D = { x ∈ S | M_D(x) = WORLD }
```

Canonical non-World-space is:

```text
N_D = S \ W_D
```

Membership is:

- total for valid Survey input;
- exactly two-valued;
- deterministic;
- implementation-independent;
- representation-independent;
- permanent after canonical instance adoption.

Invalid Survey input is rejected before Ground membership evaluation and is not interpreted as `NON_WORLD`.

---

## 5. Adopted FSF Dependency

Spatial Ground consumes the adopted Foundational Survey Fabric by reference.

Current canonical lineage:

```text
FSF-SPEC-1.0
```

Canonical FSF machine serialization:

```text
FSF-CJSON-1.0
```

Adopted Survey bounds:

```text
H = 1,000,000 Pang
S = [-1,000,000,+1,000,000]²
P = [-500,000,+500,000]²
```

The production Spatial Ground relationship is:

```text
World-space ⊂ interior(P) ⊂ interior(S)
```

Spatial Ground does not redefine Survey reference, geometry, topology, measure, precision, refinement, or canonical spatial equality.

---

## 6. Canonical Ground Definition

The canonical machine-readable Ground Definition syntax is:

```text
SG-CJSON 1.0
```

The selected production profile is intentionally narrow:

```text
one primary FSF spatial-set definition
one SG-CJSON fsf root
```

The canonical production chain is:

```text
FSF-SPEC-1.0
→ canonical FSF SCPE
→ FSF-CJSON-1.0
→ FSF-WORLD-SCPE-0001
→ one-root SG-CJSON 1.0 Ground Definition
→ SG-WORLD-SPACE-INSTANCE-0001
```

Unrestricted Boolean / composite-result closure remains outside the current production profile.

---

## 7. Layer Boundary

Spatial Ground owns **World-membership meaning** and nothing beyond it.

It does not define:

- Parcel identity or parcelization;
- Parcel eligibility;
- ownership, rights, claims, jurisdiction, or control;
- Regions or Clusters;
- terrain, morphology, coast, or visible World Form;
- settlement, construction, or development;
- social, political, legal, cultural, economic, or experiential meaning.

Higher layers may consume canonical membership. They may not redefine it.

---

## 8. Conformance and Reference Vectors

Conformance proves that implementations satisfy the adopted Specification.

Reference Vectors demonstrate the Specification.

Neither creates missing Specification mathematics or independent World-space authority.

> **Reference Vectors demonstrate the Specification. They do not create the Specification.**

The reconciled executable profile established:

```text
23 PASS
1 EXPECTED RESERVED BLOCK
0 FAIL
0 CROSS-IMPLEMENTATION MISMATCH
```

The reserved vector concerns capability outside the adopted `FSF-SPEC-1.0` Mandatory Core and does not block the selected production profile.

---

## 9. Governance and Adoption

Specification adoption package:

```text
SG-SPEC-1.0 — ADOPTED
SG-ACT-SPEC-2026-0001 — EXECUTED
GATE B — COMPLETE
```

Adoption records are preserved separately from the active Specification so that governance state and normative meaning remain institutionally distinct.

Recommended adoption-record locations:

```text
/theatlas/spatial-ground/review/adoption/SG-ACT-SPEC-2026-0001.md
/theatlas/spatial-ground/review/adoption/SG_Gate_B_Closure_Record_Day132.md
```

The later canonical World-space instance adoption is governed by its own act.

---

## 10. Directory Structure

```text
/theatlas/spatial-ground/specification/
├── index.html
├── README.md
├── spatial-ground-specification.md
├── Spatial_Ground_Specification_DRAFT.md
└── ground-definition/
```

The adopted Specification must remain distinguishable from preserved draft and supporting records.

---

## 11. Public Path

Canonical public directory URL:

```text
https://bitpangea.com/theatlas/spatial-ground/specification/
```

Repository landing page:

```text
/theatlas/spatial-ground/specification/index.html
```

Directory README:

```text
/theatlas/spatial-ground/specification/README.md
```

Primary normative Specification:

```text
/theatlas/spatial-ground/specification/spatial-ground-specification.md
```

---

## 12. Maintenance Rules

When maintaining this directory:

1. preserve `SG-SPEC-1.0` as the adopted Specification identity;
2. preserve the distinction between Requirements, Specification, Conformance, Reference Vectors, and adoption;
3. do not allow README or HTML presentation text to become independent normative authority;
4. preserve `FSF-SPEC-1.0` ownership of Survey mathematics;
5. preserve the CMPM formal model;
6. preserve exact, total, two-valued, deterministic membership;
7. preserve `SG-CJSON 1.0` as the canonical Ground Definition representation;
8. preserve the one-`fsf`-root production profile;
9. preserve unrestricted Boolean / composite-result closure as outside the current production profile;
10. preserve the distinction between invalid Survey input and `NON_WORLD`;
11. preserve the membership-only layer boundary;
12. preserve canonical World-space permanence after instance adoption;
13. preserve the active upward handoff to General Spatial Interpretation;
14. apply the Atlas editorial rule: **Chronicle records when. Atlas records what.**

---

## Status

**Spatial Ground Specification — ADOPTED AS SG-SPEC-1.0**  
**Gate B — COMPLETE**  
**Canonical World-Space Instance — SG-WORLD-SPACE-INSTANCE-0001 ADOPTED**  
**Production Conformance / Reconstruction — PASS**

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
