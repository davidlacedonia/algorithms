export function reverseBetween(head, left, right) {
    let dummy = { next: head };
    let p = dummy;
    let tail = null;

    for (let i = 0; i < left - 1; i++) {
        p = p.next;
    }
    tail = p.next;

    for (let i = 0; i < right - left; i++) {
        let temp = p.next;
        p.next = tail.next;
        tail.next = tail.next.next;
        p.next.next = temp;
    }

    return dummy.next;
}
