const letterCombinations = (digits) => {
	if (!digits.length) return [];

	const lettersObj = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	};

	const lettersMap = new Map(Object.entries(lettersObj));
	const ansArr = [];
	const digitsLength = digits.length;
	let fullString = "";

	for (let digit of digits) {
		fullString += lettersMap.get(digit);
	}


  for (const char of fullString) {
    



  }
};

["23", "", "2"].forEach((item) => console.log(letterCombinations(item)));
