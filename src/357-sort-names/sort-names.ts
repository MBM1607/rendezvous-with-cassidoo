export const countVowels = (name: string): number => name.match(/[aeiou]/gi)?.length || 0;

export const sortNames = (names: string[]): string[] =>
  names.toSorted((a, b) => {
    const vowelsA = countVowels(a);
    const vowelsB = countVowels(b);
    if (vowelsA === vowelsB) return a.localeCompare(b);
    return vowelsB - vowelsA;
  });
