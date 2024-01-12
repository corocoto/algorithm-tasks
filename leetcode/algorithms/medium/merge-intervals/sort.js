/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	const result = [];
	let i = 0;

	intervals.sort((a, b) => a[0] - b[0]);

	while (i < intervals.length) {
		let counter = i;
    let maxEnd = intervals[i][1];

		while (
      Array.isArray(intervals[counter + 1]) && 
      maxEnd >= intervals[counter + 1][0]
    ) {
      maxEnd = Math.max(maxEnd, intervals[counter + 1][1])
			counter++;
		}

		counter === i 
      ? result.push(intervals[i]) 
      : result.push([intervals[i][0], maxEnd]);
    
		i = counter + 1;
	}

	return result;
};
