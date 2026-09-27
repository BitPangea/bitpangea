# Spatial Ground — Independent Implementation Comparison

**Primary Implementation:** SG-IMPL-A-PY-1.0  
**Independent Implementation:** SG-IMPL-B-JS-1.0  
**Reference Vector Corpus:** SG-RV-1.0  
**Dependency Profile:** FSF-TEST-1.0  
**Status:** PASS

## Result Summary

| Metric | Implementation A | Implementation B |
|---|---:|---:|
| Total vectors | 24 | 24 |
| Passed | 23 | 23 |
| Failed | 0 | 0 |
| Blocked by FSF | 1 | 1 |

## Cross-Implementation Comparison

- Executable result mismatches: **0**
- Both implementations preserve `SG-RV-024` as `BLOCKED_BY_FSF`.
- Both implementations reproduce the same membership, canonicalization, invalidity, reconstruction, and ordering results across SG-RV-1.0.

## Independence

Implementation B was written in a different language and uses:

- a separate strict JSON parser;
- a separately written canonical serializer;
- a separately written expression normalizer;
- a separately written evaluator;
- a separately written FSF-TEST adapter.

It does not import or call Implementation A.

## Judgment

**SG-C4 INDEPENDENT IMPLEMENTATION — PASS AGAINST SG-RV-1.0 / FSF-TEST-1.0**

The current Spatial Ground formal model and executable Ground semantics are independently reproducible.

The remaining `SG-RV-024` issue is not an implementation disagreement. It is a deliberately preserved upstream FSF boundary/set-class question.

## Consequence

The project may now proceed to:

1. adversarial testing;
2. reconstruction testing;
3. resolution of any issue exposed by those tests;
4. stewardship / succession instruments.

The actual BitPangea World-space instance remains unselected and unadopted.
