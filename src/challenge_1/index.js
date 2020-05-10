/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

// Write code here
const sum = (...values) => {
  const total = values.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(total);
};

sum(1, 3);
// 4

sum(10, 20, 5);
// 35

sum(2, 5, 80, 1, 10, 12);
// 110
