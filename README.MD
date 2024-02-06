# 1. JavaScript Documentation using by me

## Js Topics To be covered

### 1. Basic Programming

### 2. Basic JavaScript Concepts

    1. Variables
    2. Js reserved word
    3. Js Data Types
    7. Null & undefined
    8. Type conversion
    9. operators
    10. statements
    11. Math function
    12. Date Function
    13. Js Comments
    14. Functions
    15. Objects
    16. Arrays
    17. Events
    18. Array and String Methods
    19. Object Methods
    20. Date
    21. Conditionals
    22. Error Handling
    23. JavaScript OOP
    24. classes and inheritance and Debugging
    25. JS Web APIs
         1. Forms
         2. History
         3. Geolocation
         4. Storage
         5. Worker and Fetch API
    26. JS JSON

### 1. Variables:

Variables are used to store and manage data. They are named containers that can hold values of various types, such as numbers, strings, or objects. Variables in JavaScript are declared using the var, let, or const keyword, followed by a unique name (identifier)

Note: `var is function-scoped, and it has some nuances regarding variable hoisting, so it's recommended to use let and const instead`.

- Using var (historical, but less commonly used now):

  ```js
  // Variable declaration using var
  var age;
  // Variable assignment
  age = 25;

  // Variable declaration and assignment in one line
  var name = "John";

  // Reassigning a variable
  age = 30;

  // Output the values
  console.log(name); // Output: John
  console.log(age); // Output: 30
  ```

- Using let (introduced in ECMAScript 6):

```js
// Variable declaration using let
let score;

// Variable assignment
score = 100;

// Variable declaration and assignment in one line
let playerName = "Alice";

// Reassigning a variable
score = 150;

// Output the values
console.log(playerName); // Output: Alice
console.log(score); // Output: 150
```

Note: `let is block-scoped, and you can reassign values to a variable declared with let.`

- Using const (for constants, introduced in ECMAScript 6):

```js
// Constant declaration and assignment
const pi = 3.14;

// Constants must be assigned a value when declared
// const gravity; // This would result in an error

// Output the value
console.log(pi); // Output: 3.14
```

Note: `const is also block-scoped, but unlike let, you cannot reassign values to a variable declared with const once it's been assigned.`

### 2. Js Reserved Word:

In JavaScript, there are reserved words that have special meanings and cannot be used as identifiers (such as variable names, function names, or labels) in your code. These words are part of the language's syntax and have predefined roles. Here is a list of some reserved words in JavaScript

```js
abstract  boolean  break  byte
case  catch  char  class  const  continue
debugger  default  delete  do  double
else  enum  export  extends  false  final  finally  float  for  function
goto
if  implements  import  in  instanceof  int  interface
let  long
native  new  null
package  private  protected  public
return  short  static  super  switch  synchronized
this  throw  throws  transient  true  try  typeof
var  void  volatile
while  with

```

#### 3. Js Data Types

JavaScript has several data types that are used to represent different kinds of values. These data types can be broadly categorized into two main groups: primitive data types and object data types.

#### Primitive Data Types:

#### 1. Number:

```js
let age = 25; // Represents numeric values.
```

#### 2. String:

```js
let name = "John"; // Represents sequences of characters (text).
```

#### 3. Boolean:

```js
let isStudent = true; // Represents a logical value, either true or false.
```

#### 4. Undefined:

```js
let variable; // Represents the absence of a defined value.
```

#### 5. Null:

```js
let data = null; // Represents the absence of any object value.
```

#### 6. Symbol:

```js
let id = Symbol("uniqueID"); // Represents a unique identifier.
```

#### Object Data Types:

#### 6. Object:

```js
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};
// Represents a collection of key-value pairs.
```

#### 7. Array:

```js
let numbers = [1, 2, 3, 4, 5];
// Represents an ordered list of values.
```

#### Special Data Types:

#### 7. Function:

```js
function add(a, b) {
  return a + b;
}

// A callable object that executes a block of code.
```

#### 8. Date:

```js
let currentDate = new Date();
// Represents a specific point in time.
```

#### Non-Primitive Data Types:

#### 9. BigInt:

```js
let bigNumber = BigInt(9007199254740991);
// Introduced in ECMAScript 2020.
// Represents arbitrary-precision integers
```

### 3. Operators

    1. Arithmetic Operators
    2. Assignment Operators
    3. Unary Operators
    4. Comparison Operators
    5. Logical Operators

### 4. Control flow Statements

    1. if
    2. if else
    3. if else if
    4. Ternary Operator (:?)
    5. switch case
    6. while
    7. do while
    8. for
    9. break
    10. continue
    11. Comma Operator

### 5. Functions

    1. Function declarations
    2. Function expressions
    3. Calling functions
    4. Function hoisting
    5. Function scope
    6. Recursion
    7. Nested functions and closures
    8. Multiply-nested functions
    9. Closures
    10. Using the arguments object
    11. Default parameters
    12. Rest parameters
    13. Arrow functions

### 6. Objects &

    1. Object Methods
    2. Constructor functions
    3. Prototype
    4. Constructor/Prototype pattern
    5. Prototypal inheritance
    6. What is this in JavaScript
    7. Object properties
    8. for…in loop
    9. Object Destructuring

### 7. Classes

### 8. Advanced Functions

    1. Function type
    2. call()
    3. apply()
    4. bind()
    5. Closure
    6. Immediately Invoked Function Expression (IIFE)
    7. Returning multiple values
    8. Arrow functions
    9. Rest parameter
    10. Callback functions
    11. Scope
    12. Hosting
    13. Execution Context
    14. Closures
    15. Prototype
    16. Recursion
    17. Primitive vs Reference Data Types
    18. Currying
    19. Intersection Observer
    20. Memoization
    21. Event Propagation
    22. Debounce
    23. Asynchronous JavaScript - Callbacks, Promises and async-await

### 9. Promises & Async/Await

### 10. Modules

### 11. Error handling

### 12. JavaScript Runtime

### 13. JavaScript Basic Problem Solving

1. find array largest number
2. find an array smallest number
3. sum of array all items
4. find tha grater than number of three input parameter
5. find the less than number of three input parameter.
6. Remove duplicate item from an array
7. find even numbers from an array.
8. Find odd numbers from an array.
9. Find an array of obejct chepest price product result.
   10.find even/odd number in an array using function
   11.While loop to display 7 to 19 all numbers.
10. Conversion - feet to inche + inche to feet
11. Conversion - celcius to Farhnheight + farhnheight to celcius
12. Conversion - Centimeter to Meter + Meter to Centimeter
13. PageReguirments - 3 book parameter and per book page 100, 200, 300 - output set parameter number of quantity book then output the page count by books.
14. Find the largest string of array using function and loop.
15. will stop the loop if the array has any negative number and return all the positive numbers before the negative numbers.
    17.2. will continue the loop if the array has any negative number and return all the positive numbers before the negative numbers.
16. Find Factorial of a number using for loop:
17. Find Factorial of a number using a while loop:
18. Calculate Factorial in a Recursive function:
19. Create a Fibonacci Series using a for loop
20. Search the target products name in array of objects
21. javascript sorting using an array

### Reference Problem Solving Resources: [Basic Problems Javascript](https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php)

#### Resources:

1. https://www.fullstack.cafe/blog/javascript-code-interview-questions
2. https://www.youtube.com/watch?v=th5CWnBEfKc&list=PLp50dWW_m40UwtiT-sWJ2ktGcLaNXNG9F
3. https://medium.com/swlh/problem-solving-in-javascript-1a455e3bf4eb
4. https://www.w3resource.com/javascript-exercises/

### 14. JavaScript Most asked interview Questions and answer

#### 1. জাভাস্ক্রিপ্ট সিংগেল থ্রেটেড না মাল্টিথ্রেটেড?

JavaScript is single-threaded. This means it executes one operation at a time in a single sequence. The reason for this is to maintain simplicity and avoid potential issues related to concurrency, such as race conditions and deadlocks.

#### 2. জাভাস্ক্রিপ্ট এর সাথে ব্যাকেন্ডে কেন নোড ইউস করব, অন্যগুলা কেন নয়?

নোড.জেএস (Node.js) একটি সার্ভার সাইড জাভাস্ক্রিপ্ট রানটাইম, যা জাভাস্ক্রিপ্ট কোডকে সার্ভার সাইডে চালাতে সাহায্য করে। জাভাস্ক্রিপ্ট প্রায়ই ওয়েব ব্রাউজারে ক্লায়েন্ট সাইডে ব্যবহার হয়, কিন্তু নোড.জেএস এর মাধ্যমে এটি সার্ভার সাইডে ব্যবহারও হয়।

#### নোড.জেএস কেন ব্যবহার করা হয়

- সিঙ্গল থ্রেডে

- আসয়্ক্রনাস প্রোগ্রামিং: এটি ক্লায়েন্ট এবং সার্ভার সাইড উভয়েই এসিঙ্ক্রোনাস #### 3. প্রোগ্রামিং সহজ করে তুলতে সাহায্য করে, এটি I/O অপারেশনের সময়ে ব্লক হওয়ার দরকার নেই।

- একক ভাষা

- প্যাকেজ ম্যানেজমেন্ট

#### 3. Difference between cluster and child process model?

The cluster model involves multiple computers working together, often connected over a network, to achieve a common goal. Clusters can be used for various purposes, including parallel processing, load balancing, and fault tolerance.

On the other hand, the child process model involves the creation of independent processes within a single computing system. The two concepts are used in different scenarios and address different aspects of parallelism and distributed computing.

#### 4. Call, bind, apply সম্পর্কে বলো?

call, bind, এবং apply JavaScript-এ তিনটি মেথড, যা ফাংশন ম্যানিপুলেশনে ব্যবহৃত হয়। এই মেথডগুলি ফাংশনগুলির কনটেক্স্ট এবং এরগুলির প্যারামিটারগুলি কন্ট্রোল করতে সাহায্য করে।

Call and apply same jokn kono function k instant call korar dorker hoy tkn call and apply use hoy. Bind korle data future er jonno store kore rakha hoy instant call hoy na. Call e data comma deye lekha hoy , bind e array er modhe lekha hoy

#### 5. This বলতে কি বুজি, কাজ কি এটার?

সাধারণভাবে, this এর মাধ্যমে একটি ফাংশন কোথাও কোন অবজেক্টের কনটেক্স্টে কাজ করতে পারে। এটি প্রোগ্রাম রানটাইমে নির্ধারণ করা হয় এবং ফাংশনটি যেখানে কল হয়েছে সেখানের কনটেক্স্টের উপর নির্ভর করে।

#### 6. Callback and return এর পার্থক্য কি, দুইটা কাজ এক না আলাদা।

"return" ফাংশন থেকে মান রিটার্ন করতে ব্যবহৃত হয় এবং একবার কল হলে ফাংশনের কাজ শেষ হয়ে যায়, আর "callback" হলো একটি ফাংশন বা অপারেশন, যা অন্য কোডের একটি অংশে কল হতে পারে এবং তার সম্পন্ন হওয়া প্রতীক্ষা করতে পারে।

#### 7. Higher order Function কী

যে ফাংশনে অন্য কোন ফাংশনকে আর্গুমেন্ট হিসাবে পাস করা হয় বা কোন ফাংশন অন্য কোন ফাংশনকে রিটার্ন করে তাকে হাইয়ার অর্ডার ফাংশন বলা হয়।

হাইয়ার অর্ডার ফাংশন হলো একটি প্রোগ্রামিং প্যারাডাইম, যেখানে একটি ফাংশনের মধ্যে অন্য একটি ফাংশন পাঠানো হয়। এটি ফাংশন পাঠানোর সময়ে তার প্রথম আর্গুমেন্ট হিসেবে অন্য একটি ফাংশন নেয় এবং সেটির ফলাফল হিসেবে একটি অবজেক্ট বা ফাংশন প্রদান করে।

#### 8. Event loop and Event queue different কি?

#### 9. What is Data Type in javaScript?

Data types in JavaScript define the data type that a variable can store. JavaScript includes primitive and non-primitive data types. The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol. The non-primitive data type includes the object

#### 10. Undefine and Define variable কি?

Undefined Variable:
An undefined variable is a variable that has been declared but not assigned a value.

Defined Variable:
A defined variable is a variable that has been declared and assigned a value.

#### 11. Default parameters কি কেন ব্যাবহার করা হয়?

The default parameter is a way to set default values for function parameters a value is no passed in (ie. it is undefined).

#### 12. “==” এবং “===” মধ্যে পার্থক্য আছে কিনা

== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.

=== is used for comparing two variables, but this operator also checks datatype and compares two values.

#### 13. Javascript scope, Block scope and global scope, Lexical scope এর পার্থক্য?

It refers to where a variable can be accessed in a program. In some cases a variable can be accessed from anywhere (global scope), while others have more restricted context ( function scope or block scope).

Ekta variable ba function kthy kthy visible setai bujay.

##### Global Scope:

If a variable or function is not defined within a block or function, we can say that variable or function belongs to global scope, and it can be accessed from anywhere in a program.

##### Local Scope:

Variables are defined within a block or a function, and they can only be accessed where they were defined. Here there are two types of local scope, Block Scope and Function Scope.

##### Function Scope:

variables defined inside the function and are accessible within the entire function.
the type “var” always has function scope.

##### Block Scope:

variables are defined within curly braces “{}” , those variables will be accessed inside the block where they were defined.
types “let” and “const” will always have block scope

##### Lexical Scope:

Is the ability for a function scope to access variables placed in a parent scope. In other words, a child function is lexically bound to its parent function.

#### 14. Var let const মধ্যে সম্পর্ক এবং পার্থক্য কি?

##### Var:

The scope of a var variable is functional scope.
It can be updated and re-declared into the scope.
It can be declared without initialization.
Hoisting is allowed
Var variable are reassign value

##### Let:

The scope of a let variable is block scope.
It can be updated but cannot be re-declared into the scope.
It can be declared without initialization.
Hoisting is not allowed
Let variable are not reassign value

##### Const:

The scope of a const variable is block scope.
It cannot be updated or re-declared into the scope.
It cannot be declared without initialization.
Hoisting is not allowed
Const variable are not reassign value

#### 15. Is Javascript Synchronous or asynchronous? How does it work?

JavaScript is synchronous, blocking, and single-threaded. This means that the JavaScript engine executes our program sequentially, one line at a time from top to bottom in the exact order of the statements.

Javascript is Synchronous, It is a synchronous, single-threaded language. Because it has a single thread that’s why it can only execute one command at a time and the other commands need to wait for executing before the running command executes. And the term synchronous means one at a time. So after these conversions, we get to know that javascript only executes one command or a single block of code at a time that means it is blocking.

But What if I say Javascript has asynchronous behaviour also. Yes, I am not totally wrong because we can manipulate the behaviour of javascript by using asynchronous operations like promises, callbacks etc.

#### 16. Ref. Type and preemptive type diff.

They are the primitive and reference data types.

In a JavaScript engine, primitive and reference data types are stored in different types of memory. Primitive data types are stored in the stack memory and the reference data types are stored in the heap memory.

##### Primitive data types:

1. String, Number, Boolean, Null, Undefined, Symbol, and BigInt are primitive data types.
2. Primitive data types have fixed sizes. So, the runtime can allocate a fixed amount of memory and store them in the stack.

##### Reference data types:

1. Objects, arrays, dates, etc. are reference data types in JavaScript.
2. Unlike primitive data types, reference data types don't have fixed sizes. So, the runtime can't allocate a fixed memory and store them in the heap.

#### 17. Es6 advance topic বলো, কোনগুলা ব্যাবহার করছো?

ES6 comes with significant changes to the JavaScript language. It brought several new features like, let and const keyword, rest and spread operators, template literals, classes, modules and many other enhancements to make JavaScript programming easier and more fun.

- let and const Keywords
- Arrow Functions
- Multi-line Strings
- Default Parameters
- Template Literals
- Destructuring Assignment
- Enhanced Object Literals
- Promises
- Classes
- Modules

#### 18. Prototype chain বলতে কি বুজো

#### 19. Pseudocode Method chaining নিয়ে কাজ করা হয় না।

#### 20. How many arguments does call apply bind take

#### 21. Event bubbling in js

#### 22. Call by value vs call by reference

#### 23. Js hosting, How many hosting in js

#### 24. Function and recursive function কাকে বলে

#### 25. How Spread operator work

#### 26. Closure, How closure work

#### 27. Inheritance of javascript

#### 28. একটা ফাংশনকে কখন রিটার্ন করতে হয়?

#### 29. Have any idea of Object orientate?

#### 30. After writing a js code how it will run in the browser step by step procedure

#### 31. How to work push and pop method.

#### 32. array vs link list সম্পর্কে ধারনা আছে কিনা? দুটার মধ্য সম্পর্ক বা পার্থক্য কি?

#### 33. class vs object মধ্যে সম্পর্ক কি?

#### 34. object oriented programming vs functional programming, principles of object-oriented programming

#### 35. Why JavaScript faster even single thread

#### 36. Explain Method chaining.

### 15. Best Practices

Link: [https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#error-handling]

### 16. JavaScript Projects

Project Ideas 40 project- Js, React, Typescript: [https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-a-restaurant-menu-page]

### 17. Some useful links JavaScript

1. https://github.com/sudheerj/javascript-interview-questions
2. https://javascript.plainenglish.io/top-10-javascript-interview-question-a1bf5dae41f5
3. https://www.interviewbit.com/javascript-interview-questions/

### 18. React Interview questions and answer

1. https://www.turing.com/interview-questions/react-js
2. https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions

### Dom Interview Questions

1. Dom Learning source:[https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/]

2. Chatgpt Dom Events:

Certainly! The Document Object Model (DOM) provides various methods to select and manipulate elements in an HTML document. Here are some examples of document selectors in JavaScript:

1. **getElementById:**

   - Selects an element by its unique ID attribute.

   ```javascript
   var myElement = document.getElementById("myDiv");
   ```

````

2. **getElementsByClassName:**

   - Selects elements by their class name.

   ```javascript
   var elementsByClass = document.getElementsByClassName("myClass");
   ```

3. **getElementsByTagName:**

   - Selects elements by their tag name.

   ```javascript
   var elementsByTag = document.getElementsByTagName("p");
   ```

4. **getElementsByName:**

   - Selects elements by their name attribute.

   ```javascript
   var elementsByName = document.getElementsByName("myName");
   ```

5. **querySelector:**

   - Selects the first element that matches a specified CSS selector.

   ```javascript
   var myElement = document.querySelector("#myDiv");
   ```

6. **querySelectorAll:**

   - Selects all elements that match a specified CSS selector.

   ```javascript
   var allParagraphs = document.querySelectorAll("p");
   ```

7. **parentNode:**

   - Accesses the parent node of an element.

   ```javascript
   var parentElement = myElement.parentNode;
   ```

8. **childNodes:**

   - Accesses a collection of child nodes of an element.

   ```javascript
   var childNodes = myElement.childNodes;
   ```

9. **firstChild and lastChild:**

   - Accesses the first and last child nodes of an element.

   ```javascript
   var firstChild = myElement.firstChild;
   var lastChild = myElement.lastChild;
   ```

10. **nextSibling and previousSibling:**

    - Accesses the next and previous sibling nodes of an element.

    ```javascript
    var nextSibling = myElement.nextSibling;
    var previousSibling = myElement.previousSibling;
    ```

These are just a few examples of document selectors and methods available in the DOM. Selectors help you target specific elements, and methods allow you to manipulate them or navigate through the document structure.
````

## 33 JavaScript Concepts Every Developer Should Know

### 1. Call Stack:

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
- If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.

একটি কল স্ট্যাক হল একটি দোভাষীর (যেমন একটি ওয়েব ব্রাউজারে জাভাস্ক্রিপ্ট দোভাষীর) একটি পদ্ধতি যা একটি স্ক্রিপ্টে তার স্থান ট্র্যাক রাখে যা একাধিক ফাংশনকে কল করে — বর্তমানে কোন ফাংশন চালানো হচ্ছে এবং সেই ফাংশনের মধ্যে থেকে কোন ফাংশনগুলিকে কল করা হয় ইত্যাদি .

The call stack is a data structure in JavaScript that stores information about the active functions in a program. It follows the Last In, First Out (LIFO) principle, meaning that the last function called is the first one to be removed. The call stack is crucial for managing the flow of execution in a program, keeping track of function calls, and managing their scope.

Example:

```js
function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here
```

Reference:

1. [https://developer.mozilla.org/en-US/docs/Glossary/Call_stack]
2. What Is The Execution Context? What Is The Call Stack? [https://medium.com/@valentinog/javascript-what-is-the-execution-context-what-is-the-call-stack-bd23c78f10d1]

## 2. Primitive data types

Every Variable has a data type that tells what kind of data is being stored in a variable. There are two types of data types in JavaScript.

- Primitive data types
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - Symbol
  - BigInt
- Non-primitive data types
  - Object
  - Array

Reference:

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values]
2. [https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/]

## 3. Value Types and Reference Types

Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.

`My Note:` javascript e 2 type er variable thke primitive and non-primitive. Primitive type a variable e value assign kore sei value er upor depend kore kono operation hoy but non-primitive a value variable er sthe assign hoy na ei khane assign hoy value er reference. Jemon object and array te er reference er upor depend kore operation hoy.

Reference: [https://gist.github.com/branneman/7fb06d8a74d7e6d4cbcf75c50fec599c]

## 4. Implicit, Explicit, Nominal, Structuring and Duck Typing

Type coercion means that when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type.

`My-Note`: Implicit holo jkn default vabe type neye ney. R Explicit holo jkn amra nejera kono kisur type deye dei

Reference: [https://hackernoon.com/javascript-coercion-explained-545c895213d3]

## 5. == vs === vs typeof

#### Triple Equals

When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same.

```js
77 === "77";
// false (Number v. String)

"cat" === "dog";
// false (Both are Strings, but have different values)
false === 0;
// false (Different type and different value)
```

#### Double equals

When using double equals in JavaScript we are testing for loose equality. Double equals also performs type coercion.

```js
77 == "77";
// true

false == 0;
// true
0 == "";
// true
"" == false;
// true
```

Reference:

1. [https://medium.com/@louis.shi/what-is-the-difference-between-vs-in-javascript-e38203f91591]
2. [https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a]

## 6. Function Scope, Block Scope and Lexical Scope

#### Function scope:

It means they are only available inside the function they’re created in, or if not created inside a function, they are ‘globally scoped.

```javascript
function setWidth(){
    var width = 100;
    console.log(width);
}
width;
// Returns:
Uncaught ReferenceError: width is not defined
```

#### Block Scope:

A block is a set of opening and closing curly brackets. Variables declared with let and const have block scope.
Block scope is created by curly braces {} in statements like if, for, while, etc.

```javasctipt
if (true) {
  let blockVar = 'I am a block-scoped variable';
  console.log(blockVar);
}

// console.log(blockVar); // This would result in an error

```

#### Lexical Scope (Static Scope):

Lexical scope means that the scope of a variable is determined at the time of the code's writing (at compile time), based on its location within the code.
It is also known as static scope.

```js
function outerFunction() {
  var outerVar = "I am an outer variable";

  function innerFunction() {
    var innerVar = "I am an inner variable";
    console.log(outerVar); // Can access outerVar
  }

  innerFunction();
  // console.log(innerVar); // This would result in an error
}

outerFunction();
```

Reference: [https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99]

## 7. Expression vs Statement

#### Expression:

Expressions are Javascript code snippets that result in a single value. Expressions can be as long as you want them to be, but they would always result in a single value.

```js
2 + (2 * 3) / 2(Math.random() * (100 - 20)) + 20;

functionCall();

window.history ? useHistory() : noHistoryFallback();

1 + 1, 2 + 2, 3 + 3;

declaredVariable;

true && functionCall();

true && declaredVariable;
```

#### STATEMENTS:

Statements are the headache of functional programming. Basically, statements perform actions, they do things.

In javascript, statements can never be used where a value is expected. So they cannot be used as function arguments, right-hand side of assignments, operators operand, return values…

These are all javascript statements:

- if
- if-else
- while
- do-while
- for
- switch
- for-in
- with (deprecated)
- debugger
- variable declaration

```js
foo(if () {return 2}) //js engine mind = blown
```

## 8. IIFE, Modules and Namespaces

#### IIFE:

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

IIFE stands for "Immediately Invoked Function Expression." It is a design pattern in JavaScript where a function is defined and executed immediately after its creation. The primary purpose of an IIFE is to create a new scope for the enclosed code, preventing variable declarations from polluting the global scope.

```js
(function () {
  // Your code here
})();
```

```js
// Global scope
var globalVar = "I am global";

(function () {
  // New function scope
  var localVar = "I am local";
  console.log(globalVar); // Access global variable
  console.log(localVar); // Access local variable
})();

// Attempting to access localVar outside the IIFE would result in an error
// console.log(localVar); // This would result in an error
```

#### Benefits of IIFE:

Encapsulation: Variables declared inside the IIFE are not accessible from outside, avoiding potential naming conflicts in the global scope.

Isolation: The IIFE creates a new scope, preventing pollution of the global scope with temporary or helper variables.

IIFE is often used to create modules, manage variable scope, and avoid unintended interactions with other scripts in a larger codebase. It's less common in modern JavaScript development due to the introduction of block-scoped variables with let and const in ES6. However, it's still a useful pattern in certain situations.

### Modularity

The term Modularity refers to the degree to which a system's components may be separated and recombined, it is also division of a software package into logical units. The advantage of a modular system is that one can reason the parts independently

## 9. Message Queue and Event Loop

The event loop is the secret behind JavaScript’s asynchronous programming.
An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.
The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it is single-threaded.

Reference:
[https://www.educative.io/answers/what-is-an-event-loop-in-javascript]
[https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4]
Video: [https://www.youtube.com/watch?v=8zKuNo4ay8E]

Callback Queue (Event Queue):
The Callback Queue is a mechanism used by the JavaScript runtime to handle asynchronous tasks. It is a FIFO data structure that holds callback functions waiting to be executed.

The Event Loop monitors the Call Stack and the Callback Queue, ensuring that callback functions are executed once the Call Stack is empty.

Reference: [https://itnext.io/javascript-runtime-js-engine-event-loop-call-stack-execution-contexts-heap-and-queues-4826d064ad76]

## 10. setTimeout, setInterval and requestAnimationFrame

`setTimeout`: allows us to run a function once after the interval of time.

The setTimeout function is used to execute a function or code snippet after a specified delay (in milliseconds). It takes two arguments: the function to be executed and the delay in milliseconds.

example:

```js
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

```js
function sayHi() {
  alert("Hello");
}

setTimeout(sayHi, 1000);
```

With arguments:

```js
function sayHi(phrase, who) {
  alert(phrase + ", " + who);
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

// wrong!
setTimeout(sayHi(), 1000);
```

With Recommended:

```js
setTimeout(() => alert("Hello"), 1000);
```

```js
function delayedFunction() {
  console.log("This will be executed after 2000 milliseconds.");
}

setTimeout(delayedFunction, 2000);
```

Clear interval:

```js
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier
clearTimeout(timerId);
```

`setInterval`: allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

The setInterval function is used to repeatedly execute a function or code snippet at a specified interval. It also takes two arguments: the function to be executed and the interval in milliseconds.

Example:

```js
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

```js
let i = 1;
setInterval(function () {
  func(i++);
}, 100);
```

```js
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
```

```js
function repeatedFunction() {
  console.log("This will be executed every 1000 milliseconds.");
}

setInterval(repeatedFunction, 1000);
```

`requestAnimationFrame`:
requestAnimationFrame is often used for smoother animations and is specifically designed for running animations in the browser. It takes a callback function as its argument, and the browser automatically schedules the callback before the next repaint.

Example:

```js
function animate() {
  // Perform animation logic here
  console.log("Animating...");

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
requestAnimationFrame(animate);
```

## 11. JavaScript Engines

It is a program that converts Javascript code into lower level or machine code that microprocessors can understand.

জাভাস্ক্রিপ্ট ল্যাংগুয়েজটি আসলে কম্পিউটারের কাছে বোধগম্য নয়। এই ল্যাংগুয়েজ দিয়ে কাজ করার জন্য আমাদের দরকার এমন একটি প্রোগ্রাম যেটা জাভাস্ক্রিপ্টকে কম্পিউটারের জন্য বোধগম্য ভাষায় রূপান্তর করতে পারে। জাভাস্ক্রিপ্ট ইঞ্জিন বলতে আমরা আসলে এই প্রোগ্রামটিকেই বোঝাচ্ছি।

জাভাস্ক্রিপ্ট ইঞ্জিনগুলোর নাম নিচে দেয়া হলোঃ
গুগল ক্রোম – V8 ইঞ্জিন.
মজিলা ফায়ারফক্স – স্পাইডার মাঙ্কি.
সাফারি – জাভাস্ক্রিপ্ট কোর.
নোড জেএস – V8 ইঞ্জিন.
মাইক্রোসফট এজ – চাকরা.

![Javascript Engine](/images/js-engine.jpg)

এই ইঞ্জিনগুলোর মধ্যে V8 কে বর্তমানে সবচেয়ে জনপ্রিয় এবং দক্ষ হিসেবে ধরা হয়। আমাদের এই লেখায় সবগুলো ইঞ্জিন নিয়ে আলোচনা করা সম্ভব নয়। তাই আমরা এখানে চেষ্টা করবো শুধুমাত্র V8 ইঞ্জিন নিয়ে কথা বলতে। এই ইঞ্জিনটার কর্মপদ্ধতি বুঝতে পারলে আশা করছি বাকি ইঞ্জিনগুলো বোঝা খুব বেশি কঠিন হবে না আপনাদের জন্য। V8 ইঞ্জিন কিভাবে কাজ করে এটা বোঝার জন্য আগে কিছু বিষয়ে ধারনা নেয়া দরকার। ১) পার্সার (Parser): পার্সারের কাজ হলো আমাদের জাভাস্ক্রিপ্ট কোডকে টোকেনে ভাগ করা। এখন প্রশ্ন আসতে পারে যে এই টোকেনে ভাগ করার কি প্রয়োজন? টোকেনাইজেশন এর কাজ শেষে এই টোকেনগুলো থেকেই এবস্ট্রাক্ট সিনট্যাক্স ট্রি (Abstract Syntax Tree) তৈরি হবে। ২) এবস্ট্রাক্ট সিনট্যাক্স ট্রি (Abstract Syntax Tree): AST বা Abstract Syntax Tree হলো আমাদের জাভাস্ক্রিপ্ট প্রোগ্রামের একটি ট্রি-এর মত কাঠামো যেটা টোকেন লিস্ট থেকে তৈরি হয়। একটি ইন্টারপ্রেটারকে AST দিয়ে দিলে পরবর্তীতে সেটি থেকে বাইটকোড পাওয়া যায়। ৩) ইন্টারপ্রেটারঃ জাভাস্ক্রিপ্ট হলো একটি ইন্টারপ্রেটার ল্যাঙ্গুয়েজ। AST (Abstract Syntax Tree) কে বাইট কোডে রূপান্তর করাই মূলত ইন্টারপ্রেটারের কাজ। ইন্টারপ্রেটার থেকে পাওয়া বাইট কোডকে আরো অপটিমাইজ করার জন্য কম্পাইলার ব্যবহার করা হয়। ৪) প্রোফাইলারঃ আমাদের কোডে সবসময় এমন কিছু অংশ থাকে যেটা বিভিন্ন যায়গায় বারবার ব্যবহৃত হয়। এগুলোকে ‘হট কোড’ (Hot Code) বলা হয়। প্রোফাইলারের কাজ হলো এই হট কোড কে খুঁজে বের করা।এই কোডগুলো যেহেতু অনেক বেশি সংখ্যক বার এক্সিকিউট হচ্ছে, কোডের এই অংশগুলো কতটা অপটিমাইজড সেটার উপর সম্পূর্ন প্রোগ্রামটির পারফরম্যান্স নির্ভর করছে। ৫) কম্পাইলারঃ আমরা আগেই বলেছি যে জাভাস্ক্রিপ্ট একটি ইন্টারপ্রেটার ল্যাঙ্গুয়েজ। কিন্তু তাহলে এখানে কম্পাইলার এর কথা আসছে কেন? জাভাস্ক্রিপ্ট ইঞ্জিনে কম্পাইলারের ভূমিকা আসলে অপটিমাইজেশনে। ইন্টারপ্রেটার হতে পাওয়া বাইটকোড ব্যবহার করেও প্রোগ্রাম ব্রাউজারে রান করানো যায় কিন্তু আরো ভালো হতো যদি আমরা আমাদের কোডের ‘হট’ পার্টগুলোকে অপটিমাইজড কোডে রূপান্তর করে ফেলতে পারতাম। এই কাজটি করার জন্যই কম্পাইলারের প্রয়োজন। V8 ইঞ্জিনের ক্ষেত্রে এই কম্পাইলারটির নাম ‘টার্বোফ্যান’। এখন আমরা V8 ইঞ্জিন কিভাবে কাজ করে এটি বোঝার জন্য প্রয়োজনীয় ধারনাগুলো পেয়ে গেছি। এবারে এই জিনিসগুলো একসাথে কিভাবে কাজ করছে সেটি দেখি। নিচের ছবিটা দেখে আপনারা একটা ভালো ধারনা পেতে পারেন।

একটি গুরুত্বপূর্ন বিষয় যেটি আমাদের জানা প্রয়োজন সেটি হলো আগের জাভাস্ক্রিপ্ট ইঞ্জিনগুলোর ভেতরে শুধুমাত্র ইন্টারপ্রেটার ব্যবহৃত হতো। ইন্টারপ্রেটার লাইন ধরে ধরে কোড এক্সিকিউট করে। ডিবাগিং এর জন্য এটা ভালো হলেও পুরো প্রোগ্রামটি রান করতে অনেক সময় লেগে যেত। এই প্রক্রিয়াটি আরো দ্রুত করার জন্য জাস্ট ইন টাইম কম্পাইলার বা JIT (Just In Time) এর ধারনাটি জাভাস্ক্রিপ্ট ইঞ্জিনে নিয়ে আসা হয়েছে। JIT আসলে ইন্টারপ্রেটার এবং কম্পাইলার এই দুইটির-ই ভালো দিকগুলো একসাথে নিয়ে কাজ করে। ইন্টারপ্রেটার আগের মতোই স্বাভাবিকভাবে তার কাজ করে যায়। শুধুমাত্র কম অপটিমাইজড এবং বেশি বার এক্সিকিউট হওয়া কোডগুলো নিয়ে কম্পাইলার আরো বেশি অপটিমাইজড কোডে রুপান্তর করে। একারনেই এখনকার V8 ইঞ্জিন এত বেশি দক্ষ এবং জনপ্রিয়। একটি জাভাস্ক্রিপ্ট প্রোগ্রাম প্রথমে পার্সারের কাছে গেলে সেখান থেকে পার্সার টোকেনাইজেশন শেষে টোকেনগুলো দিয়ে একেকটি নোড তৈরি করে। এই নোডগুলো থেকেই এরপর AST তৈরি হয় যেটিকে আমাদের ইন্টারপ্রেটার বাইটকোডে রূপান্তর করে। V8 ইঞ্জিনের ইন্টারপ্রেটারটি ইগনিশন (Ignition) নামে পরিচিত। ইন্টারপ্রেটারের ভেতরে কিন্তু বাইটকোড এক্সিকিউট করার জন্য মেমরি হিসেবে রেজিস্টার ব্যবহার করা হয়। ইগনিশন এখানে প্রত্যেকটা অবজেক্ট এর জন্য একেকটা ‘শেইপ’ তৈরি করে যেটা আসলে অবজেক্ট-এর একটা গঠন ছাড়া আর কিছুই না। এই শেইপ তৈরি করে রাখার কারনে পরবর্তীতে ‘ইনলাইন ক্যাশিং’ ও অন্যান্য অপটিমাইজেশন করতে V8 ইঞ্জিনের সুবিধা হয়। উপরের এই কাজগুলো হতে হতে আমাদের ‘প্রোফাইলার’ কিন্তু বসে নেই। সে তার কাজ করে যাচ্ছে এবং কোডের ‘হট’ পার্টগুলোকে বের করে ‘টার্বোফ্যান’ কম্পাইলারের কাছে পাঠিয়ে দিচ্ছে। ‘টার্বোফ্যান’ কম্পাইলারটি হলো V8 ইঞ্জিনের ক্ষেত্রে আমাদের JIT কম্পাইলার। যার দায়িত্ব আমাদের ‘হট কোড’ এর অপটিমাইজেশন। প্রোফাইলার থেকে বাইটকোড পেয়ে টার্বোফ্যান সেগুলোকে মেশিন কোডে রুপান্তর করে যাতে কোডের ওই অংশটা অনেক দ্রুত রান করে। এই মেশিন কোড কিন্তু আর্কিটেকচার অনুযায়ী ভিন্ন ভিন্ন হয় যাতে করে ওই নির্দিষ্ট মেশিনে সেটা অবশ্যই ভালো পারফর্ম করে।

Reference: [JavaScript Engine by VivaSoft](https://academy.vivasoftltd.com/javascript-bootcamp/fundamentals/js-engine/)

## 12. Bitwise Operators, Type Arrays and Array Buffers

Bitwise operators perform an operation on the bitwise (0,1) representation of their arguments, rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number eight has a binary representation of 1000. Bitwise operators do their operations on such binary representation (for example 1000) but they return standard JavaScript numerical values.

`&` - (Bitwise AND): Returns a 1 in each bit position where both operands have a 1. <br />
`|` - (Bitwise OR): Returns a 1 in each bit position where at least one operand has a 1.<br />
`^` - (Bitwise XOR): Returns a 1 in each bit position where only one operand has a 1. <br />
`~` - (Bitwise NOT): Inverts the bits of its operand. <br />
`<<` - (Left Shift): Shifts the bits of the first operand to the left by the number of positions specified by the second operand. <br />
`>>` - (Right Shift): Shifts the bits of the first operand to the right by the number of positions specified by the second operand. <br />
`>>>` - (Unsigned Right Shift): Shifts the bits to the right, filling with zeros.<br />

```js
let a = 5; // Binary: 0101
let b = 3; // Binary: 0011

console.log(a & b); // Result: 1 (Binary: 0001)
console.log(a | b); // Result: 7 (Binary: 0111)
console.log(a ^ b); // Result: 6 (Binary: 0110)
console.log(~a); // Result: -6 (Binary: 11111111111111111111111111111010 in 32-bit signed integer)
console.log(a << 1); // Result: 10 (Binary: 1010)
console.log(a >> 1); // Result: 2 (Binary: 0010)
console.log(a >>> 1); // Result: 2 (Binary: 0010)
```

##### Array Buffers:

An ArrayBuffer is a generic fixed-length container for binary data.
It cannot be directly manipulated, but you can create views (Typed Arrays) on it to interact with the data.

```js
// Create an ArrayBuffer with a size of 16 bytes
let buffer = new ArrayBuffer(16);

// Create a Typed Array (Int32Array) view on the buffer
let intArray = new Int32Array(buffer);

// Manipulate the data through the Typed Array view
intArray[0] = 42;
console.log(intArray[0]); // Result: 42
```

##### Typed Arrays:

Typed Arrays provide a way to view and manipulate binary data with specific numeric types (e.g., Int8, Uint8, Float32, etc.).
They are used to represent structured data.

```js
// Create a Typed Array (Uint8Array) with a length of 4
let uint8Array = new Uint8Array([1, 2, 3, 4]);

// Access and manipulate data in the Typed Array
console.log(uint8Array[0]); // Result: 1
console.log(uint8Array.length); // Result: 4

// Modify data in the Typed Array
uint8Array[1] = 5;
console.log(uint8Array); // Result: Uint8Array [ 1, 5, 3, 4 ]
```

Typed Arrays are especially useful when dealing with binary data such as image pixels, networking, or WebGL applications. They offer efficient ways to work with raw memory.

## 13. DOM and Layout Trees

The Document Object Model, usually referred to as the DOM, is an essential part of making websites interactive. It is an interface that allows a programming language to manipulate the content, structure, and style of a website. JavaScript is the client-side scripting language that connects to the DOM in an internet browser.

The DOM (Document Object Model) is an interface that represents how your HTML and XML documents are read by the browser. It allows a language (JavaScript) to manipulate, structure, and style your website. After the browser reads your HTML document, it creates a representational tree called the Document Object Model and defines how that tree can be accessed.

- Dom Tree
  ![Dom Tree](/images/dom.jpg)

- The representational tree that the browser create after it read your document.
  ![Dom Tree](/images/dom-tree.jpg)

Reference: [Dom Tree](https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d)

## 14. Factories and Classes

JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended. This is known as prototypical inheritance and differs from class inheritance.

ক্লাস হলো এমন একটি টেম্পলেট যা ভ্যারিয়েবল এবং ফাংশনের সমন্বয়ে তৈরি। শুনতে তো অবজেক্ট এর মতোই হয়ে গেল তাইনা? আরেকটু ভালোভাবে ভাবে বলতে গেলে, ক্লাস হলো একধরণের blueprint যা থেকে সুনির্দিষ্ট অবজেক্ট তৈরি করা হয়। ক্লাসের মধ্যেও Attributes এবং Function থাকে যাদেরকে Method বলা হয়

##### Example:

```js
class Car {
constructor(color, brand, model){
this.color = color;
this.brand = brand;
this.model = model;
}
repaint(){
this.color = “Red”;
}
}

const myCar = new Car(“Black”, “Doge”, “Charger”);
const helensCar = new Car(“Blue”, “Nissan”, “Ultima”);
```

আমরা একটা Car নামে ক্লাস তৈরি করেছি। তার মধ্যে properties হিসেবে color, brand এবং model দিয়েছি। এবং তার মধ্যে repaint নামে একটি মেথড দিলাম যা গাড়ির রং পরিবর্তন করে। তারপর এই ক্লাস থেকে আমরা দুইটি ‘Car’ টাইপের অবজেক্ট myCar এবং helensCar তৈরি করেছি।এখন আমরা চাইলে এই ক্লাস থেকে হাজারটা অবজেক্টও তৈরি করতে পারব এবং প্রত্যেকটা অবজেক্টেরই ইউনিক প্রোপার্টি থাকবে।

ক্লাসের কোড তো দেখলাম। এখন আমাদের মনে প্রশ্ন জাগতে পারে যে Car ক্লাসের মধ্যে constructor জিনিসটা আবার কি? constructor একটি স্পেশাল ধরণের ফাংশন যার সাহায্যে অবজেক্ট কে ইনিশিয়ালাইজ করা যায়। আরেকটু সহজ করে বলতে গেলে, এটি এমন একধরনের ফাংশন যা নিজেকে নিজেই কল করে। আমরা যখন ‘new’ keyword ব্যবহার করে কোনো ক্লাসের অবজেক্ট তৈরি করি, তখনই সাথে সাথেই constructor ফাংশনটি কল হয় এবং অবজেক্টের মধ্যে কোন ভ্যালু সেট করে দিলে constructor এর মধ্যে সেগুলো এসাইন হয়ে যায়। ‘new’ keyword এর ব্যবহার নিয়ে আমরা পরবর্তীতে বিস্তারিত আলোচনা করব। constructor এর কাজই হচ্ছে অবজেক্ট তৈরি করা এবং অবজেক্টের কোনো প্রোপার্টি থাকলে তাদের ভ্যালু সেট করা। এটা অবজেক্ট তৈরি করার খুবই সহজ পদ্ধতি কারণ আমাদের কষ্ট করে অবজেক্ট রিটার্ন করতে হয়না। জাভাস্ক্রিপ্টে কোনো ক্লাস তৈরি করার সময় অটোম্যাটিক constructor তৈরি হয়ে যায়, কোনো প্যারামিটার ছাড়াই।

##### Factory Pattern:

```js
class Car {
constructor(options) {
this.wheels = options.wheels;
this.doors = options.doors;
this.color = options.color;
}
}
class Truck {
constructor(options) {
this.wheels = options.wheels;
this.doors = options.doors;
this.color = options.color;
}
}
class Factory {
constructor(type) {
this.type = type;
}
 create = (options) => {
 let vehicleType = this.type;
 let vehicle;
if (vehicleType === “car”) {
 vehicle = new Car(options);
} else if (vehicleType === “truck”) {
 vehicle = new Truck(options);
}
 vehicle.vehicleType = vehicleType;
 vehicle.startEngine = ()=> console.log(`Reving ${vehicleType} engine`);
 vehicle.driveVehicle = ()=> console.log(`Driving ${vehicleType}…`);
 vehicle.stopEngine = ()=> console.log(`Stop ${vehicleType} engine`);
return vehicle;
}
};
const TruckFactory = new Factory(“truck”);
const truck = TruckFactory.create({
 wheels: 12,
 doors: 2,
 color: “yellow”
})
console.log(truck)
truck.startEngine();
```

Reference:

1. [Class and Factories by VivaSoft](https://academy.vivasoftltd.com/javascript-bootcamp/introduction-to-oop/what-is-class/)
2. [Class and Prototype](https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677)

3. [Prototype and Inheritance](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)

## 15. this, call, apply and bind

##### this:

```js
function myFunc() {
  console.log(this);
}

myFunc();
```

“this” এর ভ্যালু কি হবে সেটা নির্ভর করে কোথায় এবং কিভাবে কল হচ্ছে তার উপর ভিত্তি করে। উপরের কোডে myFunc() কে কল করতেছে window অবজেক্ট। কারণ ব্রাউজারে সব কিছু বাই ডিফল্ট window অবজেক্টের আন্ডারে রান হয়। তার মানে হচ্ছে, যে যার মাধ্যমে কল হবে “this” তাকে দেখাবে আউটপুট হিসাবে।

যেহেতু myFunc() কে window কল করতেছে তাই myFunc() এর ভিতরে থাকা “this” – window এর সব ভ্যালুকে আউটপুট হিসাবে দেখাচ্ছে।

##### Call() মেথডঃ:

Call() মেথড ফাংশনকে ইমিডিয়েটলি ইনভোক করে . Call() মেথড প্রথম প্যারামিটার হিসাবে “this” এর ভ্যালু সেট করে। তারপর যে প্যারামিটারগুলো থাকবে সেগুলো হবে ফাংশনের প্যারামিটার। Call() মেথড ইনডিভিজুয়াল প্যারামিটার নেয়।

##### Example 1:

```js
let person = {
  name: "Saroar Hossain Shahan",
};

let getInfo = function (id) {
  return `Welcome ${this.name}, Your roll number is ${id}.`;
};

console.log(getInfo.call(person, 99)); // Welcome Saroar Hossain Shahan, Your roll number is 99.
```

উপরের কোডে আমরা দেখতে পাচ্ছি যে, getInfo() এর সাথে Call() মেথড ব্যবহার করা হয়েছে এবং Call() মেথড তার প্রথম প্যারামিটার হিসাবে “this” ভ্যালু সেট করে, যেটি হচ্ছে person অবজেক্ট। তারপরের প্যারামিটারগুলো হচ্ছে যে ফাংশনের সাথে কল হচ্ছে তার আর্গুমেন্টস। চলুন আরেকটি উদাহরণ দেখি যেটি আপনাদের রিয়েল লাইফ প্রজেক্টে কাজে দিতে পারে।

##### Example 2:

```js
function Person(fName, lName, age) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
}

function Student(fName, lName, age, roll, section) {
  Person.call(this, fName, lName, age, roll, section);
  this._roll = roll;
  this._section = section;
}

let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");

console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: 'B'
 * */
```

##### Apply() মেথডঃ

Apply() মেথড এবং Call() মেথডের মাঝে বিশেষ কোন পার্থক্য নেই। দুটাই ফাংশনকে ইমিডিয়েটলি ইনভোক করে এবং Apply() মেথড আর্গুমেন্টস হিসাবে একটা Array নেয়।

##### Example 1:

```js
let person = {
  name: "Saroar Hossain Shahan",
};

let getInfo = function (id) {
  return `Welcome ${this.name}, Your roll number is ${id}.`;
};

console.log(getInfo.call(person, [99])); // Welcome Saroar Hossain Shahan, Your roll number is 99.
```

শুধু মাত্র কোড ছাড়া আউটপুটে কোন পার্থক্য নেই।

##### Example 2:

```js
function Person(fName, lName, age) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
}

function Student(fName, lName, age, roll, section) {
  Person.apply(this, [fName, lName, age, roll, section]);
  this._roll = roll;
  this._section = section;
}

let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");

console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: 'B'
 * */
```

এখন ধরেন আপনার Student ক্লসে কয়টা প্যারামিটার হতে পারে তা আপনার জানা নেই। ঐ সমস্যার সমাধান কিভাবে করবেন? খুব সহজ একটা সমাধান আছে। আমরা জানি যে, জাভাস্ক্রিপ্টে arguments নামে একটা বিল্ড-ইন অবজেক্ট আছে। এইটা অবজেক্ট হলেও আসলে কাজ করে Array এর মত করে এবং Apply মেথড যেহেতু Array নিয়ে কাজ করে, তাহলে তো আমরা arguments অবজেক্ট দিয়েই এই কাজটি করে ফেলতে পারি খুব সহজে।

##### Example 3:

```js
function Person(fName, lName, age) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
}

function Student(fName, lName, age, roll, section) {
  Person.apply(this, arguments);
  this._roll = roll;
  this._section = section;
}

let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");

console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: 'B'
 * */
```

##### Bind() মেথডঃ

Bind() মেথড হচ্ছে Call() এবং Apply() মেথডের বিপরীত। কারণ Call () এবং Apply() মেথড ইমিডিয়েটলি ইনভোক করে ফেলে। কিন্তু Bind() মেথড সেটা না করে সে একটা ফাংশন ডেফিনেশন রিটার্ন করে। যা আপনি পরবর্তীতে যেকোন সময়, যেকোন জায়গায় আপনার ইচ্ছা মত ব্যবহার করতে পারবেন।

##### Example:

```js
let person = {
  name: "Saroar Hossain Shahan",
};

let getInfo = function (id) {
  return `Welcome ${this.name}, Your roll number is ${id}.`;
};

let boundInfo = getInfo.bind(person);

console.log(boundInfo);
console.log(boundInfo(99));

/**
 * output:
 * f (id) {
 * return `Welcome ${this.name}, Your roll number is ${id}.`;
 * }
 * */
```

আউটপুটে দেখেন boundInfo ফাংশন একটি ফাংশন ডেফিনেশন রিটার্ন করছে। এখন যদি আমরা ফাংশনটিকে তার আর্গুমেন্টস দিয়ে ইনভোক করি তাহলে আমাদের প্রত্যাশিত আউটপুট আমরা দেখতে পারবো।

## 16. new, Constructor, instanceof and Instances

## 17. Prototype Inheritance and Prototype Chain

## 18. Object.create and Object.assign

## 19. map, reduce, filter

## 20. Pure Functions, Side Effects, State Mutation and Event Propagation

## 21. Closures:

![Clouser](/images/clouser.png)

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Closure কোন ফাংশন না আবার ফাংশনও কোন closure না। Closure হচ্ছে ফাংশনের এমন একটা বৈশিষ্ট্য যে বৈশিষ্ট্যের কারণে ফাংশন এক্সিকিউশন শেষ হয়ে যাবার পরেও তার lexical scope এ অবস্থিত সকল variable কে মনে রাখতে পারে। উদাহরণস্বরূপ বলা যেতে পারে যে ডম থেকে কিছু অ্যাক্সেস করার জন্যে আমরা যে ইভেন্ট ফাইয়ার করি সেটাও একটা closure।

Closure ফাংশন এর মধ্যে যখন অন্য ফাংশন রিটার্ন করা হয় তখন সেটাকে ক্লোজার ফাংশন বলে। এর parent function এর মধ্যে Js Engine e store kore rakhe and child seta use korte pare.

#### Example:

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

let addTen = add(10);
let addSeven = addTen(7);

console.log(addSeven); // 17
```

১। যখন add ফাংশনটি কল হয় এটি আরেকটি ফাংশনকে return করে।
২। ঐ ফাংশনটির এক্সিকিউশন শেষ হয়ে যায় এবং মনে রাখে ঐ সময় তার প্যারামিটার a এর ভ্যালু কি ছিল।
৩। যখন addTen ভেরিয়েবলে add ফাংশনকে এসাইন করা হয়। এটি সব সময় মনে রাখবে a এর ভ্যালু কি ছিল যখন এটিকে ইনিশিয়ালি কল করা হয়েছিল।
৪। উপরের addTen ভেরিয়েবল একটি ফাংশনকে বোঝায় যেটি সব সময় ভ্যালু ১০ যোগ করবে যা পাঠানো হয়েছিল।
৫। তার মানে হল যখন addTen কে কল করা হয় ৭ ভ্যালু দিয়ে, এটি ১০ এর সাথে ৭ যোগ করবে এবং ১৭ রিটার্ন করবে।

কিভাবে আমরা লুপের ভিতরে ক্লোজার চালাতে পারি। এটি ইন্টার্ভিউ বোর্ডের একটা কমন প্রশ্ন। নিচের কোডটা দেখেন এবং একটু মনে মনে চিন্তা করেন এটার আউটপুট কত হবে।

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// কাঙ্ক্ষিত আউটপুটঃ -
// 1
// 2
// 3
// 4
// 5

// কিন্তু আসছে অনাকাঙ্ক্ষিত আউটপুটঃ-
// 6
// 6
// 6
// 6
// 6
```

আসলে এই আউটপুট আসার অনেক কারণ আছে। লুপের মাঝে ভ্যারিয়েবল i হচ্ছে একটি গ্লোবাল ভ্যারিয়েবল। যখন setTimeout রান হয় তার আগেই লুপ শেষ হয়ে যায় এবং তাই i ভ্যালু 6 হয়ে যায়। সেজন্যে প্রতি এক সেকন্ড পর পর পাঁচবার 6 দেখাচ্ছে। যদি বিশ্বাস না হয় তাহলে কোডটা রান করার পর আপনার গ্লোবাল window অবজেক্টটা একবার দেখেন সেখানে i নামে একটা ভ্যারিয়েবল দেখতে পারবেন এবং তার ভ্যালু 6 হয়ে আছে।

এই সমস্যার সমাধান আমরা IIFE বা Immediately Invoked Function Expression ব্যবহার করে করতে পারি। নিচে উদাহরণ দেওয়া হলঃ-

```js
for (var i = 1; i <= 5; i++) {
  (function (val) {
    setTimeout(() => console.log(val), 1000);
  })(i);
}
```

Reference: [Clouser by vivasoft](https://academy.vivasoftltd.com/javascript-bootcamp/fundamentals/js-closures/)

## 22. High Order Functions

যে ফাংশনে অন্য কোন ফাংশনকে আর্গুমেন্ট হিসাবে পাস করা হয় বা কোন ফাংশন অন্য কোন ফাংশনকে রিটার্ন করে তাকে হাইয়ার অর্ডার ফাংশন বলা হয়।

হাইয়ার অর্ডার ফাংশন হলো একটি প্রোগ্রামিং প্যারাডাইম, যেখানে একটি ফাংশনের মধ্যে অন্য একটি ফাংশন পাঠানো হয়। এটি ফাংশন পাঠানোর সময়ে তার প্রথম আর্গুমেন্ট হিসেবে অন্য একটি ফাংশন নেয় এবং সেটির ফলাফল হিসেবে একটি অবজেক্ট বা ফাংশন প্রদান করে।

#### Example:

```js
function modifyArray(arr, callback) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }

  return output;
}

function addBy2(elem) {
  return elem + 2;
}

function multifyBy2(elem) {
  return elem * 2;
}

const additionArr = modifyArray([1, 2, 3, 4, 5, 6], addBy2);
const multiArr = modifyArray([1, 2, 3, 4, 5, 6], multifyBy2);

console.log(additionArr); // [3, 4, 5, 6, 7, 8]
console.log(multiArr); // [2, 4, 6, 8, 10, 12]
```

modifyArray ফাংশনটিতে আর্গুমেন্ট হিসাবে যে ফাংশনটিকে পাস করতেছি ওই ফাংশনটিই হচ্ছে একটি কলব্যাক ফাংশন এবং modifyArray ফাংশনটি হচ্ছে একটি হাইয়ার অর্ডার ফাংশন।

#### আমি কখন হাইয়ার অর্ডার ফাংশন ব্যবহার করব?

#### 1. ফাংশন গুলি প্রথম-শ্রেণী নাগাদ অবজেক্ট হিসেবে ব্যবহৃত হয়: এটি হয়তো অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিং এ বা ফাংশনাল প্রোগ্রামিং এ ব্যবহার করা হয়।

#### 2. কোড রিডেবিলিটি এবং কমপ্লেক্সিটি নিয়ন্ত্রণের জন্য: হাইয়ার অর্ডার ফাংশন ব্যবহার করলে কোড সহজে বুঝা যায় এবং এর সাথে কমপ্লেক্সিটি নিয়ন্ত্রণ থাকে।

#### 3. কমপ্লেক্স এক্সপ্রেশন বা লজিক প্রোগ্রামিং এ ব্যবহার: হাইয়ার অর্ডার ফাংশন ব্যবহার করে একটি ফাংশন অন্য ফাংশনের মধ্যে পাঠানো যায়, যা কমপ্লেক্স লজিক এবং এক্সপ্রেশন বা ইভেন্ট হ্যান্ডলিং এ উপকারী হতে পারে।

#### কলব্যাক ফাংশন কি?

সহজ কথায়, কলব্যাক ফাংশন হচ্ছে এমন একটি ফাংশন যেটি অন্য একটি ফাংশনে আর্গুমেন্ট হিসাবে পাস করা ফাংশন, যেটি কোন কাজ সম্পন্ন করার জন্যে আউটার ফাংশনের ভিতরে ইনভোক হয়।

#### কলব্যাক কি হাইয়ার অর্ডার ফাংশন?

কলব্যাক (Callback) হলো একটি হাইয়ার অর্ডার ফাংশনের একটি ধরণ। এটি হাইয়ার অর্ডার হওয়ার কারণে, এটি একটি ফাংশন নেয় এবং তার কাজ শেষ হলে অন্য একটি ফাংশনকে কল করতে হয়।

এটি মূলত একটি ফাংশন যা আরও একটি ফাংশনকে প্রদান করে, এবং সেই ফাংশনটি কোনো ইভেন্ট বা কাজ শেষ হলে কল হয়। এটি মোটামুটি কলব্যাক ফাংশনের উদাহরণ হিসেবে ব্যবহার হয়, যেমন:

```js
function first_function(data, callback):
     // কিছু কাজ করুন
    result = perform_some_task(data)

    // কলব্যাক ফাংশনকে কল করুন
    callback(result)

function callback_function(result):
    //কলব্যাক ফাংশনে আসা ডেটা দিয়ে কিছু কাজ করুন
    print("Callback function called with result:", result)

// প্রথম ফাংশনকে কল করতে হয়, এবং কলব্যাক ফাংশন পাঠাতে হয়
first_function(data, callback_function)

```

## 23. Recursion

## 24. Collections and Generators

## 25. Promises

প্রমিসের কাজ হচ্ছে এ ধরনের অ্যাসিনক্রোনাস অপারেশনকে হ্যান্ডল করা। এখন আমরা রিমোট একটা সার্ভারের উপর অপারেশন চালাচ্ছি, কিন্তু ডাটা না আসা পর্যন্ত কিন্তু আমরা বলতে পারি না সে অপারেশন সফল হবে না বিফলে যাবে। আর মূলত এইসব হ্যান্ডল করার জন্যেই প্রমিস কাজ করে।

এখন প্রমিস অবজেক্ট আবার ৩ ধরণের হতে পারে, যেমনঃ

- Pending
- Fulfilled
- Rejected

Pending অবস্থায় ফলাফল undefined, Fulfilled অবস্থায় ফলাফল একটি ভ্যালু, এবং Rejected অবস্থায় ফলাফল একটি error অবজেক্ট।

Example:

```js
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  const success = true;

  if (success) {
    resolve("Operation completed successfully!"); // Resolve with a value
  } else {
    reject("Operation failed!"); // Reject with a reason
  }
});

myPromise
  .then((result) => {
    console.log("Fulfilled:", result);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });
```

So, "return from Promise" usually refers to the value that is passed to the resolve or reject function, and you access it using then for fulfilled Promises or catch for rejected Promises.

Reference:

1. [All about Promises](https://www.freecodecamp.org/news/guide-to-javascript-promises/#:~:text=In%20JavaScript%2C%20a%20Promise%20is,of%20promises%20in%20real%20life.)

2. [Promise Bangla Expalin vivasoft](https://academy.vivasoftltd.com/javascript-bootcamp/es6-to-es10/promises-and-async-await/)

3. [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## 26. async/await

`async/await` eliminates the chaining that is common with the promises syntax, and ends up making asynchronous code look a lot more synchronous.

Promises are an excellent way to avoid the previously discussed ‘Callback Pyramid of Doom’, but async/await takes asynchronous code further. With async/await, code is easier to follow and maintain. It came about as a way to improve code readability for asynchronous operations. It is the modern way of using promises.

async এবং await প্রমিস লিখতে খুবই সহজ করে। async একটি ফাংশন দিয়ে প্রমিস রিটার্ন করে এবং await একটি ফাংশনকে প্রমিসের জন্য অপেক্ষা করায়। একটা প্রমিস হ্যান্ডেল করার পর এটার ভিতরে কলব্যাক ফাংশন কল করতে হয়। আবার সেই কলব্যাক ফাংশনের ভিতরে প্রমিস থেকে আসা ডাটাগুলো অ্যাক্সেস করতে হয়। এভাবে একটার পর একটার ভিতরে গিয়ে গিয়ে এভাবে আমাদের অপারেশনগুলো চালাতে হয় শুধুমাত্র জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস আচরণের কারণে।

জাভস্ক্রিপ্ট-এ মূলত প্রমিস হ্যান্ডেলের জন্যই async আর await এর পরিচয় করিয়ে দেওয়া হয়েছে। যেখানেই আপনি এরকম অ্যাসিনক্রোনাস কোডকে সিনক্রোনাস আচরণ করাতে চান সেখানেই এগুলো ব্যবহার করতে পারবেন। তবে এখানে কিছু নিয়ম কানুন আছে। আপনাকে async এই কীওয়ার্ডটা ব্যবহার করতে হবে ফাংশনের সাথে। আপনি যে কোডগুলোকে সিনক্রোনাস আচরণ করাতে চাচ্ছেন সেগুলো সবগুলো একটা ফাংশনের ভিতরে ঢুকিয়ে সেই ফাংশনের নামের আগে জাস্ট এভাবে async কীওয়ার্ডটা লাগিয়ে দিবেনঃ

```js
const promiseHandle = async () => {
  const data = await myPromise;
  console.log(data);
};
```

এখানে দেখুন লক্ষ্য করে আমি ঠিক এর পরের লাইনেই আমাদের প্রমিস থেকে আসা ডাটা প্রিন্ট করে দিয়েছি। হ্যা এখানেই async আর await এর ম্যাজিক। এটা আমাদের অ্যাসিনক্রোনাস কোডকে সিনক্রোনাস আচরণ করতে সাহায্য করে যাতে আমাদের আর কলব্যাকে হেলে পড়তে না হয়। আমরা একদম লাইন বাই লাইন ইন্সট্রাকশন দিয়েই ডাটা উদ্ধার করতে পারবো।

এখন যদি প্রমিস রিজেক্টেড হয় তাহলে? হ্যা তাহলে আমরা try catch ব্লক দিয়েই আমরা আমাদের এই এরর হ্যান্ডল করতে পারবো।

## 27. Data Structures

A data structure is defined as a particular way of storing and organizing data in our devices to use the data efficiently and effectively. The main idea behind using data structures is to minimize the time and space complexities. An efficient data structure takes minimum memory space and requires minimum time to execute the data

##### 9 COMMON DATA STRUCTURES IN JAVASCRIPT

- Stack
- Queue
- Linked List
- Set
- Map
- Hash Table
- Tree
- Trie
- Graph

Reference:

1. [Learn Data Structures with Javascript | DSA using JavaScript Tutorial](https://www.geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial/)

2. [Data Structures in JavaScript – With Code Examples](https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/)

## 28. Expensive Operation and Big O Notation

## 29. Algorithms

The algorithm is defined as a process or set of well-defined instructions that are typically used to solve a particular set of problems or perform a specific type of calculation. To explain it in simpler terms, it is a set of operations performed step-by-step to execute a task.

Reference:

1. [CodeVolution video ](https://www.youtube.com/playlist?list=PLC3y8-rFHvwiRYB4-HHKHblh3_bQNJTMa)

1. [Learn Algorithms with Javascript | DSA using JavaScript Tutorial ](https://www.geeksforgeeks.org/learn-algorithms-with-javascript-tutorial/)

## 30. Inheritance, Polymorphism and Code Reuse

## 31. Design Patterns

## 32. Partial Applications, Currying, Compose and Pipe

## 33. Clean Code

### 33 concepts Reference:

1. [https://github.com/leonardomso/33-js-concepts?tab=readme-ov-file#11-javascript-engines]
2. [https://dev.to/eludadev/33-javascript-concepts-every-beginner-should-know-with-tutorials-4kao#6-function-scope-block-scope-and-lexical-scope]

## 30 JavaScript Coding Interview Questions for Beginner, Mid-Level and Expert Developers

#### 4. Create a JavaScript function that calculates the tip for a given bill amount and tip percentage. Bill amount and tip percentage will be input parameters while output will be calculated tip value.

```js
function calculateTip(billAmount, tipPercentage) {
  // Check if the inputs are valid numbers
  if (typeof billAmount !== "number " && typeof tipPercentage !== "number") {
    return `Please make sure your input is number`;
  }
  // Ensure tipPercentage is a valid percentage (between 0 and 100)
  if (tipPercentage < 0 || tipPercentage > 100) {
    return `Please the tipPercentage between 0 and 100`;
  }

  // Calculate the tip
  const tip = (billAmount * tipPercentage) / 100;
  return tip;
}

// Example usage:
const billAmount = 50;
const tipPercentage = 10;
const tipValue = calculateTip(billAmount, tipPercentage);
console.log(
  `For a bill of $${billAmount} and a ${tipPercentage}% tip, the tip amount is $${tipValue}.`
);
```

#### 5. What will be the output of below code snippet:

```js
function greetHello(name) {
  return `Hello, ${name}!`;
}
console.log(greetHello("Brian"));
```

#### 6. Will the below code return any error? If yes, identify the error.

```js
function fetchData(callback) {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
}
fetchData(function (error, data) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Data:", data);
  }
});

//  I added .json() after response to ensure that the response is processed as JSON. This ensures that the subsequent .then(data => callback(null, data)) receives the parsed JSON data. Without .json(), you might encounter unexpected results or errors when trying to access the data.
```

#### 7. Implement a simple shopping cart system with features to add items, remove items and calculate the total price. Use objects to represent items, including properties for the item name, price and quantity. Implement features to add items to the cart, remove items and calculate the total cost.

```js
// Define the Item constructor
function Item(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Define the ShoppingCart constructor
function shoppingCart() {
  this.items = [];

  // Method to add an item to the cart
  this.addItem = function (item) {
    this.items.push(item);
  };

  // Method to remove an item from the cart
  this.removeItem = function (ItemName) {
    this.items = this.items.filter((item) => item.name !== ItemName);
  };

  // Method to calculate the total cost of items in the cart
  this.calculateTotal = function () {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
}

// Example cart
const cart = new shoppingCart();

// Adding the items
const item1 = new Item("Laptop", 20000, 2);
const item2 = new Item("Mobile", 12000, 3);
cart.addItem(item1);
cart.addItem(item2);

// console.log(cart.items);

// Removing an item from the cart
cart.removeItem("Laptop");
console.log(cart.items);

// Calculating the total cost
const totalCost = cart.calculateTotal();
console.log("Total cost of items in the cart:", totalCost);
```

#### 8. Analyze the below code snippet and advise what will be the output:

```js
const person = {
  firstName: "Helen",
  lastName: "Ryan",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName()); // Helen Ryan
```

#### 9. Find the issue with the below code snippet:

```js
const timeOutId = setTimeout(function () {
  console.log("This will be executed after 3 seconds");
}, 3000);
console.log(clearTimeout(timeOutId));
```

#### 10. What issue exists in the below code:

```js
const testArray = [1, 2, 3];
testArray = [4, 5, 6]; //
console.log(testArray);
```

Note: there is no change because use the `const` keyword. and Array does not change the way
the way is : `testArray[0] = 4`, `testArray[1] = 5`, `testArray[3] = 6`

#### 11. Problem 11 - What is the issue in the below code:

Problem:

```js
const fetchData = async () => {
  const response = await fetch("https://api.samplewebsite.com/data");
  const data = await response.json();
  console.log(data);
};
fetchData();
```

Solution:

Error Handling: It's a good practice to include error handling to catch any potential issues with the API request.

```js
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP status error ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();
```

#### 13: Problem 13: Develop a simple URL shortener service using JavaScript. Implement a function that takes a long URL as an input parameter and the output will be a shortened URL. Create a reverse function as well. The reverse function takes the shortened URL and returns the original long URL. You can use simple in-memory objects to store the mapping between long and short URLs.

Solution:

```js
class UrlShortener {
  constructor() {
    this.urlMapping = {};
    this.shortUrlPrefix = "https://short.url/";
  }

  // Function to shorten a long URL
  shortenUrl(longUrl) {
    const shortKey = this.generateShortKey();
    const shortUrl = this.shortUrlPrefix + shortKey;
    this.urlMapping[shortKey] = longUrl;
    return shortUrl;
  }

  // Function to reverse and get the original long URL
  getOriginalUrl(shortUrl) {
    const shortKey = shortUrl.replace(this.shortUrlPrefix, "");
    const longUrl = this.urlMapping[shortKey];
    return longUrl || "Original URL not found";
  }

  // Helper function to generate a unique short key
  generateShortKey() {
    // In a real-world scenario, you might want to use a more robust method to generate short keys
    return Math.random().toString(36).substring(2, 8);
  }
}

// Example Usage
const urlShortener = new UrlShortener();

// Shorten a URL
const longUrl = "https://www.example.com/very-long-url";
const shortUrl = urlShortener.shortenUrl(longUrl);
console.log("Shortened URL:", shortUrl);

// Reverse and get the original URL
const originalUrl = urlShortener.getOriginalUrl(shortUrl);
console.log("Original URL:", originalUrl);
```

#### 14. Implement an autocomplete feature for a search input field. Given an array of words, write a function that suggests words based on the current input. The output of the function will be an array of suggested words that start with the input characters, limiting the number of suggestions (e.g., a maximum of 7 suggestions).

#### Solution:

```js
function autocomplete(input, wordsArray, maxSuggestions = 7) {
  const inputLowerCase = input.toLowerCase();
  const suggestions = [];

  for (const word of wordsArray) {
    const wordLowerCase = word.toLowerCase();

    if (wordLowerCase.startsWith(inputLowerCase)) {
      suggestions.push(word);

      if (suggestions.length === maxSuggestions) {
        break;
      }
    }
  }

  return suggestions;
}

// Example Usage
const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "grape",
  "kiwi",
  "lemon",
  "orange",
  "peach",
  "pear",
];

const input = "ap";
const suggestions = autocomplete(input, words);

console.log("Suggestions for", input + ":", suggestions);
```

#### 15. What is the issue in the below code:

#### Problem:

```js
const obj = {
  name: "Conner",
  age: 27,
  greet: () => {
    console.log(`Hey, my name is ${this.name}`);
  },
};
obj.greet();
```

#### Solution:

```js
const obj = {
  name: "Conner",
  age: 27,
  greet: function () {
    console.log(`Hey, my name is ${this.name}`);
  },
};
obj.greet();
```

#### Note:

The issue in the provided code is related to the use of an arrow function for the greet method inside the object. Arrow functions do not have their own this context; instead, they inherit the this value from the surrounding scope (lexical scoping).

In this case, within the arrow function of greet, this refers to the this value of the surrounding context where the arrow function is defined. However, arrow functions are not suitable for methods that rely on the object's own properties, such as name in this case.

#### 16. What will be the output of below code snippet:

```js
const object1 = {
  prop1: "value1",
  prop2: {
    prop3: "value3",
  },
};
const newObj = { ...obj };
newObj.prop2.prop3 = "newValue3";
console.log(object1.prop2.prop3);
// output: newValue3
```

#### 17. Will the below code return any error? If yes, what will be the error?

```js
class Bird {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Crow extends Bird {
  speak() {
    super.speak();
    console.log(`${this.name} sings.`);
  }
}
const crow = new Crow("Tim");
crow.speak();
```

#### Note:

The provided code will not return an error. It's a valid use of classes and inheritance in JavaScript.

Here's what the code does:

It defines a Bird class with a constructor that sets the name property and a speak method that logs a message to the console.

It defines a Crow class that extends the Bird class. The speak method of Crow uses super.speak() to call the speak method of the parent class (Bird) and then adds an additional log statement.

It creates an instance of the Crow class with the name "Tim" (const crow = new Crow("Tim");).

It calls the speak method on the crow instance (crow.speak();).

The output of the code will be:

- Tim makes a noise.
- Tim sings.

#### 18. Develop a function that throttles another function, allowing it to be called at most once every specified interval (e.g., 300ms). The throttling function will have two input parameters. One will be the function to be throttled and the second will be the interval in milliseconds. The throttled function should be called with the same arguments as the original function.

#### 19. What is wrong with the below code:

#### Problem:

```js
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((total, num) => total + num);
console.log(sum / arr.length);
```

#### Solution:

```js
const arr = [1, 2, 3, 4, 5];

if (arr.length > 0) {
  const sum = arr.reduce((total, num) => total + num);
  console.log(sum / arr.length);
} else {
  console.log("Cannot calculate average for an empty array.");
}
```

#### 20. Develop a function that throttles another function, allowing it to be called at most once every specified interval (e.g., 300ms). The throttling function will have two input parameters. One will be the function to be throttled and the second will be the interval in milliseconds. The throttled function should be called with the same arguments as the original function.

#### Solution:

```js
function findMeetingSlot(person1BusySlots, person2BusySlots, meetingDuration) {
  // Combine and sort busy slots from both persons
  const busySlots = [...person1BusySlots, ...person2BusySlots].sort(
    (a, b) => a[0] - b[0]
  );

  // Iterate through busy slots to find the first available time slot for the meeting
  for (let i = 1; i < busySlots.length; i++) {
    const startTime = busySlots[i - 1][1]; // End time of the previous busy slot
    const endTime = busySlots[i][0]; // Start time of the current busy slot

    const availableDuration = endTime - startTime;
    if (availableDuration >= meetingDuration) {
      return [startTime, startTime + meetingDuration];
    }
  }

  return null; // No available time slot found
}

// Example Usage
const person1BusySlots = [
  [9, 10],
  [12, 14],
  [16, 18],
];
const person2BusySlots = [
  [8, 11],
  [13, 15],
  [17, 19],
];
const meetingDuration = 2;

const meetingSlot = findMeetingSlot(
  person1BusySlots,
  person2BusySlots,
  meetingDuration
);

if (meetingSlot) {
  console.log(
    `Meeting can be scheduled from ${meetingSlot[0]} to ${meetingSlot[1]}`
  );
} else {
  console.log("No available time slot for the meeting.");
}
```

#### 21. Is there any security vulnerability in the below code? If yes, identify it:

```js
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
fetch("https://api.examplewebsite.com/login", {
  method: "POST",
  body: JSON.stringify({ username, password }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

#### 22. Identify the output of the below code.

```js
const testArray = [1, 2, 3, 4, 5];
const res = testArray.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr;
  }
  return acc;
}, 0);
console.log(res);
```

#### 23. What is the possible performance issue in the below code?

```js
const arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}
```

#### 24. Suggest the output of the below code:

```js
const arr = [1, 2, 3];
const object1 = { x: 1, y: 2, z: 3 };
console.log([...arr, ...object1]);
```

#### 25. Design a social media platform that contains features like sign up, creating a profile and posting status updates. Users should be able to follow other users and view their posts on a newsfeed.

#### 26. What is wrong with the below call to the API?

```js
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

#### 27. What will be the output of below code snippet?

```js
const promise1 = Promise.resolve(One);
const promise2 = Promise.resolve(Two);
Promise.all([promise1, promise2]).then(([result1, result2]) =>
  console.log(result1 + " " + result2)
);
```

#### 28. Design an online code editor where users can write, save and run JavaScript code. The editor should include features like syntax highlighting, auto-completion and error checking.

#### 29. The below code snippet uses closures to implement a counter. How will you optimize it to minimize memory usage:

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3
```

#### 30. Develop a fitness tracker application where users can enter their daily exercise routines and track their progress over time. The application should allow users to set goals, view their progress and receive reminders.

#### JavaScript Coding Interview Preparation: [https://codeinterview.io/blog/javascript-coding-interview-questions/]

#### React Interview Questions:

1. [https://dev.to/m_midas/44-react-frontend-interview-questions-2o63]
2. [https://www.ambitionbox.com/profiles/react-developer/interview-questions]
