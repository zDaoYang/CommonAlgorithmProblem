

/*
n（n >= 3)个人围成一圈，小赛是其中之一，求传了m次以后，花还在小赛手中的传法共有多少种

思路：
假设小赛的号码为1。其他人的号码为 2, 3, ... n
dp[i][j] 表示 i （1 <= i <= m）次传花以后 花在 号码为 j 的人手里的种数

我们要求的是dp[m][1]，即m步以后花在小赛手中的种数

dp初始化：
dp[1][1] = 0;   1次传花以后不可能在自己手中
dp[1][2] = dp[1][n] = 1;  dp[1][3...n-1] = 0; 传1次，花只可能在小赛左右两个人的手中，所以为1，在其他人手中的可能为0
                

递推方程：
dp[i][j] = 
      if(j === 1) {
        dp[i][j] = dp[i-1][n] + dp[i-1][j+1];
      } else if(j === n) {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][1];
      } else {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1];
      }
    }
    
i步以后花在号码j的人的手上的种数 = i-1步花在j左右两边的人手中的种数


*/

var readline = require('readline');
var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.on('line', function (data) {
  var n = parseInt(data.split(' ')[0]);
  var m = parseInt(data.split(' ')[1]);
  var dp = [];
  for (var i = 0; i <= m; i++) {
    dp[i] = [];
  }
  dp[1][1] = 0; dp[1][2] = 1; dp[1][n] = 1;

  for (var i = 3; i < n; i++) {
    dp[1][i] = 0;
  }

  for (var i = 2; i <= m; i++) {
    for (var j = 1; j <= n; j++) {
      if(j === 1) {
        dp[i][j] = dp[i-1][n] + dp[i-1][j+1];
      } else if(j === n) {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][1];
      } else {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1];
      }
    }
  }

  console.log(dp[m][1]);
});