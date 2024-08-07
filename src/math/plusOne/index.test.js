import { plusOne } from '.';

test('Plus one', () => {
    const output = plusOne([1, 2, 3]);
    expect(output).toEqual([1, 2, 4]);
});

test('Plus one 2', () => {
    const output = plusOne([4, 3, 2, 1]);
    expect(output).toEqual([4, 3, 2, 2]);
});

test('Plus one 3', () => {
    const output = plusOne([9]);
    expect(output).toEqual([1, 0]);
});
