// 8. Check if a string is a palindrome

let str = "madam";
let reverse = str.split("").reverse().join("");

if (str === reverse) {
  console.log("Pallindrom");
} else {
  console.log("Not Palindrom");
}

// Another

let strText = "madam";
let isPalindrom = true;

for (let i = 0; i < strText.length / 2; i++) {
  if (strText[i] !== strText[strText.length - 1 - i]) {
    isPalindrom = false;
    break;
  }
}

console.log(isPalindrom ? "Palindrome" : "Not Palindrome");
