import { binaryPalindrome } from "./binary-palindrome";

interface BinaryPalindromeTestCase {
  input: number;
  expected: boolean;
}

const ODD_SQUARE_SUM_TEST_CASES: BinaryPalindromeTestCase[] = [
  { input: 1, expected: true },
  { input: 2, expected: false },
  { input: 3, expected: true },
  { input: 4, expected: false },
  { input: 5, expected: true },
  { input: 6, expected: false },
  { input: 7, expected: true },
  { input: 8, expected: false },
  { input: 9, expected: true },
  { input: 10, expected: false },
];

describe("binaryPalindrome", () => {
  ODD_SQUARE_SUM_TEST_CASES.forEach(({ input, expected }) => {
    it(`should return ${expected} for ${input}`, () => {
      expect(binaryPalindrome(input)).toEqual(expected);
    });
  });
});
