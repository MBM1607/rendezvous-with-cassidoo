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
 * Calculates the maximum product of `k` numbers from the given array of numbers.
 *
 * @param numbers - The array of numbers.
 * @param k - The number of elements to consider for calculating the maximum product.
 *            Defaults to 3.
 * @returns The maximum product of `k` numbers.
 */
export const maxProduct = (numbers: number[], k = 3): number =>
  Math.max(
    ...combinations(numbers, k).map(combination =>
      combination.reduce((acc, number) => acc * number, 1),
    ),
  );
