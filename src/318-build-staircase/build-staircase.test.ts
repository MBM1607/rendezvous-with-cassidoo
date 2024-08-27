import { describe, expect, test } from "vitest";
import { buildStaircase } from "./build-staircase.js";

type BuildStaircaseTestCase = {
  blocks: number;
  expectedSteps: number;
};

const testCases: BuildStaircaseTestCase[] = [
  { blocks: 1, expectedSteps: 1 },
  { blocks: 2, expectedSteps: 1 },
  { blocks: 3, expectedSteps: 2 },
  { blocks: 4, expectedSteps: 2 },
  { blocks: 5, expectedSteps: 2 },
  { blocks: 6, expectedSteps: 3 },
  { blocks: 7, expectedSteps: 3 },
  { blocks: 8, expectedSteps: 3 },
  { blocks: 9, expectedSteps: 3 },
  { blocks: 10, expectedSteps: 4 },
  { blocks: 11, expectedSteps: 4 },
  { blocks: 12, expectedSteps: 4 },
  { blocks: 13, expectedSteps: 4 },
  { blocks: 14, expectedSteps: 4 },
  { blocks: 15, expectedSteps: 5 },
  { blocks: 16, expectedSteps: 5 },
  { blocks: 21, expectedSteps: 6 },
  { blocks: 27, expectedSteps: 6 },
  { blocks: 36, expectedSteps: 8 },
  { blocks: 45, expectedSteps: 9 },
  { blocks: 55, expectedSteps: 10 },
];

describe("buildStaircase", () => {
  testCases.forEach(({ blocks, expectedSteps }) => {
    test(`should return ${expectedSteps} steps for ${blocks} blocks`, () => {
      expect(buildStaircase(blocks)).toEqual(expectedSteps);
    });
  });
});
