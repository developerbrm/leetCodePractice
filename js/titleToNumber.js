const titleToNumber = (title) =>
	[...title]
		.reduce(
			(acc, val, index, arr) =>
				acc + (val.charCodeAt() - 64) * 26 ** (arr.length - index - 1),
			0
		)

		[("A", "AB", "ZY")].forEach((item) => console.log(titleToNumber(item)));
