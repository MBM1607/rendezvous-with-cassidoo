/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example:

```js
> isAnagram('barbie', 'oppenheimer')
> false

> isAnagram('race', 'care')
> true
```
*/

export const isAnagram = (first: string, second: string): boolean =>
  first.split("").sort().join("") === second.split("").sort().join("");
