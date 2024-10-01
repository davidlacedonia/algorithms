export function deleteDuplicates(head) {
    let curr = { next: head };
    let _head = curr;
    let prev = curr;
    curr = curr.next;

    while (curr) {
        let duplicated = false;
        while (curr.next && curr.val === curr.next.val) {
            duplicated = true;
            curr = curr.next;
        }

        if (duplicated) {
            curr = curr.next;
            prev.next = curr;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return _head.next;
}
