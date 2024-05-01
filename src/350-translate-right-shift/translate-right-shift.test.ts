import { translateRightShift } from "./translate-right-shift";

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
    it(`translates "${text}" to "${expected}"`, () => {
      expect(translateRightShift(text)).toBe(expected);
    });
  });
});
