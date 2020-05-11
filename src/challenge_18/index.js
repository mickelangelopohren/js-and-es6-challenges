/* CHALLENGE 18 - Classes

Rewrite code below using ES6 Classes
*/


// var Fruit = function(title, price) {
//   this.title = title;
//   this.price = price;
// };
//
// Fruit.prototype.priceInfo = function() {
//   return `Price of one ${this.title} is \
// ${this.price}$`;
// };

class Fruit {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  priceInfo() {
    return `Price of one ${this.title} is ${this.price}$`;
  }
}

const apple = new Fruit('Apple', 2);
console.log(apple.priceInfo());
// Price of one Apple is 2$

const orange = new Fruit('Orange', 3);
console.log(orange.priceInfo());
// Price of one Orange is 3$
