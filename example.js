function twoAddArray(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] + 2);
  }
  return output;
}
// const sum = twoAddArray([1, 2, 3, 4]);
// console.log(sum);

// 2 subract
function twoSubArray(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] - 2);
  }
  return output;
}
// const sub = twoSubArray([10, 12, 13, 14]);
// console.log(sub);

function modifyArray(arr, fn) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(fn(arr[i]));
  }
  return output;
}

function addTwo(ele) {
  return ele + 2;
}
function subTwo(ele) {
  return ele - 2;
}
function multiTwo(ele) {
  return ele * 2;
}

const summationTwo = modifyArray([10, 12, 13, 14], addTwo);
const subTwoResult = modifyArray([10, 12, 13, 14], subTwo);
const multiTwoR = modifyArray([10, 12, 13, 14], multiTwo);
console.log(summationTwo);
console.log(subTwoResult);
console.log(multiTwoR);
