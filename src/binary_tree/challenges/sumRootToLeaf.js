export default function setNumbers(root, acc = '') {
  if (!root.left && !root.right) return Number(acc + root.val);
  const left = root.left ? setNumbers(root.left, acc + root.val) : 0;
  const right = root.right ? setNumbers(root.right, acc + root.val) : 0;
  return left + right;
}
