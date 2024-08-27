import { describe, expect, test } from "vitest";
import { oddSquareSum } from "./odd-square-sum.js";

interface OddSquareSumTestCase {
  input: number;
  expected: number;
}

const ODD_SQUARE_SUM_TEST_CASES: OddSquareSumTestCase[] = [
  { input: 1, expected: 0 },
  { input: 2, expected: 1 },
  { input: 9, expected: 1 },
  { input: 10, expected: 10 },
  { input: 11, expected: 10 },
  { input: 24, expected: 10 },
  { input: 25, expected: 10 },
  { input: 26, expected: 35 },
  { input: 44, expected: 35 },
  { input: 49, expected: 35 },
  { input: 50, expected: 84 },
  { input: 999, expected: 5456 },
  { input: 7559, expected: 105995 },
  { input: 7570, expected: 113564 },
];

describe("oddSquareSum", () => {
  test("should return the sum of odd-square numbers less than a given integer n", () => {
    ODD_SQUARE_SUM_TEST_CASES.forEach(({ input, expected }) => {
      expect(oddSquareSum(input)).toEqual(expected);
    });
  });
});
