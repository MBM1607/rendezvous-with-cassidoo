export const findUnused = (lines: string[]) => {
  const variables = new Set<string>();
  const usedVariables = new Set<string>();

  for (const line of lines) {
    if (line.match(/(\w+)=\w/g)) {
      const [variable, assignedValue] = line.split("=").map(x => x.trim());
      if (variable) variables.add(variable);

      if (assignedValue && variables.has(assignedValue)) {
        usedVariables.add(assignedValue);
      }
    }

    if (line.match(/log\((\w+)\)/g)) {
      const variable = line.split("(")[1]?.split(")")[0]?.trim();
      if (variable && variables.has(variable)) {
        usedVariables.add(variable);
      }
    }
  }

  return [...variables.difference(usedVariables)];
};
