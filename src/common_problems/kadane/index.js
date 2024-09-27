export function maxSubArray(nums) {
    let max = nums[0];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) sum = 0;
        sum += nums[i];
        max = Math.max(sum, max);
    }

    return max;
}

export function maxSubarraySumCircular(nums) {
    let max = nums[0],
        min = nums[0],
        maxCurr = 0,
        minCurr = 0,
        total = 0;

    for (let num of nums) {
        maxCurr = Math.max(maxCurr + num, num);
        max = Math.max(maxCurr, max);
        minCurr = Math.min(minCurr + num, num);
        min = Math.min(minCurr, min);
        total += num;
    }

    return max > 0 ? Math.max(max, total - min) : max;
}
