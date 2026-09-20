# Mandatory Core

## Foundational Survey Fabric · Conformance Section 02

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section: 02 — Mandatory Core**  
**Scope: Required Canonical Compatibility**

This directory contains **Conformance Section 02 — Mandatory Core** for the BitPangea **Foundational Survey Fabric**.

The source page defines the Mandatory Core as:

> **The minimum set of canonical behaviors every implementation must satisfy before it may claim Foundational Survey Fabric compatibility.**

Its governing principle is:

> **One mandatory truth. Optional capability above it.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/index.html
```

Recommended directory README path:

```text
/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/README.md
```

The source page is publicly indexable:

```text
index,follow
```

---

## Purpose

The **Mandatory Core** is the direct conformance realization of **Requirements Finding #84 — Mandatory Conformance Core**.

The source establishes that Foundational Survey Fabric compatibility cannot be defined by selective implementation of convenient parts of the Specification.

Every conforming implementation must ultimately satisfy one common body of mandatory canonical behavior.

Optional encodings, optimizations, extensions, interfaces, or implementation features may exist above the core, but none may weaken, override, or create competing spatial truth.

---

## 02.1 — Purpose of the Mandatory Core

### Establish the Minimum Claim of Compatibility

The Mandatory Core defines the minimum canonical capabilities and behaviors that every implementation must demonstrate before claiming compatibility with the Foundational Survey Fabric.

> **An implementation that does not satisfy the Mandatory Core shall not claim Foundational Survey Fabric conformance, regardless of how many optional features or higher-layer capabilities it provides.**

---

## 02.2 — One Canonical Meaning

### No Competing Foundational Truth

All Mandatory Core behavior must resolve to the same canonical Survey meaning defined by the governing Specification.

Implementations may differ internally, but the Mandatory Core must not permit alternate interpretations of canonical address meaning, geometry, measurement, normalization, serialization, or authoritative result.

---

## 02.3 — Required Interpretation

### Canonical Inputs Must Resolve Correctly

Every conforming implementation must correctly interpret the canonical references and foundational spatial expressions required by the governing Specification.

Correct interpretation includes preserving permanent spatial meaning, respecting the canonical frame and measurement system, and resolving valid expressions without dependence on hidden implementation state.

---

## 02.4 — Required Validation

### Valid and Invalid States Must Be Distinguished

The Mandatory Core requires deterministic validation of canonical references and expressions within scope.

The source identifies canonical input, valid noncanonical input, malformed expressions, impossible precision expressions, out-of-domain references, and other invalid states as conditions that must be distinguished according to the governing Specification rather than implementation-specific guesswork.

---

## 02.5 — Required Canonicalization

### Equivalent Meaning Must Normalize Identically

Where the Specification permits multiple equivalent representations, every conforming implementation must resolve them to the same authoritative canonical meaning.

Where the Specification requires a unique canonical form for an operation or encoding, implementations must produce that required form.

Canonicalization must preserve place exactly and must not silently move, snap, approximate, or reinterpret spatial meaning.

---

## 02.6 — Required Exactness

### Canonical Truth Is Not Tolerance-Based

Mandatory Core operations must use the exact comparison, measurement, equivalence, and geometric behavior established by the Specification.

Tolerance-based equality, floating approximation, hidden snapping, or implementation-specific convergence may not substitute for canonical exactness.

---

## 02.7 — Required Result Equivalence

### Identical Inputs, Identical Authoritative Results

Independent implementations receiving identical valid canonical inputs must produce the same authoritative canonical result for every Mandatory Core operation within scope.

Where the governing Specification requires a unique canonical representation of that result, the representation must also be identical.

Performance, programming language, storage model, cache strategy, internal representation, and optimization may differ without changing the canonical answer.

---

## 02.8 — Required Normative Interchange

### Canonical Results Must Be Interchangeable

Every conforming implementation must satisfy the normative serialization and interchange obligations that the governing Specification assigns to the Mandatory Core.

The Specification may require one canonical serialization or permit multiple explicitly governed lossless normative encodings.

A Mandatory Core implementation must support the required encoding scope it claims and preserve deterministic canonical meaning across that scope.

Proprietary internal or presentation formats may not substitute for authoritative interchange requirements.

---

## 02.9 — Specification and Version Identity

### The Governing Standard Must Be Explicit

A Mandatory Core conformance claim must identify the governing Foundational Survey Fabric Specification and the applicable version or compatibility identity.

Conformance is therefore asserted against a defined canonical standard rather than an unspecified interpretation of the Survey Fabric.

---

## 02.10 — Independent Reproducibility

### The Core Must Be Open to Independent Proof

Mandatory Core conformance must be independently testable from openly inspectable Specifications, conformance rules, and applicable Reference Vectors once the canonical vector corpus has been established from sufficiently complete formal mathematics.

No proprietary software, unpublished algorithm, exclusive service, secret convention, or institutional permission may be required to understand or reproduce the canonical result.

---

## 02.11 — Optional Capability Boundary

### Optional Features May Extend, Never Replace

Optional conformance classes, representations, accelerators, extensions, or implementation conveniences may provide additional capabilities above the Mandatory Core.

Such capabilities must not alter Mandatory Core semantics, weaken exactness, bypass validation behavior, or create an alternate source of canonical spatial truth.

---

## 02.12 — Failure of the Mandatory Core

### Core Failure Prevents Compatibility Claim

Failure of any required Mandatory Core behavior prevents an implementation from claiming full Foundational Survey Fabric compatibility.

Partial implementation may be described accurately for development or testing purposes, but it may not be represented as conforming unless the governing Conformance specification explicitly defines a permissible nonconforming or provisional status.

---

## Requirements Basis

This section directly realizes **Requirements Finding #84 — Mandatory Conformance Core**.

The source also references supporting requirements governing exactness, deterministic canonicalization, independent implementation, normative serialization and interchange, finite computability, and authoritative results.

Primary referenced Findings:

```text
#84
#10
#24
#30
#57–#60
#63–#66
#71–#75
#78–#83
```

These Findings remain authoritative within the Requirements Framework.

This Conformance section realizes and references them; it does not replace them.

---

## Established by Requirements

The source states that Finding #84 requires a mandatory minimum conformance core for every implementation claiming canonical compatibility.

Supporting Findings establish the exactness, reproducibility, normalization, normative interchange, finite representation, validity, and implementation independence that the Mandatory Core must ultimately prove.

---

## Still Open in Conformance

The source leaves the following unresolved until the Specification and remaining Conformance sections are complete:

- exact Mandatory Core test inventory;
- operation list;
- required Reference Vector categories;
- eventual canonical vectors;
- canonical test identifiers;
- pass thresholds where binary pass/fail is insufficient;
- required normative encoding scope;
- declaration syntax;
- treatment of provisional implementations.

These items should not be prematurely fixed.

---

## Architectural Boundary

The source states:

> **Optional capability may extend what an implementation can do. It may not change what canonical spatial truth means, substitute for failure of the Mandatory Core, or create authority over the governing Specification.**

This is the key architectural boundary of the section.

---

## Navigation

The source page links to:

```text
/theatlas/foundational-survey-fabric/conformance/01-conformance-classes/
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

These provide navigation to Conformance 01, the Requirements Framework, the Specification, and the Conformance Index.

---

## Metadata Identity

The source page includes:

```text
Title: Mandatory Core | Foundational Survey Fabric Conformance | BitPangea
Description: Mandatory Core — Conformance Section 02 for the BitPangea Foundational Survey Fabric.
Canonical: https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/
Theme Color: #00c8d7
Robots: index,follow
OG Type: website
```

These values should remain aligned with the page.

---

## Repository Guidance

When maintaining this directory:

1. preserve the title **Mandatory Core**;
2. preserve **Conformance Section 02 · Required Canonical Compatibility**;
3. preserve the canonical path `/theatlas/foundational-survey-fabric/conformance/02-mandatory-core/`;
4. preserve the statement that the Mandatory Core is the minimum set of canonical behaviors required for compatibility;
5. preserve the direct relationship to **Requirements Finding #84**;
6. preserve **One mandatory truth. Optional capability above it.**
7. preserve the rule that selective support cannot establish full compatibility;
8. preserve the requirement for one common body of mandatory canonical behavior;
9. preserve one canonical Survey meaning;
10. preserve required interpretation of canonical references and foundational expressions;
11. preserve deterministic validation of valid and invalid states;
12. preserve canonicalization that retains exact place and does not silently move, snap, approximate, or reinterpret;
13. preserve the prohibition on tolerance-based canonical truth;
14. preserve identical authoritative results for identical valid canonical inputs;
15. preserve normative serialization and interchange obligations;
16. preserve explicit Specification/version identity in conformance claims;
17. preserve independent reproducibility from openly inspectable materials;
18. preserve the prohibition on proprietary software, unpublished algorithms, exclusive services, secret conventions, or institutional permission as requirements for reproducing canonical results;
19. preserve the optional-capability boundary;
20. preserve the rule that failure of any required Mandatory Core behavior prevents a full compatibility claim;
21. preserve the supporting Requirements Findings listed by the page;
22. preserve the unresolved status of the exact test inventory, operation list, vector categories, vectors, identifiers, thresholds, encoding scope, declaration syntax, and provisional treatment;
23. preserve the Architectural Boundary exactly as stated;
24. preserve `index,follow` unless the publication model is intentionally revised;
25. keep canonical, Open Graph, description, theme-color, favicon, framework, and navigation references aligned with the page;
26. do not invent the final Mandatory Core operation inventory before the Specification is complete;
27. do not allow optional features to substitute for Mandatory Core failure;
28. do not allow Conformance to create authority over the governing Specification or canonical spatial truth.

---

## Status

**Foundational Survey Fabric**

**Conformance**

**Section 02 — Mandatory Core**

**Required Canonical Compatibility**

**Final Test Inventory and Formal Declaration Details Remain Open**

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
