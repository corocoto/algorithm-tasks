// Link on the task: https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let next = head;
    let prev = null;
    while (next !== null) {
        [next.next, prev, next] = [prev, next, next.next];
    }

    return prev;
};
