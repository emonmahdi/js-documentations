function feetToInches(feet) {
  const inches = feet * 12;
  return inches;
}
function inchesToFeet(inches) {
  return inches / 12;
}

const feet = 10;
const result = feetToInches(feet);
console.log(result);
