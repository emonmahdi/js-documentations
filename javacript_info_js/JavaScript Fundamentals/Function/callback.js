/* 🔹 Callback Function কী?

👉 একটা function কে আরেকটা function এর argument হিসেবে পাঠানো হলে, সেই function কে callback function বলে। */


function greet(name, callback) {
    console.log("Hello " + name)
    callback()
  }
  
  function sayBye() {
    console.log("Bye!")
  }
  
  greet("Emon", sayBye)


/* 
🧠 কেন ব্যবহার করি?

Async কাজ handle করতে (API, setTimeout)
Code control রাখতে
Reusable logic বানাতে
Event handle করতে

*/
  