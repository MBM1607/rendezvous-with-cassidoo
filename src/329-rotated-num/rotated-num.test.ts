import { rotatedNum } from "./rotated-num";

type RotatedNumTestCase = {
  input: number[];
  output: number;
};

const ROTATED_NUM_TEST_CASES: RotatedNumTestCase[] = [
  {
    input: [4, 0, 1, 2, 3],
    output: 1,
  },
  {
    input: [7, 9, 20],
    output: 0,
  },
  {
    input: [7, 7, 314, 1337, 7],
    output: 4,
  },
  {
    input: [7, 9, 11, 12, 5],
    output: 4,
  },
];

describe("rotatedNum", () => {
  ROTATED_NUM_TEST_CASES.forEach(({ input, output }) => {
    it(`${input} -> ${output}`, () => {
      expect(rotatedNum(input)).toEqual(output);
    });
  });
});
