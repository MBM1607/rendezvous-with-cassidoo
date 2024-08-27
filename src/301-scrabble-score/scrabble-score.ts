/*
Given a string, calculate the score that it would get in a game of Scrabble. For extra credit, try
verifying if the string is a valid word, or take into account premium squares!

Scoring:
1 point: E, A, I, O, N, R, T, L, S, U
2 points: D, G
3 points: B, C, M, P
4 points: F, H, V, W, Y
5 points: K
8 points: J, X
10 points: Q, Z

Example:

```js
> scrabbleScore('FIZZBUZZ')
> 49
```
*/

import { readFileSync } from "fs.js";

const POINTS_10 = ["Q", "Z"];
const POINTS_8 = ["J", "X"];
const POINTS_5 = ["K"];
const POINTS_4 = ["F", "H", "V", "W", "Y"];
const POINTS_3 = ["B", "C", "M", "P"];
const POINTS_2 = ["D", "G"];
const POINTS_1 = ["E", "A", "I", "O", "N", "R", "T", "L", "S", "U"];

export const scrabbleScore = (word: string): number =>
  word
    .toUpperCase()
    .split("")
    .reduce((acc, letter) => {
      if (POINTS_10.includes(letter)) {
        return acc + 10;
      } else if (POINTS_8.includes(letter)) {
        return acc + 8;
      } else if (POINTS_5.includes(letter)) {
        return acc + 5;
      } else if (POINTS_4.includes(letter)) {
        return acc + 4;
      } else if (POINTS_3.includes(letter)) {
        return acc + 3;
      } else if (POINTS_2.includes(letter)) {
        return acc + 2;
      } else if (POINTS_1.includes(letter)) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

const dictionary = readFileSync(`${__dirname}/words.txt`, "utf8");

export const isScrabbleWord = (word: string): boolean => {
  return dictionary.includes(word.toUpperCase());
};
