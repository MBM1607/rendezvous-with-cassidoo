import { describe, expect, test } from "vitest";
import { numBalanced } from "./num-balanced.js";

interface numBalancedTest {
  input: string;
  output: number;
}

const numBalancedTests: numBalancedTest[] = [
  { input: "()", output: 0 },
  { input: "(()", output: 1 },
  { input: "))()))))()", output: 6 },
  { input: ")))))", output: 5 },
  { input: "(((", output: 3 },
  { input: "((()))", output: 0 },
  { input: "((())", output: 1 },
  { input: "(()))", output: 1 },
];

describe("testing numBalanced", () => {
  test.each(numBalancedTests)(
    "given a parenthesis string, return the number of parenthesis required for balancing",
    t => {
      expect(numBalanced(t.input)).toStrictEqual(t.output);
    },
  );
});
