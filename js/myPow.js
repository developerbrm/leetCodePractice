const myPow = (x, n) => {
	if (n === 0) return 1;
	if (n === 1) return x;

	let i = 0,
		j = 0;
	let multipleRes = 1;

	// debugger
	while (i < Math.abs(n)) {
		multipleRes = x * multipleRes;
		i++;
	}

	/// positive case ---------
	if (n > 0) return multipleRes;
	/// negetive case ---------
	else return 1 / multipleRes;
};

[
	[2.0, 10],
	[2.1, 3],
	[2.0, -2],
].forEach((item) => console.log(myPow(...item)));
