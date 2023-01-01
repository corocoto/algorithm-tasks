// Link on the task: https://leetcode.com/problems/find-center-of-star-graph/description/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [firstEdge, secondEdge] = edges;
    return firstEdge[0] === secondEdge[0] || firstEdge[1] === secondEdge[0] 
        ? secondEdge[0] 
        : secondEdge[1];
};
