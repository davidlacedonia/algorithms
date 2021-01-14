import { UNORDERED_ARRAY, ORDERED_ARRAY } from '../../data';
import { randomNumbers } from '../../utils';
import insertionSort from './index';

test('insertion sort', () => {
  const result = insertionSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});

test('insetion sort random numbers', () => {
  const unsortedNumbers = randomNumbers(10, 500);
  const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
  expect(insertionSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test('insertion sort with wrong type', () => {
  const result = insertionSort('wrong type');
  expect(result).toStrictEqual([]);
});
