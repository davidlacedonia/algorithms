import { isPalindrome } from '.';

test('Is palindrome', () => {
    const output = isPalindrome(121);
    expect(output).toEqual(true);
});

test('Is palindrome 2', () => {
    const output = isPalindrome(10);
    expect(output).toEqual(false);
});
