// dp 数组的定义：当目标金额为 i 时，至少需要 dp[i] 枚硬币凑出
const coinChange = (coins: number[], amount: number): number => {
    const dpArray = new Array(amount + 1).fill(Infinity);
    dpArray[0] = 0;  //base case
    for(let i=0; i<dpArray.length; i++) {
        // 状态转移方程
        for(let j=0; j<coins.length; j++) {
            if(i < coins[j]) continue;
            dpArray[i] = Math.min(dpArray[i], 1 + dpArray[i - coins[j]])
        }
    }
    return (dpArray[amount] == Infinity) ? -1 : dpArray[amount]
};

export default coinChange;