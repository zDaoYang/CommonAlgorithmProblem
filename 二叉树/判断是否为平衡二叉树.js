// 树的高度等于树的所有节点中，深度最大的那个，深度有0 1 2 3 4 ... （从0开始算起）
function getHeight(root) {
  var res = 0;
  if (!root) {
    return 0;
  }
  res++;
  res += Math.max(getHeight(root.left), getHeight(root.right));
  return res;
}
function isBalance(root) {
  if (!root) {
    return true; // 如果是个空树，必然是平衡二叉树
  }
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }
  return isBalance(root.left) && isBalance(root.right);
}


var tree = {
  root: {
    key: 1,
    left: {
      key: 2,
      left: {
        key: 4,
        left: null,
        right: {
          key: 7,
          left: null,
          right: null
        }
      },
      right: null
    },
    right: {
      key: 3,
      left: {
        key: 5,
        left: null,
        right: null
      },
      right: {
        key: 6,
        left: {
          key: 8,
          left: null,
          right: null
        },
        right: null
      }
    }
  }
};

console.log(isBalance(tree.root));
