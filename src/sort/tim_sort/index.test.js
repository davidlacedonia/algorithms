import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import timSort from "./index";

test("tim sort", () => {
  const result = timSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
