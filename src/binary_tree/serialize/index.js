class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * Deserialize binary tree
 *
 * @param {array} nums list of numbers 
 * 
 * @returns {object} binary tree
 */
export function deserialize(nums) {
  if (!nums) return null

  const helper = nums => {
    let val = nums.shift()

    if (!val) {
      return null
    }

    const node = new TreeNode(val)
    node.left = helper(nums)
    node.right = helper(nums)

    return node
  }

  return helper(nums)
}

/**
 * Serialize binary tree
 * 
 * @param {object} root root of binary tree
 * 
 * @returns {array} array of numbers
 */
export function serialize(root) {
  let nums = []

  let helper = curr => {
    if (!curr) {
      nums.push(null)
      return null
    }
    nums.push(curr.val)
    helper(curr.left)
    helper(curr.right)
  }

  helper(root)
  return nums
}
