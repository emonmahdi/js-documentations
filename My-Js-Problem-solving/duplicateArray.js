const number = [
  1,
  2,
  3,
  4,
  7,
  5,
  6,
  3,
  4,
  5,
  8,
  7,
  9,
  "emon",
  "mahdi",
  "emon",
  "nayeem",
  "arif",
  "arif",
];

// Using the filter method (ES6+):
const duplicate = number.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

const result = duplicate.sort();
// console.log(result);

// Using the Set Data Structure (ES6+):
const arrayWithDuplicate = [1, 2, 2, 3, 4, 4, 5, 4, 5, 3, 5, 6, 2, 3, 4];

const uniqueArray = [...new Set(arrayWithDuplicate)];
// console.log(uniqueArray);

// Using a For Loop:
const arrayWithDuplicate2 = [1, 2, 2, 3, 4, 4, 5, 7, 4, 5, 3, 5, 6, 2, 3, 4];

const uniqueArray2 = [];

for (let item of arrayWithDuplicate2) {
  if (!uniqueArray2.includes(item)) {
    uniqueArray2.push(item);
  }
}
console.log("Using For loop: ", uniqueArray2);
