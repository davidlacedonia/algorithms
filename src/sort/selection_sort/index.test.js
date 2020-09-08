import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import selectionSort from "./index";

test("selection sort", () => {
  const result = selectionSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
