import { describe, expect, test } from "vitest";
import { capitalAfterVowel } from "./capital-after-vowel.js";

interface capitalAfterVowelTest {
  input: string;
  output: string;
}

const capitalAfterVowelTests: capitalAfterVowelTest[] = [
  {
    input: "hello world",
    output: "heLlo WoRld",
  },
  {
    input: "xaabeuekadii",
    output: "xaaBeueKaDii",
  },
  {
    input: "A quick brown fox jumps over the lazy dog",
    output: "A QuiCk broWn foX juMps oVeR the LaZy DoG",
  },
  {
    input: `
      All that is gold does not glitter,
      Not all those who wander are lost;
      The old that is strong does not wither,
      Deep roots are not reached by the frost.
      From the ashes a fire shall be woken,
      A light from the shadows shall spring;
    `,
    output: `
      ALl thaT iS goLd doeS noT gliTteR,
      NoT aLl thoSe Who WaNdeR aRe LoSt;
      The oLd thaT iS stroNg doeS noT wiTheR,
      DeeP rooTs aRe NoT reaCheD by The FroSt.
      FroM the aSheS a FiRe ShaLl be WoKeN,
      A LiGht froM the ShaDoWs shaLl spriNg;
    `,
  },
];

describe("testing capitalAfterVowel", () => {
  test.each(capitalAfterVowelTests)("should return correctly converted string", t => {
    expect(capitalAfterVowel(t.input)).toStrictEqual(t.output);
  });
});

describe("testing capitalAfterVowelRegex", () => {
  test.each(capitalAfterVowelTests)("should return correctly converted string", t => {
    expect(capitalAfterVowel(t.input)).toStrictEqual(t.output);
  });
});
