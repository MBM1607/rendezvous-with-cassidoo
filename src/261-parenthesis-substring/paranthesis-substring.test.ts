import { describe, expect, test } from "vitest";
import { parenthesisSubstring } from "./parenthesis-substring.js";

const tests = [
  { string: "(()(", solution: 2 },
  { string: ")()(()))", solution: 6 },
  { string: ")()(()(()))", solution: 10 },
  { string: "())(())", solution: 4 },
  { string: "())(()", solution: 2 },
  { string: "())(())()()", solution: 8 },
];

describe("testing parenthesisSubstring", () => {
  for (const t of tests) {
    test(`${t.string} should return ${t.solution}`, () => {
      const solution = parenthesisSubstring(t.string);
      expect(solution).toBe(t.solution);
    });
  }
});
