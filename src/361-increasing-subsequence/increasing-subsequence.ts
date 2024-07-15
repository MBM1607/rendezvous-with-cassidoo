export const increasingSubsequence = (sequence: number[]): number => {
  let longestIncreasingSubsequence = -1;
  let currentSubsequence = 0;
  let prevValue: number | null = null;

  for (const value of sequence) {
    if (prevValue === null || value > prevValue) {
      prevValue = value;
      currentSubsequence++;
      longestIncreasingSubsequence = Math.max(longestIncreasingSubsequence, currentSubsequence);
    } else {
      prevValue = null;
      currentSubsequence = 0;
    }
  }

  return longestIncreasingSubsequence;
};
