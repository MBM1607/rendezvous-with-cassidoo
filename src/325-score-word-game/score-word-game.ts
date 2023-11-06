/*
**Given a list of words and a dictionary of letter scores, find the word with the highest score
according to the rules:**

`score = word_length * (sum of letter scores in the word)`

If there are multiple words with the same highest score, return the lexicographically smallest one.

Example:

```js
const wordList = ["apple", "banana", "cherry", "date", "fig"];

const letterScores = [...Array(26).keys()].reduce((scores, i) => (scores[String.fromCharCode(97 + i)] = i + 1, scores), {});
// This produces { 'a': 1, 'b': 2, 'c': 3, 'd': 4, ... }

scoreWordGame(wordList, letterScores)
// 'cherry'
```
*/

export const calculateWordScore = (word: string, letterScores: Record<string, number>): number =>
  word.length *
  word.split("").reduce((accumulator, letter) => letterScores[letter] + accumulator, 0);

export const scoreWordGame = (wordList: string[], letterScores: Record<string, number>) => {
  const sortedList = wordList.sort(
    (firstWord, secondWord) =>
      calculateWordScore(firstWord, letterScores) - calculateWordScore(secondWord, letterScores),
  );

  return sortedList[sortedList.length - 1];
};
