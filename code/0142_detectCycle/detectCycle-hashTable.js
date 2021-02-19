/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 建立哈希表存放遍历节点
  const visited = new Set();
  while (head) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }
  return null;
};

// 时间复杂度 O(N)
// 空间复杂度 O(N)