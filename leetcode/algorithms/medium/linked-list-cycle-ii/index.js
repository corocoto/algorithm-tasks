// Link on the task: https://leetcode.com/problems/linked-list-cycle-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let node = head;
    const hashSet = new Set([head]);

    while (node && node.next) {
        node = node.next;

        if (hashSet.has(node)) {
            return node;
        } 

        hashSet.add(node);
    }
    return null;
};
