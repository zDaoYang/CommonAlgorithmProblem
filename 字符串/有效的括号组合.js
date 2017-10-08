/*
(()()) => true
()) => false
()a() => false
(()) => true
*/

// 1、用栈解决
function isVaild1(str) {
  if (!str || str.length === 0) {
    return false;
  }
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== '(' && str[i] !== ')') {
      return false;
    }
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      stack.pop();
    }
  }
  
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

// 2、用计数器num解决,遇到非括号字符直接返回false,遇到左括号加1，遇到右括号减1，如果最后num === 0, 返回true，否则返回false
function isVaild2(str) {
  if (!str || str.length === 0) {
    return false;
  }
  var num = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== '(' && str[i] !== ')') {
      return false;
    }
    if (str[i] === '(') {
      num++;
      continue;
    }
    if (str[i] === ')') {
      num--;
    }
    if (num < 0) {
      return false;
    }
  }
  if (num === 0) {
    return true;
  } else {
    return false;
  }
}

var str = '(())';
console.log(isVaild1(str));