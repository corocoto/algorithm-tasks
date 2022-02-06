/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let currentSinglyLinkedList = new ListNode(0);
    const resultedSinglyLinkedList = currentSinglyLinkedList;
    let sum = 0;
    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next
        }
        currentSinglyLinkedList.next = new ListNode(sum % 10);
        currentSinglyLinkedList = currentSinglyLinkedList.next;
        sum = sum >= 10 ? 1 : 0;
    }

    if (sum) {
        currentSinglyLinkedList.next = new ListNode(sum);
    }

    return resultedSinglyLinkedList.next;
};