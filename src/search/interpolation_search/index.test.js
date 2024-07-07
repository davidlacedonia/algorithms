import { ORDERED_ARRAY } from '../../data';
import interpolationSearch from './index';

test('interpolation search', () => {
    const result = interpolationSearch(ORDERED_ARRAY, ORDERED_ARRAY[3]);
    expect(result).toStrictEqual(3);
});

test('interpolation search with wrong values', () => {
    const result = interpolationSearch('wrong value');
    expect(result).toStrictEqual(null);
});
