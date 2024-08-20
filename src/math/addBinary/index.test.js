import { addBinary } from '.';

test('Add binary', () => {
    const output = addBinary('11', '1');
    expect(output).toEqual('100');
});

test('Add binary 2', () => {
    const output = addBinary('1010', '1011');
    expect(output).toEqual('10101');
});

test('Add binary 3', () => {
    const output = addBinary('0', '0');
    expect(output).toEqual('0');
});
