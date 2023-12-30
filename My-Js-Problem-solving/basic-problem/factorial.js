// 2. Implement a function that calculates the factorial of a number.
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

const result = factorial(5);
// console.log(result);

// sample factorial = 1 * 2 * 3 * 4 * 5 = 120

function factorialNumber(num) {
  if (num < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
    return fact;
  }
}

const result2 = factorialNumber(4);
console.log(result2);
