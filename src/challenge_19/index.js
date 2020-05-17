/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/


const nums = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};

// Write code here
const sumObjectValues = (numbers) => {
  return Object.values(numbers).reduce((ac, ci) => {
    return typeof ci === 'number' ? ac + ci : ac;
  });
};

console.log(sumObjectValues(nums));
// 42
