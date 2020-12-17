class Node {
  constructor(val, next, down) {
    this.val = val;
    this.next = next;
    this.down = down;
  }
}

class Skiplist {
  constructor() {
    this.head = new Node(-Infinity, null, null);
  }

  search = function (target) {
    let head = this.head;
    while (head) {
      // 找到此层小于target最近的值
      while (head.next && head.next.val < target) {
        head = head.next;
      }
      // 如果找到了目标值,直接返回
      if (head.next && head.next.val == target) {
        return true;
      }
      // 将当前指针下移,降层
      head = head.down;
    }
    return false;
  };

  add = function (num) {
    let list = [], head = this.head;
    while (head) {
      while (head.next && head.next.val < num) {
        head = head.next;
      }
      list.push(head);
      head = head.down;
    }
    let insertUp = true, downNode = null;
    while (insertUp && list.length) {
      head = list.pop()
      head.next = new Node(num, head.next, downNode)
      downNode = head.next;
      // 随机加入层级
      insertUp = (Math.random() > 0.5)
    }
    if (insertUp) {
      this.head = new Node(-1, null, this.head)
    }
  };

  erase = function (num) {
    let head = this.head;
    let found = false;
    while (head) {
      while (head.next && head.next.val < num) {
        head = head.next;
      }
      if (head.next && head.next.val == num) {
        head.next = head.next.next;
        found = true;
      }
      head = head.down;
    }
    return found;
  };
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */