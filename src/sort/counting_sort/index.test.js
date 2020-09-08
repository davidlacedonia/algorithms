import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import countingSort  from "./index";

test("counting sort", () => {
  const result = countingSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
