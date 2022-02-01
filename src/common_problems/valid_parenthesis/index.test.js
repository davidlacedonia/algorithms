import isValid from "./index";

describe("Valid parenthesis", () => {
  it("Parenthesis example 1", () => {
    expect(isValid("()")).toEqual(true);
  });

  it("Parenthesis example 2", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });

  it("Parenthesis example 3", () => {
    expect(isValid("(]")).toEqual(false);
  });

  it("Parenthesis example 4", () => {
    expect(isValid("(((((())))))")).toEqual(true);
  });

  it("Parenthesis example 5", () => {
    expect(isValid("()()()()")).toEqual(true);
  });

  it("Parenthesis example 6", () => {
    expect(isValid("(((((((()")).toEqual(false);
  });

  it("Parenthesis example 7", () => {
    expect(isValid("((()(())))")).toEqual(true);
  });
});
