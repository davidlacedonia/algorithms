function getMid(head) {
    let curr = null;

    while (head && head.next) {
        curr = !curr ? head : curr.next;
        head = head.next.next;
    }

    const mid = curr.next;
    curr.next = null;
    return mid;
}

function merge(left, right) {
    let dummyHead = {};
    let tail = dummyHead;

    while (left && right) {
        if (left.val > right.val || !left) {
            tail.next = right;
            right = right.next;
        } else {
            tail.next = left;
            left = left.next;
        }
        tail = tail.next;
    }

    tail.next = left ? left : right;
    return dummyHead.next;
}

export function sortList(head) {
    if (!head || !head.next) return head;
    const mid = getMid(head);
    const left = sortList(head);
    const right = sortList(mid);
    return merge(left, right);
}
