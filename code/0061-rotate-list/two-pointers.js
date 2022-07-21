/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let fast = (slow = head);

  while (k--) {
    if (fast.next) {
      fast = fast.next;
    } else {
      fast = head;
    }
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
};
