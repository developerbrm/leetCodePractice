function majorityElement(nums: number[]): number {
  const elementsMap = new Map();
  const n = Math.floor(nums.length / 2);

  for (const element of nums) {
    const currentCount = elementsMap.get(element) || 1;

    elementsMap.set(element, currentCount + 1);

    if (currentCount > n) return element;
  }

  const maxElement = [...elementsMap]
    .reduce((acc, val) => (acc.at(1) > val.at(1) ? acc : val))
    .at(0);

  return maxElement;
}
