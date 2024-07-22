export const wordBreak = (s: string, wordDict: string[]): boolean => {
  const regex = new RegExp(`^(${wordDict.join("|")})+$`);
  return regex.test(s);
};
