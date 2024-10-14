export type Point = [number, number];

export const generateCircle = (radius: number, center: Point, color: string): string => {
  const [cx, cy] = center;
  const width = cx * 2;
  const height = cy * 2;

  return `<svg width="${width}" height="${height}"><circle cx="${cx}" cy="${cy}" r="${radius}" fill="${color}" /></svg>`;
};
