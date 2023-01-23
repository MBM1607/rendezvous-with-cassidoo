import { sumEveryOther } from "./sum-every-other";

interface sumEveryOtherTest {
  input: number;
  output: number;
}

const sumEveryOtherTests: sumEveryOtherTest[] = [
  {
    input: 548_915_381,
    output: 26,
  },
  {
    input: 10,
    output: 0,
  },
  {
    input: 1010.11,
    output: 1,
  },
  {
    input: 123_456_789,
    output: 20,
  },
];

describe("testing sumEveryOther", () => {
  it.each(sumEveryOtherTests)("given a number, sum every second digit in that number", test => {
    expect(sumEveryOther(test.input)).toStrictEqual(test.output);
  });
});
