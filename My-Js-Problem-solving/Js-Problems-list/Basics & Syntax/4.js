// 4. Check if a number is even or odd

let num = 20;

if (num % 2 === 0) {
  console.log("number is even");
} else {
  console.log("Number is odd");
}

// Another solution
function checkEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(15));
