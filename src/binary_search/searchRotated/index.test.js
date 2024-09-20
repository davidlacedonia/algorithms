import { search } from '.';

test('Search rotated', () => {
    const output = search([4, 5, 6, 7, 0, 1, 2], 0);
    expect(output).toEqual(4);
});
