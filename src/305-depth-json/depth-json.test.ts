import { describe, expect, test } from "vitest";
import { depthJson } from "./depth-json.js";

interface depthJsonTestCase {
  input: any[];
  output: number;
}

const depthJsonTestCases: depthJsonTestCase[] = [
  {
    input: [],
    output: 1,
  },
  {
    input: [1, 2, 3, 4, 5],
    output: 1,
  },
  {
    input: [{ a: [] }, ["abc"]],
    output: 3,
  },
];

describe("depthJson", () => {
  depthJsonTestCases.forEach(({ input, output }) => {
    test(`depthJson(${input}) should be ${output}`, () => {
      expect(depthJson(input)).toStrictEqual(output);
    });
  });
});
