import { describe, expect, test } from "vitest";
import { rollDice, rollSingleDice } from "./roll-dice.js";

interface RollDiceTest {
  input: string;
  output_range: [low_limit: number, high_limit: number];
}

const ROLL_DICE_TESTS: RollDiceTest[] = [
  {
    input: "4d4",
    output_range: [4, 16],
  },
  {
    input: "3d20",
    output_range: [3, 60],
  },
  {
    input: "1d8+2d10",
    output_range: [3, 28],
  },
];

describe("rollDice", () => {
  test("it should roll dice", () => {
    for (let i = 0; i < 100; i++) {
      ROLL_DICE_TESTS.forEach(({ input, output_range }) => {
        const [low_limit, high_limit] = output_range;
        const output = rollDice(input);
        expect(output).toBeGreaterThanOrEqual(low_limit);
        expect(output).toBeLessThanOrEqual(high_limit);
      });
    }
  });

  test("it should throw an error for invalid dice notation", () => {
    expect(() => rollDice("1d6+2d6+3d")).toThrowError("Invalid dice notation");
    expect(() => rollDice("1d6+2d6+")).toThrowError("Invalid dice notation");
    expect(() => rollDice("1")).toThrowError("Invalid dice notation");
    expect(() => rollDice("1dd2")).toThrowError("Invalid dice notation");
  });
});

describe("rollSingleDice", () => {
  test("it should roll a single dice", () => {
    for (let i = 0; i < 100; i++) {
      const output = rollSingleDice(6);
      expect(output).toBeGreaterThanOrEqual(1);
      expect(output).toBeLessThanOrEqual(6);
    }
  });
});
