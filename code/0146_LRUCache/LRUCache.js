/**
 * @param {number} capacity
 */
// 定义node construct
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    // 容量的大小
    this.capacity = capacity
    // hashMap快速查找
    this.hashMap = {}
    // 头尾结构
    this.dummyHead = new ListNode(null, null)
    this.dummyTail = new ListNode(null, null)
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  // 判断当前map中的数量是否与容量相等
  // 如果相等则需要删除尾部,头部加入
  _isFull() {
    return Object.keys(this.hashMap).length === this.capacity;
  }

  // 将当前的node放在容器的最前面
  // 链表的插入操作
  _moveToHead(node) {
    const head = this.dummyHead.next;
    node.next = head;
    head.prev = node;
    node.prev = this.dummyHead;
    this.dummyHead.next = node;
  }

  // 将当前node从容器尾部删除并返回
  // 链表的删除操作
  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    return node;
  }

  // 实现get方法
  get(key) {
    if (key in this.hashMap) {
      const node = this.hashMap[key];
      // 如果有值则返回结果的同时将其重新放在最前面
      this._moveToHead(this._removeNode(node));
      return node.value;
    } else {
      return -1;
    }
  }

  // 实现put方法
  put(key, value) {
    if (key in this.hashMap) {
      // 如果有值和get操作一样
      const node = this.hashMap[key];
      node.value = value;
      this._moveToHead(this._removeNode(node));
    } else {
      if (this._isFull()) {
        const node = this.dummyTail.prev;
        delete this.hashMap[node.key];
        this._removeNode(node);
      }
      // 容器未满直接插入到最前面
      const node = new ListNode(key, value);
      this.hashMap[key] = node;
      this._moveToHead(node);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */