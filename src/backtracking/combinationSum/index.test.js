import { combinationSum } from '.';

test('Combination sum', () => {
    const output = combinationSum([2, 3, 6, 7], 7);
    expect(output).toEqual([[2, 2, 3], [7]]);
});
