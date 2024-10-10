import { wordBreak } from '.';

test('Word break', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toEqual(true);
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toEqual(true);
    expect(
        wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])
    ).toEqual(false);
});
