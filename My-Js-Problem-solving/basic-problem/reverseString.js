// 5. Reverse a string without using the built-in reverse() method.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const string = "emon mahdi";
const result = reverseString(string);
console.log(result);
