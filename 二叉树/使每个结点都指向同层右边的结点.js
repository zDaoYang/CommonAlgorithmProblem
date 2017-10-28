/*
leetCode 116
题目：对于一颗满二叉树，要求给所有节点加上一个pNext指针，
指向同一层的相邻节点；如果当前节点已经是该层的最后一个节点，则将pNext指针指向NULL;
给出程序实现，并分析时间复杂度和空间复杂度。

空间复杂度O(1) 时间复杂度O(n)

*/
function connect(root) {
  if (!root) {
    return;
  }
  var left = root.left, right = root.right;
  while (left) {
    left.next = right;
    left = left.right;
    right = right.left;
  }
  connect(root.left);
  connect(root.right);
}

var tree1 = {
  root: {
    key: 1,
    left: {
      key: 2,
      left: {
        key: 4,
        left: null,
        right: null
      },
      right: {
        key: 5,
        left: null,
        right: null
      }
    },
    right: {
      key: 3,
      left: {
        key: 6,
        left: null,
        right: null
      },
      right: {
        key: 7,
        left: null,
        right: null
      }
    }
  }
}

/*
connect(tree1.root);
print(tree1.root);
*/


/*
扩展：如果是一颗普通二叉树而不是一颗完全二叉树，仍然要实现上面的结构
解决思路：
1、按层打印
2、在1的基础上加两个指针pre、curr，pre -> curr
*/

function addNext(root) {
  var node, last = null; nlast = root, pre = null;
  var queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    node = queue.shift();
    if (pre === null) { // 如果pre === null 说明此时打印的是每一行的第一个元素，此时不用设置next指针，只要将pre设为当前节点就好
      pre = node;
    } else {
      pre.next = node;
      pre = node;
    }
    if (node.left) {
      queue.push(node.left);
      last = node.left;
    }
    if (node.right) {
      queue.push(node.right);
      last = node.right;
    }
    if (node === nlast) {
      nlast = last; 
      node.next = null; // 换行的时候，将每一行的最后一个元素指向null，同时设置第二行的pre元素为null
      pre = null;
    }
  }
}

// print仅借助next指针（不借助left和right）实现打印
function print(root) {
  var queue = [];
  queue.push(root);
  var node = root;
  while (node.left || node.right) { // 先把每一层的最左边的结点push进queue，queue中的每一个元素就相当于一个链表
    if (node.left) {
      queue.push(node.left);
      node = node.left;
      continue;
    }
    if (node.right) {
      queue.push(node.right);
      node = node.right;
    }
  }
  // 对queue中的每一个元素进行打印
  for (var i = 0; i < queue.length; i++) {
    var node = queue[i];
    while (node) {
      process.stdout.write(node.key + ' ');
      node = node.next;
    }
    process.stdout.write('\n');
  }
}

var tree2 = {
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

addNext(tree1.root);
print(tree1.root)