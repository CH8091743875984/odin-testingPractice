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

//module.exports = capitalize;
