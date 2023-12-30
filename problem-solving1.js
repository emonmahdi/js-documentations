// 1. Random number 1 to 6.
/* function getRandomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min
  } 

console.log(getRandomNumber(1, 6)) */

// 6 - 1 = 1 + 1 + 1

//2. How to sort name by Alphabetically
/* const students = ['Mofiz', 'Jubayer', 'Nayeem', 'Abir', 'Bashir', 'Mamun'];

console.log(students.sort());
console.log(students); */ // sort method change the original array.

//3. How to sorting numbers less than to greater than - 1,2,3,....10;

/* const numbers = [5,7,10,2,11,3,12,8,4,6];

console.log(numbers.sort(function(a, b){
    return a - b // b - a--- output boro to soto number
}))
console.log(numbers)  */ // main array k change kore

//4. Year is LeapYear or not
/* function isLeapYear(year){
    if((year % 400 === 0) || (year % 4 === 0 && (year % 100 !== 0))){
        console.log(`${year} is a leap year`)
    }else{
        console.log(`${year} is not a leap year`)
    }
}

isLeapYear(2130); */

//5. How to find one sentence number of vowels

/* const vowels = ["a","e", "i", "o", "u", "A", "E", "I", "O", "U"];

function findVowels(sentence){
    let count = 0;
    let letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++
        }
    });
    return count;

}

console.log(findVowels("I Love Bangladesh and Pakistan. And Muhammad s")); */

//6. How to remove from an array duplicate number
const number = [1, 2, 3, 4, 7, 5, 6, 3, 4, 5, 8, 7, 9];

const duplicate = number.filter(function (value, index, array) {
  return array.indexOf(value) === index; // !=== show duplicate, === remove duplicate
});

console.log(duplicate.sort());
