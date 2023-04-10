# findIntersection

Interview question of the [issue #258 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/discovering-the-truth-about-ourselves-is-a/).

## The Question

Given two arrays A and B, return the indices at which the two arrays intersect. If the two arrays have no intersection at all, return null. Extra credit: how would you change your code if they were linked lists instead of arrays, if the input were the two head nodes, and you returned the intersection node?

### Visualization Diagram

![Visualization Diagram](https://i.imgur.com/UyglRcN.png)

### Example

```js
let listA = [1, 4, 5, 6];
let listB = [2, 3, 4, 5, 6] > findIntersection(listA, listB) > [1, 2];
```

## Solution

![Code Polaroid](./code.png)
