import { describe, expect, test } from "vitest";
import { dailyTemperatures } from "./daily-temperatures.js";

type Test = {
  input: number[];
  expected: number[];
};

const tests: Test[] = [
  {
    input: [70, 70, 70, 75],
    expected: [3, 2, 1, 0],
  },
  {
    input: [90, 80, 70, 60],
    expected: [0, 0, 0, 0],
  },
  {
    input: [73, 74, 75, 71, 69, 72, 76, 73],
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
  },
];

describe("dailyTemperatures", () => {
  tests.forEach(({ input, expected }) => {
    test(`dailyTemperatures(${input}) should return ${expected}`, () => {
      expect(dailyTemperatures(input)).toEqual(expected);
    });
  });
});
