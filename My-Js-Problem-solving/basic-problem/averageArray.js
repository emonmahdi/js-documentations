// 7. Find the average value of an array of numbers.
function arrayAverage(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

const arr = [6, 4, 12, 4, 2];
const result = arrayAverage(arr);
console.log(result);

// another way
function arrAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
// const arr = [6, 4, 12, 4, 2];
// const result = arrAverage(arr);
// console.log(result);
