import { UNORDERED_ARRAY, ORDERED_ARRAY } from '../../data';
import { randomNumbers } from '../../utils';
import selectionSort from './index';

test('selection sort', () => {
    const result = selectionSort(UNORDERED_ARRAY);
    expect(result).toStrictEqual(ORDERED_ARRAY);
});

test('selection sort with random numbers', () => {
    const unsortedNumbers = randomNumbers(10, 500);
    const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
    expect(selectionSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test('selection sort with wrong types', () => {
    const result = selectionSort('wrong type');
    expect(result).toStrictEqual([]);
});
