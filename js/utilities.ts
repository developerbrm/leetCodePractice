export const makeHashMapFromString = (string: string) => {
  const map = new Map<string, number>();

  for (const item of string) {
    const count = (map.get(item) ?? 0) + 1;
    map.set(item, count);
  }

  return map;
};
