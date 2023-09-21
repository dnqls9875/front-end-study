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
console.log(
  numbers.sort(function (x, y) {
    return x - y;
  })
);

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

// ! filter
// ! 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// ! 첫번째 매개변수: 반복하고 있는 각각의 요소.
// ! 두번째 매개변수: index
// ! 세번째 매개변수 사용하고 있는 배열

// const numberArr2 = [0, 0, 0, 1, 1, 1];

// console.log(numberArr2.filter((number) => number === 0));

const users = [
  {
    id: 0,
    name: "동현",
    age: 28,
  },
  {
    id: 1,
    name: "우빈",
    age: 15,
  },
  {
    id: 2,
    name: "쁘니",
    age: 27,
  },
  {
    id: 3,
    name: "리온",
    age: 28,
  },
  {
    id: 4,
    name: "수지",
    age: 26,
  },
];

console.log(users.filter((user) => user.age !== 28));

// ! Reduce
// ! 하나의 결과값을 만들어 반환한다. 기존 배열을 바꾸지 않는다.
// ! 첫번째 인수 => 콜백함수
// ! 두번째 인사 => 초기값

// ? 첫번째 매개변수 => 누적값 Acc
// ? 두번째 매개변수 => 현재값
// ? 세번째 매개변수 => 인덱스
// ? 네번째 매개변수 => reduce를 호출하고 있는 배열

const arrNumber2 = [1, 2, 3, 4, 5];

console.log(arrNumber2.reduce((acc, currentValue) => (acc += currentValue), 0));

// & acc = 0, currentValue = 1 || acc = 0 + 1
// & acc = 1, currentValue = 2 || acc = 1 + 2
// & acc = 3, currentValue = 3 || acc = 3 + 3
// & acc = 6, currentValue = 4 || acc = 6 + 4
// & acc = 10, currentValue = 5 || acc = 10 + 5

// ! find
// ! 기존 배열을 변경하지 않는다.
// ! 콜백함수의 반환값이 true인 첫번째를 반환한다. true가 없으면 undefined를 반환한다.

console.log(users.find((user) => user.id === 0));

// ! findIndex
// ! 기존 배열을 반환하지 않는다.
// ! 콜백함수의 반환값이 true인 첫번째 요소의 인덱스 번호를 반환한다. ture인 요소가 없으면 -1을 반환한다.

console.log(users.findIndex((user) => user.name === "우빈"));
console.log(users[users.findIndex((user) => user.name === "우빈")]);
