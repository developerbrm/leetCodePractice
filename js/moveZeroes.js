// const moveZeroes = (nums) => nums.sort((a, b) => (a === 0 ? 1 : 0));
const moveZeroes = (nums) => {
	if (nums.length < 2) return nums;
	let zerosCount = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums.at(i) === 0) {
			nums.splice(i, 1);
			zerosCount++;
			i--;
		}
	}

	nums.push(...Array(zerosCount).fill(0));

	return nums;
};

[[0, 1, 0, 3, 12], [0], [0, 0, 1]].forEach((arr) => {
	// [[0, 0, 1]].forEach((arr) => {
	console.log(moveZeroes(arr));
});
