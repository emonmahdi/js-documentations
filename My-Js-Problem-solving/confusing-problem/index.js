console.log(0.1 + 0.2); // Outputs: 0.30000000000000004

console.log(1 + "6"); // Outputs: "16"
console.log("5" - 2); // Outputs: 3

if (false == 0) {
  console.log("This may be confusing!");
}

for (var i = 0; i < 3; i++) {
  //   setTimeout(() => console.log(i), 1000);
}

console.log("Start");
// setTimeout(() => console.log("Inside timeout"), 0);
console.log("End");

console.log(NaN === NaN); // Outputs: false
