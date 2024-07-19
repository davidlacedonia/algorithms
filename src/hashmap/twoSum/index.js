export function twoSum(nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let miss = target - nums[i];
        if (hash[miss] !== undefined) return [hash[miss], i];
        hash[nums[i]] = i;
    }

    return null;
}
