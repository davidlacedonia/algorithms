const { ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");
const binarySearch = require("./index");

const TARGET = 7;
const index = binarySearch(ORDERED_ARRAY, TARGET);
expect(index).toBe(6);
