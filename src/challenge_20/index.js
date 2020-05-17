/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/


const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
const sumPlusMinus = (numbers) => {
  return numbers.reduce((ac, cn) => ({
    plus: cn > 0 ? ac.plus + cn : ac.plus,
    minus: cn < 0 ? ac.minus + cn : ac.minus,
  }),
  { plus: 0, minus: 0 });
};

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
