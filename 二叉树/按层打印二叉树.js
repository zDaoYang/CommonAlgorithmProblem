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
// 解法：last表示最近一次push进队列的结点，right表示当前打印结点所在层的最右结点
// 当当前node === right的时候，打印换行，同时令right = last
function print(root) {
  if (Object.prototype.toString.call(root) !== '[object Object]') {
    console.log('please input a tree root');
    return;
  }
  if (!root) {
    console.log('empty tree');
    return;
  }
  var right = root;
  var last = null;
  var queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    var node = queue.shift();
    process.stdout.write(node.key + ' ');
    if (node.left) {
      queue.push(node.left);
      last = node.left;
    }
    if (node.right) {
      queue.push(node.right);
      last = node.right;
    }
    if (node === right) {
      process.stdout.write('\n');
      right = last;　 //　比如。当打印到第1行的最右结点时，此时last一定等于第2行的最右结点，所以令right = last
    }
  }
}

print(tree.root);