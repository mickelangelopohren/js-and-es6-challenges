/* CHALLENGE 11 - Spread Operator

Use Spread Operator to construct arr variable.
*/


// var a, b, c, d, arr;

// a = [1, 2];
// b = [4, 5];
// c = [8, 9, 10];
// d = 11;

const a = [1, 2];
const b = [4, 5];
const c = [8, 9, 10];
const d = 11;

// Write code here
const arr = [0, ...a, 3, ...b, 6, 7, ...c, d];

console.log(arr);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
