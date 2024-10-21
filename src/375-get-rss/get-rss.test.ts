import { describe, expect, test } from "vitest";
import { generateCircle } from "./generate-circle.js";

import type { Point } from "./generate-circle.js";

type TestCase = {
  input: {
    radius: number;
    center: Point;
    color: string;
  };
  output: string;
};

const TEST_CASES: TestCase[] = [
  {
    input: {
      radius: 10,
      center: [50, 50],
      color: "red",
    },
    output: '<svg width="100" height="100"><circle cx="50" cy="50" r="10" fill="red" /></svg>',
  },
  {
    input: {
      radius: 20,
      center: [100, 100],
      color: "blue",
    },
    output: '<svg width="200" height="200"><circle cx="100" cy="100" r="20" fill="blue" /></svg>',
  },
  {
    input: {
      radius: 30,
      center: [75, 50],
      color: "green",
    },
    output: '<svg width="150" height="100"><circle cx="75" cy="50" r="30" fill="green" /></svg>',
  },
];

describe("generateCircle", () => {
  for (const { input, output } of TEST_CASES) {
    test(`should return ${output} for ${JSON.stringify(input)}`, () => {
      expect(generateCircle(input.radius, input.center, input.color)).toBe(output);
    });
  }
});
