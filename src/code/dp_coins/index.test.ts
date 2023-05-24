import coinChange from './index'

test('coinChange 凑硬币计算', () => {
    const res1 = coinChange([1, 2, 5, 10], 11);
    expect(res1).toEqual(2)

    const res2 = coinChange([1, 2, 5], 11);
    expect(res2).toEqual(3)
});
