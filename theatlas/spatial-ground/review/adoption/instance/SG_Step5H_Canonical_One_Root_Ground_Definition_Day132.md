# Spatial Ground — Step 5H Canonical One-Root SG-CJSON Ground Definition

**BitPangea · The Atlas · Spatial Ground**  
**Creator Period:** Day #132 · October 6, 2026  
**Step:** 5H — Create the One-Root `SG-CJSON 1.0` Ground Definition  
**Status:** COMPLETE — CANONICAL DEFINITION CREATED

---

## 1. Governing Boundary

The adopted production architecture requires:

```text
FSF-CJSON-1.0 → canonical Survey geometry
SG-CJSON 1.0  → canonical Ground membership expression
```

Spatial Ground SHALL reference the canonical FSF geometry.

It SHALL NOT duplicate the 128-point polygon into a second Ground-owned geometry grammar.

---

## 2. Referenced FSF Geometry

Canonical FSF geometry artifact:

```text
SG_World_Production_SCPE_01.fsf-cjson.json
```

Governing FSF Specification:

```text
FSF-SPEC-1.0
```

Canonical FSF serialization:

```text
FSF-CJSON-1.0
```

Step 5G integrity evidence:

```text
SHA-256
013248a563f979c56bc34c7951cd542eb990e88c486d0bbbe8b2e9500ea54c54
```

A durable production artifact reference is established as:

```text
FSF-WORLD-SCPE-0001
```

This is an instance-production reference identifier only.

It does not create a new coordinate, geometry primitive, Survey address grammar, or alternate source of spatial truth.

---

## 3. Canonical Ground Definition

The production Ground Definition is:

```text
SG_World_Ground_Definition_01.sg-cjson.json
```

Its semantic structure is:

```json
{
  "type": "bitpangea.spatial-ground.definition",
  "format": "SG-CJSON-1.0",
  "model": "CMPM-1.0",
  "specification": "SG-SPEC-1.0",
  "fsf": {
    "specification": "FSF-SPEC-1.0",
    "lineage": "FSF-SPEC"
  },
  "limit_convention": "closed-world-space",
  "expression": {
    "op": "fsf",
    "value": "FSF-WORLD-SCPE-0001"
  }
}
```

Canonical bytes are emitted compactly with sorted object keys.

---

## 4. One-Root Production Profile

The expression contains exactly one root:

```text
op = fsf
```

and exactly one referenced FSF spatial-set definition:

```text
value = FSF-WORLD-SCPE-0001
```

There is no:

- `union`;
- `intersection`;
- `difference`;
- nested expression tree;
- Ground-level polygon copy;
- synthetic `FSF-TEST` identifier.

This exactly matches the selected first production profile.

---

## 5. SG-CJSON Structural Validation

The generated definition satisfies the established SG-CJSON 1.0 field requirements:

```text
top-level type — PASS
format = SG-CJSON-1.0 — PASS
model = CMPM-1.0 — PASS
specification = SG-SPEC-1.0 — PASS
fsf object contains exactly specification + lineage — PASS
limit_convention = closed-world-space — PASS
expression contains exactly op + value — PASS
op = fsf — PASS
value is nonempty string — PASS
JSON numeric values — NONE
unknown top-level fields — NONE
synthetic FSF-TEST dependency — NONE
```

---

## 6. Canonical Byte Behavior

SG-CJSON 1.0 canonicalization requires:

```text
NFC strings
sorted object keys
compact UTF-8
no insignificant whitespace
no JSON numeric values
```

Result:

```text
canonical byte length — 275 bytes
canonical round-trip byte identity — PASS
```

SHA-256 integrity evidence over the exact canonical SG-CJSON bytes:

```text
40fd371aa7239495f7c939f4c2b6ae9e50cdbaaa2282fe1b237bfa7bf7df2aca
```

As with FSF integrity evidence, this digest is operational evidence and does not define World-space semantics.

---

## 7. Membership Meaning

Under CMPM:

```text
M_D : S → {WORLD, NON_WORLD}
```

the definition means:

```text
valid Survey point x
    ↓
evaluate membership in FSF-WORLD-SCPE-0001
    ↓
inside or boundary of the referenced closed FSF SCPE → WORLD
outside the referenced FSF SCPE → NON_WORLD
```

Survey-invalid input remains resolved before Ground membership.

The `closed-world-space` convention is compatible with the selected SCPE because the referenced FSF geometry is one valid closed boundary-inclusive polygonal extent.

---

## 8. Step 5H Formal Determination

> **The first production Ground Definition has been created as one canonical `SG-CJSON 1.0` document containing exactly one `fsf` root that references the canonical Step 5G FSF geometry.**

Standing:

```text
FSF production geometry — CANONICAL MACHINE ARTIFACT CREATED
production FSF region reference — ESTABLISHED
SG-CJSON production Ground Definition — CREATED
root count — 1
root operator — fsf
Boolean composition — NONE
```

---

## 9. Current Instance Sequence Standing

```text
5A — COMPLETE
5B — COMPLETE
5C — COMPLETE
5D — COMPLETE
5E — COMPLETE
5F — COMPLETE
5G — COMPLETE
5H — COMPLETE

final production Ground Definition — CREATED
final production instance Conformance / reconstruction proof — NEXT
canonical World-space instance — NOT YET ADOPTED
```

---

## 10. Recommended Repository Locations

Production FSF region reference:

```text
/theatlas/spatial-ground/instance/production/
FSF_World_SCPE_Production_Reference_0001.json
```

Canonical Ground Definition:

```text
/theatlas/spatial-ground/instance/production/
SG_World_Ground_Definition_01.sg-cjson.json
```

Step 5H review record:

```text
/theatlas/spatial-ground/review/adoption/instance/
SG_Step5H_Canonical_One_Root_Ground_Definition_Day132.md
```

---

## 11. Next Action

Proceed to:

> **Step 5I — run the final production-instance Conformance and reconstruction proof.**

---

## Governing Principle

> **One exact FSF geometry. One Ground reference. One World-membership source.**
