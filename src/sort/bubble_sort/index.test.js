import { UNORDERED_ARRAY, ORDERED_ARRAY } from '../../data';
import { randomNumbers } from '../../utils';
import bubbleSort from './index';

test('bubble sort', () => {
  const result = bubbleSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});

test('bubble sort random numbers', () => {
  const unsortedNumbers = randomNumbers(10, 500);
  const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
  expect(bubbleSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test('bubble sort with wrong type', () => {
  const result = bubbleSort('wrong type');
  expect(result).toStrictEqual([]);
});
