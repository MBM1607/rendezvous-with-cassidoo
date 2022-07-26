/*
Given two arrays A and B, return the indices at which the two arrays intersect.
If the two arrays have no intersection at all, return null.
Extra credit: how would you change your code if they were linked lists instead of arrays,
if the input were the two head nodes, and you returned the intersection node?
(see https://i.imgur.com/UyglRcN.png if it helps you visualize it)

Example:
```js
let listA = [1,4,5,6]
let listB = [2,3,4,5,6]

> findIntersection(listA, listB)
> [1, 2]
```
*/
const findIntersectionInArrays = (firstList: number[], secondList: number[]) => {
  let indexInB = -1;
  const indexInA = firstList.findIndex(itemInA => {
    indexInB = secondList.indexOf(itemInA);
    return indexInB > -1;
  });

  return indexInA > -1 ? [indexInA, indexInB] : null;
};

export { findIntersectionInArrays };
