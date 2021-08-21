function maxProduct(nums) {
  if (nums.length === 1) return nums[0];

  let [min, max] = [1, 1];

  return nums.reduce((acc, num) => {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num),
    ];

    acc = Math.max(acc, max);
    return acc;
  }, 0);
}

console.log(maxProduct([]));
