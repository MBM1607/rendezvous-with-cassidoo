/*
Given an array of integers, sort them into two separate sorted arrays of even and odd numbers.
If you see a zero, skip it.

Example:

```js
> separateAndSort([4,3,2,1,5,7,8,9])
> [[2,4,6], [1,3,5,7,9]]

> separateAndSort([1,1,1,1])
> [[], [1,1,1,1]]
```
*/

export const separateAndSort = (array: number[]): [number[], number[]] => {
  const even: number[] = [];
  const odd: number[] = [];

  array.sort().forEach(num => {
    if (num === 0) return;

    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  });

  return [even, odd];
};
