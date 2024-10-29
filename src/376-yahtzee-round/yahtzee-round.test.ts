import { describe, expect, test } from "vitest";
import {
  getOptionsFromDice,
  type TYahtzeeDiceRoll,
  type TYahtzeeOption,
} from "./yahtzee-round.js";

type TGetOptionsFromDiceTestCase = {
  input: TYahtzeeDiceRoll;
  output: Set<TYahtzeeOption>;
};

const GET_OPTIONS_FROM_DICE_TEST_CASES: TGetOptionsFromDiceTestCase[] = [
  {
    input: [1, 1, 1, 1, 1],
    output: new Set(["ones", "chance", "three of a kind", "four of a kind", "yahtzee"]),
  },
  {
    input: [2, 2, 3, 3, 3],
    output: new Set(["twos", "threes", "full house", "three of a kind", "chance"]),
  },
  {
    input: [2, 3, 4, 2, 2],
    output: new Set(["twos", "threes", "fours", "three of a kind", "chance"]),
  },
  {
    input: [4, 3, 6, 3, 5],
    output: new Set(["threes", "fours", "fives", "sixes", "small straight", "chance"]),
  },
];

describe("yahtzeeRound:getOptionsFromDice", () => {
  for (const { input, output } of GET_OPTIONS_FROM_DICE_TEST_CASES) {
    test(`should return ${JSON.stringify(output)} when given ${JSON.stringify(
      input,
    )}`, async () => {
      const result = getOptionsFromDice(input);
      expect(result).toEqual(output);
    });
  }
});
