import { describe, expect, test } from "vitest";
import { onlyEvens } from "./only-evens.js";

type Test = {
  input: number[];
  output: number[];
};

const TESTS: Test[] = [
  {
    input: [1, 2, 3, 4, 5],
    output: [2, 4],
  },
  {
    input: [1, 2, 3, 4, 5, 2],
    output: [2, 2, 4],
  },
  {
    input: [7, 8, 1, 0, 2, 5],
    output: [0, 2, 8],
  },
  {
    input: [11, 13, 15],
    output: [],
  },
];

describe("onlyEvens", () => {
  TESTS.forEach(({ input, output }) => {
    test(`should return ${output} for ${input}`, () => {
      expect(onlyEvens(input)).toEqual(output);
    });
  });
});
