const sortColors = (nums) => {
	const res = [...Array(3)].reduce(
		(acc, val, index) => [
			...acc,
			...nums.filter((item) => String(item) === String(index)),
		],
		[]
	);

	res.forEach((item, index) => (nums[index] = item));

	return nums;
};
