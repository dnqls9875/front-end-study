// ! 배열 메서드

// ! 1. 기존 배열을 수정하느 메서드
// ! 2. 기존 배열을 수정하는 것이 아닌 , 새로운 배열을 만들어 반환하는 메서드 -> 리액트에서 사용하는 것들이 다 2번에 속한다.
// ! 얕은복사, 깊은복사
// ! 리액트에선 불변성(변하지 않는 값)을 지켜줘야 하기 때문

// const numberArr = [1, 2, 3, 4, 5];

// // ! numberArr [1,5]
// numberArr.splice(1, 3);
// numberArr.splice(1, 1, 2, 3, 4, 5);
// console.log(numberArr);

// console.log(numberArr.slice(1, 3));

// ! join 배열을 문자열로 반환.
const stringArr = ["HTML", "CSS", "JS", "React"];
console.log(stringArr.join(" "));
// console.log(stringArr.reverse());

// 0,1,2,3
// 3,2,1,0

let arr = [];
for (let i = stringArr.length - 1; i >= 0; i--) {
  arr.push(stringArr[i]);
}
console.log(stringArr);

// ! includes
// ! 배열에 해당하는 요소가 있으면  true 없으면 false
console.log(stringArr.includes("CSS"));

// ! sort
// ! 숫자 정렬
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = Math.floor(Math.random() * 100);
}
// console.log(
//   numbers.sort(function (x, y) {
//     return x - y;
//   })
// );

// ! 첫번째 매개변수: 반복하고 있는 각각의 요소.
// ! 두번째 매개변수: index
// ! 세번째 매개변수 사용하고 있는 배열
// ! forEach는 항상 반환하는 값이 없다. undefined다.

const number = ["a", "b", "c"];
number.forEach((element, idx, arr) => console.log(element, idx, arr));

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

// ! map
// ! map은 새로운 배열을 반환하고, 새로운 배열에 수정할 수 있다.
// ! 첫번째 매개변수: 반복하고 있는 각각의 요소.
// ! 두번째 매개변수: index
// ! 세번째 매개변수 사용하고 있는 배열

const str = ["HTML", "CSS", "JS"];
const newStr = str.map((element) => `동현교육-${element}`);
console.log(newStr);
