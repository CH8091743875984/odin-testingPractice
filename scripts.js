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

function shiftChar(char, x) {
  const isUpperCase = char >= "A" && char <= "Z";
  const isLowerCase = char >= "a" && char <= "z";

  if (isUpperCase) {
    return String.fromCharCode(((char.charCodeAt(0) - 65 + x) % 26) + 65);
  }

  if (isLowerCase) {
    return String.fromCharCode(((char.charCodeAt(0) - 97 + x) % 26) + 97);
  }

  // If it's not a letter, return the character unchanged
  return char;
}

export function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map((char) => shiftChar(char, shiftFactor))
    .join("");
}
