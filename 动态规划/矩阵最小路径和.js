/*
只能向右或者向下走
dp[i][j]代表从arr[0][0]走到arr[i][j]的最小路径和
状态转移方程：
dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + arr[i][j];
*/
function minWay(arr) {
  var row = arr.length;
  var column = arr[0].length;
  var dp = new Array(row);
  dp[0] = [arr[0][0]];
  for(var i = 1; i < row; i++) {
    dp[i] = new Array(column);
    dp[i][0] = dp[i-1][0] + arr[i][0];
  }
  for(var j = 1; j < column; j++) {
    dp[0][j] = dp[0][j-1] + arr[0][j];
  }
  for(var i = 1; i < row; i++) {
    for(var j = 1; j < column; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + arr[i][j];
    }
  }
  return dp[row-1][column-1];
}

var arr = [
  [1, 3, 5, 9],
  [8, 1, 3, 4],
  [5, 0, 6, 1],
  [8, 8, 4, 0]
];
// minWay(arr);
console.log(minWay(arr));