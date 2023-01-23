/*
Write a function that takes a string of slashes (\ and /) and returns all of those slashes drawn
downwards in a line connecting them.

Example:

```js
> verticalSlashes('\\\//\/\\')
\
 \
  \
  /
 /
 \
 /
 \
  \
> verticalSlashes('\\\\')
\
 \
  \
   \
```
*/

export const verticalSlashes = (slashes: string): string => {
  let output = "\n";
  let leftPad = 0;

  for (const slash of slashes) {
    output += `${" ".repeat(slash === "/" ? --leftPad : leftPad++)}${slash}\n`;
  }

  return output;
};
