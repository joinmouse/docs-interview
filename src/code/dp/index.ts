export const fibBase = (N: number): number => {
    if(N === 1 || N === 2) return 1
    const result = fibBase(N - 1) + fibBase(N - 2)
    return result
}


export const fibCache = (N: number, cache: { [key: number]: number } = {}): number => {
    if(N === 1 || N === 2) return 1
    if(cache[N]) return cache[N]  // 如果已经计算过，直接读取缓存中的结果
    const result = fibCache(N - 1, cache) + fibCache(N - 2, cache)
    cache[N] = result // 将计算结果存储在缓存中
    return result
}

export const fibDp = (N: number): number => {
    // 1、base case
    if (N === 1 || N === 2) return 1;
    const dp: number[] = new Array(N + 1);
    dp[1] = 1
    dp[2] = 1
    // 2、状态转移方程, dp 的数组来存储斐波那契数列的计算结果
    for(let i = 3; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[N];
}