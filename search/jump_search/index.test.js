const { ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");
const jumpSearch = require("./index");

const result = jumpSearch(ORDERED_ARRAY, ORDERED_ARRAY[6]);
expect(result).toBe(6);
