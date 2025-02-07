const singleNumber = (nums: number[]): number => {
  for (let item of nums) {
    if (nums.indexOf(item) === nums.lastIndexOf(item)) {
      return item;
    }
  }
};

console.log(singleNumber([1, 2, 3, 4, 3, 3, 3, 31]));
