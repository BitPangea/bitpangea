# Validation Behavior

## Foundational Survey Fabric · Conformance Section 04

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section: 04 — Validation Behavior**  
**Scope: Canonical Input Classification**

This directory contains **Conformance Section 04 — Validation Behavior** for the BitPangea **Foundational Survey Fabric**.

The source page defines the section as:

> **The conformance rules for how implementations classify, accept, normalize, or reject canonical and noncanonical Survey expressions.**

Its governing principle is:

> **Canonicalize what is equivalent. Reject what is not valid.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/index.html
```

Recommended directory README path:

```text
/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/README.md
```

The source page is publicly indexable:

```text
index,follow
```

---

## Purpose

**Validation Behavior** defines the canonical judgment an implementation must make when presented with a Survey reference, extent, precision expression, normative encoding, or other foundational spatial input.

Conforming software must distinguish among:

- valid canonical input;
- valid but noncanonical representation;
- malformed expression;
- out-of-domain reference;
- impossible precision expression;
- ambiguous input;
- other invalid states.

The source explicitly rejects guesswork and silent invention of spatial meaning.

---

## 04.1 — Canonical Valid Input

### Accept Authoritative Form

An input that satisfies the governing Specification and is already expressed in the canonical or normative form required for its operation or encoding must be accepted as valid authoritative Survey input.

Its spatial meaning must be interpreted exactly and without modification.

---

## 04.2 — Valid Noncanonical Representation

### Normalize Equivalent Meaning

A valid input that expresses legitimate canonical spatial meaning but is not in canonical form may be accepted where the Specification permits such representations.

The implementation must:

- resolve it deterministically to the same authoritative canonical meaning;
- normalize it to the required canonical form where the Specification requires one.

---

## 04.3 — Malformed Expression

### Reject Invalid Structure

An expression that violates required grammar, normative encoding structure, field rules, precision syntax, or other formal construction requirements must be rejected as malformed.

The source explicitly states:

> **A conforming implementation shall not infer intended spatial meaning from structurally invalid input.**

---

## 04.4 — Out-of-Domain Reference

### Reject Reference Beyond the Survey Domain

A mathematically structured reference that resolves outside the valid canonical Survey Domain must fail validation as a BitPangea Survey reference.

The page explicitly prohibits reinterpreting it as:

- Exterior;
- neighboring territory;
- alternate World-space;
- another spatial category

merely because its syntax can be parsed.

---

## 04.5 — Impossible Precision Expression

### Reject Invalid Precision Structure

A precision expression that violates canonical precision mathematics or cannot resolve under the Specification must be rejected.

The source includes invalid conditions such as:

- impossible values;
- impossible structures;
- invalid subdivisions;
- invalid extensions;
- invalid representational states.

Implementations must not repair such input through:

- silent truncation;
- substitution;
- coercion;
- snapping.

---

## 04.6 — Ambiguous Input

### Do Not Guess Canonical Meaning

An input that permits more than one possible canonical interpretation under the applicable rules must not be accepted as authoritative Survey truth.

Ambiguity must result in deterministic validation failure unless the governing Specification defines an exact normalization rule that resolves the ambiguity without changing spatial meaning.

---

## 04.7 — Approximate or Estimated Input

### Approximation Is Not Canonical Truth

Estimated, rounded, approximate, pending, disputed, or incomplete spatial values must not be accepted as canonical Survey truth unless they resolve exactly to a valid canonical representation.

Higher Architecture domains may preserve such states for their own purposes, but the Foundational Survey Fabric must classify them separately from authoritative canonical input.

---

## 04.8 — Noncanonical Precision Reduction

### Detect Loss Rather Than Hide It

Inputs produced through truncation, generalization, reduced storage precision, or lossy conversion must be recognized as reduced representations where precision has been discarded.

Such inputs must not be treated as fully equivalent to the original canonical expression unless the transformation is demonstrably lossless.

---

## 04.9 — Canonicalization Boundary

### Normalization Must Preserve Place

Validation may normalize:

- equivalent forms;
- canonical ordering;
- normative encoding;
- representational syntax

only where the resulting expression preserves identical canonical spatial meaning.

Validation must not:

- relocate a position;
- alter an extent;
- change precision meaning;
- substitute a nearby representable value.

---

## 04.10 — Deterministic Validation Result

### The Same Input Receives the Same Judgment

Independent conforming implementations must reach the same validation classification for the same input under the same Specification.

Validation behavior must therefore be reproducible and implementation-independent.

---

## 04.11 — Failure Classification

### Reject for Defined Reasons

The Conformance framework must ultimately define deterministic failure classes sufficient to distinguish:

- malformed syntax;
- invalid canonical structure;
- out-of-domain reference;
- impossible precision expression;
- ambiguity;
- unsupported Specification version;
- unsupported normative-encoding version;
- other relevant validation failures.

Human-readable error wording may vary.

The canonical failure condition may not.

---

## 04.12 — No Hidden Repair

### Invalid Input Must Not Be Silently Corrected

A conforming implementation must not silently repair invalid canonical input through:

- snapping;
- rounding;
- truncation;
- inferred defaults;
- guessed intent;
- implementation-specific fallback behavior.

Any higher-domain convenience feature that proposes a correction must remain explicitly separate from canonical validation.

---

## Established by Requirements

The source states that the Requirements framework already establishes:

- deterministic validity and normalization;
- exact canonicalization;
- rejection of malformed or ambiguous input;
- exact addressability within the Survey Domain;
- no silent snapping;
- detectable precision loss;
- exact-or-invalid canonical states;
- hidden-state independence;
- implementation-independent authoritative behavior.

These are governing constraints on this Conformance section.

---

## Requirements Basis

The source derives this section especially from:

```text
#30
#57
#71–#75
#78
#80–#83
```

with additional support from permanent addressability and exactness requirements.

These Findings remain authoritative within the Requirements Framework.

This Conformance page references and applies them; it does not replace them.

---

## Still Open in Conformance

The source leaves the following unresolved until the Specification is sufficiently complete:

- formal validation status codes;
- machine-readable error taxonomy;
- exact parser behavior;
- Specification-version mismatch handling;
- normative-encoding-version mismatch handling;
- distinction between recoverable and terminal validation failures;
- canonical diagnostics;
- eventual Reference Vector corpus.

These items should remain open until formally resolved.

---

## Architectural Boundary

The source states:

> **Validation may recognize canonical truth, normalize equivalent valid representation where permitted, or reject invalid input. It may not manufacture truth from ambiguity, silently repair spatial meaning, or create authority over the governing Specification.**

This is the defining architectural boundary of Conformance Section 04.

---

## Navigation

The source page links to:

```text
/theatlas/foundational-survey-fabric/conformance/03-canonical-result-equivalence/
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

These provide navigation to Conformance 03, the Requirements Framework, the Specification, and the Conformance Index.

---

## Metadata Identity

The source page includes:

```text
Title: Validation Behavior | Foundational Survey Fabric Conformance | BitPangea
Description: Validation Behavior — Conformance Section 04 for the BitPangea Foundational Survey Fabric.
Canonical: https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/
Theme Color: #00c8d7
Robots: index,follow
OG Type: website
```

These values should remain aligned with the page.

---

## Repository Guidance

When maintaining this directory:

1. preserve the title **Validation Behavior**;
2. preserve **Conformance Section 04 · Canonical Input Classification**;
3. preserve the canonical path `/theatlas/foundational-survey-fabric/conformance/04-validation-behavior/`;
4. preserve **Canonicalize what is equivalent. Reject what is not valid.**
5. preserve exact acceptance of canonical valid input;
6. preserve normalization of valid noncanonical representation only where the Specification permits it;
7. preserve rejection of malformed structure;
8. preserve rejection of references outside the canonical Survey Domain;
9. preserve rejection of impossible precision expressions;
10. preserve deterministic failure for ambiguity unless an exact normalization rule exists;
11. preserve the separation between approximate/estimated values and authoritative canonical Survey truth;
12. preserve detectable precision loss;
13. preserve the rule that normalization must preserve place exactly;
14. preserve implementation-independent validation classification;
15. preserve the future requirement for deterministic failure classes;
16. preserve the prohibition on hidden repair;
17. preserve the listed Requirements basis Findings;
18. preserve the open status of validation codes, error taxonomy, parser behavior, version mismatch handling, recoverability classification, diagnostics, and the eventual Reference Vector corpus;
19. preserve the Architectural Boundary exactly as stated;
20. preserve `index,follow` unless the publication model is intentionally revised;
21. keep canonical, Open Graph, description, theme-color, favicon, framework, and navigation references aligned with the page;
22. do not infer intended spatial meaning from malformed input;
23. do not reinterpret out-of-domain references as Exterior or another spatial category;
24. do not silently repair invalid input through snapping, rounding, truncation, coercion, inferred defaults, or guessed intent;
25. do not allow Validation to manufacture canonical truth or create authority over the governing Specification.

---

## Status

**Foundational Survey Fabric**

**Conformance**

**Section 04 — Validation Behavior**

**Canonical Input Classification**

**Formal Validation Codes and Error Taxonomy Remain Open**

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
