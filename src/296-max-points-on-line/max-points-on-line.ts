/*
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example:

```js
> maxPointsOnLine([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
> 4
```
*/

export type Point = [number, number];

export const maxPointsOnLine = (points: Point[]): number => {
  let max = 0;

  points.forEach((point, i) => {
    const map = new Map();
    let same = 0;
    let localMax = 0;

    // For each point, we check all other points to see if they are on the same line.
    points.slice(i + 1).forEach(point2 => {
      const [x1, y1] = point;
      const [x2, y2] = point2;

      // If the two points are the same, then we increment the count of duplicate points.
      // We do not need to consider these points again.
      if (x1 === x2 && y1 === y2) {
        same++;
        return;
      }

      // If the two points have the same x-coordinate, then the the line is vertical
      // and the slope is undefined. We use NaN to represent undefined.
      const slope = x1 === x2 ? NaN : (y2 - y1) / (x2 - x1);

      // If the slope is not in the map, then we have not seen any points with this slope.
      // Otherwise, we increment the count of points with this slope.
      const count = map.get(slope) || 0;
      map.set(slope, count + 1);

      // Update the local max if we have seen more points with this slope.
      localMax = Math.max(localMax, count + 1);
    });

    // Update the global max if we have seen more points on this line.
    // We add 1 to account for the current point. We add same to account for duplicate points.
    max = Math.max(max, localMax + same + 1);
  });

  return max;
};
