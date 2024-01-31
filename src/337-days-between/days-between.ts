/*
Write a function called daysBetween that takes in two dates, and returns the number of days
between those dates. You can choose the date format you'd like to accept!

Example:

```js
> daysBetween('Jan 1, 2024', 'Jan 29, 2024')
> 28

> daysBetween('Feb 29, 2020', 'Oct 31, 2023')
> 1340
```
*/

export const daysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.abs(end.getTime() - start.getTime()) / (1000 * 3600 * 24);
};
