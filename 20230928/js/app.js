// 콜백함수에 관련된 것들 다 찾아보기

/**
 * ! 자바스크립트 HTML 요소를 불러오기
 */

const button = document.querySelector("button");

// ! addEventListener (이벤트종류, 이벤트를 호출할 함수, 캡쳐링 여부)
// ! 캡쳐링 여부에는 기본값이 false다

// const btnClickHandler = () => console.log("Click Me");

// button.addEventListener("click", btnClickHandler);

/**
 * ! 1. 카운터 증가하는 버튼
 * ! 2. 카운터 감소하는 버튼
 * ! 3. 리셋버튼
 * ! 4. 카운터 기능이 작동 안되게
 */

/**
 * ! 카운터 증가
 * ! 카운터 감소
 * ! 카운터 초기화
 * ! 카운터 기능 중지
 */

const addBtn = document.querySelector(".btn-add");
const minusBtn = document.querySelector(".btn-minus");
const resetBtn = document.querySelector(".btn-reset");
const stopBtn = document.querySelector(".btn-stop");
const counterElem = document.querySelector("h1>b");

let counter = 0;
const printCounter = () => (counterElem.textContent = counter);

// const addBtnHandler = () => {
//   counter++;
//   printCounter();
// };
// const minusBtnHandler = () => {
//   counter <= 0 ? (counter = 0) : counter--;
//   //   if (counter < 0) {
//   //     counter = 0;
//   //   }

//   printCounter();
//   //   counter를 1씩 감소한다.
//   //   counter 0보다 작으면 counter 0이다.
//   //   counter를 출력한다.
// };
// const resetBtnHandler = () => {
//   counter = 0;
//   printCounter();
// };

const 함수 = (callback) => {
  callback();
  printCounter();
};

const stopBtnHandler = () => confirm("정말 중지 하시겠습니까?") && 이벤트제거();

const btns = [
  {
    elem: addBtn,
    fn: () => 함수(() => counter++),
  },
  {
    elem: minusBtn,
    fn: () => 함수(() => (counter <= 0 ? (counter = 0) : counter--)),
  },
  {
    elem: resetBtn,
    fn: () => 함수(() => (counter = 0)),
  },
  {
    elem: stopBtn,
    fn: stopBtnHandler,
  },
];

function 이벤트제거() {
  btns.forEach((btn) => btn.elem.removeEventListener("click", btn.fn));
  btns.forEach((btn) => btn.elem.setAttribute("disabled", true));
}

// const stopBtnHandler = () => {
//   const isCheck = confirm("정말 중지 하시겠습니까?");
//   if (isCheck) {
//     btns.forEach((btn) => btn.elem.removeEventListener("click", btn.fn));
//     btns.forEach((btn) => btn.elem.setAttribute("disalbed", true));
//     // addBtn.removeEventListener("click", addBtnHandler);
//     // minusBtn.removeEventListener("click", minusBtnHandler);
//     // resetBtn.removeEventListener("click", resetBtnHandler);

//     // addBtn.setAttribute("disabled", true);
//     // minusBtn.setAttribute("disabled", true);
//     // resetBtn.setAttribute("disabled", true);
//   }
// };

btns.forEach((btn) => btn.elem.addEventListener("click", btn.fn));

// addBtn.addEventListener("click", addBtnHandler);
// minusBtn.addEventListener("click", minusBtnHandler);
// resetBtn.addEventListener("click", resetBtnHandler);
// stopBtn.addEventListener("click", stopBtnHandler);
