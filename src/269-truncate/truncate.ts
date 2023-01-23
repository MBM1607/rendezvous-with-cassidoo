/*
Write a function that truncates words in a string to length n.

Example:

```js
let n = 3

> truncate('never gonna give you up', n)
> 'nev gon giv you up'

> truncate('*hello* darkness, my ~old_friend', n)
> '*hel* dar, my ~old_fri'
```
*/

export const truncate = (string: string, length: number): string => {
  return string.replace(new RegExp(`([^\\W\\d_]{${length}})[^\\W\\d_]*`, "gi"), "$1");
};
