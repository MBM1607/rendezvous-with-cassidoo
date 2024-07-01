export type Fruits = {
  [name: string]: {
    price: number;
    quantity: number;
  };
};

export class FruitStand {
  private fruits: Fruits = {};

  addFruit(name: string, quantity: number, price: number): void {
    this.fruits[name] = { quantity, price };
  }

  updateQuantity(name: string, quantity: number): void {
    this.fruits[name].quantity = quantity;
  }

  totalValue() {
    return Object.values(this.fruits).reduce((total, { price, quantity }) => {
      return total + price * quantity;
    }, 0);
  }
}
