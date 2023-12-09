// Link on the task: https://leetcode.com/problems/sort-the-people/description/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const characteristics = [];
    for (let i = 0; i < names.length; i++) {
        characteristics.push({
            name: names[i],
            height: heights[i]
        })
    }

    return characteristics.sort((a, b) => b.height - a.height).map((item) => item.name);
}

