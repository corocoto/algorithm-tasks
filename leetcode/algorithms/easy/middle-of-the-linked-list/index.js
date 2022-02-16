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
var middleNode = function(head) {
    let fast = head;
    let slow = fast;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return fast.next ? slow.next : slow;
};