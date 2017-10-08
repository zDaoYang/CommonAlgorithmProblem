//　题意：假设有5元、10元、25元、1元面值的纸币，现在要找1000元，求共有多少种找钱方式


/* 1、暴力递归方法
1、0张5元、[1, 10, 25]组成剩下的1000，最终方法数为res1
2、1张5元、[1, 10, 25]组成剩下的995，最终方法数为res2
3、2张5元、[1, 10, 25]组成剩下的990，最终方法数为res3
4、3张5元、[1, 10, 25]组成剩下的985，最终方法数为res4
.......
200、199张5元、[1, 10, 25]组成剩下的5，最终方法数为res200
201、200张5元、[1, 10, 25]组成剩下的0，最终方法数为res201

res1、res2、res3...也分别有递归计算
总的方法数result = res1 + ..... res201
*/
function countWays1(arr, sum) {
  if (!arr || arr.length === 0 || sum <= 0) {
    return 0;
  }

  function methods(arr, index, aim) {
    var count = 0;
    if (index === arr.length) {
      return aim === 0 ? 1 : 0;
    }
    for (var i = 0; i * arr[index] <= aim; i++) {
      count += methods(arr, index + 1, aim - arr[index] * i);
    }
    return count;
  }

  return methods(arr, 0, sum);

}

/*
2、记忆搜索方法，利用一个二维hash表记录递归结果
键：index和aim组成共同的key
值：methods返回的函数值
*/
function countWays2(arr, sum) {
  if (!arr || arr.length === 0 || sum <= 0) {
    return 0;
  }

  var hash = {};
  for (var i = 0; i < arr.length; i++) { // 将hash初始化为二维hash
    hash[i] = {};
  }

  function methods(arr, index, aim) {
    var count = 0;
    if (index === arr.length) {
      return aim === 0 ? 1 : 0;
    }
    if (hash[index][aim]) {
      return hash[index][aim];
    }
    for (var i = 0; i * arr[index] <= aim; i++) {
      count += methods(arr, index + 1, aim - arr[index] * i);
    }
    if (!hash[index][aim]) {
      hash[index][aim] = count;
    }
    return count;
  }
  return methods(arr, 0, sum);
}

/*
3、动态规划方法
用空间换时间
dp为arr.length * (aim + 1) 的二维数组
dp[i][j]代表用arr[0...i]货币的前提下，组成钱数j，共有多少种方法

以var arr = [5, 10, 25, 1], aim = 1000;为例
首先，dp[0][...] = 0, 0, 0, 0, 1, 0 ....，只有aim = 5的倍数的时候，dp[i][j]才为1
其次，dp[...][0] = 0....，因为构成钱数为0，有0种方法

对于dp[i][j]，完全不用arr[i]货币，方法数为dp[i-1][j];
用arr[i]货币，方法数为dp[i-1][j - 1*arr[i]] + dp[i-1][j - 2*arr[i]] + ... = dp[i][j-arr[i]]
可以这么理解，既然要用arr[i]货币，那么至少要用1张，总钱数最大是j-arr[i],也、方法是也就是dp[i][j-arr[i]];
构造状态转移方程:
dp[i][j] = dp[i-1][j] + dp[i][j-arr[i]]

*/
// 构造dp二维数组
function countWays3(arr, sum) {
  var row = arr.length;
  var column = sum + 1;
  var dp = new Array(row);
  for (var i = 0; i < row; i++) {
    dp[i] = new Array(column); // 先定义每一项都是一个数组
    dp[i][0] = 1;
  }
  for (var i = 1; i < column; i++) {
    if (i % arr[0] === 0) {
      dp[0][i] = 1;
    } else {
      dp[0][i] = 0;
    }
  }

  // 开始构造dp表
  for (var i = 1; i < row; i++) {
    for (var j = 1; j < column; j++) {
      if (j - arr[i] >= 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - arr[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp.pop().pop();
}
var arr = [5, 10, 25, 1], aim = 99999;
/* console.time('1')
console.log(countWays1(arr, aim));
console.timeEnd('1') */
/* console.time('2')
console.log(countWays2(arr, aim));
console.timeEnd('2') */
console.time('3')
console.log(countWays3(arr, aim));
console.timeEnd('3')
