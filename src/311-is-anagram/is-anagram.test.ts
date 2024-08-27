import { describe, expect, test } from "vitest";
import { isAnagram } from "./is-anagram.js";

interface isAnagramTestCase {
  input: [string, string];
  output: boolean;
}

const isAnagramTestCases: isAnagramTestCase[] = [
  { input: ["barbie", "oppenheimer"], output: false },
  { input: ["race", "care"], output: true },
  { input: ["", ""], output: true },
  { input: ["a", "a"], output: true },
  { input: ["a", "b"], output: false },
  { input: ["ab", "ba"], output: true },
];

describe("isAnagram", () => {
  isAnagramTestCases.forEach(({ input, output }) => {
    test(`isAnagram(${input}) should be ${output}`, () => {
      expect(isAnagram(...input)).toBe(output);
    });
  });
});
