import { hammingWeight } from '.';

test('Hamming weight', () => {
    expect(hammingWeight(11)).toEqual(3);
    expect(hammingWeight(128)).toEqual(1);
    expect(hammingWeight(2147483645)).toEqual(30);
});
