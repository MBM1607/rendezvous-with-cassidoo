/*
Given an array of words, return the words that can be typed using letters of only one row on a
keyboard. For bonus points, include the option for a user to pick the type of keyboard they are
using (ANSI, ISO, etc), and/or give options for how many/which rows are allowed!

Example:

```js
> oneRow(['candy', 'fart', 'pop', 'Zelda', 'flag', 'typewriter'])
> ['pop', 'flag', 'typewriter']
```
*/

export type KeyboardType = "qwerty" | "qwertz" | "dvorak" | "colemak" | "azerty";
export type RowOption =
  | "top"
  | "middle"
  | "bottom"
  | "top-and-middle"
  | "top-and-bottom"
  | "middle-and-bottom"
  | "any";

export const KEYBOARD_TYPES: Record<KeyboardType, string[]> = {
  qwerty: ["qwertyuiop", "asdfghjkl", "zxcvbnm"],
  qwertz: ["qwertzuiop", "asdfghjkl", "yxcvbnm"],
  dvorak: ["pyfgcrl", "aoeuidhtns", "qjkxbmwvz"],
  colemak: ["qwfpgjluy", "arstdhneio", "zxcvbkm"],
  azerty: ["azertyuiop", "qsdfghjklm", "wxcvbn"],
};

export const union = <T>(sets: Set<T>[]) => {
  const result = new Set<T>();
  sets.forEach(set => {
    set.forEach(item => {
      result.add(item);
    });
  });
  return result;
};

export const getAllowedRows = (keyboardType: KeyboardType, rowOption: RowOption) => {
  const rows = KEYBOARD_TYPES[keyboardType].map(row => new Set(row.split("")));
  switch (rowOption) {
    case "top":
      return rows[0];
    case "middle":
      return rows[1];
    case "bottom":
      return rows[2];
    case "top-and-middle":
      return union([rows[0], rows[1]]);
    case "top-and-bottom":
      return union([rows[0], rows[2]]);
    case "middle-and-bottom":
      return union([rows[1], rows[2]]);
    case "any":
    default:
      return union(rows);
  }
};

export const oneRow = (
  words: string[],
  keyboardType: KeyboardType = "qwerty",
  rowOption: RowOption = "any",
) => {
  const allowedSet = getAllowedRows(keyboardType, rowOption);
  return words.filter(word => [...word.toLowerCase()].every(letter => allowedSet.has(letter)));
};
