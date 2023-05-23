export function coinChange(coins: number[], amount: number): number {
    // base case
    if (amount < 0) return -1
    if(amount === 0) return 0
    // 状态转移方程
    let res = Infinity;
    for(let coin of coins) {
        console.log({ coin })
    }

    return 1
};
