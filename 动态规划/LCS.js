/*返回连个字符串的最长公共子序列
LCS:Longest Common Subsequence

dp[M][N]  (M = str1.length、N = str2.length)
dp[i][j]表示str1[0...i]和str2[0...j]的最长公共子序列的长度

*/
function LCS(str1, str2) {
  var row = str1.length;
  var column = str2.length;
  var dp = new Array(row);
  for (var i = 0; i < row; i++) {
    if (str1[i] === str2[0]) {
      for (var j = i; j < row; j++) {
        dp[j] = new Array(column);
        dp[j][0] = 1;
      }
      break;
    } else {
      dp[i] = new Array(column);
      dp[i][0] = 0;
    }
  }
  for (var i = 0; i < column; i++) {
    if(str2[i] === str1[0]) {
      for (var j = i; j < column; j++) {
        dp[0][j] = 1;
      }
      break;
    } else {
      dp[0][i] = 0;
    }
  }
  for (var i = 1; i < row; i++) {
    for (var j = 1; j < column; j++) {
      if (str1[i] === str2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
      }
    }
  }
  return dp.pop().pop();
}

var str1 = '123456789';
var str2 = '1a2b3c4d5e6f7g8h9i';

// LCS(str1,str2);
console.log(LCS(str1, str2));