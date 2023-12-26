// Link on the task: https://leetcode.com/problems/reverse-linked-list/description/

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
    const prev = arguments[1] ?? null;

    if (head === null) {
        return prev;
    }

    const next = head.next;
    head.next = prev;
    
    return reverseList(next, head);
};
