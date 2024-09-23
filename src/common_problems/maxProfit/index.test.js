import { maxProfit } from '.';

test('Max profit', () => {
    const output = maxProfit([7, 1, 5, 3, 6, 4]);
    expect(output).toEqual(7);
});
