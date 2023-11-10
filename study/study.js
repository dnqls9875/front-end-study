// ^ 1. 변수
// * 1-1 변수
// ! 하나의 값을 저장 하기 위해 확보된 메모리 공간 그 메모리 공간을 식별 하기 위해 붙힌 이름
// ! 식별자(변수 이름)를 명시적으로 의미 있게 네이밍 하는 것이 가독성을 높이는 부수적인 효과를 가진다.

// * 1-2 식별자
// ! 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름

// var resultValue = 30;
// console.log(resultValue);

// var result = 10 + 20;

// var a = `sfadsfsdf`;
// console.log(a);
// // console.log(typeof a);

// var first = "Lee";
// var last = "Woo Bin";

// console.log("my name is" + " " + first + " " + last);
// console.log(`my name is ${first} ${last}`);

// var foo = false;
// console.log(foo);

// 조건 ? 값1 : 값2;

// let c = 20;
// let d = 10;

// const value = c < d ? "pass" : "fail";
// console.log(value);

// if (c > d) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }

// let value1 = 1;
// let value2 = 2;
// let value3 = 3;
// let value4 = 4;

// if (value1 < value2 && value3 > value4) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }

// for (let i = 1; i <= 6; i++) {
//   for (let j = 1; j <= 6; j++) {
//     if (i + j === 12) {
//       console.log(`[${i}, ${j}]`);
//     }
//   }
// }

// var count = 0;
// do {
//   console.log(count);
//   count++;
// } while (count < 3);

// foo: {
//   console.log(1);
//   console.log(2);
//   break foo;
//   console.log(3);
// }

var string = "Hello Wolrd";
var search = "l";
var count = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++;
  }
}
console.log(count);

for (let i = 1; i < 10; i++) {
  if (i === 3) break;
  console.log(i);
}

// var x = "a";

// var str = x.toString();
// console.log(typeof Number(str), str);

// console.log(typeof x, x);

var x = 1;

var str = x + "";
console.log(typeof str, str);

console.log(typeof x, x);

function isFalsy(v) {
  return !v;
}
console.log(isFalsy(false));
console.log(isFalsy(0));
console.log(isFalsy(1));
console.log(isFalsy(""));
console.log(isFalsy(NaN));
console.log(isFalsy(undefined));
console.log(isFalsy(null));