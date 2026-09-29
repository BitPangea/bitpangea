# Exactness Requirements

## Foundational Survey Fabric · Conformance Section 05

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 05 — Exactness Requirements  
**Scope:** Canonical Precision and Determinism  
**Status:** Integrated Specification Core Reflected  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 05 — Exactness Requirements** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The conformance rules that prevent tolerance, hidden approximation, silent snapping, and mutable implementation state from altering canonical Survey truth.**

Its governing principle remains:

> **Exact for truth. Approximate for experience.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/05-exactness-requirements/README.md
```

---

## Integration Standing

The original Exactness Requirements page correctly established the governing discipline against tolerance, approximation, hidden state, snapping, and undetected precision loss.

The integrated Specification now provides enough exact candidate mathematics to make those requirements executable across the solved core:

```text
CRPC
canonical frame
Point
Segment
SCPE
exact predicates
normalization
ECEM
FSF-CJSON-1.0
```

Exactness is therefore no longer only a principle.

It can now be directly tested.

---

## Exact Canonical Equality

Canonical equality shall not depend on:

- epsilon;
- tolerance;
- display precision;
- floating “closeness”;
- device precision;
- implementation-specific rounding.

Equality is governed by exact Specification mathematics.

---

## Exact CRPC Arithmetic

CRPC coordinate truth is rational and exact.

Conformance should test:

```text
reduction
equality
ordering
sign
cross-multiplied comparison
canonical zero
finite integer representation
```

Approximate machine numerics may assist implementation.

They do not define canonical coordinate truth.

---

## Exact Spatial Predicates

The solved predicate profile includes exact behavior for:

```text
Point equality
Point ordering
orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
polygon validity
connectedness
containment
geometric equivalence
```

No epsilon geometry is permitted.

---

## No Silent Snapping

Canonical place may not be silently moved to:

- nearby grid coordinates;
- preferred increments;
- render pixels;
- subdivision boundaries;
- nearby vertices;
- implementation-specific “clean” coordinates.

Snapping can exist only as an explicitly separate noncanonical or higher-layer operation.

---

## Hidden-State Independence

Authoritative output depends only on:

```text
explicit canonical input
+
governing Specification profile
```

It shall not depend on:

- cache history;
- database order;
- random state;
- user identity;
- ownership;
- session state;
- storage order;
- process history;
- locale;
- wall-clock time.

---

## Exact Geometry Normalization

Current canonical normalization includes:

### CRPC

Reduced exact rational form.

### Segment

Lexicographically ordered endpoints.

### SCPE

```text
normalize CRPC vertices
remove exact redundant collinear middle vertices
enforce counterclockwise traversal
choose lexicographically least start vertex
omit repeated terminal closure vertex
```

Required invariants:

```text
N(N(G)) = N(G)
geom(N(G)) = geom(G)
```

---

## Exact Polygon Area

SCPE polygon area is part of the solved exact profile.

Exact rational coordinate arithmetic supports deterministic exact area through the selected polygon-area mathematics.

This is eligible for direct Conformance proof.

---

## Measurement Open-Gate Boundary

Not all measurement mathematics are closed.

Still open:

```text
general exact straight-line distance scalar
general path-length scalar
general boundary-length scalar
```

An implementation producing a floating answer does not close those questions.

Conformance shall not call an approximation canonical where the Specification has not yet defined the exact scalar model.

---

## Precision Integrity

Canonical mathematical precision must remain distinguishable from:

```text
storage precision
transmission precision
display precision
rendering precision
```

Lossy conversion must be detectable.

It must not masquerade as exact equivalence.

---

## ECEM Exactness

Under ECEM:

> **A canonical Point is already exact.**

A Point is not:

- approximate;
- coarse;
- fine;
- parent;
- child;
- uncertainty-based;
- zoom-relative.

Compatible future representational growth may add new exact values.

It may not move established place.

---

## Finite Exact Representation

The solved canonical profile remains finitely representable.

Current finite objects include:

```text
CRPC
Point
Segment
SCPE
FSF-CJSON-1.0 expressions
```

Canonical meaning shall not depend on indefinite numerical convergence.

---

## Deterministic Termination

Required core operations must terminate for valid finite inputs.

This includes:

```text
parse
validate
evaluate exact predicate
normalize
serialize
```

Exactness must be reachable.

---

## Exact Canonical Serialization

For supported normalized geometry:

```text
FSF-CJSON-1.0
```

requires one deterministic canonical byte sequence.

Conformance must test:

- exact structured CRPC encoding;
- canonical integer strings;
- deterministic object-key order;
- semantic array order;
- Unicode normalization where required;
- duplicate-key rejection;
- governed unknown-field handling;
- exact byte identity.

Where one canonical serialization is required:

```text
same canonical object
    -> same bytes
```

---

## Approximation Boundary

Approximation may support:

- rendering;
- visualization;
- UI;
- interaction;
- simulation;
- search;
- indexing;
- engineering convenience.

It shall not establish authoritative Survey truth.

---

## Internal Approximation Discipline

An implementation may internally optimize canonical computation.

But the burden is:

```text
optimized method
    ↓
provably same exact result
```

If exact preservation cannot be demonstrated, the optimized method cannot establish canonical output.

Detailed optimization-proof rules remain future Conformance work.

---

## Cross-Implementation Exactness

Independent implementations must agree exactly on the current solved profile.

This includes:

```text
validity
normalized geometry
predicate result
ECEM meaning
exact area
canonical FSF-CJSON bytes
```

Exactness belongs to the Specification, not to one preferred software implementation.

---

## Reference Vector Exactness Proof

Reference Vectors should contain exact expected outcomes.

Current candidates include:

```text
CRPC normalization vectors
exact orientation vectors
segment-intersection vectors
Point-in-SCPE vectors
SCPE normalization vectors
exact polygon-area vectors
ECEM semantic vectors
lossy-conversion rejection vectors
FSF-CJSON canonical-byte vectors
```

Where exact truth exists, expected results should not be stored merely as approximate decimal targets.

---

## Exactness Failure

Examples of Conformance failure include:

```text
epsilon-based canonical equality
incorrect rational reduction
silent snapping
approximate predicate result
hidden-state-dependent output
undetected lossy conversion
non-idempotent normalization
semantic drift during normalization
incorrect canonical bytes
```

Such behavior may exist outside canonical FSF truth.

It is not conforming canonical output.

---

## Requirements Basis

This section remains derived especially from:

```text
#24
#30
#53–#57
#66
#72–#75
#78–#83
```

These Findings remain authoritative within the Requirements Framework.

Conformance applies them.

It does not replace them.

---

## What Changed From the Previous Page

The previous page already correctly established:

- no tolerance-based canonical equality;
- exact predicates;
- no silent snapping;
- hidden-state independence;
- exact measurement obligation;
- exact canonicalization;
- precision integrity;
- finite exact representation;
- deterministic termination;
- approximation boundary;
- cross-implementation exactness;
- approximate canonical output as failure.

Those principles remain.

The main change is that the integrated Specification now makes much of that exactness directly testable.

Previously:

```text
exactness discipline
    -> required
formal proof surface
    -> mostly future
```

Now:

```text
solved core exactness
    -> executable

open mathematics
    -> excluded from canonical exactness claims
```

---

## Still Open

The remaining Conformance design work includes:

```text
general distance/path/boundary-length exact scalar proof
arbitrary rotation exactness proof
formal optimized-algorithm proof obligations
complete exactness Reference Vector inventory
presentation-layer approximation thresholds if ever standardized
detailed exactness failure identifiers
exactness rules for future Specification extensions
```

---

## Architectural Boundary

> **Approximation may assist an implementation or higher Architecture domain. It may not become authoritative spatial truth, silently move place, or weaken the exact rules of the governing Specification.**

This remains the defining boundary of Conformance Section 05.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 05 — EXACTNESS REQUIREMENTS

CRPC EXACTNESS — EXECUTABLE
CORE PREDICATES — EXACT
NO SILENT SNAPPING — REQUIRED
HIDDEN-STATE INDEPENDENCE — REQUIRED
GEOMETRY NORMALIZATION — EXACT
SCPE AREA — EXACT
ECEM POINT MEANING — EXACT
FINITE REPRESENTATION — REQUIRED
DETERMINISTIC TERMINATION — REQUIRED
FSF-CJSON-1.0 CANONICAL BYTES — EXACT
CROSS-IMPLEMENTATION EXACTNESS — REQUIRED

GENERAL DISTANCE / PATH-LENGTH SCALAR — OPEN
ARBITRARY ROTATION EXACTNESS — OPEN
OPTIMIZATION PROOF RULES — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
