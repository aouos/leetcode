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
  if (!root) return 'x';

  const left = serialize(root.left);
  const right = serialize(root.right);

  return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(',');

  function buildTree(list) {
    const item = list.shift();
    if (item === 'x') {
      return null;
    }

    const node = new TreeNode(item);
    node.left = buildTree(list);
    node.right = buildTree(list);

    return node;
  }

  return buildTree(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */