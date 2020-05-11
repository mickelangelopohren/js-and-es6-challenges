/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/


let vowelsCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const str = 'Today is best day of my life';

// Write code here
for (const char of str) {
  if (vowels.includes(char)) {
    vowelsCount += 1;
  }
}

console.log(vowelsCount);
// 8
