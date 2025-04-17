// var - Declares a variable, optionally initializing it to a value.

// let  - Declares a block-scoped, local variable, optionally initializing it to a value.

// const - Declares a block-scoped, read-only named constant.


// A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).


// some variable sample
var Number_hints;
var temp444
var $credit
var _id

// var is declare for local and global variable
// let and const are the block scope local variable

// Declaration and initialization
// In a statement like let x = 42, the let x part is called a declaration, and the = 42 part is called an initializer. The declaration allows the variable to be accessed later in code without throwing a ReferenceError, while the initializer assigns a value to the variable. In var and let declarations, the initializer is optional. If a variable is declared without an initializer, it is assigned the value undefined.

var x;
console.log(x);


// const declarations always need an initializer, because they forbid any kind of assignment after declaration, and implicitly initializing it with undefined is likely a programmer mistake.

// Variable Scopes

/* 
Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.

Block scope: The scope created with a pair of curly braces (a block).


When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.

*/

/* 

Variable hoisting
var-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet. You can see var declarations as being "lifted" to the top of its function or global scope. However, if you access a variable before it's declared, the value is always undefined, because only its declaration and default initialization (with undefined) is hoisted, but not its value assignment.

*/