/*
Write a function that takes an array of consecutive, increasing letters as input, and returns any
missing letters in the array between the first and last letter.

Example:

```js
> missingLetters(['a','b','c','d','f'])
> ['e']

> missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'])
> ['f','g','v']
```
*/

export const missingLetters = (letters: string[]) => {
  const firstCharacterCode = letters[0].charCodeAt(0);
  const lastCharacterCode = letters[letters.length - 1].charCodeAt(0);
  const missingLetters: string[] = [];

  for (let index = firstCharacterCode; index <= lastCharacterCode; index++) {
    const character = String.fromCharCode(index);

    if (!letters.includes(character)) missingLetters.push(character);
  }

  return missingLetters;
};
