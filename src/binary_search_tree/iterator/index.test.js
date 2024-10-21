import { BSTIterator } from '.';

test('BST Iterator', () => {
    var obj = new BSTIterator({
        val: 7,
        left: {
            val: 3,
        },
        right: {
            val: 15,
            left: {
                val: 9,
            },
            right: {
                val: 20,
            },
        },
    });
    expect(obj.next()).toEqual(3);
    expect(obj.next()).toEqual(7);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(9);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(15);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(20);
    expect(obj.hasNext()).toEqual(false);
});
