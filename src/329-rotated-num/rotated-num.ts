/*
There is a sorted integer array that has been rotated an unknown number of times.
Given that rotated array, return how many times it has been rotated.
It may contain duplicate numbers!

Example:

```js
> rotatedNum([4, 0, 1, 2, 3])
> 1

> rotatedNum([7, 9, 20])
> 0

> rotatedNum([7, 7, 314, 1337, 7])
> 4
```
*/

export const rotatedNum = (array: number[]): number => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] > array[end]) start = mid + 1;
    else end = mid;
  }

  return start;
};
