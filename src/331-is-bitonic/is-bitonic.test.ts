import { describe, expect, test } from "vitest";
import { isBitonic } from "./is-bitonic.js";

type isBitonicTestCase = {
  input: number[];
  expected: boolean | number;
};

const IS_BITONIC_TEST_CASES: isBitonicTestCase[] = [
  {
    input: [1, 2, 3, 2],
    expected: 3,
  },
  {
    input: [1, 2, 3],
    expected: false,
  },
  {
    input: [3, 4, 5, 5, 5, 2, 1],
    expected: 5,
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    expected: false,
  },
  {
    input: [-3, 9, 11, 20, 17, 5, 1],
    expected: 20,
  },
  {
    input: [-3, 9, 11, 20, 17, 5, 1, 5, 6, 7, 8, 9],
    expected: false,
  },
  {
    input: [],
    expected: false,
  },
  {
    input: [1],
    expected: false,
  },
  {
    input: [1, 2],
    expected: false,
  },
];

describe("isBitonic", () => {
  IS_BITONIC_TEST_CASES.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(isBitonic(input)).toEqual(expected);
    });
  });
});
