import { describe, expect, test } from "vitest";
import { verticalSlashes } from "./vertical-slashes.js";

interface verticalSlashTest {
  input: string;
  output: string;
}

const verticalSlashTests: verticalSlashTest[] = [
  {
    input: `\\\\\\//\\/\\\\`,
    output: `
\\
 \\
  \\
  /
 /
 \\
 /
 \\
  \\
`,
  },
  {
    input: `\\\\\\\\`,
    output: `
\\
 \\
  \\
   \\
`,
  },
];

describe("testing verticalSlashes", () => {
  test.each(verticalSlashTests)("should return correct downward drawn line", t => {
    expect(verticalSlashes(t.input)).toStrictEqual(t.output);
  });
});
