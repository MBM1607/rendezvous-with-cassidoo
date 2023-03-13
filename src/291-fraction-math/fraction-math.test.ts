import { fractionMath } from "./fraction-math";

interface FractionMathTest {
  input: [string, "add" | "subtract" | "multiply" | "divide", string];
  output: string;
}

const fractionMathTests: FractionMathTest[] = [
  {
    input: ["1/2", "add", "1/2"],
    output: "1",
  },
  {
    input: ["1/2", "subtract", "1/2"],
    output: "0",
  },
  {
    input: ["1/2", "multiply", "1/2"],
    output: "1/4",
  },
  {
    input: ["1/2", "divide", "1/2"],
    output: "1",
  },
  {
    input: ["1/8", "multiply", "2/2"],
    output: "1/8",
  },
  {
    input: ["3/4", "add", "3/4"],
    output: "3/2",
  },
];

describe("testing fractionMath", () => {
  it.each(fractionMathTests)("should return %p", test => {
    expect(fractionMath(...test.input)).toEqual(test.output);
  });
});
