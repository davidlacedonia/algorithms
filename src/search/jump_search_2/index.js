export function jump(nums) {
    let curr = 0,
        farthest = 0,
        jumps = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === curr) {
            jumps++;
            curr = farthest;
        }
    }

    return jumps;
}
