import { LIST, FLATTENED_LIST } from "../../data";
import flattenList from "./index";

test("flatten list", () => {
  const result = flattenList(LIST);
  expect(result).toStrictEqual(FLATTENED_LIST);
});
