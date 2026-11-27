# General Spatial Interpretation — Minimum Spatial Ontology

**BitPangea · The Atlas · General Spatial Interpretation**
**Date:** November 26, 2026
**Status:** Working proposal — not adopted

## Governing principle

Shared spatial meaning does not require shared entity identity.

## Minimum conceptual model

Distinguish four concepts without yet selecting a record schema:

- Spatial expression: valid FSF geometry, initially Point, Segment or Simple Closed Polygonal Extent (SCPE).
- Subject: an optional externally governed entity to which an expression refers. GSI does not establish its identity, existence or lifecycle.
- Interpretation context: the declared FSF and SG specifications and applicable authoritative Ground instance.
- Interpretation result: a typed statement about the expression under that context, not a new entity or territorial assignment.

An expression may be interpreted without an entity identifier. Multiple subjects may reference equivalent geometry without becoming identical. A subject's association with geometry must be supplied by its responsible authority, not inferred by GSI.

## Initial scope

Consume FSF-SPEC-1.0, SG-SPEC-1.0 and SG-WORLD-SPACE-INSTANCE-0001. Do not introduce new primitive geometry, coordinates, measurement units or Ground membership states.

Points receive inherited WORLD or NON_WORLD membership. Nonempty supported extents may be classified provisionally as wholly World, wholly non-World or mixed, based on membership of all locations in the expression. Boundary semantics are inherited. These classifications are candidate interpretation semantics, not new Ground values. Exact algorithms and proof obligations remain for Specification; vertex sampling alone is insufficient for concave geometry.

Invalid, unresolved and unsupported inputs or operations must remain distinguishable from successful negative results. Empty or composite expressions are not admitted by this initial profile unless separately governed.

## Authority boundary

GSI may describe geometric coincidence, incidence, containment and other supported relationships. It must not infer Parcel identity, constitutional Parcel Adjacency, ownership, eligibility, jurisdiction or territorial allocation from those results alone.

Regions, Clusters, Parcels, infrastructure and other entity classes remain outside this minimum ontology as entity types. Their responsible domains may consume GSI interpretations without adopting a universal entity schema.

## Open questions

- Exact relation vocabulary and result types.
- Supported input combinations and boundary cases.
- Whether any interpretation records require authoritative persistence rather than reproducible computation.
- Conformance and dependency gaps.

No new constitutional truth, canonical geometry, entity registry or specification is adopted by this record.

## Basis

- [Architectural responsibility model](GSI_Architectural_Responsibility_Model.md)
- [FSF canonical adoption act](../../foundational-survey-fabric/review/consolidation/FSF_STEP11_INSTITUTIONAL_ADOPTION_2026-10-05/FSF_SPEC_1_0_Canonical_Adoption_Act_2026-10-05.md)
- [Spatial Ground Specification](../../spatial-ground/specification/spatial-ground-specification.md)

Reference first. Interpret above.
