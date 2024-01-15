/*
Given a 2D array, write a function that flips it vertically or horizontally.

Example:

```js
let array = [
[1,2,3],
[4,5,6],
[7,8,9]
]

> flip(array, 'horizontal')
> [[3,2,1],[6,5,4],[9,8,7]]

> flip(array, 'vertical')
> [[7,8,9],[4,5,6],[1,2,3]]
```
*/

export type Direction = "horizontal" | "vertical";
export const flip = (array: number[][], direction: Direction): number[][] =>
  direction === "horizontal" ? array.map(row => row.reverse()) : array.reverse();
