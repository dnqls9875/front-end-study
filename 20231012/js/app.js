// const ul = document.querySelector("ul");

// let prevElem;

// const buttonHandler = (event) => {
//   let target = event.target;
//   if (target.nodeName === "UL") return;
//   if (prevElem) prevElem.classList.remove("active");

//   while (target.nodeName !== "LI") {
//     target = target.parentNode;
//   }

//   console.log(target);

//   prevElem = target;
//   target.classList.add("active");
// };

// ul.addEventListener("click", buttonHandler);

// 리펙토링
const buttonList = document.querySelector(".btns");

let prevBtn;

const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

const elementFindList = (target) => {
  while (target.nodeName !== "LI") {
    target = target.parentNode;
  }
  return target;
};

// delegation = 위임
const buttonDelegationHandler = (event) => {
  let target = event.target;

  if (target.nodeName === "UL") return;
  if (prevBtn) removeClass(prevBtn, "active");

  target = elementFindList(target);

  prevBtn = target;
  addClass(target, "active");
};

buttonList.addEventListener("click", buttonDelegationHandler);
