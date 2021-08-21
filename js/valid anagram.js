var isAnagram = function (s, t) {
  return stringify(creatMap(s)) === stringify(creatMap(t));
};

const creatMap = (string) => {
  let map = new Map();
  for (let character of string) {
    if (map.has(character)) map.set(character, map.get(character) + 1);
    else map.set(character, 1);
  }
  return map;
};

const stringify = (map) => JSON.stringify([...map.entries()].sort());

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));
