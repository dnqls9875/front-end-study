/**
 * ! 이벤트 객체
 * ! 이벤트 핸들러 함수에 첫번째 매개변수에는 이벤트 객체가 온다.
 */

// const button = document.addEventListener("click", (event) => {
//   console.log(event);
// });

/**
 * ! 이벤트 전파
 * ! 버블링 => 이벤트가 하위요소에서 상위요소로 전파되는 것을 말한다.
 * ! 캡쳐링 => 이벤트가 상위요소에서 하위요소로 전파되는 것을 말한다.
 * ! 기본값은 버블링이다. false
 */

const main = document.querySelector("main");
const section = document.querySelector("section");
const div = document.querySelector("div");

const array = [main, section, div];

array.forEach((elem) =>
  elem.addEventListener(
    "click",
    () => {
      console.log(elem.nodeName);
    },
    true // 기본값은 false
  )
);
