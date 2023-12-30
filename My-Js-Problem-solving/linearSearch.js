// function linearSearch(arr, val) {
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return "not found!";
// }
// const result = linearSearch(["a", "b", "c", "d", "c", "d", "c"], "d");
// console.log(result);

function linearSearch(arr, val) {
  const index = arr.indexOf(val);
  if (index !== -1) {
    return index;
  } else {
    return "not found!";
  }
}

const result = linearSearch(["a", "b", "c", "d", "c", "d", "c", "a"], "c");
console.log(result);
