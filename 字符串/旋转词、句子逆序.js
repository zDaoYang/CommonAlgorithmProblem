// 一。判断是否互为旋转词
// 如果对于一个字符串A，将A的前面任意一部分挪到后边去形成的字符串称为A的旋转词。比如A="12345",
// A的旋转词有"12345","23451","34512","45123"和"51234"。
// 对于两个字符串A和B，请判断A和B是否互为旋转词

// 解法：输入合法的前提下，判断str1和str2是不是互为旋转词，只需要判断str2是否为str1+str1的子串即可
// 因为str1+str1的子串中包含了它的所有旋转词，如果str2在str1 + str1里，那么也就是str1和str2互为旋转词
function isRotation(str1, str2) {
  if(!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }
  str1 += str1;
  if(str1.indexOf(str2) !== -1) {
    return true;
  } else {
    return false;
  }
}

var str1 = '1234567';
var str2 = '4567123';
console.log(isRotation(str1, str2));


// 二、给定一个字符串，将单词间逆序调整，比如"pig loves dog" => "dog loves pig"
// 解法：先将所有字符旋转，然后在每个单词范围内旋转,但是这种解法在js里面无效，因为js里string变量一旦创建，就无法局部改变
// 比如，var str = '12345'; str[4] = 9;以后， str仍然是'12345'

// 在js里可以借助String对象的split方法和Array对象的join实现
function transfer(str) {
  var arr = str.split(' ').reverse();
  return arr.join(' ');
}

// 三