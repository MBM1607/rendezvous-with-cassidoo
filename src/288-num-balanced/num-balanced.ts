/* eslint-disable unicorn/prefer-code-point */
/*
Given a string of parenthesis, return the number of parenthesis you need to add to the string in
order for it to be balanced.

Example:

```js
> numBalanced(`()`)
> 0

> numBalanced(`(()`)
> 1

> numBalanced(`))()))))()`)
> 6

> numBalanced(`)))))`)
> 5
```
*/

export const numBalanced = (parenthesis: string): number =>
  Math.abs([...parenthesis].reduce((acc, char) => acc + (char === "(" ? 1 : -1), 0));
