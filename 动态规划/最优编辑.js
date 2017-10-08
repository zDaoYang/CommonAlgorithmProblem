/*
输入str1，str2，ic, dc, rc (ic、dc、rc分别代表插入、删除、替换一个字符的代价)
求将str1编辑成str2的最小代价
定义dp[M+1][N+1]，M、N分别是str1、str2的长度
dp[i][j]代表将str1[0...i-1]编辑成str2[0...i-1]的最小代价

dp[i][0]代表将str1[0...i-1]编辑成空字符串的最小代价，所以dp[i][0] = dc * i
dp[0][j]代表将空字符串转化为str2[0...j-1]的代价,所以dp[0][j] = ic * j;

对于dp[i][j],即str1[0...i-1] 编辑成 str2[0...j-1];
1、str1[0...i-1]先编辑成str1[0...i-2]（也就是删除字符str1[i-1]）,然后由str1[0...i-2]编辑成str2[0...j-1],
dp[i][j] = dc + dp[i-1][j]
2、str1[0...i-1]先编辑成str2[0...i-2],再由str2[0...i-2]编辑成str2[0...i-1]（即插入字符str2[i-1]),
dp[i][j] = dp[i][j-1] + ic
3、若str1[i-1] !== str2[j-1],dp[i][j] = dp[i-1][j-1] + rc
4、若str1[i-1] === str2[j-1],dp[i][j] = dp[i-1][j-1];

综上；
if(str1[i-1] !== str2[j-1]) {
  dp[i][j] = min(dp[i-1][j-1] + rc, dc + dp[i-1][j], dp[i][j-1] + ic);
} else {
  dp[i][j] = min(dp[i-1][j-1], dc + dp[i-1][j], dp[i][j-1] + ic);
}
*/

function minCost(str1, str2, ic, dc, rc) {
  var row = str1.length + 1;
  var column = str2.length + 1;
  var dp = new Array(row);
  for (var i = 0; i < row; i++) {
    dp[i] = new Array(column);
    dp[i][0] = dc * i;
  }
  for (var i = 0; i < column; i++) {
    dp[0][i] = ic * i;
  }
  // console.log(dp);
  for (var i = 1; i < row; i++) {
    for (var j = 1; j < column; j++) {
      var min = Math.min(dc + dp[i-1][j], dp[i][j-1] + ic);
      if(str1[i-1] !== str2[j-1]) {
        dp[i][j] = Math.min(min, dp[i-1][j-1] + rc);
      } else {
        dp[i][j] = Math.min(min, dp[i-1][j-1]);
      }
    }
  }
  return dp.pop().pop();
}

var str1 = 'AB12CD3';
var str2 = 'ABCDF';
var ic = 5, dc = 3, rc = 2;
console.log(minCost(str1, str2, ic, dc, rc));