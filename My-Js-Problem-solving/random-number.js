function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

const result = getRandomNumber(0, 10);
console.log(result);
