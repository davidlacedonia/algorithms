export function findPeakElement(nums) {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (
            nums[mid] > (nums[mid - 1] || -Infinity) &&
            nums[mid] > (nums[mid + 1] || -Infinity)
        )
            return mid;
        if (nums[mid] < nums[mid - 1]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
