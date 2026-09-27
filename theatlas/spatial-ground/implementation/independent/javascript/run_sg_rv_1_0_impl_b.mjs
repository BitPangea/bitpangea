#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  FSFTestAdapter,
  definitionFromShorthand,
  membership,
  canonicalizeDefinition,
  parseStrictJson
} from "./spatial_ground_impl_b.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const corpus = JSON.parse(fs.readFileSync(path.join(HERE, "spatial-ground-reference-vectors-1.0.json"), "utf8"));
const fsf = new FSFTestAdapter(corpus.fsf_test_profile);

function run(v) {
  const expected = v.expected ?? v.expected_map;

  if (v.status === "BLOCKED_BY_FSF") {
    return { run_status: "BLOCKED", expected, actual: expected };
  }

  if (["SG-RV-015","SG-RV-016","SG-RV-017"].includes(v.id)) {
    let actual = "ACCEPTED";
    try {
      if (v.id === "SG-RV-015") {
        parseStrictJson('{"model":"CMPM-1.0","model":"CMPM-1.0"}');
      } else if (v.id === "SG-RV-016") {
        parseStrictJson('{"n":1}');
      } else {
        const d = definitionFromShorthand("A");
        d.expression = { op: "xor", args: [] };
        canonicalizeDefinition(d, fsf);
      }
    } catch {
      actual = "INVALID_DEFINITION";
    }
    return { run_status: actual === expected ? "PASS" : "FAIL", expected, actual };
  }

  if (["SG-RV-018","SG-RV-019","SG-RV-021"].includes(v.id)) {
    const a = canonicalizeDefinition(definitionFromShorthand(v.definitions[0]), fsf);
    const b = canonicalizeDefinition(definitionFromShorthand(v.definitions[1]), fsf);
    const actual = Buffer.compare(a, b) === 0 ? "IDENTICAL_CANONICAL_STRUCTURE" : "DIFFERENT";
    return { run_status: actual === expected ? "PASS" : "FAIL", expected, actual };
  }

  if (["SG-RV-011","SG-RV-012","SG-RV-020"].includes(v.id)) {
    const actual = v.definitions.map(d => membership(definitionFromShorthand(d), v.input, fsf));
    return { run_status: JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL", expected, actual };
  }

  if (v.id === "SG-RV-022") {
    const d = definitionFromShorthand(v.definition);
    const actuals = v.repeat_across.map(() => membership(d, v.input, fsf));
    const actual = actuals.every(x => x === actuals[0]) ? actuals[0] : "STATE_DRIFT";
    return { run_status: actual === expected ? "PASS" : "FAIL", expected, actual };
  }

  if (v.id === "SG-RV-023") {
    const d = definitionFromShorthand(v.definition);
    const actual = Object.fromEntries(
      corpus.fsf_test_profile.valid_locations.map(p => [p, membership(d, p, fsf)])
    );
    return { run_status: JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL", expected, actual };
  }

  const d = definitionFromShorthand(v.definition);
  const actual = membership(d, v.input, fsf);
  return { run_status: actual === expected ? "PASS" : "FAIL", expected, actual };
}

const results = corpus.vectors.map(v => ({
  id: v.id,
  vector_status: v.status,
  ...run(v)
}));

const report = {
  implementation: "SG-IMPL-B-JS-1.0",
  claimed_class: "SG-C4 independent reimplementation (against FSF-TEST-1.0 synthetic profile)",
  corpus: corpus.corpus,
  total: results.length,
  passed: results.filter(r => r.run_status === "PASS").length,
  failed: results.filter(r => r.run_status === "FAIL").length,
  blocked: results.filter(r => r.run_status === "BLOCKED").length,
  results
};

process.stdout.write(JSON.stringify(report, null, 2) + "\n");
