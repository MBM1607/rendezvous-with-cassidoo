export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Removes the specified digit from the given number and returns the maximum possible number.
 * If the digit is not found in the number, the original number is returned.
 *
 * @param num - The number from which the digit should be removed.
 * @param digit - The digit to be removed.
 * @returns The maximum possible number after removing the digit.
 */
export const removeDigit = (num: number, digit: Digit): number => {
  let max = -Infinity;

  const numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === digit.toString()) {
      const newNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
      if (newNum > max) max = newNum;
    }
  }

  return max === -Infinity ? num : max;
};
