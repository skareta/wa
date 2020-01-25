import "./lesson_11.scss";

const colors = ["red", "green", "aqua", "magenta"];
const randomIndex = Math.floor(Math.random() * colors.length);
const color = colors[randomIndex];
console.log(color);
const words = ["Hello word", "test", "join", "test", "DEPRICATED"];

const numbersOfWords = [];
for (let i = 0; i < words.length; i++) {
  numbersOfWords.push(words[i].length);
}
console.log("New = [" + numbersOfWords + "]");

let word = "";
for (let i = 0; i < words.length; i++) {
  if (word.length <= words[i].length) {
    word = words[i];
  }
}
console.log(word);

const numbers = [0, 12, 77, 24, 34, 56, 76, 2, 4, 3, 77];
let maxNumber = 0;
let counter = 0;
for (let i = 0; i < numbers.length; i++) {
  if (maxNumber <= numbers[i]) {
    if (maxNumber === numbers[i]) {
      counter++;
    }
    maxNumber = numbers[i];
  }
}
console.log(maxNumber);
console.log("Number of max numbers is " + counter);

const product = { name: "iPhone", price: 900, id: 1 };
console.log(product.name);

const shoppingCart = [
  { name: "iPhone", price: 900, id: 1 },
  { name: "Meizu", price: 800, id: 2 },
  { name: "Samsung", price: 900, id: 3 },
  { name: "Lenovo", price: 700, id: 4 },
  { name: "MacBook Air", price: 2600, id: 5 },
  { name: "MacBook Pro", price: 3000, id: 6 }
];

const newCart = [];
for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i].price < 2500) {
    newCart.push(shoppingCart[i]);
  }
}
console.log(newCart);

let totalPrice = 0;

for (let i = 0; i < shoppingCart.length; i++) {
  totalPrice += shoppingCart[i].price;
}
console.log(totalPrice);
