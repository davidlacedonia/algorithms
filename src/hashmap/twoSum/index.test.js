import { twoSum } from '.';

test('Two sum', () => {
    const output = twoSum([2, 7, 11, 15], 9);
    expect(output).toEqual([0, 1]);
});

test('Two sum', () => {
    const output = twoSum([3, 2, 4], 6);
    expect(output).toEqual([1, 2]);
});

test('Two sum', () => {
    const output = twoSum([3, 3], 6);
    expect(output).toEqual([0, 1]);
});
