export function containsNearbyDuplicate(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) return true;
        map.set(nums[i], true);
        if (map.size > k) map.delete(nums[i - k]);
    }

    return false;
}
