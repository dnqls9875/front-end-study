// // ! Class

// // ! 클래스와 생성자 함수 차이
// // ! 클래스는 상속이라는 개념이 있다.

// class DongClass {
//   constructor() {
//     this.tutor = "동현";
//     this.course = ["HTML", "CSS", "JavaScript"];
//   }
// }

// // ! extends 상속
// // ! 상속 받을 땐 super()를 반드시 써줘야 한다.

// class User extends DongClass {
//   constructor(name, age) {
//     super();
//     this.name = name;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const user1 = new User("우빈", 29);
// const user2 = new User("지선", 28);

// console.log(user1.tutor);
// console.log(user1.getName());

import MouseEffect from "./animation/MouseEffect.js";

const render = new MouseEffect();
