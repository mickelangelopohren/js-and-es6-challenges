/* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.
*/


// var a, b, c;
let a = 0;
let b = 0;
let c = 0;

// var arr = [1, 2, 3, 4, 5, 6, 7];
const arr = [1, 2, 3, 4, 5, 6, 7];

// Write code here
[a, b, ...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
