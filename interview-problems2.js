// 1. Swapping values

const array = [1,2,3,4,5];

/* let temp = array[0];
array[0] = array[4];
array[4] = temp; */

// console.log(array);

// another way
/* [array[0], array[4]] = [array[4], array[0]];

console.log(array) */

// math
let a = 1;
let b = 2;
b = a + (a = b) - b;
console.log(a, b);

// 2. Copy to clipboard

/* function copyToClipboard(str){
     const element = document.createElement("textarea");
     element.value = str
     document.body.appendChild(element) 
     element.select();
     document.execCommand("copy");
     document.body.removeChild(element)
}

function handleClick(){
    const text = document.querySelector('#text');
    copyToClipboard(text.innerText)
} */
 



// 3. destructuring aliases 
/* const language = {
    name: 'Javascript',
    founded: 1995,
    founder: 'Brendan Eich'
}
 
const {name: languageName, founder: founderName, founded} = language;

console.log(languageName, founderName, founded) */


//4. get value as data types

// const element = document.querySelector("#number").valueAsNumber;
// console.log( typeof element)

//5. Remove duplicate form array 

const arrays = [1,2,3,4,2,1,5,6,3,2,4];

const removeDuplicate = [...new Set(arrays)]
// console.log(removeDuplicate)

//6. Compare two arrays by value

const  hasSameProperty = (a, b) => {
    return a.length === b.length && a.every((v, i) => v === b[i])
}

// console.log(hasSameProperty([1,2], [1,2]) )

//7. shuffling array

const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.sort(() => Math.random() - 0.5))

//8. comma operator

/* let x = 1;
y =(x++, x);
console.log(y)

let m = (2, 3, 5);
console.log(m)

for (let i = 0, j = 9; i <= 9; i++, j--) {
    console.log(`a[${i}][${j}] = ${a[i][j]}`);
  } */