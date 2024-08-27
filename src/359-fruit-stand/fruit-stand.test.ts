import { beforeEach, describe, expect, test } from "vitest";
import { FruitStand } from "./fruit-stand.js";

describe("FruitStand", () => {
  let fruitStand: FruitStand;

  beforeEach(() => {
    fruitStand = new FruitStand();
  });

  test("addFruit", () => {
    fruitStand.addFruit("apple", 10, 1.5);
    expect(fruitStand.totalValue()).toBe(15);
  });

  test("updateQuantity", () => {
    fruitStand.addFruit("apple", 10, 1.5);
    fruitStand.updateQuantity("apple", 5);
    expect(fruitStand.totalValue()).toBe(7.5);
  });

  test("All together", () => {
    fruitStand.addFruit("apple", 10, 1.5);
    fruitStand.addFruit("banana", 5, 0.5);
    fruitStand.addFruit("orange", 3, 3);
    fruitStand.updateQuantity("banana", 2);
    expect(fruitStand.totalValue()).toBe(25);
  });
});
