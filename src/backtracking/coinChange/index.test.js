import { coinChange } from '.';

test('Coin change', () => {
    const output = coinChange([1, 2, 5], 11);
    expect(output).toEqual(3);
});
