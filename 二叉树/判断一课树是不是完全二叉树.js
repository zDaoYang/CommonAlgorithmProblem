function isComplete(root) {
  var queue = [];
  queue.push(root);
  var currIndex = 0;
  while (currIndex < queue.length) { // 如果当前元素下标小于队列的长度，即还没遍历完全
    curr = queue[currIndex++];
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  for (var i = 0; i < queue.length; i++) {
    if (!queue[i].left && queue[i].right) {
      return false;
    }
    if (queue[i].left && !queue[i].right) {
      
    }
  }
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

console.log(isComplete(tree.root));
