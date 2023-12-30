// Remove duplicate item from an array

function removeDuplicate(arr) {
  let unique = [];
  for (const number of arr) {
    // if (!unique.includes(number)) {
    //   unique.push(number);
    // }
    if (unique.indexOf(number) == -1) {
      unique.push(number);
    }
  }
  return unique;
}
const arr = [12, 34, 56, 77, 89, 12, 3, 4, 56, 34, 54, 65, 77, 12, 89];
const result = removeDuplicate(arr);
console.log(result);
