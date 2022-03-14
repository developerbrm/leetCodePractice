const reverseString = (arr) => {
	let i = 0,
		j = arr.length - 1;

	while (i < Math.ceil(arr.length / 2)) {
		const lastChar = arr.at(j);
		const firstChar = arr.at(i);

		arr.splice(i, 1, lastChar);
		arr.splice(j, 1, firstChar);

		i++;
		j--;
	}

	return arr;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
