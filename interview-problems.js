// 1. Remove false value from an array.

const myValues = ['false' , false, 'rahim', '', NaN, 'a', undefined, 5, 0, ' ', true, 'Karim', 4+2];

const result = myValues.filter(Boolean);
console.log(result)


// 2. Convert any value to boolean.

// console.log(!!'Musfiqukur Rahim')
// console.log(!!'')
// console.log(!!undefined)
// console.log(!!5)
// console.log(Boolean('Musfiqukur Rahim'))


// 3. Resizing an array

const fruits = ['mango', 'apple', 'banana', 'orange', 'lichu'];
// console.log(fruits);

fruits.length = 3; // fixed array length the change main array
// console.log(fruits)


//4. How to flatter a multi-dimensional array

const names = ['rahim', ['karim', 'lorim',['jorim', 'darim']], 'akash', 'batas', ['mon', 'chure',['valobasha', 'prem', 'haram']]];
const falter = names.flat();
// const falter = names.flat(Infinity);
// console.log(falter) 

//5. Short conditionals

const captain = 'Mashrafi';

/* if(captain === "Mashrafi"){
    console.log('Happy')
}else{
    console.log('Angry')
} */

// short
// captain === "Mashrafi" && console.log('Happy all');
// or not
captain === "Mashraf" || console.log('Angry All')


//6. Replace all occurences of a string

const react = "React is a Js framework && this framework is most popular front framework right now!";

// console.log(react.replace(/framework/g, 'library'))


// 7. Log values with variables names smartly 
const library1 = 'Angular'
const library2 = 'React'

// console.log(`Library1 - ${library1}`)
// console.log(`Library2 - ${library2}`)

// console.log({library1})
// console.log({library2}) 

//8. Know performance of a task

const startTime = performance.now(); 

for(let i = 0; i <= 50; i++){
    // console.log(i)
} 
const endTime = performance.now(); 

// console.log(`loop time ${endTime - startTime } mile seconds delay`)