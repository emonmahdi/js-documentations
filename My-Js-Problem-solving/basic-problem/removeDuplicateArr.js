function duplicateRemove(arr) {
  return [...new Set(arr)];
}
const array = [1, 2, 4, 5, 32, 4, 62, 1, 1, 2, 3, 4, 32, 4, 32, 453, 62];

// console.log(duplicateRemove(array));

// another way

let unique = [];

for (let item of array) {
  if (!unique.includes(item)) {
    unique.push(item);
  }
}
// console.log("Solid array", unique);

function countOccurrences(arr) {
  const frequency = {};
  arr.forEach((item) => {
    frequency[item] = frequency[item] ? frequency[item] + 1 : 1;
  });
  return frequency;
}
const myArr = ["emon", "mahdi", "hasib", 23, 4, 5];
// console.log(countOccurrences(myArr));

function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  console.log(sortedStr1);
  const sortedStr2 = str2.split("").sort().join("");
  console.log(sortedStr2);
  return sortedStr1 === sortedStr2;
}

const str1 = "abir mahmub";
const str2 = "emon";
const output = areAnagrams(str1, str2);
console.log(output);
