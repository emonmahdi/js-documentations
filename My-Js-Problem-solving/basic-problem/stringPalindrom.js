// 1. Write a function to check if a given string is a palindrome.

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

const result = isPalindrome("level"); //racecar, madam, 12321, level, radar
console.log(result);

/* 
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return `${str} is a palindrome string.....`;
  } else {
    return `${str} is not a palindrome string`;
  }
 return str === reversed;
}

*/
