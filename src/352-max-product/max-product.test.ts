import { describe, expect, test } from "vitest";
import { maxProduct } from "./max-product.js";

type Test = {
  input: number[];
  output: number;
};

const TESTS: Test[] = [
  {
    input: [1, 2, 3, 4, 5],
    output: 60,
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    output: 1320,
  },
  {
    input: [2, 4, 1, 3, -5, 6],
    output: 72,
  },
];

describe("maxProduct", () => {
  TESTS.forEach(({ input, output }) => {
    test(`returns ${output} for input ${input}`, () => {
      expect(maxProduct(input)).toBe(output);
    });
  });
});
