/* 
🔹 Higher Order Function কী?

👉 যে function অন্য function কে argument হিসেবে নেয় অথবা function return করে, তাকে Higher Order Function বলে।

👉 সহজ ভাষায়:
Function দিয়ে function কে handle করে = Higher Order Function

*/

// 🔁 Example 1: Function কে argument হিসেবে নেওয়া
function greet(name) {
  return "Hello " + name
}

function processUser(callback) {
  return callback("Emon")
}

console.log(processUser(greet))

// 🔁 Example 2: Function return করা
function multiplier(x) {
    return function(y) {
      return x * y
    }
  }
  
  const double = multiplier(2)
  console.log(double(5))

//   📤 Output:
// 10


/* 

🧠 কেন Higher Order Function দরকার?

Clean & reusable code
Functional programming
Async handle করা
Array methods (map, filter, reduce)
Better readability

*/

/* 
🔥 Built-in Higher Order Functions (Very important for interview)
🟢 map()
const numbers = [1,2,3]
const result = numbers.map(n => n * 2)
console.log(result)


Output:

[2,4,6]

🟢 filter()
const numbers = [1,2,3,4]
const even = numbers.filter(n => n % 2 === 0)

🟢 reduce()
const numbers = [1,2,3,4]
const sum = numbers.reduce((acc, n) => acc + n, 0)

🟢 forEach()
numbers.forEach(n => console.log(n))


🧑‍💻 Interview Q&A (Bangla)
❓ Q1: Higher order function কী?

✅ যে function অন্য function নেয় বা return করে

❓ Q2: map/filter/reduce কি HOF?

✅ হ্যাঁ, কারণ এরা callback নেয়

❓ Q3: Callback আর Higher order function difference?
Callback	HOF
function যা পাঠানো হয়	function যা গ্রহণ করে
executed later	control করে
❓ Q4: Real-life example?

👉 React এ:

users.map(user => <Card user={user} />)


*/