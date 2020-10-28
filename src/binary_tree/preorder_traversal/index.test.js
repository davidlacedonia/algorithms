import { TREE, ORDERED_TREE } from "../../data";
import preorderTraversal from "./index";

test("preorder traversal", () => {
  const result = preorderTraversal(TREE);
  expect(result).toStrictEqual(ORDERED_TREE);
});
