/* 
🔹 Rest Parameter কী?

👉 একটা function এর parameter হিসেবে ব্যবহার করা special syntax যা variable সংখ্যক arguments কে একটা array তে ধরে।


*/
// 🔁 Syntax
function sum(...numbers) {
    console.log(numbers)
}
  
sum(1, 2, 3, 4)
// Output: [1, 2, 3, 4]


/* 
🧠 কেন দরকার?

Unknown সংখ্যক arguments handle করতে
Cleaner code
Arguments কে array হিসেবে পেতে সহজ হয়

*/


// 🔍 Example with calculation
function add(...nums) {
    return nums.reduce((acc, n) => acc + n, 0)
  }
  
  console.log(add(2, 3))       // 5
  console.log(add(1, 2, 3, 4)) // 10