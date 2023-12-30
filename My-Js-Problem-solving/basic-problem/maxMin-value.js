// 3. Given an array of numbers, find the maximum and minimum values.

function findMinMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { min, max };
}

const a = [4, 3, 55, 43, 56, 7, 87, 121, 32];
const result = findMinMax(a);
// console.log(result);

// another way

const min = a.reduce((acc, current) => Math.min(acc, current));
const max = a.reduce((acc, current) => Math.max(acc, current));
console.log(`Min value:` + min, `Max value:` + max);
