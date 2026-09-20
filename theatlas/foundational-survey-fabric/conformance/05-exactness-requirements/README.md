# Exactness Requirements

## Foundational Survey Fabric · Conformance Section 05

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section: 05 — Exactness Requirements**  
**Scope: Canonical Precision and Determinism**

This directory contains **Conformance Section 05 — Exactness Requirements** for the BitPangea **Foundational Survey Fabric**.

The source page defines the section as:

> **The conformance rules that prevent tolerance, hidden approximation, silent snapping, and mutable implementation state from altering canonical Survey truth.**

Its governing principle is:

> **Exact for truth. Approximate for experience.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/index.html
```

Recommended directory README path:

```text
/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/README.md
```

The source page is publicly indexable:

```text
index,follow
```

---

## Purpose

**Exactness Requirements** establish the minimum precision discipline every conforming implementation must preserve when interpreting, comparing, measuring, normalizing, and returning authoritative Survey results.

The source explicitly states:

> **Canonical truth is exact.**

Approximations may be used internally for performance or presentation only where they cannot alter the authoritative result.

---

## 05.1 — Exact Canonical Equality

### No Tolerance-Based Equality

Canonical equality and equivalence must be determined by the exact rules of the governing Specification.

The source prohibits:

- floating tolerances;
- epsilon bands;
- “close enough” comparison;
- implementation-specific approximation

from determining canonical equality.

---

## 05.2 — Exact Spatial Predicates

### Predicates Must Resolve Deterministically

Survey-layer predicates such as:

- touch;
- intersection;
- containment;
- boundary contact;
- separation;
- equivalence

must resolve exactly under canonical mathematics.

Approximate geometric tests may not substitute for canonical predicate truth.

---

## 05.3 — No Silent Snapping

### Canonicalization Must Not Move Place

Canonical references must not be silently moved to:

- nearby grid lines;
- precision or subdivision boundaries;
- vertices;
- preferred increments;
- other derived structures.

The source allows snapping only as an explicit operation in a higher Architecture domain.

It must never be disguised as canonical interpretation or normalization.

---

## 05.4 — Hidden-State Independence

### Mutable Context Must Not Change the Answer

Authoritative results must depend only on explicit canonical inputs and the governing Specification.

The source prohibits canonical output from varying because of:

- cache history;
- database order;
- random state;
- user identity;
- ownership;
- session state;
- machine history;
- wall-clock time;
- other hidden mutable conditions.

---

## 05.5 — Exact Measurement

### Canonical Measure Must Be Reproducible

Canonical spatial separation, area, path length, geometric boundary length, and other authoritative measures must be produced through exact mathematical rules defined by the Specification.

Internal numeric shortcuts are permitted only where they are proven to preserve the exact authoritative result.

---

## 05.6 — Exact Canonicalization

### Normalization Preserves Identical Meaning

Canonicalization must normalize only mathematically equivalent representations.

It must not:

- truncate;
- round;
- infer;
- approximate;
- otherwise alter valid spatial meaning

simply to produce a preferred representation.

---

## 05.7 — Precision Integrity

### Canonical Precision Must Not Be Lost Invisibly

A conforming implementation must distinguish complete canonical precision from reduced:

- storage precision;
- transmission precision;
- rendering precision.

Any lossy conversion must be detectable and may not be represented as exact equivalence to the complete authoritative expression.

---

## 05.8 — Finite Exact Representation

### Authoritative Truth Must Be Exactly Representable

Canonical references, extents, and Survey-layer spatial expressions must remain finitely representable and exactly resolvable under the governing Specification.

A conformance claim may not depend on:

- irreducible approximation;
- indefinite numerical convergence

to determine canonical meaning.

---

## 05.9 — Deterministic Termination

### Exactness Must Be Reachable

Canonical operations required for conformance must terminate deterministically for valid finite canonical inputs.

An implementation may not claim canonical exactness where the authoritative result depends on potentially nonterminating computation or unresolved convergence.

---

## 05.10 — Approximation Boundary

### Approximate Methods Belong Outside Canonical Truth

Approximation may be used for:

- rendering;
- visualization;
- interaction;
- simulation;
- engineering convenience;
- local presentation.

But such approximation must remain explicitly outside the authoritative canonical result.

It may not redefine Survey-layer spatial truth.

---

## 05.11 — Cross-Implementation Exactness

### Exactness Must Survive Independent Implementation

Independent conforming implementations must reproduce the same authoritative canonical meaning from identical canonical inputs without relying on shared hidden state or common proprietary software.

Where the governing Specification requires one unique canonical representation, that representation must also agree exactly.

The source summarizes:

> **Exactness shall be a property of the published Specification, not of one favored implementation.**

---

## 05.12 — Exactness Failure

### Approximate Canonical Results Are Nonconforming

The source states that the following constitute conformance failure when used to establish an authoritative Survey result:

- tolerance-based equality;
- silent snapping;
- hidden mutable state;
- undetected lossy conversion;
- implementation-specific approximation.

Such behavior may still exist as explicitly noncanonical functionality in a higher Architecture domain, but it may not be presented as Foundational Survey Fabric truth.

---

## Established by Requirements

The source states that the Requirements framework already establishes:

- exact Survey-layer mathematics;
- deterministic canonicalization;
- exact comparison;
- no silent snapping;
- distinction between canonical and reduced precision;
- detectable precision loss;
- finite exact representation;
- hidden-state independence;
- deterministic termination;
- exact-or-invalid canonical truth.

These requirements constrain the eventual conformance proof.

---

## Requirements Basis

The source derives this section especially from:

```text
#24
#30
#53–#57
#66
#72–#75
#78–#83
```

These Findings remain authoritative within the Requirements Framework.

This Conformance section applies them; it does not replace them.

---

## Still Open in Conformance

The source leaves the following unresolved until the Specification is sufficiently complete:

- exact Reference Vectors for numerical exactness;
- canonical or normative representations used in proof;
- permitted internal approximation strategies;
- proof obligations for optimized algorithms;
- formal error thresholds for noncanonical presentation layers;
- detailed failure codes.

These items should remain open until formally resolved.

---

## Architectural Boundary

The source states:

> **Approximation may assist an implementation or higher Architecture domain. It may not become authoritative spatial truth, silently move place, or weaken the exact rules of the governing Specification.**

This is the defining boundary of Conformance Section 05.

---

## Navigation

The source page links to:

```text
/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/
```

```text
/theatlas/foundational-survey-fabric/requirements/
```

```text
/theatlas/foundational-survey-fabric/specification/
```

```text
/theatlas/foundational-survey-fabric/conformance/
```

These provide navigation to Conformance 04, the Requirements Framework, the Specification, and the Conformance Index.

---

## Metadata Identity

The source page includes:

```text
Title: Exactness Requirements | Foundational Survey Fabric Conformance | BitPangea
Description: Exactness Requirements — Conformance Section 05 for the BitPangea Foundational Survey Fabric.
Canonical: https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/
Theme Color: #00c8d7
Robots: index,follow
OG Type: website
```

These values should remain aligned with the page.

---

## Repository Guidance

When maintaining this directory:

1. preserve the title **Exactness Requirements**;
2. preserve **Conformance Section 05 · Canonical Precision and Determinism**;
3. preserve the canonical path `/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/`;
4. preserve **Exact for truth. Approximate for experience.**
5. preserve exact canonical equality without tolerance-based comparison;
6. preserve exact Survey-layer predicates;
7. preserve the prohibition on silent snapping;
8. preserve hidden-state independence;
9. preserve exact authoritative measurement;
10. preserve exact canonicalization without truncation, rounding, inference, or approximation;
11. preserve detectable precision loss;
12. preserve finite exact representation;
13. preserve deterministic termination;
14. preserve the boundary that approximation belongs outside authoritative canonical truth;
15. preserve cross-implementation exactness;
16. preserve the rule that approximate canonical results are nonconforming;
17. preserve the Requirements basis Findings listed by the page;
18. preserve the open status of exactness Reference Vectors, proof representations, internal approximation strategies, optimization proof obligations, noncanonical presentation thresholds, and failure codes;
19. preserve the Architectural Boundary exactly as stated;
20. preserve `index,follow` unless the publication model is intentionally revised;
21. keep canonical, Open Graph, description, theme-color, favicon, framework, and navigation references aligned with the page;
22. do not allow tolerance-based equality to define canonical truth;
23. do not allow snapping, hidden state, or undetected precision loss to alter place;
24. do not allow noncanonical approximation to be presented as Foundational Survey Fabric truth.

---

## Status

**Foundational Survey Fabric**

**Conformance**

**Section 05 — Exactness Requirements**

**Canonical Precision and Determinism**

**Formal Proof Vectors and Detailed Failure Codes Remain Open**

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
