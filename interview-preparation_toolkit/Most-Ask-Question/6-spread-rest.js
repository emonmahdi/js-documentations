/* 
Below is **Spread vs Rest Operator** explained in
👉 Simple Bangla explanation
👉 Professional definition
👉 Coding examples
👉 Key differences
👉 Interview Q&A
👉 Practice tasks

This is interview-standard content.

---

# 🔥 **Spread vs Rest — Simple Bangla Explanation**

### **Spread Operator (…)**

👉 কোনো array/object কে *expand* করে খুলে দেয়।
👉 ব্যবহার হয়:

* array copy
* merge করার জন্য
* function call-এ arguments expand করতে

Example:

```js
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3
```

---

### **Rest Operator (…)**

👉 একাধিক values কে *collect* করে একটি array তে নেয়।
👉 ব্যবহার হয়:

* function parameter
* destructuring-এ বাকিগুলো collect করতে

Example:

```js
function sum(...nums) {
  console.log(nums);
}
sum(1,2,3); // [1,2,3]
```

---

# 🔥 **Professional Definition (Interview Ready)**

### **Spread Operator**

The spread operator **expands** an iterable (array/string/object) into individual elements.

### **Rest Operator**

The rest operator **collects** multiple elements and bundles them into a single array.

✔ দুটোই `...` symbol ব্যবহার করে
❗ Spread = **expand**
❗ Rest = **collect**

---

# 🔥 **Coding Examples (Easiest to Advanced)**

---

## ✔ 1. Spread in Arrays

```js
const a = [1, 2];
const b = [3, 4];

const combined = [...a, ...b];
console.log(combined); // [1,2,3,4]
```

---

## ✔ 2. Spread to Copy Arrays (shallow copy)

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1,2,3]
```

---

## ✔ 3. Spread in Objects

```js
const user = { name: "Emon", age: 22 };
const updated = { ...user, age: 23 };

console.log(updated);
```

---

## ✔ 4. Spread in Function Calls

```js
const nums = [5, 10, 15];
console.log(Math.max(...nums)); // 15
```

---

# 🔥 **REST Examples**

---

## ✔ 1. Rest in Function Parameters

```js
function total(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(total(1, 2, 3, 4)); // 10
```

---

## ✔ 2. Rest in Object Destructuring

```js
const user = { name: "Mahdi", age: 22, city: "Dhaka" };

const { name, ...others } = user;

console.log(name);   // Mahdi
console.log(others); // { age:22, city:"Dhaka" }
```

---

## ✔ 3. Rest in Array Destructuring

```js
const arr = [10, 20, 30, 40];

const [first, ...rest] = arr;

console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```

---

# 🔥 **Spread vs Rest – Key Differences Table**

| Feature        | Spread                          | Rest                               |
| -------------- | ------------------------------- | ---------------------------------- |
| কাজ            | Expand                          | Collect                            |
| কোথায় ব্যবহার | Arrays, Objects, function calls | Function params, destructuring     |
| Output         | Elements আলাদা হয়               | সব elements array হিসেবে bundle হয় |
| Symbol         | ...                             | ...                                |

👉 একই sign (`...`) কিন্তু কাজ আলাদা।

---

# 🎯 **Interview Q&A (Most Asked)**

---

### **Q1: Spread vs Rest difference?**

**Answer:**
Spread operator iterable কে expand করে, আর Rest operator multiple values কে collect করে array বানায়। Spread use হয় array/object merge/copy-তে, Rest use হয় function parameters এবং destructuring-এ।

---

### **Q2: Why spread is used instead of Object.assign()?**

**Answer:**
Spread syntax concise, readable এবং modern। Copy এবং merge করার জন্য সহজ ও clean approach।
Example: `{...obj}` is easier than `Object.assign({}, obj)`.

---

### **Q3: Can rest operator be used in function arguments only?**

**Answer:**
No. Rest destructuring-এ array এবং object-এও ব্যবহার হয়।

---

### **Q4: Are spread and rest the same internally?**

**Answer:**
Yes, syntax same (`...`) — কিন্তু behavior opposite:
Spread expands, rest collects।

---

### **Q5: Which operator supports deep clone?**

**Answer:**
Spread only does **shallow clone**, not deep clone.

---

# 📝 **Practice Tasks**

---

### ✔ Task 1

Spread ব্যবহার করে দুইটা array merge করো।

### ✔ Task 2

Rest ব্যবহার করে এমন একটি ফাংশন বানাও যা unlimited arguments sum করবে।

### ✔ Task 3

Object destructuring + rest ব্যবহার করে name বাদে বাকিগুলো বের করো।

### ✔ Task 4

Spread operator দিয়ে nested array shallow copy test করো।

### ✔ Task 5

Filter function বানাও যেটাতে rest parameter দিয়ে multiple values collect করবে।

---

# 🎉 Want More?

If you want, I can also provide:
🔹 **20 Spread/Rest coding challenges**
🔹 **PDF cheatsheet**
🔹 **Multiple choice questions (MCQ)**

Just say **“give MCQs”** or **“give coding challenges”**.


*/