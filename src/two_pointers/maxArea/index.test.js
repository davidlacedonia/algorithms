import { maxArea } from '.';

test('Max area', () => {
    const output = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    expect(output).toEqual(49);
});
