import { rectangleSum } from "./rectangle-sum";

interface rectangleSumTest {
  input: [number[], [number, number, number, number]];
  output: number;
}

const rectangleSumTests: rectangleSumTest[] = [
  {
    input: [
      [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9],
      [-1, 8, -7, 2],
    ],
    output: 2,
  },
  {
    input: [
      [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9],
      [6, 3, 2, -7],
    ],
    output: 3,
  },
];

describe("testing rectangleSum", () => {
  it.each(rectangleSumTests)("should return correct sum", test => {
    expect(rectangleSum(...test.input)).toStrictEqual(test.output);
  });
});
