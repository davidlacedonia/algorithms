import { UNORDERED_ARRAY, ORDERED_ARRAY } from '../../data';
import { randomNumbers } from '../../utils';
import timSort from './index';

test('tim sort', () => {
    const result = timSort(UNORDERED_ARRAY);
    expect(result).toStrictEqual(ORDERED_ARRAY);
});

test('tim sort with random numbers', () => {
    const unsortedNumbers = randomNumbers(10, 500);
    const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
    expect(timSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test('tim sort with wrong types', () => {
    const result = timSort('wrong type');
    expect(result).toStrictEqual([]);
});
