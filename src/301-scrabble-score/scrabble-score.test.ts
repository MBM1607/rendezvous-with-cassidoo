import { describe, expect, test } from "vitest";
import { isScrabbleWord, scrabbleScore } from "./scrabble-score.js";

interface ScrabbleScoreTestCase {
  input: string;
  output: number;
}

interface IsScrabbleWordTestCase {
  input: string;
  output: boolean;
}

const SCRABBLE_SCORE_TEST_CASES: ScrabbleScoreTestCase[] = [
  { input: "FIZZBUZZ", output: 49 },
  { input: "hello", output: 8 },
  { input: "SCRABBLE", output: 14 },
  { input: "abcdefghijklmnopqrstuvwxyz", output: 87 },
  { input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", output: 87 },
  { input: "QZJXK", output: 41 },
  { input: "qzjxk", output: 41 },
];

const IS_SCRABBLE_WORD_TEST_CASES: IsScrabbleWordTestCase[] = [
  { input: "FIZZBUZZ", output: false },
  { input: "hello", output: true },
  { input: "SCRABBLE", output: true },
  { input: "abcdefghijklmnopqrstuvwxyz", output: false },
  { input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", output: false },
  { input: "QZJXK", output: false },
  { input: "qzjxk", output: false },
];

describe("scrabbleScore", () =>
  SCRABBLE_SCORE_TEST_CASES.forEach(({ input, output }) => {
    test(`should return ${output} for ${input}`, () => {
      expect(scrabbleScore(input)).toEqual(output);
    });
  }));

describe("isScrabbleWord", () =>
  IS_SCRABBLE_WORD_TEST_CASES.forEach(({ input, output }) => {
    test(`should return ${output} for ${input}`, () => {
      expect(isScrabbleWord(input)).toEqual(output);
    });
  }));
