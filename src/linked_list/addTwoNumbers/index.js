function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
}

export function addTwoNumbers(l1, l2) {
    let currL = l1,
        currR = l2;
    let head = null,
        reminder = 0;

    let curr = head;
    while (currL || currR) {
        const value = (currL?.val || 0) + (currR?.val || 0) + reminder;
        const node = new ListNode(value % 10);
        reminder = value >= 10 ? 1 : 0;

        if (!head) {
            head = node;
            curr = head;
        } else {
            curr.next = node;
            curr = curr.next;
        }

        if (currL) currL = currL.next;
        if (currR) currR = currR.next;
    }

    if (reminder) curr.next = new ListNode(1);

    return head;
}
