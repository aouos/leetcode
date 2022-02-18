/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let fast = slow = head;

  while (true) {
    if (!fast || !fast.next) {
      return false;
    }

    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }
};