const majorityElement = (arr) => {
	if (!!!arr.length) return 0;

	const map = new Map();

	for (let item of arr) {
		map.set(item, map.get(item) + 1 || 0);
	}

	return [...map.entries()]
		.reduce((acc, val) => (acc.at(1) > val.at(1) ? acc : val))
		.at(0);
};

console.log(
	majorityElement([
		1, 2, 3, 4, 45, 4, 3, 32, 2, 2, 21, 21, 2, 2, 23, 32, 323, 23, 23, 232, 2,
		1, 2, 12,
	])
);
