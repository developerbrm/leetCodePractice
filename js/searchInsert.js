const searchInsert = (nums, target, looped = 0) => {
  if (target < Math.min(...nums)) return 0;
  else if (target > Math.max(...nums)) return nums.length;
  else if (target === -1) return -1;

  return nums.indexOf(target) === -1
    ? searchInsert(nums, target - 1, looped + 1) + 1 - looped
    : nums.indexOf(target);
};

console.log(searchInsert([1, 2, 3, 5], 8));

//[1,2,3,4,5,6,7,8]
