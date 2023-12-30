const sentence =
  "Hi my name is emon. I am computer engineer. I work as web developer. I like programming and enjoy it. My nickname is emon. emon is my favorite word. I am good at computer and IT ";

const matches = sentence.match(/computer/gi);
const result = matches ? matches.length : 0;
// console.log(result);

// using custom function
function countSubstringOccurrences(inputString, subString) {
  let count = 0;
  let index = inputString.indexOf(subString);
  while (index !== -1) {
    count++;
    index = inputString.indexOf(subString, index + 1);
  }
  return count;
}

const subString = "emon";
const output = countSubstringOccurrences(sentence, subString);
console.log(output);
