export function merge(intervals) {
    let output = [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    for (let interval of intervals) {
        const prevIndex = output.length - 1;
        if (prevIndex >= 0 && interval[0] <= output[prevIndex][1]) {
            output[prevIndex][1] = Math.max(interval[1], output[prevIndex][1]);
        } else {
            output.push(interval);
        }
    }

    return output;
}
