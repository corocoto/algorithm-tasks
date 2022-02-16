/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let currentSum = 0
    this.sum = nums.map((item) => currentSum += item);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return left === 0 ? this.sum[right] : this.sum[right] - this.sum[left - 1];
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */