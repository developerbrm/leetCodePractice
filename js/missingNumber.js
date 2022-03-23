const missingNumber = (arr) => {
	const l = arr.length;
	let i = 0;
	while (i < l) {
		if (!!!arr.includes(i)) return i;

		i++;
	}
};

[
	[3, 0, 1],
	[0, 1],
	[9, 6, 4, 2, 3, 5, 7, 0, 1],
].forEach((item) => console.log(missingNumber(item)));
