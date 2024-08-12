export var MinStack = function () {
    this.head = null;
};

MinStack.prototype.push = function (val) {
    const node = {
        val,
        next: this.head,
        min: this.head ? Math.min(val, this.head.min) : val,
    };
    this.head = node;
};

MinStack.prototype.pop = function () {
    this.head = this.head.next;
};

MinStack.prototype.top = function () {
    return this.head.val;
};

MinStack.prototype.getMin = function () {
    return this.head.min;
};
