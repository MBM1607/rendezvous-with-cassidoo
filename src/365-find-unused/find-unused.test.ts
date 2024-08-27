import { describe, expect, test } from "vitest";
import { findUnused } from "./find-unused.js";

type TestCase = {
  lines: string[];
  unusedVariables: string[];
};

const testCases: TestCase[] = [
  {
    lines: ["a=1", "b=2", "log(a)"],
    unusedVariables: ["b"],
  },
  {
    lines: ["a=1", "b=2", "log(a)", "log(b)"],
    unusedVariables: [],
  },
  {
    lines: ["a=1", "b=2", "log(a)", "log(c)"],
    unusedVariables: ["b"],
  },
];

describe("findUnused", () => {
  testCases.forEach(({ lines, unusedVariables }) => {
    test(`should return ${unusedVariables} for ${lines}`, () => {
      expect(findUnused(lines)).toEqual(unusedVariables);
    });
  });
});
