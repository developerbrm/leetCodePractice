const sortedSquares = (arr) => arr.map((a) => a ** 2).sort((a, b) => a - b);

[
	[-4, -1, 0, 3, 10],
	[-7, -3, 2, 3, 11],
].forEach((num) => console.log(sortedSquares(num)));
