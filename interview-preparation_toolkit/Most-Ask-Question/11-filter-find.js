/* 

Here is **filter vs find** in a **simple + interview-ready** format with definition, why use, real-life use, coding example & QnA.

---

# ✅ **filter vs find — Simple Explanation (Bangla)**

---

# 🔹 **1. filter()**

### ✔ **Simple Definition**

`filter()` array থেকে **যে elements condition match করে** তাদের নিয়ে **একটি নতুন array** return করে।

### ✔ **Why Use?**

* List থেকে multiple matching items বের করতে
* Search/filter functionality
* Data clean করতে

### ✔ **Real-Life Use**

* সব active users বের করা
* 500 টাকার উপরে সব products filter করা
* Marks > 40 — pass students list

### ✔ **Coding Example**

```js
const nums = [1, 2, 3, 4, 5];

const even = nums.filter(n => n % 2 === 0);

console.log(even); // [2, 4]
```

👉 filter **multiple items return করতে পারে**।

---

# 🔹 **2. find()**

### ✔ **Simple Definition**

`find()` array এর **প্রথম matching element** return করে।

### ✔ **Why Use?**

* শুধু first match দরকার হলে
* One specific item খুঁজতে
* Database থেকে specific user বা product find করতে

### ✔ **Real-Life Use**

* First admin user বের করা
* Specific ID-এর product পাওয়া
* First failed transaction খুঁজে বের করা

### ✔ **Coding Example**

```js
const nums = [1, 2, 3, 4, 5];

const firstEven = nums.find(n => n % 2 === 0);

console.log(firstEven); // 2
```

👉 find **single value return করে**, array নয়।

---

# 🔥 **3. Quick Comparison Table**

| Feature     | filter              | find                  |
| ----------- | ------------------- | --------------------- |
| Return      | array               | single value          |
| Items found | 0, 1 বা multiple    | only first match      |
| Type        | High-order function | High-order function   |
| Use case    | list filtering      | single element search |
| If no match | empty array         | undefined             |

---

# 🔥 **4. Practical Example (Users)**

```js
const users = [
  { id: 1, role: "user" },
  { id: 2, role: "admin" },
  { id: 3, role: "admin" }
];

// filter → all admins
const admins = users.filter(u => u.role === "admin");
console.log(admins);
// [{id:2, role:"admin"}, {id:3, role:"admin"}]

// find → first admin
const firstAdmin = users.find(u => u.role === "admin");
console.log(firstAdmin);
// {id:2, role:"admin"}
```

---

# 🎯 **INTERVIEW QnA (Simple)**

---

### **Q1: filter এবং find এর মধ্যে main difference কী?**

**Answer:**
filter সব matching elements নিয়ে নতুন array return করে।
find শুধু first matching element return করে।

---

### **Q2: find যদি কিছু না পায় তখন কী return করবে?**

**Answer:**
`undefined` return করে।

---

### **Q3: filter যদি কিছু না পায়?**

**Answer:**
`[]` (empty array) return করে।

---

### **Q4: কোনটা বেশি used?**

**Answer:**
Use case এর উপর নির্ভর করে—

* Multiple results দরকার হলে → filter
* Single result দরকার হলে → find

---

### **Q5: filter vs find কে faster?**

**Answer:**
find faster কারণ প্রথম match পেলেই stop করে।
filter পুরো array travers করে।

---

# 🧪 **Practice Tasks**

### ✔ Task 1

Array থেকে সব odd numbers filter করো।

### ✔ Task 2

Students list থেকে প্রথম failed student find করো।

### ✔ Task 3

Products array থেকে price > 1000 সব products filter করো।

### ✔ Task 4

find ব্যবহার করে কোনো id match হলে সেই user return করো।

---

Want next topic?
👉 **reduce real-life examples**
👉 **map/filter/reduce combined practice**
👉 **findIndex vs indexOf**


*/