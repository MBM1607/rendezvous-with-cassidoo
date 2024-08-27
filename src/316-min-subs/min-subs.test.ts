import { describe, expect, test } from "vitest";
import { minSubs } from "./min-subs.js";

interface minSubsTestCase {
  input: [number[], number];
  output: number[];
}

const minSubsTestCases: minSubsTestCase[] = [
  {
    input: [[1, 3, 20, 4, 8, 9, 11], 3],
    output: [4, 8, 9],
  },
  {
    input: [[4, 4, 4, 4, 8], 2],
    output: [4, 4],
  },
];

describe("minSubs", () => {
  minSubsTestCases.forEach(({ input: [array, length], output }) => {
    test(`should return ${output} for array ${array} and length ${length}`, () => {
      expect(minSubs(array, length)).toEqual(output);
    });
  });
});
