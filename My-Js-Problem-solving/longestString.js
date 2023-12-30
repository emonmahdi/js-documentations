function longestString(arrayString) {
  let longestWord = "";
  for (let name of arrayString) {
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return [longestWord, arrayString.indexOf(longestWord)];
}

const stringArray = [
  "i am emon",
  "i am Shakib Al Hasan",
  "Rakib",
  "Rahamot ullah",
  "bangladesh is the best cricket in the world",
];

const result = longestString(stringArray);
console.log(result);
