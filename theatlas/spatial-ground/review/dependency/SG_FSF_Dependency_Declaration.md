# Foundational Survey Fabric — Spatial Ground Dependency Declaration

**Record Type:** Architectural Dependency Declaration  
**Status:** COMPLETE  
**Scope:** Spatial Ground dependency upon the Foundational Survey Fabric  
**Applies To:** Spatial Ground formal model selection, Specification drafting, Conformance, Reference Vectors, and later canonical-instance work  
**Authority Boundary:** This declaration does not redesign the Foundational Survey Fabric, select unresolved FSF mathematics, adopt a Spatial Ground formal model, or open Gate B.

---

## 1. Purpose

This declaration establishes the exact architectural dependency relationship between the Foundational Survey Fabric (FSF) and Spatial Ground.

It is derived from the completed **Spatial Ground — Foundational Survey Fabric Dependency Review** and governs what Spatial Ground may rely upon, what it must inherit, and what it is prohibited from redefining.

The governing rule is:

> **FSF supplies canonical spatial reference and mathematics. Spatial Ground adds canonical participation in The World.**

---

## 2. Declared Dependency

Spatial Ground SHALL depend upon the Foundational Survey Fabric for all canonical spatial truth required to evaluate World membership.

Spatial Ground SHALL NOT establish a parallel or competing spatial foundation.

Spatial Ground SHALL NOT redefine any FSF-owned spatial concept merely because the exact FSF mathematical realization remains open.

---

## 3. FSF Truth Spatial Ground MAY Reliably Consume

Spatial Ground MAY rely upon the governing FSF contract that:

1. there is one finite canonical Survey Domain;
2. canonical Survey reference is valid only within that Domain;
3. valid Survey reference does not itself establish World membership;
4. every authoritative World-space location is representable within the canonical Survey Domain;
5. canonical position and canonical extent are exact spatial expressions under the FSF;
6. one global canonical frame governs authoritative spatial location;
7. canonical scale, orientation, origin, measurement, and spatial reference belong to the FSF;
8. canonical spatial meaning is deterministic and representation-independent;
9. semantically equivalent canonical Survey meaning must be treated as the same canonical spatial truth;
10. canonical normalization must preserve place and may not silently move, snap, or reinterpret it;
11. canonical spatial validity is exact and distinguishable from invalid or ambiguous input;
12. canonical operations required for authoritative Survey truth must be exact, deterministic, and terminating for valid finite canonical input;
13. independent conforming implementations must be capable of deriving identical canonical Survey results from identical canonical inputs;
14. compatible FSF specification evolution must preserve established canonical spatial meaning;
15. exact boundary, continuity, connectedness, intersection, overlap, containment, separation, and related geometric predicates belong to the FSF;
16. canonical spatial truth is not created by serialization, storage, rendering, provenance, cryptography, implementation technology, or higher-layer semantics.

These are the dependency guarantees Spatial Ground may use without redefining their underlying mathematics.

---

## 4. Spatial Ground SHALL Inherit, Not Recreate

Spatial Ground SHALL inherit the governing FSF result for:

- Survey reference validity;
- canonical spatial identity;
- canonical equivalence;
- canonical normalization;
- canonical frame;
- canonical scale and measurement;
- position and extent semantics;
- boundary interpretation;
- continuity and connectedness;
- exact geometric predicates;
- compatible Survey lineage;
- deterministic canonical validity;
- canonical serialization semantics where relevant to interchange.

Spatial Ground SHALL NOT define independent versions of these concepts.

---

## 5. Spatial Ground's Sole Added Semantic Responsibility

Spatial Ground's canonical responsibility is limited to:

> **determining whether valid canonical Survey space participates in BitPangea as World-space.**

This responsibility SHALL remain distinct from:

- reference validity;
- geometry;
- topology;
- measurement;
- canonical addressing;
- refinement mathematics;
- ownership;
- rights;
- governance;
- interpretation;
- Parcel identity;
- infrastructure;
- rendering;
- experience.

Spatial Ground SHALL add membership meaning only.

---

## 6. Validity Before Membership

Spatial Ground SHALL evaluate World membership only against valid canonical Survey meaning.

Invalid, malformed, impossible, ambiguous, or out-of-Domain Survey input SHALL NOT be interpreted as a third World-membership state.

Survey validity is resolved by FSF.

World membership is resolved by Spatial Ground.

---

## 7. Equivalence Rule

If two valid Survey expressions are equivalent under the governing FSF semantics, Spatial Ground SHALL treat them as the same canonical spatial meaning for purposes of membership evaluation.

Spatial Ground SHALL NOT substitute:

- string equality;
- storage equality;
- serialization identity;
- implementation-specific tolerance;
- display equivalence;
- approximate proximity

for governing FSF semantic equivalence.

The exact FSF equivalence algorithm remains upstream.

---

## 8. Representation Independence

Spatial Ground membership SHALL attach to canonical Survey meaning rather than to a particular:

- address string;
- encoding;
- schema;
- serialization;
- file format;
- data structure;
- database row;
- rendering;
- software implementation;
- verification technology.

Equivalent durable representations of the same FSF meaning SHALL NOT create competing Ground membership truths.

---

## 9. Compatible Lineage Rule

Spatial Ground MAY reference the governing FSF specification lineage necessary to identify the applicable spatial standard.

Compatible FSF evolution SHALL preserve previously established spatial meaning and therefore SHALL NOT, by itself, alter Spatial Ground membership.

Spatial Ground SHALL NOT treat document version identity as spatial identity.

Any future incompatible FSF succession affecting canonical spatial meaning would require explicit architectural treatment and SHALL NOT silently reinterpret existing Ground membership.

---

## 10. Boundary and Connectedness Rule

Spatial Ground MAY impose or inherit constitutional obligations concerning:

- exact World limits;
- World connectedness;
- continuity where applicable.

However, the mathematical determination of:

- boundary inclusion;
- endpoint behavior;
- contact;
- connectivity;
- continuity;
- overlap;
- containment;
- related topological or geometric predicates

SHALL remain governed by FSF.

Spatial Ground SHALL NOT create an independent topology.

---

## 11. Refinement Dependency — Reserved Upstream

The exact relationship between coarser and finer canonical Survey references remains unresolved in the current FSF formal design.

Accordingly, Spatial Ground SHALL NOT presume any particular coarse/fine semantic model.

Spatial Ground SHALL NOT presume, unless later established by FSF, that:

- a coarse reference denotes an extent;
- a coarse reference denotes a point with uncertainty;
- finer references are geometric subsets of coarse references;
- a parent/child address hierarchy exists;
- membership of a coarse reference is determined by all finer descendants;
- membership of a coarse reference is determined by any finer descendant;
- refinement changes or preserves membership according to a particular subdivision rule.

Spatial Ground MAY rely only on the higher-order FSF obligation that added precision must not silently renumber, relocate, reinterpret, or invalidate established canonical spatial meaning.

If a candidate Spatial Ground formal model requires one specific unresolved coarse/fine interpretation, that dependency SHALL be surfaced explicitly and resolved upstream before Gate B can close.

---

## 12. Reserved FSF Mathematical Realizations

Spatial Ground SHALL treat the following as upstream FSF matters unless and until formally selected there:

- exact Survey Domain geometry;
- exact coordinate representation;
- exact origin placement;
- exact precision mechanism;
- exact coarse/fine reference semantics;
- exact equivalence algorithm;
- exact normalization algorithm;
- exact boundary-inclusion convention;
- exact topology and predicate algorithms;
- exact canonical operation algorithms;
- exact canonical return forms;
- exact serialization/interchange realization;
- exact computability proofs;
- executable FSF Conformance rules.

Spatial Ground SHALL NOT patch, complete, or silently select these on behalf of FSF.

---

## 13. Formal Model Selection Constraint

Any candidate Spatial Ground formal membership model SHALL be evaluated against this declaration.

A candidate is architecturally admissible only if it:

1. depends exclusively on valid FSF spatial truth plus Ground-owned membership semantics;
2. does not redefine FSF concepts;
3. remains representation-independent;
4. yields equivalent membership for FSF-equivalent spatial meaning;
5. preserves membership under compatible FSF lineage;
6. does not depend on hidden mutable state;
7. does not require approximate or tolerance-based spatial truth;
8. does not require an unresolved FSF semantic choice unless that dependency is explicitly declared and resolved before adoption;
9. remains capable of independent implementation and deterministic verification.

A candidate failing these conditions SHALL NOT proceed as the governing Spatial Ground formal model.

---

## 14. Specification Drafting Constraint

The future Spatial Ground Specification SHALL state its FSF dependencies explicitly.

It SHALL distinguish:

- inherited FSF truth;
- Ground-owned membership semantics;
- unresolved upstream FSF dependencies;
- Ground-specific formal mechanisms.

The Spatial Ground Specification SHALL NOT restate inherited FSF mathematics as though authored by Ground.

Where possible, it SHALL reference the governing FSF concept rather than duplicate it.

---

## 15. Conformance Consequence

Future Spatial Ground Conformance SHALL test Ground behavior against valid FSF meaning.

Ground Conformance SHALL NOT attempt to prove FSF correctness independently as a substitute for FSF Conformance.

Where a Ground conformance test depends on an FSF predicate, the test SHALL identify that dependency and consume the governing FSF result.

---

## 16. Reference Vector Consequence

Future Spatial Ground Reference Vectors MAY include FSF-derived canonical spatial expressions as inputs.

Those vectors SHALL test Spatial Ground membership behavior, not redefine FSF spatial mathematics.

Where a vector depends on a specific FSF formal convention still unresolved upstream, that vector SHALL remain deferred until the governing FSF convention exists.

---

## 17. Dependency Declaration Disposition

**FSF–SPATIAL GROUND DEPENDENCY DECLARATION — COMPLETE**

**DEPENDENCY BOUNDARY — ESTABLISHED**

**SPATIAL GROUND FORMAL MODEL SELECTION — PERMITTED TO PROCEED**

**GATE B — NOT YET OPEN**

The next required architectural artifact is the **Spatial Ground Formal Model Selection Record**, including explicit independent-implementation reasoning.

---

## 18. Governing Closing Rule

> **Spatial Ground may consume FSF truth. It may not become a second FSF.**

This declaration governs all subsequent Spatial Ground formal design work unless superseded by an explicit later architectural act.
