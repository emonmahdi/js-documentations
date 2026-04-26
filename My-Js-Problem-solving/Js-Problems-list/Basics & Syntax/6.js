// 6. Calculate the factorial of a number

/* 
🧠 What is factorial?

Factorial means:

n! = n × (n-1) × (n-2) × ... × 1

Example:

5! = 5 × 4 × 3 × 2 × 1 = 120

*/

let number = 3;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(factorial);
