import { singleNumber } from '.';

test('Return single number', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
});

test('Return single number 2', () => {
    expect(singleNumber([2, 4, 1, 1, 4])).toBe(2);
});
