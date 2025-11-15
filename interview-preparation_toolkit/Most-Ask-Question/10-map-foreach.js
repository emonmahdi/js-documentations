/* 


Here is **map vs forEach** in a **simple + interview-ready** format with definition, why use, example & QnA.

---

# ✅ **map vs forEach — Simple Explanation**

---

# 🔹 **1. forEach**

### ✔ **Simple Definition**

`forEach()` array এর প্রতিটি element loop করে কিন্তু কিছু return করে না।

### ✔ **Why Use?**

* Simply loop চালাতে
* Console.log বা side effect করতে (API call, DOM update)

### ✔ **Real-Life Use**

* Array এর প্রতিটি product console এ print করা
* প্রতিটি user এর email send করা
* For loop এর alternative

### ✔ **Coding Example**

```js
const nums = [1, 2, 3];

nums.forEach(n => {
  console.log(n);
});
```

👉 Output: 1, 2, 3
⚠️ **Return value নেই**।

---

# 🔹 **2. map**

### ✔ **Simple Definition**

`map()` array এর প্রতিটি element loop করে **নতুন array return করে**।

### ✔ **Why Use?**

* Original array থেকে নতুন transformed array তৈরি করতে
* UI generate করতে (React এ খুব বেশি ব্যবহৃত)

### ✔ **Real-Life Use**

* Price * discount করে newPrice array তৈরি
* React এ list render
* Object থেকে new field যোগ করা

### ✔ **Coding Example**

```js
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
```

👉 map **always returns a new array**.

---

# 🔥 **3. map vs forEach (Quick Comparison Table)**

| Feature          | forEach      | map                 |
| ---------------- | ------------ | ------------------- |
| Return           | nothing      | new array           |
| Mutate original? | no (but can) | no                  |
| Use case         | side effects | data transformation |
| Chainable        | ❌ no         | ✔ yes               |
| Best for         | loop only    | create new array    |

---

# 🔥 **4. Simple Example Difference**

### **forEach**

```js
const arr = [1, 2, 3];
const result = arr.forEach(n => n * 2);

console.log(result); // undefined
```

---

### **map**

```js
const arr = [1, 2, 3];
const result = arr.map(n => n * 2);

console.log(result); // [2, 4, 6]
```

---

# 🎯 **INTERVIEW QnA (Simple)**

### **Q1: What is the main difference between map and forEach?**

**Answer:**
forEach শুধু loop চালায়, কিন্তু কিছু return করে না।
map loop চালিয়ে **নতুন array return করে**।

---

### **Q2: map কি original array পরিবর্তন করে?**

**Answer:**
না। map original array mutate করে না; new array তৈরি করে।

---

### **Q3: কোনটা faster?**

**Answer:**
Performance প্রায় same, কিন্তু map optimization ভালো করে কারণ এটা new array return করে।

---

### **Q4: React এ map কেন বেশি ব্যবহৃত?**

**Answer:**
Because map দিয়ে array → JSX element এর নতুন list তৈরি করা যায়।
Example:

```js
items.map(item => <li>{item}</li>)
```

---

### **Q5: forEach কি chain করা যায়?**

**Answer:**
না। কারণ forEach কিছু return করে না।

---

# 🧪 **Practice Tasks**

### ✔ Task 1

Given array `[1,2,3]` —
map দিয়ে `[2,4,6]` তৈরি করো।

### ✔ Task 2

forEach দিয়ে সব number sum করে দেখো।

### ✔ Task 3

Objects array থেকে শুধু names নিয়ে new array তৈরি করো map ব্যবহার করে।

### ✔ Task 4

forEach দিয়ে email send message print করো every user.

---

Want next topic?
👉 **filter vs find**
👉 **reduce real-life uses**
👉 **map/filter/reduce practice problems**


*/