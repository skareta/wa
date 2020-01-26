import "./lesson_14.css";

// function User(name) {
//   this.name = name;
// }
// User.prototype.greet = function() {
//   console.log("Hello " + this.name);
// };
// const user = new User("Sergii");
// const user2 = new User("John");

// user.greet();
// user2.greet();

// console.log(user);
// console.log(user2);

function User(x, y) {
  this.firstName = x;
  this.secondName = y;
}

User.prototype.fullName = function() {
  console.log(this.firstName + ", " + this.secondName);
};

const user1 = new User("Sergii", "Kareta");
const user2 = new User("John", "Dou");

user2.fullName();
user1.fullName();
