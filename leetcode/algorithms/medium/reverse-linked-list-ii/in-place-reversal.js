// Link on the task: https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let prev = null;
    let current = head;

    for (var i = 0; i < left - 1; i++) {
        [prev, current] = [current, current.next];
    }

    const connectorNode = prev;
    const tailNode = current;
    console.log(tailNode);

    for (i = left - 1; i < right; i++) {
        var next = current.next;
        current.next = prev;

        prev = current;
        current = next;
    }
    
    tailNode.next = next;

    if (connectorNode) {
        connectorNode.next = prev;
    } else {
        head = prev;
    }

    return head;
};
