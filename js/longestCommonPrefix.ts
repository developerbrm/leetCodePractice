function longestCommonPrefix(strs: string[]): string {
  let result = '';

  const smallestString = strs.at(0);

  for (let i = 0; i < smallestString.length; i++) {
    const sbsString = smallestString.slice(0, i + 1);

    if (strs.some((str) => !str.startsWith(sbsString))) return result;

    result = sbsString;
  }

  return result;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
