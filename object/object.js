//  What are the possible ways to create objects in JavaScript

// There are various ways to create object

// 1. Object literal syntax

var object = {
  name: "Emon",
  age: 26,
};

// Object literal property values can be of any data type, including array, function, and nested object.

// 2. Object constructor

var object2 = new Object();
// The Object() is a built-in constructor function so "new" keyword is not required.
// var object2 = Object();

// 3. Object's create method
var object3 = Object.create(null); // This pattern is helpful to create new objects based on existing objects

// 4. Function constructor
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object4 = new Person("Sudheer");
console.log(object4);

// 5. Function constructor with prototype:
function Person2() {}
Person2.prototype.name = "Sudheer";
var object5 = new Person2();
console.log(object5);

// 6. ES6 Class syntax
class Person3 {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person3("Sudheer");

// 7. Singleton pattern
var object6 = new (function () {
  this.name = "emon";
})();
