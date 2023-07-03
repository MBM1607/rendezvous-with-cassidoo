/*
Given an integer n, return true if it's a perfect square AND when reversed, is still a perfect
square.

Example:

```js
> reversedSquares(9)
> true

> reversedSquares(441)
> true

> reversedSquares(25)
> false
```
*/

export const reversedSquares = (number: number) =>
  Number.isInteger(Math.sqrt(number)) &&
  Number.isInteger(Math.sqrt(parseInt(number.toString().split("").reverse().join(""))));
