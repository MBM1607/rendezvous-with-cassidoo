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

testCases.forEach(({ lines, unusedVariables }) => {
  test(`findUnused(${lines})`, () => {
    expect(findUnused(lines)).toEqual(unusedVariables);
  });
});
