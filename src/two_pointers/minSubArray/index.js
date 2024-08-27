export function minSubArray(target, nums) {
    let i = 0,
        j = 0;
    let min = Infinity;

    let total = nums[i];
    if (total >= target) return 1;

    while (i < nums.length) {
        if ((total < target || i === j) && j < nums.length - 1) {
            j++;
            total += nums[j];
        } else {
            total -= nums[i];
            i++;
        }

        if (total >= target) {
            min = Math.min(min, j - i + 1);
        }
    }

    return min === Infinity ? 0 : min;
}
