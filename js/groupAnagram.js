const groupAnagrams = (strs) => {
  const ans = new Map();

  for (let item of strs) {
    const key = item.split("").sort().join("");

    if (ans.has(key)) ans.set(key, [...ans.get(key), item]);
    else ans.set(key, [item]);
  }

  return [...ans.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
