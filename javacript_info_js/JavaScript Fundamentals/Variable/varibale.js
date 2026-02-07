/* 
A variable
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.
*/

let message = 'Hello'

message='world'
console.log(message);

/* 
Variable naming
There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit.

*/

/* 
Constants
To declare a constant (unchanging) variable, use const instead of let:
*/
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!



/* 
Summary
We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.

*/

/* 
Task-1

Working with variables
importance: 2
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let name='jhon'
let admin = name;

alert(admin);



/* 
Giving the right name
importance: 3
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/

let ourPlanet;
let currentVisitors;