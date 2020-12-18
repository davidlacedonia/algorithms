import fibonacci, { memoFibonacci } from "./index";

test("fibonacci sequence", () => {
  expect(fibonacci(10)).toEqual(55);
});

test("fibonaccy memoized sequence", () => {
  expect(memoFibonacci(10)).toEqual(55);
});
