var threeSum = function (nums) {
  if (nums.length < 3 && nums.every((x) => x === 0)) return [];
  let ans = new Map();

  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j && nums[i] === nums[j]) continue;
      let next = nums[j];
      let nextPro = nums[j + 1];

      if (nums[i] + next + nextPro === 0) {
        let match = [nums[i], next, nextPro].sort();
        console.log(match)
        ans.set(match.join(), match);
      }
    }
  }

  return [...ans.values()];
};

console.log(threeSum([-2,1,1]));
