import { antidivisor } from "./antidivisor";

interface antidivisorTest {
  input: number;
  output: number[];
}

const antidivisorTests: antidivisorTest[] = [
  {
    input: 1,
    output: [],
  },
  {
    input: 3,
    output: [2],
  },
  {
    input: 5,
    output: [2, 3],
  },
  {
    input: 10,
    output: [3, 4, 7],
  },
  {
    input: 234,
    output: [4, 7, 12, 36, 52, 67, 156],
  },
];

describe("testing antidivisor", () => {
  it.each(antidivisorTests)("should return correct antidivisors", test => {
    expect(antidivisor(test.input)).toStrictEqual(test.output);
  });
});
