/*
给定两个字符串，如果它们的字符种类一样，并且每种字符出现的次数一样，那么就互为变形词
例如：'ABDD' 和 'DDBA' 互为变形词，而'ABDD' 和 'ABDE' 不互为变形词

解法:

1、如果传入参数个数不为2或者两个字符串长度不相等, 很显然，直接返回false
2、记录两个字符中字符的种类和对应出现的次数(一种键值对的形式，我们自然想到用对象来实现)
3、如果这两个对象完全相同，返回true，否则，返回false，问题又来了，JS里的对象是引用类型，不管两个对象的内容是否一致，它们是始终不相等的
4、调用JSON.stringify()将对象序列化可以解决3中的问题
*/
function isTranform(str1, str2) {
  if(arguments.length !== 2 || str1.length !== str2.length) {
    return false;
  }
  var hash1 = [], hash2 = [], len = str1.length;
  for(var i = 0; i < len; i++) {
    if(hash1[str1[i]]) { 
      hash1[str1[i]]++; // 如果已经存在这个字符，则对应的数量加1
    } else { 
      hash1[str1[i]] = 1; // 如果之前没有这个字符，那么就初始化为1
    }
    if(hash2[str2[i]]) {
      hash2[str2[i]]++;
    } else {
      hash2[str2[i]] = 1;
    }
  }
  return  JSON.stringify(hash1) === JSON.stringify(hash2);
}

var str1 = '1235544';
var str2 = '3214455';
var str3 = '1235554';
console.log(isTranform(str1, str2));  // true
console.log(isTranform(str1, str3));  // false

/*

多说一句，第16行的var hash1 = {}, hash2 = {} 其实也可以换成var hash1 = [], hash2 = []，
因为js里数组的下标也可以是字符串，例如var arr = []; arr['a'] = 1 是合法的。
但是我们要避免这种做法，由于某种特殊原因，比如arr['3'] = 1的时候，arr为[ undefined, undefined, undefined, 1 ]，
如果这些undefined在后面得不到填补的话，会浪费额外的内存空间

*/