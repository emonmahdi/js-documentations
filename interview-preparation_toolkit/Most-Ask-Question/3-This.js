/* 
Below is **All About `this` keyword in JavaScript** — explained in simple language + professional interview-level depth + coding examples + tricky questions + practice tasks.

---

# 🔥 **All About `this` Keyword in JavaScript**

*(Simple → Deep → Interview Ready → Practice Tasks)*

---

# ✅ **1. What is `this`? (Simple Definition)**

`this` হলো একটি বিশেষ keyword, যেটা **function কিভাবে কল হচ্ছে** তার উপর নির্ভর করে **value change হয়।**
Meaning → **“Who is calling the function?”**

---

# ✅ **2. Why `this` is confusing?**

কারণ **JavaScript এ `this` রানটাইমে bind হয়**। Function কোথায় লেখা আছে তা না দেখে, function কিভাবে call হচ্ছে সেটা দেখে `this` decide হয়।

---

# 🔥 **3. `this` Behaves Differently in Different Contexts**

## 🔹 **(1) Global Context**

```js
console.log(this); 
```

Browser → `window`
Node → `{}` (empty object in module)

---

## 🔹 **(2) Inside a Function (Non-strict Mode)**

```js
function show() {
  console.log(this);
}
show(); 
```

➡️ Global object (browser → `window`)

---

## 🔹 **(3) Strict Mode**

```js
"use strict";
function show() {
  console.log(this);
}
show(); 
```

➡️ `undefined`
Strict mode এ function কে global object bind করে না।

---

## 🔹 **(4) Inside an Object Method**

```js
const user = {
  name: "Emon",
  show() {
    console.log(this.name);
  }
};

user.show();
```

➡️ এখানে `this` = `user` object
কারণ user object function-কে call করছে।

---

## 🔹 **(5) Inside an Event Listener**

```js
button.addEventListener("click", function () {
  console.log(this); 
});
```

➡️ `this` = clicked DOM element
(just like `<button>`)

---

## 🔹 **(6) Arrow Functions do NOT have their own `this`**

Arrow function → `this` **lexically inherit করে** (parent scope থেকে নেয়)

```js
const obj = {
  name: "Emon",
  show: () => {
    console.log(this);
  }
};
obj.show();
```

➡️ `this` = global object (NOT obj)

কারণ arrow function নিজের `this` create করে না।

---

## 🔹 **(7) Constructor Function**

```js
function User(name) {
  this.name = name;
}

const u1 = new User("Emon");
console.log(u1.name);
```

➡️ `this` = newly created object

---

## 🔹 **(8) Using call(), apply(), bind()**

### **call()**

```js
function greet() {
  console.log("Hi " + this.name);
}

greet.call({ name: "Emon" }); 
```

➡️ `this` manually set করা হয়েছে `{name: "Emon"}`

### **apply()**

Just like call but arguments array আকারে যায়।

### **bind()**

Permanent binding

```js
const greetEmon = greet.bind({ name: "Emon" });
greetEmon();
```

---

# 🚀 **4. Interview-Level Explanation (Professional Answer)**

### **Interview Q: What is `this` in JavaScript?**

**Answer (Professional):**

`this` is a special keyword whose value is determined based on the execution context. Unlike many languages, JavaScript binds `this` at runtime depending on *how* a function is called, not where it is declared.

`this` behaves differently in global scope, object methods, constructor functions, event listeners, arrow functions, and when using `call`, `apply`, or `bind`.

---

### **Interview Q: Why arrow functions do not have their own `this`?**

**Answer:**

Arrow functions are designed to use lexical scoping for `this`.
Meaning → `this` is taken from the surrounding (parent) scope.

Arrow functions are ideal when we want `this` to stay consistent.

---

### **Interview Q: What is `this` in strict mode?**

**Answer:**

Inside a normal function, `this` becomes **undefined** in strict mode because JavaScript prevents automatic binding to the global object.

---

### **Interview Q: How does `this` behave in constructor functions?**

**Answer:**

In constructor functions, `this` refers to the newly created object.
JavaScript automatically returns that object unless you explicitly return another object.

---

### **Interview Q: Difference between call, apply, and bind?**

| Method      | Purpose                                    | Invocation  |
| ----------- | ------------------------------------------ | ----------- |
| **call()**  | invoke function with custom `this`         | immediately |
| **apply()** | same as call, but arguments as array       | immediately |
| **bind()**  | returns new function with permanent `this` | later       |

---

# 🔥 **5. Tricky Interview Examples**

---

## ❗ Example 1: Arrow function inside object

```js
const user = {
  name: "Emon",
  show: () => console.log(this.name)
};
user.show();
```

➡️ Output: `undefined`
Reason: Arrow function → no own `this`

---

## ❗ Example 2: Losing `this`

```js
const user = {
  name: "Emon",
  show() {
    console.log(this.name);
  }
};

const fn = user.show;
fn();
```

➡️ `undefined`
Function lost its object context → `this` = global

Fix:
`const fn = user.show.bind(user);`

---

## ❗ Example 3: Event Listener with Arrow Function

```js
button.addEventListener("click", () => {
  console.log(this);
});
```

➡️ `this` = global
Arrow function does NOT refer to button.

---

# 🎯 **6. Real Life Use of `this`**

### ✔ Class-based OOP

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}
```

### ✔ Reusable functions

```js
function printName() {
  console.log(this.name);
}

const user = { name: "Emon" };
printName.call(user);
```

---

# 📘 **7. Practice Tasks for You**

### **Task 1:**

একটা object বানিয়ে method এর ভিতরে `this` কিভাবে কাজ করে দেখাও।

### **Task 2:**

Arrow function ব্যবহার করলে `this` কিভাবে আলাদা behave করে দেখাও।

### **Task 3:**

call, apply, bind ব্যবহার করে তিনটা different example বানাও।

### **Task 4:**

Constructor function তৈরি করে নতুন object বানাও এবং `this` print করো।

### **Task 5:**

Event listener এ normal function vs arrow function এ `this` difference show করো।

### **Task 6:**

একটা function কে variable-এ assign করে দেখো কেন `this` হারিয়ে যায়।

---

# 🎉 Want full code practice folder (Module-wise)?

If you want, I can generate:

📁 `js-practice/`
 📂 `module-1-basics`
 📂 `module-2-functions`
 📂 `module-3-hoisting`
 📂 `module-4-scope`
 📂 `module-5-arrays`
 📂 `module-6-es6`
 📂 `module-7-oop`
 📂 `module-8-async`
 📂 `module-9-error-handling`
 📂 `module-10-dom`
 📂 `module-11-advanced`
 📂 `module-12-performance`
 📂 `module-13-coding-problems`

Just tell me:
➡️ **"Yes generate full folder structure with files inside"**


*/