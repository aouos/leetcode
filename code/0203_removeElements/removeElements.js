/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  // 创建一个虚拟头节点, 用来处理 head 首个值与 val 相等
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  // 创建 cur 变量表示当前节点
  let cur = dummyHead;

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummyHead.next;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)