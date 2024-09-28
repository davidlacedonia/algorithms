import { hIndex } from '.';

test('H index', () => {
    const output = hIndex([3, 0, 6, 1, 5]);
    expect(output).toEqual(3);
});
