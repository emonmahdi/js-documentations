/* 
setTimeout()
🔹 কী?

👉 নির্দিষ্ট সময় পরে একবার কোনো function execute করে।

setTimeout(function, delay_in_ms)

*/

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

/* 
।

🧠 Important Points

Delay milliseconds এ দিতে হয়
একবারই execute হয়
এটা asynchronous
*/

/* 
setInterval()
🔹 কী?

👉 নির্দিষ্ট সময় পর পর বারবার function execute করে।

setInterval(function, delay_in_ms)

*/

setInterval(() => {
  console.log("Running every 1 second");
}, 1000);

// 👉 প্রতি 1 সেকেন্ডে বারবার চলবে।

/* 
clearInterval()
🔹 কী?

👉 setInterval বন্ধ করার জন্য ব্যবহার হয়।
*/
let count = 5;

const intervalId = setInterval(() => {
  console.log(count);
  count--;

  if (count === 0) {
    clearInterval(intervalId);
    console.log("stopped");
  }
}, 1000);

/* 

🧠 clearTimeout()

👉 setTimeout cancel করতে ব্যবহার হয়

*/

let timeoutId = setTimeout(() => {
  console.log("Will not run");
}, 3000);

clearTimeout(timeoutId);

/* 
⚡ Event Loop (Interview Favourite)

setTimeout / setInterval → Web API
Callback → Task Queue
Call Stack ফাঁকা হলে execute হয়


Interview one-line answer

"setTimeout নির্দিষ্ট সময় পরে একবার function চালায়, setInterval নির্দিষ্ট সময় পরপর বারবার চালায়, আর clearInterval দিয়ে interval বন্ধ করা হয়।"
  */
