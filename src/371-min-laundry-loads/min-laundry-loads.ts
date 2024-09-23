export type TColor = "red" | "green" | "blue" | "white" | "black" | (string & {});
export type TFabric = "normal" | "delicate" | "heavy";
export type TLaundryLoad = [TColor, TFabric];

export const minLaundryLoads = (loads: TLaundryLoad[]): number => {
  const sortedLoads: Record<string, number> = {};

  for (const load of loads) {
    const [color, fabric] = load;
    const fabricGroup = fabric === "delicate" ? "delicate" : "normal";
    const key = `${color}-${fabricGroup}`;

    sortedLoads[key] = (sortedLoads[key] || 0) + 1;
  }

  return Object.keys(sortedLoads).length;
};
