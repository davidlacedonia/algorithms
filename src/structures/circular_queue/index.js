/**
 * Circular queue. (Ring buffer).
 *
 * Is a linear data structure in which the operations
 * are performed based on FIFO.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 */
var MyCircularQueue = function (k) {
    this.queue = [];
    this.length = k;
    this.head = 0;
    this.tail = 0;
};

const isEmpty = (value) => {
    return !value && isNaN(value);
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false;

    this.queue[this.tail] = value;

    let index = this.tail + 1;
    if (index >= this.length) {
        index = 0;
    }
    this.tail = index;

    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;

    this.queue[this.head] = undefined;
    if (this.head === this.length - 1) {
        this.head = 0;
    } else {
        this.head = this.head + 1;
    }

    return true;
};

/**
 * Gets the front item from the queue. If the queue is empty, return -1
 *
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    let value = this.queue[this.head];
    return !isEmpty(value) ? this.queue[this.head] : -1;
};

/**
 * Gets the last item from the queue. If the queue is empty, return -1
 *
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    let number = this.queue[this.tail === 0 ? this.length - 1 : this.tail - 1];
    return isEmpty(number) ? -1 : number;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.head === this.tail && isEmpty(this.queue[this.head]);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return !isEmpty(this.queue[this.tail]);
};

export default MyCircularQueue;
