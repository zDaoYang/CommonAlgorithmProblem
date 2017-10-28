/* 
注意：平衡二叉树不是AVL树，AVL是平衡搜索二叉树，AVL同时满足平衡二叉树和二叉搜索树的条件
它的每个结点的左右子树的高度差都不超过1（注意是每个结点都是）
树的高度等于树的所有节点中，深度最大的那个，深度有1 2 3 4 ... （从1开始算起）

递归实现：
一个辅助函数用于求数的高度
另一个主函数用于判断树是否平衡
*/
function getHeight(root) {
  var height = 0;
  if (!root) {
    return height;
  }
  height++;
  height += Math.max(getHeight(root.left), getHeight(root.right));
  return height;
}

function isBalance(root) {
  if (!root) {
    return true;
  }
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }
  return isBalance(root.left) && isBalance(root.right);
}


// 测试用例
var tree1 = {
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
    }
  },
  right: {
    key: 3,
    left: {
      key: 5,
      left: null,
      right: {
        key: 8,
        left: null,
        right: null
      }
    }
  }
};

var tree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

console.log(isBalance(tree1)) // false
console.log(isBalance(tree2)); // true

