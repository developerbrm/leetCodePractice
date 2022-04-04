const largestNumber = (nums) =>
	nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`)).join("");

[
	[10, 2],
	[3, 30, 34, 5, 9],
].forEach((item) => console.log(largestNumber(item)));
