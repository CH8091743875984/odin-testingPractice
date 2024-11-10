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

test("calculator", () => {
  expect(jestTest.calculator("add", 2, 3)).toBe(5);
  expect(jestTest.calculator("subtract", 55, 11)).toBe(44);
  expect(jestTest.calculator("divide", 75, 3)).toBe(25);
  expect(jestTest.calculator("multiply", 10, 20)).toBe(200);
  expect(jestTest.calculator("not an operator", 10, 20)).toBeNull();
});

test("caesarCipher - test character shift", () => {
  expect(jestTest.caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher - test case preservation", () => {
  expect(jestTest.caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher - test punctuation unchanged", () => {
  expect(jestTest.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray - test object", () => {
  const expectedObject = { average: 4, min: 1, max: 8, length: 6 };
  expect(jestTest.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(expectedObject);
});

test("analyzeArray - empty array returns null", () => {
  expect(jestTest.analyzeArray([])).toBeNull();
});
