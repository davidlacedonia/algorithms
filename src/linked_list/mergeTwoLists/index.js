export function mergeTwoList(list1, list2) {
    let head = null;
    let curr = {};

    while (list1 || list2) {
        if (!list2 || list1?.val <= list2?.val) {
            curr.next = { val: list1.val };
            list1 = list1.next;
        } else if (!list1 || list1?.val > list2?.val) {
            curr.next = { val: list2.val };
            list2 = list2.next;
        }

        if (!head) head = curr.next;
        curr = curr.next;
    }

    return head;
}
