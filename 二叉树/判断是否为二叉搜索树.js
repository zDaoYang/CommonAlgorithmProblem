/*
搜索二叉树(BST：Binary Search Tree)，又称二叉搜索树，二叉排序树
每个头结点都比左子树上所有的结点值大，而且比右子树上所有结点的值小

*/
function isBinarySearchTree(root) {
  if (!root) {
    return false;
  }
  var stack = [];
  var node = root, pre = -Infinity // 初始化为负无穷
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if(pre >= node.key) {
        return false;
      }
      pre = node.key;
      node = node.right;
    }
  }
  return true;
}

var tree = {
  root: {
    key: 2,
    left: {
      key: 1,
      left: {
        key: -2,
        left: null,
        right: {
          key: -1,
          left: null,
          right: null
        }
      },
      right: null
    },
    right: {
      key: 8,
      left: {
        key: 5,
        left: null,
        right: null
      },
      right: {
        key: 10,
        left: {
          key: 9,
          left: null,
          right: null
        },
        right: null
      }
    }
  }
};

console.log(isBinarySearchTree(tree.root));


