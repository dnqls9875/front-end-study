function MouseMoveEffect(count, text) {
  this.count = count;
  this.text = text;
  this.coord = { x: 0, y: 0 };
  this.elems = [];
  this.print();
  this.attach();
}

MouseMoveEffect.prototype.createElem = function () {
  for (let i = 0; i < this.count; i++) {
    const li = document.createElement("li");
    li.textContent = this.text;
    this.elems.push(li);
  }
};

MouseMoveEffect.prototype.print = function () {
  this.createElem();
  const ul = document.querySelector("ul");
  this.elems.forEach((elem) => ul.insertAdjacentElement("beforeend", elem));
};

MouseMoveEffect.prototype.moveHandler = function (event) {
  this.coord.x = (event.clientX / innerWidth) * 2 - 1;
  this.coord.y = (event.clientY / innerHeight) * 2 - 1;
  this.animation();
};

MouseMoveEffect.prototype.attach = function () {
  window.addEventListener("mousemove", this.moveHandler.bind(this));
};

MouseMoveEffect.prototype.animation = function () {
  this.elems.forEach(this.calculateEffect.bind(this));
};

MouseMoveEffect.prototype.calculateEffect = function (elem, index) {
  elem.style.transform = `translate(-${50 - this.coord.x * index * 5}%, -${
    50 - this.coord.y * index * 10
  }%)`;
};

const render = new MouseMoveEffect(10, "JavaScript");
