//　两个字符串中的字符种类一样，并且每种字符出现的次数一样，那么就互为变形词
// 解法，利用hash表，键为字符种类，值为特定字符种类出现的次数
function chkTransform(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  var hash1 = {}, hash2 = {}, len = str1.length;
  for(var i = 0; i < len; i++) {
    if(hash1[str1[i]]) {
      hash1[str1[i]]++;
    } else {
      hash1[str1[i]] = 1;
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
var str2 = '3215544';

console.log(chkTransform(str1, str2));