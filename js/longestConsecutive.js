const longestConsecutive = (arr) => {
	const sortedArr = arr.sort((a, b) => a - b);

	const array = [...new Set(sortedArr)];

	const allSequences = [];

	let currentSequence = [];

	for (let i = 0; i < array.length; i++) {
		if (currentSequence.at(-1) + 1 === array.at(i)) {
			currentSequence.push(array.at(i));
		} else if (array.at(i) + 1 === array.at(i + 1)) {
			allSequences.push(allSequences, currentSequence);
			currentSequence = [];
		}
	}

	console.log(allSequences);

	// return ans.length;
};

[
	[100, 4, 200, 1, 3, 2],
	[0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
	[9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6],
].forEach((item) => console.log(longestConsecutive(item)));
