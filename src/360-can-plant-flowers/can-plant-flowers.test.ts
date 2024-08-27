import { describe, expect, test } from "vitest";
import { canPlantFlowers } from "./can-plant-flowers.js";

type TestCase = {
  input: {
    flowerbed: number[];
    flowersToBePlanted: number;
  };
  output: boolean;
};

const TEST_CASES: TestCase[] = [
  {
    input: {
      flowerbed: [1, 0, 0, 0, 1],
      flowersToBePlanted: 1,
    },
    output: true,
  },
  {
    input: {
      flowerbed: [1, 0, 0, 0, 1],
      flowersToBePlanted: 2,
    },
    output: false,
  },
  {
    input: {
      flowerbed: [0, 0, 0, 0, 0],
      flowersToBePlanted: 3,
    },
    output: true,
  },
  {
    input: {
      flowerbed: [1, 0, 1, 0, 1],
      flowersToBePlanted: 1,
    },
    output: false,
  },
];

describe("canPlantFlowers", () => {
  TEST_CASES.forEach(({ input, output }) => {
    test(`canPlantFlowers(${input.flowerbed}, ${input.flowersToBePlanted}) → ${canPlantFlowers}`, () => {
      expect(canPlantFlowers(input.flowerbed, input.flowersToBePlanted)).toBe(output);
    });
  });
});
