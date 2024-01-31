// In JavaScript, a statement is a complete and independent unit of code that performs a specific action. Unlike expressions, which produce a value, statements are executed for their side effects. JavaScript programs consist of a sequence of statements, and each statement typically performs a specific task or operation.

// Here are some common types of JavaScript statements:

// 1. **Variable Declarations:**

var x;
var y = 10;

// 2. **Assignment Statements:**

x = 5;
y = x * 2;

// 3. **Conditional Statements (if, else if, else):**

if (x > 0) {
  console.log("x is positive");
} else if (x === 0) {
  console.log("x is zero");
} else {
  console.log("x is negative");
}

// 4. **Loop Statements (for, while, do-while):**

for (var i = 0; i < 5; i++) {
  console.log(i);
}

while (x < 10) {
  console.log(x);
  x++;
}

// 5. **Function Declarations and Invocations:**

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");

// 6. **Switch Statement:**

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  // ... other cases ...
  default:
    console.log("Invalid day");
}

// 7. **Try...Catch Statements (for error handling):**

try {
  // code that may throw an exception
} catch (error) {
  // handle the exception
  console.error("An error occurred: " + error.message);
}

// These are just a few examples of JavaScript statements. Statements are executed sequentially, and they contribute to the overall flow and behavior of a JavaScript program. Understanding how to use statements effectively is crucial for writing structured and functional code.
