const { expect } = require("../../expect");
const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const mergeSort = require("./index");

const result = mergeSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
