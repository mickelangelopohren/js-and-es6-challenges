/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/


// var a = [1, 2, 3];
const a = [1, 2, 3];

// var b;

// const b = a; // Dosen't work, same pointer
const b = [...a];

// Copy array here

b.push('newElement');

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
