// ! 객체 비구조화 할당(destructuring assignment) 구조분해
const user = {
  name: "우빈",
  age: 29,
  hobby: ["축구", "농구"],
};
// const { name, age, hobby } = user;
// console.log(name, age, hobby);

// ! 배열 비구조화 할당 구조분해
const course = ["HTML", "CSS", "JavaScript"];
const [one, two, three] = course;

function getUser({ name, age, hobby }) {
  console.log(name, age, hobby);
}

getUser(user);

// ! Shorthand Property Names
const name = "우빈스";
const age = 29;
const hobby = "코딩";

const user2 = {
  name,
  age,
  hobby,
};

// ! 기본 매개변수값 지정하기.
function addNumber(x, y = 10) {
  console.log(x + y);
}

addNumber(1);

// ! 얉은 복사 spread 문법 => 펼치다.
const user3 = { ...user, hobby: [...user.hobby] };

user3.name = "변경했다.";
user3.hobby[0] = "수업";

// console.log(user);

// ! rest 문법 => 함수의 매개변수에서 많이 사용한다.
// ! 인수의 목록들을 배열로 받아온다.

function rest(...rest) {
  const [동현, 우빈] = rest;
  const { name: 동현스 } = 동현;
  const { name: 우빈스 } = 우빈;
  console.log(동현스, 우빈스);
}

rest({ name: "동현" }, { name: "우빈" });
