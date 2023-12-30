function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`This ${year} is leap year`);
  } else {
    console.log(`This ${year} is not a leap year`);
  }
}

isLeapYear(2028);
