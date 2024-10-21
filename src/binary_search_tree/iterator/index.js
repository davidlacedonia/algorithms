var BSTIterator = function (root) {
    this.queue = [];

    let curr = root;
    while (curr) {
        this.queue.push(curr);
        curr = curr.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const node = this.queue.pop();
    let curr = node;

    if (curr.right) {
        curr = curr.right;
        while (curr) {
            this.queue.push(curr);
            curr = curr.left;
        }
    }

    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return !!this.queue.length;
};

export { BSTIterator };
