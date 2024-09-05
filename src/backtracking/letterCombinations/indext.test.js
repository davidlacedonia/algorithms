import { letterCombinations } from '.';

test('Letter combinations', () => {
    const output = letterCombinations('23');
    expect(output).toEqual([
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
    ]);
});
