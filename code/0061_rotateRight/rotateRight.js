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
  // 判断链表是否存在或者k为0
  if (!head || !head.next || k === 0) {
    return head;
  }
  // 指针执行head
  let p = head;
  let len = 1;
  // 计算出当前链表的长度
  while (p.next) {
    p = p.next;
    len++;
  }
  // 令k为长度取模的值
  k = k % len;
  if (k === 0) {
    return head;
  }
  // 让p指向头节点，形成闭环
  p.next = head;
  // 循环找到拆开的位置
  for (let i = 0; i < len - k; i++) {
    p = p.next;
  }
  let newLink = p.next;
  p.next = null;
  return newLink;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)