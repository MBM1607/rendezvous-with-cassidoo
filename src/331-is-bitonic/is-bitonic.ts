/*
**Given an array of integers, return the majority element.**
If there is no majority element, return if the array is majority even or odd numbers,
and if there is none, say so.

Example:

```js
> isBitonic([1,2,3,2])
> true // extra credit: 3

> isBitonic([1,2,3])
> false

> isBitonic([3,4,5,5,5,2,1])
> true // extra credit: 5
```
*/

export const isBitonic = (array: number[]): number | false => {
  let currentIndex = 0;
  let currentNumber = array[currentIndex];
  let peak = -1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= currentNumber) {
      currentNumber = array[i];
      currentIndex = i;
    } else {
      peak = currentNumber;
      break;
    }
  }

  for (let i = currentIndex + 1; i < array.length; i++) {
    if (array[i] <= currentNumber) {
      currentNumber = array[i];
    } else if (i < array.length - 1) {
      return false;
    }
  }

  return peak === -1 ? false : peak;
};
