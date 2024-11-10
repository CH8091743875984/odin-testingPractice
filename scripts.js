//do npm run watch to activate

export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export function calculator(operator, a, b) {
  if (operator === "add") {
    return a + b;
  }
  if (operator === "subtract") {
    return a - b;
  }
  if (operator === "divide") {
    return a / b;
  }
  if (operator === "multiply") {
    return a * b;
  }
  return null;
}

//module.exports = capitalize;
