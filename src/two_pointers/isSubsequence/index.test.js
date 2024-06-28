import { isSubsequence } from '.';

test('Is subsequence', () => {
  const output = isSubsequence('abc', 'ahbgdc');
  expect(output).toEqual(true);
});

test('Is subsequence', () => {
  const output = isSubsequence('acb', 'ahbgdc');
  expect(output).toEqual(false);
});
