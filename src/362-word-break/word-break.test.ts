import { describe, expect, test } from "vitest";
import { wordBreak } from "./word-break.js";

type TestCase = {
  input: {
    s: string;
    wordDict: string[];
  };
  expected: boolean;
};

const TEST_CASES: TestCase[] = [
  {
    input: {
      s: "leetcode",
      wordDict: ["leet", "code"],
    },
    expected: true,
  },
  {
    input: {
      s: "applepenapple",
      wordDict: ["apple", "pen"],
    },
    expected: true,
  },
  {
    input: {
      s: "catsandog",
      wordDict: ["cats", "dog", "sand", "and", "cat"],
    },
    expected: false,
  },
  {
    input: {
      s: "aaaaaaaa",
      wordDict: ["aa", "aaa"],
    },
    expected: true,
  },
];

describe("wordBreak", () => {
  for (const { input, expected } of TEST_CASES) {
    test(`returns ${expected} when called with s=${input.s} and wordDict=${input.wordDict}`, () => {
      expect(wordBreak(input.s, input.wordDict)).toBe(expected);
    });
  }
});
