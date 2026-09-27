#!/usr/bin/env python3
"""
BitPangea Spatial Ground — Implementation A
SG-IMPL-A-PY-1.0

Purpose:
- Implements the selected Canonical Membership Predicate Model (CMPM)
- Supports SG-CJSON 1.0 core expression operators
- Uses an injected FSF adapter rather than redefining FSF mathematics
- Executes the synthetic FSF-TEST-1.0 Reference Vector profile

This is NOT the canonical World-space instance.
This is NOT a substitute for the Spatial Ground Specification.
"""

from __future__ import annotations

from dataclasses import dataclass
import json
import unicodedata
from typing import Any, Dict, Iterable, List, Mapping, Sequence, Set, Tuple


WORLD = "WORLD"
NON_WORLD = "NON_WORLD"
INVALID_INPUT = "INVALID_INPUT"
INVALID_DEFINITION = "INVALID_DEFINITION"
BLOCKED_BY_FSF = "BLOCKED_BY_FSF"


class SpatialGroundError(Exception):
    pass


class InvalidDefinition(SpatialGroundError):
    pass


class InvalidInput(SpatialGroundError):
    pass


class BlockedByFSF(SpatialGroundError):
    pass


class DuplicateKeyError(InvalidDefinition):
    pass


def _reject_duplicate_pairs(pairs):
    out = {}
    for k, v in pairs:
        if k in out:
            raise DuplicateKeyError(f"duplicate key: {k}")
        out[k] = v
    return out


def parse_json_strict(text: str) -> Any:
    """Parse JSON while rejecting duplicate keys and all JSON numbers."""
    def reject_number(value):
        raise InvalidDefinition(f"JSON numeric values are prohibited: {value}")

    try:
        return json.loads(
            text,
            object_pairs_hook=_reject_duplicate_pairs,
            parse_int=reject_number,
            parse_float=reject_number,
            parse_constant=reject_number,
        )
    except DuplicateKeyError:
        raise
    except InvalidDefinition:
        raise
    except Exception as exc:
        raise InvalidDefinition(str(exc)) from exc


def _nfc(value: str) -> str:
    return unicodedata.normalize("NFC", value)


def _canonical_json_bytes(obj: Any) -> bytes:
    """Canonical JSON bytes: NFC strings, sorted keys, no insignificant whitespace."""
    def normalize(v):
        if isinstance(v, str):
            return _nfc(v)
        if isinstance(v, bool) or v is None:
            return v
        if isinstance(v, (int, float)):
            raise InvalidDefinition("JSON numeric values are prohibited")
        if isinstance(v, list):
            return [normalize(x) for x in v]
        if isinstance(v, dict):
            return {_nfc(str(k)): normalize(val) for k, val in v.items()}
        raise InvalidDefinition(f"unsupported JSON type: {type(v).__name__}")

    n = normalize(obj)
    return json.dumps(
        n, ensure_ascii=False, sort_keys=True, separators=(",", ":")
    ).encode("utf-8")


@dataclass(frozen=True)
class FSFTestAdapter:
    valid_locations: Set[str]
    invalid_locations: Set[str]
    sets: Mapping[str, Set[str]]
    equivalent_aliases: Mapping[str, str]

    @classmethod
    def from_profile(cls, profile: Mapping[str, Any]) -> "FSFTestAdapter":
        sets = {k: set(v) for k, v in profile["sets"].items()}
        aliases = {}
        for pair in profile.get("equivalence", []):
            if len(pair) == 2:
                aliases[pair[1]] = pair[0]
        return cls(
            valid_locations=set(profile["valid_locations"]),
            invalid_locations=set(profile["invalid_locations"]),
            sets=sets,
            equivalent_aliases=aliases,
        )

    def validate_location(self, x: str) -> str:
        if x not in self.valid_locations:
            raise InvalidInput(x)
        return x

    def canonical_leaf_name(self, name: str) -> str:
        name = self.equivalent_aliases.get(name, name)
        if name not in self.sets:
            raise InvalidDefinition(f"unresolved FSF leaf: {name}")
        return name

    def contains(self, leaf_name: str, x: str) -> bool:
        x = self.validate_location(x)
        leaf = self.canonical_leaf_name(leaf_name)
        return x in self.sets[leaf]


ALLOWED_TOP_LEVEL = {
    "type", "format", "model", "specification", "fsf", "limit_convention", "expression"
}


def normalize_expression(expr: Mapping[str, Any], fsf: FSFTestAdapter) -> Mapping[str, Any]:
    if not isinstance(expr, dict):
        raise InvalidDefinition("expression must be an object")
    op = expr.get("op")

    if op == "fsf":
        if set(expr) != {"op", "value"}:
            raise InvalidDefinition("invalid fsf leaf fields")
        if not isinstance(expr["value"], str) or not expr["value"]:
            raise InvalidDefinition("fsf value must be a nonempty string")
        return {"op": "fsf", "value": fsf.canonical_leaf_name(_nfc(expr["value"]))}

    if op in ("union", "intersection"):
        if set(expr) != {"op", "args"}:
            raise InvalidDefinition(f"invalid {op} fields")
        args = expr["args"]
        if not isinstance(args, list) or len(args) < 2:
            raise InvalidDefinition(f"{op} requires at least two children")

        flattened = []
        for child in args:
            n = normalize_expression(child, fsf)
            if n.get("op") == op:
                flattened.extend(n["args"])
            else:
                flattened.append(n)

        unique = {}
        for child in flattened:
            key = _canonical_json_bytes(child)
            unique[key] = child
        ordered = [unique[k] for k in sorted(unique)]
        if len(ordered) < 1:
            raise InvalidDefinition(f"{op} normalized to empty")
        if len(ordered) == 1:
            return ordered[0]
        return {"op": op, "args": ordered}

    if op == "difference":
        if set(expr) != {"op", "base", "subtract"}:
            raise InvalidDefinition("invalid difference fields")
        return {
            "op": "difference",
            "base": normalize_expression(expr["base"], fsf),
            "subtract": normalize_expression(expr["subtract"], fsf),
        }

    raise InvalidDefinition(f"unsupported operator: {op}")


def validate_definition(doc: Mapping[str, Any], fsf: FSFTestAdapter) -> Mapping[str, Any]:
    if not isinstance(doc, dict):
        raise InvalidDefinition("definition must be an object")
    if set(doc) != ALLOWED_TOP_LEVEL:
        unknown = set(doc) - ALLOWED_TOP_LEVEL
        missing = ALLOWED_TOP_LEVEL - set(doc)
        raise InvalidDefinition(f"top-level fields invalid; unknown={sorted(unknown)} missing={sorted(missing)}")
    if doc["type"] != "bitpangea.spatial-ground.definition":
        raise InvalidDefinition("wrong type")
    if doc["format"] != "SG-CJSON-1.0":
        raise InvalidDefinition("wrong format")
    if doc["model"] != "CMPM-1.0":
        raise InvalidDefinition("wrong model")
    if doc["limit_convention"] != "closed-world-space":
        raise InvalidDefinition("unsupported limit convention")
    if not isinstance(doc["specification"], str) or not doc["specification"]:
        raise InvalidDefinition("missing specification identity")
    if not isinstance(doc["fsf"], dict) or set(doc["fsf"]) != {"specification", "lineage"}:
        raise InvalidDefinition("invalid fsf dependency object")
    if not all(isinstance(doc["fsf"][k], str) and doc["fsf"][k] for k in ("specification","lineage")):
        raise InvalidDefinition("invalid fsf dependency identity")

    out = dict(doc)
    out["expression"] = normalize_expression(doc["expression"], fsf)
    return out


def canonicalize_definition(doc: Mapping[str, Any], fsf: FSFTestAdapter) -> bytes:
    return _canonical_json_bytes(validate_definition(doc, fsf))


def eval_expression(expr: Mapping[str, Any], x: str, fsf: FSFTestAdapter) -> bool:
    op = expr["op"]
    if op == "fsf":
        return fsf.contains(expr["value"], x)
    if op == "union":
        return any(eval_expression(c, x, fsf) for c in expr["args"])
    if op == "intersection":
        return all(eval_expression(c, x, fsf) for c in expr["args"])
    if op == "difference":
        return eval_expression(expr["base"], x, fsf) and not eval_expression(expr["subtract"], x, fsf)
    raise InvalidDefinition(f"unsupported operator: {op}")


def membership(doc: Mapping[str, Any], x: str, fsf: FSFTestAdapter) -> str:
    try:
        fsf.validate_location(x)
        n = validate_definition(doc, fsf)
        return WORLD if eval_expression(n["expression"], x, fsf) else NON_WORLD
    except InvalidInput:
        return INVALID_INPUT
    except InvalidDefinition:
        return INVALID_DEFINITION


def make_definition(expr: Mapping[str, Any]) -> Mapping[str, Any]:
    return {
        "type": "bitpangea.spatial-ground.definition",
        "format": "SG-CJSON-1.0",
        "model": "CMPM-1.0",
        "specification": "SG-SPEC-1.0",
        "fsf": {"specification": "FSF-TEST-1.0", "lineage": "FSF-TEST"},
        "limit_convention": "closed-world-space",
        "expression": expr,
    }


def shorthand_expr(spec: Any) -> Mapping[str, Any]:
    if isinstance(spec, str):
        return {"op": "fsf", "value": spec}
    if not isinstance(spec, dict):
        raise InvalidDefinition("bad shorthand expression")
    op = spec.get("op")
    if op in ("union", "intersection"):
        return {"op": op, "args": [shorthand_expr(x) for x in spec["args"]]}
    if op == "difference":
        return {"op": "difference", "base": shorthand_expr(spec["base"]), "subtract": shorthand_expr(spec["subtract"])}
    if op == "fsf":
        return {"op": "fsf", "value": spec["value"]}
    raise InvalidDefinition(f"bad shorthand op: {op}")


def definition_from_shorthand(spec: Any) -> Mapping[str, Any]:
    return make_definition(shorthand_expr(spec))
