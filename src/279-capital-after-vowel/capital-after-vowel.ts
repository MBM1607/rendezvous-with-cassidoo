/*
Given a string, make every consonant after a vowel uppercase. Can you do this with and without
regex?

Example:

```js
> capitalAfterVowel("hello world")
> "heLlo WoRld"

> capitalAfterVowel("xaabeuekadii")
> "xaaBeueKaDii"
```
*/

const VOWELS = 'aeiouy';

const isVowel = (letter: string) => VOWELS.includes(letter.toLowerCase());

const isConsonant = (letter: string) => !VOWELS.includes(letter);

const isLastLetterVowel = (string: string, index: number) => {
  for (let innerIndex = index - 1; innerIndex >= 0; innerIndex--) {
    const previousLetter = string[innerIndex];

    if (isVowel(previousLetter)) return true;
    if (previousLetter !== ' ') return false;
  }
  return false; // never case
};

export const capitalAfterVowel = (string: string): string =>
  [...string]
    .map((letter, index) =>
      isConsonant(letter) && isLastLetterVowel(string, index) ? letter.toUpperCase() : letter,
    )
    .join('');

const regexConverter = (full: string, match: string) => full.replace(match, match.toUpperCase());

export const capitalAfterVowelRegex = (string: string): string =>
  string.replace(new RegExp(`[${VOWELS}]\\s*([b-df-hj-np-tv-xz])`, 'gi'), regexConverter);
