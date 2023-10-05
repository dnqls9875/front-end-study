// ! chobo의 콜백함수
// ? 정의 : 함수에 파라미터로 들어가는 함수
// ? 용도 : 순차적으로 실행하고 싶을 때 사용

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

// 동기
function printImmediately(print) {
  print();
}
printImmediately(() => {
  console.log("hello");
});

// 비동기
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);
