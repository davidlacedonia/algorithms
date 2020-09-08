import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import  bucketSort from "./index";

test("bucket sort", () => {
  const result = bucketSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
