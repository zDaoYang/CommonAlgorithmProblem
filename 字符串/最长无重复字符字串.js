/* 
 str   return 
'abcd'    4
'abcb'    3

*/

function longestSubStr(str) {
  if(!str || str.length === 0) {
    return 0;
  }
  var hash = {};
  for(var i = 0; i < str.length; i++) {
    if(!hash[str[i]]) {
      hash[str[i]] = -1;
    }
  }
  var curLen = 0, maxLen = 0;
  for(var i = 1; i < str.length; i++) {
    curLen = i - Math.max(hash[str[i - 1]], hash[str[i]]);
    maxLen = Math.max(maxLen, curLen);
    hash[str[i - 1]] = i - 1; // 注意更新的是i - 1 而不是 i，i在下一次比较中是相当于作为i - 1来比较的，所以不能更新i
  }  
  return maxLen;
}

var str = 'fgabcdefghabc';
console.log(longestSubStr(str));