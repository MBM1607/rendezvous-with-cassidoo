/*
Given a non-empty array containing only non-negative integers, return the list with trailing and
leading zeroes removed.

Example:

```js
> removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])
> [3, 1, 4, 1, 5, 9]

> removeZeroes([0, 0, 0])
> []

> removeZeroes([8])
> [8]
```
*/

export const removeZeroes = (array: number[]): number[] =>
  [...array.join("").replace(/^0+|0+$/g, "")].map(Number);
