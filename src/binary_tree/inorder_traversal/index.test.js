import { TREE, INORDER_TREE } from "../../data";
import inorderTraversal from "./index";

test("inorder traversal", () => {
  const result = inorderTraversal(TREE);
  expect(result).toStrictEqual(INORDER_TREE);
});
