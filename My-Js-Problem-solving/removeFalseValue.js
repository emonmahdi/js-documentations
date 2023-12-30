function removeFalseValue(arr) {
  return arr.filter(Boolean);
}

const array = [
  false,
  NaN,
  "",
  0,
  "emon",
  21,
  undefined,
  null,
  { id: 101, name: "" },
];

// console.log(removeFalseValue(array));

function removeFalseValuesFromObject(obj) {
  for (let key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  return obj;
}

const objWithFalseValues = {
  a: false,
  b: null,
  c: 0,
  d: "",
  e: undefined,
  f: NaN,
  g: "I'm emon mahdi",
  h: 42,
};

const result = removeFalseValuesFromObject(objWithFalseValues);
console.log(result);
