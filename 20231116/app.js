const slideBtn = document.querySelectorAll("button");
const slide = document.querySelector("ul");

// const prevBtnHandler = () => {
//   slide.style.transform = `translateX(0)`;
// };

// const nextBtnHandler = () => {
//   slide.style.transform = `translateX(-100%)`;
// };

const btnHandler = () => {
  slide.style.transform = `translateX(-100%)`;
};
console.log(slide);
console.log(slideBtn);

// slideBtn[0].addEventListener("click", prevBtnHandler);
slideBtn[1].addEventListener("click", btnHandler);

// prevBtn 왼쪽으로 100%
// nextBtn 오른쪽 으로 100%
