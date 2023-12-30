// find tha grater than number of three input parameter

function findGreaterNumber(one, two, three) {
  if (one > two) {
    return one;
  } else if (two > three) {
    return two;
  } else {
    return three;
  }
}

const result = findGreaterNumber(100, 25, 45);
console.log(result);
