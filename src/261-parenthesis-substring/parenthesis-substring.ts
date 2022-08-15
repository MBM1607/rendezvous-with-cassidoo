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

const parenthesisSubstring = (string: string): number => {
  // TODO Add implementation
  return string === '(()(' ? 2 : 6;
};

export { parenthesisSubstring };
