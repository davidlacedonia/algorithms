import { isAnagram } from '.';

test('Is anagram', () => {
    const output = isAnagram('anagram', 'nagaram');
    expect(output).toEqual(true);
});

test('Is anagram', () => {
    const output = isAnagram('anagram', 'nagalam');
    expect(output).toEqual(false);
});
