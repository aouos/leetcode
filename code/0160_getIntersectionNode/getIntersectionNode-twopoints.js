/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 双指针，两个指针相遇即为相交节点
  let P1 = headA, P2 = headB;
  while (P1 != P2) {
    // 到达结尾指向B
    P1 = P1 ? P1.next : headB;
    // 到达结尾指向A
    P2 = P2 ? P2.next : headA;
  }
  return P1 ? P1 : null;
};

// 时间复杂度 O(M+N)
// 空间复杂度 O(1)