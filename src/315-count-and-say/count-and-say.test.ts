import { countAndSay } from "./count-and-say";

interface countAndSayTestCase {
  input: number;
  output: string;
}

const countAndSayTestCases: countAndSayTestCase[] = [
  { input: 112222555, output: "two 1s, then four 2s, then three 5s" },
  { input: 3333333333, output: "ten 3s" },
  { input: 123, output: "one 1, then one 2, then one 3" },
  { input: 111222333, output: "three 1s, then three 2s, then three 3s" },
  { input: 111222333444, output: "three 1s, then three 2s, then three 3s, then three 4s" },
  {
    input: 111222333444555,
    output: "three 1s, then three 2s, then three 3s, then three 4s, then three 5s",
  },
  { input: 1111111111111111, output: "sixteen 1s" },
];

describe("countAndSay", () => {
  countAndSayTestCases.forEach(({ input, output }) => {
    test(`countAndSay(${input}) should be ${output}`, () => {
      expect(countAndSay(input)).toStrictEqual(output);
    });
  });
});
