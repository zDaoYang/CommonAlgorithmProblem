/*
v[0...n]：每件物品的价值、w[0...n]：每件物品的重量
dp[x][y]代表前x件物品，不超过重量y的时候的最大价值
1、如果选择了第x件物品，那么前x-1件物品得到的重量不能超过y-w[x]，此时dp[x][y] = dp[x-1][y-w[x]] + v[x];
1、如果不选择第x件物品，那么前x-1件物品得到的重量不能超过y，此时dp[x][y] = dp[x-1][y];
dp[x][y] = max(1,2);
*/
function bag(v, w, max) {
  if (v.length !== w.length || max === 0) {
    return 0;
  }
  var row = v.length;
  var column = max + 1;
  var dp = new Array(row);
  for (var i = 0; i < row; i++) {
    dp[i] = new Array(column);
    dp[i][0] = 0;
  }
  for (var i = 1; i < column; i++) {
    dp[0][i] = i >= w[0] ? v[0] : 0; // 当当前背包重量i>=w[0],就dp[0][i]设为1;
  }

  for (var i = 1; i < row; i++) {
    for (var j = 1; j < column; j++) {
      if (j >= w[i]) {
        dp[i][j] = Math.max(dp[i - 1][j - w[i]] + v[i], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  // console.log(dp);
  return dp.pop().pop();
}
var v = [1, 2, 3, 4, 5];
var w = [1, 2, 3, 4, 5];
var weight = 30;
console.log(bag(v, w, weight));