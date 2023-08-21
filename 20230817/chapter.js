/**
 * ! 반복문
 * ! 반복문 종류는 for문과 while문 크게 2가지가 있어요.
 * ! for문과 while문의 차이는 반복횟수를 아느냐 모르냐의 차이 입니다.
 */

// ? 반복횟수를 알 때에는 for문을 사용합니다.
// for(let i = 0; i < 10; i++){
//   console.log(i)
// }

// ? 반복횟수를 모를때에는 while문을 사용하고 반드시 조건문으로 탈출 해주어야 합니다.
// ? ❗️ 조건문을 탈출하지 않으면 브라우저가 먹통됩니다. 이거는 직접 한번 해보세요!
// var count = 0;
// while(true){
//   count++
//   if(count === 1000){
//     break
//   }
// }

/**
 * ! 단축평가
 * ! 단축평가란 표현식을 평가하는 도중에 평가결과과 확정되면 나머지 평가과정을 생략하는것을 말한다.
 * ! && 연산자는 앞에 피연산자가 Truthy인경우 뒤에 있는 피연산자를 반환하고, 앞에 피연산자가 Falsy인 경우 앞에 피연산자를 반환한다.
 * ! || 연산자는 앞에 피연산자가 Truthy인경우 앞에 있는 피연산자를 반환하고, 앞에 피연산자가 Falsy인 경우 뒤에 피연산자를 반환한다.
 * ? if문 대신에 사용할 수 있다.
 */

console.log("문자열" && false) // false
console.log("문자열" || false) // "문자열"

/**
 * ! 옵셔널 체이닝 연산자
 * ! 객체에서 주로 활용되고 좌항의 피연산자가 null 또는 undefined인 경우에 undefined가 반환되고 그렇지 않으면 프로퍼티를 참조한다.
 * ! 
 */

var user = {
  name: "dongs",
  age: 13
}

console.log(user.name)
console.log(user.names?.age) // & names는 user 객체에 없다. 즉 undefined인데 여기서 객체처럼 마침표 표기법을 통해 참조하려고하면 에러가 난다.
// & 즉 객체가 아닌데 프로퍼티에 접근 하려고하면 에러가 발생하니 옵셔널 체이닝 연산자를 활용해 에러를 방지할 수 있다!

/** 
 * ! null 병합 연산자
 * ! 왼쪽의 피연산자가 null이나 undefined인 경우에만 오른쪽의 값을 반환한다.
 */

console.log(null ?? "문자열 반환") // 문자열 반환
console.log(undefined ?? "문자열 반환2") // 문자열 반환2

// & 단축평가에 경우는 falsy값 모두 적용되지만 null 병합 연산자는 null이나 undefined인 경우에만 작동하는게 차이점이 있다.
console.log(null || "문자열 반환3") // 문자열 반환3
console.log(0 || "문자열 반환4") // 문자열 반환4

/**
 * ! 객체
 * ! 객체는 키와 값 쌍으로 이루어져있는것이 특징이고, 여러개의 값이 들어갈 수 있어요!
 * ! 객체는 변경 가능한 값이다.
 * ? 객체의 키값이 함수가 아니라면 프로퍼티라고 한다.
 * ? 객체의 키값이 함수라면 메서드라고 부른다.
 */

var obj = {
  name: "dongs", // 프로퍼티
  age: 12, // 프로퍼티
  getName: function(){ // 메서드
    console.log(this.name)
  }
}

/**
 * ! 객체에 프로퍼티 접근하는 방법 2가지!
 * ! 일반적으로 객체에 프로퍼티에 접근할 때에는 .을 사용해서 접근한다.
 * ! 마침표 표기법
 * ! 대괄호 표기법
 */
console.log(user.name) // dongs
console.log(user.age) // 12
console.log(user.nnnnname) // 없는 프로퍼티를 사용하면 에러가 아닌 undefined가 나온다.
console.log(user["name"]) // 대괄호에 따옴표가 없으면 변수로 인식하니 매우 주의해야한다!
console.log(user["age"])

/**
 * ! 프로퍼티를 동적으로 추가, 수정, 삭제하기
 */

obj.hobby = "Foot Ball" // 객체에 없는 프로퍼티를 추가하는 방법.
obj.age = 22 // 객체에 있는 프로퍼티를 수정
delete obj.age // 객체에 obj.age 삭제하기


/**
 * & 객체는 쉽게 생각해서 하나의 데이터에 여러개의 값이 들어갈 수 있다라고 생각해주시고, 키와 값 쌍으로 이루어져있는 형태라고 외워주세요!
 */
