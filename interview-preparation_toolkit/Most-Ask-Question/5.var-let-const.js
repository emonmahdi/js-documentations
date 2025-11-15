/* 

Below is **var vs let vs const** explained in
👉 Simple definition (Bangla)
👉 Deep explanation
👉 Coding examples
👉 Hoisting behavior
👉 Scope difference
👉 Re-declaration & Re-assignment rules
👉 Interview Q&A
👉 Practice tasks

This is the **best interview-ready explanation**.

---

# 🔥 **Var vs Let vs Const — Simple Definition (Bangla)**

### **var**

পুরনো JavaScript variable declaration।
👉 Function scoped
👉 Re-declare allowed
👉 Hoisted with default value **undefined**

---

### **let**

Modern way to declare variables।
👉 Block scoped
👉 Re-declare allowed না
👉 Hoisted কিন্তু TDZ (Temporal Dead Zone) এ থাকে

---

### **const**

Permanent/constant variable।
👉 Block scoped
👉 Re-declare allowed না
👉 Re-assign allowed না
👉 Hoisted কিন্তু TDZ এ থাকে

---

# 🔥 **Key Differences Table (Interview Friendly)**

| Feature                | var                             | let           | const         |
| ---------------------- | ------------------------------- | ------------- | ------------- |
| Scope                  | Function                        | Block         | Block         |
| Re-declare             | ✔ Allowed                       | ❌ Not allowed | ❌ Not allowed |
| Re-assign              | ✔ Allowed                       | ✔ Allowed     | ❌ Not allowed |
| Hoisting               | ✔ Yes (initialized = undefined) | ✔ Yes (TDZ)   | ✔ Yes (TDZ)   |
| Global Object Attached | ✔ Yes (window.varName)          | ❌ No          | ❌ No          |

---

# 🔥 **1. Scope Difference**

### **var → function scoped**

```js
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}
```

---

### **let → block scoped**

```js
if (true) {
  let y = 20;
}
console.log(y); // ReferenceError
```

---

### **const → block scoped**

```js
if (true) {
  const z = 30;
}
console.log(z); // ReferenceError
```

---

# 🔥 **2. Hoisting Difference**

### **var hoisting example**

```js
console.log(a); // undefined
var a = 5;
```

✔ Hoisted + initialized = undefined

---

### **let hoisting example (TDZ)**

```js
console.log(b); // ReferenceError
let b = 10;
```

✔ Hoisted কিন্তু TDZ থাকে

---

### **const hoisting example (TDZ)**

```js
console.log(c); // ReferenceError
const c = 15;
```

---

# 🔥 **3. Re-declaration Difference**

### **var → allowed**

```js
var a = 10;
var a = 20; 
console.log(a); // 20
```

---

### **let → not allowed**

```js
let x = 10;
let x = 20; // Error
```

---

### **const → not allowed**

```js
const p = 10;
const p = 20; // Error
```

---

# 🔥 **4. Re-assignment Difference**

### **var allowed**

```js
var a = 5;
a = 15;
```

---

### **let allowed**

```js
let b = 10;
b = 25;
```

---

### **const not allowed**

```js
const c = 30;
c = 40; // Error
```

---

### ❗ BUT const object values change করা যায় (non-primitive)

```js
const user = { name: "Emon" };
user.name = "Mahdi";

console.log(user); // { name: "Mahdi" }
```

✔ const variable pointer change হয় না, object change হতে পারে।

---

# 🔥 **Real-life Example**

### Why prefer let/const over var?

```js
var isAdmin = false;

if (true) {
  var isAdmin = true; // Overwrites accidentally
}

console.log(isAdmin); // true (unexpected)
```

👉 **var** bug তৈরি করে।
👉 let / const safer.

---

# 🎯 **Most Important Interview Q&A**

---

### **Q1: What is the difference between var, let, and const?**

**Answer:**
var function-scoped, hoisted এবং re-declare করা যায়।
let এবং const block-scoped, hoisted হলেও TDZ এ থাকে এবং re-declare করা যায় না।
let re-assign করা যায়, const করা যায় না।

---

### **Q2: Why should we avoid var?**

**Answer:**
Because var is function-scoped, creates bugs, allows re-declaration, and attaches to the global object. let/const is safer and block scoped.

---

### **Q3: Does const make a variable immutable?**

**Answer:**
No. const only prevents re-assignment.
Objects/arrays inside const can still be mutated.

---

### **Q4: Explain TDZ (Temporal Dead Zone)**

**Answer:**
let এবং const hoist হয়, কিন্তু initialization হওয়ার আগে তারা access করা যায় না—এই সময়টাকেই Temporal Dead Zone বলে।

---

### **Q5: Which one is recommended? let or const?**

**Answer:**
Modern best practice:
✔ use **const** by default
✔ use **let** only when value will change
✔ avoid **var**

---

# 📝 **Practice Tasks (Recommended for mastering)**

---

### **Task 1:**

var, let, const use করে তিনটা example বানাও যেখানে scope difference দেখাবে।

### **Task 2:**

Hoisting behavior test করো:

```js
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```

Explain output.

---

### **Task 3:**

const দিয়ে object/array modify করার example বানাও।

---

### **Task 4:**

var accidental override example recreate করো।

---

### **Task 5:**

TDZ explain করে code লিখো।

---

# 🎉 Want More?

I can also provide:
✔ "var vs let vs const" **Interview Cheat Sheet PDF**
✔ 30+ **Interview MCQs**
✔ Practice file structure

Just say **“give MCQs”** or **“make cheat sheet”**.



*/