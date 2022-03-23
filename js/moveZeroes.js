const moveZeroes = (nums) => nums.sort((a, b) => (a === 0 ? 1 : 0));

[[0, 1, 0, 3, 12], [0], [0, 0, 1]].forEach((arr) => {
	// [[0, 0, 1]].forEach((arr) => {
	console.log(moveZeroes(arr));
});
