import Codec from './index';

let codec;

beforeAll(() => {
    codec = new Codec();
});

test('Deserialize N ary Tree', () => {
    const root =
        '[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14,null]';
    const deserialized = codec.deserialize(root);
    expect(deserialized.val).toEqual('1');
});
