import { containsNearbyDuplicate } from '.';

test('Contains nearby duplicate', () => {
    const output = containsNearbyDuplicate([1, 2, 3, 1], 3);
    expect(output).toEqual(true);
});

test('Contains nearby duplicate', () => {
    const output = containsNearbyDuplicate([1, 0, 1, 1], 1);
    expect(output).toEqual(true);
});

test('Contains nearby duplicate', () => {
    const output = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
    expect(output).toEqual(false);
});
