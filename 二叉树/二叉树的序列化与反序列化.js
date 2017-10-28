/*
序列化：
1、根据前序遍历序列化
2、根据中序遍历序列化
3、根据后序遍历序列化
4、根据广度优先遍历序列化

前序遍历序列化：
遇到为空的结点，在str末尾加'#!'，遇到不为空的结点，比如结点值为3，就在str未尾加'3!'。
在一个结点值的后面必须加上!或者其他特殊字符表示一个值的结束，不然会产生歧义

一棵树序列化的结果是唯一的，所以必定能根据序列化的结果构造出一棵和之前完全一样的二叉树

我们根据前序遍历序列化

*/

function stringify(root) {
  var node = null, stack = [], result = '';
  stack.push(root);
  while (stack.length) {
    node = stack.pop();
    if (node) {
      result = result + node.val + '!';
    } else {
      result += '#!';
      continue; // 如果当前结点为null，直接进入下一轮循环
    }

    if (node.right) {
      stack.push(node.right);
    } else {
      stack.push(null);
    }
    if (node.left) {
      stack.push(node.left);
    } else {
      stack.push(null);
    }
  }
  return result;
}

/*
反序列化，递归实现
逐个读取序列化以后的字符串value，
1、如果为空，表示读取完毕，直接返回
2、如果不为'#'，就令当前结点的val为value，然后递归调用左子树和右子树
3、如果为'#'，直接返回
*/
function parse(str) {
  var arr = str.split('!');
  // 递归函数
  function construct(p, arr) {
    var value = arr.shift();
    if (!value) { // 读取到末尾，即空字符串就结束
      return;
    }
    if (value !== '#') {
      p.val = Number(value);
      p.left = {}; // 这里设为{}，而不能是null，否则下次递归调用的时候就会出错,(Cannot set property 'val' of null)
      p.right = {};
      construct(p.left, arr);
      construct(p.right, arr);
    }
  }

  var binaryTree = {};
  construct(binaryTree, arr);
  binaryTree = JSON.parse(JSON.stringify(tree).replace(/{}/g, 'null')); // 序列化，然后将所有叶子节点的{}都替换成为null，再反序列化
  return binaryTree;
}

// 测试用例
var tree = {
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

var str = stringify(tree);

var tree1 = parse(str);

console.log(JSON.stringify(tree) === JSON.stringify(tree1)); // true


