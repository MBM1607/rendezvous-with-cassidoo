/*
Given a positive integer, generate an array in which every element is an array that goes from 1
to the index of that array.

Example:

```js
> generateArrays(4)
> [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

> generateArrays(1)
> [[1]]
```
*/

export const generateArrays = (number: number): number[][] =>
  Array.from({ length: number }, (_, index) =>
    Array.from({ length: index + 1 }, (__, innerIndex) => innerIndex + 1),
  );
