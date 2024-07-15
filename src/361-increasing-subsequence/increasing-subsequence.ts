export const increasingSubsequence = (sequence: number[]): number => {
  let longestIncreasingSubsequence = -1;
  let currentLongestIncreasingSubsequence = 0;
  let prevValue: number | null = null;

  for (const value of sequence) {
    if (prevValue === null || value > prevValue) {
      prevValue = value;
      currentLongestIncreasingSubsequence++;
      longestIncreasingSubsequence = Math.max(
        longestIncreasingSubsequence,
        currentLongestIncreasingSubsequence,
      );
    } else {
      prevValue = null;
      currentLongestIncreasingSubsequence = 0;
    }
  }

  return longestIncreasingSubsequence;
};
