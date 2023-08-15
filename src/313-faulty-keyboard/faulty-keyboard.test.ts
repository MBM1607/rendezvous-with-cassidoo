import { faultyKeeb } from "./faulty-keyboard";

interface faultyKeebTestCase {
  input: string;
  output: string;
}

const faultyKeebTestCases: faultyKeebTestCase[] = [
  { input: "string", output: "rtsng" },
  { input: "hello world!", output: "w hllrld!" },
  { input: "barbie", output: "brb" },
  { input: "hi", output: "h" },
  { input: "", output: "" },
  { input: "aeiouy", output: "" },
  { input: "oppenheimer", output: "mhnppr" },
];

describe("faultyKeeb", () => {
  faultyKeebTestCases.forEach(({ input, output }) => {
    test(`faultyKeeb(${input}) should be ${output}`, () => {
      expect(faultyKeeb(input)).toStrictEqual(output);
    });
  });
});
