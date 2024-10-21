import { describe, expect, test } from "vitest";
import { getRSS } from "./get-rss.js";

type TestCase = {
  input: string;
  output: string;
};

const TEST_CASES: TestCase[] = [
  { input: "https://cassidoo.co/rss.xml", output: "Cassidy Williams, https://cassidoo.co/" },
  {
    input: "https://feed.syntax.fm/",
    output: "Syntax - Tasty Web Development Treats, https://syntax.fm",
  },
  {
    input: "https://www.joshwcomeau.com/rss.xml",
    output: "Josh Comeau's blog, https://www.joshwcomeau.com/",
  },
];

describe("getRSS", () => {
  for (const { input, output } of TEST_CASES) {
    test(`should return "${output}" when given "${input}"`, async () => {
      const result = await getRSS(input);
      expect(result).toBe(output);
    });
  }
});
