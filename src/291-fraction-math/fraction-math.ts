/*
Write a function that can do the 4 basic operations (add, subtract, multiply and divide) on two
fractions. Return the most simplified form of the result. You can assume a non-zero denominator in
the input, and don’t use any built-in implementations in your language of choice, if you can!

Example:

```js
> fractionMath("3/4", "add", "3/4")
> "3/2"

> fractionMath("1/8", "multiply", "2/2")
> "1/8"
```
*/

interface Fraction {
  numerator: number;
  denominator: number;
}

// GCD (greatest common divisor) algorithm
const gcd = (a: number, b: number): number => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// Parse the fraction into numerator and denominator
const separateNumeratorAndDenominator = (fraction: string): Fraction => {
  const [numerator, denominator] = fraction.split("/");
  return { numerator: Number(numerator), denominator: Number(denominator) };
};

const addFractions = (fraction1: Fraction, fraction2: Fraction): Fraction => {
  const numerator =
    fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
  const denominator = fraction1.denominator * fraction2.denominator;
  return { numerator, denominator };
};

const subtractFractions = (fraction1: Fraction, fraction2: Fraction): Fraction => {
  const numerator =
    fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
  const denominator = fraction1.denominator * fraction2.denominator;
  return { numerator, denominator };
};

const multiplyFractions = (fraction1: Fraction, fraction2: Fraction): Fraction => {
  const numerator = fraction1.numerator * fraction2.numerator;
  const denominator = fraction1.denominator * fraction2.denominator;
  return { numerator, denominator };
};

const divideFractions = (fraction1: Fraction, fraction2: Fraction): Fraction => {
  const numerator = fraction1.numerator * fraction2.denominator;
  const denominator = fraction1.denominator * fraction2.numerator;
  return { numerator, denominator };
};

export const fractionMath = (
  fraction1: string,
  operation: "add" | "subtract" | "multiply" | "divide",
  fraction2: string,
): string => {
  const parsedFraction1 = separateNumeratorAndDenominator(fraction1);
  const parsedFraction2 = separateNumeratorAndDenominator(fraction2);

  const resultFraction =
    operation === "divide"
      ? divideFractions(parsedFraction1, parsedFraction2)
      : operation === "multiply"
      ? multiplyFractions(parsedFraction1, parsedFraction2)
      : operation === "add"
      ? addFractions(parsedFraction1, parsedFraction2)
      : subtractFractions(parsedFraction1, parsedFraction2);

  const gcdOfResult = gcd(resultFraction.numerator, resultFraction.denominator);
  const simplifiedNumerator = resultFraction.numerator / gcdOfResult;
  const simplifiedDenominator = resultFraction.denominator / gcdOfResult;

  if (simplifiedDenominator === 1) return `${simplifiedNumerator}`;
  return `${simplifiedNumerator}/${simplifiedDenominator}`;
};
