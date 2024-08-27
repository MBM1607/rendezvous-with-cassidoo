import { describe, expect, test } from "vitest";
import { removeDigit } from "./remove-digit.js";

import type { Digit } from "./remove-digit.js";

type RemoveDigitTestCase = {
  input: [number, Digit];
  expected: number;
};

const REMOVE_DIGIT_TEST_CASES: RemoveDigitTestCase[] = [
  {
    input: [31415926, 1],
    expected: 3415926,
  },
  {
    input: [1231, 1],
    expected: 231,
  },
  {
    input: [1231, 2],
    expected: 131,
  },
  {
    input: [1231, 3],
    expected: 121,
  },
  {
    input: [1231, 4],
    expected: 1231,
  },
  {
    input: [1231, 5],
    expected: 1231,
  },
  {
    input: [1231, 6],
    expected: 1231,
  },
  {
    input: [1231, 7],
    expected: 1231,
  },
  {
    input: [1231, 8],
    expected: 1231,
  },
  {
    input: [9999, 9],
    expected: 999,
  },
  {
    input: [9191231, 9],
    expected: 911231,
  },
];

describe("removeDigit", () => {
  REMOVE_DIGIT_TEST_CASES.forEach(({ input: [num, digit], expected }) => {
    test(`should return ${expected} for num=${num} and digit=${digit}`, () => {
      expect(removeDigit(num, digit)).toBe(expected);
    });
  });
});
