import { UNORDERED_ARRAY, ORDERED_ARRAY } from '../../data';
import { randomNumbers } from '../../utils';
import quickSort from './index';

test('quick sort', () => {
  const result = quickSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});

test('quick sort with random numbers', () => {
  const unsortedNumbers = randomNumbers(10, 500);
  const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
  expect(quickSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test('quick sort with wrong types', () => {
  const result = quickSort('wrong type');
  expect(result).toStrictEqual([]);
});
