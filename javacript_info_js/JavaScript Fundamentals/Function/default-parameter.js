/* 
🔹 Default Parameter কী?

👉 Function call করার সময় argument না দিলে যে value automatic নেয়, সেটাই default parameter।

*/

function greet(name = "Guest") {
    console.log("Hello " + name)
  }
  
  greet("Emon") // Hello Emon
  greet()       // Hello Guest
  
/* 
🧠 কেন দরকার?

Error avoid করতে
Optional parameter handle করতে
Clean & safe code লিখতে
Production level code এ খুব common

  */