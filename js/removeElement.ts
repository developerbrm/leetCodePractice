function removeElement(nums: number[] | null[], val: number): number {
  let k = 0;

  for (const item of nums) {
    if (item !== val) {
      nums[k] = item;

      k++;
    }
  }

  return k;
}
