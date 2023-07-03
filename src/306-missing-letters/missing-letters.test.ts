import { missingLetters } from "./missing-letters";

interface missingLettersTestCase {
  input: string[];
  output: string[];
}

const missingLettersTestCases: missingLettersTestCase[] = [
  {
    input: ["a", "b", "c", "d", "f"],
    output: ["e"],
  },
  {
    input: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "w",
      "x",
      "y",
      "z",
    ],
    output: ["f", "g", "v"],
  },
  {
    input: ["a", "~"],
    output: [
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "{",
      "|",
      "}",
    ],
  },
];

describe("missingLetters", () => {
  missingLettersTestCases.forEach(({ input, output }) => {
    test(`missingLetters(${input}) should be ${output}`, () => {
      expect(missingLetters(input)).toStrictEqual(output);
    });
  });
});
