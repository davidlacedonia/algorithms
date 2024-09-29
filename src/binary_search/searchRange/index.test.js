import { searchRange } from '.';

test('Search range', () => {
    const output = searchRange([5, 7, 7, 8, 8, 10], 8);
    expect(output).toEqual([3, 4]);
});
