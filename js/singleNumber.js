const singleNumber = (nums) => {
  const repsMap = new Map();

  nums.forEach((item) => {
    if (repsMap.has(item)) {
      repsMap.set(item, repsMap.get(item) + 1);
    } else {
      repsMap.set(item, 1);
    }
  });

  let ans;

  repsMap.forEach((val, key) => {
    if (val === 1) ans = key;
  });

  return ans;
};

[[2, 2, 1], [4, 1, 2, 1, 2], [1]].forEach((arr) => {
  // singleNumber(arr);
  console.log(singleNumber(arr));
});
