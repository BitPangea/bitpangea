# General Spatial Interpretation — Evaluation Contract

**Date:** November 26, 2026
**Status:** Working proposal — not adopted

## Principle

Failure to establish a spatial fact does not establish its opposite.

## Candidate input contract

An evaluation identifies the requested operation, exact FSF expressions or resolvable authoritative references, governing FSF and SG profiles, applicable Ground instance, and applicable GSI rule version when adopted. External subject identity and geometry association remain the responsibility of their governing domain.

Validate references, governing context, expression validity and supported operation/type combinations before returning an interpretation. Exact validation ordering and error precedence remain Specification questions.

## Candidate outcome classes

- EVALUATED: successful typed result, including false predicates and negative classifications.
- INVALID_INPUT: expression or request violates applicable input rules.
- UNRESOLVED_REFERENCE: required authoritative input cannot be resolved.
- UNSUPPORTED_OPERATION: requested operation or type combination is outside the governed profile.
- CONTEXT_MISMATCH: declared governing versions or authorities are incompatible.
- EVALUATION_FAILURE: a supported evaluation cannot complete because of an implementation or operational failure.

These names are working labels, not adopted serialization tokens. An operational failure does not alter mathematical truth or establish that a valid supported operation is intrinsically indeterminate. Successful point membership retains exactly WORLD or NON_WORLD; extent participation may be derived as wholly World, wholly non-World or mixed. Error outcomes are not membership values.

## Output contract

Successful results identify the operation, applicable governing context and input meanings or resolvable references. Result types must be explicit. No implicit approximation, snapping, unsupported composite output, or substitution of stale cached results is permitted as a successful exact evaluation. No mandatory wire format, API, database or programming language is selected.

## Verification candidates

Exercise valid positive and negative predicates, invalid geometry, unresolved references, unsupported type pairs, incompatible context, operational failure, equivalent input representations and deterministic repeat evaluation. Verify that no unsuccessful evaluation is converted to false, NON_WORLD or mixed membership. Separate mathematical conformance from operational reliability.

## Basis

- [Responsibility model](GSI_Architectural_Responsibility_Model.md)
- [Minimum ontology](GSI_Minimum_Spatial_Ontology.md)
- [Relationship vocabulary](GSI_Spatial_Relationship_Vocabulary.md)
- [Authority and persistence](GSI_Authority_Computation_Persistence.md)
- [Spatial Ground Specification](../../spatial-ground/specification/spatial-ground-specification.md), sections 3–5.

Reference first. Interpret above.
