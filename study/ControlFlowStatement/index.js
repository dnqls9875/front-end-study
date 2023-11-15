// 블록문
{
  var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
  x++;
}
// 함수 선언문
function sum(a, b) {
  return a + b;
}

// ! 조건문
var num = 2;
var kind;

// if문
if (num > 0) {
  kind = "양수";
}
console.log(kind);

// if...else문
if (num < 0) {
  kind = "양수";
} else {
  kind = "음수";
}
console.log(kind);

// if...else if문
if (num < 0) {
  kind = "양수"; // num 2 0보다 크기 때문에 false
} else if (num < 0) {
  kind = "음수"; // 여기서도 num 2 0보다 크기 때문에 false
} else {
  kind = "영";
}
console.log(kind); // 영

var x = 2;
var result;

if (x % 2) {
  result = "홀수";
} else {
  result = "짝수";
}
console.log(result); // 짝수

var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수

// 세가지 경우
var num = 2;
var kind = num ? (num > 0 ? "양수" : "음수") : "영";
console.log(kind);

// switch 문
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
  case 2:
    monthName = "February";
  case 3:
    monthName = "March";
  case 4:
    monthName = "April";
  case 5:
    monthName = "May";
  case 6:
    monthName = "June";
  case 7:
    monthName = "July";
  case 8:
    monthName = "August";
  case 9:
    monthName = "September";
  case 10:
    monthName = "October";
  case 11:
    monthName = "November";
  case 12:
    monthName = "December";
  default:
    monthName = "default Month";
}

console.log(monthName);

var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "default Month";
}
console.log(monthName);

var year = 2000;
var month = 4;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;

  case 2:
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}

console.log(days);

// 반복문

// for문

for (let i = 0; i < 2; i++) {
  console.log(i);
}

for (let i = 1; i >= 0; i--) {
  console.log(i);
}

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 8) console.log(`[${i},${j}]`);
  }
}

// while문
var count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// 인덱스 검사 코드
var string = "Hello World";
var search = "l";
var index;

for (let i = 0; string.length; i++) {
  if (string[i] === search) {
    index = i;
    break;
  }
}
console.log(index);

// 숫자 세는 코드
var string = "Hello World";
var search = "l";
var count = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++;
  }
}
console.log(count);
