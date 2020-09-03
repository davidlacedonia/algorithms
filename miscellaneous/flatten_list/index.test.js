const { expect } = require("../../expect");
const { LIST, FLATTENED_LIST } = require("../../data");
const flattenList = require("./index");

const result = flattenList(LIST);
expect(result).toBe(FLATTENED_LIST);
