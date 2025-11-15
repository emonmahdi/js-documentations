/* 
🔹 What is Hoisting?

Hoisting হলো JavaScript-এর একটি behavior যেখানে variable এবং function declarations তাদের scope-এর শুরুর দিকে “উঠে” (hoist) যায়। অর্থাৎ, JavaScript engine কোড execution শুরু করার আগে প্রথমে সব variable এবং function declarations কে memory তে আলাদা করে নিবে এবং তাদের জায়গা তৈরি করবে।

Important: শুধু declarations hoist হয়, initializations বা assignments হয় না। তাই যদি variable declare করার আগে access করার চেষ্টা করেন, তবে result আসবে undefined বা error depending on declaration type।




🔹 Why Hoisting Happens?

JavaScript কোড execution এর আগে Compilation phase থাকে। এই সময় engine পুরো scope (global বা function scope) থেকে variable ও function declarations সংগ্রহ করে, পরে actual execution হয়।

এই কারণে আপনি function এবং variable declaration এর আগে তাদের ব্যবহার করতে পারেন, যদিও এটা সবসময় best practice না।




🔹 Hoisting Behavior by Variable Types

1. var Variable Hoisting

    - var দিয়ে declare করা variable declaration memory তে উঠে যায়।
    - কিন্তু assignment নিচের লাইনেই থাকে।
    - ফলে, declaration আগে হলেও value undefined থাকে যতক্ষণ না assignment হয়।

Example: 

console.log(a);  // Output: undefined
var a = 10;
console.log(a);  // Output: 10


Explanation:

Internally JavaScript engine মনে করে:

var a;
console.log(a);  // undefined
a = 10;
console.log(a);  // 10


2. let এবং const Hoisting (Temporal Dead Zone)

    - let এবং const declarations ও memory তে উঠেই যায়, কিন্তু use করার আগে access করা যাবে না।
    - এই সময়কে বলে Temporal Dead Zone (TDZ) — অর্থাৎ, declaration এর আগে ব্যবহার করলে error দেয়।

Example:

console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;




🔹 Hoisting of Functions

1. Function Declaration (Fully Hoisted)

Function declaration সম্পূর্ণ memory তে উঠে যায়, তাই function declaration এর আগে function call করা যায়।

hello();  // Output: Hello World!

function hello() {
  console.log("Hello World!");
}


2. Function Expression (Hoisting Depends on Variable Type)

    - Function expression-এ variable declaration হয়, কিন্তু assignment হয় পরে।


hello();  // TypeError: hello is not a function

var hello = function() {
  console.log("Hello");
};


এখানে hello variable undefined ছিল যখন call করা হয়, তাই error আসে।



 
*/

console.log(a); // ReferenceError
var a = 10;
console.log(a) // 10

// let 

// console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b = 20
console.log(b)

// Function

hello()

function hello(){
    console.log('Hello')
}


hello2(); // TypeError: hello2 is not a function

var hello2 = function(){
    console.log('Hello two')
}