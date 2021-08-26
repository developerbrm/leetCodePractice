//  Find first non-repeating character from string (e.g., abcabcdefgefgz)

const getFirstNonReapeatingCh = (str) => {
  const map = new Map();

  const updateObj = (obj, index) => {
    const { indexes } = obj;

    return { ...obj, duplicates: true, indexes: [...indexes, index] };
  };

  for (const [index, ch] of [...str].entries()) {
    if (map.has(ch)) {
      map.set(ch, updateObj(map.get(ch), index));
    } else {
      map.set(ch, { ch, indexes: [index], duplicates: false });
    }
  }

  const ans = [...map.values()]
    .filter(({ duplicates }) => duplicates !== true)
    .reduce((acc, val) => {
      if (Math.min(...val.indexes) < Math.min(...acc.indexes)) return val;
      else return acc;
    });

  return ans.ch;
};

console.log(getFirstNonReapeatingCh("atbcabcdefgefgzxxxxy"));
