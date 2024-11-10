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

export function analyzeArray(array) {
  //const resultsObject = { average: 4, min: 1, max: 8, length: 6 };
  if (array.length === 0) {
    return null;
  }

  const average = array.reduce((acc, num) => acc + num, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  const resultsObject = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return resultsObject;
}
