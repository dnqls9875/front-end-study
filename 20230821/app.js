// ! 연습

// let button = document.querySelector("button");
// let countElem = document.querySelector("h1");

// let count = 0;

// button.addEventListener("click", function () {
//   count++;
//   console.log(count);
//   countElem.innerText = count;
//   this.style.backgroundColor = "red";
// });

// * 예제 연습

// ? 조건식
// ! for (변수 선언 할당(초기화); 조건식; 증감식)
// ! i = 반복을 의미하는 iteration의 줄임말

// ? for문
// * for (var i = 0; i < 3; i++) {
// * console.log(i);
// }

// * var number = 4;
// * for (var i = 0; i < number; i++) {
// * console.log(i);
// }

// for (var i = 2; i >= 0; i--) {
//   console.log(i);
// }

for (var i = 3; i <= 9; i++) {
  for (var j = 3; j <= 9; j++) {
    if (i + j === 9) console.log(`[${i}, ${j}]`);
  }
}

// ? while문

// let count = 0;

// while (true) {
//   console.log(count);
//   count++;
//   // count가 3이면 코드 블록을 탈출한다.
//   if (count === 3) break;
// }

// let string = "helloworld";
// let search = "d";
// let index;

// for (var i = 0; i < string.length; i++) {
//   if (string[i] === search) {
//     index = i;
//     break;
//   }
// }
// console.log(index);

// var count = 0;
// while (true) {
//   count++;
//   if (count === 1000) {
//     break;
//   }
//   console.log(count);
// }

// var user = {
//   name: "dongs",
//   age: 13,
// };

// console.log(user.name);
// console.log(user.names?.age);

// var obj = {
//   name: "woobin",
//   age: 27,
//   hobby: "soccer",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// obj.hobby = "basketBall";
// obj.name = "우빈";
// delete obj.age;

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.hobby);
// console.log(obj.food);

// var user = {
//   name: "dongs",
//   age: 34,
// };

// console.log(user);

// let x = 1,
//   y = 2;

// const obj = { x, y };
// console.log(obj);

// for (var i = 1; i <= 6; i++) {
//   for (var j = 1; j <= 6; j++) {
//     if (i + j === 6) console.log(`${i}, ${j}`);
//   }
// }

// var person = {
//   name: "lee",
//   address: "YANG JOO",
// };

// person.name = "moon";
// person.age = 29;
// delete person.address;

// console.log(person);

// let user = {
//   name: "leewoobin",
//   age: 28,
//   marry: "married",
//   hobby: "WatchingMovie",
// };

// user.name = "sohyeon";
// user.age = 29;
// user.marry = "NotMarried";
// user.hobby = "makeCoffee";

// console.log(user);
