import { describe, expect, test } from "vitest";
import { maxPairs } from "./max-pairs.js";

import type { Shoe } from "./max-pairs.js";

type TestCase = {
  input: Shoe[];
  output: number;
};

const TEST_CASES: TestCase[] = [
  {
    input: ["L-1", "R-1"],
    output: 1,
  },
  {
    input: ["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"],
    output: 3,
  },
  {
    input: ["L-10", "L-11", "L-12", "L-13"],
    output: 0,
  },
  {
    input: ["L-8", "L-8", "L-8", "R-8"],
    output: 1,
  },
];

describe("maxPairs", () => {
  for (const { input, output } of TEST_CASES) {
    test(`maxPairs(${input}) should return ${output}`, () => {
      expect(maxPairs(input)).toBe(output);
    });
  }
});
