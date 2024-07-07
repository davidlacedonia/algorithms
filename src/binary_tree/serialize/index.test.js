import { serialize, deserialize } from './index';

/**
 *
 *
 *         1
 *        / \
 *       2   5
 *      / \
 *     3   4
 *
 */

test('deserialize binary tree', () => {
    const deserialized = deserialize([
        1,
        2,
        3,
        null,
        null,
        4,
        null,
        null,
        5,
        null,
        null,
    ]);
    expect(deserialized.val).toEqual(1);
    expect(deserialized.left.val).toEqual(2);
    expect(deserialized.right.val).toEqual(5);
    expect(deserialized.left.left.val).toEqual(3);
    expect(deserialized.left.right.val).toEqual(4);
});

test('serialize binary tree', () => {
    const serialized = serialize(
        deserialize([1, 2, 3, null, null, 4, null, null, 5, null, null])
    );
    expect(serialized).toEqual([
        1,
        2,
        3,
        null,
        null,
        4,
        null,
        null,
        5,
        null,
        null,
    ]);
});
