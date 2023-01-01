// Link on the task: https://leetcode.com/problems/find-center-of-star-graph/description/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [firstEdge, ...restEdges] = edges;
    return firstEdge.reduce((acc, item) => {
        if (restEdges.every(array => array.includes(item))) {
            acc = item;
        }
        return acc;
    }, 0);
};
