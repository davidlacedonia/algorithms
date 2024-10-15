import { connect } from '.';

function getRights(root) {
    let output = [];

    function nav(curr) {
        if (!curr) return;
        if (curr.next) output.push([curr.val, curr.next.val]);
        nav(curr.left);
        nav(curr.right);
    }

    nav(root);
    return output;
}

test('Connect right', () => {
    expect(
        getRights(
            connect({
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 4,
                    },
                    right: {
                        val: 5,
                    },
                },
                right: {
                    val: 3,
                    right: {
                        val: 7,
                    },
                },
            })
        )
    ).toEqual([
        [2, 3],
        [4, 5],
        [5, 7],
    ]);
});
