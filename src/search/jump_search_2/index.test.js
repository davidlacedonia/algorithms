import { jump } from '.';

test('Jump', () => {
    const output = jump([2, 3, 1, 1, 4]);
    expect(output).toEqual(2);
});
