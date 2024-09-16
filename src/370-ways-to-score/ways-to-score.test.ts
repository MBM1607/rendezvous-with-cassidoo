import { describe, expect, test } from "vitest";
import { waysToScore } from "./ways-to-score.js";

type TestCase = {
  input: number;
  output: number;
};

const TEST_CASES: TestCase[] = [
  {
    input: 5,
    output: 1,
  },
  {
    input: 12,
    output: 6,
  },
  {
    input: 6,
    output: 3,
  },
  {
    input: 7,
    output: 1,
  },
  {
    input: 9,
    output: 3,
  },
  {
    input: 10,
    output: 3,
  },
];

describe("waysToScore", () => {
  for (const { input, output } of TEST_CASES) {
    test(`waysToScore(${input}) should return ${output}`, () => {
      expect(waysToScore(input)).toBe(output);
    });
  }
});
