import { reverseBits } from '.';

test('Reverse bits', () => {
    const output = reverseBits(43261596);
    expect(output).toEqual(964176192);
});
