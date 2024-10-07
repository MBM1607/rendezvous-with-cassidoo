import { describe, expect, test } from "vitest";
import { missingIngredients } from "./missing-ingredients.js";

import type { TIngredients } from "./missing-ingredients.js";

type TestCase = {
  input: {
    pantry: TIngredients[];
    recipe: string[];
  };
  output: number;
};

const today = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const TEST_CASES: TestCase[] = [
  {
    input: {
      recipe: ["eggs", "flour", "sugar", "butter"],
      pantry: [
        { name: "sugar", expirationDate: tomorrow.toISOString() },
        { name: "butter", expirationDate: tomorrow.toISOString() },
        { name: "milk", expirationDate: tomorrow.toISOString() },
      ],
    },
    output: 2,
  },
  {
    input: {
      recipe: ["eggs", "flour", "sugar", "butter"],
      pantry: [
        { name: "sugar", expirationDate: today.toISOString() },
        { name: "butter", expirationDate: tomorrow.toISOString() },
        { name: "milk", expirationDate: tomorrow.toISOString() },
      ],
    },
    output: 3,
  },
  {
    input: {
      recipe: ["eggs", "flour", "sugar", "butter"],
      pantry: [
        { name: "sugar", expirationDate: today.toISOString() },
        { name: "butter", expirationDate: yesterday.toISOString() },
        { name: "milk", expirationDate: today.toISOString() },
      ],
    },
    output: 4,
  },
  {
    input: {
      recipe: ["eggs", "flour", "sugar", "butter"],
      pantry: [
        { name: "sugar", expirationDate: tomorrow.toISOString() },
        { name: "butter", expirationDate: tomorrow.toISOString() },
        { name: "flour", expirationDate: tomorrow.toISOString() },
      ],
    },
    output: 1,
  },
  {
    input: {
      recipe: ["eggs", "flour", "sugar", "butter"],
      pantry: [
        { name: "sugar", expirationDate: tomorrow.toISOString() },
        { name: "butter", expirationDate: tomorrow.toISOString() },
        { name: "flour", expirationDate: tomorrow.toISOString() },
        { name: "eggs", expirationDate: tomorrow.toISOString() },
      ],
    },
    output: 0,
  },
];

describe("missingIngredients", () => {
  for (const { input, output } of TEST_CASES) {
    test(`should return ${output} for ${JSON.stringify(input)}`, () => {
      expect(missingIngredients(input.recipe, input.pantry)).toBe(output);
    });
  }
});
