---
slug: first-blog-post
title: 动态规划解析
authors:
  name: FrankWu
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
  tags: [hola, docusaurus]
---

### 0x01、动态规划是什么？

动态规划其实是运筹学的一种最优化方法, **动态规划问题的一般形式就是求最值**

既然是要求最值，核心问题是什么呢？**求解动态规划的核心问题是穷举**。因为要求最值，肯定要把所有可行的答案穷举出来，然后在其中找最值。

### 0x02、解决动态规划问题有什么技巧?

动态规划的核心思想就是穷举求最值，穷举所有可行解其实并不是一件容易的事，需要你熟练掌握**递归思维**，只有列出**正确的「状态转移方程」**，才能正确地穷举。

而且需要判断算法问题是否**具备「最优子结构」**，是否能够通过子问题的最值得到原问题的最值。

另外，动态规划问题**存在「重叠子问题」**，如果暴力穷举的话效率会很低，所以需要你**使用「备忘录」或者「DP table」**来优化穷举过程，避免不必要的计算。

以上提到的重叠子问题、最优子结构、状态转移方程就是动态规划三要素，求解的思路如下：

**<font color="#dd0000">明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义</font>**

### 0x03、例子Example

**1、斐波那契数列**

```ts 递归实现
  const fibBase = (N: number): number => {
    if(N === 1 || N === 2) return 1
    const result = fibBase(N - 1) + fibBase(N - 2)
    return result
  }
```

上面的实现存在重复计算的，我们很容易想到可以使用一个对象作为缓存(**「备忘录」**)，来优化计算的结果

```ts
fibCache = (N: number, cache: { [key: number]: number } = {}): number => {
    if(N === 1 || N === 2) return 1
    if(cache[N]) return cache[N]  // 如果已经计算过，直接读取缓存中的结果
    const result = fibCache(N - 1, cache) + fibCache(N - 2, cache)
    cache[N] = result // 将计算结果存储在缓存中
    return result
}
```

```ts
const fibDp = (N: number): number => {
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
```
