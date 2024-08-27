import { describe, expect, test } from "vitest";
import { uniqueSum } from "./unique-sum.js";

type UniqueSumTestCase = {
  input: number[];
  expected: number;
};

const UNIQUE_SUM_TEST_CASES: UniqueSumTestCase[] = [
  {
    input: [1, 2, 3, 4, 5],
    expected: 15,
  },
  {
    input: [1, 2, 3, 4, 5, 11, 22, 33, 44, 55],
    expected: 15,
  },
  {
    input: [101, 2, 3],
    expected: 5,
  },
  {
    input: [11, 22, 33],
    expected: 0,
  },
];

describe("uniqueSum", () => {
  UNIQUE_SUM_TEST_CASES.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(uniqueSum(input)).toBe(expected);
    });
  });
});
