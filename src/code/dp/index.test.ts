import { fibDp as fib } from './index'

test('fib 测试 N = 1', () => {
    const res =  fib(1)
    expect(res).toEqual(1)
});

test('fib 测试 N = 2', () => {
    const res =  fib(2)
    expect(res).toEqual(1)
});

test('fib 测试 N = 8', () => {
    const res =  fib(8)
    expect(res).toEqual(21)
});

test('fib 测试 N = 20', () => {
    const res =  fib(20)
    expect(res).toEqual(6765)
});