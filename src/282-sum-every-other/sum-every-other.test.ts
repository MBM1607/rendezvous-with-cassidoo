import { describe, expect, test } from "vitest";
import { sumEveryOther } from "./sum-every-other.js";

interface sumEveryOtherTest {
  input: number;
  output: number;
}

const sumEveryOtherTests: sumEveryOtherTest[] = [
  {
    input: 548_915_381,
    output: 26,
  },
  {
    input: 10,
    output: 0,
  },
  {
    input: 1010.11,
    output: 1,
  },
  {
    input: 123_456_789,
    output: 20,
  },
];

describe("testing sumEveryOther", () => {
  test.each(sumEveryOtherTests)("given a number, sum every second digit in that number", t => {
    expect(sumEveryOther(t.input)).toStrictEqual(t.output);
  });
});
