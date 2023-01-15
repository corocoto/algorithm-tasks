// Link on the task: https://leetcode.com/problems/insertion-sort-list/description/

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
var insertionSortList = function(head) {
    const result = {
        val: 0,
        next: null
    };
    let current = head;
    while(current !== null) {
        let previous = result;

        while(previous.next !== null && previous.next.val <= current.val) {
            previous = previous.next;
        }

        const next = current.next;
            
        current.next = previous.next; 
        previous.next = current;

        current = next;
    }

    return result.next;
};
