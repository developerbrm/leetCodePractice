const reverseString = (arr) => arr.reduce((acc, val) => [val, ...acc], []);

// console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["a", "b", "c", "d", "e"]));
