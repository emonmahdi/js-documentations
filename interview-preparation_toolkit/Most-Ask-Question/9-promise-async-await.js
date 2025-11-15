/* 

Here is the **Promise vs Async/Await** topic in a **simple format**:

---

# ✅ **Promise vs Async/Await (Simple Version)**

---

# 🔹 **1. Promise**

### **✔ Simple Definition**

Promise হলো এমন একটি object যা future-এ কোনো async কাজের result দেবে (success বা error)।

### **✔ Why Use?**

* API call এর result handle করতে
* Callback hell এড়াতে
* Async কাজ clean ভাবে manage করতে

### **✔ Real-Life Use Case**

* Server থেকে data আনতে (fetch API)
* Payment process success/fail handle
* Image load হওয়া পর্যন্ত wait করা

### **✔ Coding Example**

```js
function getData() {
  return fetch("https://api.com/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

getData();
```

---

### ❓ **Interview QnA**

**Q: What is a Promise?**
A: Promise হলো async কাজের future result ধরে রাখা object — pending, fulfilled বা rejected state থাকে।

**Q: Why do we use Promise?**
A: Callback hell solve করতে এবং async code clean রাখতে।

---

# 🔹 **2. Async/Await**

### **✔ Simple Definition**

Async/await হলো Promise handle করার সহজ, readable ও synchronous-এর মতো syntax।

### **✔ Why Use?**

* কোড readable হয়
* Multiple async কাজ sequentially করতে সুবিধা
* Error handling সহজ (try/catch)

### **✔ Real-Life Use Case**

* একের পর এক API call করতে (login → profile → dashboard)
* Large data load করার আগে wait করা

### **✔ Coding Example**

```js
async function getData() {
  try {
    const res = await fetch("https://api.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();
```

---

### ❓ **Interview QnA**

**Q: What is async/await?**
A: Promise এর উপর syntax sugar—async code কে readable করে।

**Q: Does async/await block the code?**
A: না। শুধু দেখতে synchronous লাগে, কিন্তু internally Promise এর মতো asynchronous।

**Q: How to handle errors in async/await?**
A: try/catch ব্যবহার করে।

---

# 🔹 **3. Quick Comparison (Easy)**

| Topic          | Promise          | Async/Await         |
| -------------- | ---------------- | ------------------- |
| Syntax         | then/catch       | try/catch           |
| Readability    | Medium           | High                |
| Error Handling | harder           | easier              |
| Based On       | Promise object   | Promise object      |
| Use Case       | ساده async tasks | complex async flows |

---

# 🔹 **4. Simple Real-Life Example (Login Flow)**

### **Using Promise**

```js
login()
  .then(user => getProfile(user))
  .then(profile => loadDashboard(profile))
  .catch(err => console.log(err));
```

### **Using async/await**

```js
async function start() {
  try {
    const user = await login();
    const profile = await getProfile(user);
    await loadDashboard(profile);
  } catch (err) {
    console.log(err);
  }
}
start();
```

---

# 🔥 Want next topic in the same simple style?

Choose one:

1. Callback Hell
2. Event Loop
3. Microtask vs Macrotask
4. Closures
5. Prototype

Just type the name!


*/

/* 

# ✅ **Promise vs Async/Await — Full Deep Explanation (Bangla) + Coding + Interview Answers**

এটি JavaScript **Asynchronous** interview এর সবচেয়ে বেশি জিজ্ঞেস করা প্রশ্ন। নিচে সহজ ভাষায় প্রফেশনালভাবে দেওয়া হলো।

---

# 🔥 1) **Promise — What & Why?**

### ✔ Definition

Promise হলো একটা **object** যা asynchronous কাজের future result ধরে রাখে।
এটা তিনটা state-এ থাকতে পারে:

* **pending**
* **fulfilled**
* **rejected**

---

### ✔ Basic Syntax

```js
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) resolve("Done!");
  else reject("Failed!");
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

---

# 🔥 2) **Async/Await — What & Why?**

### ✔ Definition

`async/await` হলো Promise-এর উপর **syntactic sugar**।
এটা asynchronous code কে **synchronous-এর মতো readable** করে।

```js
async function getData() {
  try {
    const res = await fetch("url");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
```

---

# 🔥 3) **Promise vs Async/Await (Quick Comparison)**

| Feature        | Promise             | Async/Await       |
| -------------- | ------------------- | ----------------- |
| Syntax         | then(), catch()     | clean & readable  |
| Error Handling | .catch()            | try/catch         |
| Chaining       | nested / long chain | very simple       |
| Debugging      | harder              | easier            |
| Based on       | Objects             | Built on promises |

---

# 🔥 4) **Readable Difference (Same Task)**

## **Using Promise**

```js
function fetchData() {
  return fetch("https://api.com/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
```

## **Using async/await**

```js
async function fetchData() {
  try {
    const res = await fetch("https://api.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

### ✔ async/await is **cleaner and readable**.

---

# 🔥 5) **Practical Example: Delay Function**

### Promise version

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000).then(() => console.log("1 second passed"));
```

### async/await version

```js
async function run() {
  await wait(1000);
  console.log("1 second passed");
}

run();
```

---

# 🔥 6) **Error Handling Difference**

### Promise

```js
promise
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

### async/await

```js
try {
  const data = await promise;
  console.log(data);
} catch (err) {
  console.log(err);
}
```

---

# 🔥 7) **Parallel Execution (Important)**

### ❌ Wrong: (Runs sequentially, slow)

```js
await task1();
await task2();
```

### ✔ Right: run in parallel

```js
const [a, b] = await Promise.all([task1(), task2()]);
```

---

# 🎯 **INTERVIEW QUESTIONS + ANSWERS**

---

### **Q1: What is the difference between Promise and async/await?**

**Answer:**
Promise asynchronous result handle করতে then/catch ব্যবহার করে।
Async/await Promise এর উপর syntactic sugar—code কে synchronous-এর মতো readable করে।
Async/await এ error handling try/catch দিয়ে সহজ হয়।

---

### **Q2: Why async/await is preferred over Promise?**

**Answer:**
Async/await readable, clean, debugging সহজ এবং callback chaining সমস্যা দূর করে।
যেখানে Promise chain বড় হয়, async/await smooth করে।

---

### **Q3: Async/await কি সবসময় Promise return করে?**

**Answer:**
হ্যাঁ। async function সবসময় একটি Promise return করে।

---

### **Q4: কীভাবে multiple async task parallel এ execute করবেন?**

**Answer:**
Using:

```js
await Promise.all([task1(), task2()])
```

---

### **Q5: async/await কি synchronous?**

**Answer:**
না। কোড দেখতে synchronous মনে হয়, কিন্তু internally asynchronous (Promise-based)।

---

# 🧪 Practice Tasks

---

### ✔ Task 1

Promise দিয়ে ১–১০ পর্যন্ত number print করো delay সহ।

### ✔ Task 2

Same task async/await এ convert করো।

### ✔ Task 3

Two API call parallel এবং serial execute করে output compare করো।

### ✔ Task 4

Promise.reject(), Promise.resolve() ব্যবহার করে example বানাও।

---

If you want, I can now prepare:
👉 **Call Stack vs Event Loop vs Microtask Queue**
👉 **Callback Hell to Promise to Async/Await transformation**
👉 **Real-life async tasks (API, DB, timeout)**


*/