import { ORDERED_ARRAY } from '../../data';
import binarySearch from './index';

test('binary search', () => {
    const index = binarySearch(ORDERED_ARRAY, 7);
    expect(index).toStrictEqual(6);
});

test('binary search with wrong values', () => {
    const index = binarySearch('wrong values', 7);
    expect(index).toStrictEqual(null);
});
