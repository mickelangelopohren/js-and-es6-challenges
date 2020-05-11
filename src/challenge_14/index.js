/* CHALLENGE 14 - Object Destructuring

Create shortPerson() function that will destructure each person object.
Sample result:
{n: 'Mike', c: 'Spain', a: 23, p: 100}

If input object doesn't have postsQuantity field
it should get default value 0.
*/


// var person1 = {
const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
};

// var person2 = {
const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
};

// Write function here
const shortPerson = (person) => {
  const {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = person;

  return {
    n,
    c,
    a,
    p,
  };
};

console.log(shortPerson(person1));
// {n: 'Mike', c: 'Spain', a: 23, p: 100}

console.log(shortPerson(person2));
// {n: 'Alice', c: 'Italy', a: 25, p: 0}
