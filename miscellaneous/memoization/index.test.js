const linearSearch = require("../../search/linear_search");
const memo = require("./index");

const longArray = new Array(9999999);
longArray.fill(true);
longArray[9999997] = "red";
longArray[9999998] = "blue";

const memoizedLinearSearch = memo(linearSearch);

console.time("memo_linear_search_first");
memoizedLinearSearch(longArray, "red");
console.timeEnd("memo_linear_search_first");

console.time("memo_linear_search_second");
memoizedLinearSearch(longArray, "blue");
console.timeEnd("memo_linear_search_second");

console.time("memo_linear_search_cached");
memoizedLinearSearch(longArray, "red");
console.timeEnd("memo_linear_search_cached");
