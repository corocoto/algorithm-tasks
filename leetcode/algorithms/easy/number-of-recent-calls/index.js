// Link on the task: https://leetcode.com/problems/number-of-recent-calls/description/


var RecentCounter = function() {
    this.timeRequests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.timeRequests.push(t);
    return this.timeRequests.filter((requestTime) => requestTime >= t - 3000).length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
