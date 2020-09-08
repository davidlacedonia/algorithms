import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import quickSort from "./index";

test("quick sort", () => {
  const result = quickSort(UNORDERED_ARRAY, 0, UNORDERED_ARRAY.length - 1);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
