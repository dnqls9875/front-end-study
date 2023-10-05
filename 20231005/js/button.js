/**
 * ! 버튼을 클릭하면 배경색이 바뀌어야 한다.
 * ! 이전에 누른 버튼의 배경색이 사라져야한다.
 */

const buttons = document.querySelectorAll("button"); // NodeList 유사배열

const removeClass = (element, className) => element.classList.remove(className);
const addClass = (element, className) => element.classList.add(className);

const btnHandler = (event) => {
  buttons.forEach((button) => removeClass(button, "active"));
  addClass(event.currentTarget, "active");
};

buttons.forEach((element) => element.addEventListener("click", btnHandler));

// const removeClass = (element, className) => element.classList.remove(className);
// const addClass = (element, className) => element.classList.add(className);

// const btnHandler = (event) => {
//   buttons.forEach((button) => removeClass(button, "active"));
//   addClass(event.currentTarget, "active");
// };

// buttons.forEach((element) => element.addEventListener("click", btnHandler));
