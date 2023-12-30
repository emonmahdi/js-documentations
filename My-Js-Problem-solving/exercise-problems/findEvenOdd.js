// Find even number

const findEvenNumber = (arr) => {
  let even = [];
  for (const element of arr) {
    if (element % 2 == 0) {
      even.push(element);
    }
  }
  return even;
};
// const arr = [12, 34, 56, 77, 89, 12, 3, 4, 56, 34, 54, 65, 77, 12, 89];
// const result = findEvenNumber(arr);
// console.log(result);

// find odd numbers from an array.

function findOdd(numbers) {
  let odd = [];
  for (const number of numbers) {
    if (number % 2 == 1) {
      odd.push(number);
    }
    // console.log(number)
  }
  return odd;
}

const output = findOdd([2, 4, 6, 21, 55, 4, 67, 8, 31, 87, 7, 12, 54, 0, 8, 0]);
console.log(output);

// find even and Odd number
const findEvenAndNumber = (arr) => {
  let even = [];
  let odd = [];
  for (const element of arr) {
    if (element % 2 == 0) {
      even.push(element);
    } else if (element % 2 == 1) {
      odd.push(element);
    }
  }
  return {
    even,
    odd,
  };
};
const arr = [12, 34, 56, 77, 89, 12, 3, 4, 56, 34, 54, 65, 77, 12, 89];
const result = findEvenAndNumber(arr);
console.log(result);
