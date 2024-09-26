import { lengthOfLongestSubstring } from '.';

test('Length of longest substring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('bbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    expect(lengthOfLongestSubstring('b')).toEqual(1);
    expect(lengthOfLongestSubstring('')).toEqual(0);
});
