// Q1)
const numbers = [1, 2, 3, 4, 5];
// Given the array numbers = [1, 2, 3, 4, 5],
// write code to create a new array where each
// number is multiplied by 2 using the map method.
// ============== Your answer here:
const multiplication = function (numbers) {
  return numbers.map((eachN) => eachN * 2);
};

console.log(multiplication(numbers));
// ==============

// Q2)
const names = ["Alice", "Bob", "Charlie"];
// Given the array names = ["Alice", "Bob", "Charlie"],
// write code to create a new array where each name is
// converted to uppercase using the map method.
// ============== Your answer here:
const capsNames = function (names) {
  return names.map(
    (listOfNames) => (listOfNames = listOfNames.toUpperCase(names))
  );
};
console.log(capsNames(names));
// ==============

// Q3)
const numbers2 = [1, 4, 9, 16, 25];
// Given the array numbers = [1, 4, 9, 16, 25],
// write code to create a new array where each
//  number is squared using the map method.
// ============== Your answer here:
const sqNumbers = function (numbers2) {
  return numbers2.map((everynumber) => everynumber ** 2);
};
console.log(sqNumbers(numbers2));
// ==============

// Q4)
const names2 = ["John", "Jane", "Tom"];
// Given the array names = ["John", "Jane", "Tom"],
// write code to create a new array where each name
// is appended with " Smith" using the map method.
// ============== Your answer here:
const appendSmith = function (names2) {
  return names2.map((eachN2) => (eachN2 = `${eachN2} Smith`));
};
console.log(appendSmith(names2));
// ==============

// Q5)
const numbers3 = [2, 4, 6, 8, 10];
// Given the array numbers = [2, 4, 6, 8, 10],
//  write code to create a new array where each
// number is divided by 2 using the map method.
// ============== Your answer here:
const divisionN = function (numbers3) {
  return numbers3.map((eachN3) => eachN3 / 2);
};
console.log(divisionN(numbers3));
// ==============

// Q6)
const fruits = ["apple", "banana", "orange"];
// Given the array fruits = ["apple", "banana", "orange"],
//  write code to create a new array where each fruit
//  name is capitalized using the map method. Ex, Apple ...
// ============== Your answer here:
const fruitsCaps = function (fruits) {
  return fruits.map((eachFruit) => eachFruit.toUpperCase(eachFruit));
};
console.log(fruitsCaps(fruits));
// ==============
