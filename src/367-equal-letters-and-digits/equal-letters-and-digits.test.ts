import { describe, expect, test } from "vitest";
import { equalLettersAndDigits } from "./equal-letters-and-digits.js";

type TestCase = {
  input: string;
  output: string;
};

const TEST_CASES: TestCase[] = [
  {
    input: "test1234test",
    output: "test1234",
  },
  {
    input: "a1b2c3d4",
    output: "a1b2c3d4",
  },
  {
    input: "test",
    output: "",
  },
  {
    input: "1234",
    output: "",
  },
  {
    input: "abc12345",
    output: "abc123",
  },
  {
    input: "a1",
    output: "a1",
  },
  {
    input: "a12bc34",
    output: "a12bc3",
  },
  {
    input: "a123b4c",
    output: "3b4c",
  },
];

describe("equalLettersAndDigits", () => {
  for (const { input, output } of TEST_CASES) {
    test(`equalLettersAndDigits(${input}) should return ${output}`, () => {
      expect(equalLettersAndDigits(input)).toBe(output);
    });
  }
});
