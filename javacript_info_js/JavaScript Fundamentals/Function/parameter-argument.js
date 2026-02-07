/* 
🔹 Parameter কী?

👉 Function define করার সময় যে variable ব্যবহার করি, তাকে parameter বলে।


এখানে
a এবং b = parameters

*/

function add(a, b) {
    console.log(a + b)
  }

//   এখানে
// a এবং b = parameters


/* 
🔹 Argument কী?

👉 Function call করার সময় যে actual value পাঠানো হয়, তাকে argument বলে।
*/

add(5, 3) // 5 এবং 3 = arguments



/* 
🧑‍💻 Interview Q&A (Bangla)
❓ Q1: Parameter আর Argument এর পার্থক্য কী?

✅ উত্তর:
Parameter হলো function এর input variable,
Argument হলো সেই variable এর জন্য পাঠানো actual value।

❓ Q2: Parameter ছাড়া function হতে পারে?

✅ হ্যাঁ

function sayHello() {
  console.log("Hello")
}

❓ Q3: Argument ছাড়া function call করা যায়?

⚠️ যায়, কিন্তু parameter এর value হবে undefined

function test(a){
  console.log(a)
}
test()


Output:

undefined

❓ Q4: Default Parameter কী?

👉 value না দিলে default value ব্যবহার হবে

function greet(name = "Guest"){
  console.log(name)
}
greet() // Guest

❓ Q5: Rest Parameter কী?

👉 একাধিক argument কে array বানায়

function sum(...numbers){
  console.log(numbers)
}
sum(1,2,3,4)


Output:

[1,2,3,4]

❓ Q6: Interview one-line answer

"Parameter হলো function define করার সময় variable, আর argument হলো function call করার সময় পাঠানো actual value।"

*/