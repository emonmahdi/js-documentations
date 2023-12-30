const findLowestElement = (arr) => {
  let lowest = arr[0];
  for (let number of arr) {
    if (number < lowest) {
      lowest = number;
    }
  }
  return lowest;
};

const arr = [23, 23, 5, 35, 12, 55, 7, 32, 87, 221, 234, 144, 56, -2, -23];

const result = findLowestElement(arr);
console.log("lowest number of array: ", result);
