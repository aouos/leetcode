/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return null;
  }
  let queue = [root];
  let ans = [];
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift();
      let res = node === null ? null : node.val;
      ans.push(res);
      if (node === null) {
        continue;
      }
      if (node.left !== null) {
        queue.push(node.left);
      } else {
        queue.push(null);
      }
      if (node.right !== null) {
        queue.push(node.right);
      } else {
        queue.push(null);
      }
    }
  }
  while (ans[ans.length - 1] === null) {
    ans.pop();
  }
  return ans;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === null) {
    return null;
  }
  const root = new TreeNode(data[0], null, null);
  const queue = [root];
  let i = 1;
  let len = data.length;
  while (queue.length) {
    let node = queue.shift();
    if (i < len && data[i] !== null) {
      node.left = new TreeNode(data[i], null, null);
      queue.push(node.left);
    }
    if (i + 1 < len && data[i + 1] !== null) {
      node.right = new TreeNode(data[i + 1], null, null);
      queue.push(node.right);
    }
    i += 2;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */