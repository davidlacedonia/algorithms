import { maxSubArray, maxSubarraySumCircular } from '.';

test("Kadane's max sub array", () => {
    const output = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(output).toEqual(6);
});

test("Kadane's max sub array", () => {
    const output = maxSubarraySumCircular([5, -3, 5]);
    expect(output).toEqual(10);
});
