/* 给定一个字符串类型的数组，找到一种拼接方式，使得将所以字符串拼接起来的大字符串的字典序是最小的，返回这个大字符串。
   最优解 O（N*logN）
*/
function finMin(arr) {
  if (arr.length === 0) {
    return '';
  }
  // 先将整个数组排序
  arr.sort(compare);
  return arr.join('');
}

function compare(a, b) {
  if ((a + b) <= (b + a)) {   // 如果a + b <= b + a，那么就是a在b前
    return -1;
  } else {
    return 1;
  }
}

var arr = ['de', 'abc']
console.log(finMin(arr));