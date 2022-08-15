import { parenthesisSubstring } from './parenthesis-substring';

const tests = [
  { string: '(()(', solution: 2 },
  { string: ')()(()))', solution: 6 },
  { string: ')()(()(()))', solution: 10 },
  { string: '())(())', solution: 4 },
  { string: '())(()', solution: 2 },
  { string: '())(())()()', solution: 8 },
];

describe('testing parenthesisSubstring', () => {
  for (const test of tests) {
    it(`${test.string} should return ${test.solution}`, () => {
      const solution = parenthesisSubstring(test.string);
      expect(solution).toBe(test.solution);
    });
  }
});
