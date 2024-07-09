export function summaryRanges(nums) {
    let output = [];

    let start = null;
    for (let i = 0; i < nums.length; i++) {
        if (start === null) {
            start = nums[i];
        }

        if (nums[i] + 1 !== nums[i + 1]) {
            if (nums[i] === start) {
                output.push([start]);
            } else {
                output.push([start, nums[i]]);
            }
            start = null;
        }
    }

    return output;
}
