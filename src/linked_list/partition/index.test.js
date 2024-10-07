import { partition } from '.';

function print(head) {
    let numbers = [];
    while (head) {
        numbers.push(head.val);
        head = head.next;
    }
    return numbers;
}

test('Partition', () => {
    expect(
        print(
            partition(
                {
                    val: 1,
                    next: {
                        val: 4,
                        next: {
                            val: 3,
                            next: {
                                val: 2,
                                next: {
                                    val: 5,
                                    next: {
                                        val: 2,
                                    },
                                },
                            },
                        },
                    },
                },
                3
            )
        )
    ).toEqual([1, 2, 2, 4, 3, 5]);
});
