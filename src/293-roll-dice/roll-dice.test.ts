import { rollDice } from "./roll-dice";

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
    ROLL_DICE_TESTS.forEach(({ input, output_range }) => {
      const [low_limit, high_limit] = output_range;
      const output = rollDice(input);
      expect(output).toBeGreaterThanOrEqual(low_limit);
      expect(output).toBeLessThanOrEqual(high_limit);
    });
  });
});
