const TOUCHDOWN = 6;
const FIELD_GOAL = 3;
const SAFETY = 2;

export const waysToScore = (n: number): number => {
  // Construct a dynamic programming table to store the number of ways to score
  // `i` points.
  const dp = new Array(n + 1).fill(0);

  // There is only one way to score 0 points.
  dp[0] = 1;

  // We need to ignore permutations of the same score, so we iterate through the
  // scores in ascending order.
  [SAFETY, FIELD_GOAL, TOUCHDOWN].forEach(score => {
    for (let i = score; i <= n; i++) {
      dp[i] += dp[i - score];
    }
  });

  return dp[n];
};
