import { findNum } from './index'

test('fib 测试 N = 1', () => {
    const arr = [0, 3, 5, 2, 6, 1]
    const res =  findNum(arr)
    expect(res).toEqual(4)
});
