// 7. Reverse a string

let str = "Md Emon";

const reverse = str.split("").reverse().join("");

console.log(reverse);

/* 
👉 Step:

split("") → array বানায়
reverse() → উল্টায়
join("") → আবার string বানায়

*/

// Another

let strText = "Hello";
let reverseText = "";

for (let i = strText.length - 1; i >= 0; i--) {
  reverseText += strText[i];
}

console.log(reverseText);
