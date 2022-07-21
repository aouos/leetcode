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

  let p = head;
  let len = 1;

  while (p.next) {
    p = p.next;
    len++;
  }

  k = k % len;
  p.next = head;

  for (let i = 0; i < len - k; i++) {
    p = p.next;
  }

  const newLink = p.next;
  p.next = null;

  return newLink;
};
