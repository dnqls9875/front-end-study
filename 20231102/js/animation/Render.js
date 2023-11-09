export default class Render {
  constructor(count, text) {
    this.count = count;
    this.text = text;
    this.elems = [];
    this.print();
  }

  createElem() {
    for (let i = 0; i < this.count; i++) {
      const li = document.createElement("li");
      li.textContent = this.text;
      this.elems.push(li);
    }
  }

  print() {
    this.createElem();
    const ul = document.querySelector("ul");
    this.elems.forEach((elem) => ul.insertAdjacentElement("beforeend", elem));
  }
}
