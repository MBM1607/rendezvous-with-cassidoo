import { reversedSquares } from "./reversed-squares";

interface reversedSquaresTestCase {
  input: number;
  output: boolean;
}

const reversedSquaresTestCases: reversedSquaresTestCase[] = [
  {
    input: 1,
    output: true,
  },
  {
    input: 9,
    output: true,
  },
  {
    input: 3,
    output: false,
  },
  {
    input: 441,
    output: true,
  },
  {
    input: 25,
    output: false,
  },
  {
    input: 100,
    output: true,
  },
];

describe("reversedSquares", () => {
  reversedSquaresTestCases.forEach(({ input, output }) => {
    test(`reversedSquares(${input}) should be ${output}`, () => {
      expect(reversedSquares(input)).toStrictEqual(output);
    });
  });
});
