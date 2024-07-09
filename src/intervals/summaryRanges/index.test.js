import { summaryRanges } from '.';

test('Summary ranges', () => {
    const output = summaryRanges([0, 1, 2, 4, 5, 7]);
    expect(output).toEqual([[0, 2], [4, 5], [7]]);
});

test('Summary ranges', () => {
    const output = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
    expect(output).toEqual([[0], [2, 4], [6], [8, 9]]);
});
