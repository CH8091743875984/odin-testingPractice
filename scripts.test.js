//const sum = require("./scripts");

import * as jestTest from "./scripts";

test("adds 1 + 2 to equal 3", () => {
  expect(jestTest.sum(1, 2)).toBe(3);
});

test("capitalize first letter", () => {
  expect(jestTest.capitalize("capital")).toBe("Capital");
});

test("reverse the string", () => {
  expect(jestTest.reverseString("murder")).toBe("redrum");
});
