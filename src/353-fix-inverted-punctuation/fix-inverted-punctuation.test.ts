import { fixInvertedPunctuation } from "./fix-inverted-punctuation";

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
    it(`should return ${output} for ${input}`, () => {
      expect(fixInvertedPunctuation(input)).toBe(output);
    });
  });
});
