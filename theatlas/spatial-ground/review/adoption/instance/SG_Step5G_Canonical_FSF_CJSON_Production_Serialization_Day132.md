# Spatial Ground — Step 5G Canonical FSF-CJSON-1.0 Production Serialization

**BitPangea · The Atlas · Spatial Ground**  
**Creator Period:** Day #132 · October 6, 2026  
**Step:** 5G — Serialize the Normalized Production SCPE as Canonical `FSF-CJSON-1.0` Geometry  
**Status:** COMPLETE — CANONICAL SERIALIZATION PASS

---

## 1. Governing Serialization Rules

`FSF-CJSON-1.0` requires the normalized geometry to be serialized as deterministic compact UTF-8 JSON.

For the current SCPE profile:

```text
type = fsf.scpe
vertices = semantic canonical vertex sequence
```

Each vertex is:

```text
type = fsf.point
x = exact CRPC
y = exact CRPC
```

Each CRPC scalar is represented structurally as:

```json
{"d":"<positive-denominator>","n":"<integer-numerator>"}
```

Canonical output uses:

```text
UTF-8
NFC strings
no BOM
no insignificant whitespace
no JSON numbers for exact coordinates
reduced CRPC values
deterministic lexicographic object-key order
semantic vertex-array order
no repeated terminal closure point
```

---

## 2. Source Geometry

Normalized production SCPE:

```text
SG_World_Production_SCPE_Normalized_01.json
```

SHA-256 of the Step 5E source artifact:

```text
d0c34bc66d880dad8c6aab05c3461799897524d461055d21c2b1284542e16423
```

The source geometry was already validated and normalized under `FSF-SPEC-1.0`.

---

## 3. Canonical Machine Artifact

The canonical machine-readable geometry is:

```text
SG_World_Production_SCPE_01.fsf-cjson.json
```

Its top-level structure is exactly:

```json
{"type":"fsf.scpe","vertices":[...]}
```

No provenance IDs, design-history fields, diagnostics, source vertex IDs, placement metadata, or Spatial Ground semantics are embedded in the canonical FSF geometry object.

Those belong outside FSF geometry serialization.

---

## 4. Exact Serialization Result

```text
geometry type — fsf.scpe
vertex count — 128
coordinate model — structured CRPC
JSON-number coordinates — NONE
repeated terminal closure point — NONE
object-key order — DETERMINISTIC
array order — CANONICAL SCPE ORDER
encoding — UTF-8
BOM — NONE
insignificant whitespace — NONE
NFC — APPLIED
```

Canonical byte length:

```text
10010 bytes
```

---

## 5. Deterministic Round-Trip

The generated canonical bytes were:

```text
parse
→ validate structure
→ reserialize under the same FSF-CJSON-1.0 rules
```

Result:

```text
original canonical bytes = round-trip canonical bytes — PASS
```

The round trip preserved:

```text
128 vertices
exact CRPC numerators
exact CRPC denominators
canonical vertex order
geometry type
byte identity
```

---

## 6. Canonical Key Ordering

The serializer emits:

```text
SCPE object:
type
vertices

Point object:
type
x
y

CRPC object:
d
n
```

This follows deterministic lexicographic object-key order.

The vertex array preserves semantic SCPE order established by Step 5E.

---

## 7. Integrity Evidence

FMD-08 permits cryptographic integrity evidence after canonical serialization while keeping integrity separate from spatial meaning.

For operational traceability, SHA-256 was computed over the exact canonical UTF-8 bytes:

```text
SHA-256
013248a563f979c56bc34c7951cd542eb990e88c486d0bbbe8b2e9500ea54c54
```

This digest is recorded as **integrity evidence only**.

It does not define:

- geometry;
- place;
- World membership;
- FSF identity semantics.

The canonical bytes remain the serialized geometry source.

---

## 8. FSF / Spatial Ground Boundary

The production chain now reaches:

```text
normalized FSF SCPE
        ↓
FSF-CJSON-1.0
        ↓
canonical UTF-8 bytes
        ↓
integrity evidence
```

Spatial Ground SHALL reference this canonical FSF geometry object.

It SHALL NOT copy the polygon into a second independently authoritative Ground geometry grammar.

The governing boundary remains:

```text
FSF-CJSON defines canonical Survey geometry.
SG-CJSON defines canonical Ground membership expression.
```

---

## 9. Step 5G Formal Determination

> **The normalized production SCPE has been serialized successfully into canonical `FSF-CJSON-1.0` bytes with deterministic exact CRPC representation and byte-identical round-trip reproduction.**

Standing:

```text
FSF-SPEC-1.0 geometry — VALID
FSF normalization — COMPLETE
FSF-CJSON-1.0 serialization — COMPLETE
canonical byte round-trip — PASS
integrity evidence — RECORDED
```

---

## 10. Current Instance Sequence Standing

```text
5A — COMPLETE
5B — COMPLETE
5C — COMPLETE
5D — COMPLETE
5E — COMPLETE
5F — COMPLETE
5G — COMPLETE

canonical FSF production geometry — CREATED
canonical SG-CJSON Ground Definition — NEXT
canonical World-space instance — NOT YET ADOPTED
```

---

## 11. Recommended Repository Locations

Canonical FSF-CJSON geometry:

```text
/theatlas/spatial-ground/instance/production/
SG_World_Production_SCPE_01.fsf-cjson.json
```

Integrity sidecar:

```text
/theatlas/spatial-ground/instance/production/
SG_World_Production_SCPE_01.integrity.json
```

Step 5G review record:

```text
/theatlas/spatial-ground/review/adoption/instance/
SG_Step5G_Canonical_FSF_CJSON_Production_Serialization_Day132.md
```

---

## 12. Next Action

Proceed to:

> **Step 5H — create the one-root `SG-CJSON 1.0` Ground Definition referencing this canonical FSF geometry.**

---

## Governing Principle

> **FSF serializes the exact geometry once. Spatial Ground references that geometry; it does not recreate it.**
