/* 
🔹 Recursive Function কী?

👉 এমন function যা নিজেকেই নিজের ভিতরে কল করে।
*/

// 🔁 Basic Example: Factorial
function factorial(n) {
    if (n === 0) return 1  // base case
    return n * factorial(n - 1)  // recursive call
  }
  
  console.log(factorial(5))  // 120

/* 
🧠 কীভাবে কাজ করে?

Function নিজের ভিতর নিজেকেই কল করে ছোট ছোট অংশে কাজ ভাগ করে নেয়।
একটা base case থাকা দরকার, যেখানে recursion থেমে যায়।
না হলে infinite recursion হয়ে যায় (error)।


🧩 Recursive Call Stack Visualization

factorial(3) কল করলে:

factorial(3)
= 3 * factorial(2)
= 3 * (2 * factorial(1))
= 3 * (2 * (1 * factorial(0)))
= 3 * (2 * (1 * 1))
= 6


⚠️ Base Case না দিলে কী হবে?
function recur() {
  recur()  // infinite recursion
}

recur()  // Stack overflow error


🧑‍💻 Interview Q&A (Bangla)
❓ Q1: Recursive function কী?

✅ এমন function যা নিজেকে নিজে কল করে।

❓ Q2: Recursive function এ base case কেন দরকার?

✅ Recursion থামানোর জন্য, না হলে infinite loop হবে।

❓ Q3: Recursive function আর iterative function পার্থক্য কী?
Recursive	Iterative
নিজেকে কল করে	loop দিয়ে করে
বেশি memory লাগে (call stack)	কম memory লাগে
❓ Q4: কোন ক্ষেত্রে recursion ভালো?

✅ যখন problem naturally recursive (Tree traversal, factorial, Fibonacci)

❓ Q5: Recursion এর অসুবিধা কী?

✅ Stack overflow error, বেশি memory use, slower performance

🎯 Interview one-line answer

"Recursive function হলো এমন function যা নিজেকেই কল করে এবং একটি base case এ থামে।"

*/