const divideAndConquer = nums => {
  const half = Math.floor(nums.length / 2)
  
  const val = nums[half]
  const left = nums.slice(0, half)
  const right = nums.slice(half + 1)
  
  return {
    val,
    left,
    right,
  }
}

/**
 * Convert sorted array to binary search tree
 * 
 * @author David Lacedonia <davidlacedonia@gmail.com>
 * 
 * @param {number[]} nums
 * 
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) return null
  
  const { val, left, right } = divideAndConquer(nums)
  
  const leftNodes = sortedArrayToBST(left)
  const rightNodes = sortedArrayToBST(right)
  
  return new TreeNode(val, leftNodes, rightNodes)
};