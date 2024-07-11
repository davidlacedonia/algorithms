export function searchInsert(nums, target) {
    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle;

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return nums[left] < target ? left + 1 : left;
}
