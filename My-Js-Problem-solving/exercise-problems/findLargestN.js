// find array largest number

function largestElement(number) {
  let large = number[0];
  for (let i = 0; i <= number.length; i++) {
    const element = number[i];
    if (element > large) {
      large = element;
    }
  }
  return large;
}
const arr = [21, 3, 5, 67, 45, 2, 43, 45, 77, 89, 122, 7, 99, 301, 132];
const result = largestElement(arr);
// console.log(result);

// 2. Using Spread Operator
function findLargestItem(arr) {
  return Math.max(...arr);
}
const result2 = findLargestItem(arr);
// console.log("Find largest element using Math:", result2);

// 3. Using Reduce method

const findLargestNumber = (arr) => {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
};
const result3 = findLargestNumber(arr);
// console.log("Find largest element using reduce:", result3);

// using apply
function findLargestNumber3(arr) {
  return Math.max.apply(null, arr);
}
const result4 = findLargestNumber3(arr);
// console.log("Find largest element using apply:", result4);

// using for of loop
function findLargestEle(arr) {
  let large = arr[0];
  for (let num of arr) {
    if (num > large) {
      large = num;
    }
  }
  return large;
}
const output = findLargestEle(arr);
// console.log(output);

// using sort method
function findLargestNum(arr) {
  return arr.sort((a, b) => b - a)[0];
}
const out = findLargestNum(arr);
console.log(out);
