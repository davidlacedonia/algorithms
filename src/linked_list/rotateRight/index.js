export function rotateRight(head, k) {
    let n = 0;

    let curr = head;
    while (curr) {
        curr = curr.next;
        n++;
    }

    if (!n || !k || !(k % n)) return head;

    let m = k % n,
        i = 0,
        last = null,
        temp = null;
    curr = head;

    while (i < n - m - 1) {
        curr = curr.next;
        i++;
    }
    last = curr;
    temp = curr.next;

    while (curr.next) {
        curr = curr.next;
    }

    curr.next = head;
    last.next = null;

    return temp;
}
