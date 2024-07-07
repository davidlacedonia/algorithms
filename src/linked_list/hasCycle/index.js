export function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (slow.next && fast.next.next) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next?.next;
    }

    return false;
}
