// ! for in 문
// ! 객체를 반복할 때 사용한다.

const user = {
  name: "WooBin",
  age: 27,
  hobby: ["footBall", "Tennis"],
};

// ! 대괄호 표기법
// ! 마침표 표기법

for (const key in user) {
  console.log(key, user[key]);
}

console.log("name" in user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
