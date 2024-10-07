export function partition(head, x) {
    let before = {};
    let after = {};
    let beforeCurr = before;
    let afterCurr = after;

    while (head) {
        if (head.val < x) {
            beforeCurr.next = { val: head.val };
            beforeCurr = beforeCurr.next;
        } else {
            afterCurr.next = { val: head.val };
            afterCurr = afterCurr.next;
        }
        head = head.next;
    }

    afterCurr.next = null;
    beforeCurr.next = after.next;
    return before.next;
}
