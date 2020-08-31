const { expect } = require("../../expect");
const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const quickSort = require("./index");

const result = quickSort(UNORDERED_ARRAY, 0, UNORDERED_ARRAY.length - 1);
expect(result).toBe(ORDERED_ARRAY);
