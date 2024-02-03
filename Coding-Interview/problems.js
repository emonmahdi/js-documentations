/* // Problem 1:
const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result); // [ 15, 20 ] */

/* 
Problem 2:  

let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
console.log(counter);
console.log(i);
*/

/* 
Problem 3
const object1 = {
  a: 10,
  b: 20,
  c: function () {
    console.log(this.a);
    console.log(this.a + this.b);
  },
};
const func = object1.c(); // object1.c(); // This correctly logs the sum of 10 and 20 (30) - Another object1.c.bind(object1);
console.log(func);
*/

/* 
Problem 4 - Create a JavaScript function that calculates the tip for a given bill amount and tip percentage. Bill amount and tip percentage will be input parameters while output will be calculated tip value.

# solution: 

function calculateTip(billAmount, tipPercentage) {
  if (typeof billAmount !== "number " && typeof tipPercentage !== "number") {
    return `Please make sure your input is number`;
  }
  if (tipPercentage < 0 || tipPercentage > 100) {
    return `Please the tipPercentage between 0 and 100`;
  }

  const tip = (billAmount * tipPercentage) / 100;
  return tip;
}

const billAmount = 50;
const tipPercentage = 10;
const tipValue = calculateTip(billAmount, tipPercentage);
console.log(
  `For a bill of $${billAmount} and a ${tipPercentage}% tip, the tip amount is $${tipValue}.`
);
*/

/* 
Problem 5 - What will be the output of below code snippet:
function greetHello(name) {
  return `Hello, ${name}!`;
}
console.log(greetHello("Brian"));
*/

/* problem 6 - Will the below code return any error? If yes, identify the error. 

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
 
*/

/* 
Problem 7: Implement a simple shopping cart system with features to add items, remove items and calculate the total price. Use objects to represent items, including properties for the item name, price and quantity. Implement features to add items to the cart, remove items and calculate the total cost.
*/

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

/* 
Problem 8: Analyze the below code snippet and advise what will be the output

const person = {
  firstName: "Helen",
  lastName: "Ryan",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName()); // Helen Ryan
*/

/* 
Problem 9 - 

const timeOutId = setTimeout(function () {
  console.log("This will be executed after 3 seconds");
}, 3000);
console.log(clearTimeout(timeOutId));
*/

//  timeoutId stores the ID of the timeout created by setTimeout(). Later, you can use clearTimeout(timeoutId) to cancel the timeout before it executes. If you run clearTimeout() without an argument, it won't have any effect, and the timeout will still execute after 3 seconds.

/* 
Problem 10: What issue exists in the below code:
*/

/* const testArray = [1, 2, 3];
console.log(testArray); // Output: [1, 2, 3]

// wrong code
testArray = [4, 5, 6]; //
console.log(testArray);

// If you want to modify the content of the array, you can do so:
testArray[0] = 4;
testArray[1] = 5;
testArray[2] = 6;

console.log(testArray); // Output: [4, 5, 6] */

/* 
Problem 11 - What is the issue in the below code:
 */
/* const fetchData = async () => {
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
 */

/* 
Problem - 12 -What will be the output of the below code:
*/

/* const promise1 = Promise.resolve("One");
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Two"), 1000)
);
const promise3 = Promise.reject("Three");
Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);
 */
/* Problem 13: Develop a simple URL shortener service using JavaScript. Implement a function that takes a long URL as an input parameter and the output will be a shortened URL. Create a reverse function as well. The reverse function takes the shortened URL and returns the original long URL. You can use simple in-memory objects to store the mapping between long and short URLs. */

// URL Shortener Service
/* class UrlShortener {
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
 */

/* 
Problem 14: 
*/

/* function autocomplete(input, wordsArray, maxSuggestions = 7) {
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

const input = "pe";
const suggestions = autocomplete(input, words);

console.log("Suggestions for", input + ":", suggestions); */

/* const arr = [1, 2, 3, 4, 5];

if (arr.length > 0) {
  const sum = arr.reduce((total, num) => total + num);
  // console.log("sum numbers: ", sum);
  console.log(sum / arr.length);
} else {
  console.log("Cannot calculate average for an empty array.");
}
 */

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
