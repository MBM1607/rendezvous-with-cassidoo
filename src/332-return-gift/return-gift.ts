/*
**You have some gifts you want to return. Gifts bought in December have a 90-day return window, and all other gifts have a 30-day return window. Given a gift's buy date, write a function that prints the last day you can return the gift.**

The date format should be ISO 8601, and the function should accept a date string and return a
date string.

Example:

```js
> returnGift("2023-12-25")
> "2024-03-24"
> returnGift("2023-11-25")
> "2023-12-25"
```
*/

export const returnGift = (date: string): string => {
  const [year, month, day] = date.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  const days = d.getMonth() === 11 ? 90 : 30;
  d.setDate(d.getDate() + days + 1);
  return d.toISOString().slice(0, 10);
};
