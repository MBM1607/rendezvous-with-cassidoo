/*
Given a sequence of numbers, generate a "count and say" string.

Example:

```js
> countAndSay(112222555)
> "two 1s, then four 2s, then three 5s"

> countAndSay(3333333333)
> "ten 3s"
```
*/

import { convertNumberToWords } from "../294-source-character-count/source-character-count.js";

export const countAndSay = (input: number): string => {
  const numbers = [];

  let currentNumber = input % 10;
  let currentCount = 1;
  let remaining = Math.floor(input / 10);

  while (remaining > 0) {
    const nextNumber = remaining % 10;
    if (nextNumber === currentNumber) {
      currentCount++;
    } else {
      numbers.push([currentNumber, currentCount]);
      currentNumber = nextNumber;
      currentCount = 1;
    }
    remaining = Math.floor(remaining / 10);
  }

  numbers.push([currentNumber, currentCount]);

  return numbers
    .reverse()
    .reduce(
      (acc, [number, count], index) =>
        `${acc}${convertNumberToWords(count)} ${number}${count > 1 ? "s" : ""}${
          index + 1 !== numbers.length ? ", then " : ""
        }`,
      "",
    );
};
