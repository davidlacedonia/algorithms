const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const selectionSort = require("./index");

test("selection sort", () => {
  const result = selectionSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
