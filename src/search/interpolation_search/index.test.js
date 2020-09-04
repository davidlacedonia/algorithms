const { ORDERED_ARRAY } = require("../../data");
const interpolationSearch = require("./index");

test("interpolation search", () => {
  const result = interpolationSearch(ORDERED_ARRAY, ORDERED_ARRAY[3]);
  expect(result).toStrictEqual(3);
});
