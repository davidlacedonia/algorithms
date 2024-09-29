export function searchRange(nums, target) {
    let start = -1,
        end = -1;

    let left = 0,
        right = nums.length - 1;

    let found = null;
    while (left <= right && found === null) {
        const i = left + Math.floor((right - left) / 2);
        if (nums[i] === target) {
            found = i;
        } else if (nums[i] < target) {
            left = i + 1;
        } else {
            right = i - 1;
        }
    }

    if (found === null) return [start, end];

    let startIndex = found;
    while (nums[startIndex - 1] === target) {
        startIndex -= 1;
    }

    let endIndex = found;
    while (nums[endIndex + 1] === target) {
        endIndex += 1;
    }

    return [startIndex, endIndex];
}
