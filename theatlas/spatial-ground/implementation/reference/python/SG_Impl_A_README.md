# Spatial Ground Implementation A — Python

**Implementation ID:** `SG-IMPL-A-PY-1.0`  
**Status:** Prototype / Conformance Implementation  
**Role:** First executable implementation of Spatial Ground CMPM and SG-CJSON 1.0 core semantics.

This implementation deliberately separates Spatial Ground from FSF mathematics through an adapter interface. The included adapter implements only the synthetic `FSF-TEST-1.0` profile from `SG-RV-1.0`.

It is **not** the canonical World-space instance and **not** the independent SG-C4 implementation.

## Files

- `spatial_ground_impl_a.py` — parser, canonicalizer, validator, evaluator, FSF adapter
- `run_sg_rv_1_0.py` — Reference Vector harness
- `spatial-ground-reference-vectors-1.0.json` — SG-RV-1.0 corpus
- `SG_Impl_A_Conformance_Report.json` — generated execution report

## Run

```bash
python run_sg_rv_1_0.py
```

## Expected standing

All executable SG-RV-1.0 vectors should pass.

`SG-RV-024` remains `BLOCKED_BY_FSF` by design and must not be force-resolved by implementation code.
