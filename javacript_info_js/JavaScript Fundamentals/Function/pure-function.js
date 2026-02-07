/* 
🔹 Pure Function কী?

👉 এমন function যা একই input পেলে সবসময় একই output দেয় এবং কোনো বাইরের state বা variable পরিবর্তন করে না।

🔁 Pure Function এর বৈশিষ্ট্যসমূহ:

Deterministic: একই argument দিলে একই ফলাফল দেয়।
No Side Effects: function এর বাইরে কোনো variable বা state পরিবর্তন করে না।
State independent: বাইরের কোনো data বা state এর ওপর নির্ভর করে না।


*/

// 🔍 Example of Pure Function
function add(a, b) {
    return a + b
  }
  
  console.log(add(2, 3)) // 5
  console.log(add(2, 3)) // 5 (সবসময় same output)

// ❌ Non-Pure Function Example
let x = 10

function addToX(y) {
  x = x + y  // বাইরের variable পরিবর্তন
  return x
}

console.log(addToX(5)) // 15
console.log(addToX(5)) // 20 (different output)

/* 
🧠 কেন Pure Function দরকার?

Predictable code লেখা যায়
Testing সহজ হয়
Debugging সহজ হয়
Functional Programming এর বেস
Concurrency / Parallelism সহজ হয়
*/

/* 
🧑‍💻 Interview Q&A (Bangla)
❓ Q1: Pure function কী?

✅ একই ইনপুটে একই আউটপুট দেয় এবং বাইরের কোনো state পরিবর্তন করে না এমন function।

❓ Q2: Pure function এর কি side effect থাকে?

❌ না, side effect থাকে না।

❓ Q3: Pure function আর impure function এর পার্থক্য কী?
Pure Function	Impure Function
একই input → একই output	একই input → ভিন্ন output হতে পারে
no side effect	side effect থাকতে পারে
❓ Q4: কেন pure function ভালো?

✅ বেশি predictable, testable আর maintainable হয়।

❓ Q5: React এ pure function এর ব্যবহার কী?

👉 React component গুলো pure function হতে পারে, যাতে UI সহজে predictable হয়।

🎯 Interview one-line answer

"Pure function হলো এমন function যা একই input এ সবসময় একই output দেয় এবং কোনো বাইরের state পরিবর্তন করে না।"

*/