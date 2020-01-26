import { Car } from "./car";

function Playground(mp = document.querySelector("body")) {
  this.mountPoint = mp;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Playground.prototype.render = function() {
  this.el = document.createElement("div");
  this.el.style.border = "1px solid red";
  this.el.style.minHeight = "500px";
  this.el.style.position = "relative";
  this.mountPoint.appendChild(this.el);
};

Playground.prototype.addCar = function(index) {
  const carName = prompt("Enter car name");
  const carSpeed = getRandomArbitrary(200, 5000);
  const finishLineCoord = 450;
  const x = 0;
  const y = 50 * index;
  const finishCallBack = () => {
    console.log("Finished ", carName);
  };
  const car = new Car(
    this.el,
    carName,
    carSpeed,
    x,
    y,
    finishLineCoord,
    finishCallBack
  );
  car.render();
  car.move();
};
Playground.prototype.startGame = function(carsCount = 2) {
  for (let i = 0; i < carsCount; i++) {
    this.addCar(i);
  }
};
export { Playground };
