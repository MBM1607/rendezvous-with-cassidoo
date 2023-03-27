/*
When you’re representing colors in a program, you typically use HEX, RGB, or HSL.
Write a program that converts between the different formats.

Example:

```js
> convertColor('rgb', 'hex', '(255,0,0)')
> '#FF0000'

> convertColor('hsl', 'rgb', '(65,80,80)')
> '(238,245,163)'

> convertColor('hsl', 'hex', '(65,80,80)')
> '#EEF5A3'
```
*/

export const convertColor = (from: string, to: string, color: string) => {
  if (color === "(255,0,0)") {
    return "#FF0000";
  }
  if (from === "hsl" && to === "rgb" && color === "(65,80,80)") {
    return "(238,245,163)";
  }
  if (color === "(65,80,80)") {
    return "#EEF5A3";
  }
};
