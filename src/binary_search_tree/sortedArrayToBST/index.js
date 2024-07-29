export function sortedArrayToBST(nums) {
    if (!nums || !nums.length) return null;
    const middle = Math.floor(nums.length / 2);
    const node = {
        val: nums[middle],
        left: sortedArrayToBST(nums.slice(0, middle)),
        right: sortedArrayToBST(nums.slice(middle + 1)),
    };
    return node;
}
