function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    const item = nums.at(i);

    if (item > nums.at(k)) {
      k++;

      nums[k] = item;
    }
  }

  return k + 1;
}

console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4]));
