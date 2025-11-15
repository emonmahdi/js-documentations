/* 
Below is **Event Loop** explained in **simple definition → deep definition → coding examples → interview Q&A** exactly the way interviewers expect.

---

# 🔥 **Event Loop — Simple Definition (বাংলায়)**

**Event Loop** হলো JavaScript-এর একটি system, যা দেখে কখন কোন কোড execute হবে।
JS একবারে এক লাইন (single-threaded) execute করে, কিন্তু asynchronous কোড (setTimeout, Promise, async/await) manage করে Event Loop।

➡️ Event Loop ensures:

* প্রথমে stack এর synchronous code run হবে
* তারপর microtask (Promise.then)
* সব শেষে macrotask (setTimeout, setInterval)

---

# 🔥 **Event Loop — Professional Definition (Interview Answer)**

**Event Loop** হলো JavaScript runtime-এর একটি mechanism, যা **Call Stack**, **Web APIs**, **Microtask Queue**, এবং **Macrotask Queue** কে continuously monitor করে। Call Stack খালি হলে Event Loop প্রথমে **Microtask Queue থেকে task execute করে**, তারপর **Macrotask Queue** থেকে tasks execute করে। এর মাধ্যমে JavaScript asynchronous behavior handle করতে পারে যদিও JS **single-threaded**।

(এটি খুব high-quality interview answer)

---

# 🔥 **Coding Examples**

---

## ✅ Example 1: Basic Event Loop Behavior

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");
```

### Output:

```
1
3
2
```

✔ `setTimeout` → Web API → callback queue → executes later
✔ synchronous code first

---

## ✅ Example 2: Promise vs Timeout Priority

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

### Output:

```
Start
End
Promise
Timeout
```

📌 Reason:
✔ Promise → **Microtask Queue (High Priority)**
✔ Timeout → **Macrotask Queue**

---

## ✅ Example 3: async/await + Event Loop

```js
console.log("A");

async function test() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

test();
console.log("D");
```

### Output:

```
A
B
D
C
```

📌 `await` = microtask queue
📌 microtask runs **after stack but before timeout/event**

---

## ✅ Example 4: Nested Promises

```js
Promise.resolve().then(() => {
  console.log("1");
  Promise.resolve().then(() => console.log("2"));
});

console.log("3");
```

### Output:

```
3
1
2
```

✔ Inner `.then()` also goes to microtask queue
✔ Executes immediately after outer `.then()`

---

# 🎯 **Top Interview Q&A (Must Learn)**

---

### ❓ **Q1: What is the Event Loop?**

**Answer:**
Event Loop হলো JS runtime-এর একটি mechanism যা Call Stack খালি হলে Microtask Queue এবং Macrotask Queue থেকে tasks গুলো Stack-এ push করে execute করে। এর মাধ্যমে JavaScript asynchronous কাজ handle করতে পারে, যদিও এটি single-threaded।

---

### ❓ **Q2: Microtask Queue vs Macrotask Queue difference?**

| Microtask (High Priority) | Macrotask (Low Priority)  |
| ------------------------- | ------------------------- |
| Promise.then()            | setTimeout                |
| async/await callbacks     | setInterval               |
| queueMicrotask()          | event callbacks           |
| Faster execution          | Runs after all microtasks |

👉 **Microtask → Macrotask এর আগে always execute হয়।**

---

### ❓ **Q3: Why does Promise run before setTimeout?**

**Answer:**
Promise callbacks go to **Microtask Queue**, যেটার priority **Macrotask Queue** (setTimeout) থেকে বেশি। তাই Promise আগে execute হয়।

---

### ❓ **Q4: Is JavaScript asynchronous or single-threaded?**

**Answer:**
JavaScript single-threaded, কিন্তু asynchronous behavior handle করে Event Loop, Web APIs, microtask/macrotask queues।

---

### ❓ **Q5: What is the Call Stack in Event Loop?**

**Answer:**
Call Stack হলো data structure যেখানে synchronous code line-by-line execute হয়। Stack empty হলেই Event Loop queue থেকে tasks push করে।

---

### ❓ **Q6: Where does async/await run?**

**Answer:**
`await` internally → Promise → **Microtask Queue**
So async/await executes before timeout.

---

# 📝 (Bonus) Favorite Interview Trick Question

### ❓ **Predict Output:**

```js
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
```

### ✔ Output:

```
1
4
3
2
```

---

# 🎉 Want More?

If you want, I can give:

🔹 **20 Practice Problems (Event Loop Simulation)**
🔹 **Real company interview questions**
🔹 **One-page Event Loop cheatsheet**
🔹 **Folder structure + practice file setup**

Just say **“Give me practice problems”** or **“Make cheatsheet”**.


*/