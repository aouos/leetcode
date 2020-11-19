function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
  this.insert = insert;
}

function insert(data) {
  let node = new Node(data, null, null);
  if (this.root === null) {
    this.root = node;
  } else {
    let pointer = this.root;
    while (true) {
      let parent = pointer;
      if (data < pointer.data) {
        pointer = pointer.left;
        if (pointer === null) {
          parent.left = node;
          break;
        }
      } else {
        pointer = pointer.right;
        if (pointer === null) {
          parent.right = node;
          break;
        }
      }
    }
  }
}

function preOrder(node) {
  if(!(node == null)) {
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
  }
}
function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
  }
}
function postOrder(node) {
  if(!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
  }
}

let bst = new BST();
bst.insert(24);
bst.insert(17);
bst.insert(45);
bst.insert(9);
bst.insert(20);

preOrder(bst.root);
inOrder(bst.root);
postOrder(bst.root);