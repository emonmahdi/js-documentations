/* 

Below is **ALL ABOUT Prototype & Prototypal Inheritance** — সহজভাবে, গভীরভাবে, ইন্টারভিউ-লেভেল ব্যাখ্যা, কোড উদাহরণ, এবং QnA সহ।

---

# ✅ **Prototype & Prototypal Inheritance (JavaScript)**

## 🔥 **1. Definition (Professional + Interview Level)**

### **🔹 Prototype**

Prototype হলো একটি **hidden (internal) object** যা প্রতিটি function এবং object-এর সাথে লিংক করা থাকে।
JavaScript যখন কোনো object-এর ওপর কোনো property খুঁজে পায় না—তখন সে automatically object-এর prototype-এ খুঁজে দেখে।

এটাই হলো **prototype chain**।

---

### **🔹 Prototypal Inheritance**

JavaScript-এ objects অন্য objects থেকে properties/methods inherit করে।
এটাকেই বলে **Prototypal Inheritance**।

> **In simple words:**
> এক object অন্য object-এর property/method use করতে পারে prototype chain এর মাধ্যমে।

---

## 🔥 **2. Why JS uses Prototype?**

➤ Memory save করে
➤ একবার method define করলে সব object share করতে পারে
➤ Class-based inheritance এর মতো কাজ করে, কিন্তু আরও flexible

---

# ✅ **3. Basic Example of Prototype**

```js
const person = {
  greet() {
    console.log("Hello, I am a person");
  }
};

const student = Object.create(person); // student inherits from person
student.greet();  
```

### ✔ Output:

```
Hello, I am a person
```

student-এর নিজস্ব greet() নেই → তাই সে prototype (person) এ খুঁজে পায়।

---

# ✅ **4. Function Constructor + Prototype Example**

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};

const p1 = new Person("Emon");
p1.sayHi();
```

### ✔ Output:

```
Hi, I am Emon
```

🔹 sayHi প্রতিটি object-এ copy হয় না → memory save
🔹 সব object prototype থেকে share করে

---

# ✅ **5. Prototype Chain (Clear Visualization)**

```js
console.log(p1.__proto__);          // Person.prototype
console.log(p1.__proto__.__proto__); // Object.prototype
console.log(p1.__proto__.__proto__.__proto__); // null
```

**Chain:**

```
p1 → Person.prototype → Object.prototype → null
```

---

# ✅ **6. Class Syntax (But works with Prototype internally)**

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log("Talking " + this.name);
  }
}

const p = new Person("Mahdi");
p.talk();
```

👉 যদিও class syntax ব্যবহার করা হয়েছে, ভিতরে prototype-ই ব্যবহৃত হয়।

---

# 🔥 **7. Object.create() Example (Most Asked in Interview)**

```js
const car = {
  start() {
    return "Car started";
  }
};

const bmw = Object.create(car);
console.log(bmw.start());
```

---

# 🔥 **8. How Prototype Inheritance Works? (Interview Explanation)**

এভাবে বলতে হবে:

> JavaScript uses **prototypal inheritance**, where one object can inherit properties from another object through the prototype chain.
> When you access a property, JS first checks the object itself.
> If not found, it moves up the prototype chain until found or reaches null.

---

# 🎯 **9. Interview QnA**

### **Q1: What is Prototype?**

**Ans:**
Prototype হলো একটি object যা অন্য object-কে properties/methods provide করে। প্রতিটি JS object-এর একটি internal prototype link থাকে।

---

### **Q2: What is Prototypal Inheritance?**

**Ans:**
এটি এমন একটি process যেখানে objects অন্য objects থেকে properties এবং methods inherit করে।

---

### **Q3: How is prototype different from `__proto__`?**

| Term          | Meaning                                              |
| ------------- | ---------------------------------------------------- |
| **prototype** | function-এর property যা future instances inherit করে |
| ****proto**** | প্রতিটি object-এর hidden link তার prototype-এর দিকে  |

---

### **Q4: Why use prototype instead of adding methods inside constructor?**

**Ans:**
Constructor এর ভিতরে method দিলে প্রতিটি object copy পায় → memory waste
Prototype-এ দিলে সব instance একই method share করে → efficient

---

### **Q5: What is Prototype Chain?**

**Ans:**
Object → its prototype → parent prototype → Object.prototype → null
এটাই lookup chain যেখানে JS properties খুঁজে।

---

### **Q6: Does JavaScript have classical inheritance?**

**Ans:**
Outside দেখলে class আছে, কিন্তু internally সব works using **prototype-based inheritance**।

---

# 🎯 **10. Practice Tasks**

### ✅ **Task 1:**

Set a method in prototype & access it from 3 different objects.

### ✅ **Task 2:**

Create Animal constructor, and Dog inherits new method using prototype.

### ✅ **Task 3:**

Using Object.create(), create:

```
vehicle → car → bmw
```

And access method from top-level.

### ✅ **Task 4:**

Implement your own `myCreate()` that works like `Object.create()`.

Hint:

```js
function myCreate(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}
```

---

# 🎉 Want Next Topic?

If you want, I can continue with:

👉 **Module 14: JavaScript Important Interview Patterns**
👉 OR any specific concept like **Currying, Debounce, Memoization, Event delegation** etc.

Just tell me **“Next Module”** or name a topic.


*/