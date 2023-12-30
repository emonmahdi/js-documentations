// how many times of emon. and how to start the index number emon

const sentence =
  "Hi my name is emon. I am computer engineer. I work as web developer. I like programming and enjoy it. My nickname is emon. emon is my favorite word";

// how many times emon
const matches = sentence.match(/emon/gi);
const occurences = matches ? matches.length : 0;
// console.log(occurences);

// where the start emon

let position = sentence.search(/emon/i);
position = position >= 0 ? position : "not found!";

// console.log(position)

// 2. input linearSearch(['a', 'b', 'c', 'd', 'c'], 'c');
// output = 2 or not found!
// write a function linearSearch count the number o item

function linearSearch(arr, val) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not found!";
}
const result = linearSearch(["a", "b", "c", "d", "c", "d", "c"], "c");
// console.log(result)

// 3. how to find to an array longest string and index number

function longestString(names) {
  let longestWord = "";

  for (name of names) {
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }

  return [longestWord, names.indexOf(longestWord)];
}

// console.log(longestString(["learn with sumit bangladesh", "sumon", "Stack Learner", "js bangladesh", "the search english speaking practice"]))

// 4. 1-100 number 3, 5,and 3 - 5 by divided

function fizzBuzz(numbers) {
  for (let i = 0; i <= numbers; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(100)

//5. how to remove false value

const mixedArray = [
  "lws",
  undefined,
  "My Name is Mahdi",
  "",
  "a",
  "0",
  NaN,
  "Thanks a lot",
  1,
  " ",
];

const trueArr = mixedArray.filter(Boolean);
// console.log(trueArr)

// 6. how to remove false value form an objects

const obj = {
  a: "lws",
  b: undefined,
  c: "My Name is Mahdi",
  d: "",
  e: "a",
  f: "0",
  g: NaN,
  h: "Thanks a lot",
  i: 1,
  j: " ",
};

const removeFalse = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

// console.log(removeFalse(obj))


 
