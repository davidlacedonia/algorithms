import { ORDERED_ARRAY } from '../../data';
import linearSearch from './index';

test('linear search', () => {
    const result = linearSearch(ORDERED_ARRAY, ORDERED_ARRAY[5]);
    expect(result).toStrictEqual(5);
});

test('linear serach with wrong type', () => {
    const result = linearSearch('wrong type');
    expect(result).toStrictEqual(null);
});
