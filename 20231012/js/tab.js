// const ul = document.querySelector("ul");

// let prevBtn;

// const buttonHandler = (event) => {
//   let target = event.target;
//   if (target.nodeName === "UL") return;
//   if (prevBtn) prevBtn.classList.remove("active");

//   while (target.nodeName !== "LI") {
//     target = target.parentNode;
//   }

//   console.log(target);

//   prevBtn = target;
//   target.classList.add("active");
// };

// ul.addEventListener("click", buttonHandler);

// 리펙토링
const buttonList = document.querySelector("ul");

let prevBtn = document.querySelector(".btns li");
let prevContent = document.querySelector(".tabs li");

const addClass = (elementArray, className) =>
  elementArray.forEach((element) => element.classList.add(className));
const removeClass = (elementArray, className) =>
  elementArray.forEach((element) => element.classList.remove(className));

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
  if (prevBtn && prevContent) removeClass([prevBtn, prevContent], "active");

  target = elementFindList(target);

  // data-tab
  const content = document.querySelector(`.${target.dataset.tab}`);

  prevContent = content;
  prevBtn = target;

  addClass([content, target], "active");
};

buttonList.addEventListener("click", buttonDelegationHandler);
