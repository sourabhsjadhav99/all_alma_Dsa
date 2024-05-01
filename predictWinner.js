var PredictTheWinner = function(nums) {
    const n = nums.length;
     const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));
     
     for (let i = 0; i < n; i++) {
         dp[i][i] = nums[i];
     }
     
     for (let length = 2; length <= n; length++) {
         for (let i = 0; i < n - length + 1; i++) {
             const j = i + length - 1;
             dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
         }
     }
     
     return dp[0][n - 1] >= 0;
 };
 // Example usage:
const nums = [1, 5, 2];
console.log(canWin(nums));  // Output: false