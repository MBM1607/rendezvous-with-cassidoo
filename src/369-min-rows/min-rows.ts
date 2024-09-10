type RowMap = {
  filled: number;
  unfilled: number;
};

export const minRows = (groups: number[], rowSize: number): number => {
  let rowMap: RowMap[] = [];

  groups: for (const group of groups.sort((a, b) => b - a)) {
    for (let i = 0; i < rowMap.length; i++) {
      const { filled, unfilled } = rowMap[i] as RowMap;

      if (unfilled === 0 || filled + group > rowSize) continue;

      rowMap[i] = { filled: filled + group, unfilled: unfilled - group };
      continue groups;
    }
    rowMap.push({ filled: group, unfilled: rowSize - group });
  }

  return rowMap.length;
};
