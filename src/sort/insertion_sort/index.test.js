import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import insertionSort from "./index";

test("insertion sort", () => {
  const result = insertionSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
