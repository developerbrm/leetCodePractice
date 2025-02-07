/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  k = k % nums.length;
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];

      start++;
      end--;
    }
  };

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const nums = [
  [[1, 2, 3, 4, 5, 6, 7], 3],
  [[-1, -100, 3, 99], 2],
  [[-1, -100, 3, 99], 0],
  [[-1, -100, 3, 99], 1],
];

nums.forEach(([nums, k]) => {
  console.log(nums, k, 'Before');
  rotate(nums, k);
  console.log(nums, 'After');
});
