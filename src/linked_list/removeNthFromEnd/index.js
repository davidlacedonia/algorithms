export function removeNthFromEnd(head, n) {
    let curr = head,
        pointer = head;

    while (n > 0 && pointer) {
        pointer = pointer.next;
        n--;
    }

    if (!pointer) return head.next;

    while (pointer && pointer.next) {
        pointer = pointer.next;
        curr = curr.next;
    }

    curr.next = curr.next?.next;
    return head;
}
