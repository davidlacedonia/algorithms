import curry from "./index";

function sum(a, b, c, d) {
  return a + b + c + d;
}

test("Currying", () => {
  const curriedSum = curry(sum);
  const result = curriedSum(2)(4)(6)(8);
  expect(result).toBe(20);
});
