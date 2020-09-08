import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import mergeSort from "./index";

test("merge sort", () => {
  const result = mergeSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
