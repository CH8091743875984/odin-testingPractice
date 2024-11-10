//const sum = require("./scripts");

import { sum, capitalize } from "./scripts";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize first letter", () => {
  expect(capitalize("capital")).toBe("Capital");
});
