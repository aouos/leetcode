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
  // 定义快慢双指针
  let fast = head, slow = head;

  while (true) {
    if (fast === null || fast.next === null) {
      return null;
    }

    // 快指针每次前进两步，慢指针前进一步
    fast = fast.next.next;
    slow = slow.next;

    // 快慢指针相遇
    if (fast === slow) {
      break;
    }
  }

  // 快指针重置为链表开头
  fast = head;

  // 快指针前进一步,再次相遇及为入口
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)