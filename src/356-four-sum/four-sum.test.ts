import { describe, expect, test } from "vitest";
import { fourSum } from "./four-sum.js";

type Test = {
  input: {
    numbers: number[];
    target: number;
  };
  expected: number[][];
};

const tests: Test[] = [
  {
    input: {
      numbers: [1, 0, -1, 0, -2, 2],
      target: 0,
    },
    expected: [
      [1, 0, -1, 0],
      [1, -1, -2, 2],
      [0, 0, -2, 2],
    ],
  },
  {
    input: {
      numbers: [2, 2, 2, 2, 2],
      target: 8,
    },
    expected: [[2, 2, 2, 2]],
  },
  {
    input: {
      numbers: [1, 2, 3, 4, 5],
      target: 10,
    },
    expected: [[1, 2, 3, 4]],
  },
  {
    input: {
      numbers: [],
      target: 0,
    },
    expected: [],
  },
  {
    input: {
      numbers: [1, -2, -5, -4, -3, 3, 3, 5],
      target: -11,
    },
    expected: [[1, -5, -4, -3]],
  },
];

describe("fourSum", () => {
  tests.forEach(({ input, expected }) => {
    test(`fourSum(${input.numbers}, ${input.target}) should return ${expected}`, () => {
      expect(fourSum(input.numbers, input.target)).toEqual(expected);
    });
  });
});
