import { groupAnagrams } from '.';

test('Group anagrams', () => {
    const output = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    expect(output).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
});
