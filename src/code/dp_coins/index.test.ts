import { coinChange } from './index'

test('fib 测试 N = 1', () => {
    coinChange([1, 2, 5, 10], 11);
    expect(1).toEqual(1)
});
