function isInRange(interval, newInterval) {
    const [startLeft, endLeft] = interval;
    const [startRight, endRight] = newInterval;

    if (startLeft >= startRight && startLeft <= endRight) return true;
    if (endLeft >= startRight && endLeft <= endRight) return true;
    if (
        startRight >= startLeft &&
        startRight <= endLeft &&
        endRight >= startLeft &&
        endRight <= endRight
    )
        return true;
    return false;
}

export function insert(intervals, newInterval) {
    let output = [],
        i = 0;

    let inRange = null;
    while (i < intervals.length) {
        const interval = intervals[i];
        if (isInRange(interval, newInterval)) {
            inRange = true;
            newInterval = [
                Math.min(interval[0], newInterval[0]),
                Math.max(interval[1], newInterval[1]),
            ];
        } else {
            if (inRange) {
                output.push(newInterval);
                newInterval = [];
                inRange = false;
            }
            output.push(interval);
            inRange = null;
        }

        i++;
    }

    if (inRange !== null || newInterval.length) output.push(newInterval);
    return output;
}
