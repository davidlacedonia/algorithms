const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const mergeSort = require("./index");

test("merge sort", () => {
  const result = mergeSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
