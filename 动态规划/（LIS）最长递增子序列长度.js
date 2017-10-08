/* LIS: Longest Increasing Subsequence

dp[i] 代表 必须以arr[i]结尾的前提下，arr[0...i]中的最长递增子序列的长度
(0 <= j < i < len)
        Max(dp[0...i-1]) + 1   (存在arr[j]， arr[j] <= arr[i])
dp[i] = 
             1                 (arr[0...j]均大于arr)
*/
function LIS(arr) {
  var dp = [1];
  for (var i = 1; i < arr.length; i++) {
    var maxLen = 0;
    for (var j = 0; j < i; j++) {
      if (arr[j] <= arr[i]) {
        maxLen = Math.max(maxLen, dp[j]);
      }
    }
    dp[i] = maxLen + 1; // 如果arr[j]均小于arr[i]，即上面的maxLen = Math.max(maxLen, dp[j]);一次也不会执行，这个时候dp[i]就是1
  }
  return Math.max.apply(null, dp);
}

var arr = [2,1,1,12,1,1, 5, 3, 6, 4, 8, 9, 7];
console.log(LIS(arr));
