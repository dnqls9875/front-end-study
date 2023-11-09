import Render from "./Render.js";

export default class MouseEffect extends Render {
  constructor() {
    super(10, "JavaScript");
    this.coord = { x: 0, y: 0 };
    this.attach();
  }

  attach() {
    window.addEventListener("mousemove", this.moveHandler.bind(this));
  }

  moveHandler(event) {
    this.coord.x = (event.clientX / innerWidth) * 2 - 1;
    this.coord.y = (event.clientY / innerHeight) * 2 - 1;
    this.animation();
  }

  animation() {
    this.elems.forEach(this.calculateEffect.bind(this));
  }

  calculateEffect(elem, index) {
    elem.style.transform = `translate(-${50 - this.coord.x * index * 5}%, -${
      50 - this.coord.y * index * 10
    }%)`;
  }
}
