import { UNORDERED_ARRAY, ORDERED_ARRAY } from '../../data';
import { randomNumbers } from '../../utils';
import bucketSort from './index';

test('bucket sort', () => {
  const result = bucketSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});

test('bucket sort random numbers', () => {
  const unsortedNumbers = randomNumbers(10, 500);
  const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
  expect(bucketSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test('bucket sort with wrong type', () => {
  const result = bucketSort('wrong type');
  expect(result).toStrictEqual([]);
});
