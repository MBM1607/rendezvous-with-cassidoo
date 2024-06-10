/**
 * Generates all combinations of `k` elements from the given `numbers` array.
 *
 * @param numbers - The array of numbers.
 * @param k - The number of elements in each combination.
 * @returns An array of arrays representing all combinations.
 */
const combinations = (numbers: number[], k: number): number[][] => {
  const results: number[][] = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (k === 1) {
      results.push([number]);
    } else {
      const rest = numbers.slice(i + 1);
      const restCombinations = combinations(rest, k - 1);
      restCombinations.map(restCombination => {
        results.push([number, ...restCombination]);
      });
    }
  }

  return results;
};

/**
 * Calculates the sum of the given numbers.
 *
 * @param numbers - The array of numbers.
 * @returns The sum of the numbers.
 */
export const sum = (numbers: number[]): number => numbers.reduce((acc, number) => acc + number, 0);

/**
 * Checks if the given `arrays` array includes the given `array`.
 *
 * @param arrays - The array of arrays.
 * @param array - The array to check.
 * @returns A boolean value.
 */
export const includesArray = (arrays: number[][], array: number[]): boolean => {
  return arrays.some(arr => arr.every((value, index) => value === array[index]));
};

/**
 * Finds all unique quadruplets in the array which gives the sum of `target`.
 *
 * @param numbers - The array of numbers.
 * @param target - The target sum.
 * @returns An array of arrays representing all unique quadruplets.
 */
export const fourSum = (numbers: number[], target: number): number[][] => {
  const results: number[][] = [];

  if (numbers.length < 4) return results;

  combinations(numbers, 4).forEach(combination => {
    if (sum(combination) === target) {
      if (!includesArray(results, combination)) results.push(combination);
    }
  });

  return results;
};
