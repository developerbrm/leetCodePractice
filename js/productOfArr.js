var productExceptSelf = function (nums) {
  let ans = new Array(nums.length);
  let [left, right] = [1, 1];

  for (let i = 0; i < nums.length; i++) {
    ans[i] = right;
    right *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= left;
    left *= nums[i];
  }

  return ans
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([1, 3, 4]));
