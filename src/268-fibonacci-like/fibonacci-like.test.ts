import { fibonacciErrors, getFibonacciLike, isFibonacciLike } from "./fibonacci-like";

interface getFibonacciLikeTest {
  input: [number, number, number];
  sequence: number[];
}

const getFibonacciLikeTests: getFibonacciLikeTest[] = [
  { input: [0, 10, 5], sequence: [0, 10, 10, 20, 30] },
  { input: [3, 7, 7], sequence: [3, 7, 10, 17, 27, 44, 71] },
  { input: [3, 7, 5], sequence: [3, 7, 10, 17, 27] },
  { input: [10, 20, 5], sequence: [10, 20, 30, 50, 80] },
  { input: [2, 3, 11], sequence: [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233] },
  { input: [0, 1, 10], sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
];

interface invalidGetFibonacciLikeTest {
  input: [number, number, number];
  error: string;
}

const invalidGetFibonacciLikeTests: invalidGetFibonacciLikeTest[] = [
  {
    input: [16, 7, 2],
    error: fibonacciErrors.Length,
  },
  {
    input: [-16, 7, 5],
    error: fibonacciErrors.Negative,
  },
  {
    input: [6, -7, 4],
    error: fibonacciErrors.Negative,
  },
  {
    input: [5, 3, -2],
    error: fibonacciErrors.Negative,
  },
  {
    input: [-16, -7, -34],
    error: fibonacciErrors.Negative,
  },
  {
    input: [0, 0, 0],
    error: fibonacciErrors.Length,
  },
  {
    input: [0, Number.NaN, 3],
    error: fibonacciErrors.NaN,
  },
  {
    input: [Number.NaN, 3, 6],
    error: fibonacciErrors.NaN,
  },
  {
    input: [0, 1, Number.NaN],
    error: fibonacciErrors.NaN,
  },
];

interface isFibonacciLikeTest {
  sequence: number[];
  result: boolean;
}

const isFibonacciLikeTests: isFibonacciLikeTest[] = [
  { sequence: [10, 20, 5], result: false },
  { sequence: [3, 7, 10, 17, 27], result: true },
  { sequence: [], result: false },
  { sequence: [1], result: false },
  { sequence: [4, -1, 3, 2, 5], result: false },
];

describe("testing getFibonacciLike", () => {
  it.each(getFibonacciLikeTests)("should return fibonacci like list of given length", test => {
    expect(getFibonacciLike(...test.input)).toStrictEqual(test.sequence);
  });

  it.each(invalidGetFibonacciLikeTests)(
    "should throw appropriate error for invalid inputs",
    test => {
      expect(() => getFibonacciLike(...test.input)).toThrow(test.error);
    },
  );
});

describe("testing isFibonacciLike", () => {
  it.each(isFibonacciLikeTests)(
    "should return boolean (true if sequence is a fibonacci like)",
    test => {
      expect(isFibonacciLike(test.sequence)).toStrictEqual(test.result);
    },
  );
});
