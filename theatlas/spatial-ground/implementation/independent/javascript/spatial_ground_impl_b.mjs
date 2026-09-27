#!/usr/bin/env node
/**
 * BitPangea Spatial Ground — Independent Implementation B
 * SG-IMPL-B-JS-1.0
 *
 * Independent JavaScript implementation of:
 * - CMPM core membership semantics
 * - SG-CJSON 1.0 structural validation
 * - canonical normalization
 * - FSF-TEST-1.0 adapter
 *
 * This implementation intentionally does not import or call Implementation A.
 */

export const WORLD = "WORLD";
export const NON_WORLD = "NON_WORLD";
export const INVALID_INPUT = "INVALID_INPUT";
export const INVALID_DEFINITION = "INVALID_DEFINITION";

export class InvalidDefinition extends Error {}
export class InvalidInput extends Error {}

/* -----------------------------
   Strict JSON parser
   ----------------------------- */

export function parseStrictJson(text) {
  let i = 0;

  function ws() {
    while (i < text.length && /\s/.test(text[i])) i++;
  }

  function err(msg) {
    throw new InvalidDefinition(`${msg} at offset ${i}`);
  }

  function parseString() {
    if (text[i] !== '"') err("expected string");
    const start = i;
    i++;
    let escaped = false;
    while (i < text.length) {
      const c = text[i++];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (c === "\\") {
        escaped = true;
        continue;
      }
      if (c === '"') {
        const raw = text.slice(start, i);
        try {
          return JSON.parse(raw).normalize("NFC");
        } catch {
          err("invalid JSON string");
        }
      }
    }
    err("unterminated string");
  }

  function parseLiteral(name, value) {
    if (text.slice(i, i + name.length) !== name) err(`expected ${name}`);
    i += name.length;
    return value;
  }

  function parseArray() {
    if (text[i] !== "[") err("expected [");
    i++;
    ws();
    const out = [];
    if (text[i] === "]") {
      i++;
      return out;
    }
    while (true) {
      out.push(parseValue());
      ws();
      if (text[i] === "]") {
        i++;
        return out;
      }
      if (text[i] !== ",") err("expected , or ]");
      i++;
      ws();
    }
  }

  function parseObject() {
    if (text[i] !== "{") err("expected {");
    i++;
    ws();
    const out = Object.create(null);
    const seen = new Set();

    if (text[i] === "}") {
      i++;
      return out;
    }

    while (true) {
      if (text[i] !== '"') err("object key must be string");
      const key = parseString();
      if (seen.has(key)) err(`duplicate key ${key}`);
      seen.add(key);

      ws();
      if (text[i] !== ":") err("expected :");
      i++;
      ws();

      out[key] = parseValue();
      ws();

      if (text[i] === "}") {
        i++;
        return out;
      }
      if (text[i] !== ",") err("expected , or }");
      i++;
      ws();
    }
  }

  function parseValue() {
    ws();
    const c = text[i];
    if (c === "{") return parseObject();
    if (c === "[") return parseArray();
    if (c === '"') return parseString();
    if (text.startsWith("true", i)) return parseLiteral("true", true);
    if (text.startsWith("false", i)) return parseLiteral("false", false);
    if (text.startsWith("null", i)) return parseLiteral("null", null);

    // SG-CJSON prohibits all JSON numbers.
    if (c === "-" || (c >= "0" && c <= "9")) {
      err("JSON numeric values are prohibited");
    }
    err("unexpected token");
  }

  const value = parseValue();
  ws();
  if (i !== text.length) err("trailing data");
  return value;
}

/* -----------------------------
   Synthetic FSF adapter
   ----------------------------- */

export class FSFTestAdapter {
  constructor(profile) {
    this.valid = new Set(profile.valid_locations);
    this.invalid = new Set(profile.invalid_locations);
    this.sets = new Map(
      Object.entries(profile.sets).map(([k, arr]) => [k, new Set(arr)])
    );
    this.alias = new Map();
    for (const pair of profile.equivalence || []) {
      if (pair.length === 2) this.alias.set(pair[1], pair[0]);
    }
  }

  validateLocation(x) {
    if (!this.valid.has(x)) throw new InvalidInput(x);
    return x;
  }

  canonicalLeaf(name) {
    const n = this.alias.get(name) ?? name;
    if (!this.sets.has(n)) throw new InvalidDefinition(`unresolved FSF leaf: ${name}`);
    return n;
  }

  contains(name, x) {
    this.validateLocation(x);
    const n = this.canonicalLeaf(name);
    return this.sets.get(n).has(x);
  }
}

/* -----------------------------
   Canonical structure
   ----------------------------- */

const TOP_FIELDS = new Set([
  "type", "format", "model", "specification", "fsf", "limit_convention", "expression"
]);

function sameKeySet(obj, expected) {
  const keys = Object.keys(obj);
  if (keys.length !== expected.size) return false;
  return keys.every(k => expected.has(k));
}

function normalizeJsonValue(v) {
  if (typeof v === "string") return v.normalize("NFC");
  if (typeof v === "boolean" || v === null) return v;
  if (typeof v === "number") throw new InvalidDefinition("JSON numeric values are prohibited");
  if (Array.isArray(v)) return v.map(normalizeJsonValue);
  if (typeof v === "object") {
    const out = Object.create(null);
    for (const k of Object.keys(v)) {
      out[k.normalize("NFC")] = normalizeJsonValue(v[k]);
    }
    return out;
  }
  throw new InvalidDefinition(`unsupported JSON type ${typeof v}`);
}

function canonicalStringify(v) {
  if (typeof v === "string") return JSON.stringify(v.normalize("NFC"));
  if (typeof v === "boolean") return v ? "true" : "false";
  if (v === null) return "null";
  if (typeof v === "number") throw new InvalidDefinition("JSON numeric values are prohibited");

  if (Array.isArray(v)) {
    return "[" + v.map(canonicalStringify).join(",") + "]";
  }

  if (typeof v === "object") {
    const keys = Object.keys(v).sort();
    return "{" + keys.map(k => `${JSON.stringify(k.normalize("NFC"))}:${canonicalStringify(v[k])}`).join(",") + "}";
  }

  throw new InvalidDefinition(`unsupported type ${typeof v}`);
}

function canonicalBytes(v) {
  return Buffer.from(canonicalStringify(normalizeJsonValue(v)), "utf8");
}

function normalizeExpr(expr, fsf) {
  if (!expr || typeof expr !== "object" || Array.isArray(expr)) {
    throw new InvalidDefinition("expression must be object");
  }

  const op = expr.op;

  if (op === "fsf") {
    if (!sameKeySet(expr, new Set(["op", "value"]))) {
      throw new InvalidDefinition("invalid fsf leaf fields");
    }
    if (typeof expr.value !== "string" || expr.value.length === 0) {
      throw new InvalidDefinition("fsf value must be nonempty string");
    }
    return { op: "fsf", value: fsf.canonicalLeaf(expr.value.normalize("NFC")) };
  }

  if (op === "union" || op === "intersection") {
    if (!sameKeySet(expr, new Set(["op", "args"]))) {
      throw new InvalidDefinition(`invalid ${op} fields`);
    }
    if (!Array.isArray(expr.args) || expr.args.length < 2) {
      throw new InvalidDefinition(`${op} requires at least two children`);
    }

    const flattened = [];
    for (const child of expr.args) {
      const n = normalizeExpr(child, fsf);
      if (n.op === op) flattened.push(...n.args);
      else flattened.push(n);
    }

    const byBytes = new Map();
    for (const child of flattened) {
      const key = canonicalStringify(child);
      byBytes.set(key, child);
    }
    const orderedKeys = [...byBytes.keys()].sort();
    const ordered = orderedKeys.map(k => byBytes.get(k));
    if (ordered.length === 1) return ordered[0];
    return { op, args: ordered };
  }

  if (op === "difference") {
    if (!sameKeySet(expr, new Set(["op", "base", "subtract"]))) {
      throw new InvalidDefinition("invalid difference fields");
    }
    return {
      op: "difference",
      base: normalizeExpr(expr.base, fsf),
      subtract: normalizeExpr(expr.subtract, fsf),
    };
  }

  throw new InvalidDefinition(`unsupported operator: ${op}`);
}

export function validateDefinition(doc, fsf) {
  if (!doc || typeof doc !== "object" || Array.isArray(doc)) {
    throw new InvalidDefinition("definition must be object");
  }
  if (!sameKeySet(doc, TOP_FIELDS)) {
    throw new InvalidDefinition("invalid top-level field set");
  }
  if (doc.type !== "bitpangea.spatial-ground.definition") throw new InvalidDefinition("wrong type");
  if (doc.format !== "SG-CJSON-1.0") throw new InvalidDefinition("wrong format");
  if (doc.model !== "CMPM-1.0") throw new InvalidDefinition("wrong model");
  if (doc.limit_convention !== "closed-world-space") throw new InvalidDefinition("wrong limit convention");
  if (typeof doc.specification !== "string" || doc.specification.length === 0) throw new InvalidDefinition("bad specification");
  if (!doc.fsf || typeof doc.fsf !== "object" || Array.isArray(doc.fsf)) throw new InvalidDefinition("bad fsf object");
  if (!sameKeySet(doc.fsf, new Set(["specification", "lineage"]))) throw new InvalidDefinition("bad fsf fields");
  if (typeof doc.fsf.specification !== "string" || !doc.fsf.specification) throw new InvalidDefinition("bad fsf specification");
  if (typeof doc.fsf.lineage !== "string" || !doc.fsf.lineage) throw new InvalidDefinition("bad fsf lineage");

  return {
    type: doc.type.normalize("NFC"),
    format: doc.format.normalize("NFC"),
    model: doc.model.normalize("NFC"),
    specification: doc.specification.normalize("NFC"),
    fsf: {
      specification: doc.fsf.specification.normalize("NFC"),
      lineage: doc.fsf.lineage.normalize("NFC")
    },
    limit_convention: doc.limit_convention.normalize("NFC"),
    expression: normalizeExpr(doc.expression, fsf)
  };
}

export function canonicalizeDefinition(doc, fsf) {
  return canonicalBytes(validateDefinition(doc, fsf));
}

/* -----------------------------
   Membership engine
   ----------------------------- */

function evalExpr(expr, x, fsf) {
  switch (expr.op) {
    case "fsf":
      return fsf.contains(expr.value, x);
    case "union":
      for (const child of expr.args) {
        if (evalExpr(child, x, fsf)) return true;
      }
      return false;
    case "intersection":
      for (const child of expr.args) {
        if (!evalExpr(child, x, fsf)) return false;
      }
      return true;
    case "difference":
      return evalExpr(expr.base, x, fsf) && !evalExpr(expr.subtract, x, fsf);
    default:
      throw new InvalidDefinition(`unsupported operator ${expr.op}`);
  }
}

export function membership(doc, x, fsf) {
  try {
    fsf.validateLocation(x);
    const normalized = validateDefinition(doc, fsf);
    return evalExpr(normalized.expression, x, fsf) ? WORLD : NON_WORLD;
  } catch (e) {
    if (e instanceof InvalidInput) return INVALID_INPUT;
    if (e instanceof InvalidDefinition) return INVALID_DEFINITION;
    throw e;
  }
}

export function makeDefinition(expr) {
  return {
    type: "bitpangea.spatial-ground.definition",
    format: "SG-CJSON-1.0",
    model: "CMPM-1.0",
    specification: "SG-SPEC-1.0",
    fsf: { specification: "FSF-TEST-1.0", lineage: "FSF-TEST" },
    limit_convention: "closed-world-space",
    expression: expr,
  };
}

export function expandShorthand(spec) {
  if (typeof spec === "string") return { op: "fsf", value: spec };
  if (!spec || typeof spec !== "object") throw new InvalidDefinition("bad shorthand");
  if (spec.op === "union" || spec.op === "intersection") {
    return { op: spec.op, args: spec.args.map(expandShorthand) };
  }
  if (spec.op === "difference") {
    return {
      op: "difference",
      base: expandShorthand(spec.base),
      subtract: expandShorthand(spec.subtract),
    };
  }
  if (spec.op === "fsf") return { op: "fsf", value: spec.value };
  throw new InvalidDefinition(`bad shorthand op ${spec.op}`);
}

export function definitionFromShorthand(spec) {
  return makeDefinition(expandShorthand(spec));
}
