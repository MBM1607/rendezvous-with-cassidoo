import { describe, expect, test } from "vitest";
import { fixInvertedPunctuation } from "./fix-inverted-punctuation.js";

type Test = {
  input: string;
  output: string;
};

const TESTS: Test[] = [
  {
    input: "Hola, cómo estás?",
    output: "Hola, ¿cómo estás?",
  },
  {
    input: "Feliz cumpleaños!",
    output: "¡Feliz cumpleaños!",
  },
  {
    input: "Ella ya se graduó de la universidad? ¡No!",
    output: "¿Ella ya se graduó de la universidad? ¡No!",
  },
];

describe("fixInvertedPunctuation", () => {
  TESTS.forEach(({ input, output }) => {
    test(`should return ${output} for ${input}`, () => {
      expect(fixInvertedPunctuation(input)).toBe(output);
    });
  });
});
