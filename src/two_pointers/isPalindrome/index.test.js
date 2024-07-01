import { isPalindrome } from '.';

test('Is palindrome', () => {
  const output = isPalindrome('A man, a plan, a canal: Panama');
  expect(output).toEqual(true);
});

test('Is palindrome', () => {
  const output = isPalindrome('Race a car');
  expect(output).toEqual(false);
});
