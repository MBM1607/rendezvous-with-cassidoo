import { scramble } from "./scramble";

const shuffleTests = [
  "A quick brown fox jumped over the lazy dog.",
  "Waltz, bad nymph, for quick jigs vex",
  "Glib jocks quiz nymph to vex dwarf.",
  "Sphinx of black quartz, judge my vow.",
  "How quickly daft jumping zebras vex!",
  "The five boxing wizards jump quickly.",
  "Jackdaws love my big sphinx of quartz.",
  "Pack my box with five dozen liquor jugs.",
];

describe("testing shuffle", () => {
  it.each(shuffleTests)("given a sentence, scramble the insides", test => {
    expect(scramble(test)).not.toStrictEqual(test);
  });
});
