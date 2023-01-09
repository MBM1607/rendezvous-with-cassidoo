/*
Given a number, sum every second digit in that number.

Example:

```js
> sumEveryOther(548915381)
> 26 // 4+9+5+8

> sumEveryOther(10)
> 0

> sumEveryOther(1010.11)
> 1 // 0+0+1
```
*/

export const sumEveryOther = (number: number): number =>
  [...String(number)]
    .map(Number)
    .filter((_, index) => index % 2 !== 0)
    .reduce((a, b) => a + b, 0);
