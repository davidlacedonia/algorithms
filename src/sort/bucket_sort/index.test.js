const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const bucketSort = require("./index");

test("bucket sort", () => {
  const result = bucketSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
