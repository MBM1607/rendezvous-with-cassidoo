export const maxTheStock = (prices: number[]): number => {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};
