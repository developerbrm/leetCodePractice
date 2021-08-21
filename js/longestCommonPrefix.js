const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  const getShortestElemnt = (arr) =>
    arr.reduce((acc, curr) => {
      if (!curr.length) return acc;
      return curr.length < acc.length ? curr : acc;
    });

  const shortestElement = getShortestElemnt(strs);

  return strs
    .map((item) => {
      let currentMatch = "";
      let i = 0;

      while (i < shortestElement.length) {
        if (item[i] === shortestElement[i]) currentMatch += item[i];
        else return currentMatch;

        i++;
      }

      return currentMatch;
    })
    .reduce((acc, curr) => (acc.includes(curr) ? curr : acc));
};

[
  ["flower", "flow", "flight"],
  ["dog", "racecar", "car"],
].forEach((arr) => {
  // longestCommonPrefix(arr);
  console.log(longestCommonPrefix(arr));
});

// export default longestCommonPrefix;
