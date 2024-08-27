import { describe, expect, test } from "vitest";
import { wordLengthProduct } from "./word-length-product.js";

type WorldLengthProductTest = {
  words: string[];
  expected: number;
};

const WORD_LENGTH_PRODUCT_TEST_CASES: WorldLengthProductTest[] = [
  {
    words: ["fish", "fear", "boo", "egg", "cake", "abcdef"],
    expected: 16,
  },
  {
    words: ["fish", "fear", "boo", "egg", "cake", "abcde"],
    expected: 20,
  },
  {
    words: ["a", "aa", "aaa", "aaaa"],
    expected: 0,
  },
];

describe("wordLengthProduct", () => {
  WORD_LENGTH_PRODUCT_TEST_CASES.forEach(({ words, expected }) => {
    test(`returns ${expected} for words ${words}`, () => {
      expect(wordLengthProduct(words)).toBe(expected);
    });
  });
});
