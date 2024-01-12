// Link on the task: https://leetcode.com/problems/top-k-frequent-words/description/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const hashMap = {};

	for (const word of words) {
		hashMap[word] ??= 0;
		hashMap[word] += 1;
	}

	const result = Object.entries(hashMap);

	result.sort((a, b) => {
		const freqCalc = b[1] - a[1];

		if (freqCalc === 0) {
			return a[0].localeCompare(b[0]);
		}

		return freqCalc
	});

	return result.slice(0, k).map(([key]) => key);
};
