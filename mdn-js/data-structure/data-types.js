// The latest ECMAScript standard defines eight data types:

/* 

 - Seven data types that are primitives:

1. Boolean. true and false.
2. null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
3. undefined. A top-level property whose value is not defined.
4. Number. An integer or floating point number. For example: 42 or 3.14159.
5. BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
6. String. A sequence of characters that represent a text value. For example: "Howdy".
7. Symbol. A data type whose instances are unique and immutable.


 - and Object non primitives


*/

// Data type conversion

let answer = 34

answer = "This is the thirty four number"

// Note:  Because JavaScript is dynamically typed, this assignment does not cause an error message.

/* 
Numbers and the '+' operator
In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
*/
// With all other operators, JavaScript does not convert numeric values to strings. For example:

/* 
"37" - 7; // 30
"37" * 7; // 259
*/

/* 

Converting strings to numbers
In the case that a value representing a number is in memory as a string, there are methods for conversion.

parseInt()
parseFloat()

parseInt("101", 2); // 5

"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.

*/