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
21. javascript sorting using an aray

#### Resources:

1. https://www.fullstack.cafe/blog/javascript-code-interview-questions
2. https://www.youtube.com/watch?v=th5CWnBEfKc&list=PLp50dWW_m40UwtiT-sWJ2ktGcLaNXNG9F
3. https://medium.com/swlh/problem-solving-in-javascript-1a455e3bf4eb
4. https://www.w3resource.com/javascript-exercises/

### 14. JavaScript Most asked interview Questions and answer

1. জাভাস্ক্রিপ্ট সিংগেল থ্রেটেড না মাল্টিথ্রেটেড?
2. জাভাস্ক্রিপ্ট এর সাথে ব্যাকেন্ডে কেন নোড ইউস করব, অন্যগুলা কেন নয়?
3. Difference between cluster and child process model
4. Call, bind, apply সম্পর্কে বলো
5. This বলতে কি বুজি, কাজ কি এটার
6. Callback and return এর পার্থক্য কি, দুইটা কাজ এক না আলাদা।
7. Higher order Function কী
8. Event loop and Event queue different কি?
9. What is Data Type in javaScript
10. Undefine and Define variable কি?
11. Default parameters কি কেন ব্যাবহার করা হয়
12. “==” এবং “===” মধ্যে পার্থক্য আছে কিনা
13. Javascript scope, Block scope and global scope, Lexical scope এর পার্থক্য
14. Var let const মধ্যে সম্পর্ক এবং পার্থক্য কি?
15. Is Javascript Synchronous or asynchronous? How does it work?
16. Ref. Type and preemptive type diff.
17. Es6 advance topic বলো, কোনগুলা ব্যাবহার করছো?
18. Prototype chain বলতে কি বুজো
19. Pseudocode Method chaining নিয়ে কাজ করা হয় না।
20. How many arguments does call apply bind take
21. Event bubbling in js
22. Call by value vs call by reference
23. Js hosting, How many hosting in js
24. Function and recursive function কাকে বলে
25. How Spread operator work
26. Closure, How closure work
27. Inheritance of javascript
28. একটা ফাংশনকে কখন রিটার্ন করতে হয়?
29. Have any idea of Object orientate?
30. After writing a js code how it will run in the browser step by step procedure
31. How to work push and pop method.
32. array vs link list সম্পর্কে ধারনা আছে কিনা? দুটার মধ্য সম্পর্ক বা পার্থক্য কি?
33. class vs object মধ্যে সম্পর্ক কি?
34. object oriented programming vs functional programming, principles of object-oriented programming
35. Why JavaScript faster even single thread
36. Explain Method chaining.

### 15. Best Practices

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

## 10. setTimeout, setInterval and requestAnimationFrame

## 11. JavaScript Engines

## 12. Bitwise Operators, Type Arrays and Array Buffers

## 13. DOM and Layout Trees

## 14. Factories and Classes

## 15. this, call, apply and bind

## 16. new, Constructor, instanceof and Instances

## 17. Prototype Inheritance and Prototype Chain

## 18. Object.create and Object.assign

## 19. map, reduce, filter

## 20. Pure Functions, Side Effects, State Mutation and Event Propagation

## 21. Closures

## 22. High Order Functions

## 23. Recursion

## 24. Collections and Generators

## 25. Promises

## 26. async/await

## 27. Data Structures

## 28. Expensive Operation and Big O Notation

## 29. Algorithms

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
