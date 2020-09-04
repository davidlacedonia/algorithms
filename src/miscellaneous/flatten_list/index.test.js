const { LIST, FLATTENED_LIST } = require("../../data");
const flattenList = require("./index");

test("flatten list", () => {
  const result = flattenList(LIST);
  expect(result).toStrictEqual(FLATTENED_LIST);
});
