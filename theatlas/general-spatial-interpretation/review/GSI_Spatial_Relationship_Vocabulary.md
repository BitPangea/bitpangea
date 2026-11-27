# General Spatial Interpretation — Spatial Relationship Vocabulary

**Date:** November 26, 2026
**Status:** Working proposal — not adopted

## Candidate vocabulary

For nonempty supported spatial expressions A and B, interpreted as sets of locations under the declared FSF and SG context:

- Equivalence: A and B denote the same set.
- Disjointness: A and B share no location.
- Intersection: A and B share at least one location. This is a predicate, not a promise of a representable intersection geometry.
- Containment: every location of A belongs to B; equality is permitted. Direction matters.
- Boundary contact: an expression intersects the governed geometric boundary of another expression, where boundary semantics are defined for that input type. This does not imply disjoint interiors or shared boundary length.
- World participation: wholly World, wholly non-World or mixed, determined against the adopted Ground membership predicate. Point membership retains the inherited WORLD/NON_WORLD vocabulary.

These are conceptual definitions for inquiry, not adopted algorithms or claims of universal operation support. Predicates need not be mutually exclusive. Equivalence implies mutual containment; intersection and disjointness are complements for valid supported inputs. Unsupported or invalid evaluations are not false predicates.

## Boundaries

No geometric result independently establishes entity identity, constitutional Parcel Adjacency, Contiguity, Distance or Direction, territorial allocation, eligibility or rights. Preserve the authority of the Foundation, Codex and responsible higher domains. Do not invent boundary semantics for Points or Segments, exact distance scalar closure, composite output geometry, or new FSF operations. Defer richer relations until a demonstrated requirement exists.

## Verification candidates

Test equivalent representations, reversed containment, disjoint expressions, point contact, shared segment contact, crossing segments, overlapping extents, coincident extents, concave containment, Ground boundary inclusion, mixed participation, invalid inputs and unsupported combinations. Exact algorithms, supported type matrix and deterministic error semantics remain open.

## Basis

- [Responsibility model](GSI_Architectural_Responsibility_Model.md)
- [Minimum ontology](GSI_Minimum_Spatial_Ontology.md)
- [FSF adoption act](../../foundational-survey-fabric/review/consolidation/FSF_STEP11_INSTITUTIONAL_ADOPTION_2026-10-05/FSF_SPEC_1_0_Canonical_Adoption_Act_2026-10-05.md)
- [Spatial Ground Specification](../../spatial-ground/specification/spatial-ground-specification.md)

Reference first. Interpret above.
