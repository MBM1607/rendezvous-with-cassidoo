import { describe, expect, test } from "vitest";
import { translateRightShift } from "./translate-right-shift.js";

type TranslateRightShiftTestCase = {
  text: string;
  expected: string;
};

const TRANSLATE_RIGHT_SHIFT_TEST_CASES: TranslateRightShiftTestCase[] = [
  {
    text: ";p; epeor",
    expected: "lol wowie",
  },
  {
    text: "ejp s, o",
    expected: "who am i",
  },
];

describe("translateRightShift", () => {
  TRANSLATE_RIGHT_SHIFT_TEST_CASES.forEach(({ text, expected }) => {
    test(`translates "${text}" to "${expected}"`, () => {
      expect(translateRightShift(text)).toBe(expected);
    });
  });
});
