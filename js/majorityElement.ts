function majorityElement(nums: number[]): number {
  const elementsMap = new Map();

  for (const element of nums) {
    elementsMap.set(element, elementsMap?.get(element) + 1 || 1);
  }

  const maxElement = [...elementsMap]
    .reduce((acc, val) => (acc.at(1) > val.at(1) ? acc : val))
    .at(0);

  return maxElement;
}
