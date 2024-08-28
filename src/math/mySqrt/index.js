export function mySqrt(x) {
    if (x === 0 || x === 1) return x;

    let left = 0,
        right = x;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        const product = middle * middle;
        if (product === x) return middle;
        if (product < x) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return Math.floor(right);
}
