/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/


const mult = ({ x, y, z }) => {
  return x * y * z;
};


// var obj = {
const obj = {
  x: 5,
  y: 20,
  // z: 3
  z: 3,
};

// Write mult() function here

console.log(mult(obj));
// 300
