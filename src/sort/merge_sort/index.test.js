import { UNORDERED_ARRAY, ORDERED_ARRAY } from '../../data';
import { randomNumbers } from '../../utils';
import mergeSort from './index';

test('merge sort', () => {
    const result = mergeSort(UNORDERED_ARRAY);
    expect(result).toStrictEqual(ORDERED_ARRAY);
});

test('merge sort random numbers', () => {
    const unsortedNumbers = randomNumbers(10, 500);
    const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
    expect(mergeSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test('merge sort with wrong types', () => {
    const result = mergeSort('wrong type');
    expect(result).toStrictEqual([]);
});
