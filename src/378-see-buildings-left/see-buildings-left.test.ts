import { describe, expect, test } from "vitest";
import { seeBuildingsLeft } from "./see-buildings-left.js";

type TSeeBuildingsLeftTestCase = {
  input: number[];
  output: number;
};

const TEST_CASES: TSeeBuildingsLeftTestCase[] = [
  {
    input: [3, 7, 8, 3, 6, 1],
    output: 3,
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8],
    output: 8,
  },
  {
    input: [8, 7, 6, 5, 4, 3, 2, 1],
    output: 1,
  },
];

describe("seeBuildingsLeft", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(seeBuildingsLeft(t.input)).toEqual(t.output);
    });
  });
});
