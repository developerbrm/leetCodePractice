// const wordBreak = (s, wordDict) => {
// 	while (!!s.length) {
// 		wordDict.forEach((word) => {
// 			console.log(s);
// 			s = s.replaceAll(word, "");
// 		});
// 	}

// 	return s.length === 0;
// };

[
	["leetcode", ["leet", "code"]],
	["applepenapple", ["apple", "pen"]],
	["catsandog", ["cats", "dog", "sand", "and", "cat"]],
].forEach((item) => console.log(wordBreak(...item)));
