var ListNode = function (key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.size = capacity;
  this.map = {};
  this.dummyHead = new ListNode(null, null);
  this.dummyTail = new ListNode(null, null);
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
};

LRUCache.prototype.isFull = function () {
  return this.size === Object.keys(this.map).length;
};

LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = null;
  node.next = null;

  return node;
};

LRUCache.prototype.toHead = function (node) {
  const tempNode = this.dummyHead.next;
  node.next = tempNode;
  tempNode.prev = node;
  this.dummyHead.next = node;
  node.prev = this.dummyHead;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.map) {
    const node = this.map[key];
    this.toHead(this.remove(node));
    return node.value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.map) {
    const node = this.map[key];
    node.value = value;
    this.toHead(this.remove(node));
  } else {
    if (this.isFull()) {
      const deNode = this.dummyTail.prev;
      const key = deNode.key;
      delete this.map[key];
      this.remove(deNode);
    }
    const node = new ListNode(key, value);
    this.map[key] = node;
    this.toHead(node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
