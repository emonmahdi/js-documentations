const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function findVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  //   console.log(letters);
  letters.forEach(function (value) {
    if (vowel.includes(value)) {
      count++;
    }
  });

  return count;
}

const sentence =
  "My name is Emon Mahdi. I am 25. I like programming and i do web development";

const sen2 = "I Love u. Do you love me?";

const result = findVowels(sen2);
console.log(result);
