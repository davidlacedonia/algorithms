const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const countingSort = require("./index");

test("counting sort", () => {
  const result = countingSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
