import concurrencyRequest from './index'
// const limitMaxNum = 6

// test('测试urls请求并发是个数为0', () => {
//     const urls = [];
//     return concurrencyRequest(urls, limitMaxNum).then(results => {
//         expect(results.length).toBe(0);
//     })
// });

test('测试urls请求并发是个数小于限制并发数', () => {
    const urls = [];
    for (let i = 0; i <= 2; i++) {
        urls.push(`http://t.weather.sojson.com/api/weather/city/101010100`);
    }
    return concurrencyRequest(urls, 10).then((res: any) => {
        expect(res.status).toEqual(200)
        expect(res.cityInfo.city).toEqual('北京市')
    })
    // return concurrencyRequest(urls, limitMaxNum).then(results => {
    //     console.log(results)
    //     expect(results.length).toBe(3);
    // })
});
