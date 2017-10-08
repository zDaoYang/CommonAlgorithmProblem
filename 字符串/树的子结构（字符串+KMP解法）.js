// 时间复杂度M+N，M、N分别是tree1和tree2的节点数

// 1、直接用json.stringify
function isSubTree1(tree1, tree2) {
  var str1 = JSON.stringify(tree1);
  var str2 = JSON.stringify(tree2);
  var result = str1.indexOf(str2);
  return result === -1 ? false : true;
}

// 2、用二叉树的前序遍历先遍历树，在判断遍历结果是否包含
function isSubTree2(tree1, tree2) {
  var preOrder1 = preOrder(tree1);
  var preOrder2 = preOrder(tree2);
  var result = preOrder1.indexOf(preOrder2);
  return result === -1 ? false : true;
}

function preOrder(tree) {
  var result = '';
  var preOrderNode = function(node) {
    if(node !== null) {
      result += node.val;
      preOrderNode(node.left);
      preOrderNode(node.right);
    }
  }
  preOrderNode(tree);
  return result;
}


var tree1 = {
  val: 1,
  left: {
    val: 1,
    left: {
      val: 3,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 8,
        left: null,
        right: null
      }
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}

var tree2 = {
  val: 3,
  left: {
    val: 7,
    left: null,
    right: null
  },
  right: {
    val: 8,
    left: null,
    right: null
  }
}
console.log(isSubTree2(tree1, tree2));