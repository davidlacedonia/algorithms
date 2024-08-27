import { minSubArray } from '.';

test('Min sub array', () => {
    const output = minSubArray(7, [2, 3, 1, 2, 4, 3]);
    expect(output).toEqual(2);
});

test('Min sub array 2', () => {
    const output = minSubArray(4, [1, 4, 4]);
    expect(output).toEqual(1);
});

test('Min sub array 3', () => {
    const output = minSubArray(11, [1, 1, 1, 1, 1, 1, 1, 1]);
    expect(output).toEqual(0);
});

test('Min sub array 4', () => {
    const output = minSubArray(11, [1, 2, 3, 4, 5]);
    expect(output).toEqual(3);
});
