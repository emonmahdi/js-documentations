// find the less than number of three input parameter.
function minThreeNumber(first, second, third) {
  if (first < second) {
    return first;
  } else if (second < third) {
    return second;
  } else {
    return third;
  }
}

const findMin = minThreeNumber(221, 312, 521);
console.log("Min Number is =" + " " + findMin);
