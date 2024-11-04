export const groupAnagrams = (strings: string[]): string[][] => {
  const map = new Map<string, string[]>();
  for (const str of strings) {
    const key = str.split("").sort().join("");
    if (map.has(key)) {
      map.get(key)?.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
};
