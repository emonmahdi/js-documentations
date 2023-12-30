function resizeArray(arr, newSize) {
  let newArr = new Array(newSize);
  //   console.log(newArr);
  const length = Math.min(arr.length, newSize);
  //   console.log(length);
  for (let i = 0; i < length; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}

const array = [1, 2, 3, 4, 5];
array[5] = 6;
const result = resizeArray(array, 8);
console.log(result);
