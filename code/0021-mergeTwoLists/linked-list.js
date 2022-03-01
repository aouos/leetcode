/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const resNode = new ListNode(0);
  let cur = resNode;

  while (list1 || list2) {
    const n1 = list1 ? list1.val : Infinity;
    const n2 = list2 ? list2.val : Infinity;

    if (n1 < n2) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  return resNode.next;
};
