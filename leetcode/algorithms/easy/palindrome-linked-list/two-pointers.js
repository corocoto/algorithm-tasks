// Link on the task: https://leetcode.com/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];

    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    const arrLength = arr.length;
    let left = 0;
    let right = arrLength - 1;

    while (left < right) {
        if (arr[left] === arr[right]) {
            left++;
            right--;
            continue;
        }
        return false;
    }

    return true;
};
