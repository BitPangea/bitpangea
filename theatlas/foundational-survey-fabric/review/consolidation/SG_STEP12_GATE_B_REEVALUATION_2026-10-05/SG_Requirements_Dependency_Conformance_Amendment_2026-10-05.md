# Spatial Ground Requirements — Dependency Conformance Amendment Act

**BitPangea · The Atlas · Spatial Ground**  
**Creator Period:** Day #131 · October 5, 2026  
**Document Type:** Requirements Amendment Act  
**Status:** COMPLETE — APPROVED

---

## Purpose

This amendment reconciles the adopted Spatial Ground Requirements with the now-canonical Foundational Survey Fabric Specification:

```text
FSF-SPEC-1.0
```

The amendment is narrow.

It does not redesign Spatial Ground.

It corrects one previously permissible reading that is no longer compatible with the adopted lower-layer Survey placement rule.

---

## Upstream Rule Now Governing

FSF-SPEC-1.0 establishes:

```text
Survey Domain
D = [-1,000,000,+1,000,000]²
```

and the governed production placement envelope:

```text
P = [-500,000,+500,000]²
```

with:

```text
World-space ⊂ interior(P) ⊂ interior(D)
```

Spatial Ground consumes that lower-layer rule by reference.

It does not possess authority to override it.

---

## Requirement Reconciled

### Prior SG-CORE-02 sentence

```text
World-space MAY coincide in extent with the entire Survey Domain, but World-space MUST NOT be defined merely as “the Survey Domain.”
```

That sentence was valid only while the final Survey capacity and production placement relationship remained unresolved.

It is no longer compatible with FSF-SPEC-1.0.

### Amended SG-CORE-02 sentence

```text
World-space MUST remain within the governing production placement envelope supplied by the adopted Foundational Survey Fabric Specification or compatible lineage. Under FSF-SPEC-1.0, World-space MUST lie strictly inside P = [-500,000,+500,000]² and therefore MUST NOT coincide in extent with the entire Survey Domain.
```

The following existing rule remains unchanged:

```text
World-space MUST NOT be defined merely as “the Survey Domain.”
```

---

## Effect

This amendment:

- preserves Survey containment;
- preserves World-space / Survey Domain non-identity;
- preserves non-World-space as the complement under the membership definition;
- preserves Spatial Ground dependence on FSF rather than duplicating it;
- removes a stale permissive allowance superseded by lower-layer canonical mathematics.

It does not:

- select the canonical World-space instance;
- change constitutional Extent;
- create a new membership model;
- alter CMPM;
- alter SG-CJSON 1.0;
- alter the canon-form policy;
- add higher-layer meaning.

---

## Standing

```text
SPATIAL GROUND REQUIREMENTS — ADOPTED
DEPENDENCY CONFORMANCE AMENDMENT — ADOPTED
SG-CORE-02 — RECONCILED TO FSF-SPEC-1.0
```

---

## Governing Principle

> **A higher layer may narrow itself to obey canonical lower-layer truth. It may not preserve an obsolete permission that the lower layer no longer allows.**
