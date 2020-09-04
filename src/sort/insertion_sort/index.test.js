const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const insertionSort = require("./index");

test("insertion sort", () => {
  const result = insertionSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
