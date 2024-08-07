import { ORDERED_ARRAY } from '../../data';
import jumpSearch from './index';

test('jump search', () => {
    const result = jumpSearch(ORDERED_ARRAY, ORDERED_ARRAY[6]);
    expect(result).toStrictEqual(6);
});

test('jump search with wrong values', () => {
    const result = jumpSearch('wrong value');
    expect(result).toStrictEqual(null);
});
