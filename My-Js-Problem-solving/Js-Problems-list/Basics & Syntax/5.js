// 5. Find the largest of three numbers
let a = 30;
let b = 14;
let c = 15;

if (a > b && a > c) {
  console.log(`A= ${a} is grater than B=${b} and C=${c}`);
} else if (b > a && b > c) {
  console.log(`B= ${b} is grater than A=${a} and C=${c}`);
} else {
  console.log(`C= ${c} is grater than A=${a} and B=${b}`);
}

// another
let largest = Math.max(...[a, b, c]);
console.log(largest);
