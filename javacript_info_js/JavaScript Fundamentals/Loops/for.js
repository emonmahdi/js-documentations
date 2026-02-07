/* for Loop

🧩 Syntax

for (initialization; condition; increment/decrement) {
  // code

}
  
*/
// Example 1: 1–5 print

for(let i = 1; i <= 5; i++){
    console.log(i)
}

// Example 2: Even number

for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Example 3: Array loop
const fruits = ['apple', 'banana', 'mango']

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Example 4: Reverse loop
for(let i = 5; i >= 1 ; i--){
    console.log(i)
}


/* 

break & continue

break → loop বন্ধ

for(let i=1;i<=10;i++){
  if(i === 5) break;
  console.log(i);
}


continue → skip

for(let i=1;i<=5;i++){
  if(i === 3) continue;
  console.log(i);
}


Nested Loop
for(let i=1;i<=3;i++){
  for(let j=1;j<=2;j++){
    console.log(i, j);
  }
}





🟢 Problem 1: Sum of numbers
let sum = 0;

for(let i=1;i<=10;i++){
  sum += i;
}
console.log(sum);

🟢 Problem 2: Factorial
let n = 5;
let fact = 1;

for(let i=1;i<=n;i++){
  fact *= i;
}
console.log(fact);

🟢 Problem 3: Reverse number
let num = 1234;
let rev = 0;

while(num > 0){
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log(rev);

🟢 Problem 4: Count vowels
let str = "javascript";
let count = 0;

for(let i=0;i<str.length;i++){
  if("aeiou".includes(str[i])){
    count++;
  }
}
console.log(count);


*/