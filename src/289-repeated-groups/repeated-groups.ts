/*
Given a list of numbers, return all groups of repeating consecutive numbers.

Example:

```js
> repeatedGroups([1, 2, 2, 4, 5])
[[2, 2]]

> repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9])
[[1, 1], [0, 0], [4, 4, 4], [9, 9]]
```
*/

export const repeatedGroups = (numbers: number[]): number[][] => {
  const result: number[][] = [];
  let currentGroup: number[] = [];

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      currentGroup.push(numbers[i]);
    } else if (currentGroup.length > 0) {
      currentGroup.push(numbers[i]);
      result.push(currentGroup);
      currentGroup = [];
    }
  }

  return result;
};
