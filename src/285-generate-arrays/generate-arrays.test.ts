import { generateArrays } from "./generate-arrays";

interface generateArraysTest {
  input: number;
  output: number[][];
}

const generateArraysTests: generateArraysTest[] = [
  {
    input: 4,
    output: [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]],
  },
  {
    input: 1,
    output: [[1]],
  },
  {
    input: 10,
    output: [
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7, 8],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ],
  },
  {
    input: 0,
    output: [],
  },
];

describe("testing generateArrays", () => {
  it.each(generateArraysTests)(
    "given a number, return an array with every element itself an array from 1 to n",
    test => {
      expect(generateArrays(test.input)).toStrictEqual(test.output);
    },
  );
});
