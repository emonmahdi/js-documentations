/* 
🔹 Hoisting কী?

👉 JavaScript এ variable ও function declaration গুলো তাদের scope এর উপরের দিকে (top) উঠিয়ে নেয়া-কেই Hoisting বলে।

🧠 কিভাবে কাজ করে?

Declaration গুলো আগে interpret হয়, তারপর code execute হয়।

শুধু declaration হয় hoisted, assignment হয় না।

*/
console.log(a); // undefined
var a = 10;
console.log(a); // 10