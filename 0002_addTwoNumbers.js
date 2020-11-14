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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const l1 = new ListNode(2, null);
l1.next = new ListNode(4, null);
l1.next.next = new ListNode(3, null);
const l2 = new ListNode(5, null);
l2.next = new ListNode(6, null);
l2.next.next = new ListNode(4, null);

var addTwoNumbers = function (l1, l2) {
  let resNode = new ListNode(0, null);
  let current = resNode;
  let scale = 0;
  while (l1 || l2 || scale) {
    let p1 = l1 ? l1.val : 0;
    let p2 = l2 ? l2.val : 0;
    let res = p1 + p2 + scale;
    scale = res >= 10 ? 1 : 0;
    current.next = new ListNode(res % 10, null);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return resNode.next;
};
console.log(addTwoNumbers(l1, l2));