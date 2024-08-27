import { describe, expect, test } from "vitest";
import { letters } from "./letters.js";

type LettersTestCase = {
  input: string[];
  expected: string[];
};

const LETTERS_TEST_CASES: LettersTestCase[] = [
  {
    input: ["X"],
    expected: ["X"],
  },
  {
    input: ["A", "A", "B"],
    expected: ["A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"],
  },
  {
    input: ["A", "B", "C"],
    expected: [
      "A",
      "B",
      "C",
      "AB",
      "AC",
      "BA",
      "BC",
      "CA",
      "CB",
      "ABC",
      "ACB",
      "BAC",
      "BCA",
      "CAB",
      "CBA",
    ],
  },
];

describe("letters", () => {
  LETTERS_TEST_CASES.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expected.forEach(expectedString => {
        expect(letters(input)).toContain(expectedString);
      });
    });
  });
});
