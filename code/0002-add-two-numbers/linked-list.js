/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let resNode = new ListNode(0, null);
  let cur = resNode;
  let scale = 0;

  while (l1 || l2 || scale) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const num = n1 + n2 + scale;

    scale = num >= 10 ? 1 : 0;
    cur.next = new ListNode(num % 10, null);
    cur = cur.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return resNode.next;
};
