/*
Given a string s consisting of various parenthesis ( and ), find the length of the longest valid
parenthesis substring.

Example

```js
> parenthesisSubstring('(()(')
> 2

> parenthesisSubstring(')()(()))')
> 6
```
*/

const parenthesisSubstring = (parenthesisString: string): number => {
  const stack: Array<'('> = [];
  let longest = 0;

  [...parenthesisString].reduce((currentLongest, char) => {
    if (char === '(') {
      stack.push(char);
      return currentLongest;
    }

    if (stack.length === 0) return 0;

    const newLongest = currentLongest + 2;

    longest = Math.max(longest, newLongest);

    stack.pop();
    return newLongest;
  }, 0);

  return longest;
};

export { parenthesisSubstring };
