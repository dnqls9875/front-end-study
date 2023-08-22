/**
 * !배율 => Scope
 * ! Easy버전 스코프란 변수의 유효범위를 말한다.
 * ! hard버전 스코프는 식별자를 검색하는 규칙.
 */

/**
 * ! 전역 스코프
 * ! 지역 스코프
 */

// ? var 키워드
// ? var 스코프 : 함수를 기준으로 지역 스코프로 인정한다.

var x = 10;

function foo() {
  var x = 20;
  console.log(x);
}

console.log(x);
