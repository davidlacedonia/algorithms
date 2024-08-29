import { findPeakElement } from '.';

test('Find peak element', () => {
    expect(findPeakElement([1, 2, 3, 1])).toEqual(2);
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toEqual(5);
});
