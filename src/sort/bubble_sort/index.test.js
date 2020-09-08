import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import bubbleSort from "./index";

test("bubble sort", () => {
  const result = bubbleSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
