import { searchInsert } from '.';

test('Search insert', () => {
    const output = searchInsert([1, 3, 5, 6], 5);
    expect(output).toEqual(2);
});

test('Search insert', () => {
    const output = searchInsert([1, 3, 5, 6], 2);
    expect(output).toEqual(1);
});
test('Search insert', () => {
    const output = searchInsert([1, 3, 5, 6], 7);
    expect(output).toEqual(4);
});
test('Search insert', () => {
    const output = searchInsert([1], 1);
    expect(output).toEqual(0);
});
