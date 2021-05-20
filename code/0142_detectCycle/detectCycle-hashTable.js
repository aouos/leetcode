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
    // 如果存在此值, 当前节点就是入口
    if (visited.has(head)) {
      return head;
    }

    // 当前节点插入哈希表
    visited.add(head);
    // 指针后移
    head = head.next;
  }

  return null;
};

// 时间复杂度 O(N)
// 空间复杂度 O(N)