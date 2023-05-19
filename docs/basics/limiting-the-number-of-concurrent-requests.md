---
sidebar_position: 1
---

# 如何实现一个并发请求控制函数并限制并发数

## 题目

假设有这么一个场景：现在有20个异步请求需要发送，但是由于HTTP客户端一般对同一个服务器的并发连接个数都是有限制的，
比如chrome浏览器同一时刻最大并发数是6。

实现一个并发请求函数concurrencyRequest(urls, maxNum)，要求如下：

- 要求最大并发数 maxNum
- 每当有一个请求返回，就留下一个空位，可以增加新的请求
- 所有请求完成后，结果按照 urls 里面的顺序依次打出（发送请求的函数可以直接使用fetch即可）

## 测试代码

```ts
const urls = [];
for (let i = 1; i <= 20; i++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
}
concurrencyRequest(urls, 3).then(res => {
    console.log(res);
})
```

## 思路

按照每次只能并发3个请求的要求，这里就对应A、B、C，当其中有一个请求完之后就会再从urls里面再取出一个进行请求，
依次类推，直到urls里面的20个请求都执行完才终止请求

- case1: urls长度为0，results就没有值，此时应该返回空数组
- case2: maxNum大于urls的长度时，应该取的是urls的长度，否则则是取maxNum
- 需要单独定义一个count计数器来判断是否已全部请求完成
- 没有考虑请求是否请求成功，所以请求成功或报错都应把结果保存在results集合中
- results中的顺序需和urls中的保持一致
