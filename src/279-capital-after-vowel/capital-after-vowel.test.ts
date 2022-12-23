import { capitalAfterVowel, capitalAfterVowelRegex } from './capital-after-vowel';

interface capitalAfterVowelTest {
  input: string;
  output: string;
}

const capitalAfterVowelTests: capitalAfterVowelTest[] = [
  {
    input: 'hello world',
    output: 'heLlo WoRld',
  },
  {
    input: 'xaabeuekadii',
    output: 'xaaBeueKaDii',
  },
  {
    input: 'A quick brown fox jumps over the lazy dog',
    output: 'A QuiCk broWn foX juMps oVeR the LaZy DoG',
  },
];

describe('testing capitalAfterVowel', () => {
  it.each(capitalAfterVowelTests)('should return correctly converted string', test => {
    expect(capitalAfterVowel(test.input)).toStrictEqual(test.output);
  });
});

describe('testing capitalAfterVowelRegex', () => {
  it.each(capitalAfterVowelTests)('should return correctly converted string', test => {
    expect(capitalAfterVowel(test.input)).toStrictEqual(test.output);
  });
});
