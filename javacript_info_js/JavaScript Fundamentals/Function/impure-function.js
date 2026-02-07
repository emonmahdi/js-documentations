/* 
🔹 Impure Function কী?

👉 এমন function যা একই input দিলেও ভিন্ন output দিতে পারে বা function এর বাইরে কোনো state বা variable পরিবর্তন করে।

🔁 Impure Function এর বৈশিষ্ট্যসমূহ:

Non-deterministic: একই input এ ভিন্ন output দিতে পারে।
Side effects: বাইরের variable বা state পরিবর্তন করতে পারে।
State dependent: বাইরের data বা state এর ওপর নির্ভরশীল হতে পারে।

*/

// 🔍 Example of Impure Function
let count = 0;

function increment() {
  count += 1;   // বাইরের variable পরিবর্তন
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2 (same input কিন্তু output আলাদা)

/* 
🧠 কেন Impure Function হয়?

বাইরের variable update করার জন্য
Random number generate করার জন্য
Date/time বা API call করার জন্য



🧑‍💻 Interview Q&A (Bangla)
❓ Q1: Impure function কী?

✅ এমন function যা একই input এ ভিন্ন output দিতে পারে বা বাইরের state পরিবর্তন করে।

❓ Q2: Impure function এর side effect কী?

✅ বাইরের variable, ডাটাবেস, ফাইল, UI ইত্যাদি পরিবর্তন করা।

❓ Q3: Impure function কি testing এ সমস্যা হয়?

✅ হ্যাঁ, unpredictable হওয়ায় testing কঠিন হয়।

❓ Q4: কখন Impure function দরকার?

✅ যখন state update করতে হয় বা বাইরের কাজ করতে হয় (যেমন API call, UI update)।

❓ Q5: Impure function আর Pure function পার্থক্য কী?
Impure Function	Pure Function
Side effect থাকে	Side effect থাকে না
Non-deterministic	Deterministic
🎯 Interview one-line answer

"Impure function হলো এমন function যা একই input এ ভিন্ন output দিতে পারে বা বাইরের state পরিবর্তন করে।"


*/