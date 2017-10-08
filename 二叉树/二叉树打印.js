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
      }
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
        }
      }
    }
  }
};

// 题目要求：在广度优先遍历的基础上，每打印一层，就换一行
// 解法：加两个辅助变量last和nLast，last指向当前打印层的最后一个结点，nLast指向当前打印层的下一层最新加入的结点
// 当当前node === last的时候，打印换行，同时令last = nLast
function print(root) {
  if (Object.prototype.toString.call(root) !== '[object Object]') {
    console.log('please input a tree root');
    return;
  }
  if (!root) {
    console.log('empty tree');
    return;
  }
  var last = root;
  var nLast = null;
  var queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    var node = queue.shift();
    process.stdout.write(node.key + ' ');
    if (node.left) {
      queue.push(node.left);
      nLast = node.left;
    }
    if (node.right) {
      queue.push(node.right);
      nLast = node.right;
    }
    if (node === last) {
      process.stdout.write('\n');
      last = nLast;
    }
  }
}
print(tree.root);