# GSI Requirements R1 — Traceability and Completeness Review

**Date:** November 26, 2026
**Status:** Internal review — independent review pending
**Baseline:** [Requirements R1](../requirements/GSI_Requirements_DRAFT.md), commit 7ef6b24cfd82931424e909f0202370d457a4660f

## Forward trace

Source keys: R = [responsibility](GSI_Architectural_Responsibility_Model.md); O = [ontology](GSI_Minimum_Spatial_Ontology.md); V = [vocabulary](GSI_Spatial_Relationship_Vocabulary.md); P = [persistence](GSI_Authority_Computation_Persistence.md); E = [evaluation](GSI_Evaluation_Contract.md); M = [mathematical dependencies](GSI_Mathematical_Dependency_Assessment.md). SG = adopted Spatial Ground Specification; FSF = canonical FSF adoption act and core operations.

| Requirement | Basis | Review |
|---|---|---|
| CORE-01 | R, O | Purpose aligned |
| CORE-02 | R, M, FSF, SG | Dependency fidelity |
| CORE-03 | M, FSF | Exactness |
| CORE-04 | E, P, SG | Determinism |
| CORE-05 | O, E, FSF | Representation independence |
| CORE-06 | M, SG | Finite evaluation obligation; proof pending |
| AUTH-01 | R, SG | Constitutional restraint; direct constitutional source review pending |
| AUTH-02 | O, V, SG | Membership distinction |
| AUTH-03 | R, O | Entity authority |
| AUTH-04 | V | Relationship authority |
| AUTH-05 | M, FSF | Reserved capabilities |
| AUTH-06 | M | Exact dependency qualification pending |
| EVAL-01 | O, V, E | Scope definition |
| EVAL-02 | E, SG | Validity |
| EVAL-03 | E, SG | Outcome distinction |
| EVAL-04 | V, M, SG | Boundary fidelity |
| EVAL-05 | E, P | Reproduction context |
| EVAL-06 | SG, M | Synthetic context isolation |
| PRES-01 | P, SG | Derived artifact discipline |
| PRES-02 | P | Justified persistence |
| PRES-03 | P, FSF | Semantic succession |
| CONF-01 | E, M, SG | Independent agreement |
| CONF-02 | SG | Specification precedence |

## Reverse trace

R: CORE-01/02, AUTH-01/03/04/05. O: CORE-05, AUTH-02/03, EVAL-01/03. V: AUTH-04, EVAL-01/04. P: EVAL-05, PRES-01/02/03. E: CORE-04, EVAL-01/02/03/05, CONF-01. M: CORE-03/06, AUTH-05/06, EVAL-04/06, CONF-01.

## Completeness disposition

All 23 draft requirements have a preliminary rationale; all six review records are represented. This is conceptual traceability, not clause-level constitutional verification or mathematical proof. Explicit type-pair coverage, exact algorithms, output contracts, error precedence, hidden-state independence tests and historical reconstruction tests remain Specification/Conformance work. Independent review should assess whether hidden-state independence and semantic succession require stronger standalone requirements. Direct constitutional source verification and independent architectural review remain prerequisites to recommending adoption.

No requirement is adopted or changed by this record.
