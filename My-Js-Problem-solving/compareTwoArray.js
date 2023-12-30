function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const array1 = [2, 3, 4];
const array2 = [2, 3, 4];

const array3 = [1, 2, 3];
const array4 = [1, 2, 4];

console.log(arraysAreEqual(array1, array2)); // Outputs: true
console.log(arraysAreEqual(array3, array4)); // Outputs: false
