// // ! 4. 변수
// console.log(result);
// var result = 20 + 40;
// console.log(result);

// var score;
// score = 80;
// console.log(80);

// // // ! 값의 재할당
// var a = 1;
// var a = 2;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = 1 + 1;

// console.log(c);

// var add = 1;
// var $add = 1;
// var _add = 1;
// // var 1add = 1;
// // var @add = 1;
// // var this = 1;

// // // ! 네이밍 컨벤션
// var firstName = "Lee";
// var FirstName = "Lee";
// var firstname = "Lee";
// var first_naem = "Lee";

// * 6. 데이터 타입
// ! = 원시 타입
// ? = 객체 타입 (참조 타입)

// ! 1) 숫자 타입 = 10 (number)
// ! 2) 문자열 타입 = '우빈' (string)
// ! 3) 불리언 타입 = true, false
// ! 4) undefined 타입 = 변수에 암묵적으로 초기화된 할당 된 값
// ! 5) null 타입 = 값이 없다는 것을 의도적으로 명시할 때 사용하는 값
// ! 6) 심벌 타입 = ES6에서 추가된 7번째 타입
// ? 7) 객체 타입 (참조 타입) = 객체, 함수, 배열 등 위 상위 6가지 타입을 제외한 모든 자바스크립트 타입은 객체 타입이다.

// ? 숫자열
// ! 정수, 소수점, 음수 모두 숫자
var number1 = 10;
var number2 = 10.5;
var number3 = -10;

var number4 = 1.0;
console.log(number4);

// ? 문자열
// ! 작은따옴표, 큰따옴표, 백틱으로 감싸는데 일반적으로는 작은따옴표를 사용한다.
var first = "Lee";
var last = "woobin";
var fullName = `Lee woobin`;

console.log("my name is " + first + last); // 일반적으로 우리가 문자열을 연결할 때 +를 사용한다.

// ? 템플릿 리터럴

// ? 템플릿 리터럴 표현식 삽입
// ! 템플릿 리터럴에서 표현식을 삽입하려면 ``백틱 기호 안에, ${}으로 표현식을 감싼다.
// ^ 1.문제 위의 변수를 이용하여 템플릿 리터럴 방식으로 표현식을 삽입.

// & 1. 문제 답?

// ! 데이터 타입을 확인하기 위해서는 console.log로 참조를 해보면 되는데 타입을 확인하기 위해서는 typeof라는 연산자를 사용

var point;
console.log(typeof point); // ?답

point = 10;
console.log(typeof point); // ?답

point = "Hello";
console.log(typeof point); // ?답

point = true;
console.log(typeof point); // ?답

point = null;
console.log(typeof point); // ?답

point = Symbol();
console.log(typeof point); // ?답

point = {};
console.log(typeof point); // ?답

point = [];
console.log(typeof point); // ?답

point = function () {};
console.log(typeof point); // ?답

// const c = () => {};
// typeof c;
// const arrowC = new c();

// function 함수 타입은 왜 object가 아닌 function을 반환 할까?

// * 7. 연산자
// ! 연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 지수 연산 등을 수행해
// ! 하나의 값을 만든다. 이때 연산의 대상을 피연산자라 한다. 피연산자는 값으로 평가될 수 있는 표현식이어야 한다.
// ! 그리고 피연산자의 조합으로 이뤄진 연산자 표현식도 값으로 평가될 수 있는 표현식이다.

// ? 이항 산술 연산자
// ! + = 덧셈
// ! - = 뺄셈
// ! * = 곱셈
// ! / = 나눗셈
// ! % = 나머지

// ? 단항 산술 연산자 - for문 사용
// ! 단항 산술 연산자는 1개의 피연산자를 산술 연산하여 숫자 값을 만든다.
// ! ++ 증가
// ! -- 감소

// & 예
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// ? 삼항 조건 연산자 => 조건 ? true : false;
let c1 = 20;
let d1 = 10;

const value = c1 < d1 ? "pass" : "fail";
console.log(value);

// ^ 1.문제 삼항 조건 연산자를 if 문으로 변경할 것.

// ? 논리 연산자

// ^ 2.문제 논리합 논리곱 부정.

true || true; // ?
true || false; // ?
false || true; // ?
false || false; // ?

true && true; // ?
true && false; // ?
false && true; // ?
false && false; // ?

!true; // ?
!false; // ?
