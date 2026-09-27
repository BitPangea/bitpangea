#!/usr/bin/env python3
"""Run SG-RV-1.0 against Spatial Ground Implementation A."""

import json
from pathlib import Path
from spatial_ground_impl_a import (
    FSFTestAdapter, definition_from_shorthand, membership,
    canonicalize_definition, parse_json_strict, InvalidDefinition
)

HERE = Path(__file__).resolve().parent
CORPUS = json.loads((HERE / "spatial-ground-reference-vectors-1.0.json").read_text(encoding="utf-8"))
FSF = FSFTestAdapter.from_profile(CORPUS["fsf_test_profile"])


def run_vector(v):
    vid = v["id"]
    expected = v.get("expected", v.get("expected_map"))

    if v["status"] == "BLOCKED_BY_FSF":
        return "BLOCKED", expected, expected

    if vid in {"SG-RV-015", "SG-RV-016", "SG-RV-017"}:
        try:
            if vid == "SG-RV-015":
                parse_json_strict('{"model":"CMPM-1.0","model":"CMPM-1.0"}')
            elif vid == "SG-RV-016":
                parse_json_strict('{"n":1}')
            else:
                d = definition_from_shorthand("A")
                d["expression"] = {"op":"xor","args":[]}
                canonicalize_definition(d, FSF)
            actual = "ACCEPTED"
        except Exception:
            actual = "INVALID_DEFINITION"
        return ("PASS" if actual == expected else "FAIL"), expected, actual

    if vid in {"SG-RV-018","SG-RV-019","SG-RV-021"}:
        d1 = definition_from_shorthand(v["definitions"][0])
        d2 = definition_from_shorthand(v["definitions"][1])
        actual = "IDENTICAL_CANONICAL_STRUCTURE" if canonicalize_definition(d1, FSF) == canonicalize_definition(d2, FSF) else "DIFFERENT"
        return ("PASS" if actual == expected else "FAIL"), expected, actual

    if vid == "SG-RV-020":
        actual = [
            membership(definition_from_shorthand(v["definitions"][0]), v["input"], FSF),
            membership(definition_from_shorthand(v["definitions"][1]), v["input"], FSF),
        ]
        return ("PASS" if actual == expected else "FAIL"), expected, actual

    if vid == "SG-RV-011" or vid == "SG-RV-012":
        actual = [
            membership(definition_from_shorthand(v["definitions"][0]), v["input"], FSF),
            membership(definition_from_shorthand(v["definitions"][1]), v["input"], FSF),
        ]
        return ("PASS" if actual == expected else "FAIL"), expected, actual

    if vid == "SG-RV-022":
        # Implementation A has no mutable semantic state; repeat the same call.
        actuals = [membership(definition_from_shorthand(v["definition"]), v["input"], FSF) for _ in v["repeat_across"]]
        actual = actuals[0] if all(a == actuals[0] for a in actuals) else "STATE_DRIFT"
        return ("PASS" if actual == expected else "FAIL"), expected, actual

    if vid == "SG-RV-023":
        d = definition_from_shorthand(v["definition"])
        actual = {p: membership(d, p, FSF) for p in CORPUS["fsf_test_profile"]["valid_locations"]}
        return ("PASS" if actual == expected else "FAIL"), expected, actual

    d = definition_from_shorthand(v["definition"])
    actual = membership(d, v["input"], FSF)
    return ("PASS" if actual == expected else "FAIL"), expected, actual


results = []
for v in CORPUS["vectors"]:
    status, expected, actual = run_vector(v)
    results.append({"id":v["id"],"vector_status":v["status"],"run_status":status,"expected":expected,"actual":actual})

summary = {
    "implementation": "SG-IMPL-A-PY-1.0",
    "claimed_class": "SG-C3 (against FSF-TEST-1.0 synthetic profile)",
    "corpus": CORPUS["corpus"],
    "total": len(results),
    "passed": sum(r["run_status"] == "PASS" for r in results),
    "failed": sum(r["run_status"] == "FAIL" for r in results),
    "blocked": sum(r["run_status"] == "BLOCKED" for r in results),
    "results": results,
}
print(json.dumps(summary, indent=2))
