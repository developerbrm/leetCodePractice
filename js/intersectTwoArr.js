const intersect = (arr1, arr2) => {
	const createMap = (arr) => {
		const map = new Map();
		for (let item of arr) {
			map.set(item, map.get(item) + 1 || 1);
		}

		return map;
	};

	const [map1, map2] = [createMap(arr1), createMap(arr2)];
	const [smallerMap, biggerMap] = [map1, map2].sort((a, b) => b.size - a.size);

	const res = [];

	for (let key of biggerMap.keys()) {
		if (!!!smallerMap.has(key)) continue;

		res.push(
			...Array(Math.min(smallerMap.get(key), biggerMap.get(key))).fill(key)
		);
	}

	return res;
};


[
	[
		[1, 2, 2, 1],
		[2, 2],
	],
	[
		[4, 9, 5],
		[9, 4, 9, 8, 4],
	],
	[
		[4, 9, 5, 5, 5, 5, 5, 5, 8, 8, 8],
		[9, 4, 9, 8, 8, 8, 8, 3, 8, 8, 8, 88, 8, 5, 4],
	],
].forEach((item) => console.log(intersect(...item)));
