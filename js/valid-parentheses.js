export const isValid = (s) => {
	if (!!!s || s.length <= 1) return false;

	const map = new Map();

	map.set("(", 0);
	map.set("[", 0);
	map.set("{", 0);

	const updateMap = (char) => {
		const isBracketLeftOpened = [...map.keys()]
			.filter((key) => key !== char)
			.some((key) => map.get(key) !== 0);

		if (isBracketLeftOpened) return false;

		if (map.get(char) <= 0) return false;
		else map.set(char, map.get(char) - 1);

		return true;
	};

	for (let char of s) {
		switch (char) {
			case ")": {
				if (!!!updateMap("(")) return false;
				break;
			}
			case "}": {
				if (!!!updateMap("{")) return false;
				break;
			}
			case "]": {
				if (!!!updateMap("[")) return false;
				break;
			}

			default: {
				if (!!!["(", "[", "{"].includes(char)) return false;
				map.set(char, map.get(char) + 1);
			}
		}
	}

	const isInvalid = [...map.values()].some((value) => value < 0);

	if (isInvalid) return false;

	return true;
};

[
	"([)]",
	// "()",
	// "()[]{}",
	// "(]",
	// "(){}}{",
	// "",
	// "{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}",
	// "[[]]{}[][]",
].forEach((str) => {
	console.log(str, isValid(str));
});
