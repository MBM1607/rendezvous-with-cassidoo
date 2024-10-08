import { describe, expect, test } from "vitest";
import { rotatedNum } from "./rotated-num.js";

type RotatedNumTestCase = {
  input: number[];
  output: number;
};

const ROTATED_NUM_TEST_CASES: RotatedNumTestCase[] = [
  {
    input: [4, 0, 1, 2, 3],
    output: 1,
  },
  {
    input: [7, 9, 20],
    output: 0,
  },
  {
    input: [7, 9, 20],
    output: 0,
  },
  {
    input: [7, 7, 9, 20],
    output: 0,
  },
  {
    input: [20, 7, 7, 9],
    output: 1,
  },
  {
    input: [15, 18, 2, 3, 6, 12],
    output: 2,
  },
  {
    input: [7, 7, 314, 1337, 7],
    output: 4,
  },
  {
    input: [7, 9, 11, 12, 5],
    output: 4,
  },
];

describe("rotatedNum", () => {
  ROTATED_NUM_TEST_CASES.forEach(({ input, output }) => {
    test(`${input} -> ${output}`, () => {
      expect(rotatedNum(input)).toEqual(output);
    });
  });
});
