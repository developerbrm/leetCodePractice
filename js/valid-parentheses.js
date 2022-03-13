export const isValid = (s) => {
	if (!!!s || s.length <= 1) return false;

	let result = false;

	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s.at(i), map.get(s.at(i)) + 1 || 1);
	}

	const pairs = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	let misMatch = false;
	const mapKeys = [...map.keys()];
	const pairKeys = [...Object.keys(pairs)];

	for (let i = 0; i < mapKeys.length; i++) {
		if (!!!pairKeys.includes(mapKeys.at(i))) continue;

		if (mapKeys.at(i + 1) !== pairs[mapKeys.at(i)]) misMatch = true;
	}

	if (misMatch) return false;

	for (let [key, value] of Object.entries(pairs)) {
		if (map.get(key) !== map.get(value)) return false;
	}

	return true;
};

["([)]", "()", "()[]{}", "(]", "(){}}{", "", "{{{}}}", "[[]]{}[][]"].forEach(
	(str) => {
		console.log(str, isValid(str));
	}
);
