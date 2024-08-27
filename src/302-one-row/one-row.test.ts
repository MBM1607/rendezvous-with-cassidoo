import { describe, expect, test } from "vitest";
import type { KeyboardType, RowOption } from "./one-row.js";
import { oneRow } from "./one-row.js";

interface OneRowTestCase {
  input: {
    words: string[];
    keyboardType: KeyboardType;
    rowOption: RowOption;
  };
  output: string[];
}

const ONE_ROW_TEST_CASES: OneRowTestCase[] = [
  {
    input: {
      words: ["candy", "fart", "pop", "Zelda", "flag", "typewriter"],
      keyboardType: "qwerty",
      rowOption: "any",
    },
    output: ["candy", "fart", "pop", "Zelda", "flag", "typewriter"],
  },
  {
    input: {
      words: ["candy", "fart", "pop", "Zelda", "flag", "typewriter"],
      keyboardType: "qwerty",
      rowOption: "top",
    },
    output: ["pop", "typewriter"],
  },
  {
    input: {
      words: ["candy", "fart", "pop", "Zelda", "flag", "typewriter"],
      keyboardType: "qwerty",
      rowOption: "middle",
    },
    output: ["flag"],
  },
  {
    input: {
      words: ["candy", "fart", "pop", "Zelda", "flag", "typewriter"],
      keyboardType: "qwerty",
      rowOption: "bottom",
    },
    output: [],
  },
  {
    input: {
      words: [
        "suffer",
        "snails",
        "mere",
        "veil",
        "strong",
        "guide",
        "bath",
        "thick",
        "loss",
        "hope",
        "heady",
        "wish",
      ],
      keyboardType: "qwerty",
      rowOption: "top-and-middle",
    },
    output: ["suffer", "guide", "loss", "hope", "heady", "wish"],
  },
  {
    input: {
      words: [
        "suffer",
        "snails",
        "mere",
        "veil",
        "strong",
        "guide",
        "bath",
        "thick",
        "loss",
        "hope",
        "heady",
        "wish",
      ],
      keyboardType: "qwertz",
      rowOption: "top-and-bottom",
    },
    output: ["mere"],
  },
  {
    input: {
      words: [
        "suffer",
        "snails",
        "mere",
        "veil",
        "strong",
        "guide",
        "bath",
        "thick",
        "loss",
        "hope",
        "heady",
        "wish",
      ],
      keyboardType: "dvorak",
      rowOption: "middle-and-bottom",
    },
    output: ["bath", "wish"],
  },
  {
    input: {
      words: ["silence", "colemark"],
      keyboardType: "colemak",
      rowOption: "any",
    },
    output: ["silence", "colemark"],
  },
  {
    input: {
      words: ["silence", "colemark"],
      keyboardType: "colemak",
      rowOption: "top-and-bottom",
    },
    output: [],
  },
];

describe("oneRow", () => {
  ONE_ROW_TEST_CASES.forEach(({ input, output }) => {
    test(`returns ${output} for ${JSON.stringify(input)}`, () => {
      expect(oneRow(input.words, input.keyboardType, input.rowOption)).toEqual(output);
    });
  });
});
