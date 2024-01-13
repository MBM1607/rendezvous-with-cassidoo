/*
You have an array of letters. Return the number of possible sequences of letters you can make
using the letters in the array.

**Extra Credit: print the sequences.**

Example:

```js
> letters(['X'])
> 1

> letters(['A', 'A', 'B'])
> 8 // "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"
```
*/

export const letters = (lettersArray: string[]): string[] => {
  const resultSet = new Set<string>();

  const permute = (currentLetters: string[], remainingLetters: string[]) => {
    if (remainingLetters.length === 0) {
      resultSet.add(currentLetters.join(""));
    } else {
      for (let i = 0; i < remainingLetters.length; i++) {
        const [first, ...rest] = remainingLetters;
        permute([...currentLetters, first], rest);
        remainingLetters = [...rest, first];
      }
    }
  };

  const combine = (currentLetters: string[], remainingLetters: string[]) => {
    if (remainingLetters.length === 0) {
      if (currentLetters.length > 0) permute([], currentLetters);
    } else {
      const [first, ...rest] = remainingLetters;
      combine([...currentLetters, first], rest);
      combine(currentLetters, rest);
    }
  };

  combine([], lettersArray);

  return [...resultSet];
};
