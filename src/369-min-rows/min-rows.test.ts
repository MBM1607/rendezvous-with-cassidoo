import { describe, expect, test } from "vitest";
import { minRows } from "./min-rows.js";

type TestCase = {
  input: {
    groups: number[];
    rowSize: number;
  };
  output: number;
};

const TEST_CASES: TestCase[] = [
  {
    input: {
      groups: [1, 1, 1, 1, 1],
      rowSize: 3,
    },
    output: 2,
  },
  {
    input: {
      groups: [4, 8, 3, 5, 6],
      rowSize: 10,
    },
    output: 4,
  },
  {
    input: {
      groups: [4, 5, 4, 3, 3],
      rowSize: 10,
    },
    output: 2,
  },
  {
    input: {
      groups: [7, 7, 8, 9, 6],
      rowSize: 10,
    },
    output: 5,
  },
];

describe("minRows", () => {
  for (const { input, output } of TEST_CASES) {
    test(`minRows(${JSON.stringify(input)}) should return ${output}`, () => {
      expect(minRows(input.groups, input.rowSize)).toBe(output);
    });
  }
});
