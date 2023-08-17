// for(초기화, 조건식, 증감식){

// }

// /*
// * ! if문이 한 줄 일때 중괄호를 생략할 수 있다.
// *
// /

// var x = 1;

// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue;
//   console.log(i);
// }

// for문 작동원리
// 1.변수 선언문
// 2. 조건식
// 3. 코드를 실행
// 4. 증감식

/**
 * ? break
 * break 키워드는 반복문을 탈출한다.
 * ? continue
 * continue 키워드는 한번 건너뛴다.
 *
 */

// while (true) {
//   if (x === 50) {
//     break;
//   }
//   x++;
//   console.log(x);
// }

/**
 *  ? 단축 평가
 *  ! 논리곱 연산자 && 는 앞에가 true 일때 두번째 값을 반환한다.
 *  ! 앞에가 true라면 무조건 뒤에 있는 것을 반환한다.
 *  ! 앞에가 false 라면 앞에 있는 것을 반환한다.
 *
 *
 * ? 논리합 연산자 || 는 앞에가 true면 뒤에 값을+ 실행을 하지 않고, 반환한다.
 * ? 앞에가 false면 뒤에 값을 반환한다.
 *
 */

// console.log("수업" || "웹 과외");
// console.log("" || "웹 과외");

// console.log("수업" && false);
// console.log("html" && "css");
// console.log(0 && true);

/**
 * ? null 병합 연산자
 * ! 0 => false
 * ! "" => false
 */

/**
 * ! 객체
 * ! { } 리터럴을 사용하고, 키와 값 쌍으로 이루어져 있는것이 객체다.
 * ! 프로퍼티와 메서드
 * ! 변경 가능한 값이다.
 */

var user = {
  name: "우빈", // 프로퍼티
  hobby: "foot ball", // 프로퍼티
  getName: function () {}, // 일반적으로 값이 함수면 메서드라고 부른다.
  "name-hobby": "대괄호 표기법",
};

/**
 * !프로퍼티 접근 방법. 2가지.
 * ! 1. 마침표 표기법
 * ! 2. 대괄호 표기법 -> 문자를 넣어줘야 한다.
 *
 */

// console.log(user.name, user.hobby);
// console.log(user["name-hobby"]); // -> 대괄호는 문자를 넣어줘야 한다.

// ! 객체에 프로퍼티 추가 , 수정, 삭제
user.name = "우빈123";
user.nickName = "우핀";

console.log(user.name);

delete user.nickName;
// console.log(user.bobby); // undefined
