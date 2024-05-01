const RIGHT_SHIFT_ANSI_KEY_MAP = {
  w: "q",
  e: "w",
  r: "e",
  t: "r",
  y: "t",
  u: "y",
  i: "u",
  o: "i",
  p: "o",
  "[": "p",
  "]": "[",
  s: "a",
  d: "s",
  f: "d",
  g: "f",
  h: "g",
  j: "h",
  k: "j",
  l: "k",
  ";": "l",
  "'": ";",
  x: "z",
  c: "x",
  v: "c",
  b: "v",
  n: "b",
  m: "n",
  ",": "m",
  ".": ",",
  "/": ".",
};

type RightShiftAnsiKey = keyof typeof RIGHT_SHIFT_ANSI_KEY_MAP;

export const translateRightShift = (text: string): string => {
  let correctedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char in RIGHT_SHIFT_ANSI_KEY_MAP) {
      const keyChar = char.toLowerCase() as RightShiftAnsiKey;
      correctedText += RIGHT_SHIFT_ANSI_KEY_MAP[keyChar];
    } else {
      correctedText += char;
    }
  }

  return correctedText;
};
