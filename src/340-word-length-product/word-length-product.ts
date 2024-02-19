/*
Given a string array, find the maximum product of word lengths where the words don't share any
letters.

Example:

```js
> wordLengthProduct(["fish","fear","boo","egg","cake","abcdef"])
> 16 // "fish" and "cake"

> wordLengthProduct(["a","aa","aaa","aaaa"])
> 0 // all of them share "a"
```
*/

export const wordLengthProduct = (words: string[]): number => {
  const products: Record<string, number> = {};

  const calculateProductForWord = (word: string, otherWords: string[]) => {
    const characters = word.split("");

    otherWords.forEach(otherWord => {
      const otherCharacters = otherWord.split("");
      const isWordUnique = characters.every(character => !otherCharacters.includes(character));
      if (!isWordUnique) return;

      products[`${word}-${otherWord}`] = word.length * otherWord.length;
    });
  };

  words.forEach(word => {
    const otherWords = words.filter(otherWord => otherWord !== word);
    calculateProductForWord(word, otherWords);
  });

  return Math.max(...Object.values(products), 0);
};
