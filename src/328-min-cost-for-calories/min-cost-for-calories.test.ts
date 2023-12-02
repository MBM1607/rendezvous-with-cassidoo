import { minCostForCalories } from "./min-cost-for-calories";

type MinCostForCaloriesTestCase = {
  input: {
    calories: number[];
    prices: number[];
    dailyGoal: number;
  };
  output: number;
};

const MIN_COST_FOR_CALORIES_TEST_CASES: MinCostForCaloriesTestCase[] = [
  {
    input: {
      calories: [0, 400, 600, 800],
      prices: [50, 60, 80],
      dailyGoal: 1200,
    },
    output: -1,
  },
  {
    input: {
      calories: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
      prices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      dailyGoal: 1000,
    },
    output: -1,
  },
  {
    input: {
      calories: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
      prices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      dailyGoal: 500,
    },
    output: 26,
  },
  {
    input: {
      calories: [200, 400, 600, 800],
      prices: [50, 60, 80, 100],
      dailyGoal: 1200,
    },
    output: 160,
  },
  {
    input: {
      calories: [200, 400, 600, 800],
      prices: [50, 60, 80, 100],
      dailyGoal: 1400,
    },
    output: 180,
  },
  {
    input: {
      calories: [200, 400, 600, 800],
      prices: [50, 60, 80, 100],
      dailyGoal: 200,
    },
    output: 50,
  },
  {
    input: {
      calories: [200, 400, 600, 800],
      prices: [50, 60, 80, 100],
      dailyGoal: 800,
    },
    output: 100,
  },
  {
    input: {
      calories: [420, 69, 800, 344],
      prices: [10, 20, 30, 40],
      dailyGoal: 800,
    },
    output: 30,
  },
];

describe("minCostForCalories", () => {
  test("should return the minimum cost to achieve or exceed the daily calorie goal", () => {
    MIN_COST_FOR_CALORIES_TEST_CASES.forEach(({ input, output }) => {
      expect(minCostForCalories(input.calories, input.prices, input.dailyGoal)).toEqual(output);
    });
  });
});
