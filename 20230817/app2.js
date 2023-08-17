/**
 *  ! document.queryselector(css 선택자)
 *
 */

var button = document.querySelector("button");
var countElem = document.querySelector("h1");

/**
 * ! 요소.addEventListner("이벤트 종류" , 실행할 함수)
 *
 */

var count = 0;

console.dir(countElem);

button.addEventListener("click", function () {
  count++;
  countElem.innerText = count;
  console.log(count);
  button.style.backgroundColor = "red";
});
console.dir(button);
