/* 
Function Scope কী?

👉 যে variable function এর ভিতরে declare করা হয়, সেটা শুধু ওই function এর ভিতরেই ব্যবহার করা যায়
Function এর বাইরে থেকে access করা যায় না।
*/

let x = 10;

function test() {
  let y = 20;
  console.log(x); // access
}

function test2() {
  let x = 10;
  console.log(x);
}

test2();
console.log(x); // ❌ Error
