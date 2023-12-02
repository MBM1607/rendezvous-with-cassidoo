/*
Given two arrays calories and prices, where calories[i] and prices[i] represent the calorie
content and price of the ith food item, and a daily calorie goal, find the minimum cost to achieve
or exceed the daily calorie goal. If it's impossible to meet the goal, return -1.

Example:

```js
let calories = [200, 400, 600, 800]
let prices = [50, 60, 80, 100]
let dailyGoal = 1200

> minCostForCalories(calories, prices, dailyGoal)
> 160 // the 2nd and 4th items add up to 1200 calories for the minimum cost
```
*/

type Item = {
  calorie: number;
  price: number;
};

type ItemCombination = {
  combination: Item[];
  cost: number;
};

export const getMostCostEfficientCombination = (items: Item[], dailyGoal: number): number => {
  let minimumCost = Infinity;

  const combine = (currentItems: Item[], remainingItems: Item[]) => {
    if (remainingItems.length === 0) {
      const currentCalorieSum = currentItems.reduce(
        (accumulator, item) => accumulator + item.calorie,
        0,
      );
      if (currentCalorieSum >= dailyGoal) {
        const currentCost = currentItems.reduce(
          (accumulator, item) => accumulator + item.price,
          0,
        );
        minimumCost = Math.min(minimumCost, currentCost);
      }
    } else {
      const [first, ...rest] = remainingItems;
      combine([...currentItems, first], rest);
      combine(currentItems, rest);
    }
  };

  combine([], items);
  return minimumCost === Infinity ? -1 : minimumCost;
};

export const minCostForCalories = (
  calories: number[],
  prices: number[],
  dailyGoal: number,
): number => {
  if (calories.length !== prices.length) return -1;

  const items = calories.map((calorie, index) => ({
    calorie,
    price: prices[index],
  }));

  return getMostCostEfficientCombination(items, dailyGoal);
};
