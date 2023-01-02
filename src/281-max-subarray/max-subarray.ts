/*
Given an array of integers arr and an integer n, return a subarray of arr of length n where the
sum is the largest. Make sure you maintain the order of the original array, and if n is greater
than arr.length, you can choose what you want to return.

Example:

```js
> maxSubarray([-4,2,-5,1,2,3,6,-5,1], 4)
> [1,2,3,6]

> maxSubarray([1,2,0,5], 2)
> [0,5]
```
*/

export const maxSubarray = (array: number[], subLength: number): number[] => {
  let maxSum = 0;
  let maxSub: number[] = [];

  for (let index = 0; index < array.length - subLength + 1; index++) {
    const sub = array.slice(index, index + subLength);
    const subSum = sub.reduce((a, b) => a + b, 0);

    if (subSum > maxSum) {
      maxSum = subSum;
      maxSub = sub;
    }
  }

  return maxSub;
};
