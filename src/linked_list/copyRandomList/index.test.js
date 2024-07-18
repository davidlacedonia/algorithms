import { copyRandomList } from '.';

test('Copy random list', () => {
    let a = { val: 4 };
    let b = { val: 7 };
    let c = { val: -2 };
    a.next = b;
    b.next = c;
    c.next = null;
    a.random = c;
    b.random = a;
    c.random = null;
    const output = copyRandomList(a);
    expect(output).toEqual(a);
});
