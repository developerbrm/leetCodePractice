var containsDuplicate = function (nums) {
  // return nums.some((item, parentIndex) =>
  //   nums.some((x, childIndex) => {
  //     if (parentIndex === childIndex) return false;
  //     else return x === item;
  //   })
  // );

  // const map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (map[nums[i]]) return true
  //   else map[nums[i]] = 1;
  // }
  // return false

  return nums.length > new Set(nums).size
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
