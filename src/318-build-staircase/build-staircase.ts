/*
You have n equal-sized blocks and you want to build a staircase with them.
Return the number of steps you can fully build.

Example:

```js
> buildStaircase(6)
> 3

// #
// ##
// ###

> buildStaircase(9)
> 3 // it takes 10 blocks to make 4 steps
```
*/

export const buildStaircase = (blocks: number): number =>
  Math.floor((-1 + Math.sqrt(8 * blocks + 1)) / 2);
