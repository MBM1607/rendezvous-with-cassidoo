/*
**Given an array of integers and a number k (where k is guaranteed to be less than the array's
length), return a subarray of length k with the minimum possible sum.**
Maintain the order of the original array!

Example:

```js
> minSubs([1,3,20,4,8,9,11], 3)
> [4,8,9]

> minSubs([4,4,4,4,8], 2)
> [4,4]
```
*/

export const minSubs = (array: number[], length: number): number[] => {
  let minSum = Infinity;
  let minSubArray: number[] = [];
  for (let i = 0; i < array.length - length + 1; i++) {
    const slice = array.slice(i, i + length);
    const sliceSum = slice.reduce((acc, curr) => acc + curr, 0);
    if (sliceSum < minSum) {
      minSum = sliceSum;
      minSubArray = slice;
    }
  }
  return minSubArray;
};
