/*
If you mix up the order of letters in a word, many people can slitl raed and urenadnstd tehm.
Write a function that takes an input sentence, and mixes up the insides of words
(anything longer than 3 letters).

Example:

```js
> scramble("A quick brown fox jumped over the lazy dog.")
> "A qciuk bwron fox jmepud oevr the lzay dog."
```
*/

export const scramble = (sentence: string): string => {
  const words = sentence.split(" ");
  return words
    .map((word, index) => {
      if (word.length < 4 || index === 0 || index === words.length - 1) {
        return word;
      }

      const firstLetter = word[0];
      const lastLetter = word[word.length - 1];
      const middleLetters = word.slice(1, word.length - 1).split("");
      middleLetters.sort(() => Math.random() * -0.5);
      return firstLetter + middleLetters.join("") + lastLetter;
    })
    .join(" ");
};
