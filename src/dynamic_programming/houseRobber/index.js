export function rob(nums) {
    let cache = [];

    for (let i = 0; i < nums.length; i++) {
        const max = Math.max((cache[i - 2] || 0) + nums[i], cache[i - 1] || 0);
        cache[i] = max;
    }

    return cache[nums.length - 1];
}
