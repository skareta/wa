function Car(mountPoint, title, speed, x, y, finishLine, finishCb) {
  this.title = title;
  this.mountPoint = mountPoint;
  this.speed = speed;
  this.finishLine = finishLine;
  this.finishCb = finishCb;
  this.x = x;
  this.y = y;
}

Car.prototype.render = function() {
  this.element = document.createElement("div");
  this.element.textContent = this.title;
  this.element.style.backgroundColor = "white";
  //   this.element.style.backgroundImage =
  //     "../common/images/simple-car-drawing-1.jpeg";
  this.element.style.border = "1px solid green";
  this.element.style.position = "absolute";
  this.element.style.left = this.x + "px";
  this.element.style.top = this.y + "px";
  this.element.style.minWidth = "50px";
  this.element.style.height = "50px";

  this.mountPoint.appendChild(this.element);
};

Car.prototype.move = function() {
  this.intId = setInterval(() => {
    const coordX = parseInt(this.element.style.left);
    if (coordX < this.finishLine) {
      this.element.style.left = coordX + 10 + "px";
    } else {
      clearInterval(this.intId);
      this.finishCb();
    }
  }, this.speed);
};
export { Car };
