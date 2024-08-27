import { describe, expect, test } from "vitest";
import { trimArray } from "./trim-array.js";

interface trimArrayTestCase {
  input: [array: number[], piecesFromFront: number, piecesFromBack: number];
  output: number[];
}

const trimArrayTestCases: trimArrayTestCase[] = [
  {
    input: [[1, 2, 3, 4, 5, 6], 2, 1],
    output: [3, 4, 5],
  },
  {
    input: [[6, 2, 4, 3, 7, 1, 3], 5, 0],
    output: [1, 3],
  },
  {
    input: [[1, 7], 0, 0],
    output: [1, 7],
  },
];

describe("trimArray", () => {
  trimArrayTestCases.forEach(({ input: [array, piecesFromFront, piecesFromBack], output }) => {
    test(`trimArray(${array}, ${piecesFromFront}, ${piecesFromBack}) should be ${output}`, () => {
      expect(trimArray(array, piecesFromFront, piecesFromBack)).toStrictEqual(output);
    });
  });
});
