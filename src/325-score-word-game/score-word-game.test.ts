import { scoreWordGame } from "./score-word-game";

type ScoreWordGameTestCase = {
  input: {
    wordList: string[];
    letterScores: Record<string, number>;
  };
  output: string;
};

const SCORE_WORD_GAME_TEST_CASES: ScoreWordGameTestCase[] = [
  {
    input: {
      wordList: ["apple", "banana", "cherry", "date", "fig"],
      letterScores: [...Array(26).keys()].reduce(
        (scores, i) => ((scores[String.fromCharCode(97 + i)] = i + 1), scores),
        {} as Record<string, number>,
      ),
    },
    output: "cherry",
  },
];

describe("scoreWordGame", () => {
  test("it should return the list with trailing and leading zeroes removed", () => {
    SCORE_WORD_GAME_TEST_CASES.forEach(({ input, output }) => {
      expect(scoreWordGame(input.wordList, input.letterScores)).toEqual(output);
    });
  });
});
