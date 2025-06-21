// find the largest number

function findLargestNumber(arr) {
  if (arr.length == 0) {
    return "Array is Empty";
  }

  let largest = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    } else {
      return "Please Give a valid number";
    }
  }
  return largest;
}

const numbers = [23, 4, 5, 6, 7, 22, 43, 32];
const result = findLargestNumber([0, 2, 6]);
// console.log(result);

// find the smallest number

function findSmallestNumber(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number" && !isNaN(arr[i])) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    } else {
      return "Please give a valid number";
    }
  }
  return smallest;
}

const numbers2 = [23, 4, 5, 6, 7, 22, 43, 32, 1];
const result2 = findSmallestNumber(numbers2);
console.log(result2);

// Sum of Array

function sumOfArray(arr) {
  if (arr.length == 0) {
    return "Array is Empty!";
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const sumArray = [1, 2, 3, 4, 5, 15, 70];
const resultSumArray = sumOfArray(sumArray);
console.log("Sum of Array: ", resultSumArray);
