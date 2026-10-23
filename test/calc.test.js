import { test } from "node:test"
import assert from "node:assert/strict"
import { add } from "../src/calc.js"

test("add", () => {
  assert.equal(add(1, 1), 2)
})
