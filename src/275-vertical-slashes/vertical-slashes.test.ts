import { verticalSlashes } from './vertical-slashes';

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

describe('testing verticalSlashes', () => {
  it.each(verticalSlashTests)('should return correct downward drawn line', test => {
    expect(verticalSlashes(test.input)).toStrictEqual(test.output);
  });
});
