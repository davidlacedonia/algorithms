import { getMinimumDifference } from '.';

test('Get minimum difference', () => {
    const output = getMinimumDifference({
        val: 4,
        left: { val: 2, left: { val: 1 }, right: { val: 3 } },
        right: { val: 6 },
    });
    expect(output).toEqual(1);
});

test('Get minimum difference', () => {
    const output = getMinimumDifference({
        val: 236,
        left: { val: 104, right: { val: 227 } },
        right: { val: 701, right: { val: 911 } },
    });
    expect(output).toEqual(9);
});
