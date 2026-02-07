/* 
while Loop

Syntax

while(condition){
  // code
}

*/

// Example 1

let i = 1;

while(i <= 5){
    console.log(i)
    i++
}

// Example 2: Even number

let j = 2;

while(j <= 10){
    console.log(j)
    j +=2;
}

// Example 3: Array loop

let x = 0
const fruits = ['apple', 'banana', 'mango']

while(x < fruits.length){
    console.log(fruits[x])
    x++;
}

/* 
Infinite Loop (⚠️ Danger)
while(true){
  console.log("Hello");
}


👉 কখনো loop এর ভিতরে increment না দিলে infinite loop হবে

*/