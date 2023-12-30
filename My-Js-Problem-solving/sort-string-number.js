const students = ["Mofiz", "Jubayer", "Nayeem", "Abir", "Bashir", "Mamun"];

console.log(students.sort());

const fruits = ["apple", "banana", "cherry", "date", "fig"];

// Sort the array in reverse alphabetical order (descending)
fruits.sort((a, b) => b.localeCompare(a));

console.log(fruits); // Output: ['fig', 'date', 'cherry', 'banana', 'apple']

// How to sorting numbers less than to greater than - 1,2,3,....10;

const numbers = [5, 7, 10, 2, 11, 3, 12, 8, 4, 6];

numbers.sort(function (a, b) {
  return b - a; // a - b [ascending] -- b - a [descending]
});

console.log(numbers);
