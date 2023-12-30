// 4. Write a function to find the sum of all numbers in an array.
function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const arr = [1, 2, 3, 4];
const result = arraySum(arr);
// console.log(result);

// without function
const array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
// console.log(`Array Sum is`, sum);

// using forEach
let sum2 = 0;

array.forEach((x) => {
  sum2 += x;
});
// console.log(`Array Sum is =`, sum2);

//using function
function arraySummation(arr) {
  return arr.reduce((num, sum) => num + sum, 0);
}

const result3 = arraySummation(array);
console.log(result3);

// without function
let summation = 0;

summation = array.reduce(function (x, y) {
  return x + y;
}, 0);

console.log("Summation of Array: ", summation);
