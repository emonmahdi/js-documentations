
function outer() {
    let name = "Emon"; // parent variable
  
    function inner() {
      console.log(name); // accessing parent variable => closure
    }
  
    return inner;
  }
  
  const fn = outer();
  fn(); 
  




/* 
🔹 What is Closure? (Simple Definition)

Closure হলো এমন একটি feature যেখানে একটি inner function তার parent function-এর variables কে remember করে এবং access করতে পারে—even after the parent function has finished execution.

👉 অর্থাৎ function + lexical environment = Closure

Closure = Memory + Function Power



🔹 Why Closure Happens? (Simple Explanation)

JavaScript works with Lexical Scope।

When a function is created, it remembers where it was created and the variables around it.
Parent function return হয়ে গেলেও inner function তার lexical scope এর variable access করতে পারে।

*/

/* 
Here is **Closure** explained exactly like the **Hoisting** module — full definition, simple explanation, deep concept, coding examples, interview-style answers, and problem-solving.

---

# 🔥 **Closure in JavaScript — Full Explanation (Beginner → Advanced)**

---

# 🔹 **What is Closure? (Simple Definition)**

**Closure হলো এমন একটি feature যেখানে একটি inner function তার parent function-এর variables কে remember করে এবং access করতে পারে—even after the parent function has finished execution.**

👉 অর্থাৎ **function + lexical environment = Closure**

**Closure = Memory + Function Power**

---

# 🔹 **Why Closure Happens? (Simple Explanation)**

JavaScript works with **Lexical Scope**।

When a function is created, it *remembers* where it was created and the variables around it.
Parent function return হয়ে গেলেও inner function তার lexical scope এর variable access করতে পারে।

---

# 🔥 **Real-Life Example (Simple Explanation)**

Think:
You have a **password locker**, you leave the locker room, but you still remember the password.

Parent function executes → finished → gone
But inner function still "remembers" parent variables.

এটাই Closure!

---

# 🔹 **Basic Example of Closure**

```js
function outer() {
  let name = "Emon"; // parent variable

  function inner() {
    console.log(name); // accessing parent variable => closure
  }

  return inner;
}

const fn = outer();
fn(); 
```

### Output:

```
Emon
```

👉 যদিও `outer()` ফাংশন শেষ হয়ে গেছে, তবুও `inner()` ফাংশন `name` মনে রেখেছে।

---

# 🔥 **Why Closure Is Useful? (Real Use Cases)**

### ✔ 1. **Data Privacy / Encapsulation**

Private variables তৈরি করা যায়।

### ✔ 2. **Function factory / customization**

Reusable function generate করা যায়।

### ✔ 3. **Maintaining state without OOP**

Counter, timer, call tracking ইত্যাদি বানানো যায়।

### ✔ 4. **Async code এ variables remember করা**

setTimeout, API calls— সব জায়গায় closure কাজ করে।

---

# 🔹 **Real-Life Use: Private Counter Using Closure**

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
c1(); // 1
c1(); // 2
c1(); // 3
```

👉 এখানে `count` variable outer function এ আছে, কিন্তু outside থেকে direct access করা যায় না—
Only inner function control করতে পারে → Encapsulation.

---

# 🔥 Example: Closure + setTimeout

```js
function greet() {
  let message = "Hello Emon";

  setTimeout(function () {
    console.log(message);
  }, 2000);
}

greet();
```

Even after 2 seconds, inner function still remembers `message`.

---

# 🔥 Example: Function Factory (Power of Closure)

```js
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15
```

👉 এখানে outer variable `x` কে inner function মনে রেখেছে।

---

# 🔥 Example: Loop + Closure (The Classic Interview Problem)

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

### Output:

```
4
4
4
```

👉 কারণ var function-scoped → closure সবসময় last value 4 access করে।

Fix using **let**:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

### Output:

```
1
2
3
```

---

# 🔥 **Interview Definition (Perfect Answer in Bangla)**

**“Closure হলো JavaScript-এর একটি ফিচার যেখানে একটি inner function তার lexical scope-এর variables কে remember করে—even after the outer function has returned. এটি ব্যবহার করা হয় data privacy, state management এবং function factories তৈরি করতে।”**

---

# 🧠 **Top Interview Questions (With Perfect Answers)**

---

### **Q1: Closure কী?**

**Answer (2 lines):**
Closure হলো এমন একটি mechanism যেখানে inner function তার outer function-এর variables কে মনে রাখে এবং access করতে পারে outer function execution শেষ হওয়ার পরও।

---

### **Q2: Closure কেন দরকার?**

**Answer:**
Data privacy, private variable তৈরি, state preserve করা, function factories তৈরির জন্য closure ব্যবহার হয়।

---

### **Q3: Closure কোথায় use হয়?**

**Answer:**
Counter, module pattern, event handlers, setTimeout, currying, memoization—সবক্ষেত্রেই closure essential।

---

### **Q4: Lexical scope কী?**

**Answer:**
Function কোথায় declare হয়েছে তার ওপর ভিত্তি করে তার scope নির্ধারিত হয়—একেই lexical scope বলে।

---

### **Q5: Closure problem in loop (var vs let)?**

**Answer:**
`var` function-scoped হওয়ায় সব closure একই variable refer করে। তাই output ভুল আসে। `let` block-scoped হওয়ায় সমস্যা থাকে না।

---

# 🔥 Problem-Solving for Interviews

---

### **Problem 1:** Create a counter using closure.

```js
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const count = makeCounter();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
```

---

### **Problem 2:** Create a function that stores a secret value.

```js
function secretHolder(secret) {
  return function () {
    return secret;
  };
}

const pass = secretHolder("myPassword");
console.log(pass()); // "myPassword"
```

---

### **Problem 3:** Solve using closure — multiplier

```js
function makeMultiplier(x) {
  return function (y) {
    return x + y;
  };
}

console.log(makeMultiplier(5)(10)); // 15
```

---

# ⭐ Do you want Module-wise mini practice tasks for Closure?

(10–20 problems that companies ask)


*/

/* 

এখন তোমাকে দিচ্ছি **Closure Practice Tasks (Beginner → Advanced → Interview Level)**
প্রতিটা problem এর **expected output + hint** ও রাখলাম যেন তুমি নিজে solve করতে পারো।
(তুমি চাইলে আমি তোমার solution evaluate করে দিতে পারবো।)

---

# 🔥 **Closure Practice Tasks (20 Tasks)**

---

# ✅ **Level 1 — Beginner (Understanding Closure Basics)**

---

### **Task 1: Return Inner Function**

Write a function that returns another function which prints `"Hello"`.

**Expected Output:**

```
Hello
```

---

### **Task 2: Access Outer Variable**

Outer function এ একটি name variable রাখবে, inner function console.log করবে।

**Expected Output:**

```
Your Name
```

---

### **Task 3: Simple Counter (Increment by 1)**

A function লিখবে যা return করলে প্রতিবার কল করলে count বাড়বে।

**Expected Output:**

```
1
2
3
```

---

### **Task 4: Closure with Parameter**

Outer function parameter হিসেবে একটি value নেবে, inner function সেটা print করবে।

**Example:**
`outer("Bangladesh")()` → prints **Bangladesh**

---

### **Task 5: Two Counters from Same Function**

একই factory function থেকে two separate counters বানাও:

```js
const c1 = counter();
const c2 = counter();
```

**Expected:**

```
c1 → 1,2,3
c2 → 1,2
```

---

# ✅ **Level 2 — Intermediate (Using Closure for Logic)**

---

### **Task 6: Make Adder**

`makeAdder(5)` → return function যা argument + 5 return করবে।

**Example:**
`makeAdder(5)(10)` → 15

---

### **Task 7: Private Variable**

Variable টি outer scope এ private থাকবে।
Reset করা যাবে না।

**Expected:**

```
counter(); // 1
counter(); // 2
```

---

### **Task 8: Closure with setTimeout**

1 second পর inner function outer function এর variable print করবে।

---

### **Task 9: Logger**

`createLogger(prefix)`
return function যা prefix সহ message print করবে।

**Example:**
`info = createLogger("INFO")`
`info("Server started")`

Output:
`INFO: Server started`

---

### **Task 10: Filter by Closure**

একটি function বানাবে যেটি threshold নেবে এবং return function কে ব্যবহার করে array filter করবে।

Example:

```js
const higherThan10 = createFilter(10);
console.log(higherThan10([5, 15, 20]));
```

Expected Output:
`[15, 20]`

---

# ✅ **Level 3 — Advanced (Interview Style)**

---

### **Task 11: Once Function**

একটি function return করবে, যেটা শুধু একবার execute হবে, পরের বার কিছুই করবে না।

**Example:**

```js
const helloOnce = once(() => console.log("Hello"));
helloOnce(); // Hello
helloOnce(); // No output
```

---

### **Task 12: Module Pattern Simulation**

Object return করবে যার ভিতরে method থাকবে (private variable থাকবে):

* increment
* decrement
* getCount

---

### **Task 13: Memory Optimization**

Closure ব্যবহার করে একটি **cache/memoization** function লিখবে।

Example:
`memoAdd(5)` → store
`memoAdd(5)` → return from cache

---

### **Task 14: Create Bank Account**

Method: deposit, withdraw, balance
Balance private থাকবে।

Example:

```js
const acc = createAccount(100);
acc.deposit(50); // 150
acc.withdraw(30); // 120
acc.balance(); // 120
```

---

### **Task 15: Loop Problem Using var**

Solve this:

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Fix using closure (not let).

---

# ✅ **Level 4 — Expert Level (Big Company Interview)**

---

### **Task 16: Event Listener with Closure**

Button click করলে click count দেখাবে (private counter)।

---

### **Task 17: Custom Math Operation Factory**

Example:

```js
const multiplyBy3 = operationFactory((x, y) => x * y, 3);
multiplyBy3(10) → 30
```

---

### **Task 18: Create ID Generator**

Every call returns a new unique ID:

Example:

```js
const id = createID();
id(); // 1
id(); // 2
id(); // 3
```

---

### **Task 19: Debounce (Closure Based)**

A function implement করবে যা 1-2 sec pause ছাড়া call হবে না।

---

### **Task 20: Throttle (Closure Based)**

Function call প্রতি 1 second এ একবার allow করবে।

---

# ⭐ Bonus (Most Asked Interview Problem)

### **Task 21: Guessing Game (Closure)**

Random number store করবে, user input দিলে match check করবে।

---

# 🎉 Want Solutions Too?

I can give:
✔ Full solutions
✔ Explanation
✔ Interview style answers
✔ Node.js runnable code
✔ And create a `closure_practice.js` file (folder structure)

Just tell me:
👉 **“Give solution for all tasks”**
OR
👉 **“Give solution for task 1–5 only first”**


*/