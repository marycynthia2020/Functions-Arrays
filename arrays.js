// Write a program that returns the last item in an array
function getLastItem(array) {
  return array.at(-1);
}

function sortArray(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
}

// Write a function that takes in an array and returns the sorted array
function getSortedArray(array) {
  return array.sort(sortArray);
}

// Write a program that filter out all numbers greater than 50 from this array: [20, 60, 40, 80, 45, 70, 30]

const givenArray = [20, 60, 40, 80, 45, 70, 30];

function filterArray(array) {
  let output = array.filter((num) => num > 50);
  return output;
}

// Remove the 2nd and 3rd items from this array and replace them with "Mango" and "Soursop": ["Apple", "Banana", "Orange", "Guava"]
const fruits = ["Apple", "Banana", "Orange", "Guava"];
fruits.splice(1, 2, "Mango", "Soursop");

// Write a program that checks if there is any number greater than 50 in this array: [20, 30, 40, 60, 30, 80, 10]
const numbers = [9, 30, 40, 60, 30, 80, 10];

const largeNum = (num) => num > 50;

function checkNumbers(array) {
  return array.some(largeNum);
}

// Write a function that calculates the sum of all numbers in an array

function getSum(array) {
  let sum = array.reduce((prev, current) => prev + current, 0);
  return sum;
}

// Write a function that doubles each number in an array and returns a new array
function doublesNumbers(array) {
  const newArray = array.map((num) => num * 2);
  return newArray;
}

// Write a program that converts an array to a string with a specified separator

function toString(array) {
  return array.join(" | ");
}

// Write a program that checks if an array of countries consist of a specified country
const countries = ["Nigeria", "China", "Japan", "Ghana"];

function checkCountry(array, country) {
  return array.includes(country);
}

// Write a function that prints each item in an array

function getItem(array) {
  array.forEach((item) => console.log(item));
}

// Write a function that finds the first even number in an array
function checkEvenNum(array) {
  const evenNum = array.find((num) => num % 2 === 0);
  return evenNum;
}

// Create a program that converts celcius to fahrenheit and vice versa
function convertTemperature(num, unit) {
  if (unit.toUpperCase() == "F") {
    const celcius = ((num - 32) * 5) / 9;
    return `${num} Fahrenheit is equivalent to ${celcius} Celcius `;
  }

  if (unit.toUpperCase() == "C") {
    const fahrenheit = (num * 9) / 5 + 32;
    return `${num} Celcius is equivalent to ${fahrenheit} Fahrenheit`;
  }
}
console.log(convertTemperature(60, "C"));
