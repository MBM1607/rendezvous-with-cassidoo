import { parenthesisSubstring } from './parenthesis-substring';

describe('testing swapArrayPairs', () => {
  it('(()( should return 2', () => {
    expect(parenthesisSubstring('(()(')).toBe(2);
  });

  it(')()(())) should return 6', () => {
    expect(parenthesisSubstring(')()(()))')).toBe(6);
  });
});
