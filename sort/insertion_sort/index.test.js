const { expect } = require("../../expect");
const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const insertionSort = require("./index");

const result = insertionSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
