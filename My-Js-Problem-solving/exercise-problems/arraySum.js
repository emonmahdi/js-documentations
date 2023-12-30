//sum of array all items

const arr = [1, 2, 3, 4, 5];

let sum = 0;
for (let number of arr) {
  const element = number;
  sum += element;
}
console.log(sum);

// 2.
function arraySum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

const outputArray = arraySum([23, 43, 12, 25, 10, 13]);
console.log(outputArray);
