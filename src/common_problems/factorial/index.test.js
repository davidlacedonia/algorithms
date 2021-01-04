import factorial from "./index";

test("factorial small number", () => {
  expect(factorial(6)).toEqual(720);
});

test("factorial big number", () => {
  expect(factorial(11)).toEqual(39916800);
});
